import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Calendar,
  ChevronRight,
  Zap,
  TrendingDown,
  BarChart3,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { generateAIPlan } from '@/utils/aiPlanLogic'
import { intelligenceSystems } from '@/data/intelligenceSystems'
import { applications } from '@/data/applications'
import type { AIPlanAnswers, AIPlanResult, SystemId } from '@/types'

// ─── Colour map ────────────────────────────────────────────────────────────────

const systemBadgeColor: Record<SystemId, 'blue' | 'purple' | 'cyan'> = {
  orbital: 'blue',
  magnus: 'purple',
  simfore: 'cyan',
}

// ─── Practical meaning per system ─────────────────────────────────────────────

const systemPracticalMeaning: Record<SystemId, string> = {
  orbital:
    'You need a structural picture of what is actually driving your outcomes — not dashboards, not reports, but a coherent map of cause and effect. ORBITAL gives your leadership something to act from, not just look at.',
  magnus:
    'You need forensic clarity on where your numbers are telling different stories. MAGNUS applies investor-grade scrutiny to your internal data, surfacing the inconsistencies and hidden risks that routine reporting misses.',
  simfore:
    'You need the ability to test decisions before committing to them. SIMFORE builds scenario models around your structural reality — so leadership can pressure-test strategy against honest simulations of what could happen.',
}

// ─── Practical meaning for combinations ───────────────────────────────────────

function buildPracticalStatement(systems: SystemId[]): string {
  if (systems.includes('orbital') && systems.includes('simfore') && !systems.includes('magnus')) {
    return 'This means you need structured diagnostic intelligence to understand what is driving your business right now — combined with scenario modelling to test where your decisions lead before you commit to them.'
  }
  if (systems.includes('orbital') && systems.includes('magnus') && !systems.includes('simfore')) {
    return 'This means you need structural clarity on how your business actually works — paired with forensic intelligence to surface where your data is contradicting itself or where risk is being understated.'
  }
  if (systems.includes('magnus') && systems.includes('simfore') && !systems.includes('orbital')) {
    return 'This means you need forensic intelligence to audit what your data is really telling you — and simulation intelligence to model what happens if key risks materialise. Together, they give you an honest view of the future.'
  }
  if (systems.includes('orbital') && systems.includes('magnus') && systems.includes('simfore')) {
    return 'This means you need the full intelligence stack: structural understanding of your business, forensic scrutiny of your data, and scenario modelling to test your strategic options. This is the complete decision intelligence picture.'
  }
  if (systems.includes('orbital')) {
    return 'This means you need a structural intelligence layer — a coherent map of the mechanisms driving your outcomes — before any other decision infrastructure can be meaningfully built.'
  }
  if (systems.includes('magnus')) {
    return 'This means you need forensic intelligence applied to your data — to surface the inconsistencies and hidden risk signals that standard reporting systematically misses.'
  }
  return 'This means you need simulation intelligence to model the downstream consequences of strategic decisions before they are made — replacing optimism with evidence.'
}

// ─── Expected impact bullets ──────────────────────────────────────────────────

const impactItems = [
  {
    icon: Zap,
    label: 'Faster decisions',
    detail: 'Leadership acts with confidence because the intelligence is already structured and ready.',
  },
  {
    icon: TrendingDown,
    label: 'Reduced uncertainty',
    detail: 'Scenario modelling replaces guesswork with probability-weighted views of what comes next.',
  },
  {
    icon: BarChart3,
    label: 'Improved planning',
    detail: 'Strategy grounded in structural diagnostics — not assumptions or incomplete data.',
  },
  {
    icon: ShieldCheck,
    label: 'Better risk visibility',
    detail: 'Risks surface when they are still manageable — not after they have already peaked.',
  },
]

// ─── Animation helper ──────────────────────────────────────────────────────────

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay },
  }
}

