"use client"

import { motion } from "framer-motion"
import { Target, Megaphone, Handshake, Users, ArrowRight } from "@phosphor-icons/react"

export default function GoToMarketSection() {
  return (
    <motion.section
      id="go-to-market"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        GO-TO-MARKET STRATEGY
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Multi-channel acquisition and growth plan
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Target className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Target segments
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Primary: Mid-market companies (50-500 employees)</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Technology and SaaS companies with distributed teams</li>
                  <li>• Professional services firms with high travel frequency</li>
                  <li>• Manufacturing companies with complex supply chains</li>
                  <li>• Healthcare organizations with strict compliance requirements</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Secondary: Enterprise (500+ employees)</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Companies with existing travel management solutions seeking AI enhancement</li>
                  <li>• Organizations with high international travel volume</li>
                  <li>• Businesses with complex expense management needs</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Megaphone className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Marketing channels
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Content marketing & SEO (30% of budget)</p>
                  <p className="text-xs font-light text-gray-700">
                    Industry reports, case studies, and educational content targeting travel managers and CFOs
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Targeted digital advertising (25% of budget)</p>
                  <p className="text-xs font-light text-gray-700">
                    LinkedIn campaigns, Google Ads, and retargeting focused on decision-makers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Industry events & webinars (20% of budget)</p>
                  <p className="text-xs font-light text-gray-700">
                    Presence at major travel tech conferences and hosting educational webinars
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                </div>
                <div>
                  <p className="text-sm font-medium">PR & thought leadership (15% of budget)</p>
                  <p className="text-xs font-light text-gray-700">
                    Media placements, speaking engagements, and industry publications
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email marketing & nurture (10% of budget)</p>
                  <p className="text-xs font-light text-gray-700">
                    Targeted campaigns for different personas and stages of the buyer journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Handshake className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Strategic partnerships
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Travel providers</p>
                  <p className="text-xs font-light text-gray-700">
                    Direct integrations with airlines, hotel chains, and car rental companies for exclusive rates and
                    seamless booking
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Financial institutions</p>
                  <p className="text-xs font-light text-gray-700">
                    Partnerships with banks and credit card companies for integrated expense management and special
                    offers
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Technology ecosystem</p>
                  <p className="text-xs font-light text-gray-700">
                    Integrations with ERP systems, HR platforms, and accounting software for seamless workflows
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                  <ArrowRight className="h-3.5 w-3.5 text-emerald-950" weight="bold" />
                </div>
                <div>
                  <p className="text-sm font-medium">Industry associations</p>
                  <p className="text-xs font-light text-gray-700">
                    Collaborations with travel management associations and business networks for credibility and reach
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Users className="h-5 w-5 text-emerald-950 mr-2" weight="fill" />
              Sales strategy
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Phase 1: Product-led growth (Q2-Q3 2025)</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Free trial with guided onboarding for qualified leads</li>
                  <li>• Self-service purchase flow for SMB segment</li>
                  <li>• Inside sales team focused on mid-market opportunities</li>
                  <li>• Customer success team for onboarding and expansion</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Phase 2: Enterprise expansion (Q4 2025-Q2 2026)</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Field sales team targeting enterprise accounts</li>
                  <li>• Solution engineering for complex implementations</li>
                  <li>• Executive sponsorship program for strategic accounts</li>
                  <li>• Industry-specific solution packages</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1">Phase 3: Global scale (Q3 2026+)</p>
                <ul className="text-xs font-light space-y-1">
                  <li>• Regional sales teams in key markets</li>
                  <li>• Channel partner program for extended reach</li>
                  <li>• Vertical-specific go-to-market strategies</li>
                  <li>• Account-based marketing for target enterprises</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
