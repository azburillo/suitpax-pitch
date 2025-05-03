"use client"

import { motion } from "framer-motion"
import AIAgentsInteractiveShowcase from "@/components/ai-agents-interactive-showcase"

export default function AIAgentsSection() {
  return (
    <motion.section
      id="ai-agents"
      className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="inline-flex items-center rounded-xl bg-emerald-950 px-2.5 py-0.5 text-[10px] font-medium text-white mb-3 sm:mb-4">
        AI AGENTS
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4 text-gray-900">
        Specialized AI Agents for Every Business Travel Need
      </h2>

      <p className="text-sm sm:text-base font-light text-gray-700 mb-6">
        Our AI agents are designed to handle specific aspects of business travel, from booking to expense management,
        each trained on company policies and traveler preferences.
      </p>

      <AIAgentsInteractiveShowcase />
    </motion.section>
  )
}
