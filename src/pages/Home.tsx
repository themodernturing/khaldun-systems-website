import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2, Zap, Layers, Cpu, Clock, Box, Building2, ChevronRight, Activity } from 'lucide-react'
import { Button } from '@/components/ui/Button'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.05 },
    transition: { duration: 0.45, delay },
  }
}

const triageOptions = [
  { value: 'diagnose', label: 'Diagnose a business problem' },
  { value: 'simulate', label: 'Simulate a decision' },
  { value: 'build', label: 'Build an AI system' },
  { value: 'unsure', label: 'Not sure yet' },
]

const edgeCards = [
  {
    icon: Layers,
    label: 'Designed for High-Stakes Decisions',
    detail: 'Built for decisions where clarity, risk, and timing matter.',
  },
  {
    icon: Cpu,
    label: 'Built on First Principles',
    detail: 'We start with business logic, not tool selection.',
  },
  {
    icon: Zap,
    label: 'Strategy + Engineering',
    detail: 'Decision architecture and technical execution work together.',
  },
  {
    icon: Clock,
    label: 'Time to Impact',
    detail: 'Focused systems designed to move from problem to working prototype quickly.',
  },
]

const coreSystems = [
  {
    id: 'orbital',
    name: 'ORBITAL',
    type: 'Diagnostic Intelligence',
    tagline: 'Reveal the underlying structure of your business before acting.',
    accent: '#3b82f6',
    glow: 'rgba(59,130,246,0.20)',
    border: 'rgba(59,130,246,0.4)',
  },
  {
    id: 'magnus',
    name: 'MAGNUS',
    type: 'Forensic Intelligence',
    tagline: 'Expose the difference between perceived performance and real data.',
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.15)',
    border: 'rgba(245,158,11,0.4)',
  },
  {
    id: 'simfore',
    name: 'SIMFORE',
    type: 'Simulation Intelligence',
    tagline: 'Evaluate decisions by modeling outcomes before execution.',
    accent: '#06b6d4',
    glow: 'rgba(6,182,212,0.18)',
    border: 'rgba(6,182,212,0.4)',
  },
]

const productsList = [
  'ORBITAL',
  'MAGNUS',
  'SIMFORE',
  'ECL Foresight',
  'CLINOS',
  'MindMatch',
  'LexFlow AI',
  'EmissIQ Carbon',
]

const industriesList = [
  'Diagnostic Labs',
  'Finance',
  'Education',
  'Legal & Professional Services',
  'Climate & Sustainability',
  'Enterprise Strategy',
]

