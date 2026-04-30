import { motion } from 'framer-motion'
import { ArrowRight, Brain, TrendingUp, Zap, BarChart3, Network, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { CTABanner } from '@/components/sections/CTABanner'
import { SectionHeader } from '@/components/sections/SectionHeader'

const coreCapabilities = [
  {
    icon: Brain,
    title: 'Decision Intelligence',
    description: 'Systems that turn data into decision-ready intelligence — not just dashboards.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'Forward-looking models that give leadership time to act, not react.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Zap,
    title: 'Workflow Intelligence',
    description: 'Decision logic embedded directly into operational processes.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
  },
  {
    icon: BarChart3,
    title: 'Insight Infrastructure',
    description: 'Unified intelligence surfaces that replace scattered reports.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: Network,
    title: 'AI Agent Ecosystems',
    description: 'Coordinated networks of agents that execute with strategic oversight.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: Shield,
    title: 'Risk Intelligence',
    description: 'Proactive risk modeling that surfaces threats before they crystallize.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
]

const differentiators = [
  {
    label: 'Automation',
    replacement: 'Intelligence',
    description: 'We don\'t just automate tasks. We build systems that make better decisions about which tasks matter.',
  },
  {
    label: 'Tools',
    replacement: 'Systems',
    description: 'Isolated tools create isolated data. We build connected systems that reason across your entire operation.',
  },
  {
    label: 'Services',
    replacement: 'Infrastructure',
    description: 'We don\'t deliver projects. We build decision infrastructure that compounds in value over time.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(29,78,216,0.30) 0%, transparent 65%), radial-gradient(ellipse 60% 50% at 75% 30%, rgba(109,40,217,0.18) 0%, transparent 60%), #020817' }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

        {/* Layered ambient glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-700/12 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[350px] bg-purple-700/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[250px] bg-cyan-700/8 rounded-full blur-[70px] pointer-events-none" />

        {/* Thin top highlight line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <span className="inline-flex items-center gap-2 text-blue-300 text-xs font-semibold tracking-[0.2em] uppercase mb-8 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/8 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Decision Intelligence Systems
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            Build Intelligence.{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">Not Just Automation.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-12 max-w-xl mx-auto font-normal"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            AI systems that analyze data, simulate outcomes, and guide better decisions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.4 }}
          >
            <Button to="/ai-plan" size="lg">
              Get Your AI Plan <ArrowRight size={16} />
            </Button>
            <Button to="/products" variant="ghost" size="lg">
              Explore Systems
            </Button>
          </motion.div>

          {/* Divider + stat strip */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
          >
            <div className="w-px h-10 bg-gradient-to-b from-transparent to-blue-500/30 mx-auto mb-8" />
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              {[
                { value: '6', label: 'Decision Systems' },
                { value: '6', label: 'Industries' },
                { value: '1', label: 'Core Purpose' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Shift */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Distinction"
            title="This isn't AI automation."
            titleHighlight="It's decision infrastructure."
            description="Most AI implementations optimize tasks. We build systems that improve the quality of decisions that drive those tasks."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card glow className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-slate-500 text-sm line-through">{item.label}</span>
                    <ArrowRight size={14} className="text-blue-400" />
                    <span className="text-blue-300 font-semibold text-sm">{item.replacement}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Build"
            title="Six systems."
            titleHighlight="One purpose."
            description="Each system is a layer in your decision intelligence infrastructure — designed to work alone or as part of a connected ecosystem."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreCapabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Card hover className="h-full">
                  <div className={`w-10 h-10 rounded-lg ${cap.bg} flex items-center justify-center mb-4`}>
                    <cap.icon size={20} className={cap.color} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{cap.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{cap.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button to="/products" variant="ghost" size="md">
              See All Systems <ArrowRight size={14} />
            </Button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="The Intelligence Loop"
            title="From raw data to"
            titleHighlight="confident decisions"
            description="Our systems don't sit next to your operations — they're woven into the decision layer that drives them."
          />

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 relative">
              {['Data', 'Intelligence', 'Simulation', 'Decisions', 'Outcomes'].map((step, i) => (
                <motion.div
                  key={step}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                >
                  <div className="glass-card rounded-xl p-5 text-center relative z-10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-3 text-white text-sm font-bold">
                      {i + 1}
                    </div>
                    <div className="text-white font-semibold text-sm">{step}</div>
                  </div>
                  {i < 4 && (
                    <div className="hidden lg:flex items-center justify-end absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight size={16} className="text-blue-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/ecosystem"
              className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
            >
              Explore the full ecosystem <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industries"
            title="Built for the sectors where"
            titleHighlight="decisions have consequences"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Education', emoji: '🎓' },
              { name: 'Healthcare', emoji: '⚕️' },
              { name: 'Finance', emoji: '📊' },
              { name: 'Retail', emoji: '🛍️' },
              { name: 'Government', emoji: '🏛️' },
              { name: 'Business', emoji: '🏢' },
            ].map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link to="/industries" className="block">
                  <Card hover className="text-center py-6">
                    <div className="text-2xl mb-2">{ind.emoji}</div>
                    <div className="text-slate-300 text-sm font-medium">{ind.name}</div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders teaser */}
      <motion.section
        className="py-24"
        {...fadeUp}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
            The Founding Perspective
          </span>
          <blockquote className="text-2xl sm:text-3xl font-medium text-white leading-relaxed mb-8">
            "Finance-driven decision thinking, combined with technology-driven system architecture. Two perspectives. One purpose."
          </blockquote>
          <Button to="/about" variant="ghost">
            Meet the Founders <ArrowRight size={14} />
          </Button>
        </div>
      </motion.section>

      <CTABanner />
    </>
  )
}
