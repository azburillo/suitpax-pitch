"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Check, Globe, Server } from "lucide-react"

export default function ApiIntegrationsSection() {
  return (
    <motion.section
      id="api-integrations"
      className="bg-gray-100 p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="inline-flex items-center rounded-xl bg-black px-2.5 py-0.5 text-[10px] font-medium text-white mb-3 sm:mb-4">
        INTEGRACIONES API
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4 text-gray-900">
        Conectando con +400 aerolíneas globales
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-sm sm:text-base font-light text-gray-700 mb-4">
            Nuestra plataforma se integra directamente con las APIs de las principales aerolíneas del mundo,
            proporcionando acceso en tiempo real a disponibilidad, precios y opciones de reserva para viajes
            corporativos.
          </p>

          <div className="space-y-3 mb-6">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-black p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-800">Disponibilidad en tiempo real y precios dinámicos</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-black p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-800">Gestión de reservas y cambios automatizados</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-black p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-800">Integración con políticas de viaje corporativas</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-0.5 rounded-full bg-black p-1">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-sm font-medium text-gray-800">Optimización de rutas y costos en tiempo real</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
            <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-900">400+</p>
              <p className="text-xs text-gray-600 text-center">Aerolíneas integradas</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-900">99.8%</p>
              <p className="text-xs text-gray-600 text-center">Tiempo de actividad</p>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm flex flex-col items-center justify-center">
              <p className="text-2xl font-bold text-gray-900">180+</p>
              <p className="text-xs text-gray-600 text-center">Países cubiertos</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
              <Server className="h-3 w-3 mr-1" /> REST API
            </div>
            <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
              <Globe className="h-3 w-3 mr-1" /> GraphQL
            </div>
            <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
              Webhooks
            </div>
            <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
              SDK
            </div>
            <div className="inline-flex items-center rounded-xl bg-black/10 px-2.5 py-1 text-xs font-medium text-gray-800">
              OAuth 2.0
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium mb-3 text-gray-900">Principales aerolíneas integradas</h3>
            <div className="grid grid-cols-5 gap-3">
              {/* Airline logos using SimpleIcons */}
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <title>United Airlines</title>
                  <path d="M12.5 0L1.25 10.5h5l6.25-6.25L18.75 10.5h4L12.5 0zM1.25 13.5L12.5 24l10.25-10.5h-4l-6.25 6.25-6.25-6.25h-5z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <title>British Airways</title>
                  <path d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12zm-6.627-5.254c-.088.06-7.105 4.822-7.105 4.822h-1.164l.158-4.822h-2.46l-.158 4.822H5.373L4.21 7.588H1.75l.158 1.84h1.57l1.164 3.14h2.46l-.158 4.822h2.46l.158-4.822h1.164s7.017 4.763 7.105 4.822c.088.06 1.222.06 1.222.06V6.687h-1.222z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <title>Lufthansa</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 21.21c-5.084 0-9.21-4.126-9.21-9.21S6.916 2.79 12 2.79s9.21 4.126 9.21 9.21-4.126 9.21-9.21 9.21zm2.711-14.665c-.859 0-1.56.7-1.56 1.56 0 .859.701 1.56 1.56 1.56.86 0 1.56-.701 1.56-1.56 0-.86-.7-1.56-1.56-1.56zm-5.422 0c-.86 0-1.56.7-1.56 1.56 0 .859.7 1.56 1.56 1.56.859 0 1.56-.701 1.56-1.56 0-.86-.701-1.56-1.56-1.56zm5.422 3.12H9.29v1.56h5.422v-1.56zm0 3.12H9.29v1.56h5.422v-1.56z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <title>Japan Airlines</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.76 16.125h-1.5v-6.75h-3.75v6.75h-1.5v-6.75H7.26v-1.5h10.5v1.5z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <title>Southwest Airlines</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 13.5H6c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5h12c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <title>Delta Airlines</title>
                  <path d="M12 0L0 12l12 12 12-12L12 0zm-2.5 6h5L19 16.5h-5L9.5 6z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <title>Air France</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.639 0 8.4 3.761 8.4 8.4 0 4.639-3.761 8.4-8.4 8.4-4.639 0-8.4-3.761-8.4-8.4 0-4.639 3.761-8.4 8.4-8.4zm-4.2 8.4h8.4v-1.2h-8.4v1.2z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <title>Qatar Airways</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c3.975 0 7.2 3.225 7.2 7.2s-3.225 7.2-7.2 7.2-7.2-3.225-7.2-7.2 3.225-7.2 7.2-7.2zm0 1.2c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <title>Emirates</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c3.975 0 7.2 3.225 7.2 7.2s-3.225 7.2-7.2 7.2-7.2-3.225-7.2-7.2 3.225-7.2 7.2-7.2zm-3.6 7.2h7.2v-1.2h-7.2v1.2z" />
                </svg>
              </div>
              <div className="flex items-center justify-center h-10 bg-gray-50 rounded-lg">
                <svg role="img" viewBox="0 0 24 24" className="h-6 w-6 text-gray-700" fill="currentColor">
                  <title>Air Canada</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4.8c3.975 0 7.2 3.225 7.2 7.2s-3.225 7.2-7.2 7.2-7.2-3.225-7.2-7.2 3.225-7.2 7.2-7.2zm-3.6 7.2l3.6-3.6 3.6 3.6-3.6 3.6-3.6-3.6z" />
                </svg>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">Y 390+ más aerolíneas en todo el mundo</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="text-lg font-medium mb-3 text-gray-900">Cobertura global de rutas</h3>
            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Mapa de cobertura global de rutas de viajes de negocios"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Cobertura de rutas de viajes de negocios en todo el mundo
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
