"use client"

import { motion } from "framer-motion"
import { Rocket, Target, ShieldCheck, Handshake, ChartBar, Globe, Users } from "@phosphor-icons/react"
import Image from "next/image"

export default function ExecutiveSummarySection() {
  return (
    <motion.section
      id="executive-summary"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          EXECUTIVE SUMMARY
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-4 sm:mb-6">
        Revolutionizing corporate travel with AI
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-emerald-950/10 p-1.5">
              <Globe className="h-4 w-4 text-emerald-950" weight="fill" />
            </div>
            <h3 className="text-sm font-medium">The Opportunity</h3>
          </div>
          <p className="text-xs font-light text-gray-700">
            $1.4 trillion global corporate travel market, growing at 5.8% CAGR, with only 12% using AI-powered
            solutions.
          </p>
          <div className="mt-2 h-1 w-full bg-gray-100 rounded-full">
            <div className="h-1 bg-emerald-950 rounded-full" style={{ width: "12%" }}></div>
          </div>
          <p className="text-[10px] text-gray-500 mt-1">Current AI adoption in corporate travel</p>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-emerald-950/10 p-1.5">
              <Target className="h-4 w-4 text-emerald-950" weight="fill" />
            </div>
            <h3 className="text-sm font-medium">Our Solution</h3>
          </div>
          <p className="text-xs font-light text-gray-700">
            Anthropic-powered AI platform that reduces travel costs by 27% and booking time by 85% while ensuring 100%
            policy compliance.
          </p>
          <div className="mt-2 flex gap-1">
            <div className="flex-1 text-center p-1 bg-emerald-50 rounded-lg border border-emerald-100">
              <p className="text-[10px] font-medium text-emerald-950">27%</p>
              <p className="text-[8px] text-gray-500">Cost savings</p>
            </div>
            <div className="flex-1 text-center p-1 bg-emerald-50 rounded-lg border border-emerald-100">
              <p className="text-[10px] font-medium text-emerald-950">85%</p>
              <p className="text-[8px] text-gray-500">Time saved</p>
            </div>
            <div className="flex-1 text-center p-1 bg-emerald-50 rounded-lg border border-emerald-100">
              <p className="text-[10px] font-medium text-emerald-950">100%</p>
              <p className="text-[8px] text-gray-500">Compliance</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-emerald-950/10 p-1.5">
              <ChartBar className="h-4 w-4 text-emerald-950" weight="fill" />
            </div>
            <h3 className="text-sm font-medium">The Ask</h3>
          </div>
          <p className="text-xs font-light text-gray-700">
            €1.2M seed investment for 9% equity at €13M valuation to accelerate growth and capture market leadership.
          </p>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 h-1 bg-gray-200 rounded-full">
              <div className="h-1 bg-emerald-950 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <p className="text-[10px] font-medium text-gray-700">45% Product</p>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex-1 h-1 bg-gray-200 rounded-full">
              <div className="h-1 bg-emerald-950 rounded-full" style={{ width: "35%" }}></div>
            </div>
            <p className="text-[10px] font-medium text-gray-700">35% Marketing</p>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex-1 h-1 bg-gray-200 rounded-full">
              <div className="h-1 bg-emerald-950 rounded-full" style={{ width: "20%" }}></div>
            </div>
            <p className="text-[10px] font-medium text-gray-700">20% Operations</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-4 gap-3">
        <div className="bg-gray-100 p-3 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <Users className="h-4 w-4 text-emerald-950" weight="fill" />
            <h3 className="text-xs font-medium">Team</h3>
          </div>
          <p className="text-[10px] font-light">
            Founded by ex-Booking.com and Amadeus executives with 45+ years combined experience in travel tech
          </p>
        </div>

        <div className="bg-gray-100 p-3 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <Rocket className="h-4 w-4 text-emerald-950" weight="fill" />
            <h3 className="text-xs font-medium">Traction</h3>
          </div>
          <p className="text-[10px] font-light">
            18 active enterprise clients with 92% retention rate and 27% average cost savings
          </p>
        </div>

        <div className="bg-gray-100 p-3 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="h-4 w-4 text-emerald-950" weight="fill" />
            <h3 className="text-xs font-medium">IP & Defensibility</h3>
          </div>
          <p className="text-[10px] font-light">
            3 pending patents on AI travel optimization algorithms and proprietary data processing
          </p>
        </div>

        <div className="bg-gray-100 p-3 rounded-xl">
          <div className="flex items-center gap-2 mb-1">
            <Handshake className="h-4 w-4 text-emerald-950" weight="fill" />
            <h3 className="text-xs font-medium">Exit Strategy</h3>
          </div>
          <p className="text-[10px] font-light">
            IPO target by 2031 with €3.2B valuation or strategic acquisition by major travel tech player
          </p>
        </div>
      </div>
    </motion.section>
  )
}
