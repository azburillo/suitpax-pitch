"use client"

import { motion } from "framer-motion"
import { CaretRight } from "@phosphor-icons/react"

export default function BusinessSection() {
  return (
    <motion.section
      id="business"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        BUSINESS MODEL
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        SaaS + Commissions + Fintech
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-2">
            <div className="rounded-lg bg-gray-200 p-3">
              <p className="text-base sm:text-lg font-medium tracking-tighter">Basic</p>
              <p className="text-xs font-light text-gray-500 mb-1">$15/user/month</p>
              <ul className="text-xs space-y-1">
                <li className="flex items-center">
                  <CaretRight className="h-3 w-3 text-emerald-950 mr-1 flex-shrink-0" weight="bold" />
                  <span className="line-clamp-2">Basic bookings</span>
                </li>
                <li className="flex items-center">
                  <CaretRight className="h-3 w-3 text-emerald-950 mr-1 flex-shrink-0" weight="bold" />
                  <span className="line-clamp-2">Standard reports</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-200 p-3">
              <p className="text-base sm:text-lg font-medium tracking-tighter">Pro</p>
              <p className="text-xs font-light text-gray-500 mb-1">$29/user/month</p>
              <ul className="text-xs space-y-1">
                <li className="flex items-center">
                  <CaretRight className="h-3 w-3 text-emerald-950 mr-1 flex-shrink-0" weight="bold" />
                  <span className="line-clamp-2">AI Agents</span>
                </li>
                <li className="flex items-center">
                  <CaretRight className="h-3 w-3 text-emerald-950 mr-1 flex-shrink-0" weight="bold" />
                  <span className="line-clamp-2">Advanced analytics</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-gray-200 p-3">
              <p className="text-base sm:text-lg font-medium tracking-tighter">Enterprise</p>
              <p className="text-xs font-light text-gray-500 mb-1">Custom</p>
              <ul className="text-xs space-y-1">
                <li className="flex items-center">
                  <CaretRight className="h-3 w-3 text-emerald-950 mr-1 flex-shrink-0" weight="bold" />
                  <span className="line-clamp-2">Full API</span>
                </li>
                <li className="flex items-center">
                  <CaretRight className="h-3 w-3 text-emerald-950 mr-1 flex-shrink-0" weight="bold" />
                  <span className="line-clamp-2">Dedicated support</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium">Additional revenue streams:</p>
            <p className="text-sm font-light text-gray-700">• 3-5% commission on bookings made through the platform</p>
            <p className="text-sm font-light text-gray-700">
              • 0.8% revenue from currency exchange on international payments
            </p>
            <p className="text-sm font-light text-gray-700">
              • Premium services: virtual concierge, travel insurance, crisis management
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium tracking-tighter mb-2">Key financial metrics (2024)</h3>
            <div className="grid grid-cols-2 gap-2 xs:gap-3">
              <div>
                <p className="text-xl xs:text-2xl font-medium tracking-tighter text-emerald-950">$6,200</p>
                <p className="text-xs font-medium text-gray-500">Projected LTV per customer</p>
              </div>
              <div>
                <p className="text-xl xs:text-2xl font-medium tracking-tighter text-emerald-950">$1,800</p>
                <p className="text-xs font-medium text-gray-500">Average CAC</p>
              </div>
              <div>
                <p className="text-xl xs:text-2xl font-medium tracking-tighter text-emerald-950">3.4x</p>
                <p className="text-xs font-medium text-gray-500">LTV:CAC Ratio</p>
              </div>
              <div>
                <p className="text-xl xs:text-2xl font-medium tracking-tighter text-emerald-950">9.5 months</p>
                <p className="text-xs font-medium text-gray-500">CAC Payback Period</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 p-3 rounded-xl">
            <h3 className="text-base font-medium tracking-tighter mb-2">Projections 2024-2026</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-xs font-medium">ARR 2024 (Q4)</p>
                <p className="text-xs font-medium">$1.2M</p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "20%" }}></div>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xs font-medium">ARR 2025 (Q4)</p>
                <p className="text-xs font-medium">$4.8M</p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "40%" }}></div>
              </div>

              <div className="flex justify-between items-center">
                <p className="text-xs font-medium">ARR 2026 (Q4)</p>
                <p className="text-xs font-medium">$12.5M</p>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
