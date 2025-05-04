"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Globe, Plane, MapPin } from "lucide-react"
import Image from "next/image"
import createGlobe from "cobe"
import { useRef } from "react"

// Airport data with coordinates
const airports = [
  { name: "JFK", city: "New York", location: [40.6413, -73.7781], region: "north-america" },
  { name: "LHR", city: "London", location: [51.47, -0.4543], region: "europe" },
  { name: "CDG", city: "Paris", location: [49.0097, 2.5479], region: "europe" },
  { name: "MAD", city: "Madrid", location: [40.4983, -3.5676], region: "europe" },
  { name: "BCN", city: "Barcelona", location: [41.2974, 2.0833], region: "europe" },
  { name: "FRA", city: "Frankfurt", location: [50.0379, 8.5622], region: "europe" },
  { name: "HND", city: "Tokyo", location: [35.5494, 139.7798], region: "asia" },
  { name: "SIN", city: "Singapore", location: [1.3644, 103.9915], region: "asia" },
  { name: "SYD", city: "Sydney", location: [-33.9399, 151.1753], region: "oceania" },
  { name: "DXB", city: "Dubai", location: [25.2532, 55.3657], region: "middle-east" },
  { name: "GRU", city: "São Paulo", location: [-23.4356, -46.4731], region: "south-america" },
  { name: "JNB", city: "Johannesburg", location: [-26.1367, 28.2411], region: "africa" },
  { name: "LAX", city: "Los Angeles", location: [33.9416, -118.4085], region: "north-america" },
  { name: "ORD", city: "Chicago", location: [41.9742, -87.9073], region: "north-america" },
  { name: "PEK", city: "Beijing", location: [40.0799, 116.6031], region: "asia" },
  { name: "DEL", city: "Delhi", location: [28.5562, 77.1], region: "asia" },
  { name: "IST", city: "Istanbul", location: [41.2608, 28.7519], region: "europe" },
  { name: "AMS", city: "Amsterdam", location: [52.3105, 4.7683], region: "europe" },
]

// Hex to RGB conversion for globe colors
const hexToRgb = (hex: string): [number, number, number] => {
  try {
    if (!hex || typeof hex !== "string" || !hex.startsWith("#") || hex.length < 7) {
      return [0.3, 0.3, 0.3]
    }

    const r = Number.parseInt(hex.slice(1, 3), 16) / 255
    const g = Number.parseInt(hex.slice(3, 5), 16) / 255
    const b = Number.parseInt(hex.slice(5, 7), 16) / 255

    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return [0.3, 0.3, 0.3]
    }

    return [r, g, b]
  } catch (error) {
    console.error("Error converting hex to RGB:", error)
    return [0.3, 0.3, 0.3]
  }
}

