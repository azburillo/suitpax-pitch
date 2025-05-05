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
    <div className="bg-gray-200 rounded-xl overflow-hidden py-12 px-4 sm:px-6 my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-black/5">
          <Image src="/suitpax-logo.png" alt="Suitpax" width={28} height={28} />
          <span className="font-serif italic text-black/80 text-xs">Global travel network</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter leading-none text-black">
          Extensive Partner Network
        </h2>
        <p className="text-sm sm:text-base md:text-lg tracking-tighter text-black/90 max-w-2xl mx-auto font-medium">
          Seamlessly integrated with major airlines and travel providers
        </p>
        <p className="text-xs sm:text-sm text-black/70 max-w-xl mx-auto font-light">
          Our platform connects with 500+ airlines and 10,000+ destinations worldwide, ensuring comprehensive coverage
          for all business travel needs
        </p>

        {/* Airlines grid */}
        <div className="mt-12">
          <h3 className="text-lg font-medium mb-6 text-black/80">Airline Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {airlines.map((airline) => (
              <div key={airline} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-14">
                <p className="text-sm font-medium text-black">{airline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Travel partners grid */}
        <div className="mt-12">
          <h3 className="text-lg font-medium mb-6 text-black/80">Travel Platform Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {travelPartners.map((partner) => (
              <div key={partner} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-14">
                <p className="text-sm font-medium text-black">{partner}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-black">500+</p>
            <p className="text-sm text-black/70">Airlines</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-black">10,000+</p>
            <p className="text-sm text-black/70">Destinations</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-black">180+</p>
            <p className="text-sm text-black/70">Countries</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <p className="text-3xl font-bold text-black">24/7</p>
            <p className="text-sm text-black/70">Support</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
