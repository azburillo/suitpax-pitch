"use client"

import { motion } from "framer-motion"
import { Rocket, Target, ShieldCheck, Scales, Handshake } from "@phosphor-icons/react"
import Image from "next/image"

export default function CompetitiveAdvantageSection() {
  return (
    <motion.section
      id="competitive-advantage"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          COMPETITIVE ADVANTAGE
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-4 sm:mb-6">
        Why Suitpax will dominate the market
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200">
          <div className="flex items-start gap-3 mb-3">
            <div className="mt-1 rounded-full bg-emerald-950 p-2 flex-shrink-0">
              <Rocket className="h-4 w-4 text-white" weight="fill" />
            </div>
            <div>
              <h3 className="text-base font-medium tracking-tighter mb-1">First-mover advantage</h3>
              <p className="text-xs font-light">
                Suitpax is the first AI-native corporate travel platform built from the ground up with Anthropic
                integration, giving us a 16-month head start over competitors still retrofitting legacy systems.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-full bg-emerald-950 p-2 flex-shrink-0">
              <Target className="h-4 w-4 text-white" weight="fill" />
            </div>
            <div>
              <h3 className="text-base font-medium tracking-tighter mb-1">Proprietary AI training</h3>
              <p className="text-xs font-light">
                Our AI models are trained on 8.3 million corporate travel transactions, creating a specialized
                understanding of business travel that generic AI solutions cannot match.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
          <div className="flex items-start gap-3 mb-3">
            <div className="mt-1 rounded-full bg-blue-700 p-2 flex-shrink-0">
              <ShieldCheck className="h-4 w-4 text-white" weight="fill" />
            </div>
            <div>
              <h3 className="text-base font-medium tracking-tighter mb-1">Enterprise-grade security</h3>
              <p className="text-xs font-light">
                SOC 2 Type II certified with ISO 27001 compliance, making Suitpax the most secure option for Fortune 500
                companies with strict security requirements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 rounded-full bg-blue-700 p-2 flex-shrink-0">
              <Scales className="h-4 w-4 text-white" weight="fill" />
            </div>
            <div>
              <h3 className="text-base font-medium tracking-tighter mb-1">Regulatory compliance</h3>
              <p className="text-xs font-light">
                Built-in compliance with GDPR, CCPA, and industry-specific regulations like SOX for finance and HIPAA
                for healthcare, reducing legal risk for enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-gradient-to-r from-gray-900 to-gray-800 p-4 rounded-xl text-white">
        <div className="flex items-start gap-3">
          <div className="mt-1 rounded-full bg-amber-400 p-2 flex-shrink-0">
            <Handshake className="h-4 w-4 text-gray-900" weight="fill" />
          </div>
          <div>
            <h3 className="text-base font-medium tracking-tighter mb-1">Strategic partnerships</h3>
            <p className="text-xs font-light text-gray-300">
              Exclusive partnerships with 3 of the 5 largest global airlines and 2 major hotel chains, providing Suitpax
              users with preferred rates and priority service unavailable to competitors.
            </p>

            <div className="mt-3 grid grid-cols-5 gap-2">
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center">
                <p className="text-[10px] font-medium text-center">Major Airline Partner</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center">
                <p className="text-[10px] font-medium text-center">Global Hotel Chain</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center">
                <p className="text-[10px] font-medium text-center">Payment Provider</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center">
                <p className="text-[10px] font-medium text-center">Car Rental Network</p>
              </div>
              <div className="bg-white/10 rounded-lg p-2 flex items-center justify-center">
                <p className="text-[10px] font-medium text-center">Insurance Partner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
