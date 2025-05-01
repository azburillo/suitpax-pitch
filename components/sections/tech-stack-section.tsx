"use client"

import { motion } from "framer-motion"
import { Code, Database, Robot, Gear, Lightning } from "@phosphor-icons/react"
import Image from "next/image"

export default function TechStackSection() {
  return (
    <motion.section
      id="tech-stack"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.75 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          TECH STACK
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-4 sm:mb-6">
        Cutting-edge infrastructure
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium tracking-tighter mb-3 flex items-center">
              <Code className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Frontend & Deployment
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Vercel</p>
                  <p className="text-xs font-light text-gray-700">
                    Deployment platform with global optimization and automatic scaling
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-black flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                    <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Next.js</p>
                  <p className="text-xs font-light text-gray-700">
                    React framework with hybrid rendering for maximum performance and SEO
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-950 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.186c0-3.401.85-6.254 2.495-8.305C5.845 1.577 8.598.396 12.18.373c3.581.024 6.334 1.205 8.184 3.509 1.645 2.05 2.495 4.904 2.495 8.304 0 3.401-.85 6.254-2.495 8.305-1.85 2.304-4.603 3.485-8.178 3.509Zm-.007-1.501c3.16-.022 5.514-1.052 7.001-2.882 1.404-1.745 2.098-4.21 2.098-7.431 0-3.22-.694-5.686-2.098-7.431-1.487-1.83-3.84-2.86-7.001-2.882-3.16.022-5.514 1.052-7.001 2.882-1.404 1.745-2.098 4.21-2.098 7.431 0 3.22.694 5.686 2.098 7.431 1.487 1.83 3.84 2.86 7.001 2.882Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Clerk</p>
                  <p className="text-xs font-light text-gray-700">
                    Complete authentication and user management with enterprise security
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                    <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0zm0 4.92a7.08 7.08 0 0 1 0 14.16A7.08 7.08 0 0 1 4.92 12 7.08 7.08 0 0 1 12 4.92zm-1.5 1.41a5.56 5.56 0 0 0-5.56 5.56H6.5a4 4 0 0 1 4-4v-1.56zm3 9.56A3.5 3.5 0 0 0 17 12.5h-1.5a2 2 0 0 1-2 2v1.47z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Intercom</p>
                  <p className="text-xs font-light text-gray-700">Integrated messaging and customer support platform</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-red-500 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                    <path d="M13.5 3.046H5.77a2.724 2.724 0 0 0-2.724 2.724V13.5a2.724 2.724 0 0 0 2.724 2.724H13.5a2.724 2.724 0 0 0 2.724-2.724V5.77A2.724 2.724 0 0 0 13.5 3.046zm7.95 4.474v8.23a5.225 5.225 0 0 1-5.225 5.225H8.225A5.225 5.225 0 0 1 3 15.75v-8.23a5.225 5.225 0 0 1 5.225-5.225h8a5.225 5.225 0 0 1 5.225 5.225z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">PostHog</p>
                  <p className="text-xs font-light text-gray-700">
                    Advanced analytics with event tracking and behavior analysis
                  </p>
                </div>
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
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                    <path d="M21.807 18.285L13.553.756a1.324 1.324 0 0 0-1.129-.754 1.33 1.33 0 0 0-1.206.626l-8.952 14.5a1.356 1.356 0 0 0 .016 1.455l4.376 6.778a1.408 1.408 0 0 0 1.58.581l12.703-3.757c.389-.115.707-.39.873-.755s.164-.783-.007-1.145zm-1.848.752L9.18 22.224a.452.452 0 0 1-.575-.52l3.85-18.438c.072-.345.549-.4.699-.08l7.129 15.138a.515.515 0 0 1-.325.713z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Prisma</p>
                  <p className="text-xs font-light text-gray-700">
                    Next-generation ORM with strong typing and automated migrations
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-teal-600 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                    <path d="M12 0L1.815 6v12L12 24l10.185-6V6L12 0zm6.75 16.5L12 20.13 5.25 16.5V7.5L12 3.87l6.75 3.63v9z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Neon Tech</p>
                  <p className="text-xs font-light text-gray-700">
                    Serverless PostgreSQL database with automatic scaling
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-blue-800 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                    <path d="M16.5921 16.5941L16.5925 16.5944C16.5935 16.5946 16.5946 16.5948 16.5957 16.595C16.5946 16.5948 16.5935 16.5946 16.5925 16.5944L16.5921 16.5941ZM16.5921 16.5941L16.5917 16.5939C16.5906 16.5937 16.5895 16.5934 16.5883 16.5932C16.5895 16.5934 16.5906 16.5937 16.5917 16.5939L16.5921 16.5941ZM19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 7.85786 7.85786 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12ZM24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Anthropic Claude</p>
                  <p className="text-xs font-light text-gray-700">
                    Advanced language models for natural language processing
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-emerald-950 flex items-center justify-center flex-shrink-0">
                  <Robot className="h-4 w-4 text-white" weight="fill" />
                </div>
                <div>
                  <p className="text-sm font-medium">Proprietary AI</p>
                  <p className="text-xs font-light text-gray-700">
                    In-house development of prompts and backend logic for travel-specialized AI
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium tracking-tighter mb-3 flex items-center">
              <Lightning className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Suitpax API
            </h3>
            <div className="flex items-start gap-3">
              <div className="h-8 w-8 rounded-xl bg-emerald-950 flex items-center justify-center flex-shrink-0">
                <Gear className="h-4 w-4 text-white" weight="fill" />
              </div>
              <div>
                <p className="text-sm font-medium">Proprietary API</p>
                <p className="text-xs font-light text-gray-700">
                  8 months of development to create a robust API that integrates more than 500 travel providers, payment
                  systems, and financial services. Scalable architecture with specialized microservices for each
                  business vertical.
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
      </div>
    </motion.section>
  )
}
