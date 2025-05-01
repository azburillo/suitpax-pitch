"use client"

import { motion } from "framer-motion"
import { ChartPie, Calendar, Target, Rocket, Warning, CheckCircle } from "@phosphor-icons/react"

export default function FundingUseSection() {
  return (
    <motion.section
      id="funding-use"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        USE OF FUNDS
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Detailed investment plan
      </h2>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <ChartPie className="h-5 w-5 text-emerald-950" weight="fill" />
          <h3 className="text-lg font-medium">Current situation and seed capital</h3>
        </div>
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm mb-4">
          <div className="grid md:grid-cols-3 gap-3">
            <div>
              <p className="text-sm font-medium mb-1">Founders' investment</p>
              <p className="text-xl font-medium tracking-tighter text-emerald-950">€20,000</p>
              <p className="text-xs font-light text-gray-700">Initial capital contributed</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Target round</p>
              <p className="text-xl font-medium tracking-tighter text-emerald-950">€3.5M</p>
              <p className="text-xs font-light text-gray-700">Seed for 24 months runway</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Valuation</p>
              <p className="text-xl font-medium tracking-tighter text-emerald-950">€12M</p>
              <p className="text-xs font-light text-gray-700">Pre-money</p>
            </div>
          </div>
        </div>

        <p className="text-sm font-light text-gray-700 mb-4">
          To date, founders Alberto Zurano and Alexis Sanz have invested €20,000 of their own capital. Alberto has led
          all technical and technological development (AI, backend, database), while Alexis has managed operations, VC
          contacts, and strategic partnerships. The €3.5M seed round will allow us to accelerate development, expand the
          team, and prepare for launch in Q2 2025.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5 text-emerald-950" weight="fill" />
            <h3 className="text-lg font-medium">Breakdown by department and quarter</h3>
          </div>

          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Product and AI development</p>
                  <p className="text-sm font-medium">€1,575,000 (45%)</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
                <div className="grid grid-cols-4 gap-1 mt-2">
                  <div>
                    <p className="text-xs font-medium">Q2 2025</p>
                    <p className="text-xs font-light">€375K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q3 2025</p>
                    <p className="text-xs font-light">€400K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q4 2025</p>
                    <p className="text-xs font-light">€450K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q1 2026</p>
                    <p className="text-xs font-light">€350K</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Sales and marketing</p>
                  <p className="text-sm font-medium">€1,050,000 (30%)</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "30%" }}></div>
                </div>
                <div className="grid grid-cols-4 gap-1 mt-2">
                  <div>
                    <p className="text-xs font-medium">Q2 2025</p>
                    <p className="text-xs font-light">€150K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q3 2025</p>
                    <p className="text-xs font-light">€200K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q4 2025</p>
                    <p className="text-xs font-light">€300K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q1 2026</p>
                    <p className="text-xs font-light">€400K</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">International expansion (USA)</p>
                  <p className="text-sm font-medium">€525,000 (15%)</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "15%" }}></div>
                </div>
                <div className="grid grid-cols-4 gap-1 mt-2">
                  <div>
                    <p className="text-xs font-medium">Q2 2025</p>
                    <p className="text-xs font-light">€50K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q3 2025</p>
                    <p className="text-xs font-light">€75K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q4 2025</p>
                    <p className="text-xs font-light">€150K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q1 2026</p>
                    <p className="text-xs font-light">€250K</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Operations and general expenses</p>
                  <p className="text-sm font-medium">€350,000 (10%)</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "10%" }}></div>
                </div>
                <div className="grid grid-cols-4 gap-1 mt-2">
                  <div>
                    <p className="text-xs font-medium">Q2 2025</p>
                    <p className="text-xs font-light">€75K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q3 2025</p>
                    <p className="text-xs font-light">€75K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q4 2025</p>
                    <p className="text-xs font-light">€100K</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium">Q1 2026</p>
                    <p className="text-xs font-light">€100K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Target className="h-5 w-5 text-emerald-950" weight="fill" />
            <h3 className="text-lg font-medium">Key milestones by investment tranche</h3>
          </div>

          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm mb-4">
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tranche 1: €1M (Q3 2024)</p>
                  <ul className="text-xs font-light space-y-1 mt-1">
                    <li>• Hiring of Founding AI Engineer and 2 senior developers</li>
                    <li>• Improvement of tech stack with premium API plans and cloud services</li>
                    <li>• Development of advanced MVP with core functionalities</li>
                    <li>• Establishment of first contacts in the USA</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tranche 2: €1.5M (Q4 2024 - Q1 2025)</p>
                  <ul className="text-xs font-light space-y-1 mt-1">
                    <li>• Team expansion: 3 AI engineers, 2 frontend developers, 1 UX/UI</li>
                    <li>• Intensive investment in proprietary AI model training</li>
                    <li>• Beta program with 20 companies and feedback cycle</li>
                    <li>• Establishment of virtual office in the USA and first hires</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Tranche 3: €1M (Q2 2025)</p>
                  <ul className="text-xs font-light space-y-1 mt-1">
                    <li>• Hiring of sales and marketing team (5 people)</li>
                    <li>• Launch campaign in Europe and USA</li>
                    <li>• Development of integrations with major travel providers</li>
                    <li>• Implementation of scalable infrastructure to support growth</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <Rocket className="h-5 w-5 text-emerald-950" weight="fill" />
            <h3 className="text-lg font-medium">Runway and contingency plan</h3>
          </div>

          <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
            <div className="mb-3">
              <p className="text-sm font-medium mb-1">Projected runway</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
                <p className="text-xs font-medium">24 months</p>
              </div>
              <p className="text-xs font-light text-gray-700 mt-1">Average monthly burn rate: €145K</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">Contingency plan</p>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Warning className="h-4 w-4 text-amber-500" />
                </div>
                <p className="text-xs font-light">
                  <span className="font-medium">Conservative scenario:</span> 20% reduction in marketing and
                  international expansion expenses, extending runway to 30 months
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Warning className="h-4 w-4 text-amber-500" />
                </div>
                <p className="text-xs font-light">
                  <span className="font-medium">Prioritization:</span> Focus on European market before USA expansion if
                  necessary
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 flex-shrink-0">
                  <Warning className="h-4 w-4 text-amber-500" />
                </div>
                <p className="text-xs font-light">
                  <span className="font-medium">Freemium model:</span> Implementation of a free basic version to
                  accelerate adoption if the sales cycle is longer than expected
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl">
        <h3 className="text-lg font-medium mb-3 text-center">Key hires</h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm font-medium mb-2 text-emerald-950">Founding AI Engineer</p>
            <p className="text-xs font-light mb-2">
              Expert in generative AI with experience in NLP and recommendation systems. Will lead the development of
              our proprietary AI agents.
            </p>
            <div className="text-xs">
              <p className="font-medium">Timing: Q2 2025</p>
              <p className="font-light text-gray-500">Budget: €150K/year</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm font-medium mb-2 text-emerald-950">US Market Lead</p>
            <p className="text-xs font-light mb-2">
              Professional with experience in the US corporate travel market. Will establish our presence and first
              strategic alliances.
            </p>
            <div className="text-xs">
              <p className="font-medium">Timing: Q4 2025</p>
              <p className="font-light text-gray-500">Budget: €120K/year</p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
            <p className="text-sm font-medium mb-2 text-emerald-950">Head of Growth</p>
            <p className="text-xs font-light mb-2">
              B2B customer acquisition specialist with SaaS experience. Will design and implement our growth strategy
              for launch.
            </p>
            <div className="text-xs">
              <p className="font-medium">Timing: Q4 2025</p>
              <p className="font-light text-gray-500">Budget: €110K/year</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
