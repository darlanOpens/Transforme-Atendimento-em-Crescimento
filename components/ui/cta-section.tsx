import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function CTASection() {
  return (
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
  )
}
