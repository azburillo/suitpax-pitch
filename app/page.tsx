"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import HeroTitle from "@/components/hero-title"
import ExecutiveSummarySection from "@/components/sections/executive-summary-section"
import ProblemSolutionSection from "@/components/sections/problem-solution-section"
import ProductsSection from "@/components/sections/products-section"
import BusinessSection from "@/components/sections/business-section"
import MarketSection from "@/components/sections/market-section"
import CompetitionSection from "@/components/sections/competition-section"
import TractionSection from "@/components/sections/traction-section"
import TeamSection from "@/components/sections/team-section"
import TeamVisionSection from "@/components/sections/team-vision-section"
import RoadmapSection from "@/components/sections/roadmap-section"
import FundingUseSection from "@/components/sections/funding-use-section"
import InvestmentSection from "@/components/sections/investment-section"
import InvestorROISection from "@/components/sections/investor-roi-section"
import ClosingSection from "@/components/sections/closing-section"
import GlobalPresenceSection from "@/components/sections/global-presence-section"
import PricingSection from "@/components/sections/pricing-section"
import BusinessDefensibilitySection from "@/components/sections/business-defensibility-section"
import SustainabilityImpactSection from "@/components/sections/sustainability-impact-section"
import CrisisManagementSection from "@/components/sections/crisis-management-section"
import FoundersOpenLetter from "@/components/sections/founders-open-letter"
import FutureHeadlinesSection from "@/components/sections/future-headlines-section"
import AirlinePartnersSection from "@/components/sections/airline-partners-section"
import CommunitySection from "@/components/sections/community-section"
import InvestorFAQSection from "@/components/sections/investor-faq-section"
import PasswordProtection from "@/components/password-protection"
import ContentProtection from "@/components/content-protection"
import Footer from "@/components/footer"

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = localStorage.getItem("suitpax-auth")
    if (authStatus === "authenticated") {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  const handleAuthentication = () => {
    setIsAuthenticated(true)
    localStorage.setItem("suitpax-auth", "authenticated")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticate={handleAuthentication} />
  }

  return (
    <ContentProtection>
      <main className="min-h-screen bg-gray-50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <Navigation />

          <div className="space-y-8 mt-8">
            <HeroTitle />
            <ExecutiveSummarySection />
            <ProblemSolutionSection />
            <ProductsSection />
            <PricingSection />
            <BusinessSection />
            <MarketSection />
            <GlobalPresenceSection />
            <CompetitionSection />
            <BusinessDefensibilitySection />
            <TractionSection />
            <TeamSection />
            <FoundersOpenLetter />
            <TeamVisionSection />
            <RoadmapSection />
            <FundingUseSection />
            <InvestmentSection />
            <InvestorROISection />
            <InvestorFAQSection />
            <SustainabilityImpactSection />
            <CrisisManagementSection />
            <AirlinePartnersSection />
            <CommunitySection />
            <FutureHeadlinesSection />
            <ClosingSection />
          </div>

          <Footer />
        </div>
      </main>
    </ContentProtection>
  )
}
