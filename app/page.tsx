"use client"

import { useEffect } from "react"
import HeroTitle from "@/components/hero-title"
import DashProductSection from "@/components/sections/dash-product-section"
import ProblemSolutionSection from "@/components/sections/problem-solution-section"
import MarketSection from "@/components/sections/market-section"
import CompetitionSection from "@/components/sections/competition-section"
import SolutionSection from "@/components/sections/solution-section"
import AIAgentsSection from "@/components/sections/ai-agents-section"
import ProductsSection from "@/components/sections/products-section"
import TechnologySection from "@/components/sections/technology-section"
import TechStackSection from "@/components/sections/tech-stack-section"
import SecurityComplianceSection from "@/components/sections/security-compliance-section"
import TractionSection from "@/components/sections/traction-section"
import NetworkEffectSection from "@/components/sections/network-effect-section"
import UnitEconomicsSection from "@/components/sections/unit-economics-section"
import BusinessSection from "@/components/sections/business-section"
import BusinessDefensibilitySection from "@/components/sections/business-defensibility-section"
import GoToMarketSection from "@/components/sections/go-to-market-section"
import GlobalExpansionSection from "@/components/sections/global-expansion-section"
import RoadmapSection from "@/components/sections/roadmap-section"
import TeamSection from "@/components/sections/team-section"
import TeamVisionSection from "@/components/sections/team-vision-section"
import FundingUseSection from "@/components/sections/funding-use-section"
import InvestorROISection from "@/components/sections/investor-roi-section"
import ExecutiveSummarySection from "@/components/sections/executive-summary-section"
import CompetitiveAdvantageSection from "@/components/sections/competitive-advantage-section"
import InvestmentSection from "@/components/sections/investment-section"
import ClosingSection from "@/components/sections/closing-section"
import ApiIntegrationsSection from "@/components/sections/api-integrations-section"
import InvestorROICalculator from "@/components/sections/investor-roi-calculator"
import ProductPreviewSection from "@/components/sections/product-preview-section"
import GlobalPresenceSection from "@/components/sections/global-presence-section"
import AirlinePartnersSection from "@/components/sections/airline-partners-section"
import CommunitySection from "@/components/sections/community-section"
import CapTableSection from "@/components/sections/cap-table-section"

export default function Home() {
  // Ensure the page starts at the top when loaded
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* ===== 1. IMPACTO INICIAL =====
         * Captar atención inmediata con visión y resumen
         */}
        <HeroTitle />
        <ExecutiveSummarySection />

        {/* ===== 2. PROBLEMA Y OPORTUNIDAD =====
         * Establecer el contexto del mercado y la necesidad
         */}
        <ProblemSolutionSection />
        <MarketSection />
        <CompetitionSection />

        {/* ===== 3. SOLUCIÓN Y PRODUCTO =====
         * Mostrar cómo el producto resuelve el problema
         */}
        <SolutionSection />
        <DashProductSection />
        <ProductPreviewSection videoUrl="/videos/suitpax-dashboard-demo.mp4" />
        <ProductsSection />

        {/* ===== 4. VALIDACIÓN Y TRACCIÓN =====
         * Establecer credibilidad con resultados y presencia
         */}
        <TractionSection />
        <GlobalPresenceSection />
        <AirlinePartnersSection />

        {/* ===== 5. EQUIPO Y VISIÓN =====
         * Humanizar la empresa y mostrar liderazgo
         */}
        <TeamSection />
        <CapTableSection />
        <TeamVisionSection />

        {/* ===== 6. TECNOLOGÍA Y EJECUCIÓN =====
         * Demostrar capacidad técnica y diferenciación
         */}
        <AIAgentsSection />
        <ApiIntegrationsSection />
        <TechnologySection />
        <TechStackSection />
        <SecurityComplianceSection />

        {/* ===== 7. ESTRATEGIA DE CRECIMIENTO =====
         * Mostrar cómo la empresa escalará
         */}
        <BusinessSection />
        <UnitEconomicsSection />
        <NetworkEffectSection />
        <BusinessDefensibilitySection />
        <CompetitiveAdvantageSection />
        <GoToMarketSection />
        <GlobalExpansionSection />
        <RoadmapSection />
        <CommunitySection />

        {/* ===== 8. OPORTUNIDAD DE INVERSIÓN =====
         * Hacer el pitch financiero
         */}
        <FundingUseSection />
        <InvestmentSection />
        <InvestorROISection />
        <InvestorROICalculator />

        {/* ===== 9. CIERRE IMPACTANTE =====
         * Dejar una impresión duradera y llamada a la acción
         */}
        <ClosingSection />
      </div>
    </main>
  )
}
