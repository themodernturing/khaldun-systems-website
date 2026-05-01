import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5, delay },
  }
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const flagships = [
  {
    name: 'ORBITAL', subtitle: 'Diagnostic Intelligence',
    positioning: 'Reveal the underlying structure of your business before acting.',
    whoFor: 'CEOs, boards, operators, strategy teams',
    whatItDoes: 'ORBITAL diagnoses how a company actually works beneath the surface. It identifies the hidden mechanisms, fragilities, and decision levers shaping business outcomes.',
    problems: [
      'Leadership sees symptoms but not the structural cause',
      'Data exists but does not explain why outcomes are happening',
      'Teams disagree on what is really driving performance',
      'Decisions are made from reports, not system understanding'
    ],
    outputs: ['Mechanism diagnosis', 'Fragility map', 'Lever map', 'Executive intelligence brief', 'Falsifiable predictions'],
    accent: 'text-blue-400', glow: 'rgba(59,130,246,0.12)', border: 'border-blue-500/20',
  },
  {
    name: 'MAGNUS', subtitle: 'Forensic Intelligence',
    positioning: 'Expose the difference between perceived performance and real data.',
    whoFor: 'Investors, PE firms, lenders, deal teams, risk teams',
    whatItDoes: 'MAGNUS examines the gap between what a company claims and what external signals show. It is built for scrutiny, diligence, and risk discovery.',
    problems: [
      'Management narratives are polished but incomplete',
      'Investors need to verify claims before committing capital',
      'Risk signals are scattered across public data and market signals',
      'Traditional diligence misses narrative divergence'
    ],
    outputs: ['Narrative divergence analysis', 'Signal grading', 'MSRI risk score', 'Downside scenarios', 'Investor-grade dossier'],
    accent: 'text-amber-400', glow: 'rgba(251,191,36,0.12)', border: 'border-amber-500/20',
  },
  {
    name: 'SIMFORE', subtitle: 'Simulation Intelligence',
    positioning: 'Evaluate decisions by modeling outcomes before execution.',
    whoFor: 'Executives, boards, strategy teams, transformation leaders',
    whatItDoes: 'SIMFORE models how decisions, shocks, constraints, and second-order effects play out over time. It helps leaders compare possible futures before acting.',
    problems: [
      'Strategy decisions are made without testing consequences',
      'Forecasts ignore behavior, constraints, and feedback loops',
      'Teams know the options but not the downstream effects',
      'Leaders need to compare scenarios under uncertainty'
    ],
    outputs: ['Scenario simulations', 'Bull/base/bear paths', 'Resilience scoring', 'Strategic levers', 'Prediction registry'],
    accent: 'text-cyan-400', glow: 'rgba(6,182,212,0.12)', border: 'border-cyan-500/20',
  }
]

const domains = [
  { id: 'finance', label: 'Finance', title: 'Finance & Compliance Intelligence', intro: 'AI systems for provisioning, risk modeling, reporting, and finance-team decision workflows.' },
  { id: 'education', label: 'Education', title: 'Education & Assessment Intelligence', intro: 'AI systems for learning, institutional intelligence, student support, and assessment-driven recommendations.' },
  { id: 'healthcare', label: 'Diagnostic Labs', title: 'Diagnostic Lab Intelligence', intro: 'Clinical intelligence for diagnostic laboratories, lab networks, and imaging centers.' },
  { id: 'legal', label: 'Legal', title: 'Legal & Professional Intelligence', intro: 'AI systems for legal reasoning, tax analysis, compliance, document intelligence, and professional service workflows.' },
  { id: 'climate', label: 'Climate', title: 'Climate & Sustainability Intelligence', intro: 'AI systems for emissions tracking, ESG reporting, climate data pipelines, and sustainability decision support.' },
  { id: 'custom', label: 'Custom', title: 'Custom Intelligence Systems', intro: 'Bespoke AI systems for organizations with domain expertise, proprietary workflows, or specialized decision problems.' }
]

