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
} from "@phosphor-icons/react"

export default function ProductsSection() {
  return (
    <motion.section
      id="products"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        MAIN PRODUCTS
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-6 sm:mb-8">
        Comprehensive solution for corporate travel
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-emerald-950/10 flex items-center justify-center mb-4">
            <Airplane className="h-6 w-6 text-emerald-950" weight="fill" />
          </div>
          <h3 className="text-lg font-medium tracking-tighter mb-2">Business Travel Platform</h3>
          <p className="text-sm font-light text-gray-700 mb-4">
            Complete platform where companies and employees manage the entire corporate travel cycle. From booking
            flights, transfers, and accommodations to exclusive access to VIP lounges in airports worldwide.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <MapPin className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p className="text-xs font-light">AI-optimized bookings for maximum savings</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Bed className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p className="text-xs font-light">Comprehensive management of corporate accommodations</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Ticket className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p className="text-xs font-light">Exclusive membership for VIP lounge access</p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-emerald-950/10 flex items-center justify-center mb-4">
            <CheckSquare className="h-6 w-6 text-emerald-950" weight="fill" />
          </div>
          <h3 className="text-lg font-medium tracking-tighter mb-2">Task Management</h3>
          <p className="text-sm font-light text-gray-700 mb-4">
            Predictive system that automatically generates and manages tasks based on upcoming corporate trips. AI
            analyzes historical patterns, company policies, and personal preferences to create optimized workflows.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Robot className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p className="text-xs font-light">Automatic task generation</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckSquare className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p className="text-xs font-light">Intelligent prioritization</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Calendar className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p className="text-xs font-light">Travel synchronization</p>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="h-12 w-12 rounded-xl bg-emerald-950/10 flex items-center justify-center mb-4">
            <CreditCard className="h-6 w-6 text-emerald-950" weight="fill" />
          </div>
          <h3 className="text-lg font-medium tracking-tighter mb-2">Expense Management + Fintech</h3>
          <p className="text-sm font-light text-gray-700 mb-4">
            Comprehensive solution that revolutionizes travel expense management with direct connection to banking
            entities. Automates reconciliation, eliminates manual data entry, and optimizes corporate cash flow.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CreditCard className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p className="text-xs font-light">Real-time banking integration</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CreditCard className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p className="text-xs font-light">AI-powered invoice recognition</p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CreditCard className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p className="text-xs font-light">Currency management and exchange rate optimization</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <div className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950 mb-3 sm:mb-4">
          UPCOMING FEATURES
        </div>
        <h3 className="text-xl font-medium tracking-tighter mb-4">Innovations in development (Q3 2025 - Q2 2026)</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-start gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-950/10 flex items-center justify-center flex-shrink-0">
              <ChatCircleText className="h-5 w-5 text-emerald-950" weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-medium tracking-tighter">Team Center</h3>
              <p className="text-xs font-light text-gray-500">Expected launch: Q3 2025</p>
            </div>
          </div>
          <p className="text-sm font-light text-gray-700 mb-3">
            Communication and collaboration center for teams before, during, and after corporate trips. Allows
            coordinating itineraries, sharing documents, and maintaining contextual conversations related to each
            business trip.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
              <UsersThree className="h-3 w-3 mr-1" weight="fill" /> Real-time collaboration
            </span>
            <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
              <ChatCircleText className="h-3 w-3 mr-1" weight="fill" /> Project channels
            </span>
            <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
              <Airplane className="h-3 w-3 mr-1" weight="fill" /> Itinerary integration
            </span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-start gap-3 mb-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-950/10 flex items-center justify-center flex-shrink-0">
              <Buildings className="h-5 w-5 text-emerald-950" weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-medium tracking-tighter">Advanced Analytics</h3>
              <p className="text-xs font-light text-gray-500">Expected launch: Q4 2025</p>
            </div>
          </div>
          <p className="text-sm font-light text-gray-700 mb-3">
            Comprehensive analytics platform that provides deep insights into travel spending, patterns, and
            optimization opportunities. Helps businesses make data-driven decisions to improve travel efficiency and
            reduce costs.
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
    </motion.section>
  )
}
