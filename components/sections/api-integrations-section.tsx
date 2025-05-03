"use client"

import { motion } from "framer-motion"
import { Check, Globe, Server } from "lucide-react"

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
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-700"
                  fill="currentColor"
                >
                  <title>United Airlines</title>
                  <path d="M22.814 5.054c-0.673 0.344-1.391 0.582-2.146 0.7-0.773-0.823-1.873-1.337-3.091-1.337-2.337 0-4.232 1.895-4.232 4.232 0 0.332 0.037 0.654 0.109 0.964-3.516-0.177-6.636-1.861-8.724-4.421-0.364 0.625-0.573 1.351-0.573 2.124 0 1.468 0.747 2.764 1.882 3.523-0.693-0.022-1.345-0.212-1.916-0.529-0 0.018-0 0.035-0 0.053 0 2.051 1.459 3.762 3.396 4.148-0.355 0.097-0.729 0.148-1.115 0.148-0.273 0-0.537-0.026-0.795-0.076 0.538 1.682 2.101 2.905 3.953 2.939-1.449 1.135-3.273 1.812-5.258 1.812-0.342 0-0.678-0.020-1.009-0.059 1.873 1.201 4.099 1.901 6.491 1.901 7.789 0 12.051-6.455 12.051-12.051 0-0.184-0.004-0.366-0.012-0.548 0.827-0.597 1.545-1.342 2.113-2.19-0.759 0.337-1.575 0.564-2.431 0.666 0.874-0.524 1.546-1.352 1.863-2.34-0.818 0.485-1.724 0.837-2.688 1.027z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-700"
                  fill="currentColor"
                >
                  <title>British Airways</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.012 5.25l-2.723 5.237h2.328l.383 1.263h-2.328l1.93 6h-2.25l-1.93-6H6.75l-.383-1.263h4.672L8.316 5.25h2.25l2.723 5.237L15.762 5.25h2.25z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-700"
                  fill="currentColor"
                >
                  <title>Lufthansa</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6a8.4 8.4 0 110 16.8 8.4 8.4 0 010-16.8zm-4.2 8.4h8.4v-1.2h-8.4v1.2z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-700"
                  fill="currentColor"
                >
                  <title>American Airlines</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.85 15.92H6.15c-.61 0-1.1-.5-1.1-1.1V9.19c0-.61.5-1.1 1.1-1.1h11.7c.61 0 1.1.5 1.1 1.1v5.62c0 .61-.5 1.1-1.1 1.1z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-700"
                  fill="currentColor"
                >
                  <title>Southwest Airlines</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13.5H6c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h12c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-700"
                  fill="currentColor"
                >
                  <title>Delta Airlines</title>
                  <path d="M12 0L0 12l12 12 12-12L12 0zm-2.5 6h5L19 16.5h-5L9.5 6z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-700"
                  fill="currentColor"
                >
                  <title>Air France</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.639 0 8.4 3.761 8.4 8.4 0 4.639-3.761 8.4-8.4 8.4-4.639 0-8.4-3.761-8.4-8.4 0-4.639 3.761-8.4 8.4-8.4zm-4.2 8.4h8.4v-1.2h-8.4v1.2z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-700"
                  fill="currentColor"
                >
                  <title>Qatar Airways</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c3.975 0 7.2 3.225 7.2 7.2s-3.225 7.2-7.2 7.2-7.2-3.225-7.2-7.2 3.225-7.2 7.2-7.2zm0 1.2c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-700"
                  fill="currentColor"
                >
                  <title>Emirates</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c3.975 0 7.2 3.225 7.2 7.2s-3.225 7.2-7.2 7.2-7.2-3.225-7.2-7.2 3.225-7.2 7.2-7.2zm-3.6 7.2h7.2v-1.2h-7.2v1.2z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-gray-700"
                  fill="currentColor"
                >
                  <title>Air Canada</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c3.975 0 7.2 3.225 7.2 7.2s-3.225 7.2-7.2 7.2-7.2-3.225-7.2-7.2 3.225-7.2 7.2-7.2zm-3.6 7.2l3.6-3.6 3.6 3.6-3.6 3.6-3.6-3.6z" />
                </svg>
              </div>
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
