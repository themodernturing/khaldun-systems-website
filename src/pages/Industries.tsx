import { motion } from 'framer-motion'
import { GraduationCap, HeartPulse, BarChart3, ShoppingBag, Landmark, Building2, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { CTABanner } from '@/components/sections/CTABanner'
import { industries } from '@/data/industries'

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  'graduation-cap': GraduationCap,
  'heart-pulse': HeartPulse,
  'bar-chart-3': BarChart3,
  'shopping-bag': ShoppingBag,
  landmark: Landmark,
  'building-2': Building2,
}

const colorClasses: Record<string, { icon: string; bg: string; badge: 'blue' | 'purple' | 'cyan' | 'indigo' }> = {
  blue: { icon: 'text-blue-400', bg: 'bg-blue-500/10', badge: 'blue' },
  purple: { icon: 'text-purple-400', bg: 'bg-purple-500/10', badge: 'purple' },
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', badge: 'cyan' },
  indigo: { icon: 'text-indigo-400', bg: 'bg-indigo-500/10', badge: 'indigo' },
}

export function Industries() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 hero-gradient grid-bg overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Industries
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Decision intelligence built for{' '}
              <span className="gradient-text">your sector</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              The challenges are different in every sector. The underlying need is the same — better decisions, backed by intelligence that understands your domain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {industries.map((industry, i) => {
              const Icon = iconMap[industry.icon] ?? Building2
              const colors = colorClasses[industry.color] ?? colorClasses.blue

              return (
                <motion.div
                  key={industry.id}
                  id={industry.id}
                  className="scroll-mt-24"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card glow className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                      {/* Header */}
                      <div className="lg:col-span-4">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                          <Icon size={24} className={colors.icon} />
                        </div>
                        <Badge color={colors.badge} className="mb-3">{industry.name}</Badge>
                        <h2 className="text-xl font-bold text-white mb-3">{industry.name}</h2>
                        <p className="text-slate-400 text-sm leading-relaxed">{industry.description}</p>
                      </div>

                      {/* Challenges */}
                      <div className="lg:col-span-4">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Key Challenges</h3>
                        <ul className="space-y-2">
                          {industry.challenges.map((c) => (
                            <li key={c} className="flex items-start gap-2 text-sm text-slate-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 flex-shrink-0 mt-2" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Solutions */}
                      <div className="lg:col-span-4">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Intelligence Solutions</h3>
                        <ul className="space-y-2">
                          {industry.solutions.map((s) => (
                            <li key={s} className="flex items-start gap-2">
                              <CheckCircle2 size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-300 leading-relaxed">{s}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6">
                          <Button to="/ai-plan" size="sm" variant="ghost">
                            Build your sector plan <ArrowRight size={12} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 text-center">
        <div className="max-w-xl mx-auto px-4">
          <SectionHeader
            eyebrow="Not sure where to start?"
            title="Get a sector-specific"
            titleHighlight="AI plan"
            description="Answer 5 questions and receive a tailored AI plan built around your industry's specific challenges."
          />
          <Button to="/ai-plan" size="lg">
            Get Your AI Plan <ArrowRight size={16} />
          </Button>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
