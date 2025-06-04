"use client"

import { motion } from "framer-motion"
import {
  Buildings,
  CreditCard,
  Airplane,
  MapPin,
  Bed,
  Ticket,
  ChatCircleText,
  CheckSquare,
  Calendar,
  ChartPieSlice,
  UsersThree,
  Robot,
  CheckCircle,
  Star,
  Sparkle,
} from "@phosphor-icons/react"

export default function ValuePropositionSection() {
  return (
    <motion.section
      id="value-proposition"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        OUR SOLUTION
      </div>
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tighter mb-6 sm:mb-8">
        AI-powered corporate travel revolution
      </h2>

      {/* Core Value Proposition */}
      <div className="bg-gradient-to-r from-emerald-950 to-black p-6 sm:p-8 rounded-2xl mb-8 text-white shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
            <Sparkle className="h-6 w-6 text-white" weight="fill" />
          </div>
          <h3 className="text-xl sm:text-2xl font-medium tracking-tighter">The Suitpax Advantage</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-medium tracking-tighter mb-1">95%</p>
            <p className="text-sm text-white/80">Tasks automated</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-medium tracking-tighter mb-1">27%</p>
            <p className="text-sm text-white/80">Cost reduction</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-medium tracking-tighter mb-1">85%</p>
            <p className="text-sm text-white/80">Time saved</p>
          </div>
          <div className="text-center">
            <p className="text-2xl sm:text-3xl font-medium tracking-tighter mb-1">100%</p>
            <p className="text-sm text-white/80">Compliance</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-white/10 p-1 flex-shrink-0">
                <CheckCircle className="h-3.5 w-3.5 text-white" weight="fill" />
              </div>
              <p className="text-sm font-light text-white/90">
                <span className="font-medium text-white">Total centralization:</span> Single platform for entire travel
                cycle
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-white/10 p-1 flex-shrink-0">
                <CheckCircle className="h-3.5 w-3.5 text-white" weight="fill" />
              </div>
              <p className="text-sm font-light text-white/90">
                <span className="font-medium text-white">Advanced AI:</span> Generative agents for bookings and
                optimization
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-white/10 p-1 flex-shrink-0">
                <CheckCircle className="h-3.5 w-3.5 text-white" weight="fill" />
              </div>
              <p className="text-sm font-light text-white/90">
                <span className="font-medium text-white">Predictive analytics:</span> Real-time dashboards with
                proactive recommendations
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-white/10 p-1 flex-shrink-0">
                <CheckCircle className="h-3.5 w-3.5 text-white" weight="fill" />
              </div>
              <p className="text-sm font-light text-white/90">
                <span className="font-medium text-white">Complete integration:</span> 500+ providers and financial
                systems
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Products */}
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-medium tracking-tighter mb-6">Complete solution suite</h3>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-950/10 flex items-center justify-center mb-4">
              <Airplane className="h-6 w-6 text-emerald-950" weight="fill" />
            </div>
            <h4 className="text-lg font-medium tracking-tighter mb-3">Business Travel Platform</h4>
            <p className="text-sm font-light text-gray-700 mb-4">
              Complete platform for the entire corporate travel cycle. From AI-optimized bookings to exclusive VIP
              lounge access worldwide.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1 flex-shrink-0">
                  <MapPin className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-xs font-light">AI-optimized bookings for maximum savings</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1 flex-shrink-0">
                  <Bed className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-xs font-light">Comprehensive accommodation management</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1 flex-shrink-0">
                  <Ticket className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-xs font-light">Exclusive VIP lounge membership</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-950/10 flex items-center justify-center mb-4">
              <CheckSquare className="h-6 w-6 text-emerald-950" weight="fill" />
            </div>
            <h4 className="text-lg font-medium tracking-tighter mb-3">AI Task Management</h4>
            <p className="text-sm font-light text-gray-700 mb-4">
              Predictive system that automatically generates and manages tasks based on upcoming trips, analyzing
              patterns and preferences.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1 flex-shrink-0">
                  <Robot className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-xs font-light">Automatic task generation</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1 flex-shrink-0">
                  <CheckSquare className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-xs font-light">Intelligent prioritization</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1 flex-shrink-0">
                  <Calendar className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-xs font-light">Travel synchronization</p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-emerald-950/10 flex items-center justify-center mb-4">
              <CreditCard className="h-6 w-6 text-emerald-950" weight="fill" />
            </div>
            <h4 className="text-lg font-medium tracking-tighter mb-3">Expense Management + Fintech</h4>
            <p className="text-sm font-light text-gray-700 mb-4">
              Revolutionary expense management with direct banking integration. Automates reconciliation and optimizes
              corporate cash flow.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1 flex-shrink-0">
                  <CreditCard className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-xs font-light">Real-time banking integration</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1 flex-shrink-0">
                  <Robot className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-xs font-light">AI-powered invoice recognition</p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1 flex-shrink-0">
                  <CreditCard className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-xs font-light">Currency optimization</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Innovation Pipeline */}
      <div className="bg-gray-50 p-4 sm:p-6 rounded-xl">
        <div className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950 mb-4">
          INNOVATION PIPELINE
        </div>
        <h3 className="text-xl font-medium tracking-tighter mb-6">Coming soon (Q3 2025 - Q2 2026)</h3>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-950/10 flex items-center justify-center flex-shrink-0">
                <ChatCircleText className="h-5 w-5 text-emerald-950" weight="fill" />
              </div>
              <div>
                <h4 className="text-lg font-medium tracking-tighter">Team Center</h4>
                <p className="text-xs font-light text-gray-500">Expected launch: Q3 2025</p>
              </div>
            </div>
            <p className="text-sm font-light text-gray-700 mb-3">
              Communication hub for teams before, during, and after trips. Coordinate itineraries, share documents, and
              maintain contextual conversations.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
                <UsersThree className="h-3 w-3 mr-1" weight="fill" /> Real-time collaboration
              </span>
              <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
                <ChatCircleText className="h-3 w-3 mr-1" weight="fill" /> Project channels
              </span>
              <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
                <Airplane className="h-3 w-3 mr-1" weight="fill" /> Itinerary sync
              </span>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-start gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-950/10 flex items-center justify-center flex-shrink-0">
                <ChartPieSlice className="h-5 w-5 text-emerald-950" weight="fill" />
              </div>
              <div>
                <h4 className="text-lg font-medium tracking-tighter">Advanced Analytics</h4>
                <p className="text-xs font-light text-gray-500">Expected launch: Q4 2025</p>
              </div>
            </div>
            <p className="text-sm font-light text-gray-700 mb-3">
              Comprehensive analytics platform providing deep insights into travel spending, patterns, and optimization
              opportunities.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
                <ChartPieSlice className="h-3 w-3 mr-1" weight="fill" /> Spending analysis
              </span>
              <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
                <Robot className="h-3 w-3 mr-1" weight="fill" /> AI recommendations
              </span>
              <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
                <Calendar className="h-3 w-3 mr-1" weight="fill" /> Travel forecasting
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Differentiation */}
      <div className="mt-8 bg-gradient-to-r from-gray-50 to-white p-4 sm:p-6 rounded-xl border border-gray-100">
        <h3 className="text-xl font-medium tracking-tighter mb-4 text-center">Why Suitpax wins</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="h-12 w-12 rounded-xl bg-emerald-950/10 flex items-center justify-center mx-auto mb-3">
              <Star className="h-6 w-6 text-emerald-950" weight="fill" />
            </div>
            <h4 className="text-sm font-medium mb-2">AI-First Approach</h4>
            <p className="text-xs font-light text-gray-600">Built from ground up with generative AI, not retrofitted</p>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 rounded-xl bg-emerald-950/10 flex items-center justify-center mx-auto mb-3">
              <Buildings className="h-6 w-6 text-emerald-950" weight="fill" />
            </div>
            <h4 className="text-sm font-medium mb-2">Complete Platform</h4>
            <p className="text-xs font-light text-gray-600">End-to-end solution vs. point solutions</p>
          </div>
          <div className="text-center">
            <div className="h-12 w-12 rounded-xl bg-emerald-950/10 flex items-center justify-center mx-auto mb-3">
              <Sparkle className="h-6 w-6 text-emerald-950" weight="fill" />
            </div>
            <h4 className="text-sm font-medium mb-2">User Experience</h4>
            <p className="text-xs font-light text-gray-600">Consumer-grade UX for enterprise needs</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
