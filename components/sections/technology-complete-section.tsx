"use client"

import { motion } from "framer-motion"
import { Code, Database, Lightning } from "@phosphor-icons/react"
import Image from "next/image"

export default function TechnologyCompleteSection() {
  return (
    <motion.section
      id="technology-complete"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          TECHNOLOGY & INFRASTRUCTURE
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-4 sm:mb-6">
        Powered by cutting-edge technology
      </h2>

      {/* Technology Partners */}
      <div className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-8 items-center justify-items-center mb-6">
        <div className="bg-black p-2 xs:p-3 sm:p-4 rounded-xl flex items-center justify-center w-full max-w-[80px] xs:max-w-[100px] sm:max-w-[120px] md:max-w-[150px] aspect-square">
          <Image src="/logo-triangle.png" alt="Technology Partner" width={100} height={100} className="w-full h-auto" />
        </div>
        <div className="bg-[#052e22] p-2 xs:p-3 sm:p-4 rounded-xl flex items-center justify-center w-full max-w-[80px] xs:max-w-[100px] sm:max-w-[120px] md:max-w-[150px] aspect-square">
          <Image src="/logo-diamond.png" alt="Technology Partner" width={100} height={100} className="w-full h-auto" />
        </div>
        <div className="bg-black p-2 xs:p-3 sm:p-4 rounded-xl flex items-center justify-center w-full max-w-[80px] xs:max-w-[100px] sm:max-w-[120px] md:max-w-[150px] aspect-square">
          <Image src="/logo-s.png" alt="Technology Partner" width={100} height={100} className="w-full h-auto" />
        </div>
      </div>

      <div className="text-center mb-6">
        <p className="text-sm font-medium">Integrations with industry leaders</p>
        <p className="text-xs font-light text-gray-700 mt-1">
          We connect with +500 global providers, including airlines, hotels, car rentals, and payment platforms to offer
          a complete and frictionless experience.
        </p>
      </div>

      {/* Tech Stack Details */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium tracking-tighter mb-3 flex items-center">
              <Code className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Frontend & Deployment
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Next.js</p>
                <p className="text-xs font-light text-gray-700">React framework with hybrid rendering</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Vercel</p>
                <p className="text-xs font-light text-gray-700">Global deployment platform</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Clerk</p>
                <p className="text-xs font-light text-gray-700">Authentication & user management</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Intercom</p>
                <p className="text-xs font-light text-gray-700">Customer support platform</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">PostHog</p>
                <p className="text-xs font-light text-gray-700">Advanced analytics</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium tracking-tighter mb-3 flex items-center">
              <Database className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Backend & AI
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Prisma</p>
                <p className="text-xs font-light text-gray-700">Next-generation ORM</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Neon Tech</p>
                <p className="text-xs font-light text-gray-700">Serverless PostgreSQL</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Python</p>
                <p className="text-xs font-light text-gray-700">Data processing & ML</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Anthropic Claude</p>
                <p className="text-xs font-light text-gray-700">Advanced language models</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Cryptography</p>
                <p className="text-xs font-light text-gray-700">Secure data encryption</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium">Redis</p>
                <p className="text-xs font-light text-gray-700">In-memory data store</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium tracking-tighter mb-3 flex items-center">
              <Lightning className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Suitpax API
            </h3>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm font-medium">Proprietary Technology Stack</p>
              <p className="text-xs font-light text-gray-700">
                8 months of development to create a robust API that integrates more than 500 travel providers, payment
                systems, and financial services. Scalable architecture with specialized microservices for each business
                vertical.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
                  REST + GraphQL
                </span>
                <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
                  Microservices
                </span>
                <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
                  Serverless
                </span>
                <span className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
                  Real-time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
