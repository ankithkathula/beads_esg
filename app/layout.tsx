import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Lexend } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
})

export const metadata: Metadata = {
  title: "BEADS - Transform CSR into ESG Impact with BIM & Digital Twin Data",
  description:
    "We facilitate CSR projects to maximize ESG impact, aligning with sustainability goals—leveraging BIM for forecasting, simulation, and optimization to benefit all stakeholders.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={lexend.variable}>
      <body className="font-lexend">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'