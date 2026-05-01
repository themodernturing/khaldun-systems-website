import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

type FormState = 'idle' | 'submitting' | 'success'

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [state, setState] = useState<FormState>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setState('submitting')
    await new Promise((r) => setTimeout(r, 1200))
    setState('success')
  }

  return (
    <div className="min-h-screen">

      {/* ── Hero (tight) ─────────────────────────────────────────── */}
      <section className="pt-24 pb-8 px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3 bg-blue-400/8 border border-blue-400/20 rounded-full px-4 py-1.5">
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
            Let's talk about{' '}
            <span className="gradient-text">your decisions</span>
          </h1>
          <p className="text-slate-400 text-base max-w-md mx-auto">
            Every engagement starts with a conversation about where your decisions break down.
          </p>
        </motion.div>
      </section>

      {/* ── Form + contact options ────────────────────────────────── */}
      <section className="pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

            {/* Left: contact options */}
            <motion.div
              className="lg:col-span-2 space-y-4"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card glow className="p-5">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                  <Calendar size={16} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">Book a Strategy Call</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  30 minutes with Khadija and Ammar. We'll tell you honestly whether — and how — we can help.
                </p>
                <a
                  href="mailto:hello@khaldun.systems?subject=Strategy Call Request"
                  className="inline-flex items-center gap-1 text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors"
                >
                  Schedule a call <ArrowRight size={12} />
                </a>
              </Card>

              <Card className="p-5">
                <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center mb-3">
                  <Mail size={16} className="text-purple-400" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1">Email Directly</h3>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  Describe your situation and we'll respond with a considered perspective — not a sales pitch.
                </p>
                <a
                  href="mailto:hello@khaldun.systems"
                  className="inline-flex items-center gap-1 text-purple-400 text-xs font-medium hover:text-purple-300 transition-colors"
                >
                  hello@khaldun.systems <ArrowRight size={12} />
                </a>
              </Card>
            </motion.div>

            {/* Right: form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
            >
              <Card glow className="p-7">
                {state === 'success' ? (
                  <div className="text-center py-10">
                    <CheckCircle2 className="text-green-400 mx-auto mb-3" size={40} />
                    <h3 className="text-white font-bold text-lg mb-1">Message received</h3>
                    <p className="text-slate-400 text-sm">We'll be in touch within 1–2 business days.</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-white font-bold text-lg mb-5">Send a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-slate-400 text-xs font-medium mb-1.5">
                            Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={form.name}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-blue-500/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-slate-400 text-xs font-medium mb-1.5">
                            Email <span className="text-red-400">*</span>
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full bg-white/5 border border-blue-500/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-slate-400 text-xs font-medium mb-1.5">
                          Organization
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-blue-500/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                          placeholder="Company or organization name"
                        />
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-slate-400 text-xs font-medium mb-1.5">
                          What's the decision challenge? <span className="text-red-400">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-blue-500/20 rounded-lg px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                          placeholder="Where do your decisions break down — what would change if you had better intelligence?"
                        />
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <p className="text-slate-500 text-xs">We respond within 1–2 business days.</p>
                        <Button type="submit" disabled={state === 'submitting'} size="md">
                          {state === 'submitting' ? 'Sending...' : 'Send Message'}
                          <ArrowRight size={14} />
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </Card>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  )
}
