import { motion } from 'framer-motion'
import { ArrowRight, Brain, Lightbulb, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  }
}

const aiPlanSteps = [
  'Industry & context',
  'Core friction point',
  'What you want AI to improve',
  'Organisation scale',
  'Priority outcome',
]

export function Assessments() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-28 pb-8 px-4 sm:px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block text-green-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-green-400/8 border border-green-400/20 rounded-full px-4 py-1.5">
            AI Plan
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Before the system,<br />
            <span className="gradient-text">understand the situation.</span>
          </h1>
          <p className="text-slate-400 text-base max-w-lg mx-auto">
            Structured assessments that translate your business context into an intelligence architecture recommendation.
          </p>
        </motion.div>
      </section>

      {/* ── AI Plan (dominant) ───────────────────────────────────── */}
      <section className="pb-6 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.06)}>
            <div className="glass-card glow-border rounded-2xl overflow-hidden" style={{ background: 'rgba(10,22,40,0.9)' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 border-b lg:border-b-0 lg:border-r border-white/[0.06]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/12 border border-blue-500/20 flex items-center justify-center">
                      <Brain size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-xl">AI Plan</h2>
                      <span className="text-blue-400 text-xs">5 questions · 3–5 minutes</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm leading-[1.75] mb-5">
                    Maps your business challenge to the intelligence systems and applications most likely to create meaningful impact.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                      <Clock size={11} /> 3–5 minutes
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                      <CheckCircle2 size={11} className="text-green-400" /> Personalised output
                    </div>
                  </div>
                  <Button to="/ai-plan" size="md">
                    Start AI Plan <ArrowRight size={14} />
                  </Button>
                </div>
                <div className="p-8">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-5">
                    What it covers
                  </p>
                  <div className="space-y-4">
                    {aiPlanSteps.map((step, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/12 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-blue-400 text-xs font-bold">{i + 1}</span>
                        </div>
                        <span className="text-slate-300 text-sm">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mind Match (secondary) ───────────────────────────────── */}
      <section className="pb-8 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.1)}>
            <div className="glass-card rounded-xl p-5 border border-white/[0.04] opacity-70 flex items-start gap-4">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb size={16} className="text-purple-400" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm">Mind Match</h3>
                  <span className="bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20 rounded-full px-2 py-0.5">
                    In development
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  A deeper readiness assessment for leadership teams — maps decision culture, data maturity, and organisational structure to an implementation score. Available later in 2025.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0.12)}>
            <div className="glass-card rounded-2xl p-8 text-center" style={{ background: 'rgba(10,22,40,0.85)' }}>
              <h2 className="text-xl font-bold text-white mb-2">Prefer to speak directly?</h2>
              <p className="text-slate-400 text-sm mb-5 max-w-sm mx-auto">
                Free 30-minute strategy call — no pitch, just structured thinking applied to your challenge.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button to="/contact">
                  Book a strategy call <ArrowRight size={14} />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
