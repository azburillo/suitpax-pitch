"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Clock, MapPin, Building, Star, Cpu, Database, Network, BrainCircuit } from "lucide-react"

export default function AITechnologyShowcase() {
  const [conversationStep, setConversationStep] = useState(0)
  const [showArchitecture, setShowArchitecture] = useState(false)

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
    <section className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="inline-flex items-center rounded-xl bg-blue-950 px-2.5 py-0.5 text-[10px] font-medium text-white mb-3 sm:mb-4">
        AI TECHNOLOGY
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4 text-gray-900">
        Experience Our AI Travel Assistant in Action
      </h2>

      <p className="text-sm sm:text-base font-light text-gray-700 mb-6">
        See how our AI understands complex travel requests, optimizes for preferences and policies, and delivers
        personalized options in seconds.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Conversation Demo */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-700 relative overflow-hidden">
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

          {/* AI Agent Header */}
          <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6 relative z-10">
            <div className="relative w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden border border-white/20 flex-shrink-0">
              <Image src="/ai-agent-emma.jpg" alt="AI Assistant Zia" width={56} height={56} className="object-cover" />
            </div>
            <div className="flex-1">
              <p className="text-white text-xs sm:text-sm font-light">Zia from Suitpax</p>
              <p className="text-white/60 text-xs sm:text-sm">AI Travel Agent</p>
            </div>

            {/* Monitoring badge */}
            <div className="bg-black/60 backdrop-blur-md rounded-full border border-white/10 overflow-hidden flex items-center p-1 sm:p-1.5 shadow-lg">
              <div className="relative w-5 h-5 sm:w-6 sm:h-6 rounded-full overflow-hidden mr-2">
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
                <span className="relative flex h-1.5 sm:h-2 w-1.5 sm:w-2 mr-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 sm:h-2 w-1.5 sm:w-2 bg-white"></span>
                </span>
                <span className="text-[10px] sm:text-xs text-white whitespace-nowrap">Active assistant</span>
              </div>
            </div>
          </div>

          {/* Conversation Container */}
          <div className="space-y-4 mb-4 min-h-[300px] sm:min-h-[350px]">
            {/* Initial AI greeting */}
            <AnimatePresence>
              {conversationStep >= 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 max-w-[85%]"
                >
                  <p className="text-white/90 text-sm sm:text-base">
                    Good morning, Alex! How can I assist with your travel plans today?
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* User request 1 */}
            <AnimatePresence>
              {conversationStep >= 2 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-blue-600/30 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-blue-500/20 max-w-[85%] ml-auto"
                >
                  <p className="text-white/90 text-sm sm:text-base">
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-3 sm:space-y-4"
                >
                  <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/10 max-w-[85%]">
                    <p className="text-white/90 text-sm sm:text-base mb-3">
                      I've found several British Airways flights from Barcelona to London on July 27, 2025, and
                      top-rated rooms at Marriott hotels. Here are your best options based on your company policy and
                      preferences:
                    </p>

                    {/* Flight options */}
                    <div className="mb-4">
                      <p className="text-white/70 text-xs mb-2 font-medium">FLIGHT OPTIONS:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <AnimatePresence>
                          {conversationStep >= 4 && (
                            <>
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="bg-black/30 rounded-lg p-2 border border-white/10"
                              >
                                <div className="flex items-center mb-1">
                                  <Image
                                    src="/airlines/british-airways.png"
                                    alt="British Airways"
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                  />
                                  <span className="text-white text-xs font-medium">BA482</span>
                                  <span className="ml-auto text-green-400 text-xs">€210</span>
                                </div>
                                <div className="flex items-center text-[10px] text-white/70">
                                  <Clock className="w-3 h-3 mr-1" />
                                  <span>07:15 - 09:05 (1h 50m)</span>
                                </div>
                                <div className="flex items-center text-[10px] text-white/70 mt-0.5">
                                  <Star className="w-3 h-3 mr-1 text-yellow-400" />
                                  <span>Policy compliant</span>
                                </div>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.2 }}
                                className="bg-black/30 rounded-lg p-2 border border-white/10"
                              >
                                <div className="flex items-center mb-1">
                                  <Image
                                    src="/airlines/british-airways.png"
                                    alt="British Airways"
                                    width={20}
                                    height={20}
                                    className="mr-2"
                                  />
                                  <span className="text-white text-xs font-medium">BA486</span>
                                  <span className="ml-auto text-white/90 text-xs">€245</span>
                                </div>
                                <div className="flex items-center text-[10px] text-white/70">
                                  <Clock className="w-3 h-3 mr-1" />
                                  <span>11:30 - 13:20 (1h 50m)</span>
                                </div>
                                <div className="flex items-center text-[10px] text-white/70 mt-0.5">
                                  <Star className="w-3 h-3 mr-1 text-yellow-400" />
                                  <span>Business class available</span>
                                </div>
                              </motion.div>
                            </>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Hotel options */}
                    <div>
                      <p className="text-white/70 text-xs mb-2 font-medium">MARRIOTT HOTEL OPTIONS:</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <AnimatePresence>
                          {conversationStep >= 5 && (
                            <>
                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.3 }}
                                className="bg-black/30 rounded-lg p-2 border border-white/10"
                              >
                                <div className="flex items-center mb-1">
                                  <Building className="w-4 h-4 mr-2 text-white/80" />
                                  <span className="text-white text-xs font-medium">
                                    London Marriott Hotel Park Lane
                                  </span>
                                </div>
                                <div className="flex items-center text-[10px] text-white/70">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  <span>Mayfair, Central London</span>
                                </div>
                                <div className="flex items-center text-[10px] text-white/70 mt-0.5">
                                  <span className="text-yellow-400 mr-1">★★★★★</span>
                                  <span>£320/night • Corporate rate</span>
                                </div>
                              </motion.div>

                              <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className="bg-black/30 rounded-lg p-2 border border-white/10"
                              >
                                <div className="flex items-center mb-1">
                                  <Building className="w-4 h-4 mr-2 text-white/80" />
                                  <span className="text-white text-xs font-medium">St. Pancras Renaissance Hotel</span>
                                </div>
                                <div className="flex items-center text-[10px] text-white/70">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  <span>Kings Cross, London</span>
                                </div>
                                <div className="flex items-center text-[10px] text-white/70 mt-0.5">
                                  <span className="text-yellow-400 mr-1">★★★★★</span>
                                  <span>£285/night • Recommended</span>
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
          <div className="relative z-10">
            <input
              type="text"
              className="w-full py-2.5 sm:py-3 pl-3 sm:pl-4 pr-10 bg-black/50 backdrop-blur-md border border-white/20 rounded-xl focus:ring-1 focus:ring-white/30 focus:border-transparent outline-none transition text-white text-sm sm:text-base"
              placeholder="Ask Zia about your travel plans..."
              disabled
            />
            <button className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-blue-600/80 hover:bg-blue-600 transition">
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* ML Architecture Visualization */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg sm:text-xl font-medium text-gray-900">Behind The Scenes</h3>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowArchitecture(false)}
                className={`px-3 py-1 text-xs rounded-full ${!showArchitecture ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}
              >
                Process Flow
              </button>
              <button
                onClick={() => setShowArchitecture(true)}
                className={`px-3 py-1 text-xs rounded-full ${showArchitecture ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600"}`}
              >
                ML Architecture
              </button>
            </div>
          </div>

          {!showArchitecture ? (
            <div className="flex-1 flex flex-col justify-center">
              <div className="relative">
                {/* Process Flow Visualization */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Step 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-700 font-medium">1</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Natural Language Understanding</h4>
                      <p className="text-xs text-gray-600">
                        Our AI parses complex travel requests, identifying destinations, dates, preferences, and
                        constraints.
                      </p>
                    </div>
                  </motion.div>

                  {/* Connector */}
                  <div className="w-0.5 h-4 bg-gray-200 ml-5"></div>

                  {/* Step 2 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-700 font-medium">2</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Policy & Preference Matching</h4>
                      <p className="text-xs text-gray-600">
                        The system checks company travel policies and user preferences to ensure compliant
                        recommendations.
                      </p>
                    </div>
                  </motion.div>

                  {/* Connector */}
                  <div className="w-0.5 h-4 bg-gray-200 ml-5"></div>

                  {/* Step 3 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-700 font-medium">3</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Multi-Source Data Aggregation</h4>
                      <p className="text-xs text-gray-600">
                        Our AI searches across multiple providers and APIs to find the best options in real-time.
                      </p>
                    </div>
                  </motion.div>

                  {/* Connector */}
                  <div className="w-0.5 h-4 bg-gray-200 ml-5"></div>

                  {/* Step 4 */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-700 font-medium">4</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-1">Intelligent Ranking & Presentation</h4>
                      <p className="text-xs text-gray-600">
                        Options are ranked based on 20+ factors including price, convenience, sustainability, and past
                        preferences.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              {/* ML Architecture Visualization */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md"
              >
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="flex flex-col items-center">
                    {/* Input Layer */}
                    <div className="mb-4 text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-2">
                        <BrainCircuit className="w-8 h-8 text-blue-600" />
                      </div>
                      <p className="text-xs font-medium text-gray-900">Natural Language Processing</p>
                      <p className="text-[10px] text-gray-500">BERT-based Intent Recognition</p>
                    </div>

                    {/* Arrow */}
                    <div className="w-0.5 h-6 bg-gray-300"></div>

                    {/* Middle Layer */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-2">
                          <Database className="w-6 h-6 text-green-600" />
                        </div>
                        <p className="text-[10px] font-medium text-gray-900">Knowledge Graph</p>
                      </div>
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-2">
                          <Cpu className="w-6 h-6 text-purple-600" />
                        </div>
                        <p className="text-[10px] font-medium text-gray-900">Decision Engine</p>
                      </div>
                      <div className="text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 mb-2">
                          <Network className="w-6 h-6 text-orange-600" />
                        </div>
                        <p className="text-[10px] font-medium text-gray-900">API Orchestration</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="w-0.5 h-6 bg-gray-300"></div>

                    {/* Output Layer */}
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-2">
                        <BrainCircuit className="w-8 h-8 text-blue-600" />
                      </div>
                      <p className="text-xs font-medium text-gray-900">Response Generation</p>
                      <p className="text-[10px] text-gray-500">GPT-4 Fine-tuned Model</p>
                    </div>
                  </div>

                  {/* Key metrics */}
                  <div className="grid grid-cols-3 gap-2 mt-6 text-center">
                    <div>
                      <p className="text-xs font-medium text-gray-900">98.7%</p>
                      <p className="text-[10px] text-gray-500">Intent Accuracy</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">0.8s</p>
                      <p className="text-[10px] text-gray-500">Avg. Response Time</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">92%</p>
                      <p className="text-[10px] text-gray-500">User Satisfaction</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
