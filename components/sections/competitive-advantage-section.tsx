"use client"

import { motion } from "framer-motion"
import { Shield, Database, Network, Lock, Brain } from "@phosphor-icons/react"
import Image from "next/image"

export default function CompetitiveAdvantageSection() {
  return (
    <motion.section
      id="competitive-advantage"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          DEFENSIBLE COMPETITIVE MOATS
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-4 sm:mb-6">
        Building insurmountable competitive advantages
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Proprietary Data Advantages */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
          <div className="flex items-start gap-3 mb-4">
            <div className="mt-1 rounded-full bg-blue-700 p-2 flex-shrink-0">
              <Database className="h-5 w-5 text-white" weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-medium tracking-tighter mb-2">Proprietary Data Moat</h3>
              <p className="text-sm font-light text-gray-700 mb-3">
                Every transaction creates unique insights that improve our AI and make switching increasingly costly
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">8.3M+ Travel Transactions</h4>
              <p className="text-xs text-gray-600">
                Proprietary dataset training our AI models with real corporate travel patterns
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">Behavioral Learning Engine</h4>
              <p className="text-xs text-gray-600">
                AI learns company-specific preferences, policies, and optimization opportunities
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">Predictive Analytics</h4>
              <p className="text-xs text-gray-600">
                Forecasts travel costs, identifies savings opportunities, prevents policy violations
              </p>
            </div>
          </div>
        </div>

        {/* Network Effects */}
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 rounded-xl border border-emerald-200">
          <div className="flex items-start gap-3 mb-4">
            <div className="mt-1 rounded-full bg-emerald-950 p-2 flex-shrink-0">
              <Network className="h-5 w-5 text-white" weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-medium tracking-tighter mb-2">Network Effects</h3>
              <p className="text-sm font-light text-gray-700 mb-3">
                More customers = better rates, more data, stronger AI = higher value for everyone
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">Supplier Negotiation Power</h4>
              <p className="text-xs text-gray-600">
                Aggregate booking volume unlocks exclusive rates and inventory access
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">Data Network Effects</h4>
              <p className="text-xs text-gray-600">
                More users = more data = smarter AI = better recommendations for all
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">Ecosystem Lock-in</h4>
              <p className="text-xs text-gray-600">
                Integrated travel + expense + AI creates switching costs and stickiness
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* IP Protection & Switching Costs */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200">
          <div className="flex items-start gap-3 mb-4">
            <div className="mt-1 rounded-full bg-purple-700 p-2 flex-shrink-0">
              <Lock className="h-5 w-5 text-white" weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-medium tracking-tighter mb-2">IP Protection Strategy</h3>
              <p className="text-sm font-light text-gray-700 mb-3">
                Building patent portfolio around core AI innovations and travel optimization algorithms
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">AI Algorithm Patents (Filing)</h4>
              <p className="text-xs text-gray-600">
                Travel optimization, dynamic pricing, and policy compliance algorithms
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">Trade Secrets</h4>
              <p className="text-xs text-gray-600">
                Proprietary training datasets, model architectures, and optimization techniques
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">First-Mover Advantage</h4>
              <p className="text-xs text-gray-600">
                16-month head start in AI-native corporate travel platform development
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-xl border border-amber-200">
          <div className="flex items-start gap-3 mb-4">
            <div className="mt-1 rounded-full bg-amber-600 p-2 flex-shrink-0">
              <Shield className="h-5 w-5 text-white" weight="fill" />
            </div>
            <div>
              <h3 className="text-lg font-medium tracking-tighter mb-2">High Switching Costs</h3>
              <p className="text-sm font-light text-gray-700 mb-3">
                Multiple layers of integration and customization make switching increasingly difficult
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">Data Integration Complexity</h4>
              <p className="text-xs text-gray-600">
                Deep ERP, HR, and financial system integrations create technical switching costs
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">Workflow Dependencies</h4>
              <p className="text-xs text-gray-600">
                Custom policies, approval workflows, and reporting become business-critical
              </p>
            </div>
            <div className="bg-white/70 p-3 rounded-lg">
              <h4 className="text-sm font-medium mb-1">Learning Curve Investment</h4>
              <p className="text-xs text-gray-600">
                AI learns company patterns over time, making replacement solutions less effective
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Moat Timeline */}
      <div className="mt-6 bg-black/90 backdrop-blur-md p-4 rounded-xl border border-white/10 text-white">
        <div className="flex items-center gap-2 mb-4">
          <Brain className="h-5 w-5 text-emerald-400" weight="fill" />
          <h3 className="text-lg font-medium">Moat Strengthening Timeline</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-white/10 p-3 rounded-lg">
            <h4 className="text-sm font-medium mb-2 text-emerald-400">Year 1 (2025)</h4>
            <ul className="text-xs space-y-1 text-white/70">
              <li>• Data accumulation begins</li>
              <li>• Initial AI training</li>
              <li>• Core patents filed</li>
              <li>• Customer integrations</li>
            </ul>
          </div>
          <div className="bg-white/10 p-3 rounded-lg">
            <h4 className="text-sm font-medium mb-2 text-blue-400">Year 2 (2026)</h4>
            <ul className="text-xs space-y-1 text-white/70">
              <li>• Network effects emerge</li>
              <li>• Supplier partnerships</li>
              <li>• Advanced AI features</li>
              <li>• High switching costs</li>
            </ul>
          </div>
          <div className="bg-white/10 p-3 rounded-lg">
            <h4 className="text-sm font-medium mb-2 text-purple-400">Year 3 (2027)</h4>
            <ul className="text-xs space-y-1 text-white/70">
              <li>• Market leadership</li>
              <li>• Patent protection</li>
              <li>• Ecosystem lock-in</li>
              <li>• Predictive capabilities</li>
            </ul>
          </div>
          <div className="bg-white/10 p-3 rounded-lg">
            <h4 className="text-sm font-medium mb-2 text-amber-400">Year 4+ (2028+)</h4>
            <ul className="text-xs space-y-1 text-white/70">
              <li>• Insurmountable moats</li>
              <li>• Global network effects</li>
              <li>• AI superiority</li>
              <li>• Market dominance</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
