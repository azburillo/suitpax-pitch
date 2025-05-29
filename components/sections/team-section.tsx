"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LinkedinLogo } from "@phosphor-icons/react"

export default function TeamSection() {
  return (
    <motion.section
      id="team"
      className="bg-white/50 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2 py-0.5 text-[9px] font-medium text-gray-700 mb-2">
        TEAM
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-2">Why we built Suitpax?</h2>
      <p className="text-xs sm:text-sm font-light text-gray-700 mb-4">
        Our journey to revolutionize business travel and why we believe it's time for a change
      </p>

      <div className="grid md:grid-cols-2 gap-3 mb-4">
        {/* Alberto & Alexis - Combined smaller section */}
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex -space-x-3 rtl:space-x-reverse">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border-2 border-white">
                <Image
                  src="/alberto-zurano.webp"
                  alt="Alberto Zurano"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 border-2 border-white">
                <Image
                  src="/alexis-sanz.jpeg"
                  alt="Alexis Sanz"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 mb-1">
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-medium">Alberto Zurano</h3>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-emerald-950 transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedinLogo className="h-3 w-3" weight="fill" />
                  </a>
                </div>
                <span className="hidden xs:inline text-[10px] text-gray-400">|</span>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-medium">Alexis Sanz</h3>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-emerald-950 transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <LinkedinLogo className="h-3 w-3" weight="fill" />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-x-2 gap-y-1 mb-2">
                <p className="text-xs font-medium text-emerald-950">Founder & CEO</p>
                <span className="text-[10px] text-gray-400">|</span>
                <p className="text-xs font-medium text-emerald-950">Co-Founder & COO</p>
              </div>
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2 text-[10px]">
                <span className="font-light text-gray-600">ex-Aena (IBEX 35)</span>
                <span className="text-gray-400">|</span>
                <span className="font-light text-gray-600">ex-Factorial (Spanish Unicorn)</span>
              </div>

              <div className="bg-gray-50 p-2 rounded-lg mb-2 border-l-2 border-emerald-950">
                <p className="text-[10px] font-light italic text-gray-700">
                  "Together, we're committed to building a platform that doesn't just meet the needs of today's business
                  travelers but anticipates the challenges of tomorrow. Suitpax is more than a product—it's our vision
                  for the future of business travel."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Lukas - Smaller section */}
        <div className="bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-base font-medium">Lukas Hartridge</h3>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-950 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinLogo className="h-3.5 w-3.5" weight="fill" />
                </a>
              </div>
              <p className="text-xs font-medium text-emerald-950 mb-1 text-center sm:text-left">Engineering Manager</p>
              <div className="flex items-center gap-1 mb-2">
                <span className="text-xs font-light text-gray-600">ex-Cloudbeds</span>
                <span className="text-[10px] text-gray-400">|</span>
                <span className="text-xs font-light text-gray-600">Traveltech</span>
              </div>

              <div className="bg-gray-50 p-2 rounded-lg mb-2 border-l-2 border-emerald-950">
                <p className="text-xs font-light text-gray-700">
                  Led engineering teams at Cloudbeds, the #1 hotel Property Management System in the world. Expert in
                  distributed systems and travel industry integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-3 rounded-xl">
        <h3 className="text-sm font-medium mb-2">Hiring plan (2025-2026)</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          <div className="bg-white p-2 rounded-lg">
            <p className="text-xs font-medium mb-1">Engineering (7)</p>
            <ul className="text-[10px] font-light space-y-0.5">
              <li>• AI/ML Engineers (3)</li>
              <li>• Full-stack Devs (3)</li>
              <li>• DevOps (1)</li>
            </ul>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <p className="text-xs font-medium mb-1">Product (4)</p>
            <ul className="text-[10px] font-light space-y-0.5">
              <li>• Product Managers (2)</li>
              <li>• UX/UI Designers (2)</li>
            </ul>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <p className="text-xs font-medium mb-1">Go-to-Market (6)</p>
            <ul className="text-[10px] font-light space-y-0.5">
              <li>• Sales Reps (3)</li>
              <li>• Marketing (2)</li>
              <li>• Customer Success (1)</li>
            </ul>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <p className="text-xs font-medium mb-1">Operations (3)</p>
            <ul className="text-[10px] font-light space-y-0.5">
              <li>• Finance (1)</li>
              <li>• HR & Talent (1)</li>
              <li>• Legal & Compliance (1)</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
