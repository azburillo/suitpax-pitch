"use client"

import { motion } from "framer-motion"
import { Rocket, Target, ShieldCheck, Globe2, ChartBar, Globe, Users } from "@phosphor-icons/react"
import Image from "next/image"

export default function ExecutiveSummarySection() {
  return (
    <motion.section
      id="executive-summary"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80">
          EXECUTIVE SUMMARY
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-4 sm:mb-6 text-white">
        Revolutionizing corporate travel with AI
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-white/10 p-1.5">
              <Globe className="h-4 w-4 text-white" weight="fill" />
            </div>
            <h3 className="text-sm font-medium text-white">The Opportunity</h3>
          </div>
          <p className="text-xs font-light text-white/70">
            $1.4 trillion global corporate travel market, growing at 5.8% CAGR, with only 12% using AI-powered
            solutions.
          </p>
          <div className="mt-2 h-1 w-full bg-white/10 rounded-full">
            <div className="h-1 bg-white/80 rounded-full" style={{ width: "12%" }}></div>
          </div>
          <p className="text-[10px] text-white/50 mt-1">Current AI adoption in corporate travel</p>
        </div>

        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-white/10 p-1.5">
              <Target className="h-4 w-4 text-white" weight="fill" />
            </div>
            <h3 className="text-sm font-medium text-white">Our Solution</h3>
          </div>
          <p className="text-xs font-light text-white/70">
            Suitpax AI platform that reduces travel costs by 27% and booking time by 85% while ensuring 100% policy
            compliance.
          </p>
          <div className="mt-2 flex gap-1">
            <div className="flex-1 text-center p-1 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-medium text-white">27%</p>
              <p className="text-[8px] text-white/50">Cost savings</p>
            </div>
            <div className="flex-1 text-center p-1 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-medium text-white">85%</p>
              <p className="text-[8px] text-white/50">Time saved</p>
            </div>
            <div className="flex-1 text-center p-1 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-medium text-white">100%</p>
              <p className="text-[8px] text-white/50">Compliance</p>
            </div>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-white/10 p-1.5">
              <ChartBar className="h-4 w-4 text-white" weight="fill" />
            </div>
            <h3 className="text-sm font-medium text-white">The Ask</h3>
          </div>
          <p className="text-xs font-light text-white/70">
            €1.2M seed investment for 9% equity at €13M valuation to accelerate growth and capture market leadership.
          </p>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 h-1 bg-white/10 rounded-full">
              <div className="h-1 bg-white/80 rounded-full" style={{ width: "45%" }}></div>
            </div>
            <p className="text-[10px] font-medium text-white/70">45% Product</p>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex-1 h-1 bg-white/10 rounded-full">
              <div className="h-1 bg-white/80 rounded-full" style={{ width: "35%" }}></div>
            </div>
            <p className="text-[10px] font-medium text-white/70">35% Marketing</p>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex-1 h-1 bg-white/10 rounded-full">
              <div className="h-1 bg-white/80 rounded-full" style={{ width: "20%" }}></div>
            </div>
            <p className="text-[10px] font-medium text-white/70">20% Operations</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-4 gap-3">
        <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <Users className="h-4 w-4 text-white" weight="fill" />
            <h3 className="text-xs font-medium text-white">Team</h3>
          </div>
          <p className="text-[10px] font-light text-white/70">
            Founded by Alberto Zurano (ex-Aena) and Alexis Sanz (ex-Factorial) with 5+ years entrepreneurial experience
            in travel tech
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <Rocket className="h-4 w-4 text-white" weight="fill" />
            <h3 className="text-xs font-medium text-white">Traction</h3>
          </div>
          <p className="text-[10px] font-light text-white/70">
            18 active enterprise clients with 92% retention rate and 27% average cost savings
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="h-4 w-4 text-white" weight="fill" />
            <h3 className="text-xs font-medium text-white">IP & Defensibility</h3>
          </div>
          <p className="text-[10px] font-light text-white/70">
            3 pending patents on AI travel optimization algorithms and proprietary data processing
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <Globe2 className="h-4 w-4 text-white" weight="fill" />
            <h3 className="text-xs font-medium text-white">Global Expansion</h3>
          </div>
          <p className="text-[10px] font-light text-white/70">
            Phased rollout across all continents by 2026, starting with Europe, North America, and Asia-Pacific markets
          </p>
        </div>
      </div>
    </motion.section>
  )
}
