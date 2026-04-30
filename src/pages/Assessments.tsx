import { motion } from 'framer-motion'
import { ArrowRight, Brain, Lightbulb, Clock, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay },
  }
}

const aiPlanSteps = [
  { label: 'Industry & context', description: 'We understand what sector you operate in and the structural forces shaping it.' },
  { label: 'Core friction point', description: 'We identify where your decision-making is slowest, least visible, or most exposed.' },
  { label: 'What you want AI to do', description: 'We understand whether you need better decisions, more visibility, or forward prediction.' },
  { label: 'Organisation scale', description: 'We calibrate recommendations to your size, complexity, and resource reality.' },
  { label: 'Priority outcome', description: 'We anchor recommendations to what your leadership actually needs to improve.' },
]

export function Assessments() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 sm:px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block text-green-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-green-400/8 border border-green-400/20 rounded-full px-4 py-1.5">
            Layer 1 — Assessments
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Before the system,<br />
            <span className="gradient-text">understand the situation.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Assessments are how Khaldun Systems begins every engagement — structured conversations that translate your business context into an intelligence architecture recommendation.
          </p>
        </motion.div>
      </section>

      {/* ── AI Plan ──────────────────────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.05)}>
            <div className="glass-card glow-border rounded-2xl overflow-hidden" style={{ background: 'rgba(10,22,40,0.9)' }}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Left: info */}
                <div className="p-10 border-r border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/12 border border-blue-500/20 flex items-center justify-center">
                      <Brain size={18} className="text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-xl">AI Plan</h2>
                      <span className="text-blue-400 text-xs">Structured consultation · 5 questions</span>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-[1.8] mb-6">
                    The AI Plan is a five-question structured consultation that maps your business challenge to the intelligence systems and applications most likely to create meaningful impact in your organisation.
                  </p>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                      <Clock size={12} />
                      3–5 minutes
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                      <CheckCircle2 size={12} className="text-green-400" />
                      Personalised to your context
                    </div>
                  </div>

                  <Button to="/ai-plan" size="md">
                    Start AI Plan <ArrowRight size={14} />
                  </Button>
                </div>

                {/* Right: steps */}
                <div className="p-10">
                  <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-6">
                    What the AI Plan covers
                  </p>
                  <div className="space-y-5">
                    {aiPlanSteps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-500/12 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-blue-400 text-xs font-bold">{i + 1}</span>
                        </div>
                        <div>
                          <div className="text-slate-200 text-sm font-medium mb-0.5">{step.label}</div>
                          <div className="text-slate-500 text-xs leading-relaxed">{step.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What you get ─────────────────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.05)}>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                What your AI Plan includes
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm">
                It's not a generic report. Every output is built from your five answers — structured to help leadership make a concrete decision about next steps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Business Context Summary',
                  description: 'A structured interpretation of your sector, challenge, and scale — confirming we understand your actual situation before making any recommendation.',
                },
                {
                  title: 'Recommended Intelligence Systems',
                  description: 'Up to three systems from ORBITAL, MAGNUS, and SIMFORE — each with a specific rationale for why it addresses your situation.',
                },
                {
                  title: 'Expected Outcomes',
                  description: 'Concrete impact statements — calibrated to your industry and priority — so leadership understands what improvement looks like in practice.',
                },
                {
                  title: 'Suggested Next Steps',
                  description: 'Three or four specific pages and actions to explore next — directing you toward the applications and conversations most relevant to your plan.',
                },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-6">
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mind Match — coming soon ──────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0.08)}>
            <div className="glass-card rounded-2xl p-8 border border-white/[0.04] opacity-70">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={18} className="text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-white font-bold text-lg">Mind Match</h2>
                    <span className="bg-purple-500/10 text-purple-400 text-xs font-semibold border border-purple-500/20 rounded-full px-2.5 py-0.5">
                      In development
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    Mind Match is a deeper capability assessment — designed for leadership teams evaluating AI readiness across an organisation. Where the AI Plan maps a challenge to a system, Mind Match maps a team's decision culture, data maturity, and organisational structure to an implementation readiness score.
                  </p>
                  <p className="text-slate-500 text-xs">
                    Mind Match will be available later in 2025. If you'd like early access, reach out via our contact page.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Not sure where to start ──────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0.1)}>
            <div
              className="glass-card rounded-2xl p-10 text-center"
              style={{ background: 'rgba(10,22,40,0.85)' }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                Prefer to speak directly?
              </h2>
              <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
                If you'd rather map your situation in a conversation, we offer a free 30-minute strategy call — no commitment, no pitch. Just structured thinking applied to your challenge.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/contact">
                  Book a strategy call <ArrowRight size={14} />
                </Button>
                <Button to="/ai-plan" variant="ghost">
                  Take the AI Plan instead
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
