import { motion } from 'framer-motion'
import { Database, Brain, GitBranch, Bot, CheckSquare, TrendingUp, ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { CTABanner } from '@/components/sections/CTABanner'

const ecosystemNodes = [
  {
    id: 'data',
    label: 'Data',
    description: 'Raw signals from across your organization — operational, financial, behavioral, and external.',
    icon: Database,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    detail: 'Your existing data infrastructure is the foundation. We connect to it, normalize it, and make it decision-ready.',
  },
  {
    id: 'intelligence',
    label: 'Intelligence',
    description: 'The analytical layer that transforms raw data into patterns, signals, and structured insight.',
    icon: Brain,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    detail: 'Intelligence is not just analysis. It\'s the system that knows what patterns mean for specific decisions.',
  },
  {
    id: 'simulation',
    label: 'Simulation',
    description: 'Forward-looking models that test scenarios and forecast outcomes before decisions are made.',
    icon: GitBranch,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    detail: 'Before you commit, simulate. Simulation layers show you the likely consequences of different choices.',
  },
  {
    id: 'agents',
    label: 'Agents',
    description: 'Specialized AI agents that execute decisions, automate workflows, and surface recommendations.',
    icon: Bot,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    detail: 'Agents act on intelligence. They handle routine decisions so your team focuses on the strategic ones.',
  },
  {
    id: 'decisions',
    label: 'Decisions',
    description: 'The structured, intelligence-backed choices that drive operational and strategic direction.',
    icon: CheckSquare,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    detail: 'Every decision in this layer is traceable, confidence-scored, and connected to the data that informed it.',
  },
  {
    id: 'outcomes',
    label: 'Outcomes',
    description: 'Measurable business results that feed back into the intelligence layer — closing the learning loop.',
    icon: TrendingUp,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    detail: 'Outcomes aren\'t just results — they\'re feedback that makes the entire system smarter over time.',
  },
]

const integrationLayers = [
  {
    title: 'Single-system deployment',
    description: 'Start with the system that addresses your most pressing decision challenge. Each product stands alone.',
    example: 'Deploy the Decision Intelligence Engine to improve a specific strategic decision cycle.',
  },
  {
    title: 'Connected intelligence',
    description: 'Link two or more systems so insights from one inform decisions in another.',
    example: 'Connect Predictive Analytics to the Business Insight Dashboard for forward-looking executive views.',
  },
  {
    title: 'Full ecosystem',
    description: 'The complete decision infrastructure — data flows through every layer, agents act, outcomes feed back.',
    example: 'Enterprise-grade decision infrastructure where every operational signal contributes to better choices.',
  },
]

export function Ecosystem() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 hero-gradient grid-bg overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
              The Intelligence Ecosystem
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Connected systems create{' '}
              <span className="gradient-text">compound intelligence</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Each system is powerful alone. Together, they form a connected decision infrastructure where data flows, intelligence compounds, and outcomes feed back into better decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Flow */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Intelligence Loop"
            title="From signal to"
            titleHighlight="strategic outcome"
            description="This is how decision intelligence flows through your organization when the full ecosystem is active."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemNodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${node.bg} flex items-center justify-center flex-shrink-0`}>
                      <node.icon size={20} className={node.color} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-slate-500 text-xs">0{i + 1}</span>
                        <span className="text-white font-bold text-lg">{node.label}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm mb-3 leading-relaxed">{node.description}</p>
                  <p className="text-slate-500 text-xs leading-relaxed italic">{node.detail}</p>

                  {i < ecosystemNodes.length - 1 && (
                    <div className="mt-4 pt-4 border-t border-blue-500/10 flex items-center gap-1 text-blue-400 text-xs">
                      <span>Feeds into</span>
                      <ArrowRight size={10} />
                      <span className="font-medium">{ecosystemNodes[i + 1].label}</span>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Paths */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Deployment Paths"
            title="Start focused."
            titleHighlight="Scale intelligently."
            description="You don't need to deploy everything at once. Start with the highest-impact layer and expand as the system proves its value."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {integrationLayers.map((layer, i) => (
              <motion.div
                key={layer.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card glow className="h-full p-6">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{layer.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">{layer.description}</p>
                  <div className="bg-blue-500/5 border border-blue-500/15 rounded-lg p-3">
                    <p className="text-blue-300 text-xs leading-relaxed italic">{layer.example}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Design your decision ecosystem."
        description="Your AI plan will show you which systems to deploy first — and how they connect into a coherent intelligence infrastructure."
        primaryLabel="Get Your AI Plan"
        primaryTo="/ai-plan"
        secondaryLabel="See All Systems"
        secondaryTo="/products"
      />
    </>
  )
}
