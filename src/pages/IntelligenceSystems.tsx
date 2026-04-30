import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { intelligenceSystems } from '@/data/intelligenceSystems'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay },
  }
}

const colorConfig = {
  blue: {
    glow: 'rgba(59,130,246,0.12)',
    badge: 'blue' as const,
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    bg: 'bg-blue-500/8',
    dot: 'bg-blue-400',
    hexGlow: 'rgba(59,130,246,0.25)',
  },
  purple: {
    glow: 'rgba(139,92,246,0.12)',
    badge: 'purple' as const,
    border: 'border-purple-500/20',
    accent: 'text-purple-400',
    bg: 'bg-purple-500/8',
    dot: 'bg-purple-400',
    hexGlow: 'rgba(139,92,246,0.25)',
  },
  cyan: {
    glow: 'rgba(6,182,212,0.12)',
    badge: 'cyan' as const,
    border: 'border-cyan-500/20',
    accent: 'text-cyan-400',
    bg: 'bg-cyan-500/8',
    dot: 'bg-cyan-400',
    hexGlow: 'rgba(6,182,212,0.25)',
  },
}

export function IntelligenceSystems() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [location.hash])

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 sm:px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-blue-400/8 border border-blue-400/20 rounded-full px-4 py-1.5">
            Layer 2 — Intelligence Systems
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Three engines.<br />
            <span className="gradient-text">One intelligence architecture.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            ORBITAL, MAGNUS, and SIMFORE are not tools or dashboards. They are structural intelligence engines — each designed to answer a different class of question that leadership cannot answer with data alone.
          </p>
        </motion.div>
      </section>

      {/* ── How they relate ──────────────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.05)}>
            <div className="glass-card rounded-2xl p-8 border border-white/[0.06]">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">How the three systems relate</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">ORBITAL</div>
                  <div className="text-slate-500 text-xs mb-3">Diagnostic</div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Maps the structural mechanics of a business — what is really happening and why.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-1">MAGNUS</div>
                  <div className="text-slate-500 text-xs mb-3">Forensic</div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Finds where narrative diverges from data — exposing inconsistency and hidden risk.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">SIMFORE</div>
                  <div className="text-slate-500 text-xs mb-3">Simulation</div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Models the downstream consequences of decisions before they are made.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-white/[0.06] text-center">
                <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
                  Together, they form a complete intelligence loop: understand the structure → detect what is being obscured → simulate consequences before committing.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Systems detail ───────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {intelligenceSystems.map((system, idx) => {
            const c = colorConfig[system.color]
            return (
              <motion.div
                key={system.id}
                id={system.id}
                {...fadeUp(0.05 + idx * 0.05)}
              >
                <div
                  className={`rounded-2xl border ${c.border} overflow-hidden`}
                  style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${c.glow} 0%, transparent 70%), rgba(5,13,31,0.9)` }}
                >
                  {/* Header */}
                  <div className="p-8 pb-6">
                    <div className="flex items-start gap-4 mb-5">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: c.glow, border: `1px solid ${system.accentHex}30` }}
                      >
                        <span className={`text-lg font-bold ${c.accent}`}>
                          {system.name[0]}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h2 className={`text-2xl font-bold ${c.accent}`}>{system.name}</h2>
                          <Badge color={c.badge}>{system.type}</Badge>
                        </div>
                        <p className="text-slate-300 text-sm italic">{system.tagline}</p>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-[1.8] text-sm">{system.description}</p>
                  </div>

                  {/* Divider */}
                  <div className={`mx-8 border-t border-white/[0.06]`} />

                  {/* Functions */}
                  <div className="p-8 pt-6">
                    <p className={`text-xs font-semibold uppercase tracking-widest mb-5 ${c.accent}`}>
                      Core functions
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {system.functions.map((fn) => (
                        <div key={fn.name} className="flex items-start gap-3">
                          <div className={`w-1.5 h-1.5 rounded-full ${c.dot} mt-1.5 flex-shrink-0`} />
                          <div>
                            <div className="text-slate-200 text-sm font-medium mb-0.5">{fn.name}</div>
                            <div className="text-slate-500 text-xs leading-relaxed">{fn.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── Applications built on these systems ──────────────────── */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.1)}>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Built into deployed applications
              </h2>
              <p className="text-slate-400 text-base max-w-xl mx-auto">
                These systems don't exist in isolation — they power every application in the Khaldun Systems portfolio.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { label: 'ORBITAL powers', items: ['ECL Foresight', 'Tax Law Agent', 'EmissIQ', 'AI Seekho', 'SchoolIQ', 'Clinos'] },
                { label: 'MAGNUS powers', items: ['LexFlow AI', 'ConsolidateAI'] },
                { label: 'SIMFORE powers', items: ['ECL Foresight', 'Tax Law Agent', 'EmissIQ', 'AI Seekho', 'Clinos'] },
              ].map((col) => (
                <div key={col.label} className="glass-card rounded-xl p-5">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">{col.label}</p>
                  <ul className="space-y-2">
                    {col.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                        <CheckCircle2 size={12} className="text-green-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button to="/applications">
                Explore all applications <ArrowRight size={14} />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0.1)}>
            <div className="glass-card glow-border rounded-2xl p-10 text-center" style={{ background: 'rgba(10,22,40,0.85)' }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Not sure which system fits your situation?
              </h2>
              <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto leading-relaxed">
                Take the AI Plan — five questions that map your business challenge to the right intelligence system and the applications most relevant to your sector.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/assessments">
                  Take the AI Plan <ArrowRight size={14} />
                </Button>
                <Button to="/contact" variant="ghost">
                  Book a strategy call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
