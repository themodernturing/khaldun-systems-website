import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Cpu, Shield, Target, Lightbulb, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/sections/SectionHeader'
import { CTABanner } from '@/components/sections/CTABanner'

const khadijaStrengths = [
  { icon: BarChart3, label: 'Financial Analysis & Strategy' },
  { icon: Shield, label: 'Risk Assessment & Management' },
  { icon: Target, label: 'Business Decision Quality' },
  { icon: Lightbulb, label: 'Commercial & Operational Clarity' },
]

const ammarStrengths = [
  { icon: Cpu, label: 'System Architecture & AI Engineering' },
  { icon: BarChart3, label: 'Data Infrastructure & Pipelines' },
  { icon: Target, label: 'Scalable Technical Implementation' },
  { icon: Users, label: 'Product Design & Delivery' },
]

const values = [
  {
    title: 'Decisions over data',
    description: 'Data is only valuable when it drives better decisions. Every system we build is evaluated by this standard.',
  },
  {
    title: 'Clarity over complexity',
    description: 'We design intelligence systems that make things clearer, not more complex. Simplicity is a feature.',
  },
  {
    title: 'Outcomes over outputs',
    description: 'We measure success by the quality of decisions our clients make — not by the volume of data processed.',
  },
  {
    title: 'Finance-informed thinking',
    description: 'Every AI system should be justifiable in business terms. We bring financial rigor to technical architecture.',
  },
]

export function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 hero-gradient grid-bg overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-purple-400 text-sm font-semibold tracking-widest uppercase mb-4">
              About Khaldun Systems
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Two perspectives.{' '}
              <span className="gradient-text">One purpose.</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Khaldun Systems was built on a conviction: that the best AI systems aren't just technically excellent — they're financially grounded, decision-focused, and built for real business impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Partnership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Meet the Founders"
            title="The strength of a"
            titleHighlight="complementary partnership"
            description="Khadija brings financial intelligence and business decision clarity. Ammar brings technical architecture and AI implementation. Together, they build systems that perform at both levels."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Khadija */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card glow className="h-full p-8">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">K</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Khadija</h3>
                    <p className="text-blue-400 text-sm font-medium">Co-Founder — Business Intelligence & Strategy</p>
                    <p className="text-slate-500 text-xs mt-1">Chartered Accountant | Finance, Risk & Decision Strategy</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-slate-300 leading-relaxed">
                    A Chartered Accountant with deep expertise in financial analysis, risk management, and strategic decision-making. Khadija ensures that every AI system Khaldun builds is grounded in business reality.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Her perspective shapes how we frame problems: not as technology challenges, but as decision quality challenges that technology can solve. She brings the financial rigor that keeps AI implementations accountable to outcomes that matter.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Areas of Expertise</p>
                  {khadijaStrengths.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <Icon size={14} className="text-blue-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Ammar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card glow className="h-full p-8">
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-2xl font-bold">A</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Ammar</h3>
                    <p className="text-purple-400 text-sm font-medium">Co-Founder — Technology & System Architecture</p>
                    <p className="text-slate-500 text-xs mt-1">AI Engineer | System Architecture & Implementation</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-slate-300 leading-relaxed">
                    A systems architect and AI engineer with expertise in building scalable, intelligent infrastructure. Ammar translates the strategic intent of every engagement into technical systems that perform under real-world conditions.
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    His approach to architecture is shaped by a fundamental belief: that technical complexity should serve clarity, not create it. He builds systems that are powerful under the hood but decision-oriented at the surface.
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Areas of Expertise</p>
                  {ammarStrengths.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-purple-500/10 flex items-center justify-center">
                        <Icon size={14} className="text-purple-400" />
                      </div>
                      <span className="text-slate-300 text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Combination */}
      <section className="py-24 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="glass-card rounded-2xl p-10 text-center glow-border">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                The Combined Capability
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Finance-driven decision intelligence<br />
                <span className="text-slate-500">+</span><br />
                Technology-driven system architecture
              </h2>
              <p className="text-xl text-blue-300 font-medium mb-4">
                = Intelligence systems that create measurable impact.
              </p>
              <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
                This combination is rare. Most AI companies are purely technical — they build impressive systems without business grounding. We build systems that are technically excellent because they're commercially accountable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Believe"
            title="The principles that shape"
            titleHighlight="how we build"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full">
                  <h3 className="text-white font-semibold mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="text-slate-400 mb-6 text-lg">
            Want to see what we'd build for you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/ai-plan" size="lg">
              Get Your AI Plan <ArrowRight size={16} />
            </Button>
            <Button to="/contact" variant="ghost" size="lg">
              Talk to the Founders
            </Button>
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's build something that matters."
        description="Every engagement starts with understanding your decisions — not your data. Book a strategy call and we'll tell you exactly where AI can make the difference."
        primaryLabel="Book a Strategy Call"
        primaryTo="/contact"
        secondaryLabel="See Our Work"
        secondaryTo="/products"
      />
    </>
  )
}
