"use client"

import { motion } from "framer-motion"
import { Rocket, Globe, Lightning, Code, Brain } from "@phosphor-icons/react"
import Image from "next/image"

export default function TeamVisionSection() {
  return (
    <motion.section
      id="team-vision"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80">
          STRATEGIC VISION
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-4 sm:mb-6 text-white">
        Redefining the future of corporate travel
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-white/10 p-1.5">
              <Lightning className="h-4 w-4 text-white" weight="fill" />
            </div>
            <h3 className="text-sm font-medium text-white">Our mission</h3>
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
            <h3 className="text-sm font-medium text-white">Technological advantage</h3>
          </div>
          <p className="text-xs font-light text-white/70">
            Our proprietary generative AI technology specialized in corporate travel represents an insurmountable
            competitive advantage. Unlike solutions that simply integrate generic models, our AI agents are specifically
            trained to understand and optimize every aspect of corporate travel, from booking to expense management.
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
            <h3 className="text-sm font-medium text-white">Catalysts for change</h3>
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
        <h3 className="text-sm font-medium text-white mb-2">The future is now</h3>
        <p className="text-xs font-light text-white/70 mb-3">
          In a global market of $1.9T, Suitpax is positioned to lead the most significant transformation the sector has
          experienced in decades. Our technology not only solves current problems but opens possibilities that the
          industry hasn't even begun to imagine.
        </p>
        <div className="flex justify-center">
          <div className="inline-flex items-center rounded-xl bg-white/10 px-3 py-1.5 text-[10px] font-medium text-white">
            Join the corporate travel revolution
          </div>
        </div>
      </div>
    </motion.section>
  )
}
