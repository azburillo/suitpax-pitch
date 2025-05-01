"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function DashProductSection() {
  return (
    <motion.section
      id="product"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          PRODUCT SHOWCASE
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-4">
        AI-Powered Travel Management Dashboard
      </h2>

      <p className="text-sm sm:text-base font-light text-gray-700 mb-6 max-w-3xl">
        Suitpax transforms corporate travel with an intuitive dashboard that centralizes all travel needs. Powered by
        Suitpax Intelligence, it provides personalized assistance, real-time updates, and comprehensive travel
        management.
      </p>

      {/* Dashboard Preview */}
      <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 shadow-lg mb-6">
        <a
          href="https://app.suitpax.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative aspect-[16/9] w-full"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7cbc0366f6a1e8b6ed59dfd0d881e94aa32593361388e25f6d65cc82bade8303-etaKF65Y1OWMKULoADlMDaAQghrGaa.jpeg"
            alt="Suitpax AI Travel Platform Dashboard"
            fill
            className="object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <span className="inline-flex items-center rounded-full bg-black/70 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              Explore the dashboard
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </span>
          </div>
        </a>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-gray-200 p-1.5">
              <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              </svg>
            </div>
            <h3 className="text-sm font-medium">AI Travel Assistant</h3>
          </div>
          <p className="text-xs text-gray-600">24/7 AI agent for booking, changes, and travel advice</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-gray-200 p-1.5">
              <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-medium">Budget Tracking</h3>
          </div>
          <p className="text-xs text-gray-600">Real-time expense monitoring and budget management</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-gray-200 p-1.5">
              <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-medium">Trip Management</h3>
          </div>
          <p className="text-xs text-gray-600">Centralized view of all upcoming and past trips</p>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-gray-200 p-1.5">
              <svg className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-sm font-medium">Policy Compliance</h3>
          </div>
          <p className="text-xs text-gray-600">Automatic enforcement of company travel policies</p>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-50 p-3 rounded-xl text-center">
          <p className="text-2xl font-semibold text-gray-900">35%</p>
          <p className="text-xs font-medium text-gray-500">Average savings</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl text-center">
          <p className="text-2xl font-semibold text-gray-900">24/7</p>
          <p className="text-xs font-medium text-gray-500">AI assistance</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl text-center">
          <p className="text-2xl font-semibold text-gray-900">45%</p>
          <p className="text-xs font-medium text-gray-500">Time saved</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-xl text-center">
          <p className="text-2xl font-semibold text-gray-900">92%</p>
          <p className="text-xs font-medium text-gray-500">User satisfaction</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <a
          href="https://app.suitpax.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-xl border border-black bg-transparent px-5 py-2.5 text-sm font-medium text-black shadow-sm hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
        >
          Try our demo
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        <p className="text-xs text-gray-500 font-light mt-2">
          This is a beta version. The final release will be improved and adjusted.
        </p>
      </div>
    </motion.section>
  )
}