export default function GlobalPresenceSection() {
  const [activeRegion, setActiveRegion] = useState("all")
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 })
  const [isCanvasReady, setIsCanvasReady] = useState(false)
  const [highlightedAirport, setHighlightedAirport] = useState<string | null>(null)

  // Filter airports based on active region
  const filteredAirports =
    activeRegion === "all" ? airports : airports.filter((airport) => airport.region === activeRegion)

  // Globe configuration
  const globeConfig = {
    scale: 1.2,
    globeColor: "#1a1a2e",
    markerColor: "#4cc9f0",
    glowColor: "#4361ee",
    rotationSpeed: 0.005,
    mapBrightness: 6,
    diffuse: 1.2,
  }

  // Handle canvas resize
  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        const rect = canvasRef.current.getBoundingClientRect()
        setSize({
          width: rect.width || 1,
          height: rect.height || 1,
        })
        setIsCanvasReady(true)
      }
    }

    setTimeout(onResize, 100)
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  // Initialize globe
  useEffect(() => {
    let phi = 0
    let globe: ReturnType<typeof createGlobe> | null = null

    if (canvasRef.current && isCanvasReady && width > 0 && height > 0) {
      try {
        // Convert airports to markers
        const markers = filteredAirports.map((airport) => ({
          location: airport.location,
          size: highlightedAirport === airport.name ? 0.1 : 0.05,
        }))

        globe = createGlobe(canvasRef.current, {
          devicePixelRatio: 2,
          width: width * 2,
          height: height * 2,
          phi: 0,
          theta: 0.3,
          dark: 1,
          diffuse: globeConfig.diffuse,
          mapSamples: 20000,
          mapBrightness: globeConfig.mapBrightness,
          baseColor: hexToRgb(globeConfig.globeColor),
          markerColor: hexToRgb(globeConfig.markerColor),
          glowColor: hexToRgb(globeConfig.glowColor),
          scale: globeConfig.scale,
          offset: [0, 0],
          markers,
          onRender: (state) => {
            if (!pointerInteracting.current) {
              phi += globeConfig.rotationSpeed
            }
            state.phi = phi + pointerInteractionMovement.current
            state.width = width * 2
            state.height = height * 2
          },
        })
      } catch (error) {
        console.error("Error initializing globe:", error)
      }
    }

    return () => {
      if (globe) {
        try {
          globe.destroy()
        } catch (error) {
          console.error("Error destroying globe:", error)
        }
      }
    }
  }, [width, height, filteredAirports, highlightedAirport, isCanvasReady])

  // Region filters
  const regions = [
    { id: "all", name: "Global" },
    { id: "north-america", name: "North America" },
    { id: "europe", name: "Europe" },
    { id: "asia", name: "Asia" },
    { id: "south-america", name: "South America" },
    { id: "africa", name: "Africa" },
    { id: "oceania", name: "Oceania" },
    { id: "middle-east", name: "Middle East" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-black to-blue-950 text-white rounded-2xl my-12">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>

      {/* Header */}
      <div className="relative z-10 pt-12 pb-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <Globe className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold tracking-tight">Global Business Travel Network</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-blue-200 text-lg"
        >
          Connecting business travelers to 180+ countries and 10,000+ destinations worldwide
        </motion.p>
      </div>

      {/* Globe Container */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between px-4 md:px-12 pb-12">
        {/* Globe */}
        <div className="relative w-full lg:w-3/5 h-[500px] md:h-[600px]">
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "100%",
              contain: "layout paint size",
              cursor: "grab",
            }}
            onPointerDown={(e) => {
              pointerInteracting.current = e.clientX - pointerInteractionMovement.current
              if (canvasRef.current) {
                canvasRef.current.style.cursor = "grabbing"
              }
            }}
            onPointerUp={() => {
              pointerInteracting.current = null
              if (canvasRef.current) {
                canvasRef.current.style.cursor = "grab"
              }
            }}
            onPointerOut={() => {
              pointerInteracting.current = null
              if (canvasRef.current) {
                canvasRef.current.style.cursor = "grab"
              }
            }}
            onMouseMove={(e) => {
              if (pointerInteracting.current !== null) {
                const delta = e.clientX - pointerInteracting.current
                pointerInteractionMovement.current = delta / 100
              }
            }}
            onTouchMove={(e) => {
              if (pointerInteracting.current !== null && e.touches[0] && canvasRef.current) {
                const delta = e.touches[0].clientX - pointerInteracting.current
                pointerInteractionMovement.current = delta / 100
              }
            }}
          />

          {/* Floating badges */}
          <div className="absolute inset-0 pointer-events-none">
            {filteredAirports.map((airport, index) => (
              <motion.div
                key={airport.name}
                className="absolute"
                style={{
                  left: `${30 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div
                  className="flex items-center gap-1 bg-blue-900/60 backdrop-blur-sm px-2 py-1 rounded-full border border-blue-500/30 shadow-lg"
                  onMouseEnter={() => setHighlightedAirport(airport.name)}
                  onMouseLeave={() => setHighlightedAirport(null)}
                >
                  <Plane className="w-3 h-3 text-blue-300" />
                  <span className="text-xs font-medium text-blue-100">{airport.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats and Filters */}
        <div className="w-full lg:w-2/5 space-y-8 mt-6 lg:mt-0">
          {/* Region filters */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>Explore Regions</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {regions.map((region) => (
                <button
                  key={region.id}
                  onClick={() => setActiveRegion(region.id)}
                  className={`px-3 py-1.5 text-sm rounded-full transition-all ${
                    activeRegion === region.id
                      ? "bg-blue-600 text-white"
                      : "bg-blue-900/40 text-blue-200 hover:bg-blue-800"
                  }`}
                >
                  {region.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-blue-900/30 backdrop-blur-sm p-4 rounded-xl border border-blue-800/50">
              <div className="text-3xl font-bold text-blue-300">180+</div>
              <div className="text-sm text-blue-200">Countries</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm p-4 rounded-xl border border-blue-800/50">
              <div className="text-3xl font-bold text-blue-300">10,000+</div>
              <div className="text-sm text-blue-200">Destinations</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm p-4 rounded-xl border border-blue-800/50">
              <div className="text-3xl font-bold text-blue-300">24/7</div>
              <div className="text-sm text-blue-200">Support</div>
            </div>
            <div className="bg-blue-900/30 backdrop-blur-sm p-4 rounded-xl border border-blue-800/50">
              <div className="text-3xl font-bold text-blue-300">500+</div>
              <div className="text-sm text-blue-200">Airlines</div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-full text-white font-medium shadow-lg hover:from-blue-500 hover:to-blue-400 transition-all cursor-pointer">
              <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} />
              <span>Explore Our Network</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
