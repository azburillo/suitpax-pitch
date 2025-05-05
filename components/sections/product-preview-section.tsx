"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useRef } from "react"
import { Briefcase, CreditCard, Ticket, CheckSquare, ArrowRight, Play, Pause } from "lucide-react"

export default function ProductPreviewSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const currentProducts = [
    {
      icon: <Briefcase className="h-5 w-5" />,
      name: "Business Travel Platform",
      description: "Comprehensive travel booking and management solution for enterprises",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      name: "Expense Management",
      description: "Automated expense tracking and reporting with policy compliance",
    },
    {
      icon: <Ticket className="h-5 w-5" />,
      name: "Airport VIP Lounge Membership",
      description: "Global access to premium airport lounges for business travelers",
    },
    {
      icon: <CheckSquare className="h-5 w-5" />,
      name: "Task Management",
      description: "Streamlined workflow for travel-related tasks and approvals",
    },
  ]

  const upcomingProducts = [
    {
      icon: <ArrowRight className="h-5 w-5" />,
      name: "TRM (Travel Relations Management)",
      description: "Advanced platform for managing corporate travel relationships",
      comingSoon: true,
    },
    {
      icon: <ArrowRight className="h-5 w-5" />,
      name: "Suitpax AI (FIRST SPINOFF)",
      description: "Standalone AI travel assistant for enterprise integration",
      comingSoon: true,
      preview: "/suitpax-ai-preview.png",
    },
  ]

  return (
    <motion.section
      id="product-preview"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80">
          PRODUCT SUITE
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tighter mb-4 sm:mb-6 text-white">
        Enterprise-grade travel management
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4 bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <h3 className="text-base sm:text-lg font-medium text-white/90 mb-2">Suitpax Enterprise Dashboard</h3>

          <div className="relative rounded-xl overflow-hidden bg-black/30 aspect-video">
            <video
              ref={videoRef}
              src="/videos/suitpax-dashboard-demo.mp4"
              className="w-full h-full object-cover"
              loop
              muted
              playsInline
            />

            <button
              onClick={handlePlayPause}
              className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause className="h-12 w-12 text-white/80" /> : <Play className="h-12 w-12 text-white/80" />}
            </button>
          </div>

          <div className="text-sm text-white/70">
            <p>
              Our intuitive dashboard provides a comprehensive view of all travel activities, expenses, and upcoming
              trips in one place.
            </p>
          </div>
        </div>

        <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-sm">
          <h3 className="text-base sm:text-lg font-medium text-white/90 mb-3">Current Products</h3>

          <div className="space-y-2">
            {currentProducts.map((product, index) => (
              <div
                key={index}
                className="bg-black/30 p-3 rounded-lg border border-white/10 hover:border-white/30 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-white/10 p-1.5 rounded-md text-white/80">{product.icon}</div>
                  <div>
                    <h4 className="font-medium text-white/90">{product.name}</h4>
                    <p className="text-xs text-white/60">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-base sm:text-lg font-medium text-white/90 mt-5 mb-3">Coming Soon</h3>

          <div className="space-y-2">
            {upcomingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-black/30 p-3 rounded-lg border border-white/10 hover:border-white/30 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-white/10 p-1.5 rounded-md text-white/80">{product.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="font-medium text-white/90">{product.name}</h4>
                      <span className="ml-2 text-[10px] bg-white/20 text-white/80 px-2 py-0.5 rounded-full">SOON</span>
                    </div>
                    <p className="text-xs text-white/60">{product.description}</p>

                    {product.preview && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="relative rounded-md overflow-hidden border border-white/10">
                          <Image
                            src={product.preview || "/placeholder.svg"}
                            alt={`${product.name} preview`}
                            width={200}
                            height={400}
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="relative rounded-md overflow-hidden border border-white/10">
                          <Image
                            src="/suitpax-ai-menu.png"
                            alt={`${product.name} menu`}
                            width={200}
                            height={400}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-xs text-white/50">
          All products include 24/7 support, enterprise-grade security, and seamless integration with your existing
          systems.
        </p>
      </div>
    </motion.section>
  )
}
