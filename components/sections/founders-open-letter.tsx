"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

export default function FoundersOpenLetter() {
  const founders = [
    {
      name: "Alberto Zurano",
      image: "/alberto-zurano.webp",
      role: "Founder and CEO",
      linkedin: "https://linkedin.com/in/alberto-zurano-burillo",
      previousCompany: "Aena",
      companyType: "IBEX 35",
      companyLogo: "https://cdn.brandfetch.io/aena.es/w/512/h/250/logo?c=1idU-l8vdm7C5__3dci",
      experience:
        "Led digital transformation initiatives at Spain's largest airport operator, managing teams of 50+ across multiple locations",
      quotes: [
        "After experiencing the frustrations of business travel firsthand, I knew there had to be a better way. With Suitpax, we're building the platform I always wished existed.",
      ],
      press: {
        name: "El Mundo",
        url: "https://www.elmundo.es/economia/innovadores/2023/05/15/travel-tech-revolution.html",
        title: "The Travel Tech Revolution",
      },
    },
    {
      name: "Alexis Sanz",
      image: "/alexis-sanz.jpeg",
      role: "Co-Founder and COO",
      linkedin: "https://linkedin.com/in/alexis-sanz",
      previousCompany: "Factorial",
      companyType: "(Spanish Unicorn)",
      companyLogo: "https://cdn.brandfetch.io/factorialhr.com/w/512/h/108/theme/light/logo?c=1idU-l8vdm7C5__3dci",
      experience:
        "Former Operations Director at Factorial, where he scaled operations from 50 to 500+ employees and managed international expansion",
      quotes: [
        "My focus is on creating operational excellence in everything we do. At Suitpax, we're building streamlined processes that deliver exceptional experiences at scale.",
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
      <div className="container mx-auto px-3 py-6 md:py-8">
        {/* Header - más compacto */}
        <div className="flex flex-col items-center text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-md bg-white/5 backdrop-blur-sm px-2 py-0.5 text-[8px] font-medium text-white/80 border border-white/10 mb-2"
          >
            <span className="w-1 h-1 rounded-full bg-emerald-600 mr-1.5 animate-pulse"></span> Our Founders
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-medium tracking-tighter leading-tight bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent"
          >
            Why we built Suitpax?
          </motion.h2>
        </div>

        {/* Founders grid - layout más cuadrado y responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {founders.map((founder) => (
            <div key={founder.name} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3">
              <div className="flex items-start gap-3">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  {founder.image ? (
                    <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                      <span className="text-white text-xs">{founder.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium text-white">{founder.name}</h3>
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
                        width="12"
                        height="12"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>

                  <div className="flex items-center gap-1 mb-2 flex-wrap">
                    <span className="text-[10px] text-white/80">{founder.role}</span>
                    <span className="text-white/30 mx-1">|</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[9px] text-white/60">ex-{founder.previousCompany}</span>
                      <div className="relative h-2.5 w-6">
                        <Image
                          src={founder.companyLogo || "/placeholder.svg"}
                          alt={founder.previousCompany}
                          fill
                          className="object-contain brightness-0 invert opacity-80"
                        />
                      </div>
                      <span className="text-[8px] text-white/40">{founder.companyType}</span>
                    </div>
                  </div>

                  {/* Previous experience - más compacto */}
                  <div className="mb-2 bg-white/10 p-2 rounded-md border border-white/5">
                    <p className="text-[10px] text-white/90">{founder.experience}</p>
                  </div>

                  <div className="mb-2">
                    <p className="text-[9px] text-white/70 italic font-serif">"{founder.quotes[0]}"</p>
                  </div>

                  {/* Press mention - más compacto */}
                  <a
                    href={founder.press.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 bg-white/10 hover:bg-white/15 transition-colors p-1.5 rounded-md text-[8px] text-white/80"
                  >
                    <span>
                      Featured in <span className="font-medium">{founder.press.name}</span>
                    </span>
                    <ExternalLink size={8} className="text-white/60" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Joint statement - más compacto */}
        <motion.div
          className="mt-4 pt-3 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-white/80 italic font-serif text-[9px]">
            "Together, we're committed to building a platform that doesn't just meet the needs of today's business
            travelers but anticipates the challenges of tomorrow."
          </p>
          <div className="mt-2 flex justify-center space-x-1 text-[8px]">
            <span className="text-white font-medium">Alberto & Alexis</span>
            <span className="text-white/60">|</span>
            <span className="text-white/60">April 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
