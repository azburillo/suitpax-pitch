"use client"

import { motion } from "framer-motion"
import { ArrowRight, ChevronRight, Clock, Globe, Lightbulb, Target, TrendingUp } from "lucide-react"

export default function Vision2031Section() {
  return (
    <motion.section
      id="vision-2031"
      className="bg-black/80 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/10 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.65 }}
    >
      <div className="inline-flex items-center rounded-xl bg-gray-800 px-2.5 py-0.5 text-[10px] font-medium text-white mb-3 sm:mb-4">
        VISIÓN ESTRATÉGICA
      </div>

      {/* Destacando la información más importante con un título más grande y un resumen inicial */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tighter mb-3 sm:mb-4 text-white">
        Transformando la gestión de viajes corporativos con IA
      </h2>

      <div className="bg-white/5 backdrop-blur-sm p-4 rounded-xl mb-6 border border-white/10">
        <p className="text-sm sm:text-base font-light text-gray-200">
          En 2025, las empresas continúan enfrentando desafíos significativos en la gestión de viajes corporativos.
          Según un estudio reciente de Deloitte, el 78% de las empresas reportan ineficiencias en sus procesos de
          reserva y gestión, resultando en sobrecostos del 15-20% y una experiencia fragmentada para los empleados.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
        <span className="inline-flex items-center rounded-xl bg-gray-800 px-2.5 py-0.5 text-[10px] font-medium text-white">
          Procesos ineficientes
        </span>
        <span className="inline-flex items-center rounded-xl bg-gray-800 px-2.5 py-0.5 text-[10px] font-medium text-white">
          Altos costos
        </span>
        <span className="inline-flex items-center rounded-xl bg-gray-800 px-2.5 py-0.5 text-[10px] font-medium text-white">
          Experiencia fragmentada
        </span>
        <span className="inline-flex items-center rounded-xl bg-gray-800 px-2.5 py-0.5 text-[10px] font-medium text-white">
          Falta de visibilidad
        </span>
        <span className="inline-flex items-center rounded-xl bg-gray-800 px-2.5 py-0.5 text-[10px] font-medium text-white">
          Complejidad regulatoria
        </span>
      </div>

      <h3 className="text-xl font-medium text-white mb-4">Nuestra hoja de ruta para transformar la industria</h3>

      <div className="space-y-6">
        {/* Vision Card 1 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-[40px] bottom-0 w-[2px] bg-gray-700"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-black">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Expansión Global</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-white/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm font-light text-gray-300">
                    Presencia en más de 50 países con agentes de IA localizados que entienden los matices regionales
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-white/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm font-light text-gray-300">
                    Soporte para más de 20 idiomas y regulaciones regionales de viaje
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-white/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm font-light text-gray-300">
                    Alianzas estratégicas con proveedores locales de viajes en cada mercado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card 2 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-700"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-black">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Liderazgo de Mercado</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-white/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm font-light text-gray-300">
                    Capturando el 15% del mercado global de viajes corporativos con nuestro enfoque AI-first
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-white/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm font-light text-gray-300">
                    Reconocidos como la plataforma #1 de viajes con IA para empresas
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-white/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm font-light text-gray-300">
                    Adquisiciones estratégicas de startups complementarias de tecnología de viajes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card 3 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-700"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-white text-black">
              <Lightbulb className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Centro de Innovación</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-white/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm font-light text-gray-300">
                    Establecimiento de un centro de investigación de IA enfocado en tecnologías de viaje de próxima
                    generación
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-white/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm font-light text-gray-300">
                    Colaboraciones con universidades líderes para investigación de IA en viajes
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-white/10 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-white" />
                  </div>
                  <p className="text-sm font-light text-gray-300">
                    Cumbre anual de innovación que reúne a líderes de viajes e IA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card 4 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-700"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-600 text-white">
              <Target className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Líder en Sostenibilidad</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-700 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    Ayudando a las empresas a reducir su huella de carbono en viajes en un 40%
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-700 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    Puntuación de sostenibilidad propietaria para todas las opciones de viaje
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-700 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    Programa automatizado de compensación de carbono integrado en el proceso de reserva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card 5 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 bottom-0 w-[2px] bg-gray-700"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-600 text-white">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Adaptación en Tiempo Real</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-700 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    Sistemas de IA que predicen y responden a eventos globales antes de que ocurran interrupciones
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-700 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    Reajustes automáticos de reservas e itinerarios durante interrupciones
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-700 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    Sistema proactivo de gestión de riesgos para programas de viajes corporativos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Card 6 */}
        <div className="relative">
          <div className="hidden sm:block absolute left-[19px] top-0 w-[2px] bg-gray-700"></div>

          <div className="grid sm:grid-cols-[40px_1fr] gap-3">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-600 text-white">
              <ArrowRight className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">Transformación de la Industria</h3>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-700 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    Redefiniendo cómo las empresas abordan los viajes con un ecosistema de IA completamente integrado
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-700 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    Estableciendo nuevos estándares de la industria para la eficiencia en la gestión de viajes
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1 rounded-full bg-gray-700 p-1">
                    <ChevronRight className="h-3.5 w-3.5 text-gray-400" />
                  </div>
                  <p className="text-sm font-light text-gray-400">
                    Reconocidos como el catalizador de la transformación digital en viajes corporativos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
