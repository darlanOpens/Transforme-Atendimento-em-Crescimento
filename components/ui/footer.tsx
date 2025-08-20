import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
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
  )
}
