"use client"

import { motion } from "framer-motion"
import { Globe, Flag, Calendar, FileText, BuildingIcon as Buildings } from "lucide-react"
import { useState } from "react"
import InteractiveGlobe from "@/components/ui/interactive-globe"

export default function MarketExpansionRoadmap() {
  const [activeRegion, setActiveRegion] = useState<string>("europe")

  const regions = {
    europe: {
      name: "Europe",
      timeline: "Q3-Q4 2025",
      marketSize: "$580B",
      countries: ["UK", "Germany", "France", "Spain", "Netherlands"],
      regulations: [
        "GDPR compliance required",
        "EU travel regulations",
        "Local tax considerations",
        "Data sovereignty requirements",
      ],
      strategy: [
        "Partner with established TMCs",
        "Localize in 5 languages",
        "Focus on mid-market enterprises",
        "Leverage EU digital initiatives",
      ],
      color: "#047857",
      position: { top: "30%", left: "48%" },
    },
    northAmerica: {
      name: "North America",
      timeline: "Q1-Q2 2026",
      marketSize: "$650B",
      countries: ["United States", "Canada"],
      regulations: [
        "State-by-state compliance",
        "SOC 2 certification",
        "US data privacy laws",
        "Cross-border considerations",
      ],
      strategy: [
        "Strategic airline partnerships",
        "Integration with US expense systems",
        "Focus on tech and finance sectors",
        "Regional sales teams",
      ],
      color: "#0369a1",
      position: { top: "35%", left: "22%" },
    },
    asiaPacific: {
      name: "Asia-Pacific",
      timeline: "Q3-Q4 2026",
      marketSize: "$520B",
      countries: ["Singapore", "Japan", "Australia", "Hong Kong"],
      regulations: [
        "Diverse regulatory frameworks",
        "Data localization requirements",
        "Regional privacy laws",
        "Financial compliance",
      ],
      strategy: [
        "Regional carrier partnerships",
        "Adapt to local business practices",
        "Focus on multinational corporations",
        "Regional payment methods",
      ],
      color: "#7c3aed",
      position: { top: "45%", left: "75%" },
    },
    restOfWorld: {
      name: "Rest of World",
      timeline: "2027+",
      marketSize: "$150B",
      countries: ["Brazil", "UAE", "South Africa", "Mexico"],
      regulations: [
        "Country-specific regulations",
        "Varying data protection laws",
        "Local business requirements",
        "Currency and payment challenges",
      ],
      strategy: [
        "Strategic market selection",
        "Local partnerships",
        "Targeted industry focus",
        "Adapt to regional needs",
      ],
      color: "#a16207",
      position: { top: "65%", left: "45%" },
    },
  }

  // City markers for the globe
  const markers = [
    // Europe
    { location: [51.5074, -0.1278], size: 0.05, name: "London", region: "europe", color: hexToRgb("#047857") },
    { location: [52.52, 13.405], size: 0.05, name: "Berlin", region: "europe", color: hexToRgb("#047857") },
    { location: [48.8566, 2.3522], size: 0.05, name: "Paris", region: "europe", color: hexToRgb("#047857") },
    { location: [40.4168, -3.7038], size: 0.05, name: "Madrid", region: "europe", color: hexToRgb("#047857") },
    { location: [52.3676, 4.9041], size: 0.05, name: "Amsterdam", region: "europe", color: hexToRgb("#047857") },

    // North America
    { location: [40.7128, -74.006], size: 0.05, name: "New York", region: "northAmerica", color: hexToRgb("#0369a1") },
    {
      location: [34.0522, -118.2437],
      size: 0.05,
      name: "Los Angeles",
      region: "northAmerica",
      color: hexToRgb("#0369a1"),
    },
    { location: [41.8781, -87.6298], size: 0.05, name: "Chicago", region: "northAmerica", color: hexToRgb("#0369a1") },
    { location: [43.6532, -79.3832], size: 0.05, name: "Toronto", region: "northAmerica", color: hexToRgb("#0369a1") },
    {
      location: [49.2827, -123.1207],
      size: 0.05,
      name: "Vancouver",
      region: "northAmerica",
      color: hexToRgb("#0369a1"),
    },

    // Asia-Pacific
    { location: [1.3521, 103.8198], size: 0.05, name: "Singapore", region: "asiaPacific", color: hexToRgb("#7c3aed") },
    { location: [35.6762, 139.6503], size: 0.05, name: "Tokyo", region: "asiaPacific", color: hexToRgb("#7c3aed") },
    { location: [-33.8688, 151.2093], size: 0.05, name: "Sydney", region: "asiaPacific", color: hexToRgb("#7c3aed") },
    { location: [22.3193, 114.1694], size: 0.05, name: "Hong Kong", region: "asiaPacific", color: hexToRgb("#7c3aed") },
    { location: [28.7041, 77.1025], size: 0.05, name: "New Delhi", region: "asiaPacific", color: hexToRgb("#7c3aed") },

    // Rest of World
    {
      location: [-23.5505, -46.6333],
      size: 0.05,
      name: "São Paulo",
      region: "restOfWorld",
      color: hexToRgb("#a16207"),
    },
    { location: [25.2048, 55.2708], size: 0.05, name: "Dubai", region: "restOfWorld", color: hexToRgb("#a16207") },
    { location: [-33.9249, 18.4241], size: 0.05, name: "Cape Town", region: "restOfWorld", color: hexToRgb("#a16207") },
    {
      location: [19.4326, -99.1332],
      size: 0.05,
      name: "Mexico City",
      region: "restOfWorld",
      color: hexToRgb("#a16207"),
    },
    { location: [30.0444, 31.2357], size: 0.05, name: "Cairo", region: "restOfWorld", color: hexToRgb("#a16207") },
  ]

  function hexToRgb(hex: string): [number, number, number] {
    const r = Number.parseInt(hex.slice(1, 3), 16) / 255
    const g = Number.parseInt(hex.slice(3, 5), 16) / 255
    const b = Number.parseInt(hex.slice(5, 7), 16) / 255
    return [r, g, b]
  }

  return (
    <motion.section
      id="market-expansion-roadmap"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.55 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700 mb-3 sm:mb-4">
        MARKET EXPANSION ROADMAP
      </div>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Strategic global market entry plan
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Interactive Globe */}
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-medium mb-3 flex items-center">
            <Globe className="h-5 w-5 text-gray-700 mr-2" />
            Global expansion strategy
          </h3>

          <div className="relative h-[280px] bg-gray-50 rounded-lg overflow-hidden border border-gray-200 mb-3">
            {/* Interactive 3D Globe */}
            <InteractiveGlobe
              markers={markers}
              activeRegion={activeRegion}
              onRegionClick={(region) => setActiveRegion(region)}
            />

            {/* Region Selection Tabs */}
            <div className="absolute top-2 right-2 flex flex-col space-y-1">
              {Object.entries(regions).map(([key, region]) => (
                <div
                  key={key}
                  className={`cursor-pointer px-2 py-1 rounded-md text-xs transition-colors ${
                    activeRegion === key ? "bg-gray-200 text-gray-800" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                  onClick={() => setActiveRegion(key)}
                  style={{
                    borderLeft: `3px solid ${region.color}`,
                  }}
                >
                  {region.name}
                </div>
              ))}
            </div>
          </div>

          {/* Selected Region Details */}
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm font-medium">{regions[activeRegion as keyof typeof regions].name}</h4>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: `${regions[activeRegion as keyof typeof regions].color}20`,
                  color: regions[activeRegion as keyof typeof regions].color,
                }}
              >
                {regions[activeRegion as keyof typeof regions].timeline}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <p className="font-medium">Target Markets:</p>
                <p className="text-gray-600">{regions[activeRegion as keyof typeof regions].countries.join(", ")}</p>
              </div>
              <div>
                <p className="font-medium">Market Size:</p>
                <p className="text-gray-600">{regions[activeRegion as keyof typeof regions].marketSize}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline and Strategy */}
        <div className="space-y-4">
          {/* Market Entry Timeline */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <Calendar className="h-5 w-5 text-gray-700 mr-2" />
              Market entry timeline
            </h3>
            <div className="space-y-3">
              <div className="relative">
                <div className="absolute left-2.5 top-0 bottom-0 w-0.5 bg-gray-200"></div>

                {Object.entries(regions).map(([key, region], index) => (
                  <div key={key} className="relative pl-8 pb-3">
                    <div
                      className="absolute left-0 top-1 h-5 w-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: region.color }}
                    >
                      <span className="text-[10px] text-white font-medium">{index + 1}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium">{region.name}</p>
                        <p className="text-xs text-gray-600">{region.countries.join(", ")}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-medium">{region.timeline}</p>
                        <p className="text-xs text-gray-600">{region.marketSize}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Regulatory Considerations */}
          <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-lg font-medium mb-3 flex items-center">
              <FileText className="h-5 w-5 text-gray-700 mr-2" />
              {activeRegion === "europe"
                ? "European"
                : activeRegion === "northAmerica"
                  ? "North American"
                  : activeRegion === "asiaPacific"
                    ? "Asia-Pacific"
                    : "Global"}{" "}
              considerations
            </h3>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1 flex items-center">
                  <Flag className="h-3.5 w-3.5 mr-1 text-gray-700" />
                  Regulatory
                </p>
                <ul className="text-xs space-y-1 text-gray-600">
                  {regions[activeRegion as keyof typeof regions].regulations.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <p className="text-sm font-medium mb-1 flex items-center">
                  <Buildings className="h-3.5 w-3.5 mr-1 text-gray-700" />
                  Market strategy
                </p>
                <ul className="text-xs space-y-1 text-gray-600">
                  {regions[activeRegion as keyof typeof regions].strategy.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
