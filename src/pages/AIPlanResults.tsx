import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, RotateCcw, Calendar, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { generateAIPlan } from '@/utils/aiPlanLogic'
import { intelligenceSystems } from '@/data/intelligenceSystems'
import type { AIPlanAnswers, AIPlanResult } from '@/types'

const systemBadgeColor = {
  orbital: 'blue' as const,
  magnus: 'purple' as const,
  simfore: 'cyan' as const,
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay },
  }
}

export function AIPlanResults() {
  const location = useLocation()
  const navigate = useNavigate()
  const [result, setResult] = useState<AIPlanResult | null>(null)
  const [answers, setAnswers] = useState<AIPlanAnswers | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const state = location.state as { answers: AIPlanAnswers } | null
    if (!state?.answers) {
      navigate('/ai-plan')
      return
    }
    const plan = generateAIPlan(state.answers)
    setAnswers(state.answers)
    setResult(plan)
    setTimeout(() => setReady(true), 120)
  }, [location.state, navigate])

  if (!result || !answers) return null

  const recommendedSystems = result.recommendedSystems
    .map((id) => intelligenceSystems.find((s) => s.id === id))
    .filter(Boolean)

  return (
    <div className="min-h-screen bg-[#020817]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-5 border-b border-white/[0.05]">
        <Link
          to="/"
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
          aria-label="Back to Khaldun Systems"
        >
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xs font-bold">K</span>
          </div>
          <span className="font-medium hidden sm:inline">Khaldun Systems</span>
        </Link>
        <button
          type="button"
          onClick={() => navigate('/ai-plan')}
          className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 text-xs transition-colors"
        >
          <RotateCcw size={12} />
          Retake
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* ── Header ───────────────────────────────────────────────── */}
        <motion.div className="mb-14" {...fadeUp(0)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <div className="inline-flex items-center gap-2 text-green-400 bg-green-400/8 border border-green-400/20 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-5">
            <CheckCircle2 size={13} />
            Your AI Plan is ready
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            Your Decision Intelligence Report
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Based on your five answers, we've built a focused view of where AI decision systems can create the most meaningful impact in your organisation.
          </p>
        </motion.div>

        {/* ── What we understand ───────────────────────────────────── */}
        <motion.div className="mb-10" {...fadeUp(0.08)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              01 — What we understand about your business
            </span>
          </div>
          <Card className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {result.businessContext.map((item) => (
                <div key={item.label}>
                  <div className="text-slate-500 text-xs mb-1">{item.label}</div>
                  <div className="text-slate-200 text-sm font-medium">{item.value}</div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* ── Diagnostic summary ───────────────────────────────────── */}
        <motion.div className="mb-10" {...fadeUp(0.14)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <Card glow className="p-7">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">Our read of your situation</p>
            <p className="text-slate-200 text-base leading-[1.75]">{result.summary}</p>
          </Card>
        </motion.div>

        {/* ── Recommended systems ──────────────────────────────────── */}
        <motion.div className="mb-10" {...fadeUp(0.20)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              02 — Recommended intelligence systems
            </span>
          </div>
          <p className="text-slate-400 text-sm mb-5 leading-relaxed">
            Based on your inputs, we recommend you explore these systems first — each chosen because of how it addresses your specific situation.
          </p>

          <div className="space-y-4">
            {recommendedSystems.map((system, i) => {
              if (!system) return null
              const color = systemBadgeColor[system.id]
              const reason = result.systemReasons[system.id]

              return (
                <motion.div
                  key={system.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ duration: 0.4, delay: 0.24 + i * 0.1 }}
                >
                  <Card hover className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${system.accentHex}12`, border: `1px solid ${system.accentHex}30` }}
                      >
                        <span className="font-bold text-sm" style={{ color: system.accentHex }}>
                          {system.name[0]}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-white font-semibold text-sm">{system.name}</h3>
                          <Badge color={color}>{system.type}</Badge>
                          <Badge color={i === 0 ? 'blue' : i === 1 ? 'purple' : 'cyan'}>
                            {i === 0 ? 'Primary' : i === 1 ? 'Strong fit' : 'Recommended'}
                          </Badge>
                        </div>
                        <p className="text-slate-400 text-xs italic mb-3">{system.tagline}</p>
                        {reason && (
                          <p className="text-slate-400 text-sm leading-relaxed mb-4">{reason}</p>
                        )}
                        <Link
                          to={`/intelligence-systems#${system.id}`}
                          className="inline-flex items-center gap-1 text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors"
                        >
                          See full capability detail <ChevronRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── Expected impact ──────────────────────────────────────── */}
        <motion.div className="mb-10" {...fadeUp(0.30)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              03 — Expected impact in your context
            </span>
          </div>
          <Card className="p-6">
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              These are the outcomes organisations with your profile typically achieve when the right intelligence infrastructure is in place.
            </p>
            <div className="space-y-4">
              {result.expectedOutcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 size={12} className="text-green-400" />
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* ── Suggested next steps ─────────────────────────────────── */}
        <motion.div className="mb-12" {...fadeUp(0.38)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
              04 — Suggested next steps
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {result.suggestedPages.map((page, i) => (
              <Link
                key={i}
                to={page.path}
                className="glass-card rounded-xl p-4 hover:border-blue-500/30 transition-all group block"
              >
                <div className="flex items-center gap-1 font-semibold text-white text-sm mb-1.5 group-hover:text-blue-300 transition-colors">
                  {page.label} <ArrowRight size={11} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-slate-500 text-xs leading-relaxed">{page.reason}</div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Book a call CTA ──────────────────────────────────────── */}
        <motion.div {...fadeUp(0.44)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <div className="glass-card rounded-2xl p-8 glow-border" style={{ background: 'rgba(10,22,40,0.85)' }}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-blue-400 bg-blue-400/8 border border-blue-400/20 rounded-full px-3 py-1 text-xs font-semibold mb-3">
                  <Calendar size={12} />
                  Next step
                </div>
                <h2 className="text-white font-bold text-xl mb-2">
                  Book a Strategy Call
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  This plan is a starting point. In a 30-minute call, we'll validate your priorities, pressure-test the recommendations, and map out exactly how to move forward.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-shrink-0">
                <Button to="/contact" size="md">
                  Book Now <ArrowRight size={14} />
                </Button>
                <button
                  type="button"
                  onClick={() => navigate('/ai-plan')}
                  className="text-slate-500 hover:text-slate-300 text-xs text-center transition-colors py-1"
                >
                  Retake the plan
                </button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
