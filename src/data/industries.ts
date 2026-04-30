import type { Industry } from '@/types'

export const industries: Industry[] = [
  {
    id: 'education',
    name: 'Education',
    description:
      'Helping institutions move from reporting on outcomes to predicting and shaping them — using intelligence to improve student success, resource allocation, and strategic planning.',
    challenges: [
      'Enrolment unpredictability and resource strain',
      'Poor visibility into at-risk student populations',
      'Curriculum decisions made without outcome data',
      'Fragmented administrative systems',
    ],
    solutions: [
      'Predictive enrolment and retention modeling',
      'Early intervention signals for student success',
      'Academic performance intelligence dashboards',
      'Operational resource optimization',
    ],
    icon: 'graduation-cap',
    color: 'blue',
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description:
      'Supporting healthcare organizations with decision intelligence that improves patient outcomes, operational efficiency, and risk management — without adding complexity to clinical workflows.',
    challenges: [
      'Delayed identification of patient risk',
      'Operational inefficiencies in resource scheduling',
      'Compliance and audit burden',
      'Siloed clinical and administrative data',
    ],
    solutions: [
      'Patient risk stratification and early warning systems',
      'Operational demand forecasting',
      'Compliance monitoring and audit intelligence',
      'Clinical decision support integration',
    ],
    icon: 'heart-pulse',
    color: 'cyan',
  },
  {
    id: 'finance',
    name: 'Finance & Professional Services',
    description:
      'Giving financial institutions and advisory firms the intelligence infrastructure to assess risk faster, advise with confidence, and make portfolio decisions backed by analytical rigor.',
    challenges: [
      'Risk assessment at scale and speed',
      'Regulatory compliance and reporting complexity',
      'Client advisory quality and consistency',
      'Fraud detection and anomaly identification',
    ],
    solutions: [
      'Risk scoring and portfolio decision intelligence',
      'Automated compliance monitoring',
      'Client-specific insight generation',
      'Fraud and anomaly detection systems',
    ],
    icon: 'bar-chart-3',
    color: 'purple',
  },
  {
    id: 'retail',
    name: 'Retail & E-commerce',
    description:
      'Transforming customer and operational data into decisions that improve margin, reduce waste, and deliver personalized experiences at scale.',
    challenges: [
      'Inventory decisions made with poor demand visibility',
      'Customer behaviour changes outpacing strategy',
      'Margin erosion from reactive pricing',
      'Fragmented customer data across channels',
    ],
    solutions: [
      'Demand forecasting and inventory optimization',
      'Customer behaviour modeling and segmentation',
      'Dynamic pricing intelligence',
      'Omnichannel data unification',
    ],
    icon: 'shopping-bag',
    color: 'indigo',
  },
  {
    id: 'government',
    name: 'Government / Public Sector',
    description:
      'Supporting public sector organizations in delivering better policy outcomes, resource decisions, and service delivery through structured decision intelligence.',
    challenges: [
      'Policy decisions made without outcome modeling',
      'Resource allocation under fiscal constraint',
      'Service delivery inefficiency',
      'Evidence-based reporting to stakeholders',
    ],
    solutions: [
      'Policy impact simulation and modeling',
      'Public resource allocation intelligence',
      'Service demand forecasting',
      'Performance and outcome reporting systems',
    ],
    icon: 'landmark',
    color: 'blue',
  },
  {
    id: 'general-business',
    name: 'General Business Operations',
    description:
      'For organizations across sectors that need to make better decisions faster — with intelligence systems that work across functions, not just within them.',
    challenges: [
      'Strategic decisions made from incomplete information',
      'Operational performance gaps without clear diagnosis',
      'Leadership reporting that measures activity, not outcomes',
      'Disconnected data across business functions',
    ],
    solutions: [
      'Executive decision intelligence dashboards',
      'Cross-functional performance modeling',
      'Strategic scenario planning',
      'Business data unification and insight extraction',
    ],
    icon: 'building-2',
    color: 'purple',
  },
]
