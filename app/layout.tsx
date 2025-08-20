import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans"
})

export const metadata: Metadata = {
  title: "Opens - Transformando Atendimento em Crescimento Sustentável",
  description:
    "A solução integrada que une Inteligência Artificial, Dados e Consultoria Estratégica para impulsionar resultados reais em Conversão, Retenção e Fidelização.",
  keywords:
    "atendimento ao cliente, CRM, inteligência artificial, dados, consultoria, conversão, retenção, fidelização",
  authors: [{ name: "Opens" }],
  creator: "Opens",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://opens.com.br",
    title: "Opens - Transformando Atendimento em Crescimento Sustentável",
    description:
      "A solução integrada que une Inteligência Artificial, Dados e Consultoria Estratégica para impulsionar resultados reais.",
    siteName: "Opens",
    images: [
      {
        url: "/opens-logo-white.png",
        width: 800,
        height: 600,
        alt: "Logo da Opens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Opens - Transformando Atendimento em Crescimento Sustentável",
    description:
      "A solução integrada que une Inteligência Artificial, Dados e Consultoria Estratégica para impulsionar resultados reais.",
    creator: "@opens",
    images: ["/opens-logo-white.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
