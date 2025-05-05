"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { LinkedinLogo } from "@phosphor-icons/react"
import { CalendarDays, ExternalLink, Users } from "lucide-react"

export default function TeamSection() {
  return (
    <motion.section
      id="team"
      className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        TEAM
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3">Why we built Suitpax?</h2>
      <p className="text-sm sm:text-base font-light text-gray-700 mb-6">
        Our journey to revolutionize business travel and why we believe it's time for a change
      </p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Alberto */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <a
              href="https://www.businessinsider.es/retail/albero-zurano-fundador-new-department-gafas-cruzan-fronteras-994227"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 group"
            >
              <Image
                src="/alberto-zurano.webp"
                alt="Alberto Zurano"
                width={96}
                height={96}
                className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
              />
              <div className="absolute top-2 right-2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-3 w-3 text-gray-700" />
              </div>
            </a>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-lg font-medium">Alberto Zurano</h3>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-950 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinLogo className="h-4 w-4" weight="fill" />
                </a>
              </div>
              <p className="text-sm font-medium text-emerald-950 mb-1 text-center sm:text-left">Founder and CEO</p>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-light text-gray-600">ex-Aena</span>
                  <span className="text-[10px] text-gray-400">|</span>
                  <span className="text-xs font-light text-gray-600">IBEX 35</span>
                </div>
                <div className="h-3 w-px bg-gray-200"></div>
                <a
                  href="https://www.businessinsider.es/retail/albero-zurano-fundador-new-department-gafas-cruzan-fronteras-994227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 group"
                >
                  <div className="relative h-3 w-20">
                    <Image
                      src="https://cdn.brandfetch.io/businessinsider.com/w/512/h/45/logo?c=1idU-l8vdm7C5__3dci"
                      alt="Business Insider"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-emerald-950 transition-colors" />
                </a>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg mb-2 border-l-2 border-emerald-950">
                <div className="flex items-center gap-2 mb-1.5">
                  <Users className="h-3.5 w-3.5 text-emerald-950" />
                  <span className="text-xs font-medium text-emerald-950">Leadership Experience</span>
                </div>
                <p className="text-xs font-light text-gray-700">
                  Led operations at Aena, managing cross-functional teams of 25+ professionals. Founded New Department,
                  scaling from 0 to 15 employees while securing partnerships with major sports organizations including
                  NBA teams.
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border-l-2 border-emerald-950">
                <p className="text-xs font-light italic text-gray-700">
                  "After experiencing the frustrations of business travel firsthand, I knew there had to be a better
                  way. With Suitpax, we're building the platform I always wished existed."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Alexis */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <a
              href="https://amp.elmundo.es/comunidad-valenciana/alicante/2020/11/05/5fa2d63721efa0c37c8b45c2.html"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 group"
            >
              <Image
                src="/alexis-sanz.jpeg"
                alt="Alexis Sanz"
                width={96}
                height={96}
                className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
              />
              <div className="absolute top-2 right-2 bg-white/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-3 w-3 text-gray-700" />
              </div>
            </a>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-lg font-medium">Alexis Sanz</h3>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-950 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinLogo className="h-4 w-4" weight="fill" />
                </a>
              </div>
              <p className="text-sm font-medium text-emerald-950 mb-1 text-center sm:text-left">Co-Founder and COO</p>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-light text-gray-600">ex-Factorial</span>
                  <span className="text-[10px] text-gray-400">|</span>
                  <span className="text-xs font-light text-gray-600">(Spanish Unicorn)</span>
                </div>
                <div className="h-3 w-px bg-gray-200"></div>
                <a
                  href="https://amp.elmundo.es/comunidad-valenciana/alicante/2020/11/05/5fa2d63721efa0c37c8b45c2.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 group"
                >
                  <div className="relative h-3 w-12">
                    <Image
                      src="https://cdn.brandfetch.io/elmundo.es/w/512/h/66/logo?c=1idU-l8vdm7C5__3dci"
                      alt="El Mundo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <ExternalLink className="h-3 w-3 text-gray-400 group-hover:text-emerald-950 transition-colors" />
                </a>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg mb-2 border-l-2 border-emerald-950">
                <div className="flex items-center gap-2 mb-1.5">
                  <Users className="h-3.5 w-3.5 text-emerald-950" />
                  <span className="text-xs font-medium text-emerald-950">Leadership Experience</span>
                </div>
                <p className="text-xs font-light text-gray-700">
                  Directed operations at Factorial, managing product teams during the company's hypergrowth phase.
                  Previously built and led a marketplace startup connecting local businesses across Europe, developing a
                  team of 12 across product and operations.
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border-l-2 border-emerald-950">
                <p className="text-xs font-light italic text-gray-700">
                  "My focus is on creating operational excellence in everything we do. At Suitpax, we're building
                  streamlined processes that deliver exceptional experiences at scale."
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Lukas */}
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 group">
              <Image
                src=
                alt=
                width={96}
                height={96}
                className="w-full h-full object-cover transition-opacity group-hover:opacity-90"
              />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <h3 className="text-lg font-medium">Lukas Hartridge</h3>
                <a
                  href="#"
                  className="text-gray-500 hover:text-emerald-950 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinLogo className="h-4 w-4" weight="fill" />
                </a>
              </div>
              <p className="text-sm font-medium text-emerald-950 mb-1 text-center sm:text-left">Engineering Manager</p>
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <span className="text-xs font-light text-gray-600">ex-Cloudbeds</span>
                  <span className="text-[10px] text-gray-400">|</span>
                  <span className="text-xs font-light text-gray-600">Traveltech</span>
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg mb-2 border-l-2 border-emerald-950">
                <div className="flex items-center gap-2 mb-1.5">
                  <Users className="h-3.5 w-3.5 text-emerald-950" />
                  <span className="text-xs font-medium text-emerald-950">Technical Experience</span>
                </div>
                <p className="text-xs font-light text-gray-700">
                  Led engineering teams at Cloudbeds, the #1 hotel Property Management System in the world, building
                  scalable hospitality management systems used by thousands of properties worldwide. Winner of the
                  People Choice Award at Cloudbeds. Expert in distributed systems, API development, and travel industry
                  integrations.
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg border-l-2 border-emerald-950">
                <p className="text-xs font-light italic text-gray-700">
                  "I've spent years building technology for the travel industry. With Suitpax, we're creating something
                  truly revolutionary that solves real pain points for business travelers and their companies."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Joint statement */}
      <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 mb-6">
        <div className="flex items-start gap-4">
          <div className="flex -space-x-4 rtl:space-x-reverse">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-white">
              <Image
                src="/alberto-zurano.webp"
                alt="Alberto Zurano"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border-2 border-white">
              <Image
                src="/alexis-sanz.jpeg"
                alt="Alexis Sanz"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-light italic text-gray-700 mb-3">
              "Together, we're committed to building a platform that doesn't just meet the needs of today's business
              travelers but anticipates the challenges of tomorrow. Suitpax is more than a product—it's our vision for
              the future of business travel."
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <span className="font-medium">Alberto & Alexis</span>
              <span>|</span>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-3 w-3" />
                <span>May 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-xl">
        <h3 className="text-lg font-medium mb-3">Hiring plan (2025-2026)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white p-3 rounded-lg">
            <p className="text-sm font-medium mb-1">Engineering (7)</p>
            <ul className="text-xs font-light space-y-1">
              <li>• AI/ML Engineers (3)</li>
              <li>• Full-stack Developers (3)</li>
              <li>• DevOps Engineer (1)</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-sm font-medium mb-1">Product (4)</p>
            <ul className="text-xs font-light space-y-1">
              <li>• Product Managers (2)</li>
              <li>• UX/UI Designers (2)</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-sm font-medium mb-1">Go-to-Market (6)</p>
            <ul className="text-xs font-light space-y-1">
              <li>• Sales Representatives (3)</li>
              <li>• Marketing Specialists (2)</li>
              <li>• Customer Success (1)</li>
            </ul>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-sm font-medium mb-1">Operations (3)</p>
            <ul className="text-xs font-light space-y-1">
              <li>• Finance Manager (1)</li>
              <li>• HR & Talent (1)</li>
              <li>• Legal & Compliance (1)</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
