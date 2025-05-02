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
      <div className="relative z-10 w-full max-w-md md:max-w-lg p-4 mx-4 bg-black/30 backdrop-blur-md rounded-3xl border border-white/5 min-h-[400px] flex flex-col justify-between overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.2)]">
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
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-md"></div>
        </div>

        <div className="relative z-10 flex justify-center mb-2">
          <Image src="/suitpax-white-logo.png" alt="Suitpax Logo" width={120} height={30} className="h-6 w-auto" />
        </div>

        <div className="relative z-10 mb-2 text-center">
          <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-md px-2 py-0.5 rounded-xl border border-white/10 mb-2">
            <span className="font-serif italic text-white/80 text-[10px]">The next-gen of traveltech</span>
          </div>
          <h2 className="text-base font-medium tracking-tighter leading-tight text-white mb-1">Made by humans.</h2>
          <p className="text-white/70 text-[10px] max-w-xs mx-auto">
            An AI-powered platform transforming how businesses manage travel and expenses
          </p>
        </div>

        {/* AI Agent Input Interface */}
        <form onSubmit={handleSubmit} className="relative z-10 space-y-3">
          <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-3">
            <div className="flex items-center space-x-2 mb-2 relative">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20 flex-shrink-0">
                <Image
                  src="/ai-agent-emma.jpg"
                  alt="AI Assistant Zia"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-white text-xs font-medium">Zia from Suitpax</p>
                <p className="text-white/60 text-[10px]">AI Agent</p>
              </div>
            </div>

            {/* Monitoring badge - moved below Zia's info */}
            <div className="mb-2">
              <div
                className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden flex items-center p-1 shadow-lg"
                style={{ width: "160px" }}
              >
                <div className="relative w-5 h-5 rounded-lg overflow-hidden mr-2">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center 30%" }}
                  >
                    <source src="/videos/ai-agent-demo.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="flex items-center">
                  <span className="relative flex h-1.5 w-1.5 mr-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                  </span>
                  <span className="text-[9px] text-white whitespace-nowrap">Monitoring access</span>
                </div>
              </div>
            </div>

            <p className="text-white/90 text-xs mb-3">
              Hello, I'm Zia, your Suitpax AI verification Agent. What company are you from?
            </p>

            <div className="space-y-2">
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full py-2 pl-3 pr-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl focus:ring-1 focus:ring-white/30 focus:border-transparent outline-none transition text-white text-xs"
                placeholder="Enter your company name"
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full py-2 pl-3 pr-8 bg-black/30 backdrop-blur-md border ${
                    error ? "border-red-500 animate-shake" : "border-white/20"
                  } rounded-xl focus:ring-1 focus:ring-white/30 focus:border-transparent outline-none transition text-white text-xs`}
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
            <div className="flex items-center h-4">
              <input
                id="terms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
                className="w-3 h-3 border border-white/20 rounded bg-black/30 focus:ring-1 focus:ring-white/30"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-[10px] text-white/70">
              I acknowledge this material contains confidential information
            </label>
          </div>

          <button
            type="submit"
            disabled={!acceptedTerms}
            className="w-full py-2 bg-black/30 backdrop-blur-md border border-white/20 text-white rounded-xl transition flex items-center justify-center text-xs font-medium hover:bg-black/40 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_10px_rgba(255,255,255,0.2),0_0_5px_rgba(56,189,248,0.3)] hover:shadow-[0_0_15px_rgba(255,255,255,0.3),0_0_10px_rgba(56,189,248,0.4)]"
          >
            <span>Access to startup deck</span>
            <ArrowRight className="ml-2 w-3 h-3" />
          </button>
        </form>

        {/* Technology by text inside the card */}
        <div className="relative z-10 mt-3 flex items-center justify-center gap-1.5 text-white/40">
          <span className="text-[9px] font-light">Technology by</span>
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={40} height={10} className="h-2 w-auto" />
        </div>
      </div>
    </div>
  )
}
