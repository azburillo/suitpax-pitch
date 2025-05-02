"use client"

import { motion } from "framer-motion"
import { SiProducthunt } from "react-icons/si" // Changed from simple-icons-react to react-icons/si

export default function MarketVoicesSection() {
  return (
    <motion.section
      id="market-voices"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        MARKET RECOGNITION
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Industry recognition
      </h2>

      <div className="mt-6 bg-gray-200 text-black p-4 rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center mb-3">
            <SiProducthunt className="w-7 h-7 text-[#FF6154]" />
            <h3 className="text-base font-medium tracking-tighter ml-2">Top 10 of the day on Product Hunt</h3>
          </div>
          <p className="text-xs font-light tracking-tighter text-center mb-3">
            Suitpax was featured in the Top 10 Products of the day on Product Hunt, receiving overwhelming positive
            feedback from the tech community.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium bg-black/10 px-2 py-1 rounded-full">80+ upvotes</span>
            <span className="text-xs font-medium bg-black/10 px-2 py-1 rounded-full">Featured</span>
            <span className="text-xs font-medium bg-black/10 px-2 py-1 rounded-full">Organic</span>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
