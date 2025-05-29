"use client"

import { motion } from "framer-motion"
import { CheckCircle, X, Warning, Shield, Zap } from "@phosphor-icons/react"

export default function CompetitionSection() {
  const incumbents = [
    {
      name: "SAP Concur",
      marketShare: "60%",
      features: {
        ai: "Legacy/Basic",
        integration: "Complex",
        expense: "Yes",
        customization: "Limited",
        pricing: "Very High ($25-45/user)",
        implementation: "6-12 months",
        userExperience: "Poor (2.1/5 G2)",
      },
      weaknesses: ["Legacy architecture", "Poor UX", "Expensive implementation", "Limited AI"],
    },
    {
      name: "Expensify",
      marketShare: "15%",
      features: {
        ai: "Basic OCR",
        integration: "Good",
        expense: "Yes",
        customization: "Medium",
        pricing: "Medium ($5-18/user)",
        implementation: "2-4 weeks",
        userExperience: "Good (4.2/5 G2)",
      },
      weaknesses: ["No travel booking", "Limited corporate features", "Basic AI", "US-focused"],
    },
    {
      name: "Navan (TripActions)",
      marketShare: "8%",
      features: {
        ai: "Basic recommendations",
        integration: "Limited",
        expense: "Yes",
        customization: "Low",
        pricing: "High ($149-199/user)",
        implementation: "4-8 weeks",
        userExperience: "Average (3.8/5 G2)",
      },
      weaknesses: ["High pricing", "Limited AI", "Complex setup", "Poor international coverage"],
    },
    {
      name: "TravelPerk",
      marketShare: "5%",
      features: {
        ai: "No",
        integration: "Medium",
        expense: "Partial",
        customization: "Medium",
        pricing: "High ($129-179/user)",
        implementation: "3-6 weeks",
        userExperience: "Good (4.1/5 G2)",
      },
      weaknesses: ["No AI", "Limited expense features", "High pricing", "Basic reporting"],
    },
  ]

  return (
    <motion.section
      id="competition"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80 mb-3 sm:mb-4">
        COMPETITIVE LANDSCAPE
      </div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-3 sm:mb-4 text-white">
        Why incumbents are vulnerable to disruption
      </h2>
      <p className="text-sm sm:text-base font-light text-white/70 mb-6">
        Legacy players built for pre-AI era are struggling to adapt. Suitpax is purpose-built for the AI-first future.
      </p>

      {/* Market Share Visualization */}
      <div className="mb-6 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
        <h3 className="text-base font-medium mb-3 text-white">Current market dominance (ripe for disruption)</h3>
        <div className="space-y-3">
          {incumbents.map((competitor, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-white w-32">{competitor.name}</span>
                <div className="flex items-center gap-2">
                  <Warning className="h-4 w-4 text-amber-400" weight="fill" />
                  <span className="text-xs text-white/70">{competitor.weaknesses[0]}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-24 bg-white/10 h-2 rounded-full">
                  <div className="bg-red-400 h-2 rounded-full" style={{ width: competitor.marketShare }}></div>
                </div>
                <span className="text-xs font-medium text-white w-8">{competitor.marketShare}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-white/10 pt-2">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-emerald-400 w-32">Suitpax (Target)</span>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-emerald-400" weight="fill" />
                <span className="text-xs text-emerald-300">AI-native disruption</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 bg-white/10 h-2 rounded-full">
                <div className="bg-emerald-400 h-2 rounded-full" style={{ width: "15%" }}></div>
              </div>
              <span className="text-xs font-medium text-emerald-400 w-8">15%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Comparison Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full min-w-[900px] border-collapse">
          <thead>
            <tr className="bg-white/5 text-left">
              <th className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Features</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-emerald-400">Suitpax</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white/80">SAP Concur</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white/80">Expensify</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white/80">Navan</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white/80">TravelPerk</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">AI Agents</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-emerald-400">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-1" weight="fill" />
                  <span className="font-medium">Advanced (GPT-4)</span>
                </div>
              </td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">Legacy/Basic</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">Basic OCR</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">Basic recommendations</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">
                <X className="h-4 w-4 text-white/40" />
              </td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Implementation Time</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-emerald-400">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-1" weight="fill" />
                  <span className="font-medium">1-2 weeks</span>
                </div>
              </td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-red-400">6-12 months</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">2-4 weeks</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">4-8 weeks</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">3-6 weeks</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">User Experience (G2)</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-emerald-400">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-1" weight="fill" />
                  <span className="font-medium">4.8/5 (Beta)</span>
                </div>
              </td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-red-400">2.1/5</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">4.2/5</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">3.8/5</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">4.1/5</td>
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Pricing (per user/month)</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-emerald-400">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-1" weight="fill" />
                  <span className="font-medium">€49-89</span>
                </div>
              </td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-red-400">$25-45</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">$5-18</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-red-400">$149-199</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-red-400">$129-179</td>
            </tr>
            <tr>
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Complete Solution</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-emerald-400">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-1" weight="fill" />
                  <span className="font-medium">Travel + Expense + AI</span>
                </div>
              </td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">Expense only</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">Expense only</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">Travel + Basic expense</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">Travel + Basic expense</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Disruption Strategy */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-emerald-950/30 backdrop-blur-md p-4 rounded-xl border border-emerald-900/30">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="h-5 w-5 text-emerald-400" weight="fill" />
            <h3 className="text-base font-medium text-white">Technology Moat</h3>
          </div>
          <ul className="text-xs font-light text-white/70 space-y-1">
            <li>• Proprietary AI models trained on 8.3M travel transactions</li>
            <li>• Real-time optimization algorithms</li>
            <li>• Native mobile-first architecture</li>
            <li>• API-first integration platform</li>
          </ul>
        </div>

        <div className="bg-blue-950/30 backdrop-blur-md p-4 rounded-xl border border-blue-900/30">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-5 w-5 text-blue-400" weight="fill" />
            <h3 className="text-base font-medium text-white">Market Timing</h3>
          </div>
          <ul className="text-xs font-light text-white/70 space-y-1">
            <li>• Post-COVID travel recovery creating demand for efficiency</li>
            <li>• AI adoption accelerating in enterprise</li>
            <li>• Legacy systems reaching end-of-life</li>
            <li>• Remote work driving need for better tools</li>
          </ul>
        </div>

        <div className="bg-purple-950/30 backdrop-blur-md p-4 rounded-xl border border-purple-900/30">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="h-5 w-5 text-purple-400" weight="fill" />
            <h3 className="text-base font-medium text-white">Execution Advantage</h3>
          </div>
          <ul className="text-xs font-light text-white/70 space-y-1">
            <li>• Team with deep travel industry expertise</li>
            <li>• Faster development cycles (weeks vs months)</li>
            <li>• Customer-centric product development</li>
            <li>• Strategic partnerships with key providers</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
        <h3 className="text-base font-medium mb-3 text-white">Why now is the perfect time to disrupt</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium mb-2 text-emerald-400">Incumbent vulnerabilities</h4>
            <ul className="text-xs font-light text-white/70 space-y-1">
              <li>• SAP Concur: Legacy architecture, poor UX, expensive</li>
              <li>• Expensify: No travel booking, limited AI capabilities</li>
              <li>• Navan: High pricing, complex implementation</li>
              <li>• TravelPerk: No AI, limited expense management</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium mb-2 text-emerald-400">Market opportunity</h4>
            <ul className="text-xs font-light text-white/70 space-y-1">
              <li>• 73% of companies unsatisfied with current solutions</li>
              <li>• $847B market with 15% annual growth</li>
              <li>• AI adoption creating new expectations</li>
              <li>• Generational shift in decision makers</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
