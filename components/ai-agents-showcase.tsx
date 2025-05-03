"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

// Expanded agent images array with the new images
const agents = [
  { id: 1, name: "Flight Booking Agent", image: "/ai-agents/agent1.png" },
  { id: 2, name: "Hotel Reservation Agent", image: "/ai-agents/agent2.png" },
  { id: 3, name: "Ground Transportation Agent", image: "/ai-agents/agent3.png" },
  { id: 4, name: "Expense Management Agent", image: "/ai-agents/agent4.png" },
  { id: 5, name: "Itinerary Optimization Agent", image: "/ai-agents/agent5.png" },
  { id: 6, name: "Travel Policy Compliance Agent", image: "/ai-agents/agent6.png" },
  { id: 7, name: "Risk Assessment Agent", image: "/ai-agents/agent7.png" },
  { id: 8, name: "Visa & Documentation Agent", image: "/ai-agents/agent8.png" },
  { id: 9, name: "Meeting Scheduler Agent", image: "/ai-agents/agent9.png" },
  { id: 10, name: "Local Guide Agent", image: "/ai-agents/agent10.png" },
  { id: 30, name: "Travel Analytics Agent", image: "/ai-agents/agent30.png" },
  { id: 31, name: "Executive Travel Agent", image: "/ai-agents/agent31.png" },
]

// Agent types for better organization - expanded with new specializations
const agentTypes = [
  "Travel Planner",
  "Expense Manager",
  "Itinerary Optimizer",
  "Local Guide",
  "Booking Assistant",
  "Policy Advisor",
  "Budget Analyst",
  "Safety Monitor",
  "Visa Specialist",
  "Accommodation Expert",
  "Transport Coordinator",
  "Meeting Scheduler",
  "Currency Advisor",
  "Language Assistant",
  "Dining Concierge",
  "Weather Forecaster",
  "Cultural Guide",
  "Emergency Support",
  "Loyalty Program Expert",
  "Sustainability Advisor",
  "Executive Assistant",
  "Group Coordinator",
  "Wellness Advisor",
  "Accessibility Specialist",
  "Event Planner",
  "Networking Facilitator",
  "Compliance Officer",
  "Tech Support",
  "Feedback Analyzer",
  "Risk Assessment Specialist", // New
  "Diversity & Inclusion Advisor", // New
  "Carbon Footprint Calculator", // New
  "Bleisure Trip Planner", // New
  "Remote Work Coordinator", // New
  "Family Travel Specialist", // New
]

export default function AIAgentsShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="w-full py-8">
      <div className="relative w-full max-w-5xl mx-auto">
        {/* Compact grid layout with more agents */}
        <div className="grid grid-cols-6 md:grid-cols-9 lg:grid-cols-12 gap-1.5 md:gap-2">
          {agents.map((agent, index) => (
            <motion.div
              key={`agent-${agent.id}`}
              className="relative aspect-square"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-[0_0_8px_rgba(200,200,200,0.5)] bg-gray-100 transition-all duration-300 hover:shadow-[0_0_12px_rgba(6,95,70,0.5)] hover:scale-105">
                <Image
                  src={agent.image || "/placeholder.svg"}
                  alt={`AI Agent: ${agent.name}`}
                  fill
                  className="object-cover transition-all duration-300 hover:grayscale-0"
                  sizes="(max-width: 640px) 50px, (max-width: 768px) 70px, 90px"
                />

                {/* Agent type label that appears on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-[7px] md:text-[8px] text-white font-medium truncate w-full text-center">
                    {agentTypes[index % agentTypes.length]}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

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

        <motion.div
          className="absolute -z-10 bottom-10 right-10 w-32 h-32 rounded-full bg-emerald-950/10 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Agent selection info */}
      <div className="mt-6 text-center">
        <p className="text-sm font-medium text-emerald-950">
          {hoveredIndex !== null ? (
            <>
              Specialized in: <span className="font-bold">{agentTypes[hoveredIndex % agentTypes.length]}</span>
            </>
          ) : (
            <>35 AI Agents with unique specializations</>
          )}
        </p>
        <p className="text-xs font-light text-gray-500 mt-1">
          Each agent is trained on specific business travel needs and company policies
        </p>
      </div>
    </div>
  )
}
