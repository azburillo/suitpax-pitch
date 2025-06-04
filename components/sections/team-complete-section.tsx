"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LinkedinLogo, Rocket, Globe, Lightning, Code, Brain } from "@phosphor-icons/react"

export default function TeamCompleteSection() {
  return (
    <motion.section
      id="team-complete"
      className="bg-white/50 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2 py-0.5 text-[9px] font-medium text-gray-700 mb-2">
        TEAM & VISION
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

      {/* Strategic Vision Section */}
      <div className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg mb-4">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80">
            STRATEGIC VISION
          </div>
          <div className="h-6 w-6">
            <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} className="object-contain" />
          </div>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-4 sm:mb-6 text-white">
          Redefining the future of corporate travel
        </h3>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-full bg-white/10 p-1.5">
                <Lightning className="h-4 w-4 text-white" weight="fill" />
              </div>
              <h4 className="text-sm font-medium text-white">Our mission</h4>
            </div>
            <p className="text-xs font-light text-white/70">
              Radically transform the corporate travel industry through cutting-edge technology that eliminates the
              inefficiency, complexity, and fragmentation that have characterized the sector for decades.
            </p>
            <div className="mt-3 space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-white/10 p-1">
                  <Brain className="h-3 w-3 text-white" weight="fill" />
                </div>
                <p className="text-[10px] font-light text-white/70">
                  <span className="font-medium text-white">Unprecedented intelligence</span> that anticipates needs,
                  optimizes resources, and eliminates repetitive tasks
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 rounded-full bg-white/10 p-1">
                  <Globe className="h-3 w-3 text-white" weight="fill" />
                </div>
                <p className="text-[10px] font-light text-white/70">
                  <span className="font-medium text-white">Global impact</span> that redefines efficiency standards and
                  experience in travel management
                </p>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-full bg-white/10 p-1.5">
                <Code className="h-4 w-4 text-white" weight="fill" />
              </div>
              <h4 className="text-sm font-medium text-white">Technological advantage</h4>
            </div>
            <p className="text-xs font-light text-white/70">
              Our proprietary generative AI technology specialized in corporate travel represents an insurmountable
              competitive advantage. Unlike solutions that simply integrate generic models, our AI agents are
              specifically trained to understand and optimize every aspect of corporate travel, from booking to expense
              management.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                <p className="text-[10px] font-medium text-white">Domain-specific</p>
                <p className="text-[8px] text-white/50">Travel industry expertise</p>
              </div>
              <div className="bg-white/5 p-2 rounded-lg border border-white/10">
                <p className="text-[10px] font-medium text-white">Proprietary</p>
                <p className="text-[8px] text-white/50">Custom AI architecture</p>
              </div>
            </div>
          </div>

          <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-full bg-white/10 p-1.5">
                <Rocket className="h-4 w-4 text-white" weight="fill" />
              </div>
              <h4 className="text-sm font-medium text-white">Catalysts for change</h4>
            </div>
            <p className="text-xs font-light text-white/70 mb-3">
              The corporate travel sector has remained stuck in obsolete paradigms for too long. Suitpax doesn't simply
              seek to improve what exists, but to completely reimagine how companies manage, optimize, and experience
              business travel.
            </p>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10">
              <p className="text-[10px] font-medium text-white mb-1">Our commitment</p>
              <p className="text-[10px] font-light text-white/70">
                "We're not building just another tool for a broken system. We're creating a new paradigm that will make
                current solutions obsolete. The industry doesn't need another incremental iteration, but a complete
                revolution in how we conceive corporate travel."
              </p>
              <p className="text-[8px] font-medium text-white/80 text-right mt-2">— Alberto Zurano, CEO</p>
            </div>
          </div>
        </div>

        <div className="mt-4 bg-emerald-950/30 backdrop-blur-md p-4 rounded-xl border border-emerald-900/30">
          <h4 className="text-sm font-medium text-white mb-2">The future is now</h4>
          <p className="text-xs font-light text-white/70 mb-3">
            In a global market of $1.9T, Suitpax is positioned to lead the most significant transformation the sector
            has experienced in decades. Our technology not only solves current problems but opens possibilities that the
            industry hasn't even begun to imagine.
          </p>
          <div className="flex justify-center">
            <div className="inline-flex items-center rounded-xl bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white">
              Join the corporate travel revolution
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
