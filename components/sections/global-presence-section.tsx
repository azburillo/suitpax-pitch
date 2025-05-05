"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Plane, TrendingUp, Globe, Briefcase, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import createGlobe from "cobe"

// Airport data with coordinates and extended information
const airports = [
  {
    name: "JFK",
    city: "New York",
    country: "USA",
    location: [40.6413, -73.7781],
    region: "north-america",
    image: "/nyc-skyline.png",
  },
  {
    name: "LHR",
    city: "London",
    country: "UK",
    location: [51.47, -0.4543],
    region: "europe",
    image: "/placeholder.svg?key=bfi4v",
  },
  {
    name: "CDG",
    city: "Paris",
    country: "France",
    location: [49.0097, 2.5479],
    region: "europe",
    image: "/paris-eiffel-tower.png",
  },
  {
    name: "MAD",
    city: "Madrid",
    country: "Spain",
    location: [40.4983, -3.5676],
    region: "europe",
    image: "/placeholder.svg?key=nna60",
  },
  {
    name: "BCN",
    city: "Barcelona",
    country: "Spain",
    location: [41.2974, 2.0833],
    region: "europe",
    image: "/barcelona-sagrada-familia.png",
  },
  {
    name: "FRA",
    city: "Frankfurt",
    country: "Germany",
    location: [50.0379, 8.5622],
    region: "europe",
    image: "/placeholder.svg?key=z90tv",
  },
  {
    name: "HND",
    city: "Tokyo",
    country: "Japan",
    location: [35.5494, 139.7798],
    region: "asia",
    image: "/tokyo-skyline.png",
  },
  {
    name: "SIN",
    city: "Singapore",
    country: "Singapore",
    location: [1.3644, 103.9915],
    region: "asia",
    image: "/singapore-marina-bay.png",
  },
  {
    name: "SYD",
    city: "Sydney",
    country: "Australia",
    location: [-33.9399, 151.1753],
    region: "oceania",
    image: "/sydney-opera-house.png",
  },
  {
    name: "DXB",
    city: "Dubai",
    country: "UAE",
    location: [25.2532, 55.3657],
    region: "middle-east",
    image: "/placeholder.svg?key=1abqt",
  },
  {
    name: "GRU",
    city: "São Paulo",
    country: "Brazil",
    location: [-23.4356, -46.4731],
    region: "south-america",
    image: "/placeholder.svg?key=otljb",
  },
  {
    name: "JNB",
    city: "Johannesburg",
    country: "South Africa",
    location: [-26.1367, 28.2411],
    region: "africa",
    image: "/placeholder.svg?height=400&width=600&query=johannesburg skyline",
  },
  {
    name: "LAX",
    city: "Los Angeles",
    country: "USA",
    location: [33.9416, -118.4085],
    region: "north-america",
    image: "/placeholder.svg?height=400&width=600&query=los angeles skyline",
  },
  {
    name: "ORD",
    city: "Chicago",
    country: "USA",
    location: [41.9742, -87.9073],
    region: "north-america",
    image: "/placeholder.svg?height=400&width=600&query=chicago skyline",
  },
  {
    name: "PEK",
    city: "Beijing",
    country: "China",
    location: [40.0799, 116.6031],
    region: "asia",
    image: "/placeholder.svg?height=400&width=600&query=beijing forbidden city",
  },
  {
    name: "DEL",
    city: "Delhi",
    country: "India",
    location: [28.5562, 77.1],
    region: "asia",
    image: "/placeholder.svg?height=400&width=600&query=delhi india gate",
  },
  {
    name: "IST",
    city: "Istanbul",
    country: "Turkey",
    location: [41.2608, 28.7519],
    region: "europe",
    image: "/placeholder.svg?height=400&width=600&query=istanbul blue mosque",
  },
  {
    name: "AMS",
    city: "Amsterdam",
    country: "Netherlands",
    location: [52.3105, 4.7683],
    region: "europe",
    image: "/placeholder.svg?height=400&width=600&query=amsterdam canals",
  },
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

// City Carousel Component
const CityCarousel = ({ airports, activeRegion }: { airports: typeof airports; activeRegion: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const filteredAirports =
    activeRegion === "all" ? airports : airports.filter((airport) => airport.region === activeRegion)

  const currentAirport = filteredAirports[currentIndex % filteredAirports.length]

  useEffect(() => {
    // Reset index when region changes
    setCurrentIndex(0)
  }, [activeRegion])

  useEffect(() => {
    // Auto-advance carousel
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredAirports.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [filteredAirports.length, activeRegion])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredAirports.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredAirports.length) % filteredAirports.length)
  }

  if (!currentAirport) return null

  return (
    <motion.div
      className="bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-1/2 h-40 sm:h-auto">
          <Image
            src={currentAirport.image || "/placeholder.svg"}
            alt={`${currentAirport.city}, ${currentAirport.country}`}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
          <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
            <div className="flex items-center gap-1">
              <Plane className="h-3 w-3 text-white/80" />
              <span className="text-xs font-bold text-white">{currentAirport.name}</span>
            </div>
          </div>
        </div>

        <div className="p-3 sm:p-4 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-white">{currentAirport.city}</h3>
              <p className="text-xs text-white/70">{currentAirport.country}</p>
            </div>
            <div className="flex gap-1">
              <button onClick={prevSlide} className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <ChevronLeft className="h-4 w-4 text-white/80" />
              </button>
              <button onClick={nextSlide} className="p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <ChevronRight className="h-4 w-4 text-white/80" />
              </button>
            </div>
          </div>

          <p className="text-sm text-white/90 mt-2">
            "Connecting business travelers to {currentAirport.city}'s vibrant economy and culture with our AI-powered
            travel solutions."
          </p>

          <div className="flex items-center gap-1 mt-2">
            <div className="h-1 w-1 rounded-full bg-white/40"></div>
            <p className="text-[10px] text-gray-300">SuitPax Global Network</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function GlobalPresenceSection() {
  const [activeRegion, setActiveRegion] = useState("all")
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 })
  const [isCanvasReady, setIsCanvasReady] = useState(false)
  const [highlightedAirport, setHighlightedAirport] = useState<string | null>(null)
  const [isGlobeRotating, setIsGlobeRotating] = useState(true)

  // Filter airports based on active region
  const filteredAirports =
    activeRegion === "all" ? airports : airports.filter((airport) => airport.region === activeRegion)

  // Globe configuration
  const globeConfig = {
    scale: 1.8, // Increased scale for bigger globe
    globeColor: "#4a4a4a", // Gray color for the globe
    markerColor: "#ffffff",
    glowColor: "#ffffff",
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
          size: highlightedAirport === airport.name ? 0.12 : 0.06, // Increased marker size
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
            if (isGlobeRotating && !pointerInteracting.current) {
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
  }, [width, height, filteredAirports, highlightedAirport, isCanvasReady, isGlobeRotating])

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
    <motion.section
      id="global-presence"
      className="bg-black/90 backdrop-blur-md p-4 sm:p-6 rounded-xl border border-white/10 shadow-lg my-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-white/10 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-serif italic text-white/80">
          GLOBAL MARKET OPPORTUNITY
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-white-logo.png" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      {/* Enhanced title section with larger text */}
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter text-white mb-2 text-center font-serif italic">
          Revolutionizing Global Business Travel Across Continents
        </h2>
        <p className="text-base md:text-lg font-medium text-white/80 mb-2">
          Seamlessly integrating with the rapidly growing $1.4T tourism sector
        </p>
        <p className="text-sm md:text-base font-light text-white/70">
          Our technology enables effortless business travel management across continents, tapping into the untapped
          TravelTech market with unprecedented efficiency and reach.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Globe Container - Taller and with more interaction */}
        <div className="md:col-span-2 backdrop-blur-md p-2 sm:p-3 rounded-md overflow-hidden">
          <div className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[750px] rounded-md overflow-hidden">
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
                setIsGlobeRotating(false)
              }}
              onPointerUp={() => {
                pointerInteracting.current = null
                if (canvasRef.current) {
                  canvasRef.current.style.cursor = "grab"
                }
                setIsGlobeRotating(true)
              }}
              onPointerOut={() => {
                pointerInteracting.current = null
                if (canvasRef.current) {
                  canvasRef.current.style.cursor = "grab"
                }
                setIsGlobeRotating(true)
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

            {/* Interactive controls overlay */}
            <div className="absolute bottom-4 right-4 bg-black/30 backdrop-blur-md rounded-lg p-2 flex gap-2">
              <button
                onClick={() => setIsGlobeRotating(!isGlobeRotating)}
                className={`p-1.5 rounded-md transition-colors ${isGlobeRotating ? "bg-white/20" : "bg-white/5"}`}
                title={isGlobeRotating ? "Pause rotation" : "Resume rotation"}
              >
                {isGlobeRotating ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/80"
                  >
                    <rect x="6" y="4" width="4" height="16"></rect>
                    <rect x="14" y="4" width="4" height="16"></rect>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white/80"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* City Carousel - Similar to Hero Title card */}
        <div className="md:col-span-1">
          <CityCarousel airports={airports} activeRegion={activeRegion} />

          {/* Stats card */}
          <div className="bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-sm mt-4">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-xs text-white/60 mb-1">Countries</p>
                <p className="text-lg font-medium text-white">150+</p>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">Destinations</p>
                <p className="text-lg font-medium text-white">10,000+</p>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">Market Size</p>
                <p className="text-lg font-medium text-white">$1.4T</p>
              </div>
              <div>
                <p className="text-xs text-white/60 mb-1">Growth Rate</p>
                <p className="text-lg font-medium text-white">34%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market opportunity highlights */}
      <div className="bg-black/50 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-sm mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-full bg-white/10 p-1.5">
                <TrendingUp className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-medium text-white">Booming Tourism</h3>
            </div>
            <p className="text-xs text-white/70">Tourism sector growing at 34% annually post-pandemic.</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-full bg-white/10 p-1.5">
                <Globe className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-medium text-white">Untapped TravelTech</h3>
            </div>
            <p className="text-xs text-white/70">TravelTech remains largely untapped with outdated systems.</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="rounded-full bg-white/10 p-1.5">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-medium text-white">Business Travel</h3>
            </div>
            <p className="text-xs text-white/70">$1.4T market seeking efficient, cost-effective solutions.</p>
          </div>
        </div>
      </div>

      {/* Region filters */}
      <div className="bg-black/50 backdrop-blur-md p-2 rounded-xl border border-white/10 shadow-sm mb-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {regions.map((region) => (
            <button
              key={region.id}
              onClick={() => setActiveRegion(region.id)}
              className={`px-3 py-1 text-xs rounded-full transition-all ${
                activeRegion === region.id
                  ? "bg-white text-black"
                  : "bg-black/30 text-white/70 border border-white/10 hover:bg-white/10"
              }`}
            >
              {region.name}
            </button>
          ))}
        </div>
      </div>

      {/* Future growth caption */}
      <div className="text-center mt-4">
        <p className="text-xs text-white/50 italic">Projected global expansion 2025-2031</p>
      </div>
    </motion.section>
  )
}
