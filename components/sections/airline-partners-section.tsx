"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AirlinePartnersSection() {
  const airlines = [
    "American Airlines",
    "Delta Air Lines",
    "United Airlines",
    "Lufthansa",
    "British Airways",
    "Air France",
    "Emirates",
    "Qatar Airways",
    "Singapore Airlines",
    "Cathay Pacific",
    "Iberia",
    "KLM",
  ]

  const travelPartners = ["Booking.com", "Expedia", "Hotels.com", "Airbnb", "Kayak", "Skyscanner"]

  return (
    <div className="bg-gray-200 rounded-xl overflow-hidden py-8 px-3 sm:px-4 my-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-2 py-1 rounded-xl border border-black/5">
          <Image src="/suitpax-logo.png" alt="Suitpax" width={20} height={20} />
          <span className="font-serif italic text-black/80 text-xs">Global travel network</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-medium tracking-tighter leading-none text-black">
          Extensive Partner Network
        </h2>
        <p className="text-sm tracking-tighter text-black/90 max-w-2xl mx-auto font-medium">
          Seamlessly integrated with major airlines and travel providers
        </p>

        {/* Airlines grid - smaller */}
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-3 text-black/80">Airline Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {airlines.map((airline) => (
              <div key={airline} className="bg-white p-2 rounded-lg shadow-sm flex items-center justify-center h-10">
                <p className="text-xs font-medium text-black">{airline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel partners grid - smaller */}
        <div className="mt-6">
          <h3 className="text-sm font-medium mb-3 text-black/80">Travel Platform Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {travelPartners.map((partner) => (
              <div key={partner} className="bg-white p-2 rounded-lg shadow-sm flex items-center justify-center h-10">
                <p className="text-xs font-medium text-black">{partner}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats - smaller */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <p className="text-xl font-bold text-black">500+</p>
            <p className="text-xs text-black/70">Airlines</p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <p className="text-xl font-bold text-black">10,000+</p>
            <p className="text-xs text-black/70">Destinations</p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <p className="text-xl font-bold text-black">180+</p>
            <p className="text-xs text-black/70">Countries</p>
          </div>
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <p className="text-xl font-bold text-black">24/7</p>
            <p className="text-xs text-black/70">Support</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
