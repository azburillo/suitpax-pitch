"use client"

import { motion } from "framer-motion"
import { Rocket, Clock, Warning } from "@phosphor-icons/react"

export default function FOMOSection() {
  return (
    <motion.section
      id="fomo"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        WHY NOW
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        The perfect moment to disrupt corporate travel
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Rocket className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Convergence of key technologies
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Rocket className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Generative AI revolution</span> has reached maturity, enabling
                  human-like interactions and complex decision-making
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Rocket className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">API economy</span> has made integration with travel providers and
                  financial systems seamless
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Rocket className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Cloud infrastructure</span> enables global scalability and real-time
                  data processing at affordable costs
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Warning className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Cost of waiting
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">First-mover advantage</p>
                <p className="text-xs font-light">
                  The first company to establish a comprehensive AI-powered corporate travel platform will capture
                  significant market share and build powerful network effects that create lasting barriers to entry.
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Data advantage</p>
                <p className="text-xs font-light">
                  Early entrants will accumulate proprietary travel data that continuously improves their AI models,
                  creating a widening performance gap that becomes increasingly difficult for followers to close.
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Partnership opportunities</p>
                <p className="text-xs font-light">
                  Key strategic partnerships with travel providers, financial institutions, and technology platforms are
                  being formed now, with exclusive terms available to early innovators.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Clock className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Market timing
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Clock className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Post-pandemic reset</span> has created openness to new travel management
                  approaches as companies rebuild their travel programs
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Clock className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">AI adoption wave</span> is accelerating across enterprises, with 78% of
                  companies actively seeking AI solutions for travel management
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Clock className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Legacy contracts ending</span> as many companies signed 3-year travel
                  management deals in 2022 that are coming up for renewal
                </p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-950 text-white p-4 rounded-xl">
            <h3 className="text-lg font-medium mb-3">The opportunity is now</h3>
            <p className="text-sm font-light mb-4">
              The corporate travel industry is at an inflection point. The convergence of technological maturity,
              post-pandemic reset, and growing demand for AI-powered solutions creates a unique window of opportunity
              that won't remain open indefinitely.
            </p>
            <div className="space-y-3">
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Competitive landscape</p>
                <p className="text-xs font-light">
                  Legacy players are slow to adapt, focused on maintaining existing revenue streams rather than
                  innovating. New entrants are mostly point solutions rather than comprehensive platforms.
                </p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Investment timing</p>
                <p className="text-xs font-light">
                  Early investment now enables us to establish market leadership before larger players recognize the
                  opportunity and attempt to enter with significant resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
