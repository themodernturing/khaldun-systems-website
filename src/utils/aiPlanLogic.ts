import type { AIPlanAnswers, AIPlanResult, BusinessContextItem, SystemId, ApplicationDomainId } from '@/types'

// ─── Label maps ───────────────────────────────────────────────────────────────

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

// ─── System scoring ───────────────────────────────────────────────────────────
// ORBITAL = Diagnostic: structural understanding, visibility, lever mapping
// MAGNUS  = Forensic:   inconsistency, hidden risk, narrative vs reality
// SIMFORE = Simulation: prediction, scenario modelling, consequence mapping

const systemMapByAiHelp: Record<string, SystemId[]> = {
  'better-decisions': ['orbital', 'simfore'],
  'predict-outcomes': ['simfore', 'orbital'],
  'automate-workflows': ['orbital', 'simfore'],
  'understand-customers': ['orbital', 'magnus'],
  'reduce-risk': ['magnus', 'simfore'],
  'unified-intelligence': ['orbital', 'magnus'],
}

const challengeSystemBoosts: Record<string, SystemId> = {
  'slow-decisions': 'orbital',
  'poor-visibility': 'orbital',
  'risk-exposure': 'magnus',
  'inefficient-processes': 'orbital',
  'growth-constraints': 'simfore',
  'data-fragmentation': 'magnus',
}

const prioritySystemBoosts: Record<string, SystemId> = {
  'efficiency': 'orbital',
  'insight': 'orbital',
  'risk': 'magnus',
  'growth': 'simfore',
  'decision-making': 'orbital',
  'customer-experience': 'simfore',
}

const sizeSystemBoosts: Record<string, SystemId> = {
  'startup': 'orbital',
  'sme': 'simfore',
  'enterprise': 'magnus',
  'public-sector': 'orbital',
}

// ─── Domain relevance ─────────────────────────────────────────────────────────

const industryDomainMap: Record<string, ApplicationDomainId[]> = {
  'finance': ['financial', 'legal-compliance'],
  'healthcare': ['healthcare'],
  'education': ['education'],
  'government': ['legal-compliance', 'esg'],
  'retail': ['financial'],
  'general-business': ['financial'],
}

// ─── Diagnostic summaries ─────────────────────────────────────────────────────

const summaryMap: Record<string, (a: AIPlanAnswers) => string> = {
  'slow-decisions': (a) =>
    `In ${industryLabels[a.industry] ?? 'your sector'}, slow decisions rarely mean slow thinking — they mean the intelligence isn't there when it's needed. Your leadership is likely working from fragmented data and delayed reports, making it hard to act with confidence. ORBITAL's structural diagnostic would surface the mechanisms causing decision bottlenecks — so you can address the root cause, not the symptom.`,
  'poor-visibility': (a) =>
    `Most organisations in ${industryLabels[a.industry] ?? 'your sector'} have more data than they can use — the problem isn't access, it's coherence. When leadership can't see a unified, real-time picture of what's actually driving outcomes, every decision is partially blind. ORBITAL exists precisely for this: mapping what is structurally happening, so your leadership can act from genuine understanding.`,
  'risk-exposure': (a) =>
    `Risk in ${industryLabels[a.industry] ?? 'your sector'} rarely arrives without warning — it builds in signals that go unread. If your organisation is reacting to risks after they crystallise, the gap isn't judgement: it's the absence of a forensic intelligence layer. MAGNUS finds where risk is being systematically obscured or deferred, while SIMFORE models what happens if those risks materialise.`,
  'inefficient-processes': (a) =>
    `In ${industryLabels[a.industry] ?? 'your sector'}, manual decision points embedded in operations create compounding inefficiency. Every time a human is required to interpret data and decide on a routine action, you're paying for capacity that structured intelligence could handle. ORBITAL's lever identification tells you which process changes produce disproportionate efficiency gains.`,
  'growth-constraints': (a) =>
    `Scaling a ${industryLabels[a.industry] ?? 'growing'} organisation without decision infrastructure means complexity grows faster than capacity. Decisions that worked at one size break down at the next. SIMFORE is built for exactly this: modelling how growth scenarios propagate through your operational structure, so leadership can commit to a direction with evidence rather than optimism.`,
  'data-fragmentation': (a) =>
    `Fragmented data in ${industryLabels[a.industry] ?? 'your organisation'} doesn't just create reporting problems — it creates decision problems. When different teams work from different numbers, the result is misalignment at the leadership level. MAGNUS's inconsistency mapping finds where data is contradicting itself, and ORBITAL builds the structural coherence that makes reliable intelligence possible.`,
}

// ─── Per-system rationale ─────────────────────────────────────────────────────

const systemReasonMap: Record<SystemId, (a: AIPlanAnswers) => string> = {
  orbital: (a) =>
    `Given your challenge with ${challengeLabels[a.challenge]?.toLowerCase() ?? 'decision clarity'}, ORBITAL's diagnostic intelligence is the right starting point. It maps the structural mechanisms behind your outcomes — separating genuine levers from correlated noise — so every subsequent decision is grounded in what is actually driving the business.`,
  magnus: (a) =>
    `With ${challengeLabels[a.challenge]?.toLowerCase() ?? 'data inconsistency'} as a friction point, MAGNUS forensic intelligence surfaces where your numbers are contradicting each other and where risk is being understated. It applies the rigour of due diligence analysis to your internal data — from the perspective of an investor who has reason to be sceptical.`,
  simfore: (a) =>
    `Your focus on ${aiHelpLabels[a.aiHelp]?.toLowerCase() ?? 'predicting outcomes'} makes SIMFORE the right complement to diagnostic intelligence. Once ORBITAL has mapped your structural mechanics, SIMFORE models what happens if key variables change — so leadership can pressure-test strategic choices before committing to them.`,
}

