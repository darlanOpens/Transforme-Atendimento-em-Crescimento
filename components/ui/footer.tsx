import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <Image
            src="/Logo Opens.png"
            alt="Logo Opens"
            width={128}
            height={40}
            className="h-10 w-auto"
          />
        </div>
        <p className="text-muted-foreground">
          &copy; 2024 Opens. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
