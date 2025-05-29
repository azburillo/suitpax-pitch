"use client"

import { motion } from "framer-motion"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
import { ArrowRight, Users, Clock, Calendar } from "lucide-react"

export default function CapTableSection() {
  // Current cap table data
  const currentCapTableData = [{ name: "Alberto Zurano", value: 100, color: "#047857" }]

  // Future cap table data (after vesting)
  const futureCapTableData = [
    { name: "Alberto Zurano", value: 50, color: "#047857" },
    { name: "Alexis Sanz", value: 50, color: "#059669" },
  ]

  return (
    <motion.section
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        OWNERSHIP STRUCTURE
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3">Aligned Incentives</h2>
      <p className="text-sm sm:text-base font-light text-gray-700 mb-6">
        Our ownership structure is designed to align incentives and drive long-term value creation
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Current Cap Table Visualization */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-medium mb-2">Current Capitalization</h3>
          <p className="text-xs text-gray-500 mb-4">As of May 2025</p>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={currentCapTableData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {currentCapTableData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} labelFormatter={(name) => `${name}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4">
            {currentCapTableData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <div className="text-xs">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-gray-500">{item.value}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Cap Table Visualization */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-medium mb-2">Target Capitalization</h3>
          <p className="text-xs text-gray-500 mb-4">After vesting completion</p>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={futureCapTableData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {futureCapTableData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} labelFormatter={(name) => `${name}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            {futureCapTableData.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <div className="text-xs">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-gray-500">{item.value}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vesting Schedule */}
        <div className="md:col-span-2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm mt-2">
          <h3 className="text-lg font-medium mb-4">Vesting Schedule</h3>

          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            {/* Timeline Points */}
            <div className="space-y-8">
              {/* Starting Point */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 w-3 h-3 bg-emerald-600 rounded-full transform -translate-x-1/2"></div>
                <div className="flex items-center mb-1">
                  <Calendar className="h-4 w-4 text-emerald-600 mr-2" />
                  <h4 className="text-sm font-medium">May 2025</h4>
                </div>
                <p className="text-xs text-gray-600">
                  Alberto Zurano: 100% ownership
                  <br />
                  Alexis Sanz: Vesting begins
                </p>
              </div>

              {/* 1 Year Cliff */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 w-3 h-3 bg-emerald-600 rounded-full transform -translate-x-1/2"></div>
                <div className="flex items-center mb-1">
                  <Clock className="h-4 w-4 text-emerald-600 mr-2" />
                  <h4 className="text-sm font-medium">May 2026 - 1 Year Cliff</h4>
                </div>
                <p className="text-xs text-gray-600">
                  Alberto Zurano: 75% ownership
                  <br />
                  Alexis Sanz: 25% ownership vested
                </p>
              </div>

              {/* Full Vesting */}
              <div className="relative pl-12">
                <div className="absolute left-2.5 w-3 h-3 bg-emerald-600 rounded-full transform -translate-x-1/2"></div>
                <div className="flex items-center mb-1">
                  <Clock className="h-4 w-4 text-emerald-600 mr-2" />
                  <h4 className="text-sm font-medium">May 2027 - Full Vesting</h4>
                </div>
                <p className="text-xs text-gray-600">
                  Alberto Zurano: 50% ownership
                  <br />
                  Alexis Sanz: 50% ownership fully vested
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Alignment */}
        <div className="md:col-span-2 bg-white p-5 rounded-xl border border-gray-100 shadow-sm mt-2">
          <h3 className="text-lg font-medium mb-4">Team Alignment</h3>

          <div className="space-y-4">
            <div className="bg-gray-50 p-3 rounded-lg border-l-2 border-emerald-950">
              <div className="flex items-center gap-2 mb-1.5">
                <Users className="h-3.5 w-3.5 text-emerald-950" />
                <span className="text-xs font-medium text-emerald-950">Founder Commitment</span>
              </div>
              <p className="text-xs font-light text-gray-700">
                Alberto currently holds 100% ownership of Suitpax, with a structured vesting agreement that will grant
                Alexis 50% ownership over a 2-year period. This arrangement includes a 1-year cliff where Alexis will
                vest 25% of the company, with the remaining 25% vesting monthly over the following year. This structure
                ensures long-term commitment while recognizing the contributions of both founders.
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border-l-2 border-emerald-950">
              <div className="flex items-center gap-2 mb-1.5">
                <Users className="h-3.5 w-3.5 text-emerald-950" />
                <span className="text-xs font-medium text-emerald-950">Future Equity Allocation</span>
              </div>
              <p className="text-xs font-light text-gray-700">
                Following our seed round, we plan to implement an ESOP (Employee Stock Option Pool) to attract and
                retain top talent. This will dilute both founders equally, maintaining their proportional ownership
                relationship while creating incentives for key team members.
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg border-l-2 border-emerald-950">
              <div className="flex items-center gap-2 mb-1.5">
                <ArrowRight className="h-3.5 w-3.5 text-emerald-950" />
                <span className="text-xs font-medium text-emerald-950">Key Team Addition</span>
              </div>
              <p className="text-xs font-light text-gray-700">
                Lukas Hartridge is currently managing his exit from Cloudbeds (the #1 hotel PMS platform globally) and
                has already collaborated with our team on backend development. Upon joining Suitpax full-time as
                Engineering Manager in Q3 2025, he will receive an equitable equity allocation from the ESOP to align
                his incentives with the company's success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
