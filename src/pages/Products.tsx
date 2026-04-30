import { motion } from 'framer-motion'
import { Brain, Zap, TrendingUp, LayoutDashboard, Network, Cpu, CheckCircle2, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { CTABanner } from '@/components/sections/CTABanner'
import { products } from '@/data/products'

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  brain: Brain,
  zap: Zap,
  'trending-up': TrendingUp,
  'layout-dashboard': LayoutDashboard,
  network: Network,
  cpu: Cpu,
}

const colorClasses: Record<string, { icon: string; bg: string; badge: 'blue' | 'purple' | 'cyan' | 'indigo' }> = {
  blue: { icon: 'text-blue-400', bg: 'bg-blue-500/10', badge: 'blue' },
  purple: { icon: 'text-purple-400', bg: 'bg-purple-500/10', badge: 'purple' },
  cyan: { icon: 'text-cyan-400', bg: 'bg-cyan-500/10', badge: 'cyan' },
  indigo: { icon: 'text-indigo-400', bg: 'bg-indigo-500/10', badge: 'indigo' },
}

export function Products() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 hero-gradient grid-bg overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Decision Systems
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              AI systems built for{' '}
              <span className="gradient-text">better decisions</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Six purpose-built systems, each targeting a different layer of your decision intelligence infrastructure. Deploy one, or build the full ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {products.map((product, i) => {
              const Icon = iconMap[product.icon] ?? Brain
              const colors = colorClasses[product.color] ?? colorClasses.blue

              return (
                <motion.div
                  key={product.id}
                  id={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card glow className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Left: identity */}
                      <div className="lg:col-span-1">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                          <Icon size={24} className={colors.icon} />
                        </div>
                        <Badge color={colors.badge} className="mb-3">System {String(i + 1).padStart(2, '0')}</Badge>
                        <h2 className="text-xl font-bold text-white mb-2">{product.name}</h2>
                        <p className="text-blue-300 text-sm italic mb-4">{product.tagline}</p>
                        <p className="text-slate-400 text-sm leading-relaxed">{product.description}</p>
                      </div>

                      {/* Middle: capabilities */}
                      <div className="lg:col-span-1">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Capabilities</h3>
                        <ul className="space-y-2">
                          {product.capabilities.map((cap: string) => (
                            <li key={cap} className="flex items-start gap-2 text-sm text-slate-300">
                              <span className={`w-1.5 h-1.5 rounded-full ${colors.bg.replace('/10', '/60')} flex-shrink-0 mt-2`} />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Right: outcomes */}
                      <div className="lg:col-span-1">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Decision Outcomes</h3>
                        <ul className="space-y-3">
                          {product.outcomes.map((outcome: string) => (
                            <li key={outcome} className="flex items-start gap-2">
                              <CheckCircle2 size={14} className="text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-300 leading-relaxed">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6">
                          <Button to="/ai-plan" size="sm" variant="ghost">
                            See if this fits your needs <ArrowRight size={12} />
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

      {/* How they connect */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <SectionHeader
            eyebrow="The Ecosystem"
            title="Systems that work"
            titleHighlight="better together"
            description="Each product is a standalone decision system — but they're designed to connect. The more layers you activate, the more coherent your intelligence infrastructure becomes."
          />
          <Button to="/ecosystem" variant="ghost">
            Explore the ecosystem <ArrowRight size={14} />
          </Button>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
