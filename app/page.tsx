"use client"

import { useState, useEffect } from "react"
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
import MoonshotSection from "@/components/sections/moonshot-section"
import FundingUseSection from "@/components/sections/funding-use-section"
import InvestorROISection from "@/components/sections/investor-roi-section"
import AdditionalFeaturesSection from "@/components/sections/additional-features-section"
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
import CustomerSuccessSection from "@/components/sections/customer-success-section"
import ProductPreviewSection from "@/components/sections/product-preview-section"
import FoundersOpenLetter from "@/components/sections/founders-open-letter"
import GlobalPresenceSection from "@/components/sections/global-presence-section"
import FutureHeadlinesSection from "@/components/sections/future-headlines-section"
import AirlinePartnersSection from "@/components/sections/airline-partners-section"

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
        {/* ===== HERO & INTRODUCTION COMPONENTS =====
         * Similar style: Modern, bold, high-impact visuals
         * HeroTitle: Large text, brand colors, main value proposition
         * GlobalPresenceSection: Interactive 3D globe, dark theme with glowing elements
         * DashProductSection: Product showcase with screenshots, modern UI
         * ExecutiveSummarySection: Clean layout, concise text blocks
         */}
        <HeroTitle />
        <GlobalPresenceSection />
        <DashProductSection />
        <ExecutiveSummarySection />

        {/* ===== PROBLEM & MARKET ANALYSIS COMPONENTS =====
         * Similar style: Data-driven, analytical presentation
         * CompetitiveResponseStrategy: Strategic positioning charts
         * ProblemSolutionSection: Problem statements with solution mapping
         * MarketSection: Market size visualizations, TAM/SAM/SOM breakdown
         * CompetitionSection: Competitor comparison tables/matrices
         */}
        <CompetitiveResponseStrategy />
        <ProblemSolutionSection />
        <MarketSection />
        <CompetitionSection />

        {/* ===== PRODUCT & FEATURES COMPONENTS =====
         * Similar style: Product-focused, visual demonstrations
         * SolutionSection: Solution overview with benefits
         * AIAgentsSection: AI capabilities showcase, modern tech feel
         * ProductsSection: Product lineup with features
         * ProductPreviewSection: Visual product demonstrations
         * ApiIntegrationsSection: Technical integration diagrams
         * AdditionalFeaturesSection: Feature highlights with icons
         * CompetitiveAdvantageSection: Advantage comparisons
         *
         * Different style: SustainabilityImpactSection & CrisisManagementSection
         * These have a more corporate/governance focus compared to the
         * product-centric components above
         */}
        <SolutionSection />
        <AIAgentsSection />
        <ProductsSection />
        <ProductPreviewSection />
        <ApiIntegrationsSection />
        <AirlinePartnersSection />
        <AdditionalFeaturesSection />
        <CompetitiveAdvantageSection />
        <SustainabilityImpactSection />
        <CrisisManagementSection />

        {/* ===== TECHNOLOGY COMPONENTS =====
         * Similar style: Technical, architecture-focused
         * TechnologySection: Tech overview with architecture diagrams
         * TechStackSection: Technology stack visualization
         * SecurityComplianceSection: Security features and compliance
         */}
        <TechnologySection />
        <TechStackSection />
        <SecurityComplianceSection />

        {/* ===== BUSINESS & TRACTION COMPONENTS =====
         * Similar style: Business metrics, growth charts
         * TractionSection: Growth metrics, user acquisition
         * CustomerSuccessSection: Customer testimonials, case studies
         * NetworkEffectSection: Network effect visualization
         * UnitEconomicsSection: Financial metrics, unit economics
         * BusinessSection: Business model overview
         * BusinessDefensibilitySection: Moat strategy, defensibility
         */}
        <TractionSection />
        <CustomerSuccessSection />
        <NetworkEffectSection />
        <UnitEconomicsSection />
        <BusinessSection />
        <BusinessDefensibilitySection />

        {/* ===== GROWTH STRATEGY COMPONENTS =====
         * Similar style: Forward-looking, strategic planning
         * GoToMarketSection: GTM strategy visualization
         * GlobalExpansionSection: Global expansion plans
         * MarketExpansionRoadmap: Market expansion timeline
         * RoadmapSection: Product/company roadmap
         */}
        <GoToMarketSection />
        <GlobalExpansionSection />
        <MarketExpansionRoadmap />
        <RoadmapSection />

        {/* ===== TEAM & VISION COMPONENTS =====
         * Different styles within this group:
         * TeamSection: Professional, corporate style with team structure
         * FoundersOpenLetter: Personal, narrative style with founder stories
         * TeamVisionSection: Visionary, aspirational style
         * MoonshotSection: Bold, ambitious future vision
         *
         * Consider unifying the visual language between these components
         * while maintaining their distinct content approaches
         */}
        <div className="space-y-6">
          <TeamSection />
          <FoundersOpenLetter />
        </div>
        <TeamVisionSection />
        <MoonshotSection />

        {/* ===== INVESTMENT COMPONENTS =====
         * Similar style: Financial, ROI-focused
         * FundingUseSection: Use of funds breakdown
         * InvestmentSection: Investment opportunity overview
         * InvestorROISection: ROI projections
         * InvestorROICalculator: Interactive ROI calculator
         *
         * These components share a financial focus but
         * InvestorROICalculator has a more interactive style
         * that could be extended to the other investment components
         */}
        <FundingUseSection />
        <InvestmentSection />
        <InvestorROISection />
        <InvestorROICalculator />
        <FutureHeadlinesSection />

        {/* ===== CLOSING COMPONENT =====
         * Unique style: Call-to-action focused
         * ClosingSection: Final pitch, contact information
         */}
        <ClosingSection />
      </div>
    </main>
  )
}
