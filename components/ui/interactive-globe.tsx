"use client"

import { useEffect, useRef, useState, useMemo } from "react"
import createGlobe from "cobe"
import { motion } from "framer-motion"

interface Marker {
  location: [number, number]
  size: number
  name: string
  color?: [number, number, number]
  region: string
}

interface InteractiveGlobeProps {
  className?: string
  markers?: Marker[]
  activeRegion: string
  onRegionClick?: (region: string) => void
}

const hexToRgb = (hex: string): [number, number, number] => {
  const r = Number.parseInt(hex.slice(1, 3), 16) / 255
  const g = Number.parseInt(hex.slice(3, 5), 16) / 255
  const b = Number.parseInt(hex.slice(5, 7), 16) / 255
  return [r, g, b]
}

export default function InteractiveGlobe({
  className = "",
  markers = [],
  activeRegion,
  onRegionClick,
}: InteractiveGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 })

  const globeConfig = {
    size: 280,
    scale: 1.2,
    globeColor: "#ffffff",
    markerColor: "#374151",
    glowColor: "#e5e7eb",
    rotationSpeed: 0.003,
    mapBrightness: 4,
    diffuse: 1.2,
  }

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        const { width, height } = canvasRef.current.getBoundingClientRect()
        setSize({ width, height })
      }
    }
    window.addEventListener("resize", onResize)
    onResize()
    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useEffect(() => {
    let phi = 0
    let globe: ReturnType<typeof createGlobe> | null = null

    if (canvasRef.current && width && height) {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: width * 2,
        height: height * 2,
        phi: 0,
        theta: 0.3,
        dark: 0,
        diffuse: globeConfig.diffuse,
        mapSamples: 16000,
        mapBrightness: globeConfig.mapBrightness,
        baseColor: hexToRgb(globeConfig.globeColor),
        markerColor: hexToRgb(globeConfig.markerColor),
        glowColor: hexToRgb(globeConfig.glowColor),
        scale: globeConfig.scale,
        offset: [0, 0],
        markers: markers.map((marker) => ({
          location: marker.location,
          size: marker.size,
          color: marker.color,
        })),
        onRender: (state) => {
          if (!pointerInteracting.current) {
            phi += globeConfig.rotationSpeed
          }
          state.phi = phi + pointerInteractionMovement.current
          state.width = width * 2
          state.height = height * 2
        },
      })
    }

    return () => {
      if (globe) {
        globe.destroy()
      }
    }
  }, [width, height, markers])

  const visibleMarkers = useMemo(() => {
    return markers.filter((marker) => activeRegion === "all" || marker.region === activeRegion)
  }, [markers, activeRegion])

  return (
    <div className={`relative ${className}`}>
      <div
        className="relative"
        style={{
          width: globeConfig.size,
          height: globeConfig.size,
          maxWidth: "100%",
          aspectRatio: "1",
          margin: "0 auto",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{ width: "100%", height: "100%", contain: "layout paint size", opacity: 0.9 }}
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
      </div>

      <div className="absolute bottom-0 left-0 w-full p-2 flex flex-wrap justify-center items-center gap-1">
        <motion.div
          className="flex flex-wrap gap-1 justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {visibleMarkers.map((marker, index) => (
            <motion.div
              key={index}
              className={`text-xs font-medium px-1.5 py-0.5 rounded-md bg-gray-100 border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
              onClick={() => onRegionClick && onRegionClick(marker.region)}
            >
              {marker.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
