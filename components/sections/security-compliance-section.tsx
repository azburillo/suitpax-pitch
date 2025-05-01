"use client"

import { motion } from "framer-motion"
import { Shield, LockKey, CheckCircle, Warning } from "@phosphor-icons/react"

export default function SecurityComplianceSection() {
  return (
    <motion.section
      id="security-compliance"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        SECURITY & COMPLIANCE
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Enterprise-grade security and regulatory compliance
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Shield className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Security architecture
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <LockKey className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">End-to-end encryption</span> for all data in transit and at rest
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <LockKey className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Multi-factor authentication</span> with biometric options
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <LockKey className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Role-based access control</span> with granular permissions
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <LockKey className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Regular penetration testing</span> by third-party security firms
                </p>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Shield className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Data protection
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">GDPR and CCPA compliant</span> data handling and storage
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Data residency options</span> for EU, US, and APAC regions
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Automated data retention policies</span> with configurable timeframes
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Right to be forgotten</span> implementation with one-click data purging
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Shield className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Compliance certifications
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">ISO 27001</p>
                <p className="text-xs font-light">Information security management</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">SOC 2 Type II</p>
                <p className="text-xs font-light">Security, availability, and confidentiality</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">GDPR</p>
                <p className="text-xs font-light">EU data protection compliance</p>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">PCI DSS</p>
                <p className="text-xs font-light">Payment card industry standards</p>
              </div>
            </div>
            <p className="text-xs font-light text-gray-500 mt-3">
              All certifications are renewed annually with independent audits
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Warning className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Incident response
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">24/7 security operations center</span> with real-time monitoring
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Automated threat detection</span> with AI-powered anomaly identification
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Incident response team</span> with 15-minute SLA for critical issues
                </p>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
                </div>
                <p className="text-sm font-light">
                  <span className="font-medium">Regular disaster recovery drills</span> with 99.99% uptime guarantee
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
