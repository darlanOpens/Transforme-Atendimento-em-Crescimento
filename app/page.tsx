"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  HandshakeIcon,
  Menu,
  Users,
  Zap,
  X,
  Play,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Database,
} from "lucide-react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import SolutionOverview from "@/components/ui/solution-overview"
import CRFPillarsSection from "@/components/ui/crf-pillars"

// Custom hook for intersection observer
function useInView(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isInView] as const
}

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [ref, isInView] = useInView()

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const startCount = 0

    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)

      setCount(Math.floor(progress * (end - startCount) + startCount))

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      }
    }

    requestAnimationFrame(updateCount)
  }, [isInView, end, duration])

  return (
    <div ref={ref} className="text-2xl font-bold text-gray-700">
      {count}
      {suffix}
    </div>
  )
}



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [heroRef, heroInView] = useInView()

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300" style={{ height: '10vh' }}>
        <div className="container mx-auto px-4 flex h-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Image
                src="/Logo Opens.png"
                alt="Logo Opens"
                width={128}
                height={40}
                className="h-10 w-auto"
                priority
              />
              <div className="absolute -top-1 -right-1 h-3 w-3 bg-orange-500 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#solution"
              className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors duration-200 relative group"
            >
              Solução
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="#pillars"
              className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors duration-200 relative group"
            >
              Pilares CRF
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="#differentials"
              className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors duration-200 relative group"
            >
              Diferenciais
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link
              href="#results"
              className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors duration-200 relative group"
            >
              Resultados
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Sparkles className="mr-2 h-4 w-4" />
              Agende uma conversa estratégica
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <Link href="#solution" className="block text-sm font-medium text-muted-foreground hover:text-orange-500">
                Solução
              </Link>
              <Link href="#pillars" className="block text-sm font-medium text-muted-foreground hover:text-orange-500">
                Pilares CRF
              </Link>
              <Link
                href="#differentials"
                className="block text-sm font-medium text-muted-foreground hover:text-orange-500"
              >
                Diferenciais
              </Link>
              <Link href="#results" className="block text-sm font-medium text-muted-foreground hover:text-orange-500">
                Resultados
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-background to-purple-50" style={{ height: '70vh' }}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-100 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          <div className="container relative z-10 px-4 h-full flex items-center">
            <div
              ref={heroRef}
              className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center transition-all duration-1000 ${
                heroInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full text-orange-600 text-sm font-medium">
                    <Zap className="h-4 w-4" />
                    Solução Integrada de Nova Geração
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                    O <span className="text-orange-500">futuro padrão</span>
                    <span className="block">
                      do atendimento
                    </span>
                  </h1>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                    A única solução que une <strong>Inteligência Artificial</strong>, <strong>Dados</strong> e
                    <strong> Consultoria Estratégica</strong> para revolucionar seus resultados de Conversão, Retenção e
                    Fidelização.
                  </p>
                </div>

                <div className="flex justify-start">
                  <Button
                    size="lg"
                    className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Agende uma conversa estratégica
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="flex items-center gap-8 pt-1">
                  <div className="text-center">
                    <AnimatedCounter end={500} suffix="+" />
                    <p className="text-sm text-muted-foreground">Empresas Atendidas</p>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter end={98} suffix="%" />
                    <p className="text-sm text-muted-foreground">Satisfação</p>
                  </div>
                  <div className="text-center">
                    <AnimatedCounter end={35} suffix="%" />
                    <p className="text-sm text-muted-foreground">Aumento em Conversão</p>
                  </div>
                </div>
              </div>

              <div className="relative z-10">
                {/* Simplified Dashboard Mockup */}
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-orange-500 h-12 flex items-center px-6">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                      <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center text-white font-medium">Opens Solution</div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-500">127%</div>
                        <div className="text-sm text-muted-foreground">Conversão</div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-500">89%</div>
                        <div className="text-sm text-muted-foreground">Retenção</div>
                      </div>
                      <div className="bg-gradient-to-br from-teal-100 to-teal-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-teal-500">94%</div>
                        <div className="text-sm text-muted-foreground">Fidelização</div>
                      </div>
                    </div>
                    <div className="h-32 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg flex items-end justify-around p-4">
                      {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                        <motion.div
                          key={i}
                          className="bg-orange-500 rounded-t"
                          style={{ width: "12px" }}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.8 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Cards */}
                <motion.div
                  className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 border z-30 hidden sm:block"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-orange-500" />
                    <span className="text-sm font-medium">IA Ativa</span>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border z-30 hidden sm:block"
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium">+28% NPS</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="bg-gray-50 flex items-center justify-center" style={{ height: '20vh' }}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
              <div className="flex items-center justify-center w-24 h-16">
                <Image
                  src="/clientes/Nextar.png"
                  alt="Nextar"
                  width={96}
                  height={64}
                  className="h-12 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-24 h-16">
                <Image
                  src="/clientes/Snowland.png"
                  alt="Snowland Gramado"
                  width={96}
                  height={64}
                  className="h-12 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-24 h-16">
                <Image
                  src="/clientes/branco.png"
                  alt="Branco"
                  width={96}
                  height={64}
                  className="h-12 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-24 h-16">
                <Image
                  src="/clientes/eco.png"
                  alt="Eco"
                  width={96}
                  height={64}
                  className="h-12 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-24 h-16">
                <Image
                  src="/clientes/ferrasa.png"
                  alt="Ferrasa"
                  width={96}
                  height={64}
                  className="h-12 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-24 h-16">
                <Image
                  src="/clientes/havan.png"
                  alt="Havan"
                  width={96}
                  height={64}
                  className="h-12 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-24 h-16">
                <Image
                  src="/clientes/ouze.png"
                  alt="Ouze"
                  width={96}
                  height={64}
                  className="h-12 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-24 h-16">
                <Image
                  src="/clientes/studioz.png"
                  alt="Studioz"
                  width={96}
                  height={64}
                  className="h-12 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
              <div className="flex items-center justify-center w-24 h-16">
                <Image
                  src="/clientes/superlogica.png"
                  alt="Superlogica"
                  width={96}
                  height={64}
                  className="h-12 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Solution Overview Section */}
        <section id="solution" className="py-20 bg-background">
          <SolutionOverview />
        </section>

        {/* CRF Pillars Section */}
        <section id="pillars" className="py-20 bg-gray-50">
          <CRFPillarsSection />
        </section>

        {/* Strategic Differentials Section */}
        <section id="differentials" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Nossos <span className="text-orange-500">Diferenciais</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                O que nos torna únicos no mercado de soluções de atendimento
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <Brain className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Inteligência Artificial</h3>
                <p className="text-muted-foreground">
                  IA avançada que automatiza tarefas, personaliza interações e prevê comportamentos
                </p>
              </Card>

              <Card className="p-8 text-center">
                <Database className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Análise de Dados</h3>
                <p className="text-muted-foreground">
                  Visão 360° do cliente com dados unificados para decisões estratégicas precisas
                </p>
              </Card>

              <Card className="p-8 text-center">
                <HandshakeIcon className="h-12 w-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Consultoria Estratégica</h3>
                <p className="text-muted-foreground">
                  Especialistas dedicados que traduzem tecnologia em resultados reais
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">
                Resultados que <span className="text-orange-500">Transformam</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Empresas que implementaram nossa solução obtiveram resultados extraordinários
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-500 mb-2">+127%</div>
                <div className="text-lg font-semibold mb-2">Conversão</div>
                <p className="text-muted-foreground">
                  Aumento médio na taxa de conversão de leads em clientes
                </p>
              </Card>

              <Card className="p-8 text-center">
                <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-500 mb-2">89%</div>
                <div className="text-lg font-semibold mb-2">Retenção</div>
                <p className="text-muted-foreground">
                  Taxa de retenção de clientes após implementação
                </p>
              </Card>

              <Card className="p-8 text-center">
                <HandshakeIcon className="h-12 w-12 text-teal-500 mx-auto mb-4" />
                <div className="text-3xl font-bold text-orange-500 mb-2">94%</div>
                <div className="text-lg font-semibold mb-2">Fidelização</div>
                <p className="text-muted-foreground">
                  Índice de satisfação e fidelização de clientes
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold">
                Pronto para Transformar seu Atendimento?
              </h2>
              <p className="text-xl opacity-90">
                Agende uma demonstração gratuita e veja como nossa solução pode revolucionar seus resultados
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                  <Play className="mr-2 h-5 w-5" />
                  Agende uma conversa estratégica
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="h-10 w-32">
                <Image
                  src="/Logo Opens.png"
                  alt="Logo Opens"
                  width={128}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-muted-foreground">
                Transformando atendimento em crescimento sustentável através de soluções integradas.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Solução</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Inteligência Artificial</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Análise de Dados</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Consultoria Estratégica</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Sobre Nós</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Casos de Sucesso</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Suporte</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Documentação</Link></li>
                <li><Link href="#" className="hover:text-orange-500 transition-colors">Termos de Uso</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Opens. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
