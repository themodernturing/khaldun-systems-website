import { motion } from 'framer-motion'
import { Brain, Database, Cloud, Server, Shield, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { CTABanner } from '@/components/sections/CTABanner'

const techCategories = [
  {
    icon: Brain,
    name: 'AI & Machine Learning',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    description: 'Our AI layer uses modern language models, predictive algorithms, and decision-optimization techniques — selected for each use case, not applied uniformly.',
    items: [
      { name: 'Large Language Models', description: 'For natural language intelligence, summarization, and insight generation' },
      { name: 'Predictive Modeling', description: 'Statistical and ML-based forecasting of business outcomes' },
      { name: 'Decision Optimization', description: 'Multi-variable recommendation engines for complex trade-offs' },
      { name: 'Anomaly Detection', description: 'Pattern-breaking signal identification across operational streams' },
      { name: 'Reinforcement Learning', description: 'Agent systems that improve from outcome feedback over time' },
    ],
  },
  {
    icon: Database,
    name: 'Data & Analytics',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    description: 'The data layer is where intelligence begins. We build pipelines that normalize, validate, and prepare your data for decision-grade analysis.',
    items: [
      { name: 'Real-Time Data Pipelines', description: 'Continuous data ingestion and transformation at scale' },
      { name: 'Multi-Source Integration', description: 'Connecting ERP, CRM, financial, and operational data' },
      { name: 'Analytics Warehousing', description: 'Structured storage optimized for intelligence queries' },
      { name: 'Data Quality Management', description: 'Automated validation and lineage tracking' },
      { name: 'Event-Driven Architecture', description: 'Systems that respond to business signals as they occur' },
    ],
  },
  {
    icon: Cloud,
    name: 'Infrastructure & Cloud',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    description: 'Intelligence infrastructure must be reliable, scalable, and secure. We build on cloud-native foundations with enterprise-grade resilience.',
    items: [
      { name: 'Cloud-Native Deployment', description: 'Flexible deployment across AWS, Azure, and GCP' },
      { name: 'Containerized Architecture', description: 'Modular, portable system components' },
      { name: 'Auto-Scaling Infrastructure', description: 'Systems that grow with your data and decision volume' },
      { name: 'High Availability Design', description: 'Redundancy and failover built into every layer' },
      { name: 'Performance Optimization', description: 'Sub-second response times for decision-critical queries' },
    ],
  },
  {
    icon: Server,
    name: 'Backend & Frameworks',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    description: 'The engineering layer that makes intelligence systems reliable, maintainable, and extensible over time.',
    items: [
      { name: 'API-First Architecture', description: 'Clean integration contracts with existing systems' },
      { name: 'Microservices Design', description: 'Independent system components that scale separately' },
      { name: 'Workflow Orchestration', description: 'Coordinating complex multi-step AI processes reliably' },
      { name: 'State Management', description: 'Tracking decision context and agent state across sessions' },
      { name: 'Testing & Validation', description: 'Automated regression testing for decision logic accuracy' },
    ],
  },
  {
    icon: Shield,
    name: 'Security & Governance',
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    description: 'Decision systems touch sensitive business data. Security, auditability, and governance are non-negotiable design requirements.',
    items: [
      { name: 'Data Encryption', description: 'End-to-end encryption for data at rest and in transit' },
      { name: 'Role-Based Access Control', description: 'Granular permissions aligned to organizational structure' },
      { name: 'Audit Trails', description: 'Complete traceability of every decision and data access' },
      { name: 'Compliance Architecture', description: 'Support for GDPR, SOC 2, and sector-specific requirements' },
      { name: 'Model Governance', description: 'Version control and bias monitoring for AI models' },
    ],
  },
]

const designPrinciples = [
  {
    title: 'Research-driven selection',
    description: 'We evaluate technology against the specific decision problem — not against market trends or vendor relationships.',
  },
  {
    title: 'Scalability by design',
    description: 'Every system is built to handle 10x your current data volume without architectural rework.',
  },
  {
    title: 'Explainability first',
    description: 'AI recommendations must be explainable. Decision-makers need to understand the "why" behind every signal.',
  },
  {
    title: 'Outcome accountability',
    description: 'Systems are monitored against business outcomes, not just technical performance metrics.',
  },
]

export function Technology() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 hero-gradient grid-bg overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-cyan-600/6 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Technology
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Powerful under the hood.{' '}
              <span className="gradient-text">Decision-ready at the surface.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We build with modern AI, robust data infrastructure, and enterprise-grade architecture — always in service of one goal: better decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {techCategories.map((category, i) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                      <div className={`w-12 h-12 rounded-xl ${category.bg} flex items-center justify-center mb-4`}>
                        <category.icon size={24} className={category.color} />
                      </div>
                      <h2 className="text-xl font-bold text-white mb-3">{category.name}</h2>
                      <p className="text-slate-400 text-sm leading-relaxed">{category.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {category.items.map((item) => (
                          <div key={item.name} className="bg-white/[0.02] rounded-lg p-4 border border-white/[0.06]">
                            <h3 className={`text-sm font-semibold mb-1 ${category.color}`}>{item.name}</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How We Build"
            title="Technology guided by"
            titleHighlight="decision principles"
            description="The best AI systems aren't technically impressive — they're practically effective. These principles guide every architectural decision we make."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {designPrinciples.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card glow className="h-full">
                  <h3 className="text-white font-semibold mb-2">{principle.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{principle.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button to="/about" variant="ghost">
              Meet the builders <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to build on solid foundations?"
        description="Get your AI plan and see which technology stack is recommended for your specific decision challenges."
      />
    </>
  )
}
