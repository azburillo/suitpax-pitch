"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Users } from "lucide-react"

// Expanded agent images array with the new images
const agentImages = [
  "/ai-agents/agent1.png",
  "/ai-agents/agent2.png",
  "/ai-agents/agent3.png",
  "/ai-agents/agent4.png",
  "/ai-agents/agent5.png",
  "/ai-agents/agent6.png",
  "/ai-agents/agent7.png",
  "/ai-agents/agent8.png",
  "/ai-agents/agent9.png",
  "/ai-agents/agent10.png",
  "/ai-agents/agent11.png",
  "/ai-agents/agent12.png",
  "/ai-agents/agent13.png",
  "/ai-agents/agent14.png",
  "/ai-agents/agent15.png",
  "/ai-agents/agent16.png",
  "/ai-agents/agent17.png",
  "/ai-agents/agent18.png",
  "/ai-agents/agent19.png",
  "/ai-agents/agent20.png",
  "/ai-agents/agent21.png",
  "/ai-agents/agent22.png",
  "/ai-agents/agent23.png",
  "/ai-agents/agent24.png",
  "/ai-agents/agent25.png",
  "/ai-agents/agent26.png",
  "/ai-agents/agent27.png",
  "/ai-agents/agent28.png",
  "/ai-agents/agent29.png",
]

// Agent types with descriptions
const agentData = [
  { type: "Travel Planner", description: "Optimizes travel routes and schedules based on business priorities" },
  { type: "Expense Manager", description: "Automates receipt processing and expense categorization" },
  { type: "Itinerary Optimizer", description: "Suggests optimal meeting schedules to minimize travel time" },
  { type: "Local Guide", description: "Provides cultural insights and local recommendations" },
  { type: "Booking Assistant", description: "Finds and books travel options matching company policies" },
  { type: "Policy Advisor", description: "Ensures all bookings comply with company travel policies" },
  { type: "Budget Analyst", description: "Tracks spending against budgets and suggests cost-saving measures" },
  { type: "Safety Monitor", description: "Provides real-time safety alerts for destinations" },
  { type: "Visa Specialist", description: "Manages visa requirements and application processes" },
  { type: "Accommodation Expert", description: "Finds ideal accommodations based on location and preferences" },
  { type: "Transport Coordinator", description: "Arranges ground transportation and transfers" },
  { type: "Meeting Scheduler", description: "Coordinates meetings across time zones and travel schedules" },
  { type: "Currency Advisor", description: "Provides exchange rate information and conversion assistance" },
  { type: "Language Assistant", description: "Offers translation and language learning resources" },
  { type: "Dining Concierge", description: "Recommends restaurants suitable for business meetings" },
  { type: "Weather Forecaster", description: "Provides weather updates to help with packing and planning" },
  { type: "Cultural Guide", description: "Offers business etiquette advice for different cultures" },
  { type: "Emergency Support", description: "Provides 24/7 assistance for travel emergencies" },
  { type: "Loyalty Program Expert", description: "Maximizes points and rewards across travel programs" },
  { type: "Sustainability Advisor", description: "Suggests eco-friendly travel options" },
  { type: "Executive Assistant", description: "Specialized support for C-suite travel requirements" },
  { type: "Group Coordinator", description: "Manages logistics for team travel and events" },
  { type: "Wellness Advisor", description: "Provides tips to maintain health and wellbeing while traveling" },
  { type: "Accessibility Specialist", description: "Ensures travel arrangements accommodate all needs" },
  { type: "Event Planner", description: "Coordinates business events and conferences" },
  { type: "Networking Facilitator", description: "Suggests networking opportunities at destinations" },
  { type: "Compliance Officer", description: "Ensures travel complies with international regulations" },
  { type: "Tech Support", description: "Resolves technical issues during business travel" },
  { type: "Feedback Analyzer", description: "Collects and analyzes traveler feedback to improve services" },
]

export default function AIAgentsInteractiveShowcase() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [gridView, setGridView] = useState(true)

  // Function to handle agent selection
  const selectAgent = (index: number) => {
    setSelectedIndex(index)
    setGridView(false)
  }

  // Function to navigate between agents in detail view
  const navigateAgent = (direction: "next" | "prev") => {
    if (selectedIndex === null) return

    if (direction === "next") {
      setSelectedIndex((selectedIndex + 1) % agentImages.length)
    } else {
      setSelectedIndex(selectedIndex === 0 ? agentImages.length - 1 : selectedIndex - 1)
    }
  }

  return (
    <div className="w-full py-8">
      <div className="relative w-full max-w-5xl mx-auto">
        {/* View toggle */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setGridView(!gridView)}
            className="flex items-center gap-1 text-xs font-medium bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors"
          >
            <Users size={14} />
            {gridView ? "Detail View" : "Grid View"}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {gridView ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-2 md:gap-3"
            >
              {agentImages.map((src, index) => (
                <motion.div
                  key={`agent-${index}`}
                  className="relative aspect-square cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => selectAgent(index)}
                >
                  <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_0_10px_rgba(200,200,200,0.5)] bg-gray-100">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`AI Agent: ${agentData[index % agentData.length].type}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 60px, (max-width: 768px) 80px, 100px"
                    />

                    {/* Agent type label */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 flex items-end p-1 transition-opacity duration-200">
                      <p className="text-[8px] md:text-[10px] text-white font-medium truncate w-full text-center">
                        {agentData[index % agentData.length].type}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-200 shadow-sm"
            >
              {selectedIndex !== null && (
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={agentImages[selectedIndex] || "/placeholder.svg"}
                      alt={`AI Agent: ${agentData[selectedIndex % agentData.length].type}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 160px, 192px"
                    />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center rounded-xl bg-emerald-950 px-2.5 py-0.5 text-[10px] font-medium text-white mb-2">
                      AI AGENT
                    </div>
                    <h3 className="text-xl font-medium tracking-tighter mb-2">
                      {agentData[selectedIndex % agentData.length].type}
                    </h3>
                    <p className="text-sm font-light text-gray-700 mb-4">
                      {agentData[selectedIndex % agentData.length].description}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <p className="font-medium text-xs">Response Time</p>
                        <p className="font-light text-xs">Under 2 seconds</p>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <p className="font-medium text-xs">Accuracy Rate</p>
                        <p className="font-light text-xs">98.7%</p>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <p className="font-medium text-xs">Languages</p>
                        <p className="font-light text-xs">12 supported</p>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-lg">
                        <p className="font-medium text-xs">Integration</p>
                        <p className="font-light text-xs">All major platforms</p>
                      </div>
                    </div>
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex gap-2 mt-4 md:mt-0 md:flex-col">
                    <button
                      onClick={() => navigateAgent("prev")}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Previous agent"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={() => navigateAgent("next")}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Next agent"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative elements */}
        <motion.div
          className="absolute -z-10 top-1/2 left-1/2 w-[80%] h-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-950/5 blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Info text */}
      <div className="mt-6 text-center">
        <p className="text-sm font-medium text-emerald-950">
          {gridView ? "29 AI Agents with unique specializations" : "Click on any agent to view details"}
        </p>
        <p className="text-xs font-light text-gray-500 mt-1">
          Each agent is trained on specific business travel needs and company policies
        </p>
      </div>
    </div>
  )
}
