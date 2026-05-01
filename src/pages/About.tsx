import { motion } from 'framer-motion'
import { CheckCircle2, Lightbulb, TrendingUp, Cpu, Users } from 'lucide-react'

import khadijaImg from '@/assets/khadija-khaldun.jpeg'
import ammarImg from '@/assets/ammar-raja.png'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  }
}

function IntersectionVisual() {
  return (
    <div className="relative w-full h-72 sm:h-80 flex items-center justify-center">
      {/* Data grid background */}
      <div className="absolute inset-0 grid-bg opacity-25 rounded-2xl" />

      {/* Ambient radial glows */}
      <div
        className="absolute w-60 h-60 rounded-full pointer-events-none"
        style={{
          left: '25%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />
      <div
        className="absolute w-60 h-60 rounded-full pointer-events-none"
        style={{
          right: '20%',
          top: '50%',
          transform: 'translate(50%, -50%)',
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)',
          filter: 'blur(24px)',
        }}
      />

      {/* Left circle — Business Intelligence */}
      <div
        className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-65%, -50%)',
          background:
            'radial-gradient(circle at 38% 38%, rgba(59,130,246,0.14) 0%, rgba(59,130,246,0.03) 65%, transparent 100%)',
          border: '1px solid rgba(59,130,246,0.40)',
          boxShadow:
            '0 0 48px rgba(59,130,246,0.14), inset 0 0 24px rgba(59,130,246,0.04)',
        }}
      />

      {/* Right circle — Technical Excellence */}
      <div
        className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-35%, -50%)',
          background:
            'radial-gradient(circle at 62% 38%, rgba(139,92,246,0.14) 0%, rgba(139,92,246,0.03) 65%, transparent 100%)',
          border: '1px solid rgba(139,92,246,0.40)',
          boxShadow:
            '0 0 48px rgba(139,92,246,0.14), inset 0 0 24px rgba(139,92,246,0.04)',
        }}
      />

      {/* Left label */}
      <div
        className="absolute text-center leading-tight pointer-events-none"
        style={{ left: '6%', top: '50%', transform: 'translateY(-50%)' }}
      >
        <span className="text-blue-300 font-semibold text-xs sm:text-sm block">Business</span>
        <span className="text-blue-300 font-semibold text-xs sm:text-sm block">Intelligence</span>
      </div>

      {/* Right label */}
      <div
        className="absolute text-center leading-tight pointer-events-none"
        style={{ right: '4%', top: '50%', transform: 'translateY(-50%)' }}
      >
        <span className="text-purple-300 font-semibold text-xs sm:text-sm block">Technical</span>
        <span className="text-purple-300 font-semibold text-xs sm:text-sm block">Excellence</span>
      </div>

      {/* Center badge — Intelligent Decisions */}
      <div
        className="absolute z-10"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <div
          className="text-center px-4 py-3 rounded-xl"
          style={{
            background: 'rgba(7,10,18,0.88)',
            border: '1px solid rgba(92,194,182,0.22)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 24px rgba(92,194,182,0.12)',
          }}
        >
          <div className="text-[9px] font-bold tracking-[0.15em] uppercase text-slate-500 mb-1.5">
            Where it meets
          </div>
          <div className="text-white font-bold text-sm sm:text-base leading-snug">
            Intelligent
            <br />
            Decisions
          </div>
          <div className="mt-2.5 flex justify-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400/80" />
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400/80" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function About() {
  return (
    <div className="min-h-screen bg-[#070A12]">

      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-10%',
            left: '15%',
            width: 480,
            height: 480,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(29,78,216,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: '-5%',
            right: '10%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(109,40,217,0.10) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-block text-purple-400 text-xs font-semibold tracking-widest uppercase mb-5 bg-purple-400/8 border border-purple-400/20 rounded-full px-4 py-1.5">
              ABOUT US
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Story.
              <br />
              <span className="gradient-text">Our Partnership.</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Khaldun Systems was founded at the intersection of finance and technology — bringing together structured business thinking and deep technical execution to build AI systems that don't just automate, but think, simulate, and guide decisions.
            </p>
          </motion.div>

          {/* Right: Premium intersection visual */}
          <motion.div {...fadeUp(0.12)} className="mt-6 lg:mt-0">
            <IntersectionVisual />
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. FOUNDER STORY CARDS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <motion.div {...fadeUp(0)}>
              <div className="glass-card rounded-xl p-5 h-full flex flex-col gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={16} className="text-blue-400" />
                </div>
                <h4 className="text-white font-bold text-sm leading-snug">Where It Began</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Businesses had data, tools, and systems — but decisions were still delayed, reactive, or unclear.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.07)}>
              <div className="glass-card rounded-xl p-5 h-full flex flex-col gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp size={16} className="text-purple-400" />
                </div>
                <h4 className="text-white font-bold text-sm leading-snug">A Business &amp; Financial Perspective</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Khadija's accountancy background shaped a focus on finance, risk, accountability, and decision quality.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.14)}>
              <div className="glass-card rounded-xl p-5 h-full flex flex-col gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Cpu size={16} className="text-teal-400" />
                </div>
                <h4 className="text-white font-bold text-sm leading-snug">A Technical Foundation</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Ammar brings system architecture, AI implementation, and scalability to turn insight into working infrastructure.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.21)}>
              <div className="glass-card rounded-xl p-5 h-full flex flex-col gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Users size={16} className="text-violet-400" />
                </div>
                <h4 className="text-white font-bold text-sm leading-snug">The Collaboration</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Together, this creates a different kind of AI company — one that designs intelligence systems, not just automation tools.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. FOUNDER PROFILE CARDS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8">

          {/* Khadija Card */}
          <motion.div {...fadeUp(0)}>
            <div
              className="rounded-2xl overflow-hidden flex flex-col md:flex-row"
              style={{
                background: 'rgba(8,13,26,0.94)',
                border: '1px solid rgba(59,130,246,0.22)',
                boxShadow: '0 4px 48px rgba(59,130,246,0.09), 0 2px 24px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Portrait Panel */}
              <div
                className="w-full h-[300px] md:w-[38%] md:h-auto relative flex-shrink-0"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(10,18,45,1) 0%, rgba(7,10,18,1) 60%, rgba(10,14,30,1) 100%)',
                }}
              >
                <img
                  src={khadijaImg}
                  alt="Khadija — Co-Founder"
                  className="w-full h-full object-cover object-[center_top]"
                  style={{ position: 'absolute', inset: 0 }}
                />
                {/* Very light navy tint to integrate with dark theme — does not obscure face */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'rgba(7,10,28,0.10)' }}
                />
                {/* Right-edge fade: blends image into text panel, only affects far edge */}
                <div
                  className="absolute inset-0 pointer-events-none hidden md:block"
                  style={{
                    background:
                      'linear-gradient(to right, transparent 68%, rgba(8,13,26,0.92) 100%)',
                  }}
                />
                {/* Bottom-edge fade for mobile */}
                <div
                  className="absolute inset-0 pointer-events-none md:hidden"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 60%, rgba(8,13,26,0.90) 100%)',
                  }}
                />
              </div>

              {/* Content Panel */}
              <div className="flex-1 p-7 sm:p-9 flex flex-col justify-center">
                <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">
                  Co-Founder — Business Intelligence &amp; Strategy
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">Khadija</h2>
                <p className="text-blue-300/75 font-semibold text-xs tracking-widest uppercase mb-5">
                  Finance. Strategy. Intelligence.
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  A Chartered Accountant with deep experience across finance, operations, and risk. Khadija's work focuses on turning business complexity into clarity — designing intelligence systems that help organizations analyze, simulate, and make better decisions.
                </p>

                <div
                  className="text-slate-200 text-sm leading-relaxed italic mb-4 pl-4 py-2.5 rounded-r-md"
                  style={{
                    borderLeft: '2px solid rgba(59,130,246,0.70)',
                    background: 'rgba(59,130,246,0.05)',
                  }}
                >
                  "How can businesses make better decisions with the data they already have?"
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Her perspective ensures every Khaldun system is grounded in real business impact, structured thinking, and long-term decision quality.
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <span
                    className="text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.28)' }}
                  >
                    Chartered Accountant
                  </span>
                  <span
                    className="text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(59,130,246,0.10)', border: '1px solid rgba(59,130,246,0.28)' }}
                  >
                    Business &amp; Strategy Leader
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ammar Card */}
          <motion.div {...fadeUp(0.1)}>
            <div
              className="rounded-2xl overflow-hidden flex flex-col md:flex-row-reverse"
              style={{
                background: 'rgba(8,13,26,0.94)',
                border: '1px solid rgba(139,92,246,0.22)',
                boxShadow: '0 4px 48px rgba(139,92,246,0.09), 0 2px 24px rgba(0,0,0,0.5)',
                backdropFilter: 'blur(16px)',
              }}
            >
              {/* Portrait Panel — navy background absorbs any dark areas of the PNG */}
              <div
                className="w-full h-[300px] md:w-[38%] md:h-auto relative flex-shrink-0"
                style={{
                  background:
                    'linear-gradient(160deg, rgba(15,10,35,1) 0%, rgba(8,10,22,1) 55%, rgba(10,12,28,1) 100%)',
                }}
              >
                <img
                  src={ammarImg}
                  alt="Ammar — Co-Founder"
                  className="w-full h-full object-cover object-[50%_8%]"
                  style={{ position: 'absolute', inset: 0 }}
                />
                {/* Left-edge fade: blends image into text panel */}
                <div
                  className="absolute inset-0 pointer-events-none hidden md:block"
                  style={{
                    background:
                      'linear-gradient(to left, transparent 68%, rgba(8,13,26,0.92) 100%)',
                  }}
                />
                {/* Bottom-edge fade for mobile */}
                <div
                  className="absolute inset-0 pointer-events-none md:hidden"
                  style={{
                    background:
                      'linear-gradient(to bottom, transparent 60%, rgba(8,13,26,0.90) 100%)',
                  }}
                />
              </div>

              {/* Content Panel */}
              <div className="flex-1 p-7 sm:p-9 flex flex-col justify-center">
                <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-2">
                  Co-Founder — Technology &amp; System Architecture
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-1">Ammar</h2>
                <p className="text-purple-300/75 font-semibold text-xs tracking-widest uppercase mb-5">
                  Technology. Architecture. Execution.
                </p>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  A system architect and AI engineer focused on scalable infrastructure, clean architecture, and real-world implementation. Ammar translates strategic intent into technical systems that perform under real operating conditions.
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  At Khaldun Systems, Ammar leads the technical foundation — designing system architecture, integrating data and AI models, and building workflows that power intelligent decision systems.
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  <span
                    className="text-purple-300 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.28)' }}
                  >
                    AI &amp; Systems Architect
                  </span>
                  <span
                    className="text-purple-300 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(139,92,246,0.10)', border: '1px solid rgba(139,92,246,0.28)' }}
                  >
                    Technology &amp; Product Leader
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. PARTNERSHIP BUILT FOR IMPACT
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/[0.07]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <div>
                  <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
                    TOGETHER
                  </span>
                  <h2 className="text-3xl font-bold text-white mb-4">A Partnership Built for Impact</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Khaldun Systems is the result of a complementary partnership — uniting business insight with technical depth. We combine finance-driven decision thinking with technology-driven system architecture to create AI systems that solve real decision problems.
                  </p>
                </div>

                {/* Right: process steps */}
                <div className="relative">
                  {/* Connector line */}
                  <div
                    className="hidden sm:block absolute h-px"
                    style={{
                      top: 20,
                      left: 20,
                      right: 20,
                      background: 'linear-gradient(to right, rgba(59,130,246,0.4), rgba(139,92,246,0.4), rgba(92,194,182,0.4))',
                    }}
                  />

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-2 relative">
                    {([
                      {
                        step: 1,
                        title: 'Understand',
                        text: 'Deep business understanding to identify what truly matters.',
                        style: { background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.40)', color: '#93c5fd' },
                      },
                      {
                        step: 2,
                        title: 'Design',
                        text: 'Intelligence systems designed to analyze, simulate, and guide.',
                        style: { background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.40)', color: '#c4b5fd' },
                      },
                      {
                        step: 3,
                        title: 'Build',
                        text: 'Scalable, secure, and reliable technical architecture.',
                        style: { background: 'rgba(109,40,217,0.12)', border: '1px solid rgba(109,40,217,0.40)', color: '#a78bfa' },
                      },
                      {
                        step: 4,
                        title: 'Guide',
                        text: 'Actionable insights that drive better decisions and outcomes.',
                        style: { background: 'rgba(92,194,182,0.12)', border: '1px solid rgba(92,194,182,0.40)', color: '#5cc2b6' },
                      },
                    ] as const).map((s) => (
                      <div key={s.step} className="flex flex-col items-center text-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                          style={{ ...s.style, color: s.style.color }}
                        >
                          {s.step}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-xs mb-1">{s.title}</h4>
                          <p className="text-slate-500 text-[11px] leading-relaxed">{s.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          5. VISION BLOCK
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <div
              className="rounded-3xl p-8 sm:p-12"
              style={{
                background: 'rgba(11,16,32,0.60)',
                border: '1px solid rgba(255,255,255,0.07)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <div>
                  <span className="inline-block text-purple-400 text-xs font-semibold tracking-widest uppercase mb-3">
                    OUR VISION
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                    Intelligence for Better Decisions.
                  </h2>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                    To bridge the gap between data and decisions — helping organizations move from reactive operations to proactive strategies, fragmented tools to connected ecosystems, and data-heavy to decision-ready.
                  </p>
                </div>

                {/* Right: three cards */}
                <div className="flex flex-col gap-3">
                  {[
                    {
                      icon: <CheckCircle2 size={15} className="text-purple-400" />,
                      title: 'Built for Any Industry',
                      text: 'Core intelligence systems that adapt to unique industry challenges.',
                    },
                    {
                      icon: <CheckCircle2 size={15} className="text-blue-400" />,
                      title: 'Custom Solutions That Fit',
                      text: 'Tailored applications for sectors like education, diagnostic labs, finance, legal, and beyond.',
                    },
                    {
                      icon: <CheckCircle2 size={15} className="text-teal-400" />,
                      title: 'Human + AI Collaboration',
                      text: 'We combine human judgment with AI intelligence to improve decision quality.',
                    },
                  ].map((card, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-4 rounded-xl transition-colors hover:bg-white/[0.03]"
                      style={{
                        background: 'rgba(255,255,255,0.02)',
                        border: '1px solid rgba(255,255,255,0.05)',
                      }}
                    >
                      <div className="mt-0.5 flex-shrink-0">{card.icon}</div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-0.5">{card.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed">{card.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          6. FINAL QUOTE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 pb-28">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <div
              className="rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8"
              style={{
                background: 'rgba(7,10,18,0.95)',
                border: '1px solid rgba(255,255,255,0.07)',
                boxShadow: '0 0 60px rgba(59,130,246,0.07)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex-1">
                <p className="text-slate-200 text-lg sm:text-xl leading-relaxed italic font-medium">
                  "The gap between data and decision is where value is lost.
                  <br className="hidden sm:block" /> We exist to bridge that gap."
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, #1d4ed8 0%, #7c3aed 100%)',
                    boxShadow: '0 0 24px rgba(59,130,246,0.3)',
                  }}
                >
                  <span className="text-white font-bold text-lg">K</span>
                </div>
                <span className="text-slate-500 text-xs font-bold tracking-widest uppercase whitespace-nowrap">
                  Khaldun Systems
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
