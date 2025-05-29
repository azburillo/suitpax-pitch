"use client"

import { motion } from "framer-motion"
import { Users, Handshake, Target, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function CapTableSection() {
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

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3">Equal Partnership</h2>
      <p className="text-sm sm:text-base font-light text-gray-700 mb-6">
        50/50 ownership structure designed for long-term alignment and shared success
      </p>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Modern Ownership Visualization */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Current Ownership</h3>

          {/* Modern circular progress design */}
          <div className="relative w-48 h-48 mx-auto mb-6">
            {/* Background circle */}
            <div className="absolute inset-0 rounded-full border-8 border-gray-100"></div>

            {/* Alberto's half */}
            <div className="absolute inset-0 rounded-full border-8 border-transparent border-l-emerald-600 border-b-emerald-600 transform rotate-45"></div>

            {/* Alexis's half */}
            <div className="absolute inset-0 rounded-full border-8 border-transparent border-r-emerald-700 border-t-emerald-700 transform rotate-45"></div>

            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center bg-white rounded-full w-24 h-24 flex items-center justify-center shadow-sm">
                <div>
                  <div className="text-2xl font-bold text-gray-900">50/50</div>
                  <div className="text-xs text-gray-500">Equal</div>
                </div>
              </div>
            </div>
          </div>

          {/* Founders info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-600">
                <Image src="/alberto-zurano.webp" alt="Alberto Zurano" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Alberto Zurano</div>
                <div className="text-xs text-gray-500">Founder & CEO • 50%</div>
              </div>
              <div className="w-4 h-4 rounded-full bg-emerald-600"></div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-700">
                <Image src="/alexis-sanz.jpeg" alt="Alexis Sanz" fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Alexis Sanz</div>
                <div className="text-xs text-gray-500">Co-Founder & CTO • 50%</div>
              </div>
              <div className="w-4 h-4 rounded-full bg-emerald-700"></div>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Partnership Advantages</h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <Handshake className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">Equal Commitment</h4>
                <p className="text-xs text-gray-600">Both founders fully invested with equal skin in the game</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <Target className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">Aligned Incentives</h4>
                <p className="text-xs text-gray-600">Shared ownership ensures unified vision and decision-making</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <Users className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">Complementary Skills</h4>
                <p className="text-xs text-gray-600">Business leadership + technical expertise in perfect balance</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="h-4 w-4 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-medium text-sm mb-1">Long-term Stability</h4>
                <p className="text-xs text-gray-600">
                  Equal partnership reduces founder conflicts and ensures continuity
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Future Equity Planning */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-medium mb-4">Future Equity Strategy</h3>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-emerald-600 mb-1">15-20%</div>
              <div className="text-xs font-medium text-gray-700 mb-1">Employee Stock Option Pool</div>
              <div className="text-xs text-gray-500">For key hires and team growth</div>
            </div>

            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-emerald-600 mb-1">20-25%</div>
              <div className="text-xs font-medium text-gray-700 mb-1">Seed Round Allocation</div>
              <div className="text-xs text-gray-500">Strategic investors and advisors</div>
            </div>

            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-emerald-600 mb-1">55-65%</div>
              <div className="text-xs font-medium text-gray-700 mb-1">Founders Retention</div>
              <div className="text-xs text-gray-500">Maintaining control and alignment</div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-600">
            <p className="text-xs text-emerald-800">
              <strong>Strategic Approach:</strong> Our equal partnership provides a stable foundation for scaling.
              Future dilution will be shared proportionally, maintaining the 50/50 balance while bringing in strategic
              talent and capital to accelerate growth.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
