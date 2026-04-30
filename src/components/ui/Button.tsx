import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
  'aria-label'?: string
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 rounded-lg font-semibold cursor-pointer transition-all duration-200 ${sizeClasses[size]} ${className}`
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'ghost' ? 'btn-ghost' : 'btn-ghost'

  const classes = `${base} ${variantClass} ${disabled ? 'opacity-50 pointer-events-none' : ''}`

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        <span>{children}</span>
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer">
        <span>{children}</span>
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled} aria-label={ariaLabel}>
      <span>{children}</span>
    </button>
  )
}
