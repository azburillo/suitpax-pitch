"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Clock, MapPin, Building } from "lucide-react"

export default function AITechnologyShowcase() {
  const [conversationStep, setConversationStep] = useState(0)
  const [activeTab, setActiveTab] = useState("process")

  // Auto-advance the conversation
  useEffect(() => {
    if (conversationStep < 5) {
      const timer = setTimeout(
        () => {
          setConversationStep(conversationStep + 1)
        },
        conversationStep === 0 ? 1000 : 2000,
      )
      return () => clearTimeout(timer)
    }
  }, [conversationStep])

  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-5 rounded-2xl border border-gray-700 shadow-lg overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center rounded-xl bg-black/40 px-2.5 py-0.5 text-[10px] font-medium text-gray-300 mb-3">
          AI TECHNOLOGY
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h2 className="text-lg sm:text-xl font-medium tracking-tight text-white">
            Experience Our AI Travel Assistant
          </h2>

          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab("process")}
              className={`px-3 py-1 text-xs rounded-full ${
                activeTab === "process" ? "bg-white/10 text-white" : "bg-black/20 text-gray-400"
              }`}
            >
              Demo
            </button>
            <button
              onClick={() => setActiveTab("architecture")}
              className={`px-3 py-1 text-xs rounded-full ${
                activeTab === "architecture" ? "bg-white/10 text-white" : "bg-black/20 text-gray-400"
              }`}
            >
              Technology
            </button>
          </div>
        </div>

        {activeTab === "process" ? (
          <div className="space-y-4">
            {/* AI Agent Header */}
            <div className="flex items-center space-x-3 mb-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
                <Image
                  src="/ai-agent-emma.jpg"
                  alt="AI Assistant Zia"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-white text-xs font-light">Zia from Suitpax</p>
                <p className="text-white/60 text-xs">AI Travel Agent</p>
              </div>

              {/* Monitoring badge */}
              <div className="bg-black/60 backdrop-blur-md rounded-full border border-white/10 overflow-hidden flex items-center p-1 shadow-lg">
                <span className="relative flex h-1.5 w-1.5 mr-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-[10px] text-white whitespace-nowrap">Active</span>
              </div>
            </div>

            {/* Conversation Container */}
            <div className="space-y-3 mb-3 min-h-[220px]">
              {/* Initial AI greeting */}
              <AnimatePresence>
                {conversationStep >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-2.5 border border-white/10 max-w-[85%]"
                  >
                    <p className="text-white/90 text-xs">
                      Good morning, Alex! How can I assist with your travel plans today?
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* User request */}
              <AnimatePresence>
                {conversationStep >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-600/30 backdrop-blur-sm rounded-lg p-2.5 border border-blue-500/20 max-w-[85%] ml-auto"
                  >
                    <p className="text-white/90 text-xs">
                      Prepare a flight from Barcelona to London with British Airways on July 27, 2025, and find the best
                      rooms at a Marriott hotel in London.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* AI response with options */}
              <AnimatePresence>
                {conversationStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2"
                  >
                    <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-2.5 border border-white/10 max-w-[85%]">
                      <p className="text-white/90 text-xs mb-2">
                        I've found several British Airways flights from Barcelona to London on July 27, 2025, and
                        top-rated rooms at Marriott hotels. Here are your best options:
                      </p>

                      {/* Flight options */}
                      <div className="mb-2">
                        <p className="text-white/70 text-[10px] mb-1.5 font-medium">FLIGHT OPTIONS:</p>
                        <div className="grid grid-cols-2 gap-1.5">
                          <AnimatePresence>
                            {conversationStep >= 4 && (
                              <>
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2, delay: 0.1 }}
                                  className="bg-black/30 rounded-md p-1.5 border border-white/10"
                                >
                                  <div className="flex items-center mb-1">
                                    <Image
                                      src="/airlines/british-airways.png"
                                      alt="British Airways"
                                      width={16}
                                      height={16}
                                      className="mr-1.5"
                                    />
                                    <span className="text-white text-[10px] font-medium">BA482</span>
                                    <span className="ml-auto text-green-400 text-[10px]">€210</span>
                                  </div>
                                  <div className="flex items-center text-[8px] text-white/70">
                                    <Clock className="w-2.5 h-2.5 mr-1" />
                                    <span>07:15 - 09:05</span>
                                  </div>
                                </motion.div>

                                <motion.div
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2, delay: 0.2 }}
                                  className="bg-black/30 rounded-md p-1.5 border border-white/10"
                                >
                                  <div className="flex items-center mb-1">
                                    <Image
                                      src="/airlines/british-airways.png"
                                      alt="British Airways"
                                      width={16}
                                      height={16}
                                      className="mr-1.5"
                                    />
                                    <span className="text-white text-[10px] font-medium">BA486</span>
                                    <span className="ml-auto text-white/90 text-[10px]">€245</span>
                                  </div>
                                  <div className="flex items-center text-[8px] text-white/70">
                                    <Clock className="w-2.5 h-2.5 mr-1" />
                                    <span>11:30 - 13:20</span>
                                  </div>
                                </motion.div>
                              </>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>

                      {/* Hotel options */}
                      <div>
                        <p className="text-white/70 text-[10px] mb-1.5 font-medium">MARRIOTT HOTEL OPTIONS:</p>
                        <div className="grid grid-cols-2 gap-1.5">
                          <AnimatePresence>
                            {conversationStep >= 5 && (
                              <>
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2, delay: 0.3 }}
                                  className="bg-black/30 rounded-md p-1.5 border border-white/10"
                                >
                                  <div className="flex items-center mb-1">
                                    <Building className="w-3 h-3 mr-1.5 text-white/80" />
                                    <span className="text-white text-[10px] font-medium">Park Lane</span>
                                  </div>
                                  <div className="flex items-center text-[8px] text-white/70">
                                    <MapPin className="w-2.5 h-2.5 mr-1" />
                                    <span>Mayfair • £320</span>
                                  </div>
                                </motion.div>

                                <motion.div
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.2, delay: 0.4 }}
                                  className="bg-black/30 rounded-md p-1.5 border border-white/10"
                                >
                                  <div className="flex items-center mb-1">
                                    <Building className="w-3 h-3 mr-1.5 text-white/80" />
                                    <span className="text-white text-[10px] font-medium">St. Pancras</span>
                                  </div>
                                  <div className="flex items-center text-[8px] text-white/70">
                                    <MapPin className="w-2.5 h-2.5 mr-1" />
                                    <span>Kings Cross • £285</span>
                                  </div>
                                </motion.div>
                              </>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input field */}
            <div className="relative">
              <input
                type="text"
                className="w-full py-2 pl-3 pr-10 bg-black/50 backdrop-blur-md border border-white/20 rounded-lg focus:ring-1 focus:ring-white/30 focus:border-transparent outline-none transition text-white text-xs"
                placeholder="Ask Zia about your travel plans..."
                disabled
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-6 h-6 rounded-full bg-blue-600/80 hover:bg-blue-600 transition">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-black/20 rounded-xl p-3 border border-gray-700">
            <div className="flex flex-col items-center">
              <div className="mb-3 text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 mb-2">
                  <svg
                    className="w-5 h-5 text-green-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 4V2M12 20V22M4 12H2M22 12H20M19.778 19.778L18.364 18.364M19.778 4.222L18.364 5.636M4.222 19.778L5.636 18.364M4.222 4.222L5.636 5.636"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-[10px] font-medium text-white">AI Core Technology</p>
              </div>

              <div className="grid grid-cols-3 gap-2 w-full mb-3">
                <div className="bg-gray-800/50 rounded-lg p-2 text-center border border-gray-700/50">
                  <p className="text-[10px] font-medium text-white mb-1">NLP</p>
                  <p className="text-[8px] text-gray-400">Intent Recognition</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-2 text-center border border-gray-700/50">
                  <p className="text-[10px] font-medium text-white mb-1">LLM</p>
                  <p className="text-[8px] text-gray-400">Response Generation</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-2 text-center border border-gray-700/50">
                  <p className="text-[10px] font-medium text-white mb-1">RL</p>
                  <p className="text-[8px] text-gray-400">Preference Learning</p>
                </div>
              </div>

              <div className="w-full space-y-2">
                <div className="flex items-center">
                  <div className="w-24 text-[8px] text-gray-400">Intent Accuracy</div>
                  <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "98.7%" }}></div>
                  </div>
                  <div className="w-10 text-right text-[8px] text-white">98.7%</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-[8px] text-gray-400">Response Time</div>
                  <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  <div className="w-10 text-right text-[8px] text-white">0.8s</div>
                </div>
                <div className="flex items-center">
                  <div className="w-24 text-[8px] text-gray-400">User Satisfaction</div>
                  <div className="flex-1 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: "92%" }}></div>
                  </div>
                  <div className="w-10 text-right text-[8px] text-white">92%</div>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 w-full">
                <div className="bg-gray-800/30 rounded-lg p-2 border border-gray-700/30">
                  <p className="text-[10px] font-medium text-white mb-0.5">Knowledge Graph</p>
                  <p className="text-[8px] text-gray-400">Travel-specific ontology with 50M+ entities</p>
                </div>
                <div className="bg-gray-800/30 rounded-lg p-2 border border-gray-700/30">
                  <p className="text-[10px] font-medium text-white mb-0.5">API Orchestration</p>
                  <p className="text-[8px] text-gray-400">Real-time integration with 400+ providers</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
