import type { Product } from '@/types'

export const products: Product[] = [
  {
    id: 'decision-intelligence-engine',
    name: 'Decision Intelligence Engine',
    tagline: 'Turn data complexity into decision clarity.',
    description:
      'A core analytical layer that processes multi-source business data, identifies patterns, and surfaces decision-ready insights — not raw outputs.',
    capabilities: [
      'Multi-source data ingestion and normalization',
      'Pattern detection across operational and financial signals',
      'Decision scoring with confidence intervals',
      'Scenario comparison and trade-off mapping',
      'Executive-ready decision briefs',
    ],
    icon: 'brain',
    color: 'blue',
    outcomes: [
      'Faster strategic decisions with higher confidence',
      'Reduced reliance on intuition-only reasoning',
      'Consistent decision quality across the organization',
    ],
  },
  {
    id: 'ai-workflow-intelligence',
    name: 'AI Workflow Intelligence',
    tagline: 'Intelligence built into every process, not bolted on.',
    description:
      'Embeds decision logic directly into operational workflows — automatically routing, flagging, and escalating based on real-time analysis rather than static rules.',
    capabilities: [
      'Intelligent process routing and escalation',
      'Anomaly detection within live workflows',
      'Adaptive rule engines that learn from outcomes',
      'Integration with existing ERP and operational systems',
      'Audit-ready decision trails',
    ],
    icon: 'zap',
    color: 'purple',
    outcomes: [
      'Fewer manual bottlenecks in critical processes',
      'Faster response to operational anomalies',
      'Workflow decisions aligned to business strategy',
    ],
  },
  {
    id: 'predictive-analytics-system',
    name: 'Predictive Analytics System',
    tagline: 'See what\'s coming before it arrives.',
    description:
      'Forward-looking analytics that model future states based on historical patterns, market signals, and operational data — giving leadership time to act rather than react.',
    capabilities: [
      'Demand and revenue forecasting',
      'Risk probability modeling',
      'Customer behaviour prediction',
      'Supply chain and resource planning signals',
      'Confidence-bounded scenario projections',
    ],
    icon: 'trending-up',
    color: 'cyan',
    outcomes: [
      'Proactive planning instead of reactive firefighting',
      'Reduced exposure to foreseeable risks',
      'Better capital and resource allocation',
    ],
  },
  {
    id: 'business-insight-dashboard',
    name: 'Business Insight Dashboard',
    tagline: 'From data overload to decision-ready clarity.',
    description:
      'A unified intelligence surface that consolidates metrics, surfaces contextual insights, and highlights what actually requires attention — built for decision-makers, not analysts.',
    capabilities: [
      'Cross-system KPI unification',
      'Context-aware alerting and anomaly surfacing',
      'Natural language insight generation',
      'Role-based intelligence views',
      'Mobile-accessible decision surfaces',
    ],
    icon: 'layout-dashboard',
    color: 'indigo',
    outcomes: [
      'Leadership visibility without information overload',
      'Faster identification of what matters most',
      'Shared intelligence across leadership teams',
    ],
  },
  {
    id: 'ai-agent-ecosystem',
    name: 'AI Agent Ecosystem',
    tagline: 'A coordinated system of intelligent agents working as one.',
    description:
      'A network of specialized AI agents — each responsible for a domain, all coordinated through a central decision layer — enabling autonomous execution with strategic oversight.',
    capabilities: [
      'Domain-specific agent deployment',
      'Inter-agent coordination and task handoff',
      'Human-in-the-loop escalation controls',
      'Continuous learning from agent outcomes',
      'Orchestration with existing systems and APIs',
    ],
    icon: 'network',
    color: 'purple',
    outcomes: [
      'Autonomous handling of high-volume repetitive decisions',
      'Coordinated intelligence across departments',
      'Scalable decision capacity without headcount growth',
    ],
  },
  {
    id: 'custom-ai-system-architecture',
    name: 'Custom AI System Architecture',
    tagline: 'Built for your decisions. Scaled for your future.',
    description:
      'End-to-end design and implementation of AI decision infrastructure tailored to your organization\'s specific data landscape, operational model, and strategic objectives.',
    capabilities: [
      'Discovery and data architecture assessment',
      'Custom model selection and fine-tuning',
      'Decision infrastructure design',
      'Phased implementation and validation',
      'Ongoing optimization and governance',
    ],
    icon: 'cpu',
    color: 'blue',
    outcomes: [
      'AI infrastructure aligned to business outcomes, not technology trends',
      'Reduced dependency on off-the-shelf tools',
      'Long-term competitive decision advantage',
    ],
  },
]
