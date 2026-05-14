import { applications, applicationDomains } from '@/data/applications'
import { industries } from '@/data/industries'
import { intelligenceSystems } from '@/data/intelligenceSystems'
import type { SystemId } from '@/types'

function systemNames(ids: SystemId[]): string {
  return ids
    .map((id) => intelligenceSystems.find((s) => s.id === id)?.name ?? id)
    .join(' + ')
}

function buildSystemsSection(): string {
  return intelligenceSystems
    .map((s) => `• ${s.name} — ${s.type}. ${s.tagline}`)
    .join('\n')
}

function buildApplicationsSection(): string {
  return applicationDomains
    .map((domain) => {
      const apps = applications.filter((a) => a.domain === domain.id)
      if (apps.length === 0) return null
      const lines = apps
        .map(
          (a) =>
            `  - ${a.name} (${a.status}) — ${a.tagline} Powered by ${systemNames(a.poweredBy)}.`,
        )
        .join('\n')
      return `${domain.name}:\n${lines}`
    })
    .filter(Boolean)
    .join('\n\n')
}

function buildIndustriesSection(): string {
  return industries
    .map((ind) => {
      const products = ind.products.map((p) => p.name).join('; ')
      return `• ${ind.name} — ${ind.description} Products: ${products}.`
    })
    .join('\n')
}

const FOUNDERS = `Khadija — Co-Founder, Business Intelligence & Strategy. Chartered Accountant with deep experience in finance, operations, and risk. Drives the business lens: turning complexity into clarity, decision quality, structured thinking, and real business impact. Guiding question: "How can businesses make better decisions with the data they already have?"

Ammar — Co-Founder, Technology & Architecture. System architect and AI engineer focused on scalable infrastructure, clean architecture, and real-world implementation. Leads the technical foundation — system architecture, AI integration, and workflows that power intelligent decision systems.

The Story: Khaldun Systems was founded at the intersection of finance and technology. Businesses had data, tools, and systems — but decisions were still delayed, reactive, or unclear. Khadija saw this from the business and finance side; Ammar from the technology and AI side. Together they build a different kind of AI company — one that designs intelligence systems that think, simulate, and guide, not just automate.`

export const KAI_KNOWLEDGE_BASE = `═══ INTELLIGENCE SYSTEMS (3 engines) ═══
${buildSystemsSection()}

═══ APPLICATIONS (specific products, by domain) ═══
${buildApplicationsSection()}

═══ INDUSTRIES (sectors served, with flagship products) ═══
${buildIndustriesSection()}

═══ FOUNDERS ═══
${FOUNDERS}`
