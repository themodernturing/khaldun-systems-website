import { motion } from 'framer-motion'
import { BookOpen, FileText, Lightbulb, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { CTABanner } from '@/components/sections/CTABanner'

const resourceCategories = [
  {
    icon: BookOpen,
    label: 'Thinking',
    color: 'text-blue-400' as const,
    bg: 'bg-blue-500/10',
    badge: 'blue' as const,
    items: [
      {
        title: 'What decision intelligence actually means',
        description: 'Most organizations already have data. What they lack is a system that turns data into decision-grade intelligence. Here\'s the distinction that matters.',
        tag: 'Concept',
      },
      {
        title: 'The difference between automation and intelligence',
        description: 'Automating a task doesn\'t improve the decision behind it. Understanding this distinction is the starting point for building AI systems that create real business value.',
        tag: 'Perspective',
      },
      {
        title: 'Why most AI dashboards don\'t improve decisions',
        description: 'More data visibility is not the same as better decision-making. Here\'s why dashboards often fail to change how leaders think and act.',
        tag: 'Analysis',
      },
    ],
  },
  {
    icon: FileText,
    label: 'Frameworks',
    color: 'text-purple-400' as const,
    bg: 'bg-purple-500/10',
    badge: 'purple' as const,
    items: [
      {
        title: 'The Decision Intelligence Stack',
        description: 'A framework for understanding the five layers of decision infrastructure: data, intelligence, simulation, execution, and feedback.',
        tag: 'Framework',
      },
      {
        title: 'Measuring AI ROI through decision quality',
        description: 'The right way to evaluate AI investment isn\'t by measuring tasks automated — it\'s by measuring the improvement in decision quality and its downstream business impact.',
        tag: 'Measurement',
      },
      {
        title: 'Starting small: the minimum viable intelligence layer',
        description: 'How to identify the single highest-value decision problem in your organization and build focused intelligence infrastructure around it.',
        tag: 'Strategy',
      },
    ],
  },
  {
    icon: Lightbulb,
    label: 'Sector Insights',
    color: 'text-cyan-400' as const,
    bg: 'bg-cyan-500/10',
    badge: 'cyan' as const,
    items: [
      {
        title: 'Decision intelligence in education: from enrollment to outcomes',
        description: 'How educational institutions can use AI systems to improve enrolment prediction, student retention, and resource allocation decisions.',
        tag: 'Education',
      },
      {
        title: 'Risk intelligence in finance: moving from monitoring to prediction',
        description: 'Why financial services organizations need to move beyond compliance dashboards to proactive risk intelligence systems.',
        tag: 'Finance',
      },
      {
        title: 'Operational intelligence in healthcare: the decision cost of fragmented data',
        description: 'How siloed data in healthcare organizations creates systematic blind spots — and what decision infrastructure changes this.',
        tag: 'Healthcare',
      },
    ],
  },
]

export function Resources() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 hero-gradient grid-bg overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Resources
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Thinking that shapes{' '}
              <span className="gradient-text">how we build</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Frameworks, perspectives, and sector insights from the Khaldun Systems team — on decision intelligence, AI strategy, and the gap between data and action.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources by category */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {resourceCategories.map((cat, ci) => (
            <div key={cat.label} className="mb-16">
              <motion.div
                className="flex items-center gap-3 mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className={`w-9 h-9 rounded-lg ${cat.bg} flex items-center justify-center`}>
                  <cat.icon size={18} className={cat.color} />
                </div>
                <h2 className="text-white font-bold text-xl">{cat.label}</h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (ci * 0.05) + (i * 0.08) }}
                  >
                    <Card hover className="h-full">
                      <Badge color={cat.badge} className="mb-3">{item.tag}</Badge>
                      <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{item.title}</h3>
                      <p className="text-slate-400 text-xs leading-relaxed mb-4">{item.description}</p>
                      <button
                        type="button"
                        className="inline-flex items-center gap-1 text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors"
                        onClick={() => undefined}
                      >
                        Coming soon <ArrowRight size={10} />
                      </button>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter placeholder */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <SectionHeader
            eyebrow="Stay Informed"
            title="Decision intelligence"
            titleHighlight="perspectives, delivered"
            description="New frameworks, sector insights, and thinking on AI strategy — written for decision-makers, not just technologists."
          />
          <div className="glass-card rounded-xl p-6 glow-border">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/5 border border-blue-500/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                aria-label="Email address"
              />
              <Button size="md">
                Subscribe
              </Button>
            </div>
            <p className="text-slate-500 text-xs mt-3">No noise. Useful thinking only.</p>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to apply this thinking?"
        description="Get a personalized AI plan built around your specific decision challenges."
        primaryLabel="Get Your AI Plan"
        primaryTo="/ai-plan"
        secondaryLabel="Book a Strategy Call"
        secondaryTo="/contact"
      />
    </>
  )
}
