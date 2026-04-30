import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Brain, Shield, Zap, TrendingUp, ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { CTABanner } from '@/components/sections/CTABanner'
import type { AIPlanAnswers } from '@/types'

// ─── Entry options — map to aiHelp values ──────────────────────────────────

const entryOptions: {
  icon: React.FC<{ size?: number; className?: string }>
  label: string
  detail: string
  value: AIPlanAnswers['aiHelp']
  accent: string
  glow: string
}[] = [
  {
    icon: Brain,
    label: 'Decision quality',
    detail: 'Better decisions from the data you already have',
    value: 'better-decisions',
    accent: 'text-blue-400',
    glow: 'rgba(59,130,246,0.12)',
  },
  {
    icon: Shield,
    label: 'Risk visibility',
    detail: 'Surface exposure before it becomes cost',
    value: 'reduce-risk',
    accent: 'text-purple-400',
    glow: 'rgba(139,92,246,0.12)',
  },
  {
    icon: Zap,
    label: 'Operational speed',
    detail: 'Remove the friction slowing your critical processes',
    value: 'automate-workflows',
    accent: 'text-cyan-400',
    glow: 'rgba(6,182,212,0.10)',
  },
  {
    icon: TrendingUp,
    label: 'Forecasting',
    detail: 'See what\'s coming before it arrives',
    value: 'predict-outcomes',
    accent: 'text-indigo-400',
    glow: 'rgba(99,102,241,0.12)',
  },
]

// ─── Intelligence loop steps ────────────────────────────────────────────────

const loopSteps = [
  { label: 'Data', sub: 'Your signals, unified' },
  { label: 'Intelligence', sub: 'Patterns, not noise' },
  { label: 'Simulation', sub: 'Outcomes modelled' },
  { label: 'Decision', sub: 'Clarity, not guesswork' },
  { label: 'Outcome', sub: 'Results that compound' },
]

// ─── Component ──────────────────────────────────────────────────────────────

type EntryState = 'idle' | 'thinking' | 'launching'

