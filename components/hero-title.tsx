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
              <p className="text-[11px] text-white/90">
                "When I was 6 years old, I got lost in an airport. Now I'm building the future of travel tech."
              </p>
              <div className="flex items-center gap-1 mt-1">
                <div className="h-1 w-1 rounded-full bg-white/40"></div>
                <p className="text-[9px] text-gray-300">Alberto Zurano, Founder & CEO</p>
              </div>
            </div>
          </div>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter leading-none text-white">
          The next-gen of traveltech revolution
        </h1>
        <p className="text-sm sm:text-base md:text-lg tracking-tighter text-white/90 max-w-2xl mx-auto font-medium">
          AI-powered business travel platform with superpowers
        </p>
        <p className="text-xs sm:text-sm text-white/70 max-w-xl mx-auto font-light">
          Transforming business travel with intelligent automation and personalized experiences
        </p>

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
