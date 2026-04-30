export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  capabilities: string[]
  icon: string
  color: 'blue' | 'purple' | 'cyan' | 'indigo'
  outcomes: string[]
}

export interface Industry {
  id: string
  name: string
  description: string
  challenges: string[]
  solutions: string[]
  icon: string
  color: 'blue' | 'purple' | 'cyan' | 'indigo'
}

export interface AIPlanAnswers {
  industry: string
  challenge: string
  aiHelp: string
  businessSize: string
  priority: string
}

export interface AIPlanResult {
  summary: string
  recommendedProducts: string[]
  relevantIndustries: string[]
  expectedOutcomes: string[]
  suggestedPages: SuggestedPage[]
}

export interface SuggestedPage {
  label: string
  path: string
  reason: string
}

export interface AIPlanQuestion {
  id: keyof AIPlanAnswers
  question: string
  subtitle: string
  options: AIPlanOption[]
}

export interface AIPlanOption {
  value: string
  label: string
  description?: string
  icon?: string
}

export interface EcosystemNode {
  id: string
  label: string
  description: string
  color: string
  icon: string
}

export interface TechCategory {
  id: string
  name: string
  description: string
  items: TechItem[]
  icon: string
}

export interface TechItem {
  name: string
  description: string
}