const domainProducts: Record<string, any[]> = {
  finance: [
    {
      name: 'ECL Foresight',
      subtitle: 'AI-powered IFRS 9 expected credit loss intelligence',
      whatItIs: 'A financial risk system for modeling expected credit losses, provisioning scenarios, and portfolio-level credit exposure.',
      whoFor: 'Banks, fintechs, lenders, finance teams, auditors.',
      problem: 'Manual provisioning is slow, inconsistent, difficult to stress-test, and hard to explain clearly to stakeholders.',
      gets: ['ECL calculations', 'Portfolio risk views', 'Scenario-based provisioning', 'Audit-ready assumptions', 'Forward-looking risk intelligence'],
    },
    {
      name: 'ConsolidateAI',
      subtitle: 'Automated consolidation intelligence for finance teams',
      whatItIs: 'An AI-assisted consolidation system for multi-entity accounting, reporting workflows, and financial close support.',
      whoFor: 'Group finance teams, holding companies, CFO offices, multi-entity organizations.',
      problem: 'Consolidation across entities is manual, spreadsheet-dependent, error-prone, and slow during close cycles.',
      gets: ['Consolidated financial views', 'Variance explanations', 'Intercompany reconciliation support', 'Close-process automation', 'Reporting assistance'],
    }
  ],
  education: [
    {
      name: 'AI Seekho',
      subtitle: 'AI literacy and learning platform',
      whatItIs: 'A learning system designed to support AI literacy, personalized learning, and large-scale digital education.',
      whoFor: 'Schools, education systems, public-sector programs, students, training organizations.',
      problem: 'AI literacy is becoming essential, but most institutions lack scalable infrastructure to teach it effectively.',
      gets: ['Personalized learning paths', 'AI literacy modules', 'Student progress insights', 'Multilingual learning support', 'Scalable education delivery']
    },
    {
      name: 'SchoolIQ',
      subtitle: 'School intelligence and student insight system',
      whatItIs: 'An intelligence layer for schools to understand student performance, institutional patterns, and intervention needs.',
      whoFor: 'Schools, education networks, administrators, education operators.',
      problem: 'Schools collect data but often lack usable decision intelligence around student progress, performance gaps, and resource allocation.',
      gets: ['Performance dashboards', 'Intervention alerts', 'Student insight reports', 'School-level analytics', 'Resource allocation intelligence']
    },
    {
      name: 'Mind Match',
      subtitle: 'In development',
      whatItIs: 'A deeper readiness assessment for leadership teams — maps decision culture, data maturity, and organisational structure to an implementation score. Available later in 2025.',
      whoFor: 'Leadership teams, HR teams, training programs, institutions.',
      problem: 'Matching decisions are often subjective, inconsistent, and based on incomplete signals.',
      gets: ['Assessment results', 'Fit scoring', 'Personalized recommendations', 'Decision-support reports', 'Readiness insights']
    }
  ],
  healthcare: [
    {
      name: 'CLINOS',
      subtitle: 'Clinical Intelligence for Diagnostic Labs',
      whatItIs: 'CLINOS is an intelligence layer for diagnostic infrastructure. It does not replace existing lab systems; it turns their outputs into decision-ready intelligence.',
      whoFor: 'Diagnostic laboratories, lab networks, hospitals with diagnostic infrastructure, radiology and imaging centers.',
      problem: 'Labs produce reports and values, but often lack an intelligence layer for pattern detection, early signals, pathway optimization, and decision support.',
      gets: ['Diagnostic intelligence', 'Imaging intelligence', 'Clinical decision support', 'Population intelligence', 'Pathway optimization']
    }
  ],
  legal: [
    {
      name: 'LexFlow AI',
      subtitle: 'Legal reasoning and workflow intelligence',
      whatItIs: 'An AI system for legal research, document reasoning, matter workflows, and professional legal support.',
      whoFor: 'Law firms, legal teams, compliance teams, professional service providers.',
      problem: 'Legal work requires complex reasoning across documents, precedents, clauses, obligations, and compliance requirements.',
      gets: ['Legal reasoning assistance', 'Document analysis', 'Matter workflow support', 'Research summaries', 'Contract intelligence']
    },
    {
      name: 'Tax Law Agent',
      subtitle: 'AI reasoning agent for tax law and compliance',
      whatItIs: 'A specialized tax intelligence agent for structured legal-tax reasoning, regulatory interpretation, and compliance support.',
      whoFor: 'Tax advisors, finance teams, legal teams, compliance professionals.',
      problem: 'Tax reasoning is complex, time-sensitive, and requires consistent interpretation of changing rules.',
      gets: ['Tax position analysis', 'Regulation mapping', 'Reasoning trails', 'Compliance support', 'Planning intelligence']
    },
    {
      name: 'Legal CRM',
      subtitle: 'Client and matter intelligence for professional firms',
      whatItIs: 'A CRM system designed around professional service workflows, client intelligence, and matter progression.',
      whoFor: 'Law firms, advisory firms, professional services teams.',
      problem: 'Generic CRMs do not understand legal and professional-service workflows, matter context, or advisory relationships.',
      gets: ['Client intelligence', 'Matter tracking', 'Relationship insights', 'Workflow automation', 'Professional service pipeline visibility']
    }
  ],
  climate: [
    {
      name: 'EmissIQ Carbon',
      subtitle: 'Carbon and ESG intelligence system',
      whatItIs: 'A system for carbon footprint tracking, emissions reporting, and sustainability intelligence.',
      whoFor: 'Companies, ESG teams, sustainability consultants, supply-chain teams, climate-focused organizations.',
      problem: 'Carbon reporting is fragmented, manual, difficult to audit, and hard to connect with operational decisions.',
      gets: ['Carbon footprint calculations', 'ESG dashboards', 'Emissions data pipelines', 'Reporting support', 'Sustainability decision intelligence']
    }
  ],
  custom: [
    {
      name: 'Bespoke AI Systems',
      subtitle: 'Custom AI products built from domain expertise',
      whatItIs: 'A custom build service for organizations that have valuable domain expertise, data, workflows, or institutional knowledge and want to turn it into proprietary AI systems.',
      whoFor: 'Enterprises, startups, institutions, domain experts, founders, operators.',
      problem: 'Generic AI tools rarely fit specialized workflows, industry logic, proprietary knowledge, or real operational constraints.',
      gets: ['Discovery and system design', 'Custom AI architecture', 'Prototype development', 'Production deployment', 'Integrations', 'Monitoring and iteration']
    }
  ]
}

