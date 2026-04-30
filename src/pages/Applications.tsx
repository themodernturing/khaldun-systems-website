import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { applicationDomains, getApplicationsByDomain } from '@/data/applications'
import { intelligenceSystems } from '@/data/intelligenceSystems'
import type { AppStatus, SystemId } from '@/types'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay },
  }
}

const statusConfig: Record<AppStatus, { label: string; color: 'blue' | 'purple' | 'cyan' }> = {
  live: { label: 'Live', color: 'cyan' },
  beta: { label: 'Beta', color: 'purple' },
  'coming-soon': { label: 'Coming soon', color: 'blue' },
}

const systemAccent: Record<SystemId, string> = {
  orbital: 'text-blue-400',
  magnus: 'text-purple-400',
  simfore: 'text-cyan-400',
}

export function Applications() {
  const location = useLocation()
  const [activeDomain, setActiveDomain] = useState<string | null>(null)

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1)
      setActiveDomain(id)
      const el = document.getElementById(id)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100)
    }
  }, [location.hash])

  return (
    <div className="min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="pt-32 pb-20 px-4 sm:px-6 text-center">
        <motion.div {...fadeUp(0)}>
          <span className="inline-block text-purple-400 text-xs font-semibold tracking-widest uppercase mb-4 bg-purple-400/8 border border-purple-400/20 rounded-full px-4 py-1.5">
            Layer 3 — Applications
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            Intelligence deployed<br />
            <span className="gradient-text">where decisions are made.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Each application is a domain-specific deployment of the Khaldun intelligence stack — built on ORBITAL, MAGNUS, and SIMFORE, and configured for the structural reality of a specific sector.
          </p>
        </motion.div>
      </section>

      {/* ── Domain filter ────────────────────────────────────────── */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp(0.05)}>
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveDomain(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  !activeDomain
                    ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 border border-white/[0.06] hover:border-white/10'
                }`}
              >
                All applications
              </button>
              {applicationDomains.map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => setActiveDomain(domain.id === activeDomain ? null : domain.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeDomain === domain.id
                      ? 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
                      : 'text-slate-400 hover:text-slate-200 border border-white/[0.06] hover:border-white/10'
                  }`}
                >
                  {domain.icon} {domain.name}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Applications by domain ───────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-20">
          {applicationDomains.map((domain, domainIdx) => {
            const domainApps = getApplicationsByDomain(domain.id)
            if (activeDomain && activeDomain !== domain.id) return null

            return (
              <motion.div key={domain.id} id={domain.id} {...fadeUp(0.05 + domainIdx * 0.03)}>
                {/* Domain header */}
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-2xl">{domain.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold text-white">{domain.name}</h2>
                    <p className="text-slate-400 text-sm">{domain.description}</p>
                  </div>
                </div>

                {/* Application cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {domainApps.map((app, appIdx) => {
                    const status = statusConfig[app.status]
                    return (
                      <motion.div
                        key={app.id}
                        id={app.id}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.05 + appIdx * 0.08 }}
                      >
                        <div className="glass-card rounded-2xl p-6 h-full flex flex-col hover:border-blue-500/20 transition-colors">
                          {/* Card header */}
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <h3 className="text-white font-bold text-base leading-tight">{app.name}</h3>
                            <Badge color={status.color}>{status.label}</Badge>
                          </div>

                          {/* Tagline */}
                          <p className="text-slate-400 text-xs italic mb-4 leading-relaxed">{app.tagline}</p>

                          {/* Description */}
                          <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{app.description}</p>

                          {/* Powered by */}
                          <div className="pt-4 border-t border-white/[0.05]">
                            <div className="flex items-center gap-2">
                              <Zap size={11} className="text-slate-600" />
                              <span className="text-slate-600 text-xs">Powered by</span>
                              {app.poweredBy.map((sysId) => {
                                const sys = intelligenceSystems.find((s) => s.id === sysId)
                                return sys ? (
                                  <span key={sysId} className={`text-xs font-semibold ${systemAccent[sysId]}`}>
                                    {sys.name}
                                  </span>
                                ) : null
                              })}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="pb-24 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp(0.1)}>
            <div className="glass-card glow-border rounded-2xl p-10 text-center" style={{ background: 'rgba(10,22,40,0.85)' }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Don't see your domain?
              </h2>
              <p className="text-slate-400 text-base mb-8 max-w-lg mx-auto leading-relaxed">
                We build custom intelligence systems for organisations with domain-specific requirements. Tell us what you're working with and we'll scope a solution from first principles.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button to="/contact">
                  Discuss a custom system <ArrowRight size={14} />
                </Button>
                <Button to="/assessments" variant="ghost">
                  Take the AI Plan first
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
