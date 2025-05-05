"use client"

import { motion } from "framer-motion"
import MiniChat from "./mini-chat"
import Image from "next/image"

export default function HeroTitle() {
  return (
    <div className="relative h-[60vh] min-h-[500px] md:h-[70vh] lg:h-[80vh] text-center overflow-hidden flex items-center justify-center w-full rounded-xl">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/modern-city-skyline.jpg"
          alt="Modern city skyline"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
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

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter leading-none text-white">
          The next-gen of traveltech
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
