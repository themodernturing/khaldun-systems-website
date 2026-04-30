import { motion } from 'framer-motion'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  titleHighlight?: string
  description?: string
  center?: boolean
}

export function SectionHeader({ eyebrow, title, titleHighlight, description, center = true }: SectionHeaderProps) {
  return (
    <motion.div
      className={`mb-16 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {eyebrow && (
        <span className="inline-block text-blue-400 text-sm font-semibold tracking-widest uppercase mb-4">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-bold text-white leading-tight ${center ? 'mx-auto' : ''}`}>
        {title}{' '}
        {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
      </h2>
      {description && (
        <p className={`mt-4 text-slate-400 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
