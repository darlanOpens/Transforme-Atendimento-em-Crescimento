import Image from "next/image"

export default function ClientsSection() {
  return (
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
  )
}
