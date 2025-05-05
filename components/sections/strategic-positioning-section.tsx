"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Rocket, Globe, Brain } from "lucide-react"

export default function StrategicPositioningSection() {
  return (
    <motion.section
      id="strategic-positioning"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80">
          STRATEGIC POSITIONING
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-4 text-white">
        At the intersection of three powerful industries
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Globe className="h-5 w-5 text-white/80" />
            </div>
            <h3 className="text-lg font-medium text-white">Travel & Tourism</h3>
          </div>
          <p className="text-sm font-light text-white/70 mb-3">
            A $9.5 trillion global industry, representing over 9% of global GDP, yet still fragmented and
            under-digitized.
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Market Size</span>
              <span className="text-xs font-medium text-white">$9.5T</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Global GDP Share</span>
              <span className="text-xs font-medium text-white">9%+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Digital Adoption</span>
              <span className="text-xs font-medium text-white">Low</span>
            </div>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Rocket className="h-5 w-5 text-white/80" />
            </div>
            <h3 className="text-lg font-medium text-white">Technology</h3>
          </div>
          <p className="text-sm font-light text-white/70 mb-3">
            The world's #1 sector by market value, driving innovation and scale across all industries globally.
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Global Ranking</span>
              <span className="text-xs font-medium text-white">#1</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Innovation Driver</span>
              <span className="text-xs font-medium text-white">Primary</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Scalability</span>
              <span className="text-xs font-medium text-white">Unlimited</span>
            </div>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Brain className="h-5 w-5 text-white/80" />
            </div>
            <h3 className="text-lg font-medium text-white">Artificial Intelligence</h3>
          </div>
          <p className="text-sm font-light text-white/70 mb-3">
            The fastest-growing industry (+37% CAGR), projected to exceed $1 trillion by 2030.
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Growth Rate</span>
              <span className="text-xs font-medium text-white">37% CAGR</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">2030 Projection</span>
              <span className="text-xs font-medium text-white">$1T+</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-white/60">Disruption Potential</span>
              <span className="text-xs font-medium text-white">Extreme</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
        <h3 className="text-base font-medium mb-3 text-white">Suitpax's Unique Position</h3>
        <p className="text-sm font-light text-white/80 mb-4">
          By combining smart travel software with AI-driven experiences, Suitpax is uniquely positioned to modernize a
          massive legacy industry with cutting-edge technology—delivering scalable value, automation, and
          personalization at global scale.
        </p>
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-black/30 p-3 rounded-lg border border-white/5">
            <p className="text-xs font-medium text-white mb-1">Market Opportunity</p>
            <p className="text-sm font-bold text-white">$1.4T</p>
            <p className="text-[10px] text-white/60">Business Travel Market</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg border border-white/5">
            <p className="text-xs font-medium text-white mb-1">AI Advantage</p>
            <p className="text-sm font-bold text-white">95%</p>
            <p className="text-[10px] text-white/60">Task Automation</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg border border-white/5">
            <p className="text-xs font-medium text-white mb-1">Tech Scalability</p>
            <p className="text-sm font-bold text-white">10,000+</p>
            <p className="text-[10px] text-white/60">Global Destinations</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
