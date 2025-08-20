import { Card } from "@/components/ui/card"
import { Brain, Database, HandshakeIcon } from "lucide-react"

export default function StrategicDifferentials() {
  return (
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
  )
}
