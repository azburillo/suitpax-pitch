"use client"

import { motion } from "framer-motion"
import { ChartLine, CurrencyDollar, Rocket } from "@phosphor-icons/react"

export default function InvestorROISection() {
  return (
    <motion.section
      id="investor-roi"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="inline-flex items-center rounded-xl bg-white/10 text-white px-2.5 py-0.5 text-[10px] font-medium mb-3 sm:mb-4">
        PARTNERSHIP VALUE
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4 text-white">
        Why partner with Suitpax
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="bg-black p-4 rounded-xl border border-gray-800 shadow-sm mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-10 w-10 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0">
                <ChartLine className="h-5 w-5 text-gray-300" weight="fill" />
              </div>
              <h3 className="text-lg font-medium text-white">
                Financial projection
                <br />& return
              </h3>
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
              <h3 className="text-lg font-medium text-white">Comparison with industry successes</h3>
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
            <h3 className="text-2xl font-bold mb-4 text-center">Current Valuation</h3>
            <div className="flex justify-center items-center">
              <div className="text-center">
                <p className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-2">€13M</p>
                <p className="text-lg font-medium">Pre-money</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-3 rounded-xl text-center">
                <p className="text-xl font-medium">€1.2M - €1.8M</p>
                <p className="text-sm">Accepting in this round</p>
              </div>
              <div className="bg-white/10 p-3 rounded-xl text-center">
                <p className="text-xl font-medium">8-11% Equity</p>
                <p className="text-sm">Expected dilution</p>
              </div>
            </div>
            <p className="text-sm text-center mt-6">Strategic partners welcome</p>
          </div>

          <div className="bg-black p-4 rounded-xl border border-gray-800 shadow-sm">
            <h3 className="text-lg font-medium mb-3 text-white">Strategic partner benefits</h3>
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
            <h3 className="text-lg font-medium mb-3 text-white">Partner criteria</h3>
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
    </motion.section>
  )
}
