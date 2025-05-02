"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ClosingSection() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.section
      id="closing"
      className="relative h-[60vh] min-h-[500px] overflow-hidden flex items-center justify-center w-full rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/gradient-background.jpg"
          alt="Gradient background"
          fill
          className="object-cover object-center w-full h-full"
          priority
          sizes="100vw"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 space-y-5 px-4 max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={28} height={28} />
          <span className="font-serif italic text-white/80 text-xs">Thank you for your attention</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter leading-none text-white">
          The future of business travel is already here
        </h2>

        <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-medium">
          Suitpax represents a once-in-a-decade opportunity to transform a trillion-dollar industry
        </p>

        {/* CTA */}
        <div className="mt-8">
          <motion.a
            href="mailto:invest@suitpax.com"
            className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 hover:bg-black/40 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
          >
            <Image src="/suitpax-white-logo.png" alt="Suitpax" width={28} height={28} />
            <span className="text-white/90 normal-case">Join our investment round</span>
            <ArrowRight
              className={`h-4 w-4 text-white/70 transition-transform duration-300 ${hovered ? "translate-x-1" : ""}`}
            />
          </motion.a>
        </div>

        {/* LinkedIn sharing badge */}
        <div className="mt-6">
          <a
            href="https://linkedin.com/company/suitpax"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 hover:bg-black/40 transition-colors"
          >
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-white/90 text-xs">Share with your network</span>
          </a>
        </div>

        {/* Final message */}
        <div className="mt-6">
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
            <Image src="/ai-agents/agent5.png" alt="AI Agent" width={24} height={24} className="rounded-xl" />
            <span className="font-serif italic text-white/80 text-xs">See you at the end of Q2</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}
