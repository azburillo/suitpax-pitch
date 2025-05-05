"use client"

import { useState } from "react"
import LoginCard from "./login-card"

export default function PasswordProtection({ onUnlock }: { onUnlock: () => void }) {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleUnlock = () => {
    setIsAnimating(true)
    setTimeout(() => {
      onUnlock()
    }, 1000)
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-1000 ${isAnimating ? "opacity-0" : "opacity-100"}`}
    >
      <div className="relative z-10 w-full max-w-md md:max-w-lg p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 bg-black backdrop-blur-md rounded-3xl border border-white/10 h-[600px] sm:h-[700px] md:h-[750px] flex flex-col justify-between overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        <LoginCard onUnlock={handleUnlock} />
        <div className="absolute bottom-6 left-0 right-0 text-center text-xs text-gray-400 italic">
          PDF pitch decks are dead. Welcome to the future of presentations.
        </div>
      </div>
    </div>
  )
}
