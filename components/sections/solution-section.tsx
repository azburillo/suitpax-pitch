"use client"

import { motion } from "framer-motion"
import {
  Lightning,
  Stack,
  Clock,
  CheckCircle,
  ChartLine,
  ChartBar,
  CurrencyDollar,
  Globe,
  ShieldCheck,
  Airplane,
  CreditCard,
  Buildings,
} from "@phosphor-icons/react"

export default function SolutionSection() {
  return (
    <motion.section
      id="solution"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        SOLUTION
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Next-Gen AI TravelTech: Unified and centralized platform
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-medium tracking-tighter mb-3 flex items-center">
            <Lightning className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
            Intelligent Centralization
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Stack className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <span className="text-sm sm:text-base font-light">
                Single platform for booking, management, and travel analysis
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Clock className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <span className="text-sm sm:text-base font-light">85% reduction in request processing time</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <span className="text-sm sm:text-base font-light">
                Unification of policies, providers, and data in a single system
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-medium tracking-tighter mb-3 flex items-center">
            <ChartLine className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
            Advanced Generative AI
          </h3>
          <ul className="space-y-2 sm:space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <ChartBar className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <span className="text-sm sm:text-base font-light">
                AI agents that automate 95% of travel management tasks
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CurrencyDollar className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <span className="text-sm sm:text-base font-light">
                Predictive optimization that generates 27% savings in total costs
              </span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Globe className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <span className="text-sm sm:text-base font-light">
                Integration with +500 global providers in a unified interface
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-xl">
        <h3 className="text-base font-medium tracking-tighter mb-2">Benefits of centralization (2024)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-3">
          <div className="flex flex-col items-center text-center p-1 xs:p-2">
            <ShieldCheck className="h-6 w-6 text-emerald-950 mb-1" weight="fill" />
            <p className="text-xs font-medium">Total spend visibility</p>
          </div>
          <div className="flex flex-col items-center text-center p-1 xs:p-2">
            <Airplane className="h-6 w-6 text-emerald-950 mb-1" weight="fill" />
            <p className="text-xs font-medium">Unified experience</p>
          </div>
          <div className="flex flex-col items-center text-center p-1 xs:p-2">
            <CreditCard className="h-6 w-6 text-emerald-950 mb-1" weight="fill" />
            <p className="text-xs font-medium">Centralized cost control</p>
          </div>
          <div className="flex flex-col items-center text-center p-1 xs:p-2">
            <Buildings className="h-6 w-6 text-emerald-950 mb-1" weight="fill" />
            <p className="text-xs font-medium">Regulatory compliance</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
