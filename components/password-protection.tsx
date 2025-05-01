"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Lock, Eye, EyeOff, CheckCircle2 } from "lucide-react"

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
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-100 transition-opacity duration-1000 ${isAnimating ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative z-10 w-full max-w-md md:max-w-lg p-8 mx-4 bg-white rounded-3xl shadow-xl border border-gray-200 min-h-[520px] flex flex-col justify-between overflow-hidden">
        {/* City background with blur effect inside the container */}
        <div className="absolute inset-0 z-0 w-full h-full opacity-10">
          <Image
            src="/city-skyline-bg.jpeg"
            alt="City skyline"
            fill
            className="object-cover object-center w-full h-full"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 flex justify-center mb-6">
          <Image src="/suitpax-logo.png" alt="Suitpax Logo" width={140} height={36} className="h-9 w-auto" />
        </div>

        <div className="relative z-10 mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-100 mb-4">
            <span className="font-medium text-emerald-800 text-xs">Investor Access</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight leading-none text-gray-900 mb-3">Exclusive Pitch Deck</h2>
          <p className="text-base text-gray-600 max-w-md mx-auto">
            Enter your credentials to access our investment opportunity
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Lock className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full pl-10 pr-10 py-3 bg-white border ${
                error ? "border-red-500 animate-shake" : "border-gray-300"
              } rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition text-gray-800`}
              placeholder="Enter password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              {showPassword ? <EyeOff className="w-4 h-4 text-gray-500" /> : <Eye className="w-4 h-4 text-gray-500" />}
            </button>
          </div>

          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                checked={acceptedTerms}
                onChange={() => setAcceptedTerms(!acceptedTerms)}
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-emerald-300"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I acknowledge this material contains confidential information and agree not to distribute it
            </label>
          </div>

          <button
            type="submit"
            disabled={!acceptedTerms}
            className="w-full py-3 bg-emerald-950 text-white rounded-xl transition flex items-center justify-center font-medium hover:bg-emerald-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Access Investment Opportunity
          </button>
        </form>

        {/* Video element in rounded-xl format */}
        <div className="relative z-10 mt-6 flex justify-center">
          <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-md w-full max-w-xs mx-auto">
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
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <p className="text-xs text-white font-medium">Secure access powered by SuitPax AI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
