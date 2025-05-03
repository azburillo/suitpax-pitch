"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChartLineUp, Calculator, TrendUp, ArrowsOutLineHorizontal } from "@phosphor-icons/react"
import { EuroIcon } from "lucide-react"
import Image from "next/image"

export default function InvestorROICalculator() {
  const [investment, setInvestment] = useState(1200000)
  const [sliderValue, setSliderValue] = useState(60)
  const [equityPercentage, setEquityPercentage] = useState(9)
  const [valuation, setValuation] = useState(13333333)
  const [years, setYears] = useState(5)

  // Update equity percentage based on investment amount
  useEffect(() => {
    if (investment <= 1200000) {
      setEquityPercentage(9)
      setValuation(1200000 / 0.09)
    } else {
      // Scale equity percentage between 9% and 12% based on investment
      const percentage = 9 + ((investment - 1200000) / 600000) * 3
      setEquityPercentage(Math.min(12, percentage))
      setValuation(investment / (percentage / 100))
    }
  }, [investment])

  // Calculate ROI based on investment amount and years
  const calculateROI = (amount: number, years: number) => {
    const multipliers = {
      1: 1.8,
      2: 4.5,
      3: 9.2,
      4: 16.5,
      5: 25,
      6: 38,
    }

    // @ts-ignore - TypeScript doesn't know we're checking for valid keys
    const multiplier = multipliers[years] || multipliers[5]
    return amount * multiplier
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    if (amount >= 1000000) {
      return `€${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `€${(amount / 1000).toFixed(0)}K`
    } else {
      return `€${amount.toFixed(0)}`
    }
  }

  // Format percentage
  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value)
    setSliderValue(value)
    setInvestment(600000 + value * 20000) // Scale from €600K to €1.8M
  }

  // Handle direct input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === "" ? 0 : Number.parseInt(e.target.value.replace(/[^0-9]/g, ""))
    if (!isNaN(value)) {
      setInvestment(value)
      const newSliderValue = Math.min(Math.round((value - 600000) / 20000), 60)
      setSliderValue(Math.max(0, newSliderValue))
    }
  }

  // Calculate company ownership
  const calculateOwnership = (amount: number, percentage: number) => {
    return (amount / (amount / (percentage / 100))) * 100
  }

  // Industry benchmarks
  const benchmarks = [
    { name: "Average SaaS", multiplier: 8, color: "bg-white/30" },
    { name: "Top TravelTech", multiplier: 15, color: "bg-white/50" },
    { name: "Navan (TripActions)", multiplier: 40, color: "bg-white/70" },
    { name: "Suitpax Projection", multiplier: 25, color: "bg-white/90" },
  ]

  return (
    <motion.section
      id="roi-calculator"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80">
          INVESTOR CALCULATOR
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-4 sm:mb-6 text-white">
        Visualize your potential returns
      </h2>

      <div className="mb-6 sm:mb-8 bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
        <div className="flex flex-col items-center justify-center text-white text-lg sm:text-xl mb-4">
          <div className="flex items-center justify-center gap-2 w-full">
            <span className="font-medium text-sm sm:text-base">Investment Amount</span>
          </div>

          <div className="relative w-full max-w-md mt-3">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <EuroIcon className="h-5 w-5 text-white/50" />
            </div>
            <input
              type="text"
              value={investment.toLocaleString("en-US")}
              onChange={handleInputChange}
              className="w-full bg-black/30 border border-white/20 text-white text-center text-xl sm:text-2xl py-2 sm:py-3 px-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
              aria-label="Investment amount"
            />
          </div>
        </div>

        <div className="w-full max-w-3xl mx-auto mt-4">
          <input
            type="range"
            min="0"
            max="60"
            value={sliderValue}
            onChange={handleSliderChange}
            className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-white"
          />
          <div className="flex justify-between mt-2 text-white/60 text-xs">
            <span>€600K</span>
            <span>€900K</span>
            <span>€1.2M</span>
            <span>€1.5M</span>
            <span>€1.8M</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="bg-black/30 p-3 rounded-lg border border-white/10">
            <p className="text-xs text-white/60 mb-1">Equity</p>
            <p className="text-lg font-medium text-white">{formatPercentage(equityPercentage)}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg border border-white/10">
            <p className="text-xs text-white/60 mb-1">Valuation</p>
            <p className="text-lg font-medium text-white">{formatCurrency(valuation)}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg border border-white/10">
            <p className="text-xs text-white/60 mb-1">5-Year Return</p>
            <p className="text-lg font-medium text-white">{formatCurrency(calculateROI(investment, 5))}</p>
          </div>
          <div className="bg-black/30 p-3 rounded-lg border border-white/10">
            <p className="text-xs text-white/60 mb-1">Multiple</p>
            <p className="text-lg font-medium text-white">25x</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full bg-white/10 p-1.5">
              <TrendUp className="h-4 w-4 text-white" weight="fill" />
            </div>
            <h3 className="text-sm font-medium text-white">Projected Returns Over Time</h3>
          </div>

          <div className="space-y-5">
            {[1, 3, 5].map((year) => (
              <div key={year} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-medium text-white/80">Year {year}</span>
                  <span className="text-xs font-medium text-white/80">
                    {formatCurrency(calculateROI(investment, year))}
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-white/40 to-white/80 rounded-full"
                    style={{ width: `${Math.min((calculateROI(investment, year) / (investment * 40)) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full border border-white flex items-center justify-center bg-black">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                </div>
                <div className="mt-1 text-[10px] text-white/50 font-medium">
                  {Math.round((calculateROI(investment, year) / investment) * 10) / 10}x return
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-3 bg-white/5 rounded-xl border border-white/10">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-white/80">Exit Valuation (Year 5)</span>
              <span className="text-sm font-medium text-white">{formatCurrency(calculateROI(investment, 5))}</span>
            </div>
            <div className="text-[10px] text-white/50">Based on projected company valuation of €1B+ by 2029</div>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="rounded-full bg-white/10 p-1.5">
              <ChartLineUp className="h-4 w-4 text-white" weight="fill" />
            </div>
            <h3 className="text-sm font-medium text-white">Industry Benchmark Comparison</h3>
          </div>

          <div className="space-y-5">
            {benchmarks.map((benchmark) => (
              <div key={benchmark.name} className="relative">
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-medium text-white/80">{benchmark.name}</span>
                  <span className="text-xs font-medium text-white/80">
                    {formatCurrency(investment * benchmark.multiplier)}
                  </span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${benchmark.color} rounded-full`}
                    style={{ width: `${Math.min((benchmark.multiplier / 40) * 100, 100)}%` }}
                  ></div>
                </div>
                <div className="mt-1 text-[10px] text-white/50 font-medium">
                  {benchmark.multiplier}x return over 5 years
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 p-3 bg-white/5 rounded-xl border border-white/10">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-full bg-white/10 p-1">
                <Calculator className="h-3 w-3 text-white" weight="fill" />
              </div>
              <h4 className="text-xs font-medium text-white">Key Insights</h4>
            </div>
            <div className="text-[10px] text-white/70 space-y-1.5">
              <p className="flex items-start gap-1.5">
                <span className="text-white/40 mt-0.5">•</span>
                <span>
                  At {formatPercentage(equityPercentage)} equity, your stake would be worth{" "}
                  {formatCurrency(calculateROI(investment, 5))} in 5 years
                </span>
              </p>
              <p className="flex items-start gap-1.5">
                <span className="text-white/40 mt-0.5">•</span>
                <span>Strategic investors at €1.2M+ receive board observer rights</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center">
        <div className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 border border-white/10">
          <ArrowsOutLineHorizontal className="h-3 w-3 text-white/60" />
          <p className="text-[10px] text-white/60">
            Drag the slider or enter an amount to see different investment scenarios
          </p>
        </div>
      </div>
    </motion.section>
  )
}
