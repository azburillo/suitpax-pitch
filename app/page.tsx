"use client"

import { useState, useEffect } from "react"
import HeroTitle from "@/components/hero-title"
import DashProductSection from "@/components/sections/dash-product-section"
import ProblemSolutionSection from "@/components/sections/problem-solution-section"
import FOMOSection from "@/components/sections/fomo-section"
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
import MoonshotSection from "@/components/sections/moonshot-section"
import FundingUseSection from "@/components/sections/funding-use-section"
import InvestorROISection from "@/components/sections/investor-roi-section"
import AdditionalFeaturesSection from "@/components/sections/additional-features-section"
import MarketInterestSection from "@/components/sections/market-interest-section"
import ExecutiveSummarySection from "@/components/sections/executive-summary-section"
import CompetitiveAdvantageSection from "@/components/sections/competitive-advantage-section"
import InvestmentSection from "@/components/sections/investment-section"
import ClosingSection from "@/components/sections/closing-section"
import PasswordProtection from "@/components/password-protection"
import ApiIntegrationsSection from "@/components/sections/api-integrations-section"
import InvestorROICalculator from "@/components/sections/investor-roi-calculator"
import MarketExpansionRoadmap from "@/components/sections/market-expansion-roadmap"
import CompetitiveResponseStrategy from "@/components/sections/competitive-response-strategy"
import SustainabilityImpactSection from "@/components/sections/sustainability-impact-section"
import CrisisManagementSection from "@/components/sections/crisis-management-section"
import Footer from "@/components/footer"
import CustomerSuccessSection from "@/components/sections/customer-success-section"
import IntegrationEcosystemSection from "@/components/sections/integration-ecosystem-section"
import ProductPreviewSection from "@/components/sections/product-preview-section"

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Check if we're in the browser and if the user has already unlocked the deck
  useEffect(() => {
    const unlocked = localStorage.getItem("suitpax_deck_unlocked")
    if (unlocked === "true") {
      setIsUnlocked(true)
    }
    setIsLoading(false)

    // Ensure the page starts at the top when loaded
    window.scrollTo(0, 0)
  }, [])

  const handleUnlock = () => {
    localStorage.setItem("suitpax_deck_unlocked", "true")
    setIsUnlocked(true)
    // Ensure the page starts at the top when unlocked
    window.scrollTo(0, 0)
  }

  if (isLoading) {
    return null // Return nothing while checking localStorage to avoid flash
  }

  if (!isUnlocked) {
    return <PasswordProtection onUnlock={handleUnlock} />
  }

  return (
    <main className="min-h-screen bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Opening & Executive Summary */}
        <HeroTitle />
        <DashProductSection />
        <ExecutiveSummarySection />

        {/* Problem & Market */}
        <CompetitiveResponseStrategy />
        <ProblemSolutionSection />
        <FOMOSection />
        <MarketSection />
        <MarketInterestSection />
        <CompetitionSection />

        {/* Solution & Product */}
        <SolutionSection />
        <AIAgentsSection />
        <ProductsSection />
        <ProductPreviewSection />
        <ApiIntegrationsSection />
        <IntegrationEcosystemSection />
        <AdditionalFeaturesSection />
        <CompetitiveAdvantageSection />
        <SustainabilityImpactSection />
        <CrisisManagementSection />

        {/* Technology */}
        <TechnologySection />
        <TechStackSection />
        <SecurityComplianceSection />

        {/* Business & Traction */}
        <TractionSection />
        <CustomerSuccessSection />
        <NetworkEffectSection />
        <UnitEconomicsSection />
        <BusinessSection />
        <BusinessDefensibilitySection />

        {/* Growth Strategy */}
        <GoToMarketSection />
        <GlobalExpansionSection />
        <MarketExpansionRoadmap />
        <RoadmapSection />

        {/* Team & Vision */}
        <TeamSection />
        <TeamVisionSection />
        <MoonshotSection />

        {/* Investment */}
        <FundingUseSection />
        <InvestmentSection />
        <InvestorROISection />
        <InvestorROICalculator />

        {/* Closing */}
        <ClosingSection />
        <Footer />
      </div>
    </main>
  )
}
