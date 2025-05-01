"use client"

import { motion } from "framer-motion"

export default function VisionSection() {
  return (
    <motion.section
      id="vision"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        VISION
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Transforming corporate travel management with AI
      </h2>
      <p className="text-sm sm:text-base font-light text-gray-700 mb-4 sm:mb-6">
        In 2025, companies continue to face significant challenges in corporate travel management. According to a recent
        Deloitte study, 78% of companies report inefficiencies in their booking and management processes, resulting in
        15-20% cost overruns and a fragmented experience for employees. The lack of real-time visibility and the
        complexity of travel policies exacerbate these problems.
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          Inefficient processes
        </span>
        <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          High costs
        </span>
        <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          Fragmented experience
        </span>
        <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          Lack of visibility
        </span>
        <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          Regulatory complexity
        </span>
      </div>
    </motion.section>
  )
}
