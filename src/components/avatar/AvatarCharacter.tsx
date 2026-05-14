import { motion } from 'framer-motion'

export type AvatarStatus = 'idle' | 'listening' | 'thinking' | 'speaking'

interface Props {
  status: AvatarStatus
  amplitude: number // 0–1, updates each frame when speaking/listening
}

const CYAN   = '#06b6d4'
const BLUE   = '#3b82f6'
const PURPLE = '#8b5cf6'
const D1     = '#0f172a'
const D2     = '#1e293b'
const D3     = '#334155'

export function AvatarCharacter({ status, amplitude }: Props) {
  const isSpeaking  = status === 'speaking'
  const isListening = status === 'listening'
  const isThinking  = status === 'thinking'

  // Amplitude-driven values (plain math, no re-render concerns for a small widget)
  const mouthH = isSpeaking ? 5 + amplitude * 18 : 6
  const mouthY = isSpeaking ? 81 - amplitude * 9  : 79
  const coreR  = isSpeaking ? 12 + amplitude * 5  : 13
  const coreOp = isSpeaking ? 0.55 + amplitude * 0.45 : 0.6

  return (
    <svg viewBox="0 0 140 210" width="140" height="210" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="av-gsm" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="av-gmd" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="5" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="av-glg" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="9" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <linearGradient id="av-hg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={D2}/>
          <stop offset="100%" stopColor={D1}/>
        </linearGradient>
        <radialGradient id="av-cg" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor={CYAN} stopOpacity="0.9"/>
          <stop offset="100%" stopColor={BLUE} stopOpacity="0.15"/>
        </radialGradient>
      </defs>

      {/* ── Float wrapper ── */}
      <motion.g
        animate={{ y: [0, isSpeaking ? -4 : -8, 0] }}
        transition={{ duration: isSpeaking ? 0.38 : 3.5, repeat: Infinity, ease: 'easeInOut' }}
      >

        {/* Aura ring */}
        <motion.circle
          cx="70" cy="58"
          fill="none"
          stroke={isListening ? CYAN : BLUE}
          strokeWidth="1"
          filter="url(#av-glg)"
          animate={{
            r:       isListening ? [60, 70, 60] : [62, 65, 62],
            opacity: isListening ? [0.3, 0.65, 0.3] : [0.06, 0.16, 0.06],
          }}
          transition={{ duration: isListening ? 1.1 : 3.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Thinking spinner arc */}
        <motion.circle
          cx="70" cy="58" r="57"
          fill="none"
          stroke={PURPLE}
          strokeWidth="1.5"
          strokeDasharray="28 157"
          filter="url(#av-gsm)"
          style={{ transformOrigin: '70px 58px' }}
          animate={{ rotate: isThinking ? 360 : 0, opacity: isThinking ? 0.75 : 0 }}
          transition={{
            rotate:  { duration: 1.4, repeat: Infinity, ease: 'linear' },
            opacity: { duration: 0.25 },
          }}
        />

        {/* ── Antenna ── */}
        <line x1="70" y1="16" x2="70" y2="5" stroke={CYAN} strokeWidth="2" opacity="0.55"/>
        <motion.circle
          cx="70" cy="3" r="3.5"
          fill={CYAN}
          filter="url(#av-gsm)"
          animate={{ opacity: [0.5, 1, 0.5], r: [3, 4.2, 3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* ── Head shell ── */}
        <rect x="22" y="14" width="96" height="88" rx="22" fill="url(#av-hg)"/>
        <rect x="22" y="14" width="96" height="88" rx="22" fill="none" stroke={D3} strokeWidth="1"/>
        <motion.rect
          x="22" y="14" width="96" height="88" rx="22"
          fill="none" stroke={CYAN} strokeWidth="0.6"
          filter="url(#av-gsm)"
          animate={{ opacity: isListening ? [0.4, 0.9, 0.4] : [0.1, 0.25, 0.1] }}
          transition={{ duration: isListening ? 1 : 2.8, repeat: Infinity }}
        />

        {/* Forehead grid detail */}
        <text x="70" y="35" textAnchor="middle" fill={CYAN} fontSize="8" opacity="0.13" fontFamily="monospace">◈  ◈  ◈</text>

        {/* ── Left eye ── */}
        <motion.circle
          cx="50" cy="57" r="9"
          fill={isThinking ? PURPLE : CYAN}
          filter="url(#av-gmd)"
          style={{ transformOrigin: '50px 57px' }}
          animate={isThinking
            ? { cx: [50, 57, 50], opacity: [0.75, 1, 0.75] }
            : { scaleY: [1,1,1,1,1,1,0.07,1], opacity: [0.7,1,0.7,1,0.7,0.7,0.7,0.7] }
          }
          transition={isThinking
            ? { duration: 1.4, repeat: Infinity }
            : { duration: 5, repeat: Infinity, times: [0,0.2,0.4,0.6,0.75,0.87,0.91,1] }
          }
        />
        <motion.circle
          cx="50" cy="57" r="4"
          fill="white" opacity="0.92"
          animate={isThinking ? { cx: [50, 57, 50] } : {}}
          transition={{ duration: 1.4, repeat: Infinity }}
        />

        {/* ── Right eye ── */}
        <motion.circle
          cx="90" cy="57" r="9"
          fill={isThinking ? PURPLE : CYAN}
          filter="url(#av-gmd)"
          style={{ transformOrigin: '90px 57px' }}
          animate={isThinking
            ? { cx: [90, 83, 90], opacity: [0.75, 1, 0.75] }
            : { scaleY: [1,1,1,1,1,1,0.07,1], opacity: [0.7,1,0.7,1,0.7,0.7,0.7,0.7] }
          }
          transition={isThinking
            ? { duration: 1.4, repeat: Infinity }
            : { duration: 5, repeat: Infinity, times: [0,0.2,0.4,0.6,0.75,0.87,0.91,1] }
          }
        />
        <motion.circle
          cx="90" cy="57" r="4"
          fill="white" opacity="0.92"
          animate={isThinking ? { cx: [90, 83, 90] } : {}}
          transition={{ duration: 1.4, repeat: Infinity }}
        />

        {/* ── Mouth — amplitude-driven, no motion needed ── */}
        <rect
          x="50"
          y={mouthY}
          width="40"
          height={mouthH}
          rx="4"
          fill={CYAN}
          opacity={isSpeaking ? 0.6 + amplitude * 0.4 : 0.5}
          filter="url(#av-gsm)"
        />

        {/* ── Neck ── */}
        <rect x="57" y="102" width="26" height="16" rx="5" fill={D2}/>
        <rect x="57" y="102" width="26" height="16" rx="5" fill="none" stroke={D3} strokeWidth="1"/>

        {/* ── Body ── */}
        <rect x="14" y="116" width="112" height="82" rx="16" fill="url(#av-hg)"/>
        <rect x="14" y="116" width="112" height="82" rx="16" fill="none" stroke={D3} strokeWidth="1"/>
        <motion.rect
          x="14" y="116" width="112" height="82" rx="16"
          fill="none" stroke={CYAN} strokeWidth="0.5"
          filter="url(#av-gsm)"
          animate={{ opacity: [0.07, 0.2, 0.07] }}
          transition={{ duration: 3.2, repeat: Infinity }}
        />

        {/* Collar line */}
        <motion.line
          x1="28" y1="127" x2="112" y2="127"
          stroke={CYAN} strokeWidth="1"
          filter="url(#av-gsm)"
          animate={{ opacity: [0.25, 0.55, 0.25] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />

        {/* ── Chest core — amplitude-driven ── */}
        <circle
          cx="70" cy="160"
          r={coreR}
          fill="url(#av-cg)"
          opacity={coreOp}
          filter="url(#av-gmd)"
        />
        <circle cx="70" cy="160" r="7"  fill={CYAN}  opacity="0.5" filter="url(#av-gsm)"/>
        <circle cx="70" cy="160" r="3"  fill="white" opacity="0.92"/>

        {/* Circuit details */}
        <g opacity="0.2">
          <polyline points="25,143 40,143 40,136" fill="none" stroke={CYAN} strokeWidth="0.8"/>
          <circle cx="40" cy="136" r="1.5" fill={CYAN}/>
          <line x1="25" y1="151" x2="36" y2="151" stroke={BLUE} strokeWidth="0.8"/>
          <polyline points="115,143 100,143 100,136" fill="none" stroke={CYAN} strokeWidth="0.8"/>
          <circle cx="100" cy="136" r="1.5" fill={CYAN}/>
          <line x1="104" y1="151" x2="115" y2="151" stroke={BLUE} strokeWidth="0.8"/>
        </g>

      </motion.g>
    </svg>
  )
}
