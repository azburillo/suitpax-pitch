"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CaretDown, CaretUp, Question, CheckCircle, Warning, ShieldCheck, Rocket } from "@phosphor-icons/react"
import Image from "next/image"

export default function InvestorFAQSection() {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({
    0: true, // First item expanded by default
  })

  // Toggle FAQ item expansion
  const toggleItem = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  // FAQ data
  const faqs = [
    {
      question: "What is your sustainable competitive advantage against established competitors?",
      answer: (
        <div className="space-y-2">
          <p>Our competitive advantage is built on three fundamental pillars:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Proprietary technology:</span> Our AI models are specifically trained for
                corporate travel, with optimization algorithms that generate an average 27% cost savings.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Complete integration:</span> Unlike fragmented solutions, we offer a
                unified platform that connects travel, finance, and traveler experience.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Disruptive pricing model:</span> Our pricing structure is up to 70% more
                economical than traditional competitors, eliminating per-user commissions.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <Rocket className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "How do you plan to acquire customers profitably?",
      answer: (
        <div className="space-y-2">
          <p>
            Our customer acquisition strategy is based on a multi-channel approach with a target CAC of €2,500 and an
            LTV of €15,000+:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Specialized content marketing:</span> Generation of qualified leads
                through high-value content on corporate travel optimization.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Strategic partnerships:</span> Alliances with accounting firms,
                consultancies, and business associations that recommend us to their clients.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Freemium model:</span> Our free version allows users to experience the
                value before becoming paying customers.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <Rocket className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "What is your scaling plan if you secure funding?",
      answer: (
        <div className="space-y-2">
          <p>The funding will be allocated to three main areas to drive our growth:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Product development (45%):</span> Expand our engineering team to
                accelerate the development of advanced AI features and automation.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Sales and marketing (35%):</span> Expand our sales team and increase
                investment in digital marketing to accelerate customer acquisition.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">International expansion (20%):</span> Establish presence in key markets in
                Europe and North America to capture global opportunities.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <Rocket className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "How much runway do you have with the requested investment?",
      answer: (
        <div className="space-y-2">
          <p>
            The €1.2M investment provides us with a 24-month runway with an average monthly burn rate of €50K, allowing
            us to achieve the following milestones:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Month 6:</span> Full product launch with all core features.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Month 12:</span> Reach 50+ active customers and €500K ARR.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Month 18:</span> Expansion to 3 key European markets.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Month 24:</span> Reach €1.5M ARR and prepare for Series A.
              </p>
            </li>
          </ul>
          <p className="text-sm font-light mt-2">
            Additionally, we have a contingency plan that could extend the runway to 30 months if necessary.
          </p>
        </div>
      ),
      icon: <Warning className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "How have you validated product-market fit?",
      answer: (
        <div className="space-y-2">
          <p>We have validated our product-market fit through multiple indicators:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">18 active customers</span> using our beta version, with a 92% retention
                rate at 12 months.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">NPS of 72</span> among our current users, significantly higher than the
                industry average (45).
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">27% average savings</span> documented for our customers in their corporate
                travel costs.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Waitlist of 200+ companies</span> interested in accessing our platform
                after the official launch.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <CheckCircle className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "What is your monetization strategy and revenue model?",
      answer: (
        <div className="space-y-2">
          <p>Our revenue model is based on a tiered SaaS approach:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Free Plan:</span> Basic free features to attract users and generate
                qualified leads.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Scale-up Plan (€49/month):</span> For startups and small businesses, with
                essential features and generous usage limits.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Enterprise Plan ($129/month):</span> For medium-sized businesses, with
                advanced features and no usage limits.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Custom Plan:</span> For large corporations, with custom integrations and
                dedicated support.
              </p>
            </li>
          </ul>
          <p className="text-sm font-light mt-2">
            This model allows us an average LTV of €15,000 per customer, with an 85% gross margin and a 6-month payback
            period.
          </p>
        </div>
      ),
      icon: <CheckCircle className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "What key metrics are you tracking?",
      answer: (
        <div className="space-y-2">
          <p>We monitor a set of critical KPIs to evaluate our growth and business health:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">ARR and MRR:</span> Annual and monthly recurring revenue, with a target of
                €1.5M ARR by the end of 2026.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">CAC and LTV:</span> Customer acquisition cost and lifetime value,
                maintaining an LTV:CAC ratio &gt; 5:1.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Retention and churn:</span> Currently 92% annual retention, with a goal to
                maintain it above 90%.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">NPS and CSAT:</span> Net Promoter Score and customer satisfaction,
                currently at 72 and 4.8/5 respectively.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Generated savings:</span> Average 27% savings in travel costs for our
                customers.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <CheckCircle className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "What is your long-term exit strategy?",
      answer: (
        <div className="space-y-2">
          <p>
            While our primary focus is building a sustainable and profitable business, we see two potential exit paths
            in a 5-7 year horizon:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Strategic acquisition:</span> By major players in the travel sector such
                as Expedia, Booking Holdings, or American Express GBT, who are seeking advanced AI technology for
                corporate travel.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">IPO:</span> Going public once we reach €100M+ ARR, following the path of
                companies like TripActions/Navan.
              </p>
            </li>
          </ul>
          <p className="text-sm font-light mt-2">
            Based on current industry multiples (7-10x ARR), we project an exit valuation between €700M and €1B+ by
            2031.
          </p>
        </div>
      ),
      icon: <Rocket className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "How do you protect your intellectual property?",
      answer: (
        <div className="space-y-2">
          <p>Our IP protection strategy is based on multiple layers:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Patents:</span> 2 patents filed for AI-based travel optimization
                algorithms and 1 patent for our multimodal recommendation system.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Trade secrets:</span> Proprietary AI training methodologies and data
                processing pipelines protected through confidentiality agreements.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Trademark:</span> Suitpax name and logo registered in the EU and in
                process in the US.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Contracts:</span> Robust agreements with employees and suppliers that
                protect our IP and prevent unfair competition.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <ShieldCheck className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "What main risks do you see in the business?",
      answer: (
        <div className="space-y-2">
          <p>We proactively identify and manage the following key risks:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Warning className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Competition:</span> Large players like TripActions/Navan could develop
                similar capabilities. <span className="italic">Mitigation:</span> Maintain our technological advantage
                through continuous innovation and focus on underserved segments.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Warning className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Technology adoption:</span> Resistance to change in traditional companies.{" "}
                <span className="italic">Mitigation:</span> Simplified onboarding process and assisted migration from
                legacy systems.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Warning className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Regulation:</span> Changes in privacy or AI regulations.{" "}
                <span className="italic">Mitigation:</span> Design complying with GDPR and emerging responsible AI
                standards.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Warning className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Economic cycle:</span> Recessions affecting corporate travel spending.
                <span className="italic">Mitigation:</span> Positioning as a cost-saving solution, more valuable in
                difficult economic times.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <Warning className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
  ]

  return (
    <motion.section
      id="investor-faq"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          FREQUENTLY ASKED QUESTIONS
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Anticipating Investor Questions
      </h2>
      <p className="text-sm sm:text-base font-light text-gray-700 mb-6">
        We proactively address the most common objections and questions that investors typically raise.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-xl transition-all duration-200 ${
              expandedItems[index] ? "border-emerald-200 bg-emerald-50/30" : "border-gray-200"
            }`}
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left"
              onClick={() => toggleItem(index)}
              aria-expanded={expandedItems[index]}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${
                    expandedItems[index] ? "bg-emerald-100" : "bg-gray-100"
                  }`}
                >
                  {faq.icon || <Question className="h-4 w-4 text-emerald-950" weight="fill" />}
                </div>
                <h3 className="text-base font-medium">{faq.question}</h3>
              </div>
              <div
                className={`h-6 w-6 rounded-full flex items-center justify-center transition-colors ${
                  expandedItems[index] ? "bg-emerald-100" : "bg-gray-100"
                }`}
              >
                {expandedItems[index] ? (
                  <CaretUp className="h-4 w-4 text-emerald-950" weight="bold" />
                ) : (
                  <CaretDown className="h-4 w-4 text-gray-600" weight="bold" />
                )}
              </div>
            </button>
            {expandedItems[index] && (
              <div className="px-4 pb-4 pt-0">
                <div className="pt-2 text-sm font-light text-gray-700">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-xl">
        <h3 className="text-lg font-medium mb-3">Have more questions?</h3>
        <p className="text-sm font-light text-gray-700 mb-3">
          We are committed to full transparency. If you have additional questions about our business model, technology,
          or financial projections, please don't hesitate to contact us.
        </p>
        <div className="flex items-center gap-2 text-emerald-950">
          <p className="text-sm font-medium">investors@suitpax.com</p>
          <span className="text-gray-400">|</span>
          <p className="text-sm font-medium">+34 91 123 4567</p>
        </div>
      </div>
    </motion.section>
  )
}
