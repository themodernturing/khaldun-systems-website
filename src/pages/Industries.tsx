import { motion } from 'framer-motion'
import { GraduationCap, HeartPulse, BarChart3, ShoppingBag, Landmark, Building2, ArrowRight, CheckCircle2, Microscope, Scale, Building, Factory, ShoppingCart, Utensils, Wheat, Leaf, Briefcase, ExternalLink } from 'lucide-react'
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
  microscope: Microscope,
  scale: Scale,
  building: Building,
  factory: Factory,
  'shopping-cart': ShoppingCart,
  utensils: Utensils,
  wheat: Wheat,
  leaf: Leaf,
  briefcase: Briefcase,
}

const colorClasses: Record<string, { icon: string; bg: string; badge: 'blue' | 'purple' | 'cyan' | 'indigo' | 'emerald' | 'rose' | 'amber' }> = {
  blue: { icon: 'text-blue-400', bg: 'bg-blue-500/10', badge: 'blue' },
  purple: { icon: 'text-purple-400', bg: 'bg-purple-500/10', badge: 'purple' },
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', badge: 'cyan' },
  indigo: { icon: 'text-indigo-400', bg: 'bg-indigo-500/10', badge: 'indigo' },
  emerald: { icon: 'text-emerald-400', bg: 'bg-emerald-500/10', badge: 'emerald' },
  rose: { icon: 'text-rose-400', bg: 'bg-rose-500/10', badge: 'rose' },
  amber: { icon: 'text-amber-400', bg: 'bg-amber-500/10', badge: 'amber' },
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
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-4">
              The challenges are different in every sector. The underlying need is the same — better decisions, backed by intelligence that understands your domain.
            </p>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto italic">
              Some products are existing systems; others represent custom intelligence systems Khaldun can design for sector-specific problems.
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

                      {/* Products & Outcomes */}
                      <div className="lg:col-span-4">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Sector-Specific Intelligence Products</h3>
                        <ul className="space-y-4">
                          {industry.products.map((p) => (
                            <li key={p.name} className="flex flex-col gap-1">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-300 leading-relaxed">{p.name}</span>
                              </div>
                              {p.link && (
                                <a 
                                  href={p.link} 
                                  target="_blank" 
                                  rel="noreferrer" 
                                  className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 ml-6 w-fit"
                                >
                                  View demo <ExternalLink size={10} />
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>

                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-8 mb-4">Expected Outcomes</h3>
                        <ul className="space-y-2 mb-6">
                          {industry.outcomes.map((o) => (
                            <li key={o} className="flex items-start gap-2 text-sm text-slate-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50 flex-shrink-0 mt-2" />
                              {o}
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
