import type { AIPlanAnswers, AIPlanResult, BusinessContextItem } from '@/types'

// ─── Label maps (human-readable version of each answer value) ─────────────────

const industryLabels: Record<string, string> = {
  'education': 'Education',
  'healthcare': 'Healthcare & Clinical Services',
  'finance': 'Finance & Professional Services',
  'retail': 'Retail & E-commerce',
  'government': 'Government & Public Sector',
  'general-business': 'General Business',
}

const challengeLabels: Record<string, string> = {
  'slow-decisions': 'Decisions take too long',
  'poor-visibility': 'No clear view of business performance',
  'risk-exposure': 'Risk not visible until too late',
  'inefficient-processes': 'Too much manual effort in key processes',
  'growth-constraints': 'Growth creates complexity, not clarity',
  'data-fragmentation': 'Data is scattered and unreliable',
}

const aiHelpLabels: Record<string, string> = {
  'better-decisions': 'Improving decision quality',
  'predict-outcomes': 'Predicting outcomes before they happen',
  'automate-workflows': 'Making operations more efficient',
  'understand-customers': 'Understanding customers more deeply',
  'reduce-risk': 'Reducing exposure to risk',
  'unified-intelligence': 'Aligning leadership on one intelligence picture',
}

const sizeLabels: Record<string, string> = {
  'startup': 'Early stage (under 50 people)',
  'sme': 'Growing organisation (50–500 people)',
  'enterprise': 'Enterprise (500+ people)',
  'public-sector': 'Public sector institution',
}

const priorityLabels: Record<string, string> = {
  'efficiency': 'Doing more with the same resources',
  'insight': 'Understanding the business more deeply',
  'risk': 'Being better protected from surprises',
  'growth': 'Growing revenue with confidence',
  'decision-making': 'Consistently better leadership decisions',
  'customer-experience': 'A noticeably better customer experience',
}

// ─── Product scoring ──────────────────────────────────────────────────────────

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

// ─── Summaries ────────────────────────────────────────────────────────────────

const summaryMap: Record<string, (a: AIPlanAnswers) => string> = {
  'slow-decisions': (a) =>
    `In ${industryLabels[a.industry] ?? 'your sector'}, slow decisions rarely mean slow thinking — they mean the intelligence isn't there when it's needed. Your leadership is likely working from fragmented data and delayed reports, making it hard to act with confidence. The right system doesn't just surface information faster; it structures it around the decisions that matter, so you can act in hours instead of days.`,
  'poor-visibility': (a) =>
    `Most organisations in ${industryLabels[a.industry] ?? 'your sector'} have more data than they can use — the problem isn't access, it's coherence. When leadership can't see a unified, real-time picture of what's happening, every decision is partially blind. An intelligence layer that consolidates your signals and surfaces what actually needs attention changes the posture from reactive to informed.`,
  'risk-exposure': (a) =>
    `Risk in ${industryLabels[a.industry] ?? 'your sector'} rarely arrives without warning — it builds in signals that go unread. If your organisation is reacting to risks after they crystallise, the gap isn't judgement: it's the absence of a forward-looking intelligence layer. Predictive systems turn historical patterns into early warning — giving you time to act before exposure becomes cost.`,
  'inefficient-processes': (a) =>
    `In ${industryLabels[a.industry] ?? 'your sector'}, manual decision points embedded in operations create compounding inefficiency. Every time a human is required to interpret data and decide on a routine action, you're paying for capacity that an intelligent system could handle in milliseconds. Workflow intelligence doesn't remove human judgement — it reserves it for the decisions that actually need it.`,
  'growth-constraints': (a) =>
    `Scaling a ${industryLabels[a.industry] ?? 'growing'} organisation without decision infrastructure means complexity grows faster than capacity. Decisions that worked at one size break down at the next. The organisations that scale well don't just hire more people — they build systems that make better decisions autonomously, so leadership can focus on direction instead of firefighting.`,
  'data-fragmentation': (a) =>
    `Fragmented data in ${industryLabels[a.industry] ?? 'your organisation'} doesn't just create reporting problems — it creates decision problems. When different teams are working from different numbers, the result isn't just inefficiency: it's misalignment at the leadership level. Unifying your intelligence layer isn't a technical exercise. It's the foundation that makes every other decision improvement possible.`,
}

// ─── Per-product rationale ────────────────────────────────────────────────────

