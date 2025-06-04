"use client"

import { useEffect } from "react"
import HeroTitle from "@/components/hero-title"
import OpportunitySection from "@/components/sections/opportunity-section"
import CompetitionSection from "@/components/sections/competition-section"
import ValuePropositionSection from "@/components/sections/value-proposition-section"
import BetaCustomersSection from "@/components/sections/beta-customers-section"
import AIAgentsSection from "@/components/sections/ai-agents-section"
import GoToMarketSection from "@/components/sections/go-to-market-section"
import GlobalExpansionSection from "@/components/sections/global-expansion-section"
import ExecutiveSummarySection from "@/components/sections/executive-summary-section"
import CompetitiveAdvantageSection from "@/components/sections/competitive-advantage-section"
import ClosingSection from "@/components/sections/closing-section"
import GlobalPresenceSection from "@/components/sections/global-presence-section"
import AirlinePartnersSection from "@/components/sections/airline-partners-section"
import TeamCompleteSection from "@/components/sections/team-complete-section"
import TechnologyCompleteSection from "@/components/sections/technology-complete-section"


export default function Home() {
  // Ensure the page starts at the top when loaded
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* 1. IMPACTO INICIAL */}
        <HeroTitle />
        <ExecutiveSummarySection />

        {/* 2. OPORTUNIDAD DE MERCADO */}
        <OpportunitySection />
        <CompetitionSection />

        {/* 3. PROPUESTA DE VALOR */}
        <ValuePropositionSection />
        <BetaCustomersSection />
        <AIAgentsSection />

        {/* 4. VALIDACIÓN Y PRESENCIA */}
        <GlobalPresenceSection />
        <AirlinePartnersSection />

        {/* 5. EQUIPO Y VISIÓN */}
        <TeamCompleteSection />

        {/* 6. TECNOLOGÍA */}
        <TechnologyCompleteSection />

        {/* 7. ESTRATEGIA DE CRECIMIENTO */}
        <CompetitiveAdvantageSection />
        <GoToMarketSection />
        <GlobalExpansionSection />

        {/* 8. FINANCIACIÓN */}
       

        {/* 9. CIERRE */}
        <ClosingSection />
      </div>
    </main>
  )
}
