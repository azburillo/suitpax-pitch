"use client"

import { motion } from "framer-motion"
import AIAgentsShowcase from "../ai-agents-showcase"
import { Bot, Zap, Globe, Shield } from "lucide-react"
import Image from "next/image"

export default function AIAgentsSection() {
  return (
    <motion.section
      id="ai-agents"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-center mb-4">
        <Image
          src="/suitpax-white-logo.png"
          alt="Suitpax"
          width={40}
          height={40}
          className="rounded-xl bg-emerald-950"
        />
      </div>

      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        AI AGENTS
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Specialized AI Agents for Every Travel Need
      </h2>
      <p className="text-sm sm:text-base font-light text-gray-700 mb-6">
        Our AI agents are trained on specific business travel needs and company policies, providing personalized
        assistance for every aspect of corporate travel.
      </p>

      {/* Video Demo Section - Smaller and more responsive */}
      <div className="mb-8 flex flex-col items-center">
        {/* Mini badge with Suitpax bl logo and Intelligence in Action text */}
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-4 shadow-sm">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="rounded-full" />
          <span className="text-sm">
            Suitpax <span className="font-serif italic">Intelligence in Action</span>
          </span>
        </div>

        {/* Smaller, more focused video container */}
        <div
          className="relative overflow-hidden rounded-xl shadow-lg w-full max-w-md mx-auto"
          style={{ height: "320px" }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/ai-agent-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              objectFit: "cover",
              objectPosition: "center 20%", // Crop more to focus on content and hide watermark
              transform: "scale(1.1)", // Scale up more to focus on center content
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 left-0 w-full p-4">
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-full">
                  Natural language
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-full">
                  Sub-second responses
                </span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs py-1 px-2 rounded-full">
                  Policy-aware
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Agents Grid */}
      <AIAgentsShowcase />

      <div className="mt-8 text-center">
        <h3 className="text-lg md:text-xl font-medium text-emerald-950">The Future of Business Travel Assistance</h3>
        <p className="text-sm md:text-base font-light text-gray-600 mt-2 max-w-2xl mx-auto">
          Each agent is powered by our proprietary AI technology, delivering personalized solutions that adapt to your
          company's unique travel requirements.
        </p>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-4 gap-4 mt-8">
        <div className="bg-gray-100 p-4 rounded-xl">
          <div className="w-8 h-8 bg-emerald-950/10 rounded-lg flex items-center justify-center mb-3">
            <Bot size={20} className="text-emerald-950" />
          </div>
          <h3 className="text-base font-medium mb-2">Personalized Assistance</h3>
          <p className="text-xs font-light">
            Each agent specializes in a specific aspect of business travel, from booking to expense management.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <div className="w-8 h-8 bg-emerald-950/10 rounded-lg flex items-center justify-center mb-3">
            <Zap size={20} className="text-emerald-950" />
          </div>
          <h3 className="text-base font-medium mb-2">Instant Responses</h3>
          <p className="text-xs font-light">
            Get immediate assistance with sub-second response times, available 24/7 across all time zones.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <div className="w-8 h-8 bg-emerald-950/10 rounded-lg flex items-center justify-center mb-3">
            <Globe size={20} className="text-emerald-950" />
          </div>
          <h3 className="text-base font-medium mb-2">Multilingual Support</h3>
          <p className="text-xs font-light">
            Communicate in 12 languages, making global business travel seamless for international teams.
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl">
          <div className="w-8 h-8 bg-emerald-950/10 rounded-lg flex items-center justify-center mb-3">
            <Shield size={20} className="text-emerald-950" />
          </div>
          <h3 className="text-base font-medium mb-2">Policy Compliance</h3>
          <p className="text-xs font-light">
            Agents ensure all travel arrangements comply with your company's policies and budget constraints.
          </p>
        </div>
      </div>
    </motion.section>
  )
}
