"use client"

import { motion } from "framer-motion"
import {
  CaretRight,
  ArrowRight,
  Trophy,
  Star,
  ChartLineUp,
  ChartLine,
  CurrencyDollar,
  Rocket,
} from "@phosphor-icons/react"
import Image from "next/image"

export default function InvestmentCompleteSection() {
  return (
    <motion.section
      id="investment-complete"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          INVESTMENT OPPORTUNITY
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
            Promising initial results
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 mb-4">
            <div className="text-center sm:text-left">
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-gray-900">18</p>
              <p className="text-xs font-medium text-gray-500">Active clients</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-gray-900">
                In development
              </p>
              <p className="text-xs font-medium text-gray-500">Projected ARR (Q2 2025)</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-gray-900">92%</p>
              <p className="text-xs font-medium text-gray-500">12-month retention</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xl xs:text-2xl sm:text-3xl font-medium tracking-tighter text-gray-900">27%</p>
              <p className="text-xs font-medium text-gray-500">Average savings for clients</p>
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-xl mb-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-base font-medium tracking-tighter">Client Growth Projection</h3>
              <p className="text-xs font-medium text-gray-900">5,000+ by 2031</p>
            </div>
            <div className="h-24 flex items-end gap-1">
              {[18, 120, 450, 1200, 2500, 3800, 5000].map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-1 bg-gray-900 rounded-t"
                    style={{
                      height: `${(value / 5000) * 100}%`,
                    }}
                  ></div>
                  <p className="text-[8px] mt-1 text-gray-600 rotate-45 origin-left">{2025 + index}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 p-3 rounded-xl">
            <h3 className="text-base font-medium tracking-tighter mb-2">Key Growth Metrics</h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium">Customer Acquisition</p>
                  <p className="text-xs font-medium">+125% YoY</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium">Revenue Growth</p>
                  <p className="text-xs font-medium">+210% YoY</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "92%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium">Market Penetration</p>
                  <p className="text-xs font-medium">+65% YoY</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          {/* Featured valuation and round section */}
          <div className="bg-gradient-to-r from-gray-900 to-black p-4 sm:p-6 lg:p-8 rounded-xl mb-6 text-white shadow-lg border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-gray-400" weight="fill" />
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-tighter">Valuation</h2>
              </div>
              <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tighter text-gray-300">
                €8M
              </p>
            </div>
            <p className="text-sm text-gray-400 mb-6">Pre-money · Seed Round</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 text-gray-400" weight="fill" />
                <h3 className="text-xl sm:text-2xl font-medium tracking-tighter">Accepting from</h3>
              </div>
              <p className="text-2xl sm:text-3xl font-semibold tracking-tighter text-gray-300">€600K</p>
            </div>
            <p className="text-sm text-gray-400">For 7.5% equity</p>
          </div>

          <p className="text-sm sm:text-base font-light text-gray-700 mb-4">
            Opportunity to participate in our seed round and consolidate our position in the AI-powered corporate travel
            management market.
          </p>

          <div className="bg-gray-100 p-3 rounded-xl mb-4">
            <h3 className="text-base font-medium tracking-tighter mb-2">Use of funds</h3>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">Product development</p>
                  <p className="text-xs font-medium">45%</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">Sales and marketing</p>
                  <p className="text-xs font-medium">35%</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <p className="text-xs font-medium">Operations and expansion</p>
                  <p className="text-xs font-medium">20%</p>
                </div>
                <div className="w-full bg-gray-200 h-1 rounded-full">
                  <div className="bg-gray-900 h-1 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ChartLineUp className="h-5 w-5 text-gray-900" weight="fill" />
              <h3 className="text-base font-medium tracking-tighter">Valuation Projection to 2031</h3>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2025:</span> €8M valuation (€600K for 7.5% equity)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2026:</span> €50M valuation (€5M round for 10% equity)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2027:</span> €200M valuation (€20M round for 10% equity)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2028:</span> €450M valuation (Series C)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2029-2030:</span> €800M valuation (Pre-IPO round)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-gray-900/10 p-1">
                <CaretRight className="h-3.5 w-3.5 text-gray-900" weight="bold" />
              </div>
              <p className="text-sm font-light">
                <span className="font-medium">2031:</span> €1.5B market cap (IPO)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-900 mt-4">
            <p className="text-sm font-medium">Contact us for more information</p>
            <ArrowRight className="h-4 w-4" weight="bold" />
          </div>
          <p className="text-xs font-light text-gray-500 mt-1">investors@suitpax.com | +1 (555) 123-4567</p>
        </div>
      </div>

      {/* ROI Section */}
      <div className="mt-8 bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg">
        <div className="inline-flex items-center rounded-xl bg-white/10 text-white px-2.5 py-0.5 text-[10px] font-medium mb-3 sm:mb-4">
          PARTNERSHIP VALUE
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4 text-white">
          Why partner with Suitpax
        </h3>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <div>
            <div className="bg-black p-4 rounded-xl border border-gray-800 shadow-sm mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <ChartLine className="h-5 w-5 text-gray-300" weight="fill" />
                </div>
                <h4 className="text-lg font-medium text-white">
                  Financial projection
                  <br />& return
                </h4>
              </div>
              <div className="bg-gray-900 p-3 rounded-xl mb-3">
                <p className="text-sm font-medium mb-2 text-white">Projected growth</p>
                <div className="h-[180px] relative">
                  {/* Gráfico simplificado de crecimiento */}
                  <svg className="w-full h-full" viewBox="0 0 400 180" fill="none">
                    {/* Ejes */}
                    <line x1="50" y1="150" x2="350" y2="150" stroke="#4b5563" strokeWidth="2" />
                    <line x1="50" y1="30" x2="50" y2="150" stroke="#4b5563" strokeWidth="2" />

                    {/* Etiquetas eje X */}
                    <text x="50" y="165" fontSize="10" fill="#9ca3af" textAnchor="middle">
                      2025
                    </text>
                    <text x="125" y="165" fontSize="10" fill="#9ca3af" textAnchor="middle">
                      2026
                    </text>
                    <text x="200" y="165" fontSize="10" fill="#9ca3af" textAnchor="middle">
                      2027
                    </text>
                    <text x="275" y="165" fontSize="10" fill="#9ca3af" textAnchor="middle">
                      2028
                    </text>
                    <text x="350" y="165" fontSize="10" fill="#9ca3af" textAnchor="middle">
                      2029
                    </text>

                    {/* Barras de ingresos */}
                    <rect x="65" y="130" width="20" height="20" fill="#6b7280" />
                    <rect x="140" y="100" width="20" height="50" fill="#6b7280" />
                    <rect x="215" y="60" width="20" height="90" fill="#6b7280" />
                    <rect x="290" y="30" width="20" height="120" fill="#6b7280" />

                    {/* Línea de valoración */}
                    <path
                      d="M75,120 L150,80 L225,40 L300,10"
                      stroke="#ef4444"
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                    <circle cx="75" cy="120" r="4" fill="#ef4444" />
                    <circle cx="150" cy="80" r="4" fill="#ef4444" />
                    <circle cx="225" cy="40" r="4" fill="#ef4444" />
                    <circle cx="300" cy="10" r="4" fill="#ef4444" />

                    {/* Leyenda */}
                    <rect x="50" y="10" width="10" height="10" fill="#6b7280" />
                    <text x="65" y="18" fontSize="10" fill="#9ca3af">
                      Revenue
                    </text>
                    <line x1="120" y1="15" x2="140" y2="15" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" />
                    <circle cx="130" cy="15" r="3" fill="#ef4444" />
                    <text x="145" y="18" fontSize="10" fill="#9ca3af">
                      Valuation
                    </text>
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 mb-3">
                <div className="bg-gray-900 p-2 rounded-lg text-center">
                  <p className="text-xs font-medium text-white">2025</p>
                  <p className="text-sm font-medium text-gray-300">€2.5M</p>
                  <p className="text-[10px] text-gray-500">ARR</p>
                  <p className="text-xs font-medium text-red-500">€15M</p>
                  <p className="text-[10px] text-gray-500">Valuation</p>
                </div>
                <div className="bg-gray-900 p-2 rounded-lg text-center">
                  <p className="text-xs font-medium text-white">2026</p>
                  <p className="text-sm font-medium text-gray-300">€8M</p>
                  <p className="text-[10px] text-gray-500">ARR</p>
                  <p className="text-xs font-medium text-red-500">€60M</p>
                  <p className="text-[10px] text-gray-500">Valuation</p>
                </div>
                <div className="bg-gray-900 p-2 rounded-lg text-center">
                  <p className="text-xs font-medium text-white">2027</p>
                  <p className="text-sm font-medium text-gray-300">€25M</p>
                  <p className="text-[10px] text-gray-500">ARR</p>
                  <p className="text-xs font-medium text-red-500">€250M</p>
                  <p className="text-[10px] text-gray-500">Valuation</p>
                </div>
                <div className="bg-gray-900 p-2 rounded-lg text-center">
                  <p className="text-xs font-medium text-white">2029</p>
                  <p className="text-sm font-medium text-gray-300">€100M+</p>
                  <p className="text-[10px] text-gray-500">ARR</p>
                  <p className="text-xs font-medium text-red-500">€1B+</p>
                  <p className="text-[10px] text-gray-500">Valuation</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-800 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-up text-gray-300"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    <span className="font-medium text-white">Projected ROI for strategic partners:</span> 25-30x in 5
                    years, based on industry valuation multiples
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-800 p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-arrow-up text-gray-300"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                      />
                    </svg>
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    <span className="font-medium text-white">Valuation multiples:</span> 7-10x ARR, consistent with
                    current valuations in the TravelTech/SaaS sector
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black p-4 rounded-xl border border-gray-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <CurrencyDollar className="h-5 w-5 text-gray-300" weight="fill" />
                </div>
                <h4 className="text-lg font-medium text-white">Comparison with industry successes</h4>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-900 p-3 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trophy-fill text-gray-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.078-.046 1.617C11.789 3.236 10.432 3 8 3c-1.432 0-2.789.236-3.454 2.117A.5.5 0 0 1 6.5 6h-1a.5.5 0 0 1-.5-.5c0-1.916.875-3.057 2.107-3.476C5.124 1.079 5 1.618 5 .5a.5.5 0 0 1 .5-.5z" />
                        <path d="M15 2.5a.5.5 0 0 1-.5.5h-1.132c.94-.576 1.78-1.189 2.689-1.856A.5.5 0 0 1 15 2.5zM1.132 3H.5a.5.5 0 0 1 .488-.876c.909.667 1.749 1.28 2.689 1.856H1.5a.5.5 0 0 1-.368-.5z" />
                        <path d="M1.5 5.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4z" />
                        <path d="M2.2 10.5c0 .58.462 1 1.042 1h9.516a1 1 0 0 1 1.042-1H2.2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Navan (formerly TripActions)</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div>
                          <p className="text-xs font-medium text-gray-300">Initial valuation</p>
                          <p className="text-xs font-light text-gray-400">$14M (2016)</p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-up text-gray-300"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                          />
                        </svg>
                        <div>
                          <p className="text-xs font-medium text-gray-300">Current valuation</p>
                          <p className="text-xs font-light text-gray-400">$9.2B (2025)</p>
                        </div>
                      </div>
                      <p className="text-xs font-light mt-1 text-gray-400">
                        <span className="font-medium text-white">ROI for seed investors:</span> ~40x in 6 years
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 p-3 rounded-xl">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trophy-fill text-gray-300"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.078-.046 1.617C11.789 3.236 10.432 3 8 3c-1.432 0-2.789.236-3.454 2.117A.5.5 0 0 1 6.5 6h-1a.5.5 0 0 1-.5-.5c0-1.916.875-3.057 2.107-3.476C5.124 1.079 5 1.618 5 .5a.5.5 0 0 1 .5-.5z" />
                        <path d="M15 2.5a.5.5 0 0 1-.5.5h-1.132c.94-.576 1.78-1.189 2.689-1.856A.5.5 0 0 1 15 2.5zM1.132 3H.5a.5.5 0 0 1 .488-.876c.909.667 1.749 1.28 2.689 1.856H1.5a.5.5 0 0 1-.368-.5z" />
                        <path d="M1.5 5.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-4z" />
                        <path d="M2.2 10.5c0 .58.462 1 1.042 1h9.516a1 1 0 0 1 1.042-1H2.2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">TravelPerk</p>
                      <div className="flex items-center gap-2 mt-1">
                        <div>
                          <p className="text-xs font-medium text-gray-300">Initial valuation</p>
                          <p className="text-xs font-light text-gray-400">€8M (2015)</p>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-arrow-up text-gray-300"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                          />
                        </svg>
                        <div>
                          <p className="text-xs font-medium text-gray-300">Current valuation</p>
                          <p className="text-xs font-light text-gray-400">€1.3B (2025)</p>
                        </div>
                      </div>
                      <p className="text-xs font-light mt-1 text-gray-400">
                        <span className="font-medium text-white">ROI for seed investors:</span> ~25x in 7 years
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-black text-white p-6 rounded-xl">
              <h4 className="text-2xl font-bold mb-4 text-center">Current Valuation</h4>
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <p className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-2">€8M</p>
                  <p className="text-lg font-medium">Pre-money</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-3 rounded-xl text-center">
                  <p className="text-xl font-medium">€600K - €1.2M</p>
                  <p className="text-sm">Accepting in this round</p>
                </div>
                <div className="bg-white/10 p-3 rounded-xl text-center">
                  <p className="text-xl font-medium">7.5-15% Equity</p>
                  <p className="text-sm">Expected dilution</p>
                </div>
              </div>
              <p className="text-sm text-center mt-6">Strategic partners welcome</p>
            </div>

            <div className="bg-black p-4 rounded-xl border border-gray-800 shadow-sm">
              <h4 className="text-lg font-medium mb-3 text-white">Strategic partner benefits</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-800 p-1">
                    <Rocket className="h-3.5 w-3.5 text-gray-300" weight="fill" />
                  </div>
                  <p className="text-sm font-medium text-white">Preferential terms</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-800 p-1">
                    <Rocket className="h-3.5 w-3.5 text-gray-300" weight="fill" />
                  </div>
                  <p className="text-sm font-medium text-white">Strategic participation</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-800 p-1">
                    <Rocket className="h-3.5 w-3.5 text-gray-300" weight="fill" />
                  </div>
                  <p className="text-sm font-medium text-white">Early liquidity options</p>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-800 p-1">
                    <Rocket className="h-3.5 w-3.5 text-gray-300" weight="fill" />
                  </div>
                  <p className="text-sm font-medium text-white">Exposure to disruptive technology</p>
                </li>
              </ul>
            </div>

            <div className="bg-black p-4 rounded-xl border border-gray-800 shadow-sm">
              <h4 className="text-lg font-medium mb-3 text-white">Partner criteria</h4>
              <div className="space-y-3">
                <div className="bg-gray-900 p-3 rounded-lg">
                  <p className="text-sm font-medium mb-1 text-white">Strategic value</p>
                  <p className="text-xs font-light text-gray-400">
                    Partners who bring industry connections, market access, or technical expertise beyond capital
                  </p>
                </div>
                <div className="bg-gray-900 p-3 rounded-lg">
                  <p className="text-sm font-medium mb-1 text-white">Long-term vision</p>
                  <p className="text-xs font-light text-gray-400">
                    Alignment with our mission to transform corporate travel with AI technology
                  </p>
                </div>
                <div className="bg-gray-900 p-3 rounded-lg">
                  <p className="text-sm font-medium mb-1 text-white">Selective process</p>
                  <p className="text-xs font-light text-gray-400">
                    Limited partnership slots available - by invitation or referral only
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
