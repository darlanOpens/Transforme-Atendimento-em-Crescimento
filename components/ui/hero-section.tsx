"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Play, Brain, TrendingUp } from "lucide-react"
import AnimatedCounter from "./animated-counter"

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

export default function HeroSection() {
  const [heroRef, heroInView] = useInView()

  return (
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
  )
}
