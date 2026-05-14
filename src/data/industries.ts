import type { Industry } from '@/types'

export const industries: Industry[] = [
  {
    id: 'diagnostic-labs',
    name: 'Diagnostic Labs',
    description: 'Clinical and operational diagnostic intelligence.',
    challenges: [
      'Fragmented diagnostic outputs',
      'Limited pattern detection',
      'Pathway inefficiencies'
    ],
    products: [
      { name: 'CLINOS — clinical intelligence for diagnostic labs' },
      { name: 'Diagnostic Intelligence Dashboard — structured diagnostic performance and pathway visibility' },
      { name: 'Imaging Intelligence Layer — insight from imaging and diagnostic outputs' }
    ],
    outcomes: [
      'Clinical decision support',
      'Pathway optimization',
      'Diagnostic intelligence',
      'Operational visibility'
    ],
    icon: 'microscope',
    color: 'cyan'
  },
  {
    id: 'finance-compliance',
    name: 'Finance & Compliance',
    description: 'Risk, provisioning, reporting, and decision intelligence.',
    challenges: [
      'Provisioning uncertainty',
      'Fragmented reporting',
      'Credit risk visibility',
      'Consolidation complexity'
    ],
    products: [
      { name: 'ECL Foresight — IFRS 9 expected credit loss intelligence', link: 'https://ecl-foresight-ksa.netlify.app' },
      { name: 'ConsolidateAI — automated consolidation intelligence', link: 'https://consolidate-ai-strategy.netlify.app' },
      { name: 'Finance Risk Dashboard — portfolio, provisioning, and finance decision visibility' }
    ],
    outcomes: [
      'Better risk visibility',
      'Scenario-based provisioning',
      'Clearer finance decisions'
    ],
    icon: 'bar-chart-3',
    color: 'purple'
  },
  {
    id: 'education-assessment',
    name: 'Education & Assessment',
    description: 'Learning, assessment, and institutional intelligence.',
    challenges: [
      'Student progress gaps',
      'Assessment subjectivity',
      'Limited institutional insight'
    ],
    products: [
      { name: 'AI Seekho — AI literacy and learning platform', link: 'https://ai-seekho-final-demo-r1.netlify.app' },
      { name: 'SchoolIQ — school intelligence and student insight system', link: 'https://schooliq-roots-demo.netlify.app' },
      { name: 'UniAssist — student and university assistance system', link: 'https://sprightly-sunflower-032e9f.netlify.app' },
      { name: 'MindMatch — readiness and assessment intelligence' }
    ],
    outcomes: [
      'Personalized learning',
      'Assessment intelligence',
      'School performance visibility',
      'Student guidance'
    ],
    icon: 'graduation-cap',
    color: 'blue'
  },
  {
    id: 'legal-professional-services',
    name: 'Legal & Professional Services',
    description: 'Reasoning, compliance, and workflow intelligence.',
    challenges: [
      'Document complexity',
      'Regulatory interpretation',
      'Matter tracking',
      'Client workflow'
    ],
    products: [
      { name: 'LexFlow AI — legal reasoning and workflow intelligence' },
      { name: 'Tax Law Agent — tax law reasoning and compliance intelligence' },
      { name: 'Legal CRM — client and matter intelligence' }
    ],
    outcomes: [
      'Legal reasoning support',
      'Compliance intelligence',
      'Professional workflow clarity'
    ],
    icon: 'scale',
    color: 'indigo'
  },
  {
    id: 'real-estate-property',
    name: 'Real Estate & Property',
    description: 'Portfolio, feasibility, rental, and investment intelligence.',
    challenges: [
      'Project feasibility uncertainty',
      'Portfolio underperformance',
      'Market risk',
      'Cost leakage',
      'Rental yield visibility'
    ],
    products: [
      { name: 'PropertyIQ — real estate portfolio performance intelligence' },
      { name: 'SiteSignal — location and feasibility intelligence' },
      { name: 'RentFlow AI — rental, occupancy, and cash-flow intelligence' }
    ],
    outcomes: [
      'Better investment decisions',
      'Clearer portfolio visibility',
      'Demand forecasting',
      'Risk-aware expansion'
    ],
    icon: 'building',
    color: 'amber'
  },
  {
    id: 'manufacturing-industrial',
    name: 'Manufacturing & Industrial Operations',
    description: 'Production, capacity, cost, and operational intelligence.',
    challenges: [
      'Production bottlenecks',
      'Downtime risk',
      'Demand uncertainty',
      'Cost leakage'
    ],
    products: [
      { name: 'FactoryIQ — manufacturing intelligence and production visibility' },
      { name: 'CostLeak AI — industrial cost leakage detection' },
      { name: 'DemandOps AI — demand, inventory, and production planning intelligence' }
    ],
    outcomes: [
      'Better capacity planning',
      'Bottleneck diagnosis',
      'Cost visibility',
      'Operational simulation'
    ],
    icon: 'factory',
    color: 'rose'
  },
  {
    id: 'retail-consumer',
    name: 'Retail & Consumer Businesses',
    description: 'Outlet, inventory, customer, and expansion intelligence.',
    challenges: [
      'Inventory movement',
      'Outlet performance gaps',
      'Customer behavior uncertainty',
      'Expansion decisions'
    ],
    products: [
      { name: 'RetailIQ — retail outlet performance intelligence' },
      { name: 'StockSense AI — inventory and stock movement intelligence' },
      { name: 'CustomerPulse AI — customer behavior and loyalty intelligence' }
    ],
    outcomes: [
      'Demand forecasting',
      'Outlet performance intelligence',
      'Customer insights',
      'Expansion planning'
    ],
    icon: 'shopping-cart',
    color: 'emerald'
  },
  {
    id: 'restaurants-hospitality',
    name: 'Restaurants & Hospitality',
    description: 'Branch performance, demand, cost, and customer experience intelligence.',
    challenges: [
      'Food cost leakage',
      'Demand fluctuation',
      'Waste visibility',
      'Inconsistent branch performance'
    ],
    products: [
      { name: 'RestaurantIQ — restaurant branch performance intelligence' },
      { name: 'MenuSense AI — menu profitability and demand intelligence' },
      { name: 'FoodCost AI — food cost and waste intelligence' }
    ],
    outcomes: [
      'Branch comparison',
      'Demand forecasting',
      'Food cost visibility',
      'Operational decision support'
    ],
    icon: 'utensils',
    color: 'amber'
  },
  {
    id: 'agriculture-food',
    name: 'Agriculture & Food Systems',
    description: 'Farm, food production, yield, traceability, and supply-chain intelligence.',
    challenges: [
      'Yield uncertainty',
      'Feed efficiency',
      'Cold chain visibility',
      'Traceability',
      'Compliance'
    ],
    products: [
      { name: 'FarmIQ — farm production and yield intelligence' },
      { name: 'PoultryIQ — poultry farm and hatchery intelligence' },
      { name: 'FoodChain AI — food supply chain and traceability intelligence' },
      { name: 'Yield Forecasting — crop and production forecasting intelligence' },
      { name: 'Cold Chain Intelligence — temperature, storage, and transport monitoring' }
    ],
    outcomes: [
      'Farm production monitoring',
      'Yield forecasting',
      'Food system intelligence',
      'Sustainability visibility',
      'Traceability'
    ],
    icon: 'wheat',
    color: 'emerald'
  },
  {
    id: 'climate-sustainability',
    name: 'Climate & Sustainability',
    description: 'Carbon, ESG, and reporting intelligence.',
    challenges: [
      'Fragmented emissions data',
      'ESG reporting complexity',
      'Supply chain sustainability visibility'
    ],
    products: [
      { name: 'EmissIQ Carbon — carbon and ESG intelligence system', link: 'https://emissiq-vision.netlify.app' },
      { name: 'ESGFlow — ESG reporting workflow intelligence' },
      { name: 'SupplyCarbon AI — supply-chain emissions intelligence' }
    ],
    outcomes: [
      'Carbon intelligence',
      'ESG dashboards',
      'Reporting support',
      'Sustainability decisions'
    ],
    icon: 'leaf',
    color: 'blue'
  },
  {
    id: 'business-operations-strategy',
    name: 'Business Operations & Strategy',
    description: 'General business diagnostics, expansion, performance, and decision intelligence.',
    challenges: [
      'Unclear performance drivers',
      'Fragmented operations',
      'Expansion uncertainty',
      'Decision delays'
    ],
    products: [
      { name: 'BusinessIQ — business performance and decision intelligence' },
      { name: 'OpsSignal — operational signal and bottleneck intelligence' },
      { name: 'GrowthMap AI — expansion and growth decision support' }
    ],
    outcomes: [
      'Business diagnosis',
      'Scenario planning',
      'Decision clarity',
      'Implementation roadmap'
    ],
    icon: 'briefcase',
    color: 'purple'
  }
]
