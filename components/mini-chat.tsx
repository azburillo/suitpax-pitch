"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const MiniChat = () => {
  const [placeholderText, setPlaceholderText] = useState([
    "AI open-world for business travel",
    "AI Hyperspeed travel agents",
    "AI-powered expense management",
    "The ultimate business travel platform",
    "AI-driven business travel",
  ])
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0)

  useEffect(() => {
    // Get a random index on initial load
    const randomIndex = Math.floor(Math.random() * placeholderText.length)
    setCurrentPlaceholderIndex(randomIndex)
  }, [placeholderText.length])

  return (
    <div className="relative flex items-center gap-2 p-2 rounded-xl border border-white/30 bg-black/30 backdrop-blur-md shadow-lg w-80 hover:bg-black/40 transition-all duration-300">
      <div className="relative w-8 h-8 overflow-hidden rounded-full border border-white/30 ml-1 glow-subtle">
        <Image
          src="/ai-agents/agent5.png"
          alt="AI Agent"
          width={32}
          height={32}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="flex-1 py-1 px-1 text-xs text-white h-8 flex items-center overflow-hidden">
        <span className="opacity-80 hover:opacity-100 transition-opacity">
          {placeholderText[currentPlaceholderIndex]}
        </span>
      </div>
      <div className="text-white/70 mr-1 bg-white/10 rounded-full p-1 hover:bg-white/20 transition-all cursor-pointer">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </div>
  )
}

export default MiniChat
