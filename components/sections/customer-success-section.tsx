"use client"

import { motion } from "framer-motion"
import { Award, BarChart, Clock, HeartHandshake, Shield, Users } from "lucide-react"

export default function CustomerSuccessSection() {
  return (
    <section id="customer-success" className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-medium tracking-tighter text-gray-900 sm:text-4xl">Customer Success Program</h2>
          <p className="mt-4 text-lg font-light text-gray-600">
            Our comprehensive approach to ensuring your business travel program thrives
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Success Card 1 */}
          <motion.div
            className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <Users className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="mb-3 text-xl font-medium tracking-tighter text-gray-900">Dedicated Account Team</h3>
            <p className="mb-4 text-sm font-light text-gray-600">
              A team of travel experts and AI specialists assigned to your account for personalized support and
              strategy.
            </p>
          </motion.div>

          {/* Success Card 2 */}
          <motion.div
            className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <Clock className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="mb-3 text-xl font-medium tracking-tighter text-gray-900">Rapid Implementation</h3>
            <p className="mb-4 text-sm font-light text-gray-600">
              Our streamlined onboarding process gets your travel program up and running in weeks, not months.
            </p>
          </motion.div>

          {/* Success Card 3 */}
          <motion.div
            className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <BarChart className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="mb-3 text-xl font-medium tracking-tighter text-gray-900">Quarterly Business Reviews</h3>
            <p className="mb-4 text-sm font-light text-gray-600">
              Regular analysis of your travel program performance with actionable insights and optimization strategies.
            </p>
          </motion.div>

          {/* Success Card 4 */}
          <motion.div
            className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <Shield className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="mb-3 text-xl font-medium tracking-tighter text-gray-900">24/7 Support</h3>
            <p className="mb-4 text-sm font-light text-gray-600">
              Round-the-clock human support backed by AI assistance for immediate resolution of travel issues.
            </p>
          </motion.div>

          {/* Success Card 5 */}
          <motion.div
            className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <Award className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="mb-3 text-xl font-medium tracking-tighter text-gray-900">Training Excellence</h3>
            <p className="mb-4 text-sm font-light text-gray-600">
              Comprehensive training programs for travel managers, administrators, and end-users.
            </p>
          </motion.div>

          {/* Success Card 6 */}
          <motion.div
            className="rounded-xl bg-white p-6 shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
              <HeartHandshake className="h-6 w-6 text-gray-700" />
            </div>
            <h3 className="mb-3 text-xl font-medium tracking-tighter text-gray-900">Change Management</h3>
            <p className="mb-4 text-sm font-light text-gray-600">
              Strategic guidance and support for transitioning your organization to our AI-powered travel platform.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