// ─── Component ────────────────────────────────────────────────────────────────

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

  // Applications grouped under the recommended systems
  const recommendedApps = applications.filter((app) =>
    app.poweredBy.some((sysId) => result.recommendedSystems.includes(sysId as SystemId))
  )

  const practicalStatement = buildPracticalStatement(result.recommendedSystems as SystemId[])

  return (
    <div className="min-h-screen bg-[#020817]">

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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* ── Header ───────────────────────────────────────────────────────── */}
        <motion.div className="mb-14" {...fadeUp(0)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <div className="inline-flex items-center gap-2 text-green-400 bg-green-400/8 border border-green-400/20 rounded-full px-3.5 py-1.5 text-xs font-semibold mb-5">
            <CheckCircle2 size={13} />
            Intelligence diagnosis complete
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3 leading-tight">
            Your Intelligence Diagnosis
          </h1>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl">
            Based on your inputs, we have mapped your business situation to the intelligence systems most likely to move the needle — and explained why.
          </p>
        </motion.div>

        {/* ── 01: What we understand about your business ───────────────────── */}
        <motion.div className="mb-10" {...fadeUp(0.08)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <SectionLabel index="01" label="What we understand about your business" />
          <Card className="p-7">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-5">
              Your situation at a glance
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {result.businessContext.map((item) => (
                <div key={item.label}>
                  <div className="text-slate-500 text-xs mb-1">{item.label}</div>
                  <div className="text-slate-200 text-sm font-medium leading-snug">{item.value}</div>
                </div>
              ))}
            </div>
            {/* Narrative read */}
            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-3">Our read of your situation</p>
              <p className="text-slate-300 text-sm leading-[1.8]">{result.summary}</p>
            </div>
          </Card>
        </motion.div>

        {/* ── 02: Your Intelligence System ─────────────────────────────────── */}
        <motion.div className="mb-10" {...fadeUp(0.16)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <SectionLabel index="02" label="Your Intelligence System" />
          <p className="text-slate-400 text-sm mb-5 leading-relaxed">
            Based on your inputs, we have identified the systems best suited to your business — and the specific reason each was selected.
          </p>
          <div className="space-y-4">
            {recommendedSystems.map((system, i) => {
              if (!system) return null
              const color = systemBadgeColor[system.id as SystemId]
              const reason = result.systemReasons[system.id]
              return (
                <motion.div
                  key={system.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                  transition={{ duration: 0.4, delay: 0.22 + i * 0.1 }}
                >
                  <Card hover className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `${system.accentHex}12`, border: `1px solid ${system.accentHex}30` }}
                      >
                        <span className="font-bold text-base" style={{ color: system.accentHex }}>
                          {system.name[0]}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="text-white font-semibold text-sm">{system.name}</h3>
                          <Badge color={color}>{system.type}</Badge>
                          <Badge color={i === 0 ? 'blue' : 'default'}>
                            {i === 0 ? 'Primary fit' : 'Strong fit'}
                          </Badge>
                        </div>
                        <p className="text-slate-400 text-xs italic mb-3">{system.tagline}</p>
                        {reason && (
                          <p className="text-slate-300 text-sm leading-relaxed mb-3">{reason}</p>
                        )}
                        <Link
                          to={`/intelligence-systems#${system.id}`}
                          className="inline-flex items-center gap-1 text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors"
                        >
                          Full capability detail <ChevronRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* ── 03: How this applies to your business ────────────────────────── */}
        <motion.div className="mb-10" {...fadeUp(0.28)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <SectionLabel index="03" label="How this applies to your business" />
          <Card glow className="p-7">
            <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
              What this means in practice
            </p>
            <p className="text-white text-base leading-[1.8] mb-6">{practicalStatement}</p>
            <div className="space-y-4">
              {recommendedSystems.map((system) => {
                if (!system) return null
                const meaning = systemPracticalMeaning[system.id as SystemId]
                return (
                  <div key={system.id} className="flex items-start gap-3">
                    <div
                      className="w-1 h-full rounded-full flex-shrink-0 mt-1.5 self-stretch"
                      style={{ background: system.accentHex, minHeight: '1rem', width: '3px' }}
                    />
                    <div>
                      <span className="text-xs font-semibold" style={{ color: system.accentHex }}>
                        {system.name} ·
                      </span>{' '}
                      <span className="text-slate-400 text-sm leading-relaxed">{meaning}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </motion.div>

        {/* ── 04: Recommended Applications ─────────────────────────────────── */}
        <motion.div className="mb-10" {...fadeUp(0.36)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <SectionLabel index="04" label="Recommended Applications" />
          <p className="text-slate-400 text-sm mb-5 leading-relaxed">
            These deployed applications are powered by the systems recommended for you — grouped by the intelligence layer they operate under.
          </p>

          {recommendedSystems.map((system, si) => {
            if (!system) return null
            const systemApps = recommendedApps.filter((app) =>
              app.poweredBy.includes(system.id as SystemId)
            )
            if (systemApps.length === 0) return null

            return (
              <motion.div
                key={system.id}
                className="mb-6"
                initial={{ opacity: 0, y: 12 }}
                animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.4, delay: 0.38 + si * 0.1 }}
              >
                {/* System group header */}
                <div
                  className="flex items-center gap-2 mb-3 px-1"
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: system.accentHex }}
                  />
                  <span className="text-xs font-semibold" style={{ color: system.accentHex }}>
                    {system.name}
                  </span>
                  <span className="text-slate-600 text-xs">· {system.type}</span>
                </div>

                <div className="space-y-3">
                  {systemApps.map((app) => {
                    const statusColor =
                      app.status === 'live'
                        ? 'text-green-400 bg-green-400/8 border-green-400/20'
                        : app.status === 'beta'
                        ? 'text-yellow-400 bg-yellow-400/8 border-yellow-400/20'
                        : 'text-slate-500 bg-slate-500/8 border-slate-500/20'
                    const statusLabel =
                      app.status === 'live' ? 'Live' : app.status === 'beta' ? 'Beta' : 'Coming soon'

                    return (
                      <div key={app.id} className="glass-card rounded-xl p-5">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h4 className="text-white font-semibold text-sm">{app.name}</h4>
                          <span
                            className={`text-xs font-medium px-2 py-0.5 rounded-full border flex-shrink-0 ${statusColor}`}
                          >
                            {statusLabel}
                          </span>
                        </div>
                        <p className="text-blue-300/80 text-xs italic mb-2">{app.tagline}</p>
                        <p className="text-slate-400 text-xs leading-relaxed">{app.description}</p>
                      </div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* ── 05: Expected Impact ───────────────────────────────────────────── */}
        <motion.div className="mb-12" {...fadeUp(0.46)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
          <SectionLabel index="05" label="Expected Impact" />
          <Card className="p-7">
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Organisations with your profile that deploy the right intelligence infrastructure typically see these outcomes within 6–12 months.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {impactItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={14} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-slate-200 text-sm font-semibold mb-0.5">{item.label}</p>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            {/* Outcome list from logic */}
            <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-3">
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

        {/* ── Next steps ────────────────────────────────────────────────────── */}
        <motion.div className="mb-12" {...fadeUp(0.54)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
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

        {/* ── Book a call CTA ───────────────────────────────────────────────── */}
        <motion.div {...fadeUp(0.60)} animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}>
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
                  This diagnosis is a starting point. In a 30-minute call, we will validate your situation, pressure-test the recommendations, and map out exactly how to move forward.
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

// ─── SectionLabel helper ──────────────────────────────────────────────────────

function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
        {index} — {label}
      </span>
    </div>
  )
}
