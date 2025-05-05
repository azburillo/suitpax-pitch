"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Plane, CreditCard, Globe } from "lucide-react"

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
    <section className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/90 backdrop-blur-md p-6 md:p-8">
      <div className="absolute top-3 left-3 text-xs italic text-white/60">Future Potential</div>

      <div className="mb-6 text-center">
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-2 text-white">
          Future Exit Scenarios
        </h2>
        <p className="text-sm text-white/70 max-w-2xl mx-auto">
          Visualizing potential acquisition headlines that could define Suitpax's future success
        </p>
      </div>

      <div className="relative min-h-[400px] md:min-h-[450px] w-full">
        <motion.div
          key={currentHeadline.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div
            className={`rounded-lg border border-white/10 bg-gradient-to-br ${currentHeadline.color} backdrop-blur-md p-6 md:p-8`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 flex items-center justify-center bg-white/10 rounded-full">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <div className="text-sm font-medium text-white">{currentHeadline.companyName}</div>
                  <div className="text-xs text-white/60">{currentHeadline.source}</div>
                </div>
              </div>
              <div className="text-sm text-white/60">{currentHeadline.date}</div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">{currentHeadline.title}</h3>

            <p className="text-white/80 mb-6 text-sm md:text-base">{currentHeadline.excerpt}</p>

            <div className="border-l-4 border-white/30 pl-4 py-2 mb-4">
              <p className="text-white/90 italic text-sm md:text-base">"{currentHeadline.quote}"</p>
              <p className="text-white/60 text-xs mt-2">— {currentHeadline.quoteAuthor}</p>
            </div>

            <div className="flex justify-between items-center mt-6">
              <div className="text-xs text-white/40">Este es un escenario futuro ficticio con fines ilustrativos</div>
              <div className="flex items-center space-x-1">
                <span className="text-xs text-white/60 mr-2">
                  {currentIndex + 1}/{headlines.length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Previous headline"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <div className="flex space-x-2 items-center">
          {headlines.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (isAnimating) return
                setIsAnimating(true)
                setCurrentIndex(index)
                setTimeout(() => setIsAnimating(false), 500)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-4" : "bg-white/30"
              }`}
              aria-label={`Go to headline ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Next headline"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>
      </div>
    </section>
  )
}
