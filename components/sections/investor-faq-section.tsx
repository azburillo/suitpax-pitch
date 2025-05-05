"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { CaretDown, CaretUp, Question, CheckCircle, Warning, ShieldCheck, Rocket } from "@phosphor-icons/react"
import Image from "next/image"

export default function InvestorFAQSection() {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({
    0: true, // First item expanded by default
  })

  // Toggle FAQ item expansion
  const toggleItem = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  // FAQ data
  const faqs = [
    {
      question: "¿Cuál es vuestra ventaja competitiva sostenible frente a competidores establecidos?",
      answer: (
        <div className="space-y-2">
          <p>Nuestra ventaja competitiva se basa en tres pilares fundamentales:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Tecnología propietaria:</span> Nuestros modelos de IA están
                específicamente entrenados para viajes corporativos, con algoritmos de optimización que generan un 27%
                de ahorro promedio.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Integración completa:</span> A diferencia de soluciones fragmentadas,
                ofrecemos una plataforma unificada que conecta viajes, finanzas y experiencia del viajero.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Modelo de precios disruptivo:</span> Nuestra estructura de precios es
                hasta un 70% más económica que los competidores tradicionales, eliminando las comisiones por usuario.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <Rocket className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "¿Cómo pensáis adquirir clientes de manera rentable?",
      answer: (
        <div className="space-y-2">
          <p>
            Nuestra estrategia de adquisición de clientes se basa en un enfoque multicanal con un CAC objetivo de €2,500
            y un LTV de €15,000+:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Marketing de contenidos especializado:</span> Generación de leads
                cualificados mediante contenido de alto valor sobre optimización de viajes corporativos.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Partnerships estratégicos:</span> Alianzas con despachos de contabilidad,
                consultoras y asociaciones empresariales que nos recomiendan a sus clientes.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Modelo freemium:</span> Nuestra versión gratuita permite a los usuarios
                experimentar el valor antes de convertirse en clientes de pago.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <Rocket className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "¿Cuál es vuestro plan para escalar si conseguís la financiación?",
      answer: (
        <div className="space-y-2">
          <p>La financiación se destinará a tres áreas principales para impulsar nuestro crecimiento:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Desarrollo de producto (45%):</span> Ampliar nuestro equipo de ingeniería
                para acelerar el desarrollo de funcionalidades avanzadas de IA y automatización.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Ventas y marketing (35%):</span> Expandir nuestro equipo comercial y
                aumentar la inversión en marketing digital para acelerar la adquisición de clientes.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Expansión internacional (20%):</span> Establecer presencia en mercados
                clave de Europa y Norteamérica para capturar oportunidades globales.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <Rocket className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "¿Cuánto tiempo tenéis de runway con la inversión solicitada?",
      answer: (
        <div className="space-y-2">
          <p>
            La inversión de €1.2M nos proporciona un runway de 24 meses con un burn rate mensual promedio de €50K,
            permitiéndonos alcanzar los siguientes hitos:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Mes 6:</span> Lanzamiento completo del producto con todas las
                funcionalidades core.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Mes 12:</span> Alcanzar 50+ clientes activos y €500K ARR.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Mes 18:</span> Expansión a 3 mercados europeos clave.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Mes 24:</span> Alcanzar €1.5M ARR y preparar Serie A.
              </p>
            </li>
          </ul>
          <p className="text-sm font-light mt-2">
            Además, contamos con un plan de contingencia que podría extender el runway hasta 30 meses si fuera
            necesario.
          </p>
        </div>
      ),
      icon: <Warning className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "¿Cómo habéis validado el product-market fit?",
      answer: (
        <div className="space-y-2">
          <p>Hemos validado nuestro product-market fit a través de múltiples indicadores:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">18 clientes activos</span> que utilizan nuestra versión beta, con una tasa
                de retención del 92% a 12 meses.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">NPS de 72</span> entre nuestros usuarios actuales, significativamente
                superior al promedio del sector (45).
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">27% de ahorro promedio</span> documentado para nuestros clientes en sus
                costes de viaje corporativo.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Lista de espera de 200+ empresas</span> interesadas en acceder a nuestra
                plataforma tras el lanzamiento oficial.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <CheckCircle className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "¿Cuál es vuestra estrategia de monetización y modelo de ingresos?",
      answer: (
        <div className="space-y-2">
          <p>Nuestro modelo de ingresos se basa en un enfoque SaaS por niveles:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Plan Free:</span> Funcionalidades básicas gratuitas para atraer usuarios y
                generar leads cualificados.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Plan Scale-up (€49/mes):</span> Para startups y pequeñas empresas, con
                funcionalidades esenciales y límites de uso generosos.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Plan Enterprise ($129/mes):</span> Para empresas medianas, con
                funcionalidades avanzadas y sin límites de uso.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Plan Custom:</span> Para grandes corporaciones, con integraciones
                personalizadas y soporte dedicado.
              </p>
            </li>
          </ul>
          <p className="text-sm font-light mt-2">
            Este modelo nos permite un LTV promedio de €15,000 por cliente, con un margen bruto del 85% y un payback
            period de 6 meses.
          </p>
        </div>
      ),
      icon: <CheckCircle className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "¿Qué métricas clave estáis siguiendo?",
      answer: (
        <div className="space-y-2">
          <p>Monitorizamos un conjunto de KPIs críticos para evaluar nuestro crecimiento y salud del negocio:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">ARR y MRR:</span> Ingresos anuales y mensuales recurrentes, con un
                objetivo de €1.5M ARR para finales de 2026.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">CAC y LTV:</span> Coste de adquisición de clientes y valor del ciclo de
                vida, manteniendo un ratio LTV:CAC &gt; 5:1.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Retención y churn:</span> Actualmente 92% de retención anual, con objetivo
                de mantenerla por encima del 90%.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">NPS y CSAT:</span> Net Promoter Score y satisfacción del cliente,
                actualmente en 72 y 4.8/5 respectivamente.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Ahorro generado:</span> Promedio de 27% de ahorro en costes de viaje para
                nuestros clientes.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <CheckCircle className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "¿Cuál es vuestra estrategia de salida a largo plazo?",
      answer: (
        <div className="space-y-2">
          <p>
            Aunque nuestro enfoque principal es construir un negocio sostenible y rentable, vemos dos caminos
            potenciales de salida en un horizonte de 5-7 años:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Adquisición estratégica:</span> Por parte de grandes actores del sector
                travel como Expedia, Booking Holdings o American Express GBT, que buscan tecnología avanzada de IA para
                viajes corporativos.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">IPO:</span> Salida a bolsa una vez alcanzados los €100M+ ARR, siguiendo el
                camino de empresas como TripActions/Navan.
              </p>
            </li>
          </ul>
          <p className="text-sm font-light mt-2">
            Basándonos en múltiplos actuales del sector (7-10x ARR), proyectamos una valoración de salida entre €700M y
            €1B+ para 2031.
          </p>
        </div>
      ),
      icon: <Rocket className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "¿Cómo protegéis vuestra propiedad intelectual?",
      answer: (
        <div className="space-y-2">
          <p>Nuestra estrategia de protección de IP se basa en múltiples capas:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Patentes:</span> 2 patentes presentadas para algoritmos de optimización de
                viajes basados en IA y 1 patente para nuestro sistema de recomendación multimodal.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Secretos comerciales:</span> Metodologías propietarias de entrenamiento de
                IA y pipelines de procesamiento de datos protegidos mediante acuerdos de confidencialidad.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Marca registrada:</span> Nombre y logo de Suitpax registrados en la UE y
                en proceso en EE.UU.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Contratos:</span> Acuerdos robustos con empleados y proveedores que
                protegen nuestra IP y previenen la competencia desleal.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <ShieldCheck className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
    {
      question: "¿Qué riesgos principales veis en el negocio?",
      answer: (
        <div className="space-y-2">
          <p>Identificamos y gestionamos proactivamente los siguientes riesgos clave:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Warning className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Competencia:</span> Grandes actores como TripActions/Navan podrían
                desarrollar capacidades similares. <span className="italic">Mitigación:</span> Mantener nuestra ventaja
                tecnológica mediante innovación continua y enfoque en segmentos desatendidos.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Warning className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Adopción tecnológica:</span> Resistencia al cambio en empresas
                tradicionales. <span className="italic">Mitigación:</span> Proceso de onboarding simplificado y
                migración asistida desde sistemas legacy.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Warning className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Regulación:</span> Cambios en normativas de privacidad o IA.{" "}
                <span className="italic">Mitigación:</span> Diseño cumpliendo GDPR y estándares emergentes de IA
                responsable.
              </p>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-1 rounded-full bg-emerald-950/10 p-1">
                <Warning className="h-3.5 w-3.5 text-emerald-950" weight="fill" />
              </div>
              <p>
                <span className="font-medium">Ciclo económico:</span> Recesiones que afecten al gasto en viajes
                corporativos. <span className="italic">Mitigación:</span> Posicionamiento como solución de ahorro de
                costes, más valiosa en tiempos económicos difíciles.
              </p>
            </li>
          </ul>
        </div>
      ),
      icon: <Warning className="h-5 w-5 text-emerald-950" weight="fill" />,
    },
  ]

  return (
    <motion.section
      id="investor-faq"
      className="bg-white backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-gray-200 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="inline-flex items-center rounded-xl bg-gray-200 px-2.5 py-0.5 text-[10px] font-medium text-gray-700">
          PREGUNTAS FRECUENTES
        </div>
        <div className="h-6 w-6">
          <Image src="/suitpax-bl-logo.webp" alt="Suitpax" width={24} height={24} className="object-contain" />
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tighter mb-3 sm:mb-4">
        Anticipando preguntas de inversores
      </h2>
      <p className="text-sm sm:text-base font-light text-gray-700 mb-6">
        Abordamos proactivamente las objeciones y preguntas más comunes que los inversores suelen plantear.
      </p>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-xl transition-all duration-200 ${
              expandedItems[index] ? "border-emerald-200 bg-emerald-50/30" : "border-gray-200"
            }`}
          >
            <button
              className="w-full flex items-center justify-between p-4 text-left"
              onClick={() => toggleItem(index)}
              aria-expanded={expandedItems[index]}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`h-8 w-8 rounded-lg flex items-center justify-center transition-colors ${
                    expandedItems[index] ? "bg-emerald-100" : "bg-gray-100"
                  }`}
                >
                  {faq.icon || <Question className="h-4 w-4 text-emerald-950" weight="fill" />}
                </div>
                <h3 className="text-base font-medium">{faq.question}</h3>
              </div>
              <div
                className={`h-6 w-6 rounded-full flex items-center justify-center transition-colors ${
                  expandedItems[index] ? "bg-emerald-100" : "bg-gray-100"
                }`}
              >
                {expandedItems[index] ? (
                  <CaretUp className="h-4 w-4 text-emerald-950" weight="bold" />
                ) : (
                  <CaretDown className="h-4 w-4 text-gray-600" weight="bold" />
                )}
              </div>
            </button>
            {expandedItems[index] && (
              <div className="px-4 pb-4 pt-0">
                <div className="pt-2 text-sm font-light text-gray-700">{faq.answer}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 bg-gray-100 p-4 rounded-xl">
        <h3 className="text-lg font-medium mb-3">¿Tienes más preguntas?</h3>
        <p className="text-sm font-light text-gray-700 mb-3">
          Estamos comprometidos con la transparencia total. Si tienes preguntas adicionales sobre nuestro modelo de
          negocio, tecnología o proyecciones financieras, no dudes en contactarnos.
        </p>
        <div className="flex items-center gap-2 text-emerald-950">
          <p className="text-sm font-medium">investors@suitpax.com</p>
          <span className="text-gray-400">|</span>
          <p className="text-sm font-medium">+34 91 123 4567</p>
        </div>
      </div>
    </motion.section>
  )
}
