"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"

export default function FoundersOpenLetter() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)
  const totalSlides = 2

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  useEffect(() => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * currentSlide
      sliderRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }, [currentSlide])

  const founders = [
    {
      name: "Alberto Zurano",
      image: "/founders/alberto.webp",
      role: "Founder and CEO",
      linkedin: "https://linkedin.com/in/alberto-zurano-burillo",
      previousCompany: "Aena",
      companyType: "IBEX 35",
      companyLogo: "https://cdn.brandfetch.io/aena.es/w/512/h/250/logo?c=1idU-l8vdm7C5__3dci",
      experience:
        "Led digital transformation initiatives at Spain's largest airport operator, managing teams of 50+ across multiple locations",
      quotes: [
        "After experiencing the frustrations of business travel firsthand, I knew there had to be a better way. With Suitpax, we're building the platform I always wished existed.",
        "Our vision goes beyond just another travel platform—we're creating an ecosystem that truly understands the unique needs of business travelers and their companies.",
      ],
      press: {
        name: "El Mundo",
        url: "https://www.elmundo.es/economia/innovadores/2023/05/15/travel-tech-revolution.html",
        title: "The Travel Tech Revolution",
      },
    },
    {
      name: "Alexis Sanz",
      image: "/founders/alexis.webp",
      role: "Co-Founder and COO",
      linkedin: "https://linkedin.com/in/alexis-sanz",
      previousCompany: "Factorial",
      companyType: "(Spanish Unicorn)",
      companyLogo: "https://cdn.brandfetch.io/factorialhr.com/w/512/h/108/theme/light/logo?c=1idU-l8vdm7C5__3dci",
      experience:
        "Former Operations Director at Factorial, where he scaled operations from 50 to 500+ employees and managed international expansion",
      quotes: [
        "My focus is on creating operational excellence in everything we do. At Suitpax, we're building streamlined processes that deliver exceptional experiences at scale.",
        "By optimizing every touchpoint in the business travel journey, we're transforming what was once a logistical burden into a strategic advantage for companies and their travelers.",
      ],
      press: {
        name: "Business Insider",
        url: "https://www.businessinsider.com/spanish-startups-to-watch-2023-04",
        title: "Spanish Startups to Watch",
      },
    },
  ]

  return (
    <section className="bg-black rounded-xl overflow-hidden relative">
      <div className="container mx-auto px-4 py-10 md:py-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-md bg-white/5 backdrop-blur-sm px-3 py-1 text-[9px] font-medium text-white/80 border border-white/10 mb-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2 animate-pulse"></span> Our Founders
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-medium tracking-tighter leading-tight bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
          >
            Why we built Suitpax?
          </motion.h2>
        </div>

        {/* Slider container */}
        <div className="relative">
          {/* Slider navigation */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 flex justify-between w-full px-2 md:px-4">
            <button
              onClick={prevSlide}
              className="bg-black/50 backdrop-blur-sm text-white p-1.5 rounded-full border border-white/10 hover:bg-black/70 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextSlide}
              className="bg-black/50 backdrop-blur-sm text-white p-1.5 rounded-full border border-white/10 hover:bg-black/70 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Slider */}
          <div ref={sliderRef} className="flex overflow-x-hidden snap-x snap-mandatory">
            {founders.map((founder, index) => (
              <div key={founder.name} className="min-w-full flex-shrink-0 snap-center">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={founder.image || "/placeholder.svg"}
                          alt={founder.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-medium text-white">{founder.name}</h3>
                          <a
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white/80 transition-colors"
                            aria-label={`${founder.name}'s LinkedIn profile`}
                          >
                            <svg
                              role="img"
                              viewBox="0 0 24 24"
                              width="14"
                              height="14"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                            >
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        </div>

                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs text-white/80">{founder.role}</span>
                          <span className="text-white/30">|</span>
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] text-white/60">ex-{founder.previousCompany}</span>
                            <div className="relative h-3 w-8">
                              <Image
                                src={founder.companyLogo || "/placeholder.svg"}
                                alt={founder.previousCompany}
                                fill
                                className="object-contain brightness-0 invert opacity-80"
                              />
                            </div>
                            <span className="text-[9px] text-white/40">{founder.companyType}</span>
                          </div>
                        </div>

                        {/* Previous experience - Destacado */}
                        <div className="mb-4 bg-white/10 p-3 rounded-lg border border-white/5">
                          <p className="text-sm text-white/90 font-medium">{founder.experience}</p>
                        </div>

                        <div className="space-y-2 mb-4">
                          {founder.quotes.map((quote, i) => (
                            <p key={i} className="text-xs text-white/70 italic font-serif">
                              "{quote}"
                            </p>
                          ))}
                        </div>

                        {/* Press mention */}
                        <a
                          href={founder.press.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-white/10 hover:bg-white/15 transition-colors p-2 rounded-md text-xs text-white/80"
                        >
                          <span>
                            Featured in <span className="font-medium">{founder.press.name}</span>: "
                            {founder.press.title}"
                          </span>
                          <ExternalLink size={12} className="text-white/60" />
                          <span className="text-[10px] text-white/50 ml-auto">Read article</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slider indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-white" : "bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Joint statement */}
        <motion.div
          className="mt-8 pt-6 border-t border-white/10 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/80 italic font-serif text-[10px] md:text-xs">
            "Together, we're committed to building a platform that doesn't just meet the needs of today's business
            travelers but anticipates the challenges of tomorrow. Suitpax is more than a product—it's our vision for the
            future of business travel."
          </p>
          <div className="mt-3 flex justify-center space-x-1 text-[10px]">
            <span className="text-white font-medium">Alberto & Alexis</span>
            <span className="text-white/60">|</span>
            <span className="text-white/60">April 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
