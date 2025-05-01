"use client"

import { motion } from "framer-motion"
import { CheckCircle, X } from "@phosphor-icons/react"

export default function CompetitionSection() {
  const competitors = [
    {
      name: "Navan (TripActions)",
      features: {
        ai: "Basic",
        integration: "Limited",
        expense: "Yes",
        customization: "Low",
        pricing: "High ($149-$199/user)",
      },
    },
    {
      name: "TravelPerk",
      features: {
        ai: "No",
        integration: "Medium",
        expense: "Partial",
        customization: "Medium",
        pricing: "High ($129-$179/user)",
      },
    },
    {
      name: "Egencia (Amex GBT)",
      features: {
        ai: "Limited",
        integration: "Medium",
        expense: "Partial",
        customization: "Low",
        pricing: "Very high ($200+/user)",
      },
    },
    {
      name: "Ramp",
      features: {
        ai: "Basic",
        integration: "Good",
        expense: "Yes",
        customization: "Medium",
        pricing: "Medium ($8-$15/user)",
      },
    },
    {
      name: "Expensify",
      features: {
        ai: "Limited",
        integration: "Good",
        expense: "Yes",
        customization: "Medium",
        pricing: "Medium ($5-$18/user)",
      },
    },
    {
      name: "BizAway",
      features: {
        ai: "No",
        integration: "Limited",
        expense: "No",
        customization: "Low",
        pricing: "Medium ($99-$149/user)",
      },
    },
    {
      name: "Pleo",
      features: {
        ai: "No",
        integration: "Medium",
        expense: "Yes",
        customization: "Medium",
        pricing: "Medium ($11/user)",
      },
    },
    {
      name: "Brex",
      features: {
        ai: "Basic",
        integration: "Medium",
        expense: "Yes",
        customization: "Medium",
        pricing: "High ($149/user)",
      },
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
        COMPETITION
      </div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-3 sm:mb-4 text-white">
        Competitive analysis
      </h2>
      <p className="text-sm sm:text-base font-light text-white/70 mb-6">
        Suitpax offers a comprehensive solution that combines the best of travel and finance platforms, with an advanced
        AI layer that no competitor can match.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="bg-white/5 text-left">
              <th className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Features</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Suitpax</th>
              {competitors.map((competitor, index) => (
                <th key={index} className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white/80">
                  {competitor.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-white/10">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Advanced AI agents</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-white mr-1" weight="fill" />
                  <span className="font-medium">Leader</span>
                </div>
              </td>
              {competitors.map((competitor, index) => (
                <td key={index} className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">
                  {competitor.features.ai === "No" ? <X className="h-4 w-4 text-white/40" /> : competitor.features.ai}
                </td>
              ))}
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Fintech integration</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-white mr-1" weight="fill" />
                  <span className="font-medium">Complete</span>
                </div>
              </td>
              {competitors.map((competitor, index) => (
                <td key={index} className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">
                  {competitor.features.integration}
                </td>
              ))}
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Expense management</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-white mr-1" weight="fill" />
                  <span className="font-medium">Automated</span>
                </div>
              </td>
              {competitors.map((competitor, index) => (
                <td key={index} className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">
                  {competitor.features.expense}
                </td>
              ))}
            </tr>
            <tr className="border-b border-white/10">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Customization</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-white mr-1" weight="fill" />
                  <span className="font-medium">Total</span>
                </div>
              </td>
              {competitors.map((competitor, index) => (
                <td key={index} className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">
                  {competitor.features.customization}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-white">Price</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-white">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-white mr-1" weight="fill" />
                  <span className="font-medium">From $49/month</span>
                </div>
              </td>
              {competitors.map((competitor, index) => (
                <td key={index} className="p-2 sm:p-3 text-xs sm:text-sm text-white/70">
                  {competitor.features.pricing}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
        <h3 className="text-base font-medium mb-2 text-white">Key competitive advantages</h3>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-black/50 p-3 rounded-xl border border-white/10 shadow-sm">
            <p className="text-sm font-medium mb-1 text-white">Proprietary technology</p>
            <p className="text-xs font-light text-white/70">
              AI agents specifically trained for corporate travel with predictive and optimization capabilities that no
              competitor offers.
            </p>
          </div>
          <div className="bg-black/50 p-3 rounded-xl border border-white/10 shadow-sm">
            <p className="text-sm font-medium mb-1 text-white">Disruptive pricing model</p>
            <p className="text-xs font-light text-white/70">
              Up to 70% more affordable than traditional competitors, with flexible plans that adapt to the size and
              needs of each company.
            </p>
          </div>
          <div className="bg-black/50 p-3 rounded-xl border border-white/10 shadow-sm">
            <p className="text-sm font-medium mb-1 text-white">Unified experience</p>
            <p className="text-xs font-light text-white/70">
              The only platform that fully integrates travel, finance, and traveler experience into a coherent and
              frictionless solution.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
