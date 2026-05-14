import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, MicOff, Send, X, Bot } from 'lucide-react'
import { AvatarCharacter, type AvatarStatus } from './AvatarCharacter'
import { useAudioAmplitude } from './useAudioAmplitude'
import { KAI_KNOWLEDGE_BASE } from './kaiKnowledge'

// ─── KAI system prompt ────────────────────────────────────────────────────────

const SYSTEM_PERSONA = `You are KAI, the AI advisor for Khaldun Systems — a decision intelligence company. Khaldun Systems improves how business leaders make decisions — not automation, not data dashboards, but the quality of decisions themselves.

The primary CTA is the AI Plan — a 5-question guided assessment at /ai-plan that recommends which systems and applications fit a business.

Rules for your answers:
- 2–3 sentences max. Be concise and direct.
- Frame everything around decisions, not data or automation.
- Never use jargon. Sound confident, not salesy.
- When asked about a specific product, industry, sector, or founder — use the knowledge base below as the source of truth. If something is not in the knowledge base, say so honestly rather than inventing details.
- If asked something off-topic, redirect politely to how Khaldun can help with decisions.`

const SYSTEM_PROMPT = `${SYSTEM_PERSONA}

KNOWLEDGE BASE
${KAI_KNOWLEDGE_BASE}`

// ─── OpenAI helpers ───────────────────────────────────────────────────────────

interface Message {
  role: 'user' | 'assistant'
  content: string
}

async function fetchChatResponse(messages: Message[], apiKey: string): Promise<string> {
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 130,
      temperature: 0.7,
    }),
  })
  if (!res.ok) throw new Error(`Chat error ${res.status}`)
  const data = await res.json() as { choices: { message: { content: string } }[] }
  return data.choices[0].message.content
}

async function fetchSpeech(text: string, apiKey: string): Promise<ArrayBuffer> {
  const res = await fetch('https://api.openai.com/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ model: 'tts-1', input: text, voice: 'nova' }),
  })
  if (!res.ok) throw new Error(`TTS error ${res.status}`)
  return res.arrayBuffer()
}

