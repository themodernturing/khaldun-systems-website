import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { intelligenceSystems } from '@/data/intelligenceSystems'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  }
}

const colorConfig = {
  blue: {
    badge: 'blue' as const,
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    glow: 'rgba(59,130,246,0.10)',
    dot: 'bg-blue-400',
  },
  purple: {
    badge: 'purple' as const,
    border: 'border-purple-500/20',
    accent: 'text-purple-400',
    glow: 'rgba(139,92,246,0.10)',
    dot: 'bg-purple-400',
  },
  cyan: {
    badge: 'cyan' as const,
    border: 'border-cyan-500/20',
    accent: 'text-cyan-400',
    glow: 'rgba(6,182,212,0.10)',
    dot: 'bg-cyan-400',
  },
}

export function IntelligenceSystems() {
  const location = useLocation()
  const [activeSystem, setActiveSystem] = useState<string>(intelligenceSystems[0].id)

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      if (intelligenceSystems.find((s) => s.id === id)) setActiveSystem(id)
    }
  }, [location.hash])

  const active = intelligenceSystems.find((s) => s.id === activeSystem)!
  const c = colorConfig[active.color]

  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-28 pb-10 px-4 sm:px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-blue-400/8 border border-blue-400/20 rounded-full px-4 py-1.5">
            Layer 2 — Intelligence Systems
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Three engines.<br />
            <span className="gradient-text">One intelligence architecture.</span>
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            ORBITAL, MAGNUS, and SIMFORE each answer a different class of question that leadership cannot answer with data alone.
          </p>
        </motion.div>
      </section>

      {/* ── 3-card horizontal selector ───────────────────────────── */}
      <section className="pb-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.06)}>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {intelligenceSystems.map((sys) => {
                const cc = colorConfig[sys.color]
                const isActive = sys.id === activeSystem
                return (
                  <button
                    key={sys.id}
                    id={sys.id}
                    onClick={() => setActiveSystem(sys.id)}
                    className={`rounded-xl p-4 text-left transition-all border ${
                      isActive
                        ? `${cc.border} bg-white/[0.04]`
                        : 'border-white/[0.05] hover:border-white/10'
                    }`}
                  >
                    <div className={`text-lg font-bold mb-1 ${cc.accent}`}>{sys.name}</div>
                    <div className="text-slate-500 text-xs">{sys.type}</div>
                  </button>
                )
              })}
            </div>

            {/* Active system detail */}
            <motion.div
              key={activeSystem}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`rounded-2xl border ${c.border} overflow-hidden`}
              style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${c.glow} 0%, transparent 70%), rgba(5,13,31,0.9)` }}
            >
              <div className="p-7 pb-5">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className={`text-2xl font-bold ${c.accent}`}>{active.name}</h2>
                  <Badge color={c.badge}>{active.type}</Badge>
                </div>
                <p className="text-slate-300 text-sm italic mb-3">{active.tagline}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{active.description}</p>
              </div>
              <div className="mx-7 border-t border-white/[0.06]" />
              <div className="p-7 pt-5">
                <p className={`text-xs font-semibold uppercase tracking-widest mb-4 ${c.accent}`}>
                  Core functions
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {active.functions.map((fn) => (
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── How they connect ─────────────────────────────────────── */}
      <section className="pb-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.1)}>
            <div className="glass-card rounded-xl p-6 grid grid-cols-3 gap-6 text-center">
              {[
                { name: 'ORBITAL', accent: 'text-blue-400', desc: 'Map what is structurally happening' },
                { name: 'MAGNUS', accent: 'text-purple-400', desc: 'Detect where narrative diverges from data' },
                { name: 'SIMFORE', accent: 'text-cyan-400', desc: 'Simulate consequences before committing' },
              ].map((s) => (
                <div key={s.name}>
                  <div className={`font-bold text-base mb-1 ${s.accent}`}>{s.name}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{s.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0.12)}>
            <div className="glass-card glow-border rounded-2xl p-8 text-center" style={{ background: 'rgba(10,22,40,0.85)' }}>
              <h2 className="text-2xl font-bold text-white mb-2">
                Not sure which system fits?
              </h2>
              <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
                Five questions map your business challenge to the right system.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
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
