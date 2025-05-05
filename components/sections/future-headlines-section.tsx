"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Plane, CreditCard, Globe } from "lucide-react"
import Image from "next/image"

const headlines = [
  {
    id: 1,
    source: "Financial Times",
    date: "March 15, 2031",
    title: "Expedia Group Acquires Suitpax for $300M, Expanding Business Travel Tech Portfolio",
    excerpt:
      "In a strategic move to strengthen its corporate travel offerings, Expedia Group has acquired AI-powered business travel platform Suitpax for $300 million. The acquisition marks one of the largest exits in the TravelTech sector this year.",
    quote:
      "Suitpax's AI-driven platform has revolutionized how businesses manage travel. Their technology will be instrumental in our global corporate travel strategy.",
    quoteAuthor: "CEO, Expedia Group",
    color: "from-blue-600/20 to-blue-900/20",
    companyName: "Expedia",
    icon: Globe,
  },
  {
    id: 2,
    source: "Bloomberg",
    date: "September 22, 2032",
    title: "Revolut Acquires TravelTech Startup Suitpax for $200M to Enhance Business Travel Solutions",
    excerpt:
      "Revolut has announced the acquisition of Suitpax, the AI-powered business travel management platform, for $200 million. The move signals Revolut's intent to expand its enterprise offerings in the rapidly growing business travel sector.",
    quote:
      "Suitpax's innovative approach to business travel management aligns perfectly with our vision for the future of financial services and travel. We're excited to integrate their AI capabilities across our enterprise suite.",
    quoteAuthor: "CEO, Revolut",
    color: "from-green-600/20 to-green-900/20",
    companyName: "Revolut",
    icon: CreditCard,
  },
  {
    id: 3,
    source: "The Wall Street Journal",
    date: "June 8, 2031",
    title: "American Airlines Acquires Suitpax in $280M Deal to Revolutionize Corporate Travel",
    excerpt:
      "American Airlines has completed the acquisition of TravelTech innovator Suitpax for $280 million, marking a significant move to modernize its corporate travel offerings with cutting-edge AI technology.",
    quote:
      "This acquisition represents a perfect strategic fit. Suitpax's AI-driven platform will transform how our corporate clients manage their travel programs globally.",
    quoteAuthor: "President of Global Commercial Services, American Airlines",
    color: "from-purple-600/20 to-purple-900/20",
    companyName: "American Airlines",
    icon: Plane,
  },
]

export default function FutureHeadlinesSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % headlines.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + headlines.length) % headlines.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [currentIndex])

  const currentHeadline = headlines[currentIndex]
  const IconComponent = currentHeadline.icon

  return (
    <section className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg my-8">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80">
          FUTURE POTENTIAL
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-4 sm:mb-6 text-white">
        Future Exit Scenarios
      </h2>
      <p className="text-sm text-white/70 max-w-2xl mx-auto mb-6">
        Visualizing potential acquisition headlines that could define Suitpax's future success
      </p>

      <div className="relative min-h-[400px] md:min-h-[450px] w-full">
        <motion.div
          key={currentHeadline.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-white/10 p-2 rounded-md text-white/80">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="flex flex-col">
                  <div className="font-medium text-white/90 font-serif">{currentHeadline.companyName}</div>
                  <div className="text-xs text-white/60">
                    {currentHeadline.source} · {currentHeadline.date}
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight font-serif">
              {currentHeadline.title}
            </h3>

            <p className="text-white/80 mb-4 text-sm">{currentHeadline.excerpt}</p>

            <div className="bg-black/30 p-3 rounded-lg border border-white/10 mb-4">
              <p className="text-white/90 italic text-sm font-serif">"{currentHeadline.quote}"</p>
              <p className="text-white/60 text-xs mt-2">— {currentHeadline.quoteAuthor}</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <div className="text-xs font-medium bg-white/10 px-2 py-1 rounded-md text-white/80 font-serif italic uppercase tracking-wide">
          Fictional scenario for illustrative purposes
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Previous headline"
          >
            <ChevronLeft className="h-4 w-4 text-white" />
          </button>
          <span className="text-xs text-white/60">
            {currentIndex + 1}/{headlines.length}
          </span>
          <button
            onClick={nextSlide}
            className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            aria-label="Next headline"
          >
            <ChevronRight className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