export function Home() {
  const navigate = useNavigate()
  const [entryState, setEntryState] = useState<EntryState>('idle')
  const [selected, setSelected] = useState<string | null>(null)
  const [hoveredLoop, setHoveredLoop] = useState<number | null>(null)

  function handleSelect(value: string) {
    if (entryState !== 'idle') return
    setSelected(value)
    setEntryState('thinking')
    setTimeout(() => setEntryState('launching'), 300)
    setTimeout(() => {
      navigate('/ai-plan', { state: { preselected: { aiHelp: value } } })
    }, 900)
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 100% 65% at 50% -5%, rgba(29,78,216,0.28) 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 80% 30%, rgba(109,40,217,0.14) 0%, transparent 55%), #020817',
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-px bg-gradient-to-r from-transparent via-blue-500/35 to-transparent pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-700/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative w-full max-w-3xl mx-auto px-4 sm:px-6 py-28 flex flex-col items-center text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 text-blue-300 text-[11px] font-semibold tracking-[0.22em] uppercase mb-7 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Decision Intelligence Platform
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-white leading-[1.1] tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            Your data exists.
            <br />
            <span className="gradient-text">Your decisions should reflect it.</span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="text-slate-400 text-base sm:text-lg mb-10 max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We build AI systems that analyze your business, simulate outcomes, and guide better decisions — not dashboards, not tools. Systems.
          </motion.p>

          {/* ── Interactive entry widget ────────────────────────────── */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <p className="text-slate-400 text-sm font-medium mb-4 tracking-wide">
              What's the most important thing to improve right now?
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {entryOptions.map((opt) => {
                const isSelected = selected === opt.value
                const isOther = selected !== null && selected !== opt.value
                const isThinking = isSelected && entryState === 'thinking'
                const isLaunching = isSelected && entryState === 'launching'

                return (
                  <motion.button
                    key={opt.value}
                    type="button"
                    onClick={() => handleSelect(opt.value)}
                    disabled={entryState !== 'idle' && !isSelected}
                    className={`relative text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer group overflow-hidden ${
                      isSelected
                        ? 'border-blue-400/60 bg-blue-500/10'
                        : isOther
                        ? 'border-white/[0.04] bg-white/[0.01] opacity-40'
                        : 'border-white/[0.07] bg-white/[0.02] hover:border-white/[0.15] hover:bg-white/[0.04]'
                    }`}
                    style={isSelected ? { boxShadow: `0 0 32px ${opt.glow}` } : {}}
                    whileTap={entryState === 'idle' ? { scale: 0.98 } : {}}
                  >
                    {/* Glow sweep on launch */}
                    {isLaunching && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                        initial={{ x: '-100%' }}
                        animate={{ x: '100%' }}
                        transition={{ duration: 0.5 }}
                      />
                    )}

                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 mt-0.5 transition-all duration-300 ${isSelected ? opt.accent : 'text-slate-500 group-hover:text-slate-400'}`}>
                        {isThinking || isLaunching ? (
                          <Loader2 size={18} className="animate-spin text-blue-400" />
                        ) : (
                          <opt.icon size={18} />
                        )}
                      </div>
                      <div>
                        <div className={`font-semibold text-sm mb-0.5 transition-colors ${isSelected ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                          {opt.label}
                        </div>
                        <div className="text-slate-500 text-xs leading-relaxed">{opt.detail}</div>
                      </div>
                    </div>

                    {isLaunching && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 0.7 }}
                      />
                    )}
                  </motion.button>
                )
              })}
            </div>

            <AnimatePresence>
              {entryState !== 'idle' && (
                <motion.p
                  className="text-blue-400 text-xs text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {entryState === 'thinking' ? 'Preparing your consultation…' : 'Starting your AI Plan →'}
                </motion.p>
              )}
              {entryState === 'idle' && (
                <motion.p
                  className="text-slate-600 text-xs text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Select one to begin · or{' '}
                  <button
                    type="button"
                    className="text-blue-500 hover:text-blue-400 transition-colors underline underline-offset-2"
                    onClick={() => navigate('/ai-plan')}
                  >
                    start the full AI Plan
                  </button>
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── INTELLIGENCE LOOP ─────────────────────────────────────────── */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3 block">
              How it works
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              From raw signal to confident decision.
            </h2>
          </motion.div>

          <div className="relative flex flex-col lg:flex-row items-stretch gap-1">
            {/* Connector line — desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 z-0"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.2) 20%, rgba(139,92,246,0.2) 80%, transparent)' }}
            />

            {loopSteps.map((s, i) => {
              const isHovered = hoveredLoop === i
              const progress = (i / (loopSteps.length - 1))
              const r = Math.round(59 + (139 - 59) * progress)
              const g = Math.round(130 + (92 - 130) * progress)
              const b = Math.round(246 + (246 - 246) * progress)
              const color = `rgb(${r},${g},${b})`

              return (
                <motion.div
                  key={s.label}
                  className="relative flex-1 z-10"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.09 }}
                  onHoverStart={() => setHoveredLoop(i)}
                  onHoverEnd={() => setHoveredLoop(null)}
                >
                  <div
                    className="glass-card rounded-xl p-5 text-center cursor-default transition-all duration-300 h-full"
                    style={isHovered ? { borderColor: `${color}50`, boxShadow: `0 0 20px ${color}18` } : {}}
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-xs font-bold transition-all duration-300"
                      style={{ background: `linear-gradient(135deg, ${color}cc, ${color}66)` }}
                    >
                      {i + 1}
                    </div>
                    <div className="text-white font-semibold text-sm mb-1">{s.label}</div>
                    <div className="text-slate-500 text-xs">{s.sub}</div>
                  </div>

                  {i < loopSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-0.5 top-1/2 -translate-y-1/2 z-20 translate-x-1/2">
                      <ArrowRight size={13} className="text-slate-600" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button to="/ecosystem" variant="ghost" size="sm">
              See how the ecosystem connects <ArrowRight size={13} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE BUILD ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              This is not AI automation.
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Most AI companies give you tools. We build decision infrastructure — systems that compound in value because they're woven into how your organisation thinks, not bolted on top.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.05]">
            {[
              {
                from: 'Automation',
                to: 'Intelligence',
                body: 'We don\'t just automate tasks — we build systems that decide which tasks matter.',
              },
              {
                from: 'Tools',
                to: 'Systems',
                body: 'Tools create data silos. Systems reason across everything your organisation knows.',
              },
              {
                from: 'Information',
                to: 'Decisions',
                body: 'More reports don\'t improve decisions. Intelligence infrastructure does.',
              },
            ].map((item, i) => (
              <motion.div
                key={item.to}
                className="bg-[#020817] p-8 group"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-slate-600 text-xs line-through">{item.from}</span>
                  <ArrowRight size={12} className="text-blue-500" />
                  <span className="text-blue-400 text-xs font-semibold">{item.to}</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button to="/products" variant="ghost" size="sm">
              Explore our six decision systems <ArrowRight size={13} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────────────── */}
      <CTABanner
        title="Find out exactly where AI can improve your decisions."
        description="Five questions. Under three minutes. A report built around your business."
        primaryLabel="Start Your AI Plan"
        primaryTo="/ai-plan"
        secondaryLabel="Book a Strategy Call"
        secondaryTo="/contact"
      />
    </>
  )
}
