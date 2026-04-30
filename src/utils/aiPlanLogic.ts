import type { AIPlanAnswers, AIPlanResult } from '@/types'

const productMap: Record<string, string[]> = {
  'better-decisions': ['decision-intelligence-engine', 'business-insight-dashboard'],
  'predict-outcomes': ['predictive-analytics-system', 'decision-intelligence-engine'],
  'automate-workflows': ['ai-workflow-intelligence', 'ai-agent-ecosystem'],
  'understand-customers': ['predictive-analytics-system', 'business-insight-dashboard'],
  'reduce-risk': ['decision-intelligence-engine', 'predictive-analytics-system'],
  'unified-intelligence': ['business-insight-dashboard', 'decision-intelligence-engine'],
}

const challengeProductBoosts: Record<string, string> = {
  'slow-decisions': 'decision-intelligence-engine',
  'poor-visibility': 'business-insight-dashboard',
  'risk-exposure': 'predictive-analytics-system',
  'inefficient-processes': 'ai-workflow-intelligence',
  'growth-constraints': 'ai-agent-ecosystem',
  'data-fragmentation': 'business-insight-dashboard',
}

const priorityProductBoosts: Record<string, string> = {
  'efficiency': 'ai-workflow-intelligence',
  'insight': 'business-insight-dashboard',
  'risk': 'predictive-analytics-system',
  'growth': 'ai-agent-ecosystem',
  'decision-making': 'decision-intelligence-engine',
  'customer-experience': 'predictive-analytics-system',
}

const sizeProductBoosts: Record<string, string> = {
  'startup': 'business-insight-dashboard',
  'sme': 'ai-workflow-intelligence',
  'enterprise': 'custom-ai-system-architecture',
  'public-sector': 'decision-intelligence-engine',
}

const outcomeMap: Record<string, string[]> = {
  'better-decisions': [
    'Leadership decisions backed by structured intelligence, not gut instinct',
    'Consistent decision quality across management layers',
    '40–60% reduction in time-to-decision on strategic matters',
  ],
  'predict-outcomes': [
    'Forward visibility into revenue, risk, and demand 30–90 days ahead',
    'Proactive action on emerging threats before they materialize',
    'Scenario planning grounded in data, not assumption',
  ],
  'automate-workflows': [
    'High-volume operational decisions handled automatically',
    'Fewer human bottlenecks in critical processes',
    'Freed leadership capacity for strategic work',
  ],
  'understand-customers': [
    'Deeper understanding of customer patterns and needs',
    'Proactive engagement before churn or drop-off',
    'Personalized customer intelligence at scale',
  ],
  'reduce-risk': [
    'Early warning systems for financial, operational, and compliance risk',
    'Risk decisions made with analytical confidence',
    'Reduced exposure to foreseeable events',
  ],
  'unified-intelligence': [
    'Single source of truth for performance and decisions',
    'No more conflicting reports from different teams',
    'Leadership aligned on the same intelligence picture',
  ],
}

const summaryTemplates: Record<string, string> = {
  'slow-decisions': 'Your organization is making critical decisions without the intelligence infrastructure to support them. The right system can compress your decision cycle from weeks to hours — without sacrificing quality.',
  'poor-visibility': 'You have data, but it\'s not translating into insight. The gap isn\'t analytical capacity — it\'s the right intelligence layer turning your data into decisions.',
  'risk-exposure': 'Risks are visible in hindsight, but you need forward-looking intelligence that flags exposure before it crystallizes. Predictive systems change the posture from reactive to prepared.',
  'inefficient-processes': 'Your processes contain decision points that could be handled intelligently. Embedding decision logic into operations removes friction and lets your team focus on high-value work.',
  'growth-constraints': 'Scaling without AI infrastructure means scaling your problems too. The right decision systems let you grow operations without proportionally growing overhead.',
  'data-fragmentation': 'Fragmented data creates fragmented decisions. Unifying your intelligence layer gives leadership a coherent picture — and the confidence to act on it.',
}

function rankProducts(answers: AIPlanAnswers): string[] {
  const scores: Record<string, number> = {}

  const baseProducts = productMap[answers.aiHelp] ?? ['decision-intelligence-engine', 'business-insight-dashboard']
  baseProducts.forEach((p, i) => { scores[p] = (scores[p] ?? 0) + (3 - i) })

  const challengeBoost = challengeProductBoosts[answers.challenge]
  if (challengeBoost) scores[challengeBoost] = (scores[challengeBoost] ?? 0) + 2

  const priorityBoost = priorityProductBoosts[answers.priority]
  if (priorityBoost) scores[priorityBoost] = (scores[priorityBoost] ?? 0) + 2

  const sizeBoost = sizeProductBoosts[answers.businessSize]
  if (sizeBoost) scores[sizeBoost] = (scores[sizeBoost] ?? 0) + 1

  return Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([id]) => id)
}

export function generateAIPlan(answers: AIPlanAnswers): AIPlanResult {
  const recommendedProducts = rankProducts(answers)

  const summary =
    summaryTemplates[answers.challenge] ??
    'Based on your inputs, there is a clear opportunity to embed decision intelligence into your operations — turning data complexity into strategic clarity.'

  const outcomes = outcomeMap[answers.aiHelp] ?? [
    'Faster, more confident decisions across the organization',
    'Intelligence infrastructure that scales with your business',
    'Measurable improvement in key operational metrics',
  ]

  const relevantIndustries = [answers.industry]
  if (answers.industry !== 'general-business') relevantIndustries.push('general-business')

  const suggestedPages = [
    {
      label: 'See Our Products',
      path: '/products',
      reason: 'Explore the systems recommended for your situation',
    },
    {
      label: 'Your Industry',
      path: `/industries#${answers.industry}`,
      reason: 'See how we\'ve shaped this for your sector',
    },
    {
      label: 'Our Technology',
      path: '/technology',
      reason: 'Understand what powers these systems',
    },
  ]

  if (answers.businessSize === 'enterprise') {
    suggestedPages.push({
      label: 'Custom Architecture',
      path: '/products#custom-ai-system-architecture',
      reason: 'Enterprise-grade custom builds start here',
    })
  }

  return { summary, recommendedProducts, relevantIndustries, expectedOutcomes: outcomes, suggestedPages }
}
