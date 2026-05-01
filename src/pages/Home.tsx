import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

// ─── Data ──────────────────────────────────────────────────────────────────────

const triageOptions = [
  { value: 'diagnose', label: 'Diagnose a business problem', detail: 'Find what is structurally happening now.' },
  { value: 'simulate', label: 'Simulate a decision', detail: 'See what happens before you choose.' },
  { value: 'build', label: 'Build an AI system', detail: 'Turn a workflow or domain problem into production AI.' },
  { value: 'unsure', label: 'Not sure yet', detail: 'Let the system guide you.' },
]

const metrics = [
  { value: '20+', label: 'Years Combined Experience' },
  { value: '6', label: 'Industry Verticals' },
  { value: '4', label: 'Continents Advised' },
  { value: 'Weeks', label: 'From Strategy to Deployment' },
]

const edgeCards = [
  { label: 'Designed for High-Stakes Decisions', detail: 'Designed with the discipline required for critical business decisions.' },
  { label: 'Built on First Principles', detail: 'Combining financial thinking with modern AI system design.' },
  { label: 'Strategy + Engineering', detail: 'No separation between thinking and execution — systems are designed end-to-end.' },
  { label: 'Time to Impact', detail: 'From problem to working system in weeks.' },
]

const ecosystemDomains = [
  { label: 'Finance & Compliance', icon: '📊', apps: ['ECL Foresight', 'ConsolidateAI'] },
  { label: 'Education & Assessment', icon: '🎓', apps: ['AI Seekho', 'SchoolIQ', 'MindMatch'] },
  { label: 'Diagnostic Lab Intelligence', icon: '🏥', apps: ['CLINOS'] },
  { label: 'Legal & Professional', icon: '⚖️', apps: ['LexFlow AI', 'Tax Law Agent', 'Legal CRM'] },
  { label: 'Executive & Strategic', icon: '🧭', apps: ['ORBITAL', 'MAGNUS', 'SIMFORE'] },
  { label: 'Sustainability & Climate', icon: '🌿', apps: ['EmissIQ Carbon'] },
  { label: 'Custom Intelligence', icon: '⚙️', apps: ['Bespoke AI Systems'] },
]

const coreSystems = [
  {
    id: 'orbital', name: 'ORBITAL', type: 'Diagnostic Intelligence',
    tagline: 'Reveal the underlying structure of your business before acting.',
    accent: '#3b82f6', glow: 'rgba(59,130,246,0.12)', border: 'rgba(59,130,246,0.25)',
  },
  {
    id: 'magnus', name: 'MAGNUS', type: 'Forensic Intelligence',
    tagline: 'Expose the difference between perceived performance and real data.',
    accent: '#8b5cf6', glow: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.25)',
  },
  {
    id: 'simfore', name: 'SIMFORE', type: 'Simulation Intelligence',
    tagline: 'Evaluate decisions by modeling outcomes before execution.',
    accent: '#06b6d4', glow: 'rgba(6,182,212,0.10)', border: 'rgba(6,182,212,0.25)',
  },
]

const techGrid = [
  { label: 'Agentic Reasoning', detail: 'Multi-step autonomous reasoning over complex domains.' },
  { label: 'Predictive Engines', detail: 'Forward-looking probabilistic models for risk and demand.' },
  { label: 'Automated Logic', detail: 'Decision rules embedded directly into operational workflows.' },
  { label: 'Knowledge Synthesis', detail: 'Structured intelligence extracted from unstructured sources.' },
  { label: 'ESG & Sustainability', detail: 'Regulatory-aligned emissions tracking and pathway modelling.' },
  { label: 'Cognitive Interfaces', detail: 'Natural language interfaces over complex enterprise data.' },
]

