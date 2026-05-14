import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Box,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { generateAIPlan } from '@/utils/aiPlanLogic'
import { intelligenceSystems } from '@/data/intelligenceSystems'
import { applications } from '@/data/applications'
import type { AIPlanAnswers, AIPlanResult, SystemId } from '@/types'

// ─── Constants ─────────────────────────────────────────────────────────────

const systemBadgeColor: Record<SystemId, 'blue' | 'purple' | 'cyan'> = {
  orbital: 'blue',
  magnus: 'purple',
  simfore: 'cyan',
}

const systemCopy: Record<SystemId, { type: string, tagline: string }> = {
  orbital: {
    type: 'Diagnostic Intelligence',
    tagline: 'Reveal the underlying structure of your business before acting.',
  },
  magnus: {
    type: 'Forensic Intelligence',
    tagline: 'Expose the difference between perceived performance and real data.',
  },
  simfore: {
    type: 'Simulation Intelligence',
    tagline: 'Evaluate decisions by modeling outcomes before execution.',
  },
}

// ─── Animation helper ──────────────────────────────────────────────────────

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay },
  }
}

// ─── Component ─────────────────────────────────────────────────────────────

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

  // Max 1 primary, 1 secondary
  const recommendedSystems = result.recommendedSystems
    .map((id) => intelligenceSystems.find((s) => s.id === id))
    .filter(Boolean)
    .slice(0, 2)

  // Max 2 apps
  const recommendedApps = applications.filter((app) =>
    app.poweredBy.some((sysId) => result.recommendedSystems.includes(sysId as SystemId))
  ).slice(0, 2)

  return (
    <div className="min-h-screen bg-[#070A12] pb-24 font-sans">
      {/* ── Top bar ──────────────────────────────────────────────────────── */}
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
        {/* ── 1. Header ──────────────────────────────────────────────────── */}
        <motion.div className="mb-14 text-center" {...fadeUp(0)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Your AI Intelligence Blueprint
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            Based on your inputs, here is the most relevant intelligence direction for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* ── 2. What We Understood ──────────────────────────────────── */}
            <motion.div {...fadeUp(0.1)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
              <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" /> What We Understood
              </h2>
              <div className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.02]">
                <ul className="space-y-4 mb-6">
                  {result.businessContext.slice(0, 4).map((item) => (
                    <li key={item.label} className="flex flex-col">
                      <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-1">{item.label}</span>
                      <span className="text-slate-200 text-sm font-medium">{item.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-blue-300/90 text-sm italic font-medium leading-relaxed">
                    "This indicates a need for decision intelligence rather than isolated automation."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* ── 5. Expected Impact ─────────────────────────────────────── */}
            <motion.div {...fadeUp(0.2)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
              <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" /> Expected Impact
              </h2>
              <div className="glass-card rounded-2xl p-6 border border-white/5 bg-white/[0.02]">
                <ul className="space-y-3">
                  {result.expectedOutcomes.slice(0, 3).map((outcome, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-green-500/20">
                        <CheckCircle2 size={12} className="text-green-400" />
                      </div>
                      <span className="text-slate-300 text-sm font-medium leading-relaxed">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* ── 3. Recommended System ──────────────────────────────────── */}
            <motion.div {...fadeUp(0.3)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
              <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Recommended System
              </h2>
              <div className="space-y-4">
                {recommendedSystems.map((system, i) => {
                  if (!system) return null
                  const color = systemBadgeColor[system.id as SystemId]
                  const reason = result.systemReasons[system.id]
                  const staticCopy = systemCopy[system.id as SystemId]
                  
                  return (
                    <div
                      key={system.id}
                      className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group border border-white/10"
                      style={{ background: 'rgba(15,20,35,0.4)' }}
                    >
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-20 pointer-events-none" style={{ background: system.accentHex }} />
                      
                      <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2 flex-wrap">
                            <h3 className="text-2xl font-black tracking-tight" style={{ color: system.accentHex }}>
                              {system.name}
                            </h3>
                            <Badge color={color}>{staticCopy.type}</Badge>
                            <Badge color={i === 0 ? 'blue' : 'default'}>
                              {i === 0 ? 'Primary Fit' : 'Secondary Fit'}
                            </Badge>
                          </div>
                          <p className="text-white text-base font-medium mb-4">
                            {staticCopy.tagline}
                          </p>
                          {reason && (
                            <div className="bg-white/5 rounded-lg p-4 border border-white/5">
                              <p className="text-slate-400 text-sm leading-relaxed">
                                <span className="text-slate-300 font-semibold mr-2">Why it fits:</span>
                                {reason}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>

            {/* ── 4. Recommended Product / Application ───────────────────── */}
            <motion.div {...fadeUp(0.4)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
              <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" /> Relevant Application
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedApps.length > 0 ? (
                  recommendedApps.map((app) => (
                    <div key={app.id} className="glass-card rounded-2xl p-6 border border-white/10 bg-[#0c1222]/50 hover:bg-[#0c1222] transition-colors flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                          <Box size={18} />
                        </div>
                        <h4 className="text-white font-bold text-lg">{app.name}</h4>
                      </div>
                      <p className="text-slate-400 text-sm mb-5 flex-grow leading-relaxed">
                        {app.tagline || app.description.substring(0, 80) + '...'}
                      </p>
                      <Link
                        to={`/products#${app.id}`}
                        className="inline-flex items-center gap-1.5 text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors mt-auto"
                      >
                        Explore Application <ArrowRight size={14} />
                      </Link>
                    </div>
                  ))
                ) : (
                  <div className="glass-card rounded-2xl p-6 border border-white/10 bg-[#0c1222]/50 col-span-1 sm:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-slate-500/10 text-slate-400">
                        <Box size={18} />
                      </div>
                      <h4 className="text-white font-bold text-lg">Custom Intelligence System</h4>
                    </div>
                    <p className="text-slate-400 text-sm mb-0 leading-relaxed">
                      Your challenge may require a tailored system rather than an off-the-shelf product. We design and build bespoke intelligence layers for complex operational environments.
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── 6. Next Step CTA ─────────────────────────────────────────── */}
        <motion.div className="mt-12" {...fadeUp(0.5)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <div className="glass-card rounded-[2rem] p-10 md:p-12 text-center border border-blue-500/20 bg-gradient-to-b from-[#0a1226] to-[#070A12] shadow-[0_0_40px_rgba(59,130,246,0.1)] relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Ready to discuss this blueprint?
            </h2>
            <p className="text-slate-400 text-base mb-8 max-w-xl mx-auto leading-relaxed">
              Book a short strategy call and we’ll map this into a practical implementation path.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button to="/contact" size="lg" className="w-full sm:w-auto shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                Book a Strategy Call <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button to="/products" variant="outline" size="lg" className="w-full sm:w-auto border-white/10 hover:bg-white/5">
                Explore Products
              </Button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
