"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Database, Cpu, Lock, Layers, Network, Zap, Workflow, Code, Cloud, Braces } from "lucide-react"

export default function AdditionalFeaturesSection() {
  const features = [
    {
      icon: <Cpu className="h-6 w-6 text-gray-700" />,
      title: "Advanced AI Processing",
      description: "Proprietary neural networks optimized for travel data processing with 99.8% accuracy.",
    },
    {
      icon: <Database className="h-6 w-6 text-gray-700" />,
      title: "Distributed Data Architecture",
      description: "Fault-tolerant, globally distributed database system with sub-10ms query response times.",
    },
    {
      icon: <Lock className="h-6 w-6 text-gray-700" />,
      title: "Zero-Knowledge Encryption",
      description: "End-to-end encryption with zero-knowledge proofs for maximum data privacy and security.",
    },
    {
      icon: <Layers className="h-6 w-6 text-gray-700" />,
      title: "Microservices Infrastructure",
      description: "Scalable, containerized microservices architecture with automatic failover capabilities.",
    },
    {
      icon: <Network className="h-6 w-6 text-gray-700" />,
      title: "Quantum-Resistant Blockchain",
      description: "Future-proof blockchain implementation for secure, immutable travel records.",
    },
    {
      icon: <Zap className="h-6 w-6 text-gray-700" />,
      title: "Real-time Processing Engine",
      description: "Sub-second data processing for instant travel recommendations and booking confirmations.",
    },
    {
      icon: <Workflow className="h-6 w-6 text-gray-700" />,
      title: "Adaptive Workflow Automation",
      description: "Self-optimizing workflow systems that adapt to company-specific travel patterns.",
    },
    {
      icon: <Code className="h-6 w-6 text-gray-700" />,
      title: "Open API Architecture",
      description: "Comprehensive API suite with over 200 endpoints for seamless third-party integrations.",
    },
    {
      icon: <Cloud className="h-6 w-6 text-gray-700" />,
      title: "Multi-Cloud Infrastructure",
      description: "Redundant deployment across AWS, Azure, and GCP for 99.999% guaranteed uptime.",
    },
    {
      icon: <Braces className="h-6 w-6 text-gray-700" />,
      title: "Custom DSL for Travel Logic",
      description: "Domain-specific language for defining complex travel policies and approval workflows.",
    },
  ]

  return (
    <section
      id="additional-features"
      className="w-full bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-center mb-4">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={40} height={40} className="rounded-xl" />
        </div>

        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
          TECHNOLOGY STACK
        </div>

        <div className="mx-auto max-w-3xl mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter text-gray-900">
            Cutting-Edge Technology Infrastructure
          </h2>
          <p className="mt-4 text-sm font-light text-gray-600">
            Our proprietary technology stack combines advanced AI, distributed systems, and secure architecture to
            deliver unmatched performance
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-950/10">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-lg font-medium tracking-tighter text-gray-900">{feature.title}</h3>
              <p className="text-sm font-light text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
