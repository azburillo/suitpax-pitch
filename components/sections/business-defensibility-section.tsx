"use client"

import { motion } from "framer-motion"
import { Shield, Brain, Database, Code, Lock } from "@phosphor-icons/react"

export default function BusinessDefensibilitySection() {
  return (
    <motion.section
      id="business-defensibility"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        BUSINESS DEFENSIBILITY
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Building an unassailable competitive position
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Shield className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Proprietary technology moats
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Brain className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Specialized AI models</p>
                  <p className="text-xs font-light text-gray-700">
                    Our AI models are specifically trained on corporate travel data and optimized for business travel
                    use cases, creating a significant lead over generic AI solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Database className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Proprietary data assets</p>
                  <p className="text-xs font-light text-gray-700">
                    8+ months of collecting and structuring corporate travel data has created a unique dataset that
                    powers our AI and analytics capabilities
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Code className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Integration architecture</p>
                  <p className="text-xs font-light text-gray-700">
                    Our platform connects with 500+ travel providers through a proprietary middleware layer that
                    normalizes data and enables seamless booking and management
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Lock className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Intellectual property
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Patents</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• 2 patents filed for AI-driven travel optimization algorithms</li>
                  <li>• 1 patent filed for our multi-modal travel recommendation system</li>
                  <li>• 1 patent pending for our dynamic policy compliance engine</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Trade secrets</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Proprietary AI training methodologies for travel-specific models</li>
                  <li>• Custom data processing pipelines for travel inventory management</li>
                  <li>• Specialized prompt engineering techniques for travel agents</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Strategic defensibility</h3>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">First-mover advantage</p>
                <p className="text-xs font-light">
                  We're the first to market with a comprehensive AI-powered corporate travel platform, giving us a
                  significant head start in data collection, customer relationships, and brand recognition in this
                  specific niche.
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Exclusive partnerships</p>
                <p className="text-xs font-light">
                  We've secured exclusive deals with key travel providers and technology partners, including preferred
                  rates and unique inventory access that competitors cannot easily replicate.
                </p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">High switching costs</p>
                <p className="text-xs font-light">
                  Once integrated into a company's workflows, travel policies, and financial systems, Suitpax becomes
                  deeply embedded, creating significant switching costs and strong customer retention.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3">Competitive advantages</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Shield className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Vertical specialization</p>
                  <p className="text-xs font-light text-gray-700">
                    Unlike horizontal AI platforms or traditional travel tools, we're 100% focused on corporate travel,
                    allowing us to build deeper expertise and more tailored solutions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Shield className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Full-stack approach</p>
                  <p className="text-xs font-light text-gray-700">
                    We own the entire technology stack from AI models to user interface, allowing us to create a
                    seamless experience that point solutions cannot match
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <Shield className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Founder expertise</p>
                  <p className="text-xs font-light text-gray-700">
                    Our founding team combines deep travel industry knowledge with cutting-edge AI expertise, a rare
                    combination that gives us unique insights and capabilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
