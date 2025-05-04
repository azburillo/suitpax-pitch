"use client"

import { motion } from "framer-motion"
import { Shield, Lifebuoy, Users, Globe, Warning } from "@phosphor-icons/react"

export default function CrisisManagementSection() {
  return (
    <motion.section
      id="crisis-management"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        CRISIS MANAGEMENT
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        24/7 global support and risk mitigation
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Shield className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Risk assessment and monitoring
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Globe className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Real-time monitoring</span> of global events and travel advisories
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Shield className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Automated risk scoring</span> for destinations and travel plans
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Warning className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Proactive alerts</span> to travelers and travel managers about potential
                  risks
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Lifebuoy className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              24/7 global support
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Users className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Multilingual support team</span> available around the clock
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Lifebuoy className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Emergency assistance</span> for medical, security, and travel-related
                  issues
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Shield className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Evacuation and repatriation</span> services in crisis situations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
