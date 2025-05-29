"use client"

import { motion } from "framer-motion"
import { CheckCircle, X, ArrowRight, Lightning, Rocket, Buildings, Crown } from "@phosphor-icons/react"

export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      description: "Try before you commit",
      price: "€0",
      period: "forever",
      icon: <Lightning className="h-6 w-6 text-gray-600" weight="fill" />,
      color: "bg-gray-100",
      textColor: "text-gray-600",
      borderColor: "border-gray-200",
      features: [
        "1 AI trip per month",
        "Basic flight search",
        "Limited hotel bookings",
        "Basic AI assistance",
        "Email support",
      ],
      limitations: ["No financial integrations", "No travel policies", "No expense management"],
    },
    {
      name: "Starter",
      description: "Perfect for startups",
      price: "€49",
      period: "per month",
      icon: <Rocket className="h-6 w-6 text-emerald-950" weight="fill" />,
      color: "bg-emerald-50",
      textColor: "text-emerald-950",
      borderColor: "border-emerald-200",
      popular: true,
      features: [
        "10 AI trips per month",
        "Unlimited bookings",
        "Advanced AI agents",
        "Basic task management",
        "Simple travel policies",
        "Basic expense tracking",
        "Priority support",
      ],
      limitations: [],
    },
    {
      name: "Pro",
      description: "For growing businesses",
      price: "€89",
      period: "per month",
      icon: <Crown className="h-6 w-6 text-blue-700" weight="fill" />,
      color: "bg-blue-50",
      textColor: "text-blue-700",
      borderColor: "border-blue-200",
      features: [
        "30 AI trips per month",
        "Complete AI agent suite",
        "Advanced task management",
        "Multi-level travel policies",
        "Full expense management",
        "Financial integrations",
        "24/7 support",
      ],
      limitations: [],
    },
    {
      name: "Enterprise",
      description: "Tailored to your needs",
      price: "Custom",
      period: "",
      icon: <Buildings className="h-6 w-6 text-purple-700" weight="fill" />,
      color: "bg-purple-50",
      textColor: "text-purple-700",
      borderColor: "border-purple-200",
      features: [
        "Unlimited AI trips",
        "Custom AI development",
        "White-label options",
        "API access",
        "Custom integrations",
        "Dedicated development team",
        "SLA guarantees",
        "Personalized onboarding",
      ],
      limitations: [],
    },
  ]

  return (
    <motion.section
      id="pricing"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        PRICING
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Flexible plans for every growth stage
      </h2>
      <p className="text-sm sm:text-base font-light text-gray-700 mb-6">
        We offer transparent and competitive pricing, up to 70% more affordable than traditional corporate travel
        solutions.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`relative rounded-xl border ${plan.borderColor} overflow-hidden`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-emerald-950 text-white text-[10px] font-medium py-1 px-3 rounded-bl-lg">
                  MOST POPULAR
                </div>
              </div>
            )}
            <div className={`${plan.color} p-4`}>
              <div className="flex items-center gap-2 mb-2">
                {plan.icon}
                <h3 className={`text-lg font-medium ${plan.textColor}`}>{plan.name}</h3>
              </div>
              <p className="text-xs font-light text-gray-600 mb-3">{plan.description}</p>
              <div className="mb-2">
                <span className={`text-2xl font-bold ${plan.textColor}`}>{plan.price}</span>
                {plan.period && <span className="text-xs font-light text-gray-600"> {plan.period}</span>}
              </div>
              <button
                className={`w-full py-2 px-4 rounded-lg text-sm font-medium flex items-center justify-center gap-1 ${plan.name === "Free" ? "bg-gray-200 text-gray-700" : "bg-emerald-950 text-white"}`}
              >
                Start now <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4 bg-white">
              <p className="text-xs font-medium mb-2">Includes:</p>
              <ul className="space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs">
                    <CheckCircle className="h-3.5 w-3.5 text-emerald-950 mt-0.5 flex-shrink-0" weight="fill" />
                    <span className="font-light">{feature}</span>
                  </li>
                ))}
                {plan.limitations.map((limitation, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs">
                    <X className="h-3.5 w-3.5 text-gray-400 mt-0.5 flex-shrink-0" />
                    <span className="font-light text-gray-500">{limitation}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-gray-200 p-4 rounded-xl">
        <h3 className="text-lg font-medium mb-3">Price comparison with competitors</h3>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-2 text-xs font-medium">Platform</th>
                <th className="p-2 text-xs font-medium">Base price</th>
                <th className="p-2 text-xs font-medium">Price per user</th>
                <th className="p-2 text-xs font-medium">Cost for 50 users</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 bg-emerald-50">
                <td className="p-2 text-xs font-medium text-emerald-950">Suitpax (Pro)</td>
                <td className="p-2 text-xs">€89/month</td>
                <td className="p-2 text-xs">€0</td>
                <td className="p-2 text-xs font-medium text-emerald-950">€89/month</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 text-xs font-medium">Navan (TripActions)</td>
                <td className="p-2 text-xs">$0</td>
                <td className="p-2 text-xs">$149-$199</td>
                <td className="p-2 text-xs">$7,450-$9,950/month</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 text-xs font-medium">TravelPerk</td>
                <td className="p-2 text-xs">$0</td>
                <td className="p-2 text-xs">$129-$179</td>
                <td className="p-2 text-xs">$6,450-$8,950/month</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-2 text-xs font-medium">Egencia (Amex GBT)</td>
                <td className="p-2 text-xs">Implementation fee</td>
                <td className="p-2 text-xs">$200+</td>
                <td className="p-2 text-xs">$10,000+/month</td>
              </tr>
              <tr>
                <td className="p-2 text-xs font-medium">Brex</td>
                <td className="p-2 text-xs">$0</td>
                <td className="p-2 text-xs">$149</td>
                <td className="p-2 text-xs">$7,450/month</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs font-light mt-3 text-gray-600">
          * Suitpax offers up to 98% savings compared to traditional solutions for teams of 50+ users.
        </p>
      </div>
    </motion.section>
  )
}
