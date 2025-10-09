"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { usePopup } from "@/contexts/popup-context"

export default function CTASection() {
  const { openPopup } = usePopup()
  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Pronto para Transformar seu Atendimento?
          </h2>
          <p className="text-base sm:text-lg md:text-xl opacity-90 px-4 sm:px-0">
            Agende uma demonstração gratuita e veja como nossa solução pode revolucionar seus resultados
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center">
            {/* Primary CTA - Desktop */}
            <Button
              onClick={openPopup}
              size="lg"
              variant="secondary"
              className="hidden sm:inline-flex bg-white text-orange-500 hover:bg-gray-100 min-h-[44px]"
            >
              <Play className="mr-2 h-5 w-5" />
              Agende uma conversa estratégica
            </Button>

            {/* Primary CTA - Mobile */}
            <Button
              onClick={openPopup}
              size="lg"
              variant="secondary"
              className="sm:hidden bg-white text-orange-500 hover:bg-gray-100 min-h-[48px] w-full"
            >
              <Play className="mr-2 h-5 w-5" />
              Agendar conversa
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-orange-500 min-h-[48px] w-full sm:w-auto"
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
