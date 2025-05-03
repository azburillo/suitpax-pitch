"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ShieldCheck, Lightning, Binoculars, ArrowsCounterClockwise } from "@phosphor-icons/react"

export default function CompetitiveResponseStrategy() {
  return (
    <motion.section
      id="competitive-response"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80">
          COMPETITIVE RESPONSE STRATEGY
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-4 sm:mb-6 text-white">
        How Suitpax will respond to competitive threats
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-white/10 p-1.5">
              <ShieldCheck className="h-4 w-4 text-white" weight="fill" />
            </div>
            <h3 className="text-sm font-medium text-white">Defensive Moats</h3>
          </div>
          <p className="text-xs font-light text-white/70">
            Our proprietary AI models are trained on 5+ years of corporate travel data, creating a significant barrier
            to entry for competitors.
          </p>
          <div className="mt-2 flex gap-1">
            <div className="flex-1 text-center p-1 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-medium text-white">3</p>
              <p className="text-[8px] text-white/50">Pending patents</p>
            </div>
            <div className="flex-1 text-center p-1 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-medium text-white">18M+</p>
              <p className="text-[8px] text-white/50">Data points</p>
            </div>
            <div className="flex-1 text-center p-1 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-medium text-white">92%</p>
              <p className="text-[8px] text-white/50">Retention rate</p>
            </div>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-white/10 p-1.5">
              <Lightning className="h-4 w-4 text-white" weight="fill" />
            </div>
            <h3 className="text-sm font-medium text-white">Quick Adaptation</h3>
          </div>
          <p className="text-xs font-light text-white/70">
            Our agile development cycle allows us to deploy new features in 2 weeks vs. industry average of 3 months,
            ensuring we stay ahead.
          </p>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 h-1 bg-white/10 rounded-full">
              <div className="h-1 bg-white/80 rounded-full" style={{ width: "14%" }}></div>
            </div>
            <p className="text-[10px] font-medium text-white/70">2 weeks</p>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <div className="flex-1 h-1 bg-white/10 rounded-full">
              <div className="h-1 bg-white/80 rounded-full" style={{ width: "85%" }}></div>
            </div>
            <p className="text-[10px] font-medium text-white/70">3 months (industry)</p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-3">
        <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <Binoculars className="h-4 w-4 text-white" weight="fill" />
            <h3 className="text-xs font-medium text-white">Market Intelligence</h3>
          </div>
          <p className="text-[10px] font-light text-white/70">
            Our AI continuously monitors competitor offerings and market trends, providing real-time insights that
            inform our product roadmap and pricing strategy.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <ArrowsCounterClockwise className="h-4 w-4 text-white" weight="fill" />
            <h3 className="text-xs font-medium text-white">Strategic Pivots</h3>
          </div>
          <p className="text-[10px] font-light text-white/70">
            Modular architecture allows us to quickly pivot to new market opportunities or respond to competitive
            threats without major redevelopment.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