async function fetchTranscription(blob: Blob, apiKey: string): Promise<string> {
  const form = new FormData()
  form.append('file', blob, 'recording.webm')
  form.append('model', 'whisper-1')
  const res = await fetch('https://api.openai.com/v1/audio/transcriptions', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${apiKey}` },
    body: form,
  })
  if (!res.ok) throw new Error(`Whisper error ${res.status}`)
  const data = await res.json() as { text: string }
  return data.text
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props {
  apiKey?: string
}

const STATUS_LABEL: Record<AvatarStatus, string> = {
  idle:      'Ask me anything',
  listening: 'Listening…',
  thinking:  'Thinking…',
  speaking:  'Speaking…',
}

export function AvatarWidget({ apiKey }: Props) {
  // Resolve API key — prop overrides env var
  // NOTE: for production move these API calls behind a serverless function
  // so the key is never exposed in the browser bundle.
  const resolvedKey = apiKey ?? (import.meta.env.VITE_OPENAI_API_KEY as string | undefined) ?? ''

  const [isOpen,      setIsOpen]      = useState(false)
  const [status,      setStatus]      = useState<AvatarStatus>('idle')
  const [input,       setInput]       = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [error,       setError]       = useState('')

  const recorderRef = useRef<MediaRecorder | null>(null)
  const chunksRef   = useRef<Blob[]>([])
  const historyRef  = useRef<Message[]>([])

  const { amplitude, connectStream, connectElement, disconnect } = useAudioAmplitude()

  function pushMessages(next: Message[]) {
    historyRef.current = next
  }

  async function runConversation(userText: string) {
    const trimmed = userText.trim()
    if (!trimmed || !resolvedKey) return

    setError('')
    setInput('')

    const userMsg: Message = { role: 'user', content: trimmed }
    const withUser = [...historyRef.current, userMsg]
    pushMessages(withUser)
    setStatus('thinking')

    try {
      const reply = await fetchChatResponse(withUser, resolvedKey)
      pushMessages([...withUser, { role: 'assistant', content: reply }])

      setStatus('speaking')
      const buf = await fetchSpeech(reply, resolvedKey)
      const url = URL.createObjectURL(new Blob([buf], { type: 'audio/mpeg' }))
      const audio = new Audio(url)
      connectElement(audio)
      audio.onended = () => {
        disconnect()
        URL.revokeObjectURL(url)
        setStatus('idle')
      }
      await audio.play()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
      setStatus('idle')
    }
  }

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      connectStream(stream)
      chunksRef.current = []
      recorderRef.current = new MediaRecorder(stream)
      recorderRef.current.ondataavailable = (e) => chunksRef.current.push(e.data)
      recorderRef.current.start()
      setIsRecording(true)
      setStatus('listening')
    } catch {
      setError('Microphone access denied')
    }
  }

  async function stopRecording() {
    if (!recorderRef.current) return
    setIsRecording(false)
    setStatus('thinking')
    disconnect()

    const blob = await new Promise<Blob>((resolve) => {
      recorderRef.current!.onstop = () =>
        resolve(new Blob(chunksRef.current, { type: 'audio/webm' }))
      recorderRef.current!.stop()
      recorderRef.current!.stream.getTracks().forEach((t) => t.stop())
    })

    try {
      const text = await fetchTranscription(blob, resolvedKey)
      if (text.trim()) {
        await runConversation(text)
      } else {
        setStatus('idle')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Transcription failed')
      setStatus('idle')
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      void runConversation(input)
    }
  }

  const busy = status !== 'idle'

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* ── Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 14, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{    opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-80 rounded-2xl border border-slate-700/60 bg-slate-900/96 backdrop-blur-md shadow-2xl shadow-black/60 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 pt-4 pb-1">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 6px #06b6d4' }}/>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-300 uppercase">K · A · I</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-500 hover:text-slate-300 transition-colors p-0.5"
              >
                <X size={14}/>
              </button>
            </div>

            {/* Avatar */}
            <div className="flex flex-col items-center pt-2 pb-1">
              <AvatarCharacter status={status} amplitude={amplitude}/>
              <span className="text-[11px] text-slate-400 mt-0.5 min-h-[16px] tracking-wide">
                {STATUS_LABEL[status]}
              </span>
            </div>

            {/* Messages — hidden: KAI is a voice-first assistant.
                Conversation history is still tracked internally so multi-turn
                context works; the textual bubbles are intentionally not rendered. */}

            {/* Error / warning */}
            {error && (
              <p className="text-[11px] text-red-400 px-4 pb-1">{error}</p>
            )}
            {!resolvedKey && (
              <p className="text-[11px] text-amber-400 px-4 pb-1">
                Add <code className="text-amber-300">VITE_OPENAI_API_KEY</code> to enable voice.
              </p>
            )}

            {/* Input row */}
            <div className="border-t border-slate-700/50 px-3 py-3 flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask KAI a question…"
                rows={1}
                disabled={busy || isRecording}
                className="flex-1 resize-none bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-[12px] text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 disabled:opacity-40 transition-colors leading-relaxed"
                style={{ maxHeight: 80 }}
              />
              {/* Mic */}
              <button
                onClick={isRecording ? () => void stopRecording() : () => void startRecording()}
                disabled={status === 'thinking' || status === 'speaking'}
                title={isRecording ? 'Stop recording' : 'Speak'}
                className={`flex-shrink-0 p-2 rounded-xl border transition-all disabled:opacity-30 ${
                  isRecording
                    ? 'bg-red-500/20 text-red-400 border-red-500/40 hover:bg-red-500/30'
                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-cyan-400 hover:border-cyan-500/40'
                }`}
              >
                {isRecording ? <MicOff size={14}/> : <Mic size={14}/>}
              </button>
              {/* Send */}
              <button
                onClick={() => void runConversation(input)}
                disabled={!input.trim() || busy}
                title="Send"
                className="flex-shrink-0 p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 disabled:opacity-30 transition-all"
              >
                <Send size={14}/>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Toggle button ── */}
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        title="Chat with KAI"
        className="h-13 w-13 h-12 w-12 rounded-full bg-slate-900 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shadow-lg shadow-black/50 hover:border-cyan-400/70 transition-colors"
        style={{ boxShadow: '0 0 18px rgba(6,182,212,0.18)' }}
      >
        <Bot size={20}/>
      </motion.button>

    </div>
  )
}
