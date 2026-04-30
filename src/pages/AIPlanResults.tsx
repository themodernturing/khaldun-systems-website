import { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, RotateCcw, Calendar, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { generateAIPlan } from '@/utils/aiPlanLogic'
import { products } from '@/data/products'
import { industries } from '@/data/industries'
import type { AIPlanAnswers, AIPlanResult } from '@/types'

const colorMap: Record<string, 'blue' | 'purple' | 'cyan' | 'indigo'> = {
  'decision-intelligence-engine': 'blue',
  'ai-workflow-intelligence': 'purple',
  'predictive-analytics-system': 'cyan',
  'business-insight-dashboard': 'indigo',
  'ai-agent-ecosystem': 'purple',
  'custom-ai-system-architecture': 'blue',
}

export function AIPlanResults() {
  const location = useLocation()
  const navigate = useNavigate()
  const [result, setResult] = useState<AIPlanResult | null>(null)
  const [answers, setAnswers] = useState<AIPlanAnswers | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const state = location.state as { answers: AIPlanAnswers } | null
    if (!state?.answers) {
      navigate('/ai-plan')
      return
    }
    const plan = generateAIPlan(state.answers)
    setAnswers(state.answers)
    setResult(plan)
    setTimeout(() => setVisible(true), 100)
  }, [location.state, navigate])

  if (!result || !answers) return null

  const recommendedProducts = result.recommendedProducts
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean)

  const relevantIndustries = result.relevantIndustries
    .map((id) => industries.find((i) => i.id === id))
    .filter(Boolean)

  return (
    <div className="min-h-screen bg-[#020817] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <CheckCircle2 size={16} />
            Your AI Plan is ready
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Decision Intelligence Plan
          </h1>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Based on your inputs, here's a tailored view of where AI decision systems can have the greatest impact in your organization.
          </p>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <Card glow className="p-8">
            <h2 className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">Diagnostic Summary</h2>
            <p className="text-slate-200 text-lg leading-relaxed">{result.summary}</p>
          </Card>
        </motion.div>

        {/* Recommended Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-white font-bold text-xl mb-4">Recommended Systems</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recommendedProducts.map((product, i) => {
              if (!product) return null
              const color = colorMap[product.id] ?? 'blue'
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 16 }}
                  transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
                >
                  <Card hover className="h-full">
                    <Badge color={color} className="mb-3">
                      {i === 0 ? 'Primary Recommendation' : 'Recommended'}
                    </Badge>
                    <h3 className="text-white font-semibold text-sm mb-2">{product.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4">{product.tagline}</p>
                    <Link
                      to={`/products#${product.id}`}
                      className="inline-flex items-center gap-1 text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors"
                    >
                      Learn more <ChevronRight size={12} />
                    </Link>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Expected Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <Card className="p-8">
            <h2 className="text-white font-bold text-lg mb-5">Expected Outcomes</h2>
            <div className="space-y-3">
              {result.expectedOutcomes.map((outcome, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                  <p className="text-slate-300 text-sm leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Relevant Industries */}
        {relevantIndustries.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mb-8"
          >
            <h2 className="text-white font-bold text-xl mb-4">Sector Intelligence</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relevantIndustries.map((industry) => {
                if (!industry) return null
                return (
                  <Card key={industry.id} hover>
                    <h3 className="text-white font-semibold text-sm mb-1">{industry.name}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-3 line-clamp-2">{industry.description}</p>
                    <Link
                      to={`/industries#${industry.id}`}
                      className="inline-flex items-center gap-1 text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors"
                    >
                      See sector solutions <ChevronRight size={12} />
                    </Link>
                  </Card>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Suggested Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-white font-bold text-xl mb-4">Explore Next</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {result.suggestedPages.map((page, i) => (
              <Link
                key={i}
                to={page.path}
                className="glass-card rounded-xl p-4 hover:border-blue-500/30 transition-all group"
              >
                <div className="font-semibold text-white text-sm mb-1 group-hover:text-blue-300 transition-colors flex items-center gap-1">
                  {page.label} <ArrowRight size={12} />
                </div>
                <div className="text-slate-400 text-xs">{page.reason}</div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <div className="glass-card rounded-2xl p-8 text-center glow-border">
            <Calendar className="text-blue-400 mx-auto mb-4" size={32} />
            <h2 className="text-white font-bold text-2xl mb-3">
              Book a Strategy Call
            </h2>
            <p className="text-slate-400 mb-6 text-sm leading-relaxed max-w-md mx-auto">
              Your AI plan is a starting point. In a 30-minute strategy session, we'll validate your priorities and outline exactly how to move forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button to="/contact" size="lg">
                Book a Strategy Call <ArrowRight size={16} />
              </Button>
              <button
                type="button"
                onClick={() => navigate('/ai-plan')}
                className="inline-flex items-center justify-center gap-2 text-slate-400 text-sm hover:text-slate-200 transition-colors py-3 px-6"
              >
                <RotateCcw size={14} />
                Retake the plan
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
