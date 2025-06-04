"use client"

import { motion } from "framer-motion"
import { Warning, CheckCircle, Clock, CreditCard, Files, User, X, Rocket, Star } from "@phosphor-icons/react"

export default function OpportunitySection() {
  return (
    <motion.section
      id="opportunity"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80 mb-3 sm:mb-4">
        MARKET OPPORTUNITY
      </div>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tighter mb-6 sm:mb-8 text-white">
        A $1.9T problem waiting for an AI solution
      </h2>

      {/* Market Overview */}
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Star className="h-5 w-5 text-white" weight="fill" />
            <h3 className="text-lg sm:text-xl font-medium tracking-tighter text-white">Global market size (2025)</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
            <div className="bg-black/50 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tighter text-white">$1.9T</p>
              <p className="text-xs sm:text-sm font-medium text-white/70">Global corporate travel market</p>
            </div>
            <div className="bg-black/50 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tighter text-white">17.3%</p>
              <p className="text-xs sm:text-sm font-medium text-white/70">Projected CAGR 2025-2030</p>
            </div>
            <div className="bg-black/50 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tighter text-white">82%</p>
              <p className="text-xs sm:text-sm font-medium text-white/70">Companies seeking AI solutions</p>
            </div>
            <div className="bg-black/50 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/10">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tighter text-white">$43B</p>
              <p className="text-xs sm:text-sm font-medium text-white/70">Travel management software</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-base sm:text-lg font-medium tracking-tighter text-white">Target segments</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-white/10 p-1 flex-shrink-0">
                  <Star className="h-3.5 w-3.5 text-white" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium tracking-tighter text-white">Medium companies (50-500 employees)</p>
                  <p className="text-xs font-light text-white/70">23% annual growth, lowest penetration</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-white/10 p-1 flex-shrink-0">
                  <Star className="h-3.5 w-3.5 text-white" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium tracking-tighter text-white">Priority sectors</p>
                  <p className="text-xs font-light text-white/70">
                    Tech, services, manufacturing, healthcare (68% of market)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Warning className="h-5 w-5 text-red-400" weight="fill" />
            <h3 className="text-lg sm:text-xl font-medium tracking-tighter text-white">The problem</h3>
          </div>

          <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm mb-4">
            <p className="text-sm font-medium mb-3 text-white">Industry pain points (2025)</p>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xl sm:text-2xl font-medium tracking-tighter text-red-400">78%</p>
                <p className="text-xs font-light text-white/70">Report significant inefficiencies</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-medium tracking-tighter text-red-400">15-20%</p>
                <p className="text-xs font-light text-white/70">Average cost overruns</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-medium tracking-tighter text-red-400">5.4 hrs</p>
                <p className="text-xs font-light text-white/70">Weekly admin time per manager</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-medium tracking-tighter text-red-400">67%</p>
                <p className="text-xs font-light text-white/70">Frustrated travelers</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-red-400/20 p-1 flex-shrink-0">
                <X className="h-3.5 w-3.5 text-red-400" weight="bold" />
              </div>
              <p className="text-sm font-light text-white/70">
                <span className="font-medium text-white">Fragmentation:</span> 4-7 different tools per company
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-red-400/20 p-1 flex-shrink-0">
                <X className="h-3.5 w-3.5 text-red-400" weight="bold" />
              </div>
              <p className="text-sm font-light text-white/70">
                <span className="font-medium text-white">No visibility:</span> 82% lack real-time expense tracking
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-red-400/20 p-1 flex-shrink-0">
                <X className="h-3.5 w-3.5 text-red-400" weight="bold" />
              </div>
              <p className="text-sm font-light text-white/70">
                <span className="font-medium text-white">Manual processes:</span> 73% of tasks remain manual
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-red-400/20 p-1 flex-shrink-0">
                <X className="h-3.5 w-3.5 text-red-400" weight="bold" />
              </div>
              <p className="text-sm font-light text-white/70">
                <span className="font-medium text-white">Compliance complexity:</span> Growing regulatory burden
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Before vs After Comparison */}
      <div className="bg-white/5 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10">
        <h3 className="text-lg sm:text-xl font-medium tracking-tighter mb-4 sm:mb-6 text-center text-white">
          The transformation: Before vs. After Suitpax
        </h3>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm sm:text-base font-medium tracking-tighter text-red-400">Current Reality</p>
              <p className="text-xs font-light text-red-400/80 bg-red-400/10 px-2 py-0.5 rounded-full">
                6+ hours daily
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Clock className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">8:30 AM</p>
                  <p className="text-xs font-light text-white/70">Review 15 travel requests manually</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <User className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">11:30 AM</p>
                  <p className="text-xs font-light text-white/70">Compare options across 4 platforms</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <CreditCard className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">2:15 PM</p>
                  <p className="text-xs font-light text-white/70">Process payments in multiple systems</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Warning className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">5:45 PM</p>
                  <p className="text-xs font-light text-white/70">Prepare manual reports from multiple sources</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm sm:text-base font-medium tracking-tighter text-white">With Suitpax AI</p>
              <p className="text-xs font-light text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                Just 1 hour
              </p>
            </div>

            <div className="mb-3 bg-black/40 p-3 rounded-lg border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Rocket className="h-4 w-4 text-emerald-400" weight="fill" />
                <p className="text-xs font-medium text-emerald-400">AI handles everything automatically</p>
              </div>
              <p className="text-xs font-light text-white/70 pl-6">
                95% of tasks automated with intelligent recommendations
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">9:00 AM</p>
                  <p className="text-xs font-light text-white/70">All 15 requests processed by AI overnight</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">9:15 AM</p>
                  <p className="text-xs font-light text-white/70">One-click approval of AI recommendations</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Files className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">9:30 AM</p>
                  <p className="text-xs font-light text-white/70">Automatic reports showing $12.5K savings</p>
                </div>
              </div>
              <div className="flex items-start gap-2 bg-emerald-400/5 p-2 rounded-lg">
                <div className="mt-0.5 flex-shrink-0">
                  <Rocket className="h-4 w-4 text-emerald-400" weight="fill" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">10:00 AM</p>
                  <p className="text-xs font-light text-white/70">Focus on strategy while AI handles operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-4 bg-black/40 p-3 rounded-xl">
            <div className="text-center">
              <p className="text-lg sm:text-xl font-medium text-white">27%</p>
              <p className="text-xs text-white/70">Cost reduction</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-medium text-white">85%</p>
              <p className="text-xs text-white/70">Time saved</p>
            </div>
            <div className="text-center">
              <p className="text-lg sm:text-xl font-medium text-white">100%</p>
              <p className="text-xs text-white/70">Compliance</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
        <p className="text-sm font-light text-white/70 text-center">
          <span className="font-medium text-white">Sources:</span> Deloitte, GBTA, and McKinsey 2025 corporate travel
          studies
        </p>
      </div>
    </motion.section>
  )
}
