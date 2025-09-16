import Image from "next/image"
import { getImagePath } from "@/lib/image-path"

export default function ClientsSection() {
  return (
    <section className="bg-gray-50 flex items-center justify-center py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-12 overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/Nextar.png")}
              alt="Nextar"
              width={96}
              height={64}
              className="h-8 w-auto sm:h-10 md:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/Snowland.png")}
              alt="Snowland Gramado"
              width={96}
              height={64}
              className="h-8 w-auto sm:h-10 md:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/branco.png")}
              alt="Branco"
              width={96}
              height={64}
              className="h-8 w-auto sm:h-10 md:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/eco.png")}
              alt="Eco"
              width={96}
              height={64}
              className="h-8 w-auto sm:h-10 md:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/ferrasa.png")}
              alt="Ferrasa"
              width={96}
              height={64}
              className="h-8 w-auto sm:h-10 md:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/havan.png")}
              alt="Havan"
              width={96}
              height={64}
              className="h-8 w-auto sm:h-10 md:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/ouze.png")}
              alt="Ouze"
              width={96}
              height={64}
              className="h-8 w-auto sm:h-10 md:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/studioz.png")}
              alt="Studioz"
              width={96}
              height={64}
              className="h-8 w-auto sm:h-10 md:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-16 h-12 sm:w-20 sm:h-14 md:w-24 md:h-16 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/superlogica.png")}
              alt="Superlogica"
              width={96}
              height={64}
              className="h-8 w-auto sm:h-10 md:h-12 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
