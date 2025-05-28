"use client"

import { motion } from "framer-motion"
import { CaretRight, CurrencyDollar, ChartLine, Users, ArrowUp } from "@phosphor-icons/react"

export default function BusinessCompleteSection() {
  return (
    <motion.section
      id="business-complete"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        BUSINESS MODEL & UNIT ECONOMICS
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        SaaS + Commissions + Fintech
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {/* Pricing Tiers */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-2">
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

          {/* Revenue Streams */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <CurrencyDollar className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Revenue streams per customer
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">SaaS subscription</p>
                  <p className="text-sm font-medium">$15-29 per user/month</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">Base subscription revenue with 92% gross margin</p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Booking commissions</p>
                  <p className="text-sm font-medium">3-5% per transaction</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "35%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">
                  Revenue share from travel providers with 85% gross margin
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Fintech services</p>
                  <p className="text-sm font-medium">0.8% of payment volume</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "15%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">
                  FX and payment processing fees with 70% gross margin
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Premium services</p>
                  <p className="text-sm font-medium">$5-15 per service</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "10%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">
                  Add-on services like concierge, insurance with 75% gross margin
                </p>
              </div>
            </div>
          </div>

          {/* Key Financial Metrics */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <ChartLine className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Customer lifetime value
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950">$6,200</p>
                <p className="text-xs font-medium text-gray-500">Average LTV</p>
              </div>
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950">$1,800</p>
                <p className="text-xs font-medium text-gray-500">Average CAC</p>
              </div>
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950">3.4x</p>
                <p className="text-xs font-medium text-gray-500">LTV:CAC Ratio</p>
              </div>
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950">9.5 months</p>
                <p className="text-xs font-medium text-gray-500">CAC Payback Period</p>
              </div>
            </div>
            <div className="mt-3 bg-gray-100 p-3 rounded-lg">
              <p className="text-xs font-light">
                <span className="font-medium">Note:</span> These metrics are based on our beta customers and early
                adopters. We expect LTV to increase and CAC to decrease as we benefit from network effects and brand
                recognition.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {/* Financial Projections */}
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

          {/* Customer Acquisition */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Users className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Customer acquisition channels
            </h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Direct sales</p>
                  <p className="text-sm font-medium">$2,200 CAC</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">
                  Outbound sales targeting mid-market and enterprise
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Partnerships</p>
                  <p className="text-sm font-medium">$1,500 CAC</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">
                  Co-marketing with travel providers and tech partners
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Content & SEO</p>
                  <p className="text-sm font-medium">$1,200 CAC</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "20%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">
                  Inbound from educational content and organic search
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Referrals</p>
                  <p className="text-sm font-medium">$800 CAC</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "10%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">Customer referrals and word-of-mouth</p>
              </div>
            </div>
          </div>

          {/* Growth Levers */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Growth levers</h3>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1 flex items-center">
                  Expansion revenue <ArrowUp className="h-3 w-3 text-emerald-600 ml-1" weight="fill" />
                </p>
                <p className="text-xs font-light">
                  <span className="font-medium">Net Revenue Retention: 118%</span> - Customers expand through user
                  growth, tier upgrades, and increased travel volume generating commissions
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1 flex items-center">
                  Decreasing CAC <ArrowUp className="h-3 w-3 text-emerald-600 ml-1" weight="fill" />
                </p>
                <p className="text-xs font-light">
                  <span className="font-medium">CAC efficiency improving 15% YoY</span> - As brand awareness grows and
                  referrals increase, our customer acquisition becomes more efficient
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1 flex items-center">
                  Increasing ARPU <ArrowUp className="h-3 w-3 text-emerald-600 ml-1" weight="fill" />
                </p>
                <p className="text-xs font-light">
                  <span className="font-medium">ARPU growing 22% YoY</span> - New premium features, increased platform
                  usage, and expansion into fintech services drive higher revenue per user
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
