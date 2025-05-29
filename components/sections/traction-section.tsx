"use client"

import { motion } from "framer-motion"
import { ArrowUp, Users, Buildings, Globe } from "@phosphor-icons/react"
import Image from "next/image"

export default function TractionSection() {
  return (
    <motion.section
      id="traction"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-center justify-center mb-4">
        <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={40} height={40} className="rounded-xl" />
      </div>

      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        TRACTION
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Exponential growth trajectory
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Current metrics (Q1 2025)</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950 flex items-center">
                  18 <ArrowUp className="h-4 w-4 text-emerald-600 ml-1" weight="fill" />
                </p>
                <p className="text-xs font-medium text-gray-500">Beta customers</p>
              </div>
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950 flex items-center">
                  92% <ArrowUp className="h-4 w-4 text-emerald-600 ml-1" weight="fill" />
                </p>
                <p className="text-xs font-medium text-gray-500">Retention rate</p>
              </div>
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950 flex items-center">
                  27% <ArrowUp className="h-4 w-4 text-emerald-600 ml-1" weight="fill" />
                </p>
                <p className="text-xs font-medium text-gray-500">Average cost savings</p>
              </div>
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950 flex items-center">
                  85% <ArrowUp className="h-4 w-4 text-emerald-600 ml-1" weight="fill" />
                </p>
                <p className="text-xs font-medium text-gray-500">Time efficiency gain</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Customer profile</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-950/10 flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Company size</p>
                  <p className="text-xs font-light text-gray-700">50-500 employees (72%), 500+ employees (28%)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-950/10 flex items-center justify-center flex-shrink-0">
                  <Buildings className="h-4 w-4 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Industry sectors</p>
                  <p className="text-xs font-light text-gray-700">
                    Technology (35%), Professional Services (28%), Manufacturing (22%), Healthcare (15%)
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-950/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-4 w-4 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Geographic distribution</p>
                  <p className="text-xs font-light text-gray-700">
                    Europe (65%), North America (25%), Asia-Pacific (10%)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Growth projections to 2031</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Q4 2025</p>
                  <p className="text-sm font-medium">100+ customers</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Q2 2027</p>
                  <p className="text-sm font-medium">500+ customers</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Q4 2028</p>
                  <p className="text-sm font-medium">1,000+ customers</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Q2 2030</p>
                  <p className="text-sm font-medium">2,500+ customers</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Q4 2031</p>
                  <p className="text-sm font-medium">5,000+ customers</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Key growth metrics</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Annual Recurring Revenue</p>
                  <p className="text-sm font-medium">$250M by 2031</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Global Market Share</p>
                  <p className="text-sm font-medium">15% by 2031</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Team Growth</p>
                  <p className="text-sm font-medium">500+ employees by 2031</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Geographic Expansion</p>
                  <p className="text-sm font-medium">25+ countries by 2031</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
