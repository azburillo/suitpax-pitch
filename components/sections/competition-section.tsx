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
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        COMPETITION
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Competitive analysis
      </h2>
      <p className="text-sm sm:text-base font-light text-gray-700 mb-6">
        Suitpax offers a comprehensive solution that combines the best of travel and finance platforms, with an advanced
        AI layer that no competitor can match.
      </p>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 sm:p-3 text-xs sm:text-sm font-medium">Features</th>
              <th className="p-2 sm:p-3 text-xs sm:text-sm font-medium text-emerald-950">Suitpax</th>
              {competitors.map((competitor, index) => (
                <th key={index} className="p-2 sm:p-3 text-xs sm:text-sm font-medium">
                  {competitor.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium">Advanced AI agents</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-emerald-950">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-950 mr-1" weight="fill" />
                  <span className="font-medium">Leader</span>
                </div>
              </td>
              {competitors.map((competitor, index) => (
                <td key={index} className="p-2 sm:p-3 text-xs sm:text-sm">
                  {competitor.features.ai === "No" ? <X className="h-4 w-4 text-gray-400" /> : competitor.features.ai}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium">Fintech integration</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-emerald-950">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-950 mr-1" weight="fill" />
                  <span className="font-medium">Complete</span>
                </div>
              </td>
              {competitors.map((competitor, index) => (
                <td key={index} className="p-2 sm:p-3 text-xs sm:text-sm">
                  {competitor.features.integration}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium">Expense management</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-emerald-950">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-950 mr-1" weight="fill" />
                  <span className="font-medium">Automated</span>
                </div>
              </td>
              {competitors.map((competitor, index) => (
                <td key={index} className="p-2 sm:p-3 text-xs sm:text-sm">
                  {competitor.features.expense}
                </td>
              ))}
            </tr>
            <tr className="border-b border-gray-200">
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium">Customization</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-emerald-950">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-950 mr-1" weight="fill" />
                  <span className="font-medium">Total</span>
                </div>
              </td>
              {competitors.map((competitor, index) => (
                <td key={index} className="p-2 sm:p-3 text-xs sm:text-sm">
                  {competitor.features.customization}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-2 sm:p-3 text-xs sm:text-sm font-medium">Price</td>
              <td className="p-2 sm:p-3 text-xs sm:text-sm text-emerald-950">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-emerald-950 mr-1" weight="fill" />
                  <span className="font-medium">From $49/month</span>
                </div>
              </td>
              {competitors.map((competitor, index) => (
                <td key={index} className="p-2 sm:p-3 text-xs sm:text-sm">
                  {competitor.features.pricing}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-gray-100 p-3 rounded-xl">
        <h3 className="text-base font-medium mb-2">Key competitive advantages</h3>
        <div className="grid md:grid-cols-3 gap-3">
          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm font-medium mb-1 text-emerald-950">Proprietary technology</p>
            <p className="text-xs font-light">
              AI agents specifically trained for corporate travel with predictive and optimization capabilities that no
              competitor offers.
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm font-medium mb-1 text-emerald-950">Disruptive pricing model</p>
            <p className="text-xs font-light">
              Up to 70% more affordable than traditional competitors, with flexible plans that adapt to the size and
              needs of each company.
            </p>
          </div>
          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm font-medium mb-1 text-emerald-950">Unified experience</p>
            <p className="text-xs font-light">
              The only platform that fully integrates travel, finance, and traveler experience into a coherent and
              frictionless solution.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
