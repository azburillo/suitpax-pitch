"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState, useRef } from "react"
import { Lock, Briefcase, CreditCard, Ticket, CheckSquare, ArrowRight, Play, Pause } from "lucide-react"

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
      className="bg-black text-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <Lock className="h-5 w-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">Product Suite</h2>
        </div>
        <div className="h-8 w-8">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={32} height={32} className="object-contain" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="space-y-6">
          <h3 className="text-lg sm:text-xl font-medium text-emerald-400 mb-4">Suitpax Enterprise Dashboard</h3>

          <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video">
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
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-16 w-16 text-white opacity-80" />
              ) : (
                <Play className="h-16 w-16 text-white opacity-80" />
              )}
            </button>
          </div>

          <div className="text-sm text-gray-300">
            <p>
              Our intuitive dashboard provides a comprehensive view of all travel activities, expenses, and upcoming
              trips in one place.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-medium text-emerald-400 mb-4">Current Products</h3>

          <div className="space-y-3">
            {currentProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-emerald-800 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-emerald-900/50 p-2 rounded-md">{product.icon}</div>
                  <div>
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-xs text-gray-400">{product.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-lg sm:text-xl font-medium text-emerald-400 mt-6 mb-4">Coming Soon</h3>

          <div className="space-y-3">
            {upcomingProducts.map((product, index) => (
              <div
                key={index}
                className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-emerald-800 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-900/50 p-2 rounded-md">{product.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center">
                      <h4 className="font-medium">{product.name}</h4>
                      <span className="ml-2 text-[10px] bg-emerald-900 text-emerald-200 px-2 py-0.5 rounded-full">
                        SOON
                      </span>
                    </div>
                    <p className="text-xs text-gray-400">{product.description}</p>

                    {product.preview && (
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <div className="relative rounded-md overflow-hidden">
                          <Image
                            src={product.preview || "/placeholder.svg"}
                            alt={`${product.name} preview`}
                            width={200}
                            height={400}
                            className="w-full h-auto"
                          />
                        </div>
                        <div className="relative rounded-md overflow-hidden">
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

      <div className="text-center mt-6">
        <p className="text-xs text-gray-400">
          All products include 24/7 support, enterprise-grade security, and seamless integration with your existing
          systems.
        </p>
      </div>
    </motion.section>
  )
}
