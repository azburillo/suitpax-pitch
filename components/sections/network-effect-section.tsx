"use client"

import { motion } from "framer-motion"
import { Graph, ArrowsClockwise, Users, Buildings } from "@phosphor-icons/react"

export default function NetworkEffectSection() {
  return (
    <motion.section
      id="network-effect"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.45 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        NETWORK EFFECT
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Powerful flywheel driving exponential growth
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Graph className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Multi-sided network effects
            </h3>
            <p className="text-sm font-light text-gray-700 mb-4">
              Suitpax creates powerful network effects across multiple dimensions, creating a self-reinforcing flywheel
              that accelerates growth and builds defensibility over time.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Users className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">User-to-user network effects</p>
                  <p className="text-xs font-light text-gray-700">
                    As more travelers use the platform, our AI models learn from their behaviors and preferences,
                    improving recommendations and optimizations for all users
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Buildings className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Supply-side network effects</p>
                  <p className="text-xs font-light text-gray-700">
                    As more travel providers integrate with our platform, we offer better rates, more options, and
                    exclusive deals, attracting more corporate customers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <ArrowsClockwise className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Data network effects</p>
                  <p className="text-xs font-light text-gray-700">
                    Each transaction generates valuable data that improves our AI models, creating a virtuous cycle of
                    better predictions, optimizations, and user experiences
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Growth flywheel</h3>
            <div className="relative p-4">
              <div className="w-48 h-48 mx-auto rounded-full border-2 border-emerald-950 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full border-2 border-emerald-950 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-emerald-950 flex items-center justify-center text-white">
                    <p className="text-xs font-medium text-center">Suitpax Platform</p>
                  </div>
                </div>
              </div>

              {/* Outer circle elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded-lg border border-gray-200 text-center">
                <p className="text-xs font-medium">More Users</p>
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white px-2 py-1 rounded-lg border border-gray-200 text-center">
                <p className="text-xs font-medium">Better AI Models</p>
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded-lg border border-gray-200 text-center">
                <p className="text-xs font-medium">More Data</p>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded-lg border border-gray-200 text-center">
                <p className="text-xs font-medium">Better Experience</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Network effect metrics</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">AI recommendation accuracy</p>
                  <p className="text-sm font-medium">+2.7% per month</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">
                  Improvement in AI prediction accuracy as user base grows
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Cost optimization</p>
                  <p className="text-sm font-medium">+1.8% per month</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "55%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">
                  Increased savings on travel costs as platform intelligence grows
                </p>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Provider integrations</p>
                  <p className="text-sm font-medium">+12 per quarter</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
                <p className="text-xs font-light text-gray-500 mt-1">
                  Growth in travel provider partnerships and integrations
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Compounding advantages</h3>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Data moat</p>
                <p className="text-xs font-light">
                  Each corporate travel booking generates proprietary data on preferences, patterns, and outcomes that
                  continuously improves our AI models in ways competitors cannot replicate without similar scale.
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Cross-company intelligence</p>
                <p className="text-xs font-light">
                  Our platform learns from anonymized data across all customers, allowing smaller companies to benefit
                  from collective intelligence typically only available to enterprises.
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Ecosystem lock-in</p>
                <p className="text-xs font-light">
                  As companies integrate Suitpax with their existing systems (ERP, HR, accounting), the switching costs
                  increase dramatically, creating strong retention and expansion opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
