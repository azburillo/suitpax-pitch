"use client"

import { motion } from "framer-motion"
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
  "/ai-agents/agent30.png",
  "/ai-agents/agent31.png",
  "/ai-agents/agent32.png",
  "/ai-agents/agent33.png",
  "/ai-agents/agent34.png",
  "/ai-agents/agent-emma-new.jpeg",
  "/ai-agents/agent-sofia-new.jpeg",
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
  { type: "International Logistics Specialist", description: "Coordinates complex multi-country travel arrangements" },
  { type: "Executive Travel Concierge", description: "Provides white-glove service for executive travel needs" },
  { type: "Sustainability Travel Advisor", description: "Optimizes travel for minimal environmental impact" },
  { type: "Risk Management Expert", description: "Assesses and mitigates travel risks in real-time" },
  { type: "Corporate Retreat Planner", description: "Organizes team-building and corporate retreat experiences" },
  { type: "Travel Analytics Specialist", description: "Analyzes travel data to optimize company spending" },
  { type: "AI Travel Assistant", description: "Your personal executive travel assistant" },
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
    <div className="w-full py-8 bg-gray-50">
      <div className="relative w-full max-w-6xl mx-auto">
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

        <div className="mb-6 text-center">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold mb-2">Meet Our AI Agents</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our specialized AI agents handle every aspect of business travel, from booking to expense management
          </p>
        </div>

        {gridView ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
          >
            {agentImages.map((src, index) => (
              <motion.div
                key={`agent-${index}`}
                className="relative cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.02 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => selectAgent(index)}
              >
                <div className="relative w-full aspect-square rounded-xl overflow-hidden shadow-md bg-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2">
                    <p className="text-xs text-white font-medium">{agentData[index % agentData.length].type}</p>
                  </div>
                  <Image
                    src={src || "/placeholder.svg"}
                    alt={`AI Agent: ${agentData[index % agentData.length].type}`}
                    fill
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 640px) 33vw, (max-width: 768px) 25vw, 12.5vw"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gradient-to-br from-emerald-50 to-white p-5 rounded-2xl border border-emerald-100 shadow-md"
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
                      <p className="font-light text-xs">English, Spanish, French</p>
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
    </div>
  )
}
