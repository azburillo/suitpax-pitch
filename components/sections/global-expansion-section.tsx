"use client"

import { motion } from "framer-motion"
import { Globe, Flag, Buildings, Users } from "@phosphor-icons/react"

export default function GlobalExpansionSection() {
  return (
    <motion.section
      id="global-expansion"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        GLOBAL EXPANSION
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Strategic international growth plan
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Globe className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Phased expansion strategy
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Phase 1: European expansion (Q3-Q4 2025)</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Initial focus on UK, Germany, France, Spain, and Netherlands</li>
                  <li>• Localization of platform in 5 languages</li>
                  <li>• Partnerships with European travel providers and TMCs</li>
                  <li>• Compliance with EU data protection and travel regulations</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Phase 2: North America (Q1-Q2 2026)</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• US and Canada market entry</li>
                  <li>• Strategic partnerships with major US airlines and hotel chains</li>
                  <li>• Integration with US-specific expense management systems</li>
                  <li>• Compliance with US business travel regulations</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Phase 3: Asia-Pacific (Q3-Q4 2026)</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Focus on Singapore, Japan, Australia, and Hong Kong</li>
                  <li>• Adaptation to regional travel preferences and business practices</li>
                  <li>• Partnerships with regional carriers and hospitality groups</li>
                  <li>• Compliance with diverse regulatory environments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Flag className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Market selection criteria
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Buildings className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Corporate travel volume</p>
                  <p className="text-xs font-light text-gray-700">
                    Markets with high business travel spending and significant mid-market presence
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Buildings className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Technology adoption</p>
                  <p className="text-xs font-light text-gray-700">
                    Regions with high SaaS adoption and openness to AI-powered solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Buildings className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Competitive landscape</p>
                  <p className="text-xs font-light text-gray-700">
                    Markets with fragmented solutions and limited AI-powered alternatives
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Buildings className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Regulatory environment</p>
                  <p className="text-xs font-light text-gray-700">
                    Regions with navigable compliance requirements and data protection frameworks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Global market opportunity</h3>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950">$1.9T</p>
                <p className="text-xs font-medium text-gray-500">Global corporate travel market (2025)</p>
              </div>
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950">$43B</p>
                <p className="text-xs font-medium text-gray-500">Travel management software market</p>
              </div>
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950">17.3%</p>
                <p className="text-xs font-medium text-gray-500">CAGR (2025-2030)</p>
              </div>
              <div>
                <p className="text-xl font-medium tracking-tighter text-emerald-950">82%</p>
                <p className="text-xs font-medium text-gray-500">Seeking AI travel solutions</p>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium">Europe</p>
                  <p className="text-xs font-medium">$580B (31%)</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "31%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium">North America</p>
                  <p className="text-xs font-medium">$650B (34%)</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "34%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium">Asia-Pacific</p>
                  <p className="text-xs font-medium">$520B (27%)</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "27%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-xs font-medium">Rest of World</p>
                  <p className="text-xs font-medium">$150B (8%)</p>
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                  <div className="bg-emerald-950 h-2 rounded-full" style={{ width: "8%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Users className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Localization strategy
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Product localization</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Full translation of UI and content in local languages</li>
                  <li>• Region-specific travel policies and compliance rules</li>
                  <li>• Local payment methods and currency handling</li>
                  <li>• Regional travel provider integrations</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Go-to-market approach</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Regional partnerships with established travel management companies</li>
                  <li>• Local sales and customer success teams in key markets</li>
                  <li>• Region-specific marketing campaigns and content</li>
                  <li>• Participation in local industry events and associations</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Operational infrastructure</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Regional data centers for compliance and performance</li>
                  <li>• 24/7 support coverage across all time zones</li>
                  <li>• Local legal entities and banking relationships</li>
                  <li>• Regional offices in key markets (virtual initially)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
