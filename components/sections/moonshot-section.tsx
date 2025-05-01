"use client"

import { motion } from "framer-motion"
import { Rocket, Planet, Lightbulb, Brain } from "@phosphor-icons/react"

export default function MoonshotSection() {
  return (
    <motion.section
      id="moonshot"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        MOONSHOT VISION
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        The future of business travel (2030+)
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-emerald-950 text-white p-4 rounded-xl">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Rocket className="h-5 w-5 text-white mr-2" weight="fill" />
              Beyond current horizons
            </h3>
            <p className="text-sm font-light mb-4">
              While our immediate focus is on revolutionizing corporate travel management, our long-term vision extends
              far beyond. We're building the foundation for a future where business travel is not just managed, but
              fundamentally transformed.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-white/20 p-1">
                  <Planet className="h-3.5 w-3.5 text-white" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Autonomous travel coordination</span> where AI agents negotiate, book,
                  and manage entire business trips with minimal human input
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-white/20 p-1">
                  <Planet className="h-3.5 w-3.5 text-white" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Predictive business travel</span> that anticipates needs before they
                  arise, suggesting trips based on business outcomes and relationship data
                </p>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-white/20 p-1">
                  <Planet className="h-3.5 w-3.5 text-white" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Seamless global mobility</span> with integrated visa processing,
                  regulatory compliance, and cultural adaptation tools
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Lightbulb className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Emerging technologies we're exploring
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Brain className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Advanced multimodal AI</p>
                  <p className="text-xs font-light text-gray-700">
                    Systems that understand and process text, voice, images, and video simultaneously for more natural
                    and powerful travel assistance
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Brain className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Quantum computing applications</p>
                  <p className="text-xs font-light text-gray-700">
                    Leveraging quantum algorithms for complex optimization problems in travel routing, pricing, and
                    carbon impact reduction
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Brain className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Blockchain for travel credentials</p>
                  <p className="text-xs font-light text-gray-700">
                    Decentralized identity and credential verification for seamless cross-border travel and secure
                    sharing of travel documents
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Research initiatives (2026-2030)</h3>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Sustainable business travel</p>
                <p className="text-xs font-light mb-2">
                  Developing AI systems that optimize travel not just for cost and efficiency, but for environmental
                  impact, with accurate carbon tracking and offsetting built into every decision.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950">
                    Carbon intelligence
                  </span>
                  <span className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950">
                    Sustainable routing
                  </span>
                  <span className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950">
                    Impact optimization
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Immersive virtual alternatives</p>
                <p className="text-xs font-light mb-2">
                  Creating next-generation virtual meeting experiences that can truly replace certain types of business
                  travel, with AI that helps determine when physical travel is necessary vs. when virtual is sufficient.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950">
                    Spatial computing
                  </span>
                  <span className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950">
                    Digital twins
                  </span>
                  <span className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950">
                    Haptic feedback
                  </span>
                </div>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Autonomous travel companions</p>
                <p className="text-xs font-light mb-2">
                  AI agents that accompany travelers throughout their journey, providing real-time assistance,
                  translation, cultural guidance, and handling unexpected disruptions with human-like problem-solving.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950">
                    Embodied AI
                  </span>
                  <span className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950">
                    Contextual awareness
                  </span>
                  <span className="inline-flex items-center rounded-xl bg-emerald-950/10 px-2.5 py-0.5 text-[10px] font-medium text-emerald-950">
                    Adaptive learning
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Beyond travel management</h3>
            <p className="text-sm font-light mb-3">
              Our ultimate vision extends beyond just managing travel to fundamentally reimagining how global business
              operates. We see Suitpax evolving into a comprehensive platform that:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Rocket className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  Optimizes the entire business relationship lifecycle, from initial meetings to ongoing collaboration
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Rocket className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  Creates an AI-powered global business network that facilitates connections and opportunities
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Rocket className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  Becomes the operating system for global business mobility and collaboration
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
