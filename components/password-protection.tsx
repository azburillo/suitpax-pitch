"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Eye, EyeOff, CheckCircle2, ArrowRight } from "lucide-react"

export default function PasswordProtection({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const correctPassword = "mission2065"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!acceptedTerms) {
      return
    }

    if (password === correctPassword) {
      setIsAnimating(true)
      setTimeout(() => {
        onUnlock()
      }, 1000)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${isAnimating ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative z-10 w-full max-w-md md:max-w-lg p-8 mx-4 bg-black/30 backdrop-blur-md rounded-3xl border border-white/10 min-h-[520px] flex flex-col justify-between overflow-hidden">
        {/* City background with blur effect inside the container */}
        <div className="absolute inset-0 z-0 w-full h-full">
          <Image
            src="/city-skyline-bg.jpeg"
            alt="City skyline"
            fill
            className="object-cover object-center w-full h-full"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 flex justify-center mb-6">
          <Image src="/suitpax-white-logo.png" alt="Suitpax Logo" width={120} height={30} className="h-7 w-auto" />
        </div>

        <div className="relative z-10 mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 mb-4">
            <span className="font-serif italic text-white/80 text-xs">Investor Access</span>
          </div>
          <h2 className="text-2xl font-medium tracking-tighter leading-none text-white mb-3 truncate">
            Welcome to the VC portal
          </h2>
          <p className="text-sm text-white/70 max-w-md mx-auto">
            Enter your credentials to access our investment opportunity
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div className="relative flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full py-2.5 pl-4 pr-10 bg-black/30 backdrop-blur-md border ${
                error ? "border-red-500 animate-shake" : "border-white/20"
              } rounded-xl focus:ring-1 focus:ring-white/30 focus:border-transparent outline-none transition text-white text-sm`}
              placeholder="Enter password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 flex items-center justify-center"
            >
              {showPassword ? <EyeOff className="w-4 h-4 text-white/60" /> : <Eye className="w-4 h-4 text-white/60" />}
            </button>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
                className="w-3.5 h-3.5 border border-white/20 rounded bg-black/30 focus:ring-1 focus:ring-white/30"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-xs text-white/70">
              I acknowledge this material contains confidential information
            </label>
          </div>

          <button
            type="submit"
            disabled={!acceptedTerms}
            className="w-full py-2.5 bg-black/30 backdrop-blur-md border border-white/20 text-white rounded-xl transition flex items-center justify-center text-sm font-medium hover:bg-black/40 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Access Investment Opportunity</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </form>

        {/* Video element in rounded-xl format */}
        <div className="relative z-10 mt-6 flex justify-center">
          <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-md w-full max-w-xs mx-auto">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
              style={{ maxHeight: "120px" }}
            >
              <source src="/videos/ai-agent-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <p className="text-xs text-white/90 font-light">Secure access powered by SuitPax AI</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technology by text inside the card */}
        <div className="relative z-10 mt-4 flex items-center justify-center gap-1.5 text-white/40">
          <span className="text-[10px] font-light">Technology by</span>
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={50} height={13} className="h-2.5 w-auto" />
        </div>
      </div>
    </div>
  )
}
