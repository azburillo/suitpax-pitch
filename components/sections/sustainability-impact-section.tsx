"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Leaf, Airplane, Recycle, Globe } from "@phosphor-icons/react"

export default function SustainabilityImpactSection() {
  return (
    <motion.section
      id="sustainability-impact"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80">
          SUSTAINABILITY IMPACT
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-4 sm:mb-6 text-white">
        Reducing carbon footprint through smarter travel
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-white/10 p-1.5">
              <Leaf className="h-4 w-4 text-white" weight="fill" />
            </div>
            <h3 className="text-sm font-medium text-white">CO2 Reduction</h3>
          </div>
          <p className="text-xs font-light text-white/70">
            Our AI algorithms prioritize lower-emission routes and transportation options, reducing the average business
            trip carbon footprint by 32%.
          </p>
          <div className="mt-2 flex gap-1">
            <div className="flex-1 text-center p-1 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-medium text-white">32%</p>
              <p className="text-[8px] text-white/50">CO2 reduction</p>
            </div>
            <div className="flex-1 text-center p-1 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-medium text-white">1.2M kg</p>
              <p className="text-[8px] text-white/50">CO2 saved in 2023</p>
            </div>
            <div className="flex-1 text-center p-1 bg-white/5 rounded-lg border border-white/10">
              <p className="text-[10px] font-medium text-white">85%</p>
              <p className="text-[8px] text-white/50">Client adoption</p>
            </div>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-white/10 p-1.5">
              <Airplane className="h-4 w-4 text-white" weight="fill" />
            </div>
            <h3 className="text-sm font-medium text-white">Flight Optimization</h3>
          </div>
          <p className="text-xs font-light text-white/70">
            Our platform identifies and recommends flights with newer, more fuel-efficient aircraft and optimized
            routes.
          </p>

          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-[10px] text-white/70 bg-white/5 p-1.5 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span>MAD → NYC (Standard)</span>
              </div>
              <span>1,842 kg CO2</span>
            </div>

            <div className="flex items-center justify-between text-[10px] text-white/70 bg-white/5 p-1.5 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>MAD → NYC (Suitpax)</span>
              </div>
              <span>1,247 kg CO2 (-32%)</span>
            </div>

            <div className="flex items-center justify-between text-[10px] text-white/70 bg-white/5 p-1.5 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <span>BCN → SFO (Standard)</span>
              </div>
              <span>2,314 kg CO2</span>
            </div>

            <div className="flex items-center justify-between text-[10px] text-white/70 bg-white/5 p-1.5 rounded-lg">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span>BCN → SFO (Suitpax)</span>
              </div>
              <span>1,573 kg CO2 (-32%)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid md:grid-cols-2 gap-3">
        <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <Recycle className="h-4 w-4 text-white" weight="fill" />
            <h3 className="text-xs font-medium text-white">Sustainable Options</h3>
          </div>
          <p className="text-[10px] font-light text-white/70">
            Suitpax highlights eco-friendly hotels, rental cars, and ground transportation options, with 73% of bookings
            including at least one sustainable choice.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <Globe className="h-4 w-4 text-white" weight="fill" />
            <h3 className="text-xs font-medium text-white">Carbon Offsetting</h3>
          </div>
          <p className="text-[10px] font-light text-white/70">
            Integrated carbon offset programs allow companies to neutralize remaining emissions, with 42% of clients
            opting for complete carbon neutrality in their travel programs.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
