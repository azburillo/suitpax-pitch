"use client"

import { motion } from "framer-motion"
import { Check, Globe, Server } from "lucide-react"
import {
  SiUnitedairlines,
  SiBritishairways,
  SiLufthansa,
  SiAmericanairlines,
  SiSouthwestairlines,
  SiDelta,
  SiAirfrance,
  SiQatarairways,
  SiEmirates,
  SiAircanada,
} from "simple-icons/icons"

// Helper component to render SimpleIcons
const SimpleIcon = ({ icon, title }: { icon: any; title: string }) => {
  return (
    <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
      <svg
        role="img"
        viewBox="0 0 24 24"
        className="h-6 w-6 text-gray-700"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title}</title>
        <path d={icon.path} />
      </svg>
    </div>
  )
}

export default function ApiIntegrationsSection() {
  return (
    <motion.section
      id="api-integrations"
      className="bg-gray-100 p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="inline-flex items-center rounded-xl bg-black px-2.5 py-0.5 text-[10px] font-medium text-white mb-3 sm:mb-4">
        API INTEGRATIONS
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4 text-gray-900">
        Connected with 400+ Global Airlines
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm sm:text-base font-light text-gray-700 mb-4">
            Our platform integrates directly with APIs from the world's leading airlines, providing real-time access to
            availability, pricing, and booking options for corporate travel.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-black p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-800">Real-time availability and dynamic pricing</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-black p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-800">Automated booking management and changes</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-black p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-800">Integration with corporate travel policies</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-black p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-800">Real-time route and cost optimization</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-900">400+</p>
              <p className="text-xs text-gray-600 text-center">Integrated airlines</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-900">99.8%</p>
              <p className="text-xs text-gray-600 text-center">Uptime</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-900">180+</p>
              <p className="text-xs text-gray-600 text-center">Countries covered</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
              <Server className="h-3 w-3 mr-1" /> REST API
            </div>
            <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
              <Globe className="h-3 w-3 mr-1" /> GraphQL
            </div>
            <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
              Webhooks
            </div>
            <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
              SDK
            </div>
            <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
              OAuth 2.0
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium mb-3 text-gray-900">Key Airline Integrations</h3>
            <div className="grid grid-cols-5 gap-3">
              {/* Airline logos using SimpleIcons */}
              <SimpleIcon icon={SiUnitedairlines} title="United Airlines" />
              <SimpleIcon icon={SiBritishairways} title="British Airways" />
              <SimpleIcon icon={SiLufthansa} title="Lufthansa" />
              <SimpleIcon icon={SiAmericanairlines} title="American Airlines" />
              <SimpleIcon icon={SiSouthwestairlines} title="Southwest Airlines" />
              <SimpleIcon icon={SiDelta} title="Delta Airlines" />
              <SimpleIcon icon={SiAirfrance} title="Air France" />
              <SimpleIcon icon={SiQatarairways} title="Qatar Airways" />
              <SimpleIcon icon={SiEmirates} title="Emirates" />
              <SimpleIcon icon={SiAircanada} title="Air Canada" />
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">And 390+ more airlines worldwide</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium mb-3 text-gray-900">Global Business Destinations</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                New York
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                London
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Tokyo
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Singapore
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Dubai
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Hong Kong
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Frankfurt
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Paris
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                San Francisco
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Sydney
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Shanghai
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Toronto
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Mumbai
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                São Paulo
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Berlin
              </div>
              <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
                Amsterdam
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Comprehensive coverage of business travel routes worldwide
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
