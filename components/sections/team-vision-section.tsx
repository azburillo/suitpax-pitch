"use client"

import { motion } from "framer-motion"
import { Rocket, Globe, Lightning, Code, Brain } from "@phosphor-icons/react"

export default function TeamVisionSection() {
  return (
    <motion.section
      id="team-vision"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        FUTURE VISION
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Redefining the future of corporate travel
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-emerald-950/5 p-4 rounded-xl">
            <h3 className="text-lg font-medium tracking-tighter mb-3 flex items-center">
              <Lightning className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Our mission
            </h3>
            <p className="text-sm font-light mb-3">
              Radically transform the corporate travel industry through cutting-edge technology that eliminates the
              inefficiency, complexity, and fragmentation that have characterized the sector for decades.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Brain className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Unprecedented intelligence</span> that anticipates needs, optimizes
                  resources, and eliminates repetitive tasks
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Globe className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Global impact</span> that redefines efficiency standards and experience
                  in travel management
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-base font-medium tracking-tighter mb-2 flex items-center">
              <Code className="h-4 w-4 text-emerald-950 mr-2" weight="fill" />
              Decisive technological advantage
            </h3>
            <p className="text-sm font-light">
              Our proprietary generative AI technology specialized in corporate travel represents an insurmountable
              competitive advantage. Unlike solutions that simply integrate generic models, our AI agents are
              specifically trained to understand and optimize every aspect of corporate travel, from booking to expense
              management.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium tracking-tighter mb-3 flex items-center">
              <Rocket className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Catalysts for change
            </h3>
            <p className="text-sm font-light mb-3">
              The corporate travel sector has remained stuck in obsolete paradigms for too long. Suitpax doesn't simply
              seek to improve what exists, but to completely reimagine how companies manage, optimize, and experience
              business travel.
            </p>
            <div className="bg-gray-100 p-3 rounded-xl">
              <p className="text-sm font-medium text-emerald-950 mb-2">Our commitment</p>
              <p className="text-sm font-light">
                "We're not building just another tool for a broken system. We're creating a new paradigm that will make
                current solutions obsolete. The industry doesn't need another incremental iteration, but a complete
                revolution in how we conceive corporate travel."
              </p>
              <p className="text-xs font-medium text-right mt-2">— Alberto Zurano, CEO</p>
            </div>
          </div>

          <div className="bg-emerald-950 text-white p-4 rounded-xl">
            <h3 className="text-lg font-medium tracking-tighter mb-2">The future is now</h3>
            <p className="text-sm font-light mb-3">
              In a global market of $1.9T, Suitpax is positioned to lead the most significant transformation the sector
              has experienced in decades. Our technology not only solves current problems but opens possibilities that
              the industry hasn't even begun to imagine.
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center rounded-xl bg-white/20 px-3 py-1.5 text-sm font-medium">
                Join the corporate travel revolution
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