// ─── Component ────────────────────────────────────────────────────────────────

export function Applications() {
  const [activeTab, setActiveTab] = useState('finance')
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '')
      const hashToDomain: Record<string, string> = {
        'ecl-foresight': 'finance',
        'consolidateai': 'finance',
        'ai-seekho': 'education',
        'schooliq': 'education',
        'mindmatch': 'education',
        'clinos': 'healthcare',
        'lexflow-ai': 'legal',
        'tax-law-agent': 'legal',
        'legal-crm': 'legal',
        'emissiq-carbon': 'climate',
        'bespoke-ai-systems': 'custom',
      }
      
      const targetDomain = hashToDomain[hash]
      if (targetDomain) {
        setActiveTab(targetDomain)
      }

      // Wait for AnimatePresence exit/enter transition (duration 0.3s)
      setTimeout(() => {
        const el = document.getElementById(hash)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 350)
    }
  }, [location.hash])

  const activeDomain = domains.find(d => d.id === activeTab)
  const activeProducts = domainProducts[activeTab] || []

  return (
    <div className="min-h-screen bg-[#070A12]">
      
      {/* ══════════════════════════════════════════════════════════════
          1. HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="pt-32 pb-16 px-4 sm:px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-purple-400/8 border border-purple-400/20 rounded-full px-4 py-1.5">
            PRODUCTS
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight max-w-4xl mx-auto">
            Enterprise AI Systems Built for <br className="hidden sm:block" />
            <span className="gradient-text">Real Decision Problems</span>
          </h1>
          <p className="text-slate-400 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Khaldun Systems builds intelligence products that diagnose businesses, simulate decisions, automate specialist reasoning, and turn domain expertise into deployable AI systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button to="/contact" size="md">
              Discuss a Product <ArrowRight size={14} />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          2. FLAGSHIP INTELLIGENCE SYSTEMS
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp(0)} className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-3">Flagship Intelligence Systems</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm leading-relaxed">
              Three core systems power Khaldun's decision intelligence work: diagnose the present, audit reality, and simulate the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {flagships.map((sys, i) => (
              <motion.div key={sys.name} id={sys.name.toLowerCase()} className="scroll-mt-24" {...fadeUp(i * 0.1)}>
                <div 
                  className="glass-card rounded-2xl p-6 h-full border flex flex-col transition-all hover:border-white/20"
                  style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${sys.glow} 0%, transparent 70%), rgba(8,14,30,0.85)` }}
                >
                  <div className={`text-2xl font-black mb-1 ${sys.accent}`}>{sys.name}</div>
                  <div className={`text-xs font-bold uppercase tracking-wider mb-3 ${sys.accent} opacity-80`}>{sys.subtitle}</div>
                  <p className="text-white text-sm font-medium leading-relaxed mb-6">{sys.positioning}</p>

                  <div className="space-y-4 flex-1">
                    <div>
                      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Who it is for</div>
                      <div className="text-slate-300 text-sm leading-relaxed">{sys.whoFor}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">What it does</div>
                      <div className="text-slate-400 text-sm leading-relaxed">{sys.whatItDoes}</div>
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2">Problems it solves</div>
                      <ul className="space-y-1.5">
                        {sys.problems.map((p, idx) => (
                          <li key={idx} className="text-slate-400 text-sm flex items-start gap-2">
                            <span className="text-slate-600 mt-0.5">•</span>
                            <span className="leading-relaxed">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2">Outputs</div>
                      <div className="flex flex-wrap gap-1.5">
                        {sys.outputs.map((out, idx) => (
                          <span key={idx} className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-slate-300">
                            {out}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-white/[0.06]">
                    <Button to="/intelligence-systems" variant="ghost" className="w-full justify-between" size="sm">
                      Explore {sys.name} <ArrowRight size={14} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          3. DOMAIN PRODUCT EXPLORER
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-3">Domain Product Explorer</h2>
            <p className="text-slate-400 max-w-xl mx-auto text-sm">
              Intelligence applications engineered for specific industry workflows and operational constraints.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div {...fadeUp(0.05)} className="flex flex-wrap justify-center gap-2 mb-10">
            {domains.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveTab(d.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === d.id
                    ? 'bg-purple-500/15 text-purple-300 border border-purple-500/30 shadow-[0_0_15px_rgba(139,92,246,0.15)]'
                    : 'bg-white/5 text-slate-400 border border-white/5 hover:bg-white/10 hover:text-slate-200'
                }`}
              >
                {d.label}
              </button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeDomain && (
                <motion.div
                  key={activeDomain.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{activeDomain.title}</h3>
                    <p className="text-slate-400 text-sm max-w-2xl mx-auto">{activeDomain.intro}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {activeProducts.map((prod, idx) => {
                      const prodId = prod.name.toLowerCase().replace(/\s+/g, '-').replace('mind-match', 'mindmatch')
                      return (
                      <div key={idx} id={prodId} className="scroll-mt-24 glass-card rounded-2xl p-6 border border-white/[0.08] flex flex-col bg-[#0b1020]/80">
                        <div className="mb-5">
                          <h4 className="text-xl font-bold text-white mb-1">{prod.name}</h4>
                          <p className="text-purple-400 text-xs font-semibold">{prod.subtitle}</p>
                        </div>
                        
                        <div className="space-y-4 flex-1">
                          <div>
                            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">What it is</div>
                            <p className="text-slate-300 text-sm leading-relaxed">{prod.whatItIs}</p>
                          </div>
                          <div>
                            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Who it is for</div>
                            <p className="text-slate-400 text-sm leading-relaxed">{prod.whoFor}</p>
                          </div>
                          <div>
                            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-1">Problem it solves</div>
                            <p className="text-slate-400 text-sm leading-relaxed">{prod.problem}</p>
                          </div>
                          <div>
                            <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2">What you get</div>
                            <div className="space-y-1.5">
                              {prod.gets.map((g: string, i: number) => (
                                <div key={i} className="flex items-start gap-2">
                                  <CheckCircle2 size={14} className="text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-300 text-sm leading-snug">{g}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 pt-5 border-t border-white/[0.06]">
                          <Button to={`/contact?subject=Inquiry: ${prod.name}`} variant="outline" className="w-full justify-center bg-white/5 border-white/10 hover:bg-white/10 text-white" size="sm">
                            Discuss {prod.name}
                          </Button>
                        </div>
                      </div>
                    )})}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          4. HOW TO CHOOSE / AI PLAN CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0)}>
            <div className="glass-card glow-border rounded-2xl p-10 text-center" style={{ background: 'rgba(8,14,30,0.92)' }}>
              <h2 className="text-2xl font-bold text-white mb-3">Get Your AI Intelligence Blueprint</h2>
              <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
                Answer a few questions and discover the exact systems your business needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button to="/ai-plan" size="lg">
                  Start Your AI Plan <ArrowRight size={14} />
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
