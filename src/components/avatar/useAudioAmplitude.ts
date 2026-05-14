import { useState, useRef, useEffect } from 'react'

export function useAudioAmplitude() {
  const [amplitude, setAmplitude] = useState(0)

  const ctxRef      = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const sourceRef   = useRef<AudioNode | null>(null)
  const rafRef      = useRef<number>(0)
  const dataRef     = useRef<Uint8Array>(new Uint8Array(0))

  function getCtx(): AudioContext {
    if (!ctxRef.current || ctxRef.current.state === 'closed') {
      ctxRef.current = new AudioContext()
    }
    if (ctxRef.current.state === 'suspended') {
      void ctxRef.current.resume()
    }
    return ctxRef.current
  }

  function setupAnalyser(ctx: AudioContext): AnalyserNode {
    const analyser = ctx.createAnalyser()
    analyser.fftSize = 256
    analyser.smoothingTimeConstant = 0.6
    analyserRef.current = analyser
    dataRef.current = new Uint8Array(analyser.frequencyBinCount)
    return analyser
  }

  function startTicking() {
    cancelAnimationFrame(rafRef.current)
    function tick() {
      if (!analyserRef.current) return
      (analyserRef.current as AnalyserNode).getByteFrequencyData(dataRef.current as any)
      let sum = 0
      for (let i = 0; i < dataRef.current.length; i++) {
        sum += dataRef.current[i] * dataRef.current[i]
      }
      const rms = Math.sqrt(sum / dataRef.current.length) / 128
      // boost so quiet speech still visibly moves the avatar
      setAmplitude(Math.min(rms * 2.8, 1))
      rafRef.current = requestAnimationFrame(tick)
    }
    tick()
  }

  function connectStream(stream: MediaStream) {
    sourceRef.current?.disconnect()
    const ctx = getCtx()
    const analyser = setupAnalyser(ctx)
    const src = ctx.createMediaStreamSource(stream)
    src.connect(analyser)
    sourceRef.current = src
    startTicking()
  }

  function connectElement(el: HTMLAudioElement) {
    sourceRef.current?.disconnect()
    const ctx = getCtx()
    const analyser = setupAnalyser(ctx)
    try {
      const src = ctx.createMediaElementSource(el)
      src.connect(analyser)
      src.connect(ctx.destination) // still play audio to speakers
      sourceRef.current = src
    } catch {
      // element already owned by a different AudioContext — amplitude won't track but audio still plays
    }
    startTicking()
  }

  function disconnect() {
    cancelAnimationFrame(rafRef.current)
    sourceRef.current?.disconnect()
    sourceRef.current = null
    setAmplitude(0)
  }

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafRef.current)
      void ctxRef.current?.close()
    }
  }, [])

  return { amplitude, connectStream, connectElement, disconnect }
}
