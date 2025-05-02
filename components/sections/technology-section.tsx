"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function TechnologySection() {
  return (
    <motion.section
      id="technology"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        TECHNOLOGY
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-4 sm:mb-6 text-center">
        Powered by cutting-edge technology
      </h2>

      <div className="grid grid-cols-3 gap-2 xs:gap-4 sm:gap-8 items-center justify-items-center">
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

      <div className="mt-6 text-center">
        <p className="text-sm font-medium">Integrations with industry leaders</p>
        <p className="text-xs font-light text-gray-700 mt-1">
          We connect with +500 global providers, including airlines, hotels, car rentals, and payment platforms to offer
          a complete and frictionless experience.
        </p>
      </div>
    </motion.section>
  )
}
