"use client"

import { motion } from "framer-motion"
import { Warning, CheckCircle, Clock, CreditCard, FileSearch, User, X, Rocket } from "@phosphor-icons/react"

export default function ProblemSolutionSection() {
  return (
    <motion.section
      id="problem-solution"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80 mb-3 sm:mb-4">
        PROBLEM & SOLUTION
      </div>
      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-3 sm:mb-4 text-white">
        Transforming corporate travel management
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Warning className="h-5 w-5 text-red-400" weight="fill" />
            <h3 className="text-lg font-medium tracking-tighter text-white">The problem</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-sm">
              <p className="text-sm font-medium mb-2 text-white">Industry statistics (2025)</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xl font-medium tracking-tighter text-red-400">78%</p>
                  <p className="text-xs font-light text-white/70">
                    of companies report significant inefficiencies in their travel processes
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-red-400">15-20%</p>
                  <p className="text-xs font-light text-white/70">
                    average cost overruns due to fragmented bookings and lack of visibility
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-red-400">5.4 hrs</p>
                  <p className="text-xs font-light text-white/70">
                    average weekly time each manager dedicates to travel administrative tasks
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-red-400">67%</p>
                  <p className="text-xs font-light text-white/70">
                    of corporate travelers report fragmented and frustrating experiences
                  </p>
                </div>
              </div>
              <p className="text-xs font-light text-white/40 mt-3">Source: Deloitte, GBTA, and McKinsey 2025 studies</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-red-400/20 p-1">
                  <X className="h-3.5 w-3.5 text-red-400" weight="bold" />
                </div>
                <p className="text-sm font-light text-white/70">
                  <span className="font-medium text-white">Fragmentation:</span> Companies use 4-7 different tools to
                  manage the entire travel cycle
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-red-400/20 p-1">
                  <X className="h-3.5 w-3.5 text-red-400" weight="bold" />
                </div>
                <p className="text-sm font-light text-white/70">
                  <span className="font-medium text-white">Lack of visibility:</span> 82% of companies don't have
                  real-time visibility into their travel expenses
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-red-400/20 p-1">
                  <X className="h-3.5 w-3.5 text-red-400" weight="bold" />
                </div>
                <p className="text-sm font-light text-white/70">
                  <span className="font-medium text-white">Manual processes:</span> 73% of travel management tasks
                  remain manual and error-prone
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-red-400/20 p-1">
                  <X className="h-3.5 w-3.5 text-red-400" weight="bold" />
                </div>
                <p className="text-sm font-light text-white/70">
                  <span className="font-medium text-white">Regulatory complexity:</span> Compliance with corporate
                  policies and tax regulations is increasingly complex
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="h-5 w-5 text-white" weight="fill" />
            <h3 className="text-lg font-medium tracking-tighter text-white">Our solution</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-sm">
              <p className="text-sm font-medium mb-2 text-white">Suitpax impact</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xl font-medium tracking-tighter text-white">95%</p>
                  <p className="text-xs font-light text-white/70">
                    of travel management tasks automated with generative AI
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-white">27%</p>
                  <p className="text-xs font-light text-white/70">average reduction in total corporate travel costs</p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-white">85%</p>
                  <p className="text-xs font-light text-white/70">less time spent on travel administrative tasks</p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-white">100%</p>
                  <p className="text-xs font-light text-white/70">
                    compliance with corporate policies and tax regulations
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-white/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-white" weight="fill" />
                </div>
                <p className="text-sm font-light text-white/70">
                  <span className="font-medium text-white">Total centralization:</span> A single platform for the entire
                  corporate travel cycle
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-white/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-white" weight="fill" />
                </div>
                <p className="text-sm font-light text-white/70">
                  <span className="font-medium text-white">Advanced generative AI:</span> AI agents that automate
                  bookings, changes, and cost optimization
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-white/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-white" weight="fill" />
                </div>
                <p className="text-sm font-light text-white/70">
                  <span className="font-medium text-white">Predictive analytics:</span> Real-time dashboards with
                  proactive savings recommendations
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-white/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-white" weight="fill" />
                </div>
                <p className="text-sm font-light text-white/70">
                  <span className="font-medium text-white">Complete integration:</span> Connection with +500 providers
                  and existing financial systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10">
        <h3 className="text-lg font-medium tracking-tighter mb-3 text-center text-white">
          A day in the life: Before vs. After
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium tracking-tighter text-red-400">Before Suitpax</p>
              <p className="text-xs font-light text-red-400/80 bg-red-400/10 px-2 py-0.5 rounded-full">6+ hours</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Clock className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">8:30 AM</p>
                  <p className="text-xs font-light text-white/70">
                    Maria (Travel Manager) reviews 15 travel requests in her inbox
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <User className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">9:45 AM</p>
                  <p className="text-xs font-light text-white/70">
                    Calls 3 travelers to clarify missing details and preferences
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <FileSearch className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">11:30 AM</p>
                  <p className="text-xs font-light text-white/70">
                    Manually compares options on 4 different platforms to find the best rates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <CreditCard className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">2:15 PM</p>
                  <p className="text-xs font-light text-white/70">
                    Processes payments in multiple systems and manually updates the accounting system
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Warning className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">4:30 PM</p>
                  <p className="text-xs font-light text-white/70">
                    Manages 3 urgent last-minute changes with calls to providers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <FileSearch className="h-4 w-4 text-white/70" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">5:45 PM</p>
                  <p className="text-xs font-light text-white/70">
                    Prepares manual reports for finance with data from multiple sources
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium tracking-tighter text-white">With Suitpax</p>
              <p className="text-xs font-light text-emerald-400/80 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                Just 1 hour
              </p>
            </div>

            <div className="mb-3 bg-black/40 p-2 rounded-lg border border-white/5">
              <div className="flex items-center gap-2 mb-1">
                <Rocket className="h-4 w-4 text-emerald-400" weight="fill" />
                <p className="text-xs font-medium text-emerald-400">Suitpax AI handles everything</p>
              </div>
              <p className="text-xs font-light text-white/70 pl-6">
                Our AI processes all requests, optimizes bookings, and manages changes automatically
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Clock className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">9:00 AM</p>
                  <p className="text-xs font-light text-white/70">
                    Maria opens the Suitpax dashboard and sees all 15 travel requests already processed by AI
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">9:15 AM</p>
                  <p className="text-xs font-light text-white/70">
                    With one click, Maria approves all AI-recommended bookings that comply with company policies
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <FileSearch className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">9:30 AM</p>
                  <p className="text-xs font-light text-white/70">
                    Suitpax AI automatically generates reports showing $12,500 in savings this quarter
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <User className="h-4 w-4 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">9:45 AM</p>
                  <p className="text-xs font-light text-white/70">
                    Maria reviews the strategic insights provided by Suitpax AI for future travel optimization
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 bg-emerald-400/5 p-2 rounded-lg">
                <div className="mt-0.5 flex-shrink-0">
                  <Rocket className="h-4 w-4 text-emerald-400" weight="fill" />
                </div>
                <div>
                  <p className="text-xs font-medium text-white">10:00 AM</p>
                  <p className="text-xs font-light text-white/70">
                    All done! Maria can now focus on strategic tasks while Suitpax AI handles any changes or issues
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
