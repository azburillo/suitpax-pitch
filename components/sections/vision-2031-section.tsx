"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Clock, Globe, Lightbulb, Target, TrendingUp } from "lucide-react"

export default function Vision2031Section() {
  return (
    <motion.section
      id="vision-2031"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        VISION 2031
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Our five-year roadmap to transform the industry
      </h2>

      <div className="space-y-6">
        {/* Vision Card 1 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-[40px] bottom-0 w-[2px] bg-gray-200"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-950 text-white">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Global Expansion</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-950" />
                  </div>
                  <p className="text-sm font-light">
                    Presence in 50+ countries with localized AI agents that understand regional nuances
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-950" />
                  </div>
                  <p className="text-sm font-light">Support for 20+ languages and regional travel regulations</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-950" />
                  </div>
                  <p className="text-sm font-light">
                    Strategic partnerships with local travel providers in each market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card 2 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-950 text-white">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Market Leadership</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-950" />
                  </div>
                  <p className="text-sm font-light">
                    Capturing 15% of the global corporate travel market with our AI-first approach
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-950" />
                  </div>
                  <p className="text-sm font-light">Recognized as the #1 AI travel platform for enterprises</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-950" />
                  </div>
                  <p className="text-sm font-light">Strategic acquisitions of complementary travel tech startups</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card 3 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-emerald-950 text-white">
              <Lightbulb className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Innovation Hub</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-950" />
                  </div>
                  <p className="text-sm font-light">
                    Establishing an AI research center focused on next-generation travel technologies
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-950" />
                  </div>
                  <p className="text-sm font-light">Partnerships with leading universities for travel AI research</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-emerald-950" />
                  </div>
                  <p className="text-sm font-light">Annual innovation summit bringing together travel and AI leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card 4 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-300 text-gray-700">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Sustainability Leader</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
                  </div>
                  <p className="text-sm font-light">Helping businesses reduce their travel carbon footprint by 40%</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
                  </div>
                  <p className="text-sm font-light">Proprietary sustainability scoring for all travel options</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
                  </div>
                  <p className="text-sm font-light">Automated carbon offset program integrated into booking process</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card 5 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-200"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-300 text-gray-700">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Real-time Adaptation</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
                  </div>
                  <p className="text-sm font-light">
                    AI systems that predict and respond to global events before disruptions occur
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
                  </div>
                  <p className="text-sm font-light">Automated rebooking and itinerary adjustments during disruptions</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
                  </div>
                  <p className="text-sm font-light">Proactive risk management system for corporate travel programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card 6 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 w-[2px] bg-gray-200"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-300 text-gray-700">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Industry Transformation</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
                  </div>
                  <p className="text-sm font-light">
                    Redefining how businesses approach travel with a fully integrated AI ecosystem
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
                  </div>
                  <p className="text-sm font-light">Setting new industry standards for travel management efficiency</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-200 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-700" />
                  </div>
                  <p className="text-sm font-light">
                    Recognized as the catalyst for digital transformation in corporate travel
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
