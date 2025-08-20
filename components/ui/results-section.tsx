import { Card } from "@/components/ui/card"
import { CheckCircle, Users, HandshakeIcon } from "lucide-react"

export default function ResultsSection() {
  return (
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
  )
}
