"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { LockIcon, UnlockIcon } from "lucide-react"

export default function LoginCard({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("")
  const [isError, setIsError] = useState(false)
  const [isUnlocking, setIsUnlocking] = useState(false)
  const correctPassword = "Suitpax"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (password.toLowerCase() === correctPassword.toLowerCase()) {
      setIsUnlocking(true)
      setTimeout(() => {
        onUnlock()
      }, 1000)
    } else {
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      }, 2000)
    }
  }

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-sm mx-auto text-center"
      >
        <div className="mb-8 relative w-32 h-32 mx-auto">
          <Image src="/suitpax-white-logo.png" alt="Suitpax Logo" fill className="object-contain" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">Welcome to Suitpax</h1>
        <p className="text-gray-400 mb-8">Enter the company name to access the pitch deck</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 bg-black/50 border ${
                isError ? "border-red-500" : "border-white/20"
              } rounded-lg text-white focus:outline-none focus:border-white/50 transition-colors`}
              placeholder="Enter password"
              disabled={isUnlocking}
            />
            {isError && (
              <p className="absolute -bottom-6 left-0 right-0 text-red-500 text-sm">
                Incorrect password. Please enter the company name.
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isUnlocking}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-white transition-all ${
              isUnlocking ? "bg-green-600 hover:bg-green-700" : "bg-white/10 hover:bg-white/20"
            }`}
          >
            {isUnlocking ? (
              <>
                <UnlockIcon size={18} />
                <span>Unlocking...</span>
              </>
            ) : (
              <>
                <LockIcon size={18} />
                <span>Unlock Pitch Deck</span>
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  )
}
