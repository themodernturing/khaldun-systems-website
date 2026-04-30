import type { Application, ApplicationDomain } from '@/types'

export const applicationDomains: ApplicationDomain[] = [
  {
    id: 'financial',
    name: 'Financial Intelligence',
    description: 'Credit risk, financial consolidation, and regulatory-grade analytics for finance professionals.',
    icon: '📊',
  },
  {
    id: 'legal-compliance',
    name: 'Legal & Compliance',
    description: 'Intelligent document analysis, contract review, and tax law navigation for legal teams.',
    icon: '⚖️',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Clinical decision support and patient outcome modelling for healthcare providers.',
    icon: '🏥',
  },
  {
    id: 'esg',
    name: 'ESG & Sustainability',
    description: 'Emissions tracking, regulatory alignment, and sustainability reporting infrastructure.',
    icon: '🌿',
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Learning intelligence systems for students, institutions, and professional development.',
    icon: '🎓',
  },
  {
    id: 'custom',
    name: 'Custom Systems',
    description: 'Bespoke intelligence architecture built for organisations with domain-specific requirements.',
    icon: '⚙️',
  },
]

export const applications: Application[] = [
  // ─── Financial ────────────────────────────────────────────────────────────
  {
    id: 'ecl-foresight',
    name: 'ECL Foresight',
    tagline: 'IFRS 9-aligned expected credit loss modelling with forward-looking scenario intelligence.',
    description:
      'ECL Foresight applies ORBITAL structural analysis and SIMFORE scenario modelling to IFRS 9 expected credit loss calculations. It replaces static point-in-time models with forward-looking, probability-weighted projections — giving finance teams audit-ready ECL estimates with full assumption transparency.',
    domain: 'financial',
    poweredBy: ['orbital', 'simfore'],
    status: 'live',
  },
  {
    id: 'consolidate-ai',
    name: 'ConsolidateAI',
    tagline: 'Group financial consolidation with automated intercompany reconciliation and anomaly detection.',
    description:
      'ConsolidateAI applies MAGNUS forensic intelligence to multi-entity financial consolidation — automatically identifying intercompany mismatches, currency translation anomalies, and classification inconsistencies. It turns a multi-week close process into a structured, auditable workflow.',
    domain: 'financial',
    poweredBy: ['magnus'],
    status: 'beta',
  },
  // ─── Legal & Compliance ────────────────────────────────────────────────────
  {
    id: 'lexflow-ai',
    name: 'LexFlow AI',
    tagline: 'Contract intelligence that extracts obligations, flags risk, and surfaces non-standard terms.',
    description:
      'LexFlow AI uses MAGNUS forensic intelligence to analyse legal documents at scale. It extracts key obligations, maps clause-level risk, identifies deviations from standard terms, and surfaces inconsistencies across document sets — giving legal teams structured intelligence instead of manual review.',
    domain: 'legal-compliance',
    poweredBy: ['magnus'],
    status: 'live',
  },
  {
    id: 'tax-law-agent',
    name: 'Tax Law Agent',
    tagline: 'Jurisdiction-aware tax analysis with regulatory-change monitoring and planning intelligence.',
    description:
      'Tax Law Agent combines ORBITAL structural mapping with SIMFORE scenario modelling to give tax professionals a forward-looking view of their clients\' exposure. It monitors regulatory changes, models their structural impact, and identifies planning opportunities before they become constraints.',
    domain: 'legal-compliance',
    poweredBy: ['orbital', 'simfore'],
    status: 'beta',
  },
  // ─── Healthcare ────────────────────────────────────────────────────────────
  {
    id: 'clinos',
    name: 'Clinos',
    tagline: 'Clinical decision support built on patient-level outcome modelling and protocol adherence intelligence.',
    description:
      'Clinos applies ORBITAL diagnostic intelligence to patient data to surface structural patterns in clinical outcomes — identifying which protocol deviations correlate with adverse events and which patient profiles respond best to specific interventions. Designed for clinical teams who need evidence structured for decision-making, not just data for reporting.',
    domain: 'healthcare',
    poweredBy: ['orbital', 'simfore'],
    status: 'coming-soon',
  },
  // ─── ESG ──────────────────────────────────────────────────────────────────
  {
    id: 'emissiq',
    name: 'EmissIQ',
    tagline: 'Scope 1–3 emissions tracking with regulatory alignment and net-zero pathway modelling.',
    description:
      'EmissIQ uses ORBITAL to map emissions drivers across the value chain and SIMFORE to model decarbonisation pathways. It aligns reporting to GHG Protocol, TCFD, and emerging regulatory frameworks — turning sustainability data into a credible, forward-looking narrative for boards and investors.',
    domain: 'esg',
    poweredBy: ['orbital', 'simfore'],
    status: 'beta',
  },
  // ─── Education ────────────────────────────────────────────────────────────
  {
    id: 'ai-seekho',
    name: 'AI Seekho',
    tagline: 'Personalised AI literacy platform that adapts to learner context, pace, and professional goals.',
    description:
      'AI Seekho uses ORBITAL to model individual learning trajectories and SIMFORE to predict where knowledge gaps will create future skill constraints. It delivers personalised AI education that is contextualised to the learner\'s role, sector, and prior knowledge — not a generic curriculum.',
    domain: 'education',
    poweredBy: ['orbital', 'simfore'],
    status: 'live',
  },
  {
    id: 'schooliq',
    name: 'SchoolIQ',
    tagline: 'Institutional intelligence for schools — student outcomes, resource allocation, and performance diagnostics.',
    description:
      'SchoolIQ applies ORBITAL structural diagnostics to school-level data — identifying which operational and pedagogical factors are driving or undermining student outcomes. It gives school leadership a structural view of what is working, what is fragile, and where intervention will have the greatest impact.',
    domain: 'education',
    poweredBy: ['orbital'],
    status: 'beta',
  },
  // ─── Custom ────────────────────────────────────────────────────────────────
  {
    id: 'custom-intelligence-system',
    name: 'Custom Intelligence System',
    tagline: 'Bespoke architecture when your decision environment doesn\'t fit an off-the-shelf model.',
    description:
      'For organisations with domain-specific data environments, regulatory constraints, or decision workflows that don\'t map to existing applications — we design and deploy a custom intelligence system from first principles. This uses the full Khaldun Systems stack, configured to your structural reality.',
    domain: 'custom',
    poweredBy: ['orbital', 'magnus', 'simfore'],
    status: 'live',
  },
]

export function getApplicationsByDomain(domainId: string) {
  return applications.filter((a) => a.domain === domainId)
}

export function getDomain(id: string) {
  return applicationDomains.find((d) => d.id === id)
}
