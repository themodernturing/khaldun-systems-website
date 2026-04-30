import { type ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  color?: 'blue' | 'purple' | 'cyan' | 'indigo' | 'default'
  className?: string
}

const colorClasses = {
  blue: 'bg-blue-500/10 text-blue-300 border border-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-300 border border-purple-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20',
  indigo: 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/20',
  default: 'bg-slate-500/10 text-slate-300 border border-slate-500/20',
}

export function Badge({ children, color = 'default', className = '' }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClasses[color]} ${className}`}>
      {children}
    </span>
  )
}
