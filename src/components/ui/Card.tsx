import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  onClick?: () => void
}

export function Card({ children, className = '', hover = false, glow = false, onClick }: CardProps) {
  const classes = `glass-card rounded-xl p-6 ${glow ? 'glow-border' : ''} ${hover ? 'transition-all duration-300 hover:translate-y-[-2px]' : ''} ${className}`

  if (hover || onClick) {
    return (
      <motion.div
        className={classes}
        onClick={onClick}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    )
  }

  return <div className={classes}>{children}</div>
}
