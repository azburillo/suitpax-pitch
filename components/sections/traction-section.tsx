"use client"

import { motion } from "framer-motion"
import { Users, Buildings, Globe, CheckCircle, Clock } from "@phosphor-icons/react"
import Image from "next/image"

export default function TractionSection() {
  return (
    <motion.section
      id="traction"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="flex items-center justify-center mb-4">
        <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={40} height={40} className="rounded-xl" />
      </div>

      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        EARLY TRACTION & VALIDATION
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Strong early validation with enterprise demand
      </h2>

      {/* Current Pilot Customers */}
      <div className="mb-6 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
          <CheckCircle className="h-5 w-5 text-emerald-600" weight="fill" />
          Active pilot customers
        </h3>
        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white p-3 rounded-lg border border-emerald-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                <Buildings className="h-4 w-4 text-emerald-600" weight="fill" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Actiu</h4>
                <p className="text-xs text-gray-600">Furniture Manufacturing</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs">
                <span className="font-medium">Size:</span> 1,200+ employees
              </p>
              <p className="text-xs">
                <span className="font-medium">Results:</span> 23% cost reduction
              </p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-emerald-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <Globe className="h-4 w-4 text-blue-600" weight="fill" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Juniper Networks</h4>
                <p className="text-xs text-gray-600">Technology/Networking</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs">
                <span className="font-medium">Size:</span> 10,000+ employees
              </p>
              <p className="text-xs">
                <span className="font-medium">Results:</span> 31% time savings
              </p>
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-emerald-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="h-4 w-4 text-purple-600" weight="fill" />
              </div>
              <div>
                <h4 className="text-sm font-medium">Aena</h4>
                <p className="text-xs text-gray-600">Airport Infrastructure</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs">
                <span className="font-medium">Size:</span> 8,500+ employees
              </p>
              <p className="text-xs">
                <span className="font-medium">Results:</span> 89% compliance improvement
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-3 rounded-lg border border-emerald-100">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium">Current metrics (4 active pilots)</h4>
            <div className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full">Q1 2025</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center">
              <p className="text-lg font-medium text-emerald-600">27%</p>
              <p className="text-xs text-gray-600">Average cost savings</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-emerald-600">85%</p>
              <p className="text-xs text-gray-600">Time efficiency gain</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-emerald-600">92%</p>
              <p className="text-xs text-gray-600">User satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-emerald-600">94%</p>
              <p className="text-xs text-gray-600">Policy compliance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Waiting List */}
      <div className="mb-6 bg-blue-50 p-4 rounded-xl border border-blue-200">
        <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
          <Clock className="h-5 w-5 text-blue-600" weight="fill" />
          Enterprise waiting list
        </h3>
        <div className="bg-white p-3 rounded-lg border border-blue-100">
          <div className="flex items-center justify-between mb-2">
            <div>
              <p className="text-2xl font-medium text-blue-600">25</p>
              <p className="text-sm text-gray-600">Companies waiting for access</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">Combined potential ARR</p>
              <p className="text-lg font-medium text-blue-600">€2.1M</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-xs">
            <div>
              <p className="font-medium">Size range:</p>
              <p className="text-gray-600">500-5,000 employees</p>
            </div>
            <div>
              <p className="font-medium">Industries:</p>
              <p className="text-gray-600">Tech, Manufacturing, Finance</p>
            </div>
            <div>
              <p className="font-medium">Avg. timeline:</p>
              <p className="text-gray-600">Q2-Q3 2025 rollout</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Key validation metrics</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Demo-to-pilot conversion</p>
                  <p className="text-sm font-medium">67%</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: "67%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Pilot retention rate</p>
                  <p className="text-sm font-medium">100%</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Expansion interest</p>
                  <p className="text-sm font-medium">75%</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Referral rate</p>
                  <p className="text-sm font-medium">50%</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-purple-600 h-1.5 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Growth trajectory</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Q2 2025</p>
                  <p className="text-sm font-medium">12 active customers</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Q4 2025</p>
                  <p className="text-sm font-medium">35 active customers</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Q2 2026</p>
                  <p className="text-sm font-medium">85 active customers</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "60%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Q4 2026</p>
                  <p className="text-sm font-medium">150 active customers</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-medium">Q4 2027</p>
                  <p className="text-sm font-medium">300+ customers</p>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded-full">
                  <div className="bg-emerald-950 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