export function Home() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)
  const [launching, setLaunching] = useState(false)
  const [freeText, setFreeText] = useState('')

  function handleGenerate() {
    setLaunching(true)
    setTimeout(() => navigate('/ai-plan'), 600)
  }

  return (
    <div style={{ background: '#070A12' }}>

      {/* ══════════════════════════════════════════════════════════════
          1. HERO WITH AI PLAN PREVIEW
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[95vh] flex items-center overflow-hidden"
        style={{
          background:
            'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(29,78,216,0.18) 0%, transparent 65%), radial-gradient(ellipse 50% 35% at 85% 25%, rgba(109,40,217,0.10) 0%, transparent 55%), #070A12',
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none mix-blend-screen" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

          {/* Left: positioning copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                <Activity size={12} className="text-blue-400" />
                DECISION INTELLIGENCE PLATFORM
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              AI Systems That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400">
                Think, Simulate &amp; Decide.
              </span>
            </motion.h1>

            <motion.p
              className="text-slate-400 text-lg leading-relaxed mb-10 max-w-lg font-medium"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              Khaldun Systems builds intelligence layers for businesses — turning data, workflows, and operations into decision-making ecosystems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
            >
              <Button
                to="/ai-plan"
                size="lg"
                className="shadow-[0_0_30px_rgba(59,130,246,0.25)] hover:shadow-[0_0_45px_rgba(59,130,246,0.4)] transition-shadow"
              >
                Get Your AI Intelligence Blueprint <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button
                to="/products"
                variant="ghost"
                size="lg"
                className="border border-white/10 hover:bg-white/5"
              >
                Explore Products
              </Button>
            </motion.div>
          </div>

          {/* Right: AI Plan preview card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div
              className="glass-card rounded-[2rem] p-8 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden"
              style={{ background: 'rgba(8,12,24,0.80)' }}
            >
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/12 blur-[80px] rounded-full pointer-events-none" />
              <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-indigo-500/8 blur-[80px] rounded-full pointer-events-none" />

              <div className="flex items-center gap-2 mb-5 relative z-10">
                <div className="inline-flex h-6 items-center rounded-full bg-blue-500/20 px-2.5 text-[10px] font-bold tracking-wider text-blue-400 uppercase border border-blue-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse mr-1.5" />
                  Live intake
                </div>
                <span className="text-[10px] font-semibold text-slate-500 tracking-wide">3-minute blueprint</span>
              </div>

              <h3 className="text-white font-bold text-xl mb-5 tracking-tight relative z-10">
                Start with your challenge
              </h3>

              <div className="space-y-2.5 mb-5 relative z-10">
                {triageOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => { setSelected(opt.value); handleGenerate(); }}
                    className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-300 flex items-center justify-between group ${
                      selected === opt.value
                        ? 'border-blue-400/60 bg-blue-500/15 shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                        : 'border-white/[0.08] hover:border-blue-400/30 hover:bg-white/[0.04]'
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold transition-colors ${
                        selected === opt.value ? 'text-blue-100' : 'text-slate-300 group-hover:text-white'
                      }`}
                    >
                      {opt.label}
                    </span>
                    <ArrowRight
                      size={13}
                      className={`transition-all ${
                        selected === opt.value
                          ? 'text-blue-400 translate-x-0.5'
                          : 'text-slate-600 group-hover:text-slate-400'
                      }`}
                    />
                  </button>
                ))}
              </div>

              <div className="mb-5 relative z-10">
                <input
                  type="text"
                  value={freeText}
                  onChange={(e) => setFreeText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                  placeholder="We are trying to..."
                  className="w-full bg-[#03050a]/60 border border-white/[0.12] rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                />
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={launching}
                className="w-full btn-primary rounded-xl py-3.5 text-sm font-bold inline-flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] relative z-10"
              >
                {launching ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                    <span>Preparing your plan…</span>
                  </>
                ) : (
                  <>
                    <span>Start Your AI Plan</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. THE KHALDUN EDGE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 relative border-t border-white/[0.04]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-900/[0.025] to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">

          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <div className="inline-flex items-center justify-center gap-4 mb-5">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
              <h2 className="text-3xl font-bold text-white tracking-wide">The Khaldun Edge</h2>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-2xl mx-auto">
              Named after Ibn Khaldun, Khaldun Systems is built around a simple principle:{' '}
              <span className="text-slate-300 font-medium">understand the system before trying to automate it.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {edgeCards.map((c, i) => (
              <motion.div key={c.label} {...fadeUp(i * 0.06)}>
                <div className="rounded-2xl p-6 h-full flex flex-col items-start border border-white/10 hover:border-amber-500/40 transition-all duration-300 bg-[#0d1220] hover:bg-[#0f1428] hover:shadow-[0_0_30px_rgba(245,158,11,0.08)] group">
                  <div className="w-10 h-10 rounded-xl bg-[#111827] border border-amber-500/30 flex items-center justify-center mb-5 text-amber-400 group-hover:scale-110 group-hover:border-amber-500/60 transition-all duration-300">
                    <c.icon size={18} strokeWidth={2} />
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2.5 leading-snug">{c.label}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{c.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. PRODUCTS × INDUSTRIES ECOSYSTEM
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 relative border-t border-white/[0.04]">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none mix-blend-screen" />

        <div className="relative max-w-6xl mx-auto z-10">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">
              Products and industries work together.
            </h2>
            <p className="text-slate-400 text-base max-w-xl mx-auto">
              Explore Khaldun by what we build, or by where intelligence creates value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
            {/* Center connector arrow */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#070A12] border border-white/10 items-center justify-center text-slate-500 shadow-[0_0_20px_rgba(0,0,0,0.8)]">
              <ArrowRight size={18} />
            </div>

            {/* What we build */}
            <motion.div {...fadeUp(0.08)}>
              <div className="rounded-2xl pt-7 px-8 pb-8 border border-blue-500/25 bg-[#0b1220] hover:shadow-[0_0_36px_rgba(59,130,246,0.10)] transition-shadow h-full flex flex-col">
                <div className="flex items-center gap-3 mb-7 pb-6 border-b border-blue-500/20">
                  <div className="p-2.5 bg-blue-500/15 border border-blue-500/30 rounded-xl text-blue-400">
                    <Box size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">What we build</h3>
                </div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {productsList.map((item) => (
                    <li key={item} className="flex items-center text-slate-300 text-sm font-medium group">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500/70 mr-3.5 shadow-[0_0_8px_rgba(59,130,246,0.7)] flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  to="/products"
                  className="w-full justify-center bg-blue-600/10 text-blue-300 hover:bg-blue-600/20 border border-blue-500/30"
                >
                  Explore Products <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* Where we apply it */}
            <motion.div {...fadeUp(0.15)}>
              <div className="rounded-2xl pt-7 px-8 pb-8 border border-purple-500/25 bg-[#0d0b1c] hover:shadow-[0_0_36px_rgba(168,85,247,0.10)] transition-shadow h-full flex flex-col">
                <div className="flex items-center gap-3 mb-7 pb-6 border-b border-purple-500/20">
                  <div className="p-2.5 bg-purple-500/15 border border-purple-500/30 rounded-xl text-purple-400">
                    <Building2 size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Where we apply it</h3>
                </div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {industriesList.map((item) => (
                    <li key={item} className="flex items-center text-slate-300 text-sm font-medium group">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500/70 mr-3.5 shadow-[0_0_8px_rgba(168,85,247,0.7)] flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="group-hover:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  to="/industries"
                  className="w-full justify-center bg-purple-600/10 text-purple-300 hover:bg-purple-600/20 border border-purple-500/30"
                >
                  Explore Industries <ArrowRight size={14} className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. THREE FLAGSHIP SYSTEMS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 relative border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white">
              Three flagship systems. One intelligence architecture.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreSystems.map((sys, i) => (
              <motion.div key={sys.id} {...fadeUp(i * 0.07)}>
                <Link to={`/products#${sys.id}`} className="block h-full group">
                  <div
                    className="rounded-2xl p-8 h-full transition-all hover:-translate-y-1.5 duration-500 flex flex-col relative"
                    style={{
                      background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${sys.glow} 0%, transparent 70%), rgb(10,14,26)`,
                      boxShadow: `0 0 0 1px ${sys.border} inset`,
                    }}
                  >
                    <div
                      className="absolute top-0 left-0 w-full h-0.5 rounded-t-2xl"
                      style={{ background: `linear-gradient(to right, transparent, ${sys.accent}, transparent)` }}
                    />
                    <div className="text-2xl font-black mb-2" style={{ color: sys.accent }}>
                      {sys.name}
                    </div>
                    <div
                      className="text-[10px] font-extrabold uppercase tracking-widest mb-5"
                      style={{ color: sys.accent }}
                    >
                      {sys.type}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed flex-grow mb-8">
                      {sys.tagline}
                    </p>
                    <div className="flex items-center text-xs font-bold text-white/40 group-hover:text-white transition-colors">
                      Explore {sys.name}{' '}
                      <ChevronRight size={14} className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 border-t border-white/[0.04]">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Not sure where to begin?
            </h2>
            <p className="text-slate-400 text-base mb-9 max-w-md mx-auto leading-relaxed">
              Start with a short intelligence blueprint and map your challenge to the right system.
            </p>
            <Button
              to="/ai-plan"
              size="lg"
              className="shadow-[0_0_36px_rgba(59,130,246,0.28)] hover:shadow-[0_0_52px_rgba(59,130,246,0.45)] transition-shadow"
            >
              Start Your AI Plan <ArrowRight size={17} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
