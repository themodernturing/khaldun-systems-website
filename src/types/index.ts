// ─── AI Plan ──────────────────────────────────────────────────────────────────

export interface AIPlanAnswers {
  industry: string
  challenge: string
  aiHelp: string
  businessSize: string
  priority: string
}

export interface AIPlanResult {
  summary: string
  businessContext: BusinessContextItem[]
  recommendedSystems: SystemId[]
  systemReasons: Record<string, string>
  relevantDomains: ApplicationDomainId[]
  expectedOutcomes: string[]
  suggestedPages: SuggestedPage[]
}

export interface BusinessContextItem {
  label: string
  value: string
}

export interface SuggestedPage {
  label: string
  path: string
  reason: string
}

export interface AIPlanQuestion {
  id: keyof AIPlanAnswers
  stepContext: string
  question: string
  why: string
  options: AIPlanOption[]
}

export interface AIPlanOption {
  value: string
  label: string
  description?: string
}

// ─── Intelligence Systems (Layer 2) ────────────────────────────────────────────

export type SystemId = 'orbital' | 'magnus' | 'simfore'

export interface IntelligenceSystem {
  id: SystemId
  name: string
  type: string
  tagline: string
  description: string
  functions: SystemFunction[]
  color: 'blue' | 'purple' | 'cyan'
  accentHex: string
}

export interface SystemFunction {
  name: string
  description: string
}

// ─── Applications (Layer 3) ────────────────────────────────────────────────────

export type ApplicationDomainId =
  | 'financial'
  | 'legal-compliance'
  | 'healthcare'
  | 'esg'
  | 'education'
  | 'custom'

export type AppStatus = 'live' | 'beta' | 'coming-soon'

export interface Application {
  id: string
  name: string
  tagline: string
  description: string
  domain: ApplicationDomainId
  poweredBy: SystemId[]
  status: AppStatus
}

export interface ApplicationDomain {
  id: ApplicationDomainId
  name: string
  description: string
  icon: string
}

// ─── Legacy (keep for backward compat with pages not yet migrated) ────────────

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  capabilities: string[]
  outcomes: string[]
  icon: string
  color: 'blue' | 'purple' | 'cyan' | 'indigo'
}

export interface Industry {
  id: string
  name: string
  description: string
  challenges: string[]
  products: { name: string; link?: string }[]
  outcomes: string[]
  icon: string
  color: 'blue' | 'purple' | 'cyan' | 'indigo' | 'emerald' | 'rose' | 'amber'
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
