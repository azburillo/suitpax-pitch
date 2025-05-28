"use client"

import { motion } from "framer-motion"
import { CaretRight, ArrowRight, Trophy, Star, ChartLineUp } from "@phosphor-icons/react"
import Image from "next/image"

export default function InvestmentSection() {
  return (
    <motion.section
      id="investment"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          INVESTMENT OPPORTUNITY
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
            Promising initial results
          </h2>
          <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 mb-4">
            <div>
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-gray-900">18</p>
              <p className="text-xs font-medium text-gray-500">Active clients</p>
            </div>
            <div>
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-gray-900">
                In development
              </p>
              <p className="text-xs font-medium text-gray-500">Projected ARR (Q2 2025)</p>
            </div>
            <div>
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-gray-900">92%</p>
              <p className="text-xs font-medium text-gray-500">12-month retention</p>
            </div>
            <div>
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-gray-900">27%</p>
              <p className="text-xs font-medium text-gray-500">Average savings for clients</p>
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-xl mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-medium tracking-tighter">Client Growth Projection</h3>
              <p className="text-xs font-medium text-gray-900">5,000+ by 2031</p>
            </div>
            <div className="h-24 flex items-end gap-1">
              {[18, 120, 450, 1200, 2500, 3800, 5000].map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-1 bg-gray-900 rounded-t"
                    style={{
                      height: `${(value / 5000) * 100}%`,
                    }}
                  ></div>
                  <p className="text-[8px] mt-1 text-gray-600 rotate-45 origin-left">{2025 + index}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-xl">
            <h3 className="text-base font-medium tracking-tighter mb-2">Key Growth Metrics</h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium">Customer Acquisition</p>
                  <p className="text-xs font-medium">+125% YoY</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium">Revenue Growth</p>
                  <p className="text-xs font-medium">+210% YoY</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium">Market Penetration</p>
                  <p className="text-xs font-medium">+65% YoY</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Featured valuation and round section - Updated for 500K round */}
          <div className="bg-gradient-to-r from-gray-900 to-black p-5 rounded-xl mb-6 text-white shadow-lg border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-gray-400" weight="fill" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter">Valuation</h2>
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-gray-300">€8.3M</p>
            </div>
            <p className="text-sm text-gray-400 mb-6">Pre-money · Seed Round</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-gray-400" weight="fill" />
                <h3 className="text-xl sm:text-2xl font-medium tracking-tighter">Accepting</h3>
              </div>
              <p className="text-2xl sm:text-3xl font-semibold tracking-tighter text-gray-300">€500K</p>
            </div>
            <p className="text-sm text-gray-400">For 6% equity</p>
          </div>

          <p className="text-sm sm:text-base font-light text-gray-700 mb-4">
            Opportunity to participate in our seed round and consolidate our position in the AI-powered corporate travel
            management market.
          </p>

          <div className="bg-gray-100 p-3 rounded-xl mb-4">
            <h3 className="text-base font-medium tracking-tighter mb-2">Use of funds</h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">Product development</p>
                  <p className="text-xs font-medium">45%</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">Sales and marketing</p>
                  <p className="text-xs font-medium">35%</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">Operations and expansion</p>
                  <p className="text-xs font-medium">20%</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ChartLineUp className="h-5 w-5 text-gray-900" weight="fill" />
              <h3 className="text-base font-medium tracking-tighter">Valuation Projection to 2031</h3>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2025:</span> €8.3M valuation (€500K for 6% equity)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2026:</span> €35M valuation (€3.5M round for 10% equity)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2027:</span> €150M valuation (€15M round for 10% equity)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2028:</span> €350M valuation (Series C)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2029-2030:</span> €650M valuation (Pre-IPO round)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2031:</span> €1.2B market cap (IPO)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-900 mt-4">
            <p className="text-sm font-medium">Contact us for more information</p>
            <ArrowRight className="h-4 w-4" weight="bold" />
          </div>
          <p className="text-xs font-light text-gray-500 mt-1">investors@suitpax.com | +1 (555) 123-4567</p>
        </div>
      </div>
    </motion.section>
  )
}
