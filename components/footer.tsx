"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      className="w-full py-6 bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="w-full max-w-[1920px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center gap-4">
          {/* Security Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-3">
            <div className="inline-flex items-center px-3 py-1 rounded-xl border border-black bg-transparent">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-black" />
              <span className="text-xs font-medium text-black">SOC2 Compliant</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-xl border border-black bg-transparent">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-black" />
              <span className="text-xs font-medium text-black">GDPR Compliant</span>
            </div>
            <div className="inline-flex items-center px-3 py-1 rounded-xl border border-black bg-transparent">
              <ShieldCheck className="w-4 h-4 mr-1.5 text-black" />
              <span className="text-xs font-medium text-black">CPA Compliant</span>
            </div>
          </div>

          {/* Copyright and Trademark */}
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium text-gray-500">© {currentYear} Suitpax. All rights reserved.</p>
            <p className="text-xs text-gray-400">Suitpax and Suitpax logo are registered trademarks of Suitpax, Inc.</p>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
