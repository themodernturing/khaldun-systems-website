import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

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

export function About() {
  return (
    <div className="min-h-screen bg-[#070A12]">
      
      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <motion.div {...fadeUp(0)}>
            <span className="inline-block text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-purple-400/8 border border-purple-400/20 rounded-full px-4 py-1.5">
              ABOUT US
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Story. <br />
              <span className="gradient-text">Our Partnership.</span>
            </h1>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Khaldun Systems was founded at the intersection of finance and technology — bringing together structured business thinking and deep technical execution to build AI systems that don't just automate, but think, simulate, and guide decisions.
            </p>
          </motion.div>

          {/* Right: CSS Venn Visual */}
          <motion.div {...fadeUp(0.1)} className="relative h-64 sm:h-80 flex items-center justify-center pointer-events-none mt-10 lg:mt-0">
            {/* Left Circle - Business */}
            <div className="absolute left-1/2 -translate-x-[65%] w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-blue-500/40 bg-blue-500/10 backdrop-blur-md flex items-center justify-start pl-6 sm:pl-10 shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              <span className="text-blue-300 font-semibold text-sm sm:text-base leading-tight">Business <br/>Intelligence</span>
            </div>
            {/* Right Circle - Tech */}
            <div className="absolute left-1/2 -translate-x-[35%] w-48 h-48 sm:w-64 sm:h-64 rounded-full border border-purple-500/40 bg-purple-500/10 backdrop-blur-md flex items-center justify-end pr-6 sm:pr-10 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
              <span className="text-purple-300 font-semibold text-sm sm:text-base leading-tight text-right">Technical <br/>Excellence</span>
            </div>
            {/* Intersection Label */}
            <div className="absolute z-10 text-center font-bold text-white text-sm sm:text-lg drop-shadow-md">
              Intelligent<br/>Decisions
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. FOUNDER CARDS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Khadija Card */}
          <motion.div {...fadeUp(0)}>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] flex flex-col md:flex-row bg-[#080d1a]">
              {/* Image Side */}
              <div className="w-full md:w-[45%] h-80 md:h-auto relative">
                <img 
                  src={khadijaImg} 
                  alt="Khadija" 
                  className="w-full h-full object-cover object-[center_top] brightness-110 contrast-105"
                />
                <div className="absolute inset-0 border-r border-white/5 pointer-events-none hidden md:block" />
              </div>
              
              {/* Text Side */}
              <div className="w-full md:w-[55%] p-8 sm:p-10 flex flex-col justify-center">
                <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-2">Co-Founder — Business Intelligence & Strategy</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Khadija</h2>
                <p className="text-slate-300 font-semibold text-sm tracking-wide uppercase mb-6">{`Finance. Strategy. Intelligence.`}</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  A Chartered Accountant with deep experience across finance, operations, and risk. Khadija's work focuses on turning business complexity into clarity — designing intelligence systems that help organizations analyze, simulate, and make better decisions.
                </p>

                <div className="bg-white/5 border-l-2 border-blue-500 p-4 mb-6 italic text-slate-300 text-sm leading-relaxed">
                  "How can businesses make better decisions with the data they already have?"
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  Her perspective ensures every Khaldun system is grounded in real business impact, structured thinking, and long-term decision quality.
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full">Chartered Accountant</span>
                  <span className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-full">Business & Strategy Leader</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ammar Card */}
          <motion.div {...fadeUp(0.1)}>
            <div className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] flex flex-col md:flex-row-reverse bg-[#080d1a]">
              {/* Image Side */}
              <div className="w-full md:w-[45%] h-80 md:h-auto relative">
                <img 
                  src={ammarImg} 
                  alt="Ammar" 
                  className="w-full h-full object-cover object-[center_top] brightness-110 contrast-105"
                />
                <div className="absolute inset-0 border-l border-white/5 pointer-events-none hidden md:block" />
              </div>
              
              {/* Text Side */}
              <div className="w-full md:w-[55%] p-8 sm:p-10 flex flex-col justify-center">
                <p className="text-purple-400 text-xs font-bold tracking-widest uppercase mb-2">Co-Founder — Technology & System Architecture</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Ammar</h2>
                <p className="text-slate-300 font-semibold text-sm tracking-wide uppercase mb-6">{`Technology. Architecture. Execution.`}</p>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  A system architect and AI engineer focused on scalable infrastructure, clean architecture, and real-world implementation. Ammar translates strategic intent into technical systems that perform under real operating conditions.
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  At Khaldun Systems, Ammar leads the technical foundation — designing system architecture, integrating data and AI models, and building workflows that power intelligent decision systems.
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  <span className="bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1.5 rounded-full">AI & Systems Architect</span>
                  <span className="bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1.5 rounded-full">Technology & Product Leader</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. PARTNERSHIP BUILT FOR IMPACT
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/[0.08] bg-[#0b1020]/80">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left */}
                <div>
                  <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">TOGETHER</span>
                  <h2 className="text-3xl font-bold text-white mb-4">A Partnership Built for Impact</h2>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Khaldun Systems is the result of a complementary partnership — uniting business insight with technical depth. We combine finance-driven decision thinking with technology-driven system architecture to create AI systems that solve real decision problems.
                  </p>
                </div>

                {/* Right: Horizontal process line */}
                <div className="relative">
                  <div className="hidden sm:block absolute top-4 left-6 right-6 h-0.5 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-teal-500/30 z-0" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 sm:gap-2 relative z-10">
                    {[
                      { step: 1, title: 'Understand', text: 'Deep business understanding to identify what truly matters.' },
                      { step: 2, title: 'Design', text: 'Intelligence systems designed to analyze, simulate, and guide.' },
                      { step: 3, title: 'Build', text: 'Scalable, secure, and reliable technical architecture.' },
                      { step: 4, title: 'Guide', text: 'Actionable insights that drive better decisions and outcomes.' },
                    ].map((s) => (
                      <div key={s.step} className="flex flex-row sm:flex-col items-start sm:items-center text-left sm:text-center gap-4 sm:gap-0">
                        <div className="w-8 h-8 rounded-full bg-[#080d1a] border border-blue-500/40 text-blue-400 flex items-center justify-center font-bold text-xs sm:mb-4 flex-shrink-0">
                          {s.step}
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm mb-1">{s.title}</h4>
                          <p className="text-slate-500 text-xs leading-relaxed">{s.text}</p>
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
          4. VISION BLOCK
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/[0.08] bg-[#0b1020]/60">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Left */}
                <div>
                  <span className="inline-block text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4">OUR VISION</span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">Intelligence for Better Decisions.</h2>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                    To bridge the gap between data and decisions — helping organizations move from reactive operations to proactive strategies, fragmented tools to connected ecosystems, and data-heavy to decision-ready.
                  </p>
                </div>

                {/* Right: Three compact cards */}
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: 'Built for Any Industry', text: 'Core intelligence systems that adapt to unique industry challenges.' },
                    { title: 'Custom Solutions That Fit', text: 'Tailored applications for sectors like education, healthcare, finance, legal, and beyond.' },
                    { title: 'Human + AI Collaboration', text: 'We combine human judgment with AI intelligence to improve decision quality.' }
                  ].map((card, i) => (
                    <div key={i} className="glass-card rounded-xl p-5 border-white/5 bg-white/[0.02] flex items-start gap-3 hover:bg-white/[0.04] transition-colors">
                      <div className="mt-0.5"><CheckCircle2 size={16} className="text-purple-400" /></div>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{card.title}</h4>
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
          5. FINAL QUOTE
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <div className="glass-card rounded-2xl p-8 sm:p-10 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 bg-[#070A12] shadow-[0_0_40px_rgba(59,130,246,0.05)]">
              <div className="text-center md:text-left flex-1">
                <p className="text-slate-300 text-lg sm:text-xl leading-relaxed italic font-medium">
                  "The gap between data and decision is where value is lost.<br className="hidden sm:block" /> We exist to bridge that gap."
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center justify-center opacity-80">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-2 shadow-lg shadow-blue-500/20">
                  <span className="text-white font-bold">K</span>
                </div>
                <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">Khaldun Systems</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
