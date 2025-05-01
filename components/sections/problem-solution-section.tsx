"use client"

import { motion } from "framer-motion"
import { Warning, CheckCircle, Clock, CreditCard, FileSearch, User, X } from "@phosphor-icons/react"

export default function ProblemSolutionSection() {
  return (
    <motion.section
      id="problem-solution"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        PROBLEM & SOLUTION
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Transforming corporate travel management
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Warning className="h-5 w-5 text-red-500" weight="fill" />
            <h3 className="text-lg font-medium tracking-tighter">The problem</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-sm font-medium mb-2">Industry statistics (2025)</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xl font-medium tracking-tighter text-red-500">78%</p>
                  <p className="text-xs font-light text-gray-700">
                    of companies report significant inefficiencies in their travel processes
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-red-500">15-20%</p>
                  <p className="text-xs font-light text-gray-700">
                    average cost overruns due to fragmented bookings and lack of visibility
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-red-500">5.4 hrs</p>
                  <p className="text-xs font-light text-gray-700">
                    average weekly time each manager dedicates to travel administrative tasks
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-red-500">67%</p>
                  <p className="text-xs font-light text-gray-700">
                    of corporate travelers report fragmented and frustrating experiences
                  </p>
                </div>
              </div>
              <p className="text-xs font-light text-gray-500 mt-3">Source: Deloitte, GBTA, and McKinsey 2025 studies</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-red-100 p-1">
                  <X className="h-3.5 w-3.5 text-red-500" weight="bold" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Fragmentation:</span> Companies use 4-7 different tools to manage the
                  entire travel cycle
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-red-100 p-1">
                  <X className="h-3.5 w-3.5 text-red-500" weight="bold" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Lack of visibility:</span> 82% of companies don't have real-time
                  visibility into their travel expenses
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-red-100 p-1">
                  <X className="h-3.5 w-3.5 text-red-500" weight="bold" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Manual processes:</span> 73% of travel management tasks remain manual
                  and error-prone
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-red-100 p-1">
                  <X className="h-3.5 w-3.5 text-red-500" weight="bold" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Regulatory complexity:</span> Compliance with corporate policies and tax
                  regulations is increasingly complex
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle className="h-5 w-5 text-emerald-950" weight="fill" />
            <h3 className="text-lg font-medium tracking-tighter">Our solution</h3>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
              <p className="text-sm font-medium mb-2">Suitpax impact</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xl font-medium tracking-tighter text-emerald-950">95%</p>
                  <p className="text-xs font-light text-gray-700">
                    of travel management tasks automated with generative AI
                  </p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-emerald-950">27%</p>
                  <p className="text-xs font-light text-gray-700">average reduction in total corporate travel costs</p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-emerald-950">85%</p>
                  <p className="text-xs font-light text-gray-700">less time spent on travel administrative tasks</p>
                </div>
                <div>
                  <p className="text-xl font-medium tracking-tighter text-emerald-950">100%</p>
                  <p className="text-xs font-light text-gray-700">
                    compliance with corporate policies and tax regulations
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Total centralization:</span> A single platform for the entire corporate
                  travel cycle
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Advanced generative AI:</span> AI agents that automate bookings,
                  changes, and cost optimization
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Predictive analytics:</span> Real-time dashboards with proactive savings
                  recommendations
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Complete integration:</span> Connection with +500 providers and existing
                  financial systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl">
        <h3 className="text-lg font-medium tracking-tighter mb-3 text-center">A day in the life: Before vs. After</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm font-medium tracking-tighter mb-2 text-red-500">Before Suitpax</p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Clock className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-xs font-medium">8:30 AM</p>
                  <p className="text-xs font-light text-gray-700">
                    Maria (Travel Manager) reviews 15 travel requests in her inbox
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <User className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-xs font-medium">9:45 AM</p>
                  <p className="text-xs font-light text-gray-700">
                    Calls 3 travelers to clarify missing details and preferences
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <FileSearch className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-xs font-medium">11:30 AM</p>
                  <p className="text-xs font-light text-gray-700">
                    Manually compares options on 4 different platforms to find the best rates
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <CreditCard className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-xs font-medium">2:15 PM</p>
                  <p className="text-xs font-light text-gray-700">
                    Processes payments in multiple systems and manually updates the accounting system
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Warning className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-xs font-medium">4:30 PM</p>
                  <p className="text-xs font-light text-gray-700">
                    Manages 3 urgent last-minute changes with calls to providers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <FileSearch className="h-4 w-4 text-gray-500" />
                </div>
                <div>
                  <p className="text-xs font-medium">5:45 PM</p>
                  <p className="text-xs font-light text-gray-700">
                    Prepares manual reports for finance with data from multiple sources
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm font-medium tracking-tighter mb-2 text-emerald-950">With Suitpax</p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Clock className="h-4 w-4 text-emerald-950" />
                </div>
                <div>
                  <p className="text-xs font-medium">8:30 AM</p>
                  <p className="text-xs font-light text-gray-700">
                    Maria reviews the Suitpax dashboard with all requests already processed by AI
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-emerald-950" />
                </div>
                <div>
                  <p className="text-xs font-medium">9:00 AM</p>
                  <p className="text-xs font-light text-gray-700">
                    Approves AI recommendations that comply with all policies with one click
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <FileSearch className="h-4 w-4 text-emerald-950" />
                </div>
                <div>
                  <p className="text-xs font-medium">10:15 AM</p>
                  <p className="text-xs font-light text-gray-700">
                    Reviews predictive analysis showing $12,500 savings opportunities this quarter
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <User className="h-4 w-4 text-emerald-950" />
                </div>
                <div>
                  <p className="text-xs font-medium">1:30 PM</p>
                  <p className="text-xs font-light text-gray-700">
                    Dedicates time to a strategic session with the CFO on travel expense optimization
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <CreditCard className="h-4 w-4 text-emerald-950" />
                </div>
                <div>
                  <p className="text-xs font-medium">3:00 PM</p>
                  <p className="text-xs font-light text-gray-700">
                    Last-minute changes are automatically managed by AI agents
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 text-emerald-950" />
                </div>
                <div>
                  <p className="text-xs font-medium">4:30 PM</p>
                  <p className="text-xs font-light text-gray-700">
                    Automatic reports sent to finance with direct integration into accounting systems
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
