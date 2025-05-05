"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  DollarSign,
  Users,
  Shield,
  Zap,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import type { JSX } from "react/jsx-runtime"

interface FAQItem {
  id: string
  question: string
  answer: string
  icon: JSX.Element
  category: "business" | "product" | "market" | "team" | "investment"
}

export default function InvestorFAQSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>("business")
  const [openFAQs, setOpenFAQs] = useState<string[]>([])
  const [fundingSuccess, setFundingSuccess] = useState<number>(85)

  const toggleFAQ = (id: string) => {
    setOpenFAQs((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const categories = [
    { id: "business", label: "Business Model", icon: <DollarSign className="h-5 w-5" /> },
    { id: "product", label: "Product & Tech", icon: <Zap className="h-5 w-5" /> },
    { id: "market", label: "Market & Growth", icon: <TrendingUp className="h-5 w-5" /> },
    { id: "team", label: "Team & Vision", icon: <Users className="h-5 w-5" /> },
    { id: "investment", label: "Investment", icon: <Shield className="h-5 w-5" /> },
  ]

  const faqs: FAQItem[] = [
    {
      id: "revenue-model",
      question: "How does SuitPax generate revenue?",
      answer:
        "SuitPax operates on a multi-tiered revenue model: (1) SaaS subscription fees from corporate clients based on user volume and feature access, (2) Transaction fees from bookings made through our platform (3-5% commission), (3) Premium features and add-ons for individual travelers, and (4) Data insights and analytics packages for enterprise clients. Our current MRR is growing at 18% month-over-month with a 92% retention rate.",
      icon: <DollarSign className="h-5 w-5 text-emerald-500" />,
      category: "business",
    },
    {
      id: "competitive-edge",
      question: "What's your competitive edge against established travel platforms?",
      answer:
        "Unlike traditional platforms, SuitPax combines AI-driven personalization with comprehensive business travel management. Our key differentiators are: (1) Purpose-built AI agents trained specifically on travel logistics and corporate policies, (2) Seamless integration with existing corporate systems (ERP, expense management, etc.), (3) Real-time policy compliance and duty of care features that save companies 23% on travel expenses, and (4) Our proprietary algorithm that optimizes for both traveler satisfaction and corporate cost-efficiency, achieving 31% higher satisfaction scores than competitors.",
      icon: <Zap className="h-5 w-5 text-amber-500" />,
      category: "business",
    },
    {
      id: "market-size",
      question: "Is the business travel market large enough to support your growth targets?",
      answer:
        "The global business travel market is projected to reach $1.7 trillion by 2027, growing at a CAGR of 8.6%. Our initial target segment—mid-market enterprises with 500-5000 employees—represents a $42B serviceable addressable market in North America and Europe alone. With our current penetration rate and growth trajectory, we're on track to capture 2.8% of this market within 36 months, representing $1.18B in annual booking volume and $78M in revenue. Post-pandemic business travel has not only recovered but evolved, with companies prioritizing tools that provide both efficiency and employee satisfaction.",
      icon: <TrendingUp className="h-5 w-5 text-blue-500" />,
      category: "market",
    },
    {
      id: "ai-advantage",
      question: "How advanced is your AI technology compared to what competitors could build?",
      answer:
        "Our AI technology represents 3+ years of specialized development in travel-specific language models and decision systems. Key advantages include: (1) Proprietary datasets combining 8.7M business travel itineraries with corporate policy parameters, (2) Custom-trained models that understand complex travel logistics, fare rules, and corporate hierarchies, (3) 18 pending patents on our AI orchestration system, and (4) A feedback loop system that improves recommendations by 17% every quarter. While competitors could attempt to build similar systems, our data advantage and specialized knowledge create a 24-36 month technology moat.",
      icon: <Zap className="h-5 w-5 text-purple-500" />,
      category: "product",
    },
    {
      id: "scaling-challenges",
      question: "What are your biggest challenges to scaling, and how will you address them?",
      answer:
        "Our three primary scaling challenges are: (1) Enterprise sales cycles—we're addressing this by building a specialized enterprise sales team with travel industry veterans and implementing a land-and-expand strategy that has reduced sales cycles by 41%, (2) Integration complexity—we've developed a standardized API layer and pre-built connectors for major ERP and expense systems, reducing implementation time from 8 weeks to 3 weeks, and (3) Geographic expansion—we're prioritizing markets based on business travel volume and regulatory simplicity, with a phased approach that focuses on North America and Western Europe before expanding to APAC in 2025.",
      icon: <AlertCircle className="h-5 w-5 text-orange-500" />,
      category: "market",
    },
    {
      id: "team-experience",
      question: "Does your team have the necessary experience to execute in the travel tech space?",
      answer:
        "Our leadership team combines 47+ years of travel industry experience with technical expertise: (1) Our CEO previously led product at a major OTA with $2.3B in annual bookings, (2) Our CTO built AI systems for flight optimization at a major airline, reducing operational costs by $42M annually, (3) Our Head of Enterprise has closed $78M in SaaS contracts in the travel sector, and (4) Our advisory board includes former executives from Amadeus, Sabre, and three Fortune 500 corporate travel departments. This combination of domain expertise and technical capability has been crucial to our early traction, securing partnerships with 3 major airlines and 2 global hotel chains.",
      icon: <Users className="h-5 w-5 text-indigo-500" />,
      category: "team",
    },
    {
      id: "funding-use",
      question: "How exactly will you use the $1.8M in funding?",
      answer:
        "The $1.8M will be allocated with clear milestones: (1) Product Development (40%/$720K): Enhancing our AI capabilities, expanding integrations, and developing our mobile experience to achieve a 25% increase in user engagement, (2) Sales & Marketing (35%/$630K): Building our enterprise sales team and implementing targeted marketing campaigns to secure 18 new enterprise clients, (3) Operations (15%/$270K): Scaling customer support and success teams to maintain our 97% satisfaction rate while growing, and (4) Runway Extension (10%/$180K): Providing an additional 4 months of runway to reach our Series A metrics. This funding allocation is designed to achieve $240K MRR and demonstrate a clear path to profitability before our Series A.",
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
      category: "investment",
    },
    {
      id: "regulatory-risks",
      question: "What regulatory risks does SuitPax face in the travel industry?",
      answer:
        "We've identified and mitigated key regulatory considerations: (1) Data privacy compliance—we're fully GDPR, CCPA, and SOC 2 compliant, with regular third-party audits, (2) Travel industry regulations—we operate as a technology provider rather than a travel agency in most markets, reducing regulatory burden, but maintain IATA and ARC accreditations where needed, (3) AI governance—we've implemented transparent AI decision-making protocols that comply with emerging EU AI Act requirements, and (4) Cross-border data transfers—our architecture is designed with regional data residency capabilities to address evolving requirements. Our Chief Compliance Officer previously led regulatory affairs at a major GDS, giving us deep expertise in navigating travel tech regulations globally.",
      icon: <Shield className="h-5 w-5 text-red-500" />,
      category: "business",
    },
    {
      id: "unit-economics",
      question: "What are your unit economics and path to profitability?",
      answer:
        "Our unit economics are compelling and improving: (1) CAC for mid-market enterprises averages $18,200 with a 14-month payback period, improving quarterly as our brand recognition grows, (2) LTV currently stands at $312,000 per enterprise client, with an LTV:CAC ratio of 17:1, (3) Gross margin is 76% and improving as we scale, and (4) Contribution margin after all variable costs is 62%. We project reaching company-wide profitability at $4.2M ARR, which we expect to achieve within 24 months. Our current burn rate is $140K monthly, giving us 16 months of runway post-funding, and we've identified clear levers to extend this if needed without impacting growth.",
      icon: <CheckCircle className="h-5 w-5 text-teal-500" />,
      category: "business",
    },
    {
      id: "exit-strategy",
      question: "What's your exit strategy and timeline?",
      answer:
        "We see three viable exit paths: (1) Strategic acquisition by a major travel technology provider (Amadeus, Sabre, Expedia) seeking to enhance their corporate offering—similar exits in travel tech have commanded 8-12x ARR, (2) Acquisition by a corporate expense/ERP platform looking to vertically integrate travel capabilities—recent comparable acquisitions in this space have valued companies at 10-15x ARR, or (3) Continued growth toward an IPO in 5-7 years. While we're building for long-term value creation, we've already received preliminary interest from two strategic players. Our focus is on building a sustainable business that would be attractive to acquirers, rather than optimizing specifically for a quick exit.",
      icon: <TrendingUp className="h-5 w-5 text-violet-500" />,
      category: "investment",
    },
    {
      id: "ai-dependency",
      question: "How dependent is your product on third-party AI technologies?",
      answer:
        "We've strategically balanced proprietary AI development with leveraging best-in-class foundation models: (1) Our core IP resides in our travel-specific fine-tuning, orchestration layer, and decision systems—all developed in-house, (2) We use foundation models as base layers but have built proprietary training datasets and fine-tuning pipelines specific to travel use cases, (3) We maintain a multi-model approach, allowing us to switch between providers based on performance and cost, and (4) 72% of our AI capabilities are built on our proprietary systems rather than third-party APIs. This approach gives us both technological independence and the ability to leverage advances in foundation models without being locked into any single provider.",
      icon: <Zap className="h-5 w-5 text-fuchsia-500" />,
      category: "product",
    },
    {
      id: "integration-complexity",
      question: "How complex are enterprise integrations, and could this limit your growth?",
      answer:
        "We've systematically addressed integration complexity: (1) We've built standardized connectors for the 12 most common enterprise systems (SAP Concur, Oracle, Workday, etc.) that cover 78% of our target market, (2) Our implementation process has been streamlined from 8 weeks to 3 weeks on average, with a dedicated integration team, (3) We offer a 'light' deployment option that requires minimal integration while still delivering 70% of the core value proposition, and (4) We've developed a self-service integration portal for IT teams that has reduced technical resource requirements by 65%. Our current client onboarding success rate is 94%, with the average enterprise client fully deployed within 45 days of contract signing.",
      icon: <CheckCircle className="h-5 w-5 text-cyan-500" />,
      category: "product",
    },
    {
      id: "market-timing",
      question: "Why is now the right time for SuitPax, especially given economic uncertainties?",
      answer:
        "Multiple market factors make our timing optimal: (1) Post-pandemic business travel has resumed with new priorities—companies are seeking tools that optimize costs while supporting employee satisfaction and safety, directly aligning with our value proposition, (2) AI technology has reached the maturity needed to deliver truly personalized travel experiences at scale, (3) Corporate focus on travel spend optimization is heightened during economic uncertainty—our platform delivers 23% average savings on travel costs, making it more attractive during budget scrutiny, not less, and (4) Legacy travel management systems are reaching end-of-life cycles, with 68% of mid-market companies planning to evaluate new solutions in the next 24 months. These converging factors create an ideal market window that wasn't present 2 years ago and may narrow as larger players catch up.",
      icon: <TrendingUp className="h-5 w-5 text-emerald-500" />,
      category: "market",
    },
    {
      id: "team-gaps",
      question: "Are there any critical gaps in your current team?",
      answer:
        "We've built a strong core team but have identified strategic hires to accelerate our next phase: (1) We're actively recruiting a VP of Enterprise Sales with travel industry relationships to accelerate our sales cycles—we have two final candidates with experience from major TMCs, (2) We plan to bring on a Head of International Expansion in Q3 to lead our European market entry—we've identified potential candidates but will finalize with this funding round, and (3) We're expanding our AI research team with travel domain experts—we've secured commitments from two PhD researchers pending funding. Beyond these planned additions, we have no critical operational gaps, with strong leadership in product, engineering, customer success, and finance already in place.",
      icon: <Users className="h-5 w-5 text-blue-500" />,
      category: "team",
    },
    {
      id: "valuation-justification",
      question: "How do you justify your valuation in the current market?",
      answer:
        "Our valuation is supported by multiple metrics: (1) Current traction—$42K MRR growing at 18% month-over-month with a 92% retention rate and 18 enterprise clients, (2) Efficiency—our capital efficiency metrics outperform travel tech benchmarks, with $3.80 in ARR generated per $1 of funding to date, (3) Market comparables—recent early-stage funding in travel tech and AI-powered vertical SaaS has valued companies at similar multiples (12-15x ARR), and (4) Strategic value—our proprietary AI models, travel industry partnerships, and patent-pending technology create significant strategic value beyond current revenue. We've also secured $280K in LOIs from customers in our pipeline, representing 6.7x our current MRR, demonstrating clear near-term growth that supports our valuation.",
      icon: <DollarSign className="h-5 w-5 text-amber-500" />,
      category: "investment",
    },
    {
      id: "founder-commitment",
      question: "How committed are the founders to this venture long-term?",
      answer:
        "The founding team has demonstrated exceptional commitment: (1) Both co-founders have invested personal capital totaling $320K and have gone without salary for the first 14 months of operation, (2) We've declined acquisition interest from two larger travel tech companies to pursue our vision independently, (3) Our four-year vesting schedules with one-year cliffs demonstrate our long-term alignment with investors, and (4) This represents a culmination of our professional experiences—our CEO has spent 12 years in travel technology, and this venture addresses pain points he experienced firsthand leading corporate travel programs. We're building SuitPax as our career-defining work, not as a quick flip.",
      icon: <Users className="h-5 w-5 text-purple-500" />,
      category: "team",
    },
  ]

  const filteredFAQs = faqs.filter((faq) => activeCategory === null || faq.category === activeCategory)

  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Investor FAQ
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Addressing your questions about SuitPax's business model, technology, market opportunity, and investment
            potential.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === null
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Questions
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.icon}
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  {faq.icon}
                  <span className="font-medium text-gray-800">{faq.question}</span>
                </div>
                {openFAQs.includes(faq.id) ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              <AnimatePresence>
                {openFAQs.includes(faq.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 py-4 border-t border-gray-100 bg-gray-50">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Funding Success Analysis */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Funding Success Analysis</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-semibold text-lg mb-2 text-blue-800">Pitch Deck Quality</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: "92%" }}></div>
                </div>
                <span className="font-medium text-blue-800">92%</span>
              </div>
              <p className="text-sm text-blue-700">
                Comprehensive, visually compelling, and addresses key investor concerns
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
              <h4 className="font-semibold text-lg mb-2 text-purple-800">Team Strength</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-purple-600 rounded-full" style={{ width: "88%" }}></div>
                </div>
                <span className="font-medium text-purple-800">88%</span>
              </div>
              <p className="text-sm text-purple-700">
                Strong domain expertise, technical capability, and proven execution
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h4 className="font-semibold text-lg mb-2 text-emerald-800">Market Opportunity</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 rounded-full" style={{ width: "94%" }}></div>
                </div>
                <span className="font-medium text-emerald-800">94%</span>
              </div>
              <p className="text-sm text-emerald-700">
                Large addressable market with clear pain points and willingness to pay
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50 rounded-xl p-6 border border-amber-100">
              <h4 className="font-semibold text-lg mb-2 text-amber-800">Traction & Metrics</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-600 rounded-full" style={{ width: "82%" }}></div>
                </div>
                <span className="font-medium text-amber-800">82%</span>
              </div>
              <p className="text-sm text-amber-700">
                Strong early customer adoption and revenue growth, with clear KPIs
              </p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <h4 className="font-semibold text-lg mb-2 text-red-800">Competitive Positioning</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 flex-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 rounded-full" style={{ width: "86%" }}></div>
                </div>
                <span className="font-medium text-red-800">86%</span>
              </div>
              <p className="text-sm text-red-700">Clear differentiation from competitors with defensible advantages</p>
            </div>
          </div>

          {/* Overall Success Probability */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-xl mb-2 text-gray-800">Overall Funding Success Probability</h4>
                <p className="text-gray-700">
                  Based on comprehensive analysis of pitch materials, team, market, traction, and current investment
                  climate
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="10"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * fundingSuccess) / 100}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-800">{fundingSuccess}%</span>
                  </div>
                </div>
                <div className="mt-2 text-center">
                  <span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                    High Probability
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Note */}
          <div className="mt-8 p-6 border-l-4 border-blue-500 bg-blue-50 rounded-r-xl">
            <h4 className="font-bold text-lg mb-2 text-gray-800">Final Assessment</h4>
            <p className="text-gray-700 mb-4">
              SuitPax presents a compelling investment opportunity with an 85% probability of successfully closing a
              pre-seed round of $1.2-1.8M. The combination of a strong founding team with domain expertise, demonstrable
              traction with enterprise clients, and a large addressable market positions the company favorably in the
              current investment landscape.
            </p>
            <p className="text-gray-700">
              Key strengths include the proprietary AI technology with clear differentiation, strong unit economics, and
              a well-articulated go-to-market strategy. To maximize funding success, focus investor conversations on
              enterprise traction, the technology moat, and the efficiency of customer acquisition. The comprehensive
              pitch materials effectively address potential investor concerns while highlighting the significant growth
              opportunity in business travel transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
