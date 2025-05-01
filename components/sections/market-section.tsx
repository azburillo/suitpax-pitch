"use client"

import { motion } from "framer-motion"
import { Star } from "@phosphor-icons/react"

export default function MarketSection() {
  return (
    <motion.section
      id="market"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        MARKET
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Global market opportunity in 2025
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 mb-4">
            <div>
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-emerald-950">$1.9T</p>
              <p className="text-[10px] xs:text-xs font-medium text-gray-500 line-clamp-2 sm:line-clamp-none">
                Global corporate travel market (2025)
              </p>
            </div>
            <div>
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-emerald-950">17.3%</p>
              <p className="text-[10px] xs:text-xs font-medium text-gray-500 line-clamp-2 sm:line-clamp-none">
                Projected CAGR 2025-2030
              </p>
            </div>
            <div>
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-emerald-950">82%</p>
              <p className="text-[10px] xs:text-xs font-medium text-gray-500 line-clamp-2 sm:line-clamp-none">
                Companies seeking AI solutions for travel
              </p>
            </div>
            <div>
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-emerald-950">$43B</p>
              <p className="text-[10px] xs:text-xs font-medium text-gray-500 line-clamp-2 sm:line-clamp-none">
                Travel management software market
              </p>
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-xl">
            <p className="text-sm font-light">
              <span className="font-medium">Source:</span> According to GBTA, Deloitte, and McKinsey 2025 data, the
              corporate travel market has fully recovered from the pandemic and is experiencing accelerated growth,
              driven by the adoption of AI technologies and automation.
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-medium tracking-tighter">Target market segments</h3>

          <div className="flex items-start gap-2">
            <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
              <Star className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-tighter">Medium-sized companies (50-500 employees)</p>
              <p className="text-xs font-light text-gray-700">
                Segment with highest growth (23% annually) and lowest penetration of advanced solutions
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
              <Star className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-tighter">Priority sectors</p>
              <p className="text-xs font-light text-gray-700">
                Technology, professional services, manufacturing, and healthcare represent 68% of the market
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
              <Star className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
            </div>
            <div>
              <p className="text-sm font-medium tracking-tighter">Geographic expansion</p>
              <p className="text-xs font-light text-gray-700">
                Phase 1: Europe and LATAM (2025)
                <br />
                Phase 2: North America and Asia-Pacific (2025-2026)
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
