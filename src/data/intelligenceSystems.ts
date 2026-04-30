import type { IntelligenceSystem } from '@/types'

export const intelligenceSystems: IntelligenceSystem[] = [
  {
    id: 'orbital',
    name: 'ORBITAL',
    type: 'Diagnostic Intelligence',
    tagline: 'Understand what is structurally happening — before you decide anything.',
    description:
      'ORBITAL maps the structural mechanics of a business. Not surface metrics — the underlying mechanisms that drive outcomes, create fragility, and determine what actually moves the needle. Every decision improvement begins with structural understanding. ORBITAL provides it.',
    color: 'blue',
    accentHex: '#3b82f6',
    functions: [
      {
        name: 'Mechanism Mapping',
        description: 'Identifies what actually drives outcomes, not what appears to — distinguishing genuine levers from correlated noise.',
      },
      {
        name: 'Fragility Detection',
        description: 'Locates structural exposures and single points of failure before they surface as operational crises.',
      },
      {
        name: 'Lever Identification',
        description: 'Determines which inputs produce disproportionate change across the business system — the 20% that moves 80%.',
      },
      {
        name: 'Structural Prediction',
        description: 'Models how current structural conditions lead to future states — not trend extrapolation, but causal reasoning.',
      },
      {
        name: 'Diagnostic Reporting',
        description: 'Translates structural findings into decision-ready language for leadership — without technical noise.',
      },
    ],
  },
  {
    id: 'magnus',
    name: 'MAGNUS',
    type: 'Forensic Intelligence',
    tagline: 'Detect the gap between what is claimed and what the data actually shows.',
    description:
      'MAGNUS applies forensic intelligence to financial, operational, and strategic data — from the perspective of an investor or due diligence analyst. It finds where narrative diverges from reality, where numbers contradict each other, and where risk is being obscured rather than managed.',
    color: 'purple',
    accentHex: '#8b5cf6',
    functions: [
      {
        name: 'Narrative vs. Reality Analysis',
        description: 'Compares stated business position against underlying data signals to surface divergence between story and substance.',
      },
      {
        name: 'Financial Pattern Forensics',
        description: 'Identifies anomalies, inconsistencies, and structural irregularities across financial statements and operational data.',
      },
      {
        name: 'Due Diligence Signal Extraction',
        description: 'Surfaces the signals that matter most in high-stakes evaluation — structured for investor and board-level review.',
      },
      {
        name: 'Inconsistency Mapping',
        description: 'Documents where data tells a different story than presented — creating an audit-ready evidence trail.',
      },
      {
        name: 'Risk Obscuration Detection',
        description: 'Finds where risk is being systematically minimised, deferred, or hidden within normal-looking operational patterns.',
      },
    ],
  },
  {
    id: 'simfore',
    name: 'SIMFORE',
    type: 'Simulation Intelligence',
    tagline: 'Model what happens before you commit to a decision.',
    description:
      'SIMFORE simulates the downstream consequences of decisions before they are made. It builds conditional scenario models — mapping how changes in strategy, inputs, or market conditions propagate through the business system — giving leadership the ability to test choices before committing to them.',
    color: 'cyan',
    accentHex: '#06b6d4',
    functions: [
      {
        name: 'Scenario Construction',
        description: 'Builds structured, internally consistent models of alternative futures — not optimistic projections, but honest simulations.',
      },
      {
        name: 'Conditional Outcome Simulation',
        description: 'Models what happens if key variables change — interest rates, demand, costs, regulation, competitive pressure.',
      },
      {
        name: 'Sensitivity Analysis',
        description: 'Identifies which variables have the most impact on outcomes, so attention goes to the right risks.',
      },
      {
        name: 'Decision Consequence Mapping',
        description: 'Traces the second and third-order effects of specific choices before they are implemented.',
      },
      {
        name: 'Confidence-Bounded Projection',
        description: 'Expresses outcomes as probability ranges — not false certainty, but honest ranges with stated assumptions.',
      },
    ],
  },
]

export function getSystem(id: string) {
  return intelligenceSystems.find((s) => s.id === id)
}
