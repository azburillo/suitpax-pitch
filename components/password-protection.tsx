"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

export default function PasswordProtection({ onUnlock }: { onUnlock: () => void }) {
  const [company, setCompany] = useState("")
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

        <div className="relative z-10 flex justify-center mb-4">
          <Image src="/suitpax-white-logo.png" alt="Suitpax Logo" width={120} height={30} className="h-7 w-auto" />
        </div>

        <div className="relative z-10 mb-4 text-center">
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-xl border border-white/10 mb-3">
            <span className="font-serif italic text-white/80 text-xs">Our mission</span>
          </div>
          <h2 className="text-xl font-medium tracking-tighter leading-none text-white mb-2 truncate">
            Transforming business travel
          </h2>
        </div>

        {/* AI Agent Input Interface */}
        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-4">
            <div className="flex items-center space-x-3 mb-4 relative">
              <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/20 flex-shrink-0">
                <Image
                  src="/ai-agent-emma.jpg"
                  alt="AI Assistant Zia"
                  width={56}
                  height={56}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium">Zia from Suitpax</p>
                <p className="text-white/60 text-xs">AI Agent</p>
              </div>
            </div>

            <p className="text-white/90 text-sm mb-3">
              Hello, I'm Zia, your Suitpax AI verification assistant. What company are you from?
            </p>

            <div className="space-y-3">
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full py-2.5 pl-4 pr-4 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl focus:ring-1 focus:ring-white/30 focus:border-transparent outline-none transition text-white text-sm"
                placeholder="Enter your company name"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full py-2.5 pl-4 pr-10 bg-black/30 backdrop-blur-md border ${
                    error ? "border-red-500 animate-shake" : "border-white/20"
                  } rounded-xl focus:ring-1 focus:ring-white/30 focus:border-transparent outline-none transition text-white text-sm`}
                  placeholder="Enter access code"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 text-white/60" />
                  ) : (
                    <Eye className="w-4 h-4 text-white/60" />
                  )}
                </button>
              </div>
            </div>
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

        {/* Technology by text inside the card */}
        <div className="relative z-10 mt-6 flex items-center justify-center gap-1.5 text-white/40">
          <span className="text-[10px] font-light">Technology by</span>
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={50} height={13} className="h-2.5 w-auto" />
        </div>
      </div>
    </div>
  )
}