const trustCards = [
  { label: 'Designed for High-Stakes Decisions', detail: 'Designed with the discipline required for critical business decisions.' },
  { label: 'Built on First Principles', detail: 'Combining financial thinking with modern AI system design.' },
  { label: 'Strategy + Engineering', detail: 'No separation between thinking and execution — systems are designed end-to-end.' },
  { label: 'Time to Impact', detail: 'From problem to working system in weeks.' },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  }
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-500 mb-3">{children}</p>
  )
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Home() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState<string | null>(null)
  const [launching, setLaunching] = useState(false)
  const [freeText, setFreeText] = useState('')

  function handleTriage(value: string) {
    setSelected(value)
  }

  function handleGenerate() {
    setLaunching(true)
    setTimeout(() => navigate('/ai-plan'), 700)
  }

  return (
    <div style={{ background: '#070A12' }}>

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: 'radial-gradient(ellipse 90% 60% at 50% -10%, rgba(29,78,216,0.22) 0%, transparent 65%), radial-gradient(ellipse 50% 35% at 85% 25%, rgba(109,40,217,0.13) 0%, transparent 55%), #070A12',
        }}
      >
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/6 text-blue-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Decision Intelligence Platform
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-[1.08] tracking-tight mb-5"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.08 }}
            >
              AI Systems That <br />
              <span className="gradient-text">Think, Simulate & Decide.</span>
            </motion.h1>

            <motion.p
              className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
            >
              Khaldun Systems builds intelligence layers for businesses — turning data, workflows, and operations into decision-making ecosystems.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 mb-10"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.24 }}
            >
              <Button to="/ai-plan" size="md">
                Get Your AI Plan <ArrowRight size={14} />
              </Button>
              <Button to="/ecosystem" variant="ghost" size="md">
                Explore the Ecosystem
              </Button>
            </motion.div>

            {/* Metrics */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.34 }}
            >
              {metrics.map((m) => (
                <div key={m.label} className="border-l border-white/[0.08] pl-4">
                  <div className="text-xl font-bold text-white">{m.value}</div>
                  <div className="text-slate-500 text-xs leading-tight">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — AI Plan triage widget */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-6 glow-border" style={{ background: 'rgba(8,14,30,0.92)' }}>
              <p className="text-white font-semibold text-base mb-1">Start with your challenge</p>
              <p className="text-slate-500 text-xs mb-5">Select what fits — or describe it below.</p>

              <div className="space-y-2 mb-5">
                {triageOptions.map((opt) => {
                  const isSelected = selected === opt.value
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleTriage(opt.value)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all duration-200 ${
                        isSelected
                          ? 'border-blue-400/50 bg-blue-500/8'
                          : 'border-white/[0.06] hover:border-white/[0.14] hover:bg-white/[0.02]'
                      }`}
                    >
                      <div className={`text-sm font-medium mb-0.5 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {opt.label}
                      </div>
                      <div className="text-slate-500 text-xs">{opt.detail}</div>
                    </button>
                  )
                })}
              </div>

              {/* Free text */}
              <div className="mb-4">
                <label className="block text-slate-500 text-xs mb-1.5">Describe it in one sentence</label>
                <input
                  type="text"
                  value={freeText}
                  onChange={(e) => setFreeText(e.target.value)}
                  placeholder="We are trying to..."
                  className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/40 transition-colors"
                />
              </div>

              <button
                type="button"
                onClick={handleGenerate}
                disabled={launching}
                className="w-full btn-primary rounded-lg py-3 text-sm font-semibold inline-flex items-center justify-center gap-2"
              >
                {launching ? (
                  <><Loader2 size={14} className="animate-spin" /><span>Preparing your plan…</span></>
                ) : (
                  <><span>Start Your AI Plan</span><ArrowRight size={14} /></>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. THE KHALDUN EDGE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 relative">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <SectionLabel>The Khaldun Edge</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
              Named after Ibn Khaldun.<br />
              <span className="gradient-text">Built for the AI era.</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto mb-2">
              Ibn Khaldun — the Arab polymath who understood complex systems centuries before modern strategy, economics, and AI.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl mx-auto">
              Khaldun Systems carries that same principle: understand the system, identify the forces shaping it, then build intelligence that helps leaders act.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {edgeCards.map((c, i) => (
              <motion.div key={c.label} {...fadeUp(i * 0.07)}>
                <div className="glass-card rounded-xl p-5 h-full">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mb-3" />
                  <h3 className="text-white font-semibold text-sm mb-1">{c.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{c.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. THE KHALDUN AI ECOSYSTEM
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <SectionLabel>The Khaldun AI Ecosystem</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Intelligence systems adapted across focused domains.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {ecosystemDomains.map((domain, i) => (
              <motion.div key={domain.label} {...fadeUp(i * 0.05)}>
                <div className="glass-card rounded-xl p-5 h-full hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-lg">{domain.icon}</span>
                    <h3 className="text-white font-semibold text-xs">{domain.label}</h3>
                  </div>
                  <div className="space-y-1">
                    {domain.apps.map((app) => (
                      <div key={app} className="text-slate-500 text-xs">· {app}</div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. CORE INTELLIGENCE SYSTEMS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 relative">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <SectionLabel>Core Intelligence Systems</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Three flagship systems. One intelligence architecture.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {coreSystems.map((sys, i) => (
              <motion.div key={sys.id} {...fadeUp(i * 0.08)}>
                <div
                  className="rounded-2xl p-6 h-full border transition-all hover:-translate-y-1 duration-300"
                  style={{
                    background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${sys.glow} 0%, transparent 70%), rgba(8,14,30,0.9)`,
                    borderColor: sys.border,
                  }}
                >
                  <div className="text-2xl font-extrabold mb-1" style={{ color: sys.accent }}>{sys.name}</div>
                  <div className="text-xs font-semibold mb-3" style={{ color: sys.accent, opacity: 0.7 }}>{sys.type}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{sys.tagline}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.2)} className="text-center mt-8">
            <Button to="/intelligence-systems" variant="ghost" size="sm">
              Explore full system capabilities <ArrowRight size={13} />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. OUR TECHNOLOGY
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <SectionLabel>Our Technology</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The stack behind every system we ship.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {techGrid.map((t, i) => (
              <motion.div key={t.label} {...fadeUp(i * 0.06)}>
                <div className="glass-card rounded-xl p-5 h-full">
                  <div className="text-sm font-semibold text-white mb-1">{t.label}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{t.detail}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          7. WHY CLIENTS CHOOSE US
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 relative">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div className="relative max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <SectionLabel>Why Clients Choose Us</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Brilliant leaders are drowning in data<br />but starving for insight.
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.div {...fadeUp(0.06)} className="mb-10">
            <div className="glass-card glow-border rounded-2xl p-7 max-w-3xl mx-auto text-center" style={{ background: 'rgba(8,14,30,0.9)' }}>
              <p className="text-slate-300 text-base leading-relaxed italic mb-4">
                "We don't just advise — we build. From strategy to production deployment, in weeks, not quarters."
              </p>
              <p className="text-blue-400 text-xs font-semibold">— Dr. Ammar A. Raja, Co-Founder & CTO</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustCards.map((c, i) => (
              <motion.div key={c.label} {...fadeUp(i * 0.07)}>
                <div className="glass-card rounded-xl p-5 h-full">
                  <div className="w-2 h-2 rounded-full bg-violet-400 mb-3" />
                  <h3 className="text-white font-semibold text-sm mb-1">{c.label}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{c.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          8. FINAL CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <div
              className="glass-card glow-border rounded-2xl p-10 text-center"
              style={{ background: 'rgba(8,14,30,0.92)' }}
            >
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/6 text-blue-300 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Start Here
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
                Get Your AI Intelligence Blueprint
              </h2>
              <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
                Answer a few questions and discover the exact systems your business needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button to="/ai-plan" size="lg">
                  Start Your AI Plan <ArrowRight size={15} />
                </Button>
                <Button to="/contact" variant="ghost" size="lg">
                  Book a Strategy Call
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
