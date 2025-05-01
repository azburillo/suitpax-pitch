"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react"

export default function ProductPreviewSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const images = [
    {
      src: "/suitpax-anthropic-dashboard.png",
      alt: "Suitpax Anthropic Integration Dashboard",
      caption: "Anthropic-powered business travel dashboard with AI assistant integration",
    },
    {
      src: "/suitpax-flight-search.png",
      alt: "Suitpax Flight Search Interface",
      caption: "Intuitive flight search with policy compliance enforcement",
    },
  ]

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <motion.section
      id="product-preview"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          PRODUCT PREVIEW
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-6 text-center">
        A sneak peek at the Suitpax platform
      </h2>

      <div className="relative">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src={images[activeIndex].src || "/placeholder.svg"}
            alt={images[activeIndex].alt}
            width={1200}
            height={800}
            className="rounded-xl"
            style={{ maxWidth: "100%", height: "auto" }}
          />

          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-3 text-sm">
            {images[activeIndex].caption}
          </div>

          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Previous image"
          >
            <ArrowLeft className="h-5 w-5 text-gray-800" weight="bold" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md"
            aria-label="Next image"
          >
            <ArrowRight className="h-5 w-5 text-gray-800" weight="bold" />
          </button>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all ${
                activeIndex === index ? "w-6 bg-emerald-950" : "w-3 bg-gray-300"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
        <h3 className="text-sm font-medium mb-2 text-emerald-950">Key Platform Features</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <p className="text-xs font-medium">Anthropic Integration</p>
            <p className="text-[10px] text-gray-600">AI-powered travel assistant</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <p className="text-xs font-medium">Policy Compliance</p>
            <p className="text-[10px] text-gray-600">Automated enforcement</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <p className="text-xs font-medium">Budget Tracking</p>
            <p className="text-[10px] text-gray-600">Real-time spend analysis</p>
          </div>
          <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
            <p className="text-xs font-medium">Team Management</p>
            <p className="text-[10px] text-gray-600">Collaborative travel planning</p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
