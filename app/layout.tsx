import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Suitpax - Next-Gen AI TravelTech",
  description: "Unified and centralized platform for corporate travel management with AI",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gray-100 overflow-x-hidden`}>
        <Navigation />
        <Suspense>
          <main className="pt-24 sm:pt-28 md:pt-32 lg:pt-36">{children}</main>
        </Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
