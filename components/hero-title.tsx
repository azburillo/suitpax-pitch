"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import MiniChat from "./mini-chat"

export default function HeroTitle() {
  return (
    <div className="relative h-[60vh] min-h-[500px] md:h-[70vh] lg:h-[80vh] text-center overflow-hidden flex items-center justify-center w-full rounded-xl">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/green-gradient-bg.jpeg"
          alt="Green gradient background"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
        />
        {/* Subtle overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 space-y-6 px-4 max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={28} height={28} />
          <span className="font-serif italic text-white/80 text-xs">Open-world of business travel</span>
        </div>

        {/* Founder Cards */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {/* Alberto's Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mx-auto mb-6 max-w-sm bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-xl"
          >
            <div className="p-2 px-3 flex items-center gap-2">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-white/20 flex-shrink-0">
                <Image src="/alberto-childhood.jpeg" alt="Young Alberto" fill className="object-cover" />
              </div>
              <div className="text-left flex-1">
                <p className="text-[11px] text-white/90 font-medium">
                  "At 6, I got lost in an airport. Today, I'm ensuring no business traveler ever feels lost again."
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="h-1 w-1 rounded-full bg-emerald-400"></div>
                  <p className="text-[9px] text-gray-300">Alberto Zurano • Founder & CEO</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Alexis's Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mx-auto mb-6 max-w-sm bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-xl"
          >
            <div className="p-2 px-3 flex items-center gap-2">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden border-2 border-white/20 flex-shrink-0">
                <Image src="/alexis-childhood.jpeg" alt="Young Alexis" fill className="object-cover" />
              </div>
              <div className="text-left flex-1">
                <p className="text-[11px] text-white/90 font-medium">
                  "From playing with toy cars to optimizing global travel operations. The journey continues."
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="h-1 w-1 rounded-full bg-blue-400"></div>
                  <p className="text-[9px] text-gray-300">Alexis Sanz • Co-Founder & COO</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter leading-none text-white">
            Redefining corporate travel with AI
          </h1>
          <div className="space-y-2">
            <p className="text-base sm:text-lg md:text-xl tracking-tighter text-white/95 max-w-2xl mx-auto font-medium">
              The intelligent platform that makes business travel seamless, compliant, and cost-effective
            </p>
            <p className="text-sm text-white/80 max-w-xl mx-auto font-light">
              Transforming how enterprises manage travel from booking to expense reporting
            </p>
          </div>

          {/* Vision statements - smaller */}
          <div className="flex flex-wrap justify-center gap-2 mt-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20">
              <span className="text-[10px] text-white/90 font-medium">AI-First Platform</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20">
              <span className="text-[10px] text-white/90 font-medium">Enterprise Security</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20">
              <span className="text-[10px] text-white/90 font-medium">Global Ready</span>
            </div>
          </div>
        </div>

        {/* MiniChat centered below subtitle */}
        <div className="flex justify-center mt-8">
          <MiniChat />
        </div>

        {/* Website link badge */}
        <div className="mt-8">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 hover:bg-black/40 transition-colors"
          >
            <Image src="/suitpax-white-logo.png" alt="Suitpax" width={28} height={28} />
            <span className="font-serif italic text-white/80 text-xs">Visit open-world</span>
          </a>
        </div>
      </motion.div>
    </div>
  )
}
