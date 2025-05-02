"use client"

import { motion } from "framer-motion"
import { CaretRight, Calendar } from "@phosphor-icons/react"

export default function RoadmapSection() {
  return (
    <motion.section
      id="roadmap"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        ROADMAP
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Path to launch and beyond
      </h2>

      <div className="space-y-6">
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-[40px] bottom-0 w-[2px] bg-gray-200"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-950 text-white">
              <Calendar weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Q2 2025: MVP Completion</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                  </div>
                  <p className="text-sm font-light">
                    Complete development of the platform core with basic functionalities
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                  </div>
                  <p className="text-sm font-light">Expand beta program to 20 companies with structured feedback</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                  </div>
                  <p className="text-sm font-light">
                    Secure key integrations with travel providers and financial systems
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-950 text-white">
              <Calendar weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Q3 2025: Advanced Testing Phase</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                  </div>
                  <p className="text-sm font-light">Implementation of advanced AI agents and algorithm optimization</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                  </div>
                  <p className="text-sm font-light">Stress and security testing with external audits</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                  </div>
                  <p className="text-sm font-light">Finalize pricing strategy and prepare marketing materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-300 text-gray-700">
              <Calendar weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Q4 2025: Official Launch</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-gray-700" weight="bold" />
                  </div>
                  <p className="text-sm font-light">Public platform launch (late Q2)</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-gray-700" weight="bold" />
                  </div>
                  <p className="text-sm font-light">
                    Digital marketing campaign and launch events in 3 European cities
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-gray-700" weight="bold" />
                  </div>
                  <p className="text-sm font-light">Convert beta testers to paying customers with special offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 w-[2px] bg-gray-200"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-300 text-gray-700">
              <Calendar weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Q1-Q2 2026: Growth and Expansion</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-gray-700" weight="bold" />
                  </div>
                  <p className="text-sm font-light">Reach 50+ active customers and $1.2M ARR by Q4</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-gray-700" weight="bold" />
                  </div>
                  <p className="text-sm font-light">Expansion to 5 European countries with local adaptations</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <CaretRight className="h-3.5 w-3.5 text-gray-700" weight="bold" />
                  </div>
                  <p className="text-sm font-light">Development of fintech module for expense and payment management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