// ─── Expected outcomes ────────────────────────────────────────────────────────

const outcomeMap: Record<string, string[]> = {
  'better-decisions': [
    'Leadership decisions backed by structural intelligence — not instinct or incomplete data',
    'A measurable reduction in the time it takes to reach confident strategic conclusions',
    'Consistent decision quality across management layers, regardless of who is in the room',
  ],
  'predict-outcomes': [
    'Forward visibility into revenue, risk, and demand — typically 30–90 days ahead',
    'Proactive action on emerging threats before they materialise as cost or disruption',
    'Scenario planning grounded in data, giving leadership options rather than surprises',
  ],
  'automate-workflows': [
    'Structural bottlenecks identified and ranked by operational impact',
    'Leadership capacity freed from process management for strategic work',
    'Decision logic embedded where it belongs — in the workflow, not in a meeting',
  ],
  'understand-customers': [
    'A structural model of what actually drives customer behaviour in your market',
    'Early identification of churn signals, retention levers, and acquisition patterns',
    'Strategic moves grounded in customer mechanics, not surface-level metrics',
  ],
  'reduce-risk': [
    'Early warning systems that surface financial, operational, and structural risk before it peaks',
    'Risk decisions made with analytical confidence rather than reactive judgement',
    'A forensic-grade view of where your exposure is being understated or obscured',
  ],
  'unified-intelligence': [
    'A single structural picture of performance — one coherent view your leadership actually trusts',
    'Leadership aligned on the same intelligence, eliminating conflicting interpretations',
    'Faster consensus because data is no longer the obstacle in strategic conversations',
  ],
}

// ─── Core scoring ─────────────────────────────────────────────────────────────

function rankSystems(answers: AIPlanAnswers): SystemId[] {
  const scores: Partial<Record<SystemId, number>> = {}

  const baseSystems = systemMapByAiHelp[answers.aiHelp] ?? (['orbital', 'simfore'] as SystemId[])
  baseSystems.forEach((s, i) => { scores[s] = (scores[s] ?? 0) + (3 - i) })

  const challengeBoost = challengeSystemBoosts[answers.challenge]
  if (challengeBoost) scores[challengeBoost] = (scores[challengeBoost] ?? 0) + 2

  const priorityBoost = prioritySystemBoosts[answers.priority]
  if (priorityBoost) scores[priorityBoost] = (scores[priorityBoost] ?? 0) + 2

  const sizeBoost = sizeSystemBoosts[answers.businessSize]
  if (sizeBoost) scores[sizeBoost] = (scores[sizeBoost] ?? 0) + 1

  return Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([id]) => id as SystemId)
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function generateAIPlan(answers: AIPlanAnswers): AIPlanResult {
  const recommendedSystems = rankSystems(answers)

  const summaryFn = summaryMap[answers.challenge]
  const summary = summaryFn
    ? summaryFn(answers)
    : `Based on your inputs, there is a clear opportunity to embed decision intelligence into ${industryLabels[answers.industry] ?? 'your organisation'} — turning the data you already have into the structural clarity your leadership needs to act faster and with greater confidence.`

  const outcomes = outcomeMap[answers.aiHelp] ?? [
    'Faster, more confident decisions across the organisation',
    'Intelligence infrastructure that scales with your business',
    'Measurable improvement in the metrics that matter most to your leadership',
  ]

  const systemReasons: Record<string, string> = {}
  for (const id of recommendedSystems) {
    const fn = systemReasonMap[id]
    if (fn) systemReasons[id] = fn(answers)
  }

  const businessContext: BusinessContextItem[] = [
    { label: 'Sector', value: industryLabels[answers.industry] ?? answers.industry },
    { label: 'Primary friction point', value: challengeLabels[answers.challenge] ?? answers.challenge },
    { label: 'What you want AI to improve', value: aiHelpLabels[answers.aiHelp] ?? answers.aiHelp },
    { label: 'Organisation scale', value: sizeLabels[answers.businessSize] ?? answers.businessSize },
    { label: 'Priority outcome', value: priorityLabels[answers.priority] ?? answers.priority },
  ]

  const relevantDomains: ApplicationDomainId[] = industryDomainMap[answers.industry] ?? ['financial']

  const suggestedPages = [
    {
      label: 'Intelligence Systems',
      path: '/intelligence-systems',
      reason: 'See full capability details for each system we\'ve recommended',
    },
    {
      label: 'Applications',
      path: '/applications',
      reason: 'Explore deployed applications relevant to your sector',
    },
    {
      label: 'Book a Call',
      path: '/contact',
      reason: 'Validate this plan in a 30-minute strategy conversation',
    },
  ]

  return {
    summary,
    businessContext,
    recommendedSystems,
    systemReasons,
    relevantDomains,
    expectedOutcomes: outcomes,
    suggestedPages,
  }
}
