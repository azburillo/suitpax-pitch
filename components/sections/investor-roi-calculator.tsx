"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { CurrencyDollar, TrendUp, ChartLineUp } from "@phosphor-icons/react"
import Image from "next/image"

export default function InvestorROICalculator() {
  const [investment, setInvestment] = useState(100000)
  const [sliderValue, setSliderValue] = useState(20)
  const [years, setYears] = useState(5)

  // Calculate ROI based on investment amount and years
  const calculateROI = (amount: number, years: number) => {
    const multipliers = {
      1: 1.5,
      2: 3,
      3: 7,
      4: 15,
      5: 25,
      6: 40,
    }

    // @ts-ignore - TypeScript doesn't know we're checking for valid keys
    const multiplier = multipliers[years] || multipliers[5]
    return amount * multiplier
  }

  // Industry benchmarks
  const benchmarks = [
    { name: "Average SaaS", multiplier: 8, color: "bg-gray-500" },
    { name: "Top TravelTech", multiplier: 15, color: "bg-blue-500" },
    { name: "Navan (TripActions)", multiplier: 40, color: "bg-purple-500" },
    { name: "Suitpax Projection", multiplier: 25, color: "bg-red-500" },
  ]

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    setSliderValue(value)
    setInvestment(value * 45000) // Adjusted to reach 1.8M with 40 steps
  }

  // Handle direct input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 0 : Number.parseInt(e.target.value.replace(/,/g, ""))
    if (!isNaN(value)) {
      setInvestment(value)
      setSliderValue(Math.min(Math.round(value / 45000), 40)) // Adjusted to reach 1.8M with 40 steps
    }
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <motion.section
      id="roi-calculator"
      className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-lg my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mb-8">
        <div className="inline-flex items-center rounded-xl bg-gray-200 text-gray-700 px-3 py-1 text-xs font-medium mb-3">
          INVESTOR TOOLS
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter text-black text-center mb-2">
          Try our calculator with superpowers
        </h2>

        <div className="flex items-center gap-2 mt-2 bg-gray-200 rounded-full px-4 py-2">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/ai-agents/agent5.png" alt="AI Agent" width={32} height={32} className="object-cover" />
          </div>
          <p className="text-sm text-gray-700">"Enjoy watching your potential returns grow over time!"</p>
        </div>
      </div>

      <div className="mb-10">
        <div className="flex flex-col items-center justify-center text-gray-800 text-xl sm:text-2xl mb-4">
          <div className="flex items-center justify-center gap-4 w-full">
            <span className="font-medium">How much would you like to invest?</span>
          </div>

          <div className="relative w-full max-w-md mt-4">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <CurrencyDollar className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              value={investment.toLocaleString()}
              onChange={handleInputChange}
              className="w-full bg-gray-50 border border-gray-200 text-black text-center text-3xl sm:text-4xl py-4 px-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"
              aria-label="Investment amount"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto mt-6">
          <input
            type="range"
            min="1"
            max="40"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-400"
          />
          <div className="flex justify-between mt-2 text-gray-600 text-sm">
            <span>€45k</span>
            <span>€450k</span>
            <span>€900k</span>
            <span>€1.35M</span>
            <span>€1.8M</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-medium text-black mb-4 flex items-center gap-2">
            <TrendUp className="h-5 w-5 text-red-500" />
            Projected Returns Over Time
          </h3>

          <div className="space-y-6">
            {[1, 3, 5].map((year) => (
              <div key={year} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">Year {year}</span>
                  <span className="text-sm font-medium text-gray-800">
                    {formatCurrency(calculateROI(investment, year))}
                  </span>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full"
                    style={{ width: `${Math.min((calculateROI(investment, year) / (investment * 40)) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="absolute -left-1.5 top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white flex items-center justify-center bg-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <div className="mt-1 text-xs text-gray-500 font-medium">
                  {Math.round((calculateROI(investment, year) / investment) * 100) / 100}x return
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-200 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-800">Exit Valuation (Year 5)</span>
              <span className="text-lg font-medium text-black">{formatCurrency(calculateROI(investment, 5))}</span>
            </div>
            <div className="text-sm text-gray-600">Based on projected company valuation of €1B+ by 2029</div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h3 className="text-xl font-medium text-black mb-4 flex items-center gap-2">
            <ChartLineUp className="h-5 w-5 text-red-500" />
            Industry Benchmark Comparison
          </h3>

          <div className="space-y-6">
            {benchmarks.map((benchmark) => (
              <div key={benchmark.name} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-800">{benchmark.name}</span>
                  <span className="text-sm font-medium text-gray-800">
                    {formatCurrency(investment * benchmark.multiplier)}
                  </span>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${benchmark.color} rounded-full`}
                    style={{ width: `${Math.min((benchmark.multiplier / 40) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="mt-1 text-xs text-gray-500 font-medium">
                  {benchmark.multiplier}x return over 5 years
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-gray-200 rounded-lg">
            <div className="text-sm text-gray-700 space-y-2">
              <p className="flex items-start gap-2">
                <span className="text-gray-500 mt-1">•</span>
                <span>Suitpax projections based on current traction and market opportunity</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-gray-500 mt-1">•</span>
                <span>Strategic investors may receive preferential terms and earlier liquidity options</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          This calculator provides estimated returns based on our growth projections. Actual results may vary. Contact
          our investor relations team for detailed financial models.
        </p>
      </div>
    </motion.section>
  )
}
