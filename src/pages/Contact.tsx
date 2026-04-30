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
    <>
      {/* Hero */}
      <section className="relative py-24 hero-gradient grid-bg overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center pt-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Let's talk about{' '}
              <span className="gradient-text">your decisions</span>
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl mx-auto">
              Every engagement starts with a conversation about where your decisions break down — not what technology you need.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: options */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card glow className="p-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                  <Calendar size={20} className="text-blue-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Book a Strategy Call</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  A 30-minute call with Khadija and Ammar. We'll understand your situation and tell you honestly whether — and how — we can help.
                </p>
                <a
                  href="mailto:hello@khaldun.systems?subject=Strategy Call Request"
                  className="inline-flex items-center gap-1 text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors"
                >
                  Schedule a call <ArrowRight size={14} />
                </a>
              </Card>

              <Card className="p-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <Mail size={20} className="text-purple-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email Directly</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Reach out with your situation and we'll respond with a considered perspective — not a sales pitch.
                </p>
                <a
                  href="mailto:hello@khaldun.systems"
                  className="inline-flex items-center gap-1 text-purple-400 text-sm font-medium hover:text-purple-300 transition-colors"
                >
                  hello@khaldun.systems <ArrowRight size={14} />
                </a>
              </Card>

              <div className="glass-card rounded-xl p-5">
                <p className="text-slate-400 text-sm leading-relaxed italic">
                  "We don't take every engagement. We take the ones where we know AI decision infrastructure will create measurable impact."
                </p>
                <p className="text-blue-400 text-xs mt-3 font-medium">— Khaldun Systems</p>
              </div>
            </motion.div>

            {/* Right: form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card glow className="p-8">
                {state === 'success' ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="text-green-400 mx-auto mb-4" size={48} />
                    <h3 className="text-white font-bold text-xl mb-2">Message received</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      We'll be in touch within 1–2 business days with a considered response.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-white font-bold text-xl mb-6">Send a message</h2>
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
                            className="w-full bg-white/5 border border-blue-500/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
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
                            className="w-full bg-white/5 border border-blue-500/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
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
                          className="w-full bg-white/5 border border-blue-500/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
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
                          rows={5}
                          value={form.message}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-blue-500/20 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                          placeholder="Describe where your decisions break down — where you lack clarity, speed, or confidence. What would change if you had better intelligence?"
                        />
                      </div>
                      <div className="flex items-center justify-between pt-2">
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
    </>
  )
}
