"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function BetaCustomersSection() {
  return (
    <motion.section
      id="beta-customers"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="text-center mb-6">
        <div className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950 mb-3">
          BETA CUSTOMERS
        </div>
        <h2 className="text-xl sm:text-2xl font-medium tracking-tighter mb-2">Trusted by innovative companies</h2>
        <p className="text-sm font-light text-gray-600">
          Leading organizations already testing our AI-powered travel platform
        </p>
      </div>

      <div className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16">
        <div className="flex items-center justify-center h-12 sm:h-16">
          <Image
            src="/beta-customers/actiu-logo.jpeg"
            alt="ACTIU"
            width={80}
            height={32}
            className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
          />
        </div>
        <div className="flex items-center justify-center h-12 sm:h-16">
          <Image
            src="/beta-customers/juniper-logo.jpeg"
            alt="Juniper"
            width={120}
            height={48}
            className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
          />
        </div>
      </div>
    </motion.section>
  )
}
