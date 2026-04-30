import type { AIPlanQuestion } from '@/types'

export const aiPlanQuestions: AIPlanQuestion[] = [
  {
    id: 'industry',
    question: 'What industry are you in?',
    subtitle: 'We tailor your AI plan to the specific challenges and opportunities of your sector.',
    options: [
      { value: 'education', label: 'Education', description: 'Schools, universities, training providers' },
      { value: 'healthcare', label: 'Healthcare', description: 'Hospitals, clinics, health services' },
      { value: 'finance', label: 'Finance & Professional Services', description: 'Banking, accounting, advisory, legal' },
      { value: 'retail', label: 'Retail & E-commerce', description: 'Stores, marketplaces, consumer brands' },
      { value: 'government', label: 'Government / Public Sector', description: 'Government agencies, public organizations' },
      { value: 'general-business', label: 'General Business Operations', description: 'Across sectors — operations, management, strategy' },
    ],
  },
  {
    id: 'challenge',
    question: 'What is your biggest business challenge?',
    subtitle: 'Understanding what\'s holding you back helps us identify where AI can have the greatest impact.',
    options: [
      { value: 'slow-decisions', label: 'Decisions are too slow', description: 'Leadership waits too long for the right information' },
      { value: 'poor-visibility', label: 'Poor visibility into performance', description: 'Hard to know what\'s actually happening in the business' },
      { value: 'risk-exposure', label: 'Too much risk exposure', description: 'Risks aren\'t caught early enough to act on' },
      { value: 'inefficient-processes', label: 'Inefficient processes', description: 'Too much manual effort, bottlenecks, and waste' },
      { value: 'growth-constraints', label: 'Growth is hard to scale', description: 'Scaling without losing quality or control' },
      { value: 'data-fragmentation', label: 'Data is fragmented', description: 'Information is scattered, inconsistent, and underused' },
    ],
  },
  {
    id: 'aiHelp',
    question: 'What do you want AI to help with?',
    subtitle: 'Tell us where you\'d like AI to make the most difference.',
    options: [
      { value: 'better-decisions', label: 'Make better decisions', description: 'More informed, confident, faster strategic choices' },
      { value: 'predict-outcomes', label: 'Predict outcomes', description: 'Know what\'s likely to happen before it does' },
      { value: 'automate-workflows', label: 'Streamline operations', description: 'Remove friction from high-volume operational work' },
      { value: 'understand-customers', label: 'Understand customers better', description: 'Deeper insight into customer behaviour and needs' },
      { value: 'reduce-risk', label: 'Reduce and manage risk', description: 'Spot threats and reduce exposure proactively' },
      { value: 'unified-intelligence', label: 'Unify business intelligence', description: 'One source of truth for performance and decisions' },
    ],
  },
  {
    id: 'businessSize',
    question: 'What is your business size?',
    subtitle: 'We design systems that fit your scale — from focused implementations to enterprise infrastructure.',
    options: [
      { value: 'startup', label: 'Early Stage / Startup', description: 'Under 50 people, building foundations' },
      { value: 'sme', label: 'Small to Mid-Size', description: '50–500 people, growing and scaling' },
      { value: 'enterprise', label: 'Enterprise', description: '500+ people, complex operations' },
      { value: 'public-sector', label: 'Public Sector / Institution', description: 'Government body, university, or large institution' },
    ],
  },
  {
    id: 'priority',
    question: 'What is your top priority?',
    subtitle: 'This shapes how we structure the recommendations in your AI plan.',
    options: [
      { value: 'efficiency', label: 'Operational Efficiency', description: 'Do more with less — remove waste and friction' },
      { value: 'insight', label: 'Business Insight', description: 'Understand the business more deeply' },
      { value: 'risk', label: 'Risk Management', description: 'Protect the business from foreseeable threats' },
      { value: 'growth', label: 'Growth & Revenue', description: 'Accelerate growth with intelligence-backed strategy' },
      { value: 'decision-making', label: 'Decision-Making Quality', description: 'Make better decisions consistently across leadership' },
      { value: 'customer-experience', label: 'Customer Experience', description: 'Deliver smarter, more personalized customer interactions' },
    ],
  },
]
