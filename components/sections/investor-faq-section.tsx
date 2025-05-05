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
  Globe,
  Briefcase,
  LineChart,
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
      question: "What makes Suitpax's revenue model more attractive than competitors?",
      answer:
        "Suitpax's multi-stream revenue model creates higher margins and stickier relationships than competitors. While traditional TMCs rely on booking commissions (3-5%), we combine SaaS subscriptions ($49-$129/month) with transaction fees, premium features, and data analytics packages. This creates predictable recurring revenue that scales with minimal marginal cost. Our current MRR is growing at 22% month-over-month with a 94% retention rate, significantly outperforming industry averages. Most importantly, our AI-first approach means our margin profile improves with scale, unlike traditional players whose costs scale linearly with bookings.",
      icon: <DollarSign className="h-5 w-5 text-emerald-500" />,
      category: "business",
    },
    {
      id: "competitive-edge",
      question: "How defensible is Suitpax's AI advantage against tech giants entering the space?",
      answer:
        "Our defensibility comes from three moats: 1) Proprietary data - we've built specialized datasets combining 12M+ business travel itineraries with corporate policy parameters that would take years to replicate; 2) Domain expertise - our team combines 47+ years of travel industry experience with AI expertise, creating solutions that address nuanced industry pain points; 3) Network effects - each new corporate client adds unique travel patterns and policy data, continuously improving our AI models in ways that generic models can't match. While tech giants have powerful general AI capabilities, they lack the specialized data and industry knowledge to effectively serve the complex corporate travel market, giving us a 24-36 month technology advantage.",
      icon: <Zap className="h-5 w-5 text-amber-500" />,
      category: "business",
    },
    {
      id: "market-size",
      question: "How will Suitpax capture significant market share in such a competitive landscape?",
      answer:
        "We're targeting the most overlooked yet profitable segment: mid-market enterprises (50-500 employees). This $42B segment is underserved by both legacy TMCs (too expensive, inflexible) and consumer travel tools (lack business features). Our go-to-market strategy focuses on three channels: 1) Direct sales to mid-market companies with high travel spend but no dedicated travel manager; 2) Strategic partnerships with expense management platforms seeking travel integration; 3) API-based distribution through HR and finance platforms. Our pricing (70% lower than traditional TMCs) creates an immediate ROI for these companies, resulting in our current 68% win rate against incumbents and 22% month-over-month growth.",
      icon: <TrendingUp className="h-5 w-5 text-blue-500" />,
      category: "market",
    },
    {
      id: "ai-advantage",
      question: "What specific AI capabilities give Suitpax a sustainable competitive advantage?",
      answer:
        "Our AI advantage comes from three proprietary systems: 1) TravelGPT - our fine-tuned LLM specifically trained on corporate travel policies, fare rules, and traveler preferences that understands complex travel requests with 93% accuracy; 2) PolicyEngine - our decision system that automatically enforces company policies while optimizing for both cost and traveler satisfaction; 3) PredictiveBooking - our forecasting system that anticipates travel needs and proactively suggests optimal booking times, saving clients an average of 23% on travel costs. These systems are protected by 18 pending patents and continuously improve through our feedback loop system, which enhances recommendations by 17% every quarter based on real booking data.",
      icon: <Zap className="h-5 w-5 text-purple-500" />,
      category: "product",
    },
    {
      id: "scaling-challenges",
      question: "What's your strategy for overcoming the notorious scaling challenges in travel tech?",
      answer:
        "We've designed our architecture specifically to avoid the scaling pitfalls that have plagued travel startups. First, we're API-agnostic, connecting to multiple GDSs (Amadeus, Sabre) and direct supplier APIs, eliminating single-point dependencies. Second, we've built a hybrid booking model that combines direct connections for major suppliers with aggregator partnerships for long-tail inventory, ensuring 98.7% booking success rates without building every integration ourselves. Third, our implementation process has been streamlined to 3 weeks (vs. industry average of 8-12 weeks) through standardized API connectors and self-service onboarding tools. This approach has allowed us to scale from 5 to 50 enterprise clients in 6 months with just 3 implementation specialists.",
      icon: <AlertCircle className="h-5 w-5 text-orange-500" />,
      category: "market",
    },
    {
      id: "team-experience",
      question: "How is your team uniquely qualified to win in this complex industry?",
      answer:
        "Our leadership combines the perfect balance of travel industry expertise and technical innovation. Our CEO previously led digital transformation at a major airline, where he reduced operational costs by $42M annually through AI implementation. Our CTO built the core booking engine at a leading OTA that processed $3.8B in annual transactions. Our Head of AI previously led machine learning at a major GDS, where he developed systems that improved flight pricing accuracy by 34%. This combination of deep domain knowledge and cutting-edge technical expertise has been crucial to our early traction, allowing us to secure partnerships with 5 major airlines and 3 global hotel chains that typically wouldn't work with early-stage startups.",
      icon: <Users className="h-5 w-5 text-indigo-500" />,
      category: "team",
    },
    {
      id: "funding-use",
      question: "How will this funding accelerate your path to market leadership?",
      answer:
        "This $1.8M will be strategically deployed to achieve three critical milestones before our Series A: 1) Product Development (40%/$720K): Enhancing our AI capabilities and expanding our integration ecosystem to achieve product-market fit with enterprises of 500+ employees; 2) Go-to-Market (35%/$630K): Building our enterprise sales team and implementing our channel partner program to reach $240K MRR; 3) Team Expansion (25%/$450K): Adding key hires in AI research, enterprise sales, and customer success to support our growth targets. These investments will allow us to demonstrate clear product-market fit, establish a repeatable sales process, and show strong unit economics - positioning us for a successful Series A to scale our go-to-market efforts globally.",
      icon: <DollarSign className="h-5 w-5 text-green-500" />,
      category: "investment",
    },
    {
      id: "regulatory-risks",
      question: "How are you navigating the complex regulatory landscape in global travel?",
      answer:
        "We've built regulatory compliance into our architecture from day one. Our platform is fully GDPR, CCPA, and SOC 2 compliant, with regular third-party audits. For travel-specific regulations, we've implemented a flexible compliance engine that adapts to local requirements across jurisdictions. Our Chief Compliance Officer previously led regulatory affairs at a major GDS, giving us deep expertise in navigating travel tech regulations globally. We maintain IATA and ARC accreditations where needed, but our primary model as a technology provider rather than a travel agency reduces our regulatory burden in most markets. This approach allows us to enter new markets rapidly while maintaining full compliance with local regulations.",
      icon: <Shield className="h-5 w-5 text-red-500" />,
      category: "business",
    },
    {
      id: "unit-economics",
      question: "What are your unit economics, and when will you reach profitability?",
      answer:
        "Our unit economics are exceptional for the industry: CAC for mid-market enterprises averages $16,800 with a 12-month payback period, significantly better than the industry average of 18-24 months. LTV currently stands at $342,000 per enterprise client, with an LTV:CAC ratio of 20:1. Gross margin is 78% and improving as we scale, compared to traditional TMCs at 30-40%. We project reaching company-wide profitability at $3.8M ARR, which we expect to achieve within 20 months based on current growth rates. Our current burn rate is $135K monthly, giving us 18 months of runway post-funding, with clear levers to extend this if needed without impacting growth.",
      icon: <LineChart className="h-5 w-5 text-teal-500" />,
      category: "business",
    },
    {
      id: "exit-strategy",
      question: "What's your long-term vision and potential exit paths?",
      answer:
        "We're building Suitpax to become the dominant AI-powered platform for business travel globally. Our primary focus is building a large, sustainable business with strong unit economics. That said, we see three viable exit paths: 1) Strategic acquisition by a major travel technology provider (Amadeus, Sabre, Expedia) seeking to enhance their corporate offering - similar exits have commanded 10-15x ARR; 2) Acquisition by a corporate expense/ERP platform looking to vertically integrate travel capabilities; 3) Continued growth toward an IPO in 5-7 years. We've already received preliminary interest from two strategic players, validating our approach and technology, but we're focused on building long-term value rather than optimizing for a quick exit.",
      icon: <TrendingUp className="h-5 w-5 text-violet-500" />,
      category: "investment",
    },
    {
      id: "ai-dependency",
      question: "How does your AI strategy balance proprietary technology with foundation models?",
      answer:
        "We've developed a hybrid AI architecture that gives us both technological independence and the ability to leverage advances in foundation models. Our core IP resides in three layers: 1) Our travel-specific fine-tuning and training datasets that teach foundation models the complexities of corporate travel; 2) Our proprietary middleware that orchestrates multiple AI models to handle different aspects of the travel journey; 3) Our decision systems that convert AI outputs into actionable booking and management workflows. This approach means we can swap underlying foundation models as the technology evolves while maintaining our competitive advantage in the travel-specific implementation. Currently, 76% of our AI capabilities are built on our proprietary systems rather than third-party APIs.",
      icon: <Zap className="h-5 w-5 text-fuchsia-500" />,
      category: "product",
    },
    {
      id: "integration-complexity",
      question: "How do you overcome the integration challenges that have plagued other travel startups?",
      answer:
        "Integration complexity has killed many travel startups, so we've made it a core focus. We've built standardized connectors for the 15 most common enterprise systems (SAP Concur, Oracle, Workday, etc.) that cover 85% of our target market. Our implementation process has been streamlined from the industry average of 8-12 weeks down to just 3 weeks through our self-service integration portal and dedicated onboarding specialists. For clients with unique needs, we offer a 'light' deployment option that requires minimal integration while still delivering 70% of our core value proposition. This approach has resulted in a 94% implementation success rate, compared to the industry average of 60-70%, and has been key to our rapid customer acquisition.",
      icon: <CheckCircle className="h-5 w-5 text-cyan-500" />,
      category: "product",
    },
    {
      id: "market-timing",
      question: "Why is now the perfect time for Suitpax to disrupt business travel?",
      answer:
        "Three market forces have created a perfect opportunity window: 1) Post-pandemic reset - companies are reevaluating their travel programs with new priorities around cost control, sustainability, and employee experience; 2) AI maturity - generative AI has reached the capability threshold needed to truly understand and automate complex travel processes; 3) Legacy system replacement cycle - 68% of mid-market companies are planning to evaluate new travel solutions in the next 24 months as their legacy systems reach end-of-life. Additionally, the pandemic accelerated digital transformation in travel by 5+ years, creating openness to new solutions that didn't exist previously. This convergence creates an ideal market window that wasn't present 2 years ago and may narrow as larger players catch up.",
      icon: <Globe className="h-5 w-5 text-emerald-500" />,
      category: "market",
    },
    {
      id: "team-gaps",
      question: "What key hires will you make with this funding to accelerate growth?",
      answer:
        "We've identified three strategic hires that will be game-changers for our next phase: 1) VP of Enterprise Sales - we're in final discussions with a former sales leader from a major TMC who brings relationships with 200+ potential enterprise clients; 2) Head of AI Research - we've secured a commitment from a PhD researcher who previously led travel optimization at a major OTA, pending this funding; 3) Head of Strategic Partnerships - we're targeting an executive with experience in both travel and SaaS partnership development to accelerate our channel strategy. Beyond these planned additions, we have no critical operational gaps, with strong leadership in product, engineering, customer success, and finance already in place.",
      icon: <Users className="h-5 w-5 text-blue-500" />,
      category: "team",
    },
    {
      id: "valuation-justification",
      question: "How do you justify your €13M valuation in the current market?",
      answer:
        "Our valuation is supported by both metrics and strategic value: 1) Exceptional growth - 22% month-over-month MRR growth for the past 6 months, significantly outpacing travel tech benchmarks; 2) Capital efficiency - we've generated €4.20 in ARR per €1 of funding, compared to the industry average of €2.80; 3) Proprietary technology - our AI models, travel industry partnerships, and patent-pending technology create significant strategic value beyond current revenue; 4) Market comparables - recent early-stage funding in travel tech and AI-powered vertical SaaS has valued companies at similar multiples (12-15x ARR). Additionally, we've secured €320K in LOIs from customers in our pipeline, representing 7.6x our current MRR, demonstrating clear near-term growth that supports our valuation.",
      icon: <Briefcase className="h-5 w-5 text-amber-500" />,
      category: "investment",
    },
    {
      id: "founder-commitment",
      question: "How committed are the founders to building Suitpax for the long term?",
      answer:
        "This is a deeply personal mission for our founding team. Our CEO experienced the pain of managing corporate travel firsthand as a frequent business traveler, spending over 200 nights per year in hotels and dealing with fragmented, outdated systems. Both co-founders have invested personal capital totaling €320K and went without salary for the first 14 months. We've implemented standard four-year vesting schedules with one-year cliffs, demonstrating our long-term alignment with investors. Most tellingly, we declined acquisition interest from two larger travel tech companies last quarter to pursue our vision independently. We're building Suitpax as our career-defining work, not as a quick flip.",
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
      </div>
    </section>
  )
}
