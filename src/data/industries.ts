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
    id: 'diagnostic-labs',
    name: 'Diagnostic Labs',
    description:
      'Supporting diagnostic laboratories and imaging centers with an intelligence layer that turns raw lab reports and imaging data into structured clinical and operational intelligence.',
    challenges: [
      'Labs produce raw values but lack pattern detection',
      'Operational inefficiencies in diagnostic pathways',
      'Missing early signals in population data',
      'Siloed diagnostic and clinical workflows',
    ],
    solutions: [
      'Diagnostic and imaging intelligence',
      'Clinical decision support integration',
      'Population intelligence and early warning',
      'Pathway optimization',
    ],
    icon: 'heart-pulse',
    color: 'cyan',
  },
  {
    id: 'finance',
    name: 'Finance',
    description:
      'Giving financial institutions the intelligence infrastructure to assess risk faster, manage provisions, and make portfolio decisions backed by analytical rigor.',
    challenges: [
      'Risk assessment at scale and speed',
      'Regulatory compliance and reporting complexity',
      'Provisioning model rigidity',
      'Fraud detection and anomaly identification',
    ],
    solutions: [
      'Risk scoring and portfolio decision intelligence',
      'Automated compliance monitoring',
      'ECL and provisioning intelligence',
      'Fraud and anomaly detection systems',
    ],
    icon: 'bar-chart-3',
    color: 'purple',
  },
  {
    id: 'legal-professional-services',
    name: 'Legal & Professional Services',
    description:
      'Providing legal and professional teams with AI reasoning systems to analyze documents, ensure compliance, and streamline complex advisory workflows.',
    challenges: [
      'High volume of manual document review',
      'Regulatory and compliance risk management',
      'Inconsistent application of reasoning across matters',
      'Fragmented client and matter data',
    ],
    solutions: [
      'Legal reasoning and document intelligence',
      'Automated compliance auditing',
      'Tax law and regulation mapping',
      'Client and matter CRM intelligence',
    ],
    icon: 'landmark',
    color: 'indigo',
  },
  {
    id: 'climate-sustainability',
    name: 'Climate & Sustainability',
    description:
      'Supporting organizations in tracking carbon footprints, aligning with ESG regulations, and simulating the impact of sustainability initiatives.',
    challenges: [
      'Fragmented emissions and supply chain data',
      'Complex reporting requirements (GHG, TCFD)',
      'Disconnect between operations and sustainability goals',
      'Difficulty modeling future carbon scenarios',
    ],
    solutions: [
      'Carbon footprint calculation and tracking',
      'Regulatory alignment and ESG reporting',
      'Decarbonization pathway simulation',
      'Supply chain emissions intelligence',
    ],
    icon: 'shopping-bag',
    color: 'blue',
  },
  {
    id: 'enterprise-strategy',
    name: 'Enterprise Strategy',
    description:
      'For executive teams that need to make better decisions faster — diagnosing the present, auditing reality, and simulating the future before acting.',
    challenges: [
      'Strategic decisions made from incomplete information',
      'Operational performance gaps without clear diagnosis',
      'Leadership reporting that measures activity, not outcomes',
      'Inability to simulate decisions before execution',
    ],
    solutions: [
      'Executive decision intelligence dashboards',
      'Structural mechanism diagnosis',
      'Strategic scenario planning and simulation',
      'Narrative divergence and forensic analysis',
    ],
    icon: 'building-2',
    color: 'purple',
  },
]
