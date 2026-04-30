import type { AIPlanQuestion } from '@/types'

export const aiPlanQuestions: AIPlanQuestion[] = [
  {
    id: 'industry',
    stepContext: 'Business Context',
    question: 'First, tell us about your sector.',
    why: 'Different industries face fundamentally different decision challenges. Knowing your sector lets us apply relevant patterns from the start — not generic ones.',
    options: [
      {
        value: 'education',
        label: 'Education',
        description: 'Schools, universities, colleges, training providers',
      },
      {
        value: 'healthcare',
        label: 'Healthcare & Clinical Services',
        description: 'Hospitals, clinics, health networks, allied health',
      },
      {
        value: 'finance',
        label: 'Finance & Professional Services',
        description: 'Banking, accounting, advisory, insurance, legal',
      },
      {
        value: 'retail',
        label: 'Retail & E-commerce',
        description: 'Physical retail, online stores, consumer brands',
      },
      {
        value: 'government',
        label: 'Government & Public Sector',
        description: 'Government agencies, municipalities, public institutions',
      },
      {
        value: 'general-business',
        label: 'Other / General Business',
        description: 'Cross-sector operations, consulting, technology, services',
      },
    ],
  },
  {
    id: 'challenge',
    stepContext: 'Core Challenge',
    question: 'What is the biggest friction point in your business right now?',
    why: 'We need to understand where things break down — not what you want to build. The right AI system targets the actual gap, not a symptom of it.',
    options: [
      {
        value: 'slow-decisions',
        label: 'Decisions take too long',
        description: 'Leadership is waiting for information that should already exist',
      },
      {
        value: 'poor-visibility',
        label: 'No clear view of what\'s happening',
        description: 'Hard to know actual performance across the business in real time',
      },
      {
        value: 'risk-exposure',
        label: 'Risk isn\'t visible until it\'s too late',
        description: 'Problems surface only after they\'ve already become costly',
      },
      {
        value: 'inefficient-processes',
        label: 'Too much manual effort in key processes',
        description: 'High-volume work that burns time and creates inconsistency',
      },
      {
        value: 'growth-constraints',
        label: 'Growth creates more complexity, not more clarity',
        description: 'Scaling up makes decisions harder, not easier',
      },
      {
        value: 'data-fragmentation',
        label: 'Data exists, but it\'s scattered and unreliable',
        description: 'Multiple systems, conflicting numbers, no single source of truth',
      },
    ],
  },
  {
    id: 'aiHelp',
    stepContext: 'Decision Needs',
    question: 'What do you most want AI to improve?',
    why: 'This shapes what kind of intelligence system fits your situation. There\'s a meaningful difference between a system that predicts and one that recommends — we want to build the right one.',
    options: [
      {
        value: 'better-decisions',
        label: 'The quality of our decisions',
        description: 'Leaders need more confidence and clarity when making strategic calls',
      },
      {
        value: 'predict-outcomes',
        label: 'Our ability to see what\'s coming',
        description: 'We want to forecast demand, risk, or revenue before it happens',
      },
      {
        value: 'automate-workflows',
        label: 'How efficiently our operations run',
        description: 'Reduce manual steps, resolve bottlenecks, move faster',
      },
      {
        value: 'understand-customers',
        label: 'How well we understand our customers',
        description: 'Better insight into behaviour, needs, and churn signals',
      },
      {
        value: 'reduce-risk',
        label: 'Our exposure to risk',
        description: 'Detect financial, operational, or compliance risk before it crystallises',
      },
      {
        value: 'unified-intelligence',
        label: 'Alignment across leadership on key metrics',
        description: 'One coherent intelligence picture, not five conflicting reports',
      },
    ],
  },
  {
    id: 'businessSize',
    stepContext: 'Scale & Complexity',
    question: 'How would you describe the scale of your organisation?',
    why: 'Scale determines the type of architecture that fits. A focused startup needs different infrastructure than a multi-department enterprise — and we build accordingly.',
    options: [
      {
        value: 'startup',
        label: 'Early stage — under 50 people',
        description: 'Building foundations, moving fast, decisions are still centralised',
      },
      {
        value: 'sme',
        label: 'Growing — 50 to 500 people',
        description: 'Processes formalising, leadership structure emerging, scaling actively',
      },
      {
        value: 'enterprise',
        label: 'Established — 500+ people',
        description: 'Complex operations, multiple departments, significant data volume',
      },
      {
        value: 'public-sector',
        label: 'Public institution or government body',
        description: 'Structured governance, accountability requirements, public outcomes',
      },
    ],
  },
  {
    id: 'priority',
    stepContext: 'Priority Outcome',
    question: 'What does success look like for you in the next 12 months?',
    why: 'This is what we optimise the plan toward. Knowing your priority outcome means we can recommend systems that move the needle on what actually matters to your leadership.',
    options: [
      {
        value: 'efficiency',
        label: 'We do more with the same resources',
        description: 'Reduced overhead, faster execution, less manual effort across operations',
      },
      {
        value: 'insight',
        label: 'We understand our business far better',
        description: 'Clearer visibility into what\'s working, what\'s not, and why',
      },
      {
        value: 'risk',
        label: 'We\'re better protected from costly surprises',
        description: 'Earlier warning on risk, stronger controls, fewer reactive crises',
      },
      {
        value: 'growth',
        label: 'We grow revenue with confidence',
        description: 'Smarter targeting, better forecasting, growth backed by intelligence',
      },
      {
        value: 'decision-making',
        label: 'Our leadership makes better decisions, consistently',
        description: 'Decisions are faster, more aligned, and based on the same intelligence',
      },
      {
        value: 'customer-experience',
        label: 'Our customers get a noticeably better experience',
        description: 'More personalised, proactive, and responsive interactions at scale',
      },
    ],
  },
]
