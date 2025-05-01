"use client"

import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"

export default function IntegrationEcosystemSection() {
  const integrations = [
    {
      category: "Travel Management",
      items: ["Amadeus", "Sabre", "Travelport", "KAYAK for Business", "TripActions"],
    },
    {
      category: "Expense Management",
      items: ["SAP Concur", "Expensify", "Ramp", "Brex", "Divvy"],
    },
    {
      category: "Productivity",
      items: ["Microsoft 365", "Google Workspace", "Slack", "Notion", "Asana"],
    },
    {
      category: "Finance & ERP",
      items: ["SAP", "Oracle", "NetSuite", "Xero", "QuickBooks"],
    },
    {
      category: "HR & Identity",
      items: ["Workday", "BambooHR", "Okta", "OneLogin", "Azure AD"],
    },
  ]

  return (
    <section id="integrations" className="w-full bg-gray-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tighter text-gray-900 sm:text-4xl">Integration Ecosystem</h2>
          <p className="mt-4 text-lg font-light text-gray-600">
            Suitpax seamlessly connects with your existing business tools and platforms
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {integrations.map((category, index) => (
            <motion.div
              key={index}
              className="rounded-xl bg-white p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-xl font-medium tracking-tighter text-gray-900">{category.category}</h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-gray-700" />
                    <span className="text-sm font-light text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#custom-integration"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Custom integrations available
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
