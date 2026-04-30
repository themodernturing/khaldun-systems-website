import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface CTABannerProps {
  title?: string
  description?: string
  primaryLabel?: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function CTABanner({
  title = 'Ready to build your decision intelligence?',
  description = 'Get a personalized AI plan built around your industry, challenges, and priorities in under 3 minutes.',
  primaryLabel = 'Get Your AI Plan',
  primaryTo = '/ai-plan',
  secondaryLabel = 'Book a Strategy Call',
  secondaryTo = '/contact',
}: CTABannerProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-blue-900/20" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <motion.div
        className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button to={primaryTo} size="lg">
            {primaryLabel} <ArrowRight size={16} />
          </Button>
          <Button to={secondaryTo} variant="ghost" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
