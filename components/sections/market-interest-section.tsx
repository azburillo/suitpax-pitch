import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function MarketInterestSection() {
  return (
    <section className="bg-white/50 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-4">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={40} height={40} className="rounded-xl" />
        </div>

        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
          INDUSTRY RECOGNITION
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
              Top 50 Travel Tech Innovators
            </h2>
            <p className="text-sm sm:text-base font-light text-gray-700">
              Suitpax has been recognized as a leading innovator in the travel technology space, garnering attention
              from industry experts and investors alike.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-xl border border-gray-200 mb-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Interest Coming Soon</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're currently in early discussions with potential enterprise clients and industry partners. As we
                progress through our development roadmap, we'll update this section with concrete market validation
                metrics and testimonials.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-6 rounded-xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Market Timing is Perfect</h3>
                <p className="text-gray-600">
                  With business travel rebounding post-pandemic and companies seeking innovative solutions to manage
                  costs and improve employee experience, Suitpax is positioned at the perfect intersection of need and
                  innovation.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:ml-6">
                <button className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