const productReasonMap: Record<string, (a: AIPlanAnswers) => string> = {
  'decision-intelligence-engine': (a) =>
    `Given your challenge with ${challengeLabels[a.challenge]?.toLowerCase() ?? 'decision clarity'}, this system directly addresses the gap between data and actionable intelligence. It's designed to structure complex inputs into decision-ready outputs — the core of what your leadership needs.`,
  'business-insight-dashboard': (a) =>
    `With ${priorityLabels[a.priority]?.toLowerCase() ?? 'clarity'} as your priority, a unified intelligence surface removes the noise and puts the right signals in front of the right people. This system consolidates your performance data into one coherent view that actually drives decisions.`,
  'predictive-analytics-system': (a) =>
    `Your focus on ${aiHelpLabels[a.aiHelp]?.toLowerCase() ?? 'predicting outcomes'} makes forward-looking analytics the right foundation. This system models future states from your historical patterns — giving your team lead time to act instead of react.`,
  'ai-workflow-intelligence': (a) =>
    `For an organisation at ${sizeLabels[a.businessSize]?.toLowerCase() ?? 'your scale'} dealing with ${challengeLabels[a.challenge]?.toLowerCase() ?? 'operational friction'}, embedding decision logic into your workflows removes the bottlenecks that slow everything down. Intelligent routing means fewer manual decisions, not fewer decisions.`,
  'ai-agent-ecosystem': (a) =>
    `As your organisation scales, the volume of routine decisions grows with it. An agent ecosystem handles the high-frequency, rule-driven decisions autonomously — freeing your team to focus on the strategic ones. This fits directly with your goal of ${priorityLabels[a.priority]?.toLowerCase() ?? 'growth'}.`,
  'custom-ai-system-architecture': (a) =>
    `At enterprise scale in ${industryLabels[a.industry] ?? 'your sector'}, off-the-shelf systems rarely fit the full complexity of your decision landscape. A custom architecture ensures your AI infrastructure is built around your actual data environment and organisational structure — not around a generic template.`,
}

// ─── Outcomes ─────────────────────────────────────────────────────────────────

const outcomeMap: Record<string, string[]> = {
  'better-decisions': [
    'Leadership decisions backed by structured intelligence — not instinct or incomplete data',
    'A measurable reduction in the time it takes to reach confident strategic conclusions',
    'Consistent decision quality across management layers, regardless of who is in the room',
  ],
  'predict-outcomes': [
    'Forward visibility into revenue, risk, and demand — typically 30–90 days ahead',
    'Proactive action on emerging threats before they materialise as cost or disruption',
    'Scenario planning grounded in data, giving leadership options rather than surprises',
  ],
  'automate-workflows': [
    'High-volume, routine decisions handled automatically — without manual intervention',
    'Operational throughput increases without adding headcount or complexity',
    'Leadership capacity freed for strategic work, not process management',
  ],
  'understand-customers': [
    'A clear model of customer behaviour, segments, and signals — updated continuously',
    'Early identification of churn risk, so you can act before a customer is already gone',
    'Personalised customer intelligence that scales without proportional manual effort',
  ],
  'reduce-risk': [
    'Early warning systems that surface financial, operational, and compliance risk before it peaks',
    'Risk decisions made with analytical confidence rather than reactive judgement',
    'A measurable reduction in exposure to foreseeable, preventable events',
  ],
  'unified-intelligence': [
    'A single source of truth for performance — one set of numbers, one coherent view',
    'Leadership aligned on the same intelligence picture, eliminating conflicting interpretations',
    'Faster consensus in meetings because data is no longer the obstacle',
  ],
}

// ─── Core logic ───────────────────────────────────────────────────────────────

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

  const summaryFn = summaryMap[answers.challenge]
  const summary = summaryFn
    ? summaryFn(answers)
    : `Based on your inputs, there is a clear opportunity to embed decision intelligence into ${industryLabels[answers.industry] ?? 'your organisation'} — turning the data you already have into the clarity your leadership needs to act faster and with greater confidence.`

  const outcomes = outcomeMap[answers.aiHelp] ?? [
    'Faster, more confident decisions across the organisation',
    'Intelligence infrastructure that scales with your business',
    'Measurable improvement in the metrics that matter most to your leadership',
  ]

  const productReasons: Record<string, string> = {}
  for (const id of recommendedProducts) {
    const fn = productReasonMap[id]
    if (fn) productReasons[id] = fn(answers)
  }

  const businessContext: BusinessContextItem[] = [
    { label: 'Sector', value: industryLabels[answers.industry] ?? answers.industry },
    { label: 'Primary friction point', value: challengeLabels[answers.challenge] ?? answers.challenge },
    { label: 'What you want AI to improve', value: aiHelpLabels[answers.aiHelp] ?? answers.aiHelp },
    { label: 'Organisation scale', value: sizeLabels[answers.businessSize] ?? answers.businessSize },
    { label: 'Priority outcome', value: priorityLabels[answers.priority] ?? answers.priority },
  ]

  const relevantIndustries = [answers.industry]
  if (answers.industry !== 'general-business') relevantIndustries.push('general-business')

  const suggestedPages = [
    {
      label: 'Explore Recommended Systems',
      path: '/products',
      reason: 'See full capability details for each system we\'ve recommended',
    },
    {
      label: 'Your Sector',
      path: `/industries#${answers.industry}`,
      reason: `How we\'ve applied these systems in ${industryLabels[answers.industry] ?? 'your sector'}`,
    },
    {
      label: 'How We Build',
      path: '/technology',
      reason: 'The architecture and principles behind every system we deploy',
    },
  ]

  if (answers.businessSize === 'enterprise') {
    suggestedPages.push({
      label: 'Custom Architecture',
      path: '/products#custom-ai-system-architecture',
      reason: 'Enterprise deployments often require a tailored infrastructure approach',
    })
  }

  return {
    summary,
    businessContext,
    recommendedProducts,
    productReasons,
    relevantIndustries,
    expectedOutcomes: outcomes,
    suggestedPages,
  }
}
