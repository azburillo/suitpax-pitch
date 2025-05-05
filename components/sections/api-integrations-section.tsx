"use client"

import { motion } from "framer-motion"

export default function ApiIntegrationsSection() {
  return (
    <motion.section
      id="api-integrations"
      className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-0.5 text-[10px] font-medium text-gray-800 mb-3 sm:mb-4">
        API INTEGRATIONS
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-serif italic tracking-tight mb-3 sm:mb-4 text-gray-900">
        <span className="font-medium">Connected with</span> <span className="font-bold">400+ Global Airlines</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm sm:text-base font-light text-gray-700 mb-4 font-serif italic">
            Our platform integrates directly with APIs from the world's leading airlines, providing real-time access to
            availability, pricing, and booking options for corporate travel.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-gray-100 p-1">
                <span className="block h-2 w-2 rounded-full bg-gray-900"></span>
              </div>
              <p className="text-sm font-serif italic text-gray-800">Real-time availability and dynamic pricing</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-gray-100 p-1">
                <span className="block h-2 w-2 rounded-full bg-gray-900"></span>
              </div>
              <p className="text-sm font-serif italic text-gray-800">Automated booking management and changes</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-gray-100 p-1">
                <span className="block h-2 w-2 rounded-full bg-gray-900"></span>
              </div>
              <p className="text-sm font-serif italic text-gray-800">Integration with corporate travel policies</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-gray-100 p-1">
                <span className="block h-2 w-2 rounded-full bg-gray-900"></span>
              </div>
              <p className="text-sm font-serif italic text-gray-800">Real-time route and cost optimization</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-900 font-serif">400+</p>
              <p className="text-xs text-gray-600 text-center font-serif italic">Integrated airlines</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-900 font-serif">99.8%</p>
              <p className="text-xs text-gray-600 text-center font-serif italic">Uptime</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-900 font-serif">150+</p>
              <p className="text-xs text-gray-600 text-center font-serif italic">Countries covered</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
              REST API
            </div>
            <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
              GraphQL
            </div>
            <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
              Webhooks
            </div>
            <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
              SDK
            </div>
            <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
              OAuth 2.0
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-serif italic font-medium mb-3 text-gray-900">Global Business Destinations</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                New York
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Tokyo
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Singapore
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Dubai
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Hong Kong
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Frankfurt
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Paris
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Sydney
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Shanghai
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Toronto
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Mumbai
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                São Paulo
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Berlin
              </div>
              <div className="inline-flex items-center rounded-xl bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800">
                Amsterdam
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center font-serif italic">
              Comprehensive coverage of business travel routes worldwide
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-serif italic font-medium mb-3 text-gray-900">Integration Features</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-1 font-serif">Real-time Data</h4>
                <p className="text-xs text-gray-600 font-serif italic">
                  Live pricing and availability updates every 30 seconds
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-1 font-serif">Secure Authentication</h4>
                <p className="text-xs text-gray-600 font-serif italic">
                  Enterprise-grade security with OAuth 2.0 and JWT
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-1 font-serif">Webhooks</h4>
                <p className="text-xs text-gray-600 font-serif italic">
                  Event-driven notifications for real-time updates
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-1 font-serif">Rate Limiting</h4>
                <p className="text-xs text-gray-600 font-serif italic">
                  Intelligent throttling to ensure optimal performance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
