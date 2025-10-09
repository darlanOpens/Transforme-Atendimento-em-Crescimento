import Image from "next/image"
import { getImagePath } from "@/lib/image-path"

export default function ClientsSection() {
  return (
    <section className="bg-gray-50 flex items-center justify-center py-8 sm:py-10">
      <div className="container mx-auto px-4">
        {/* Mobile: Scroll indicator */}
        <div className="md:hidden text-center mb-4">
          <p className="text-xs text-muted-foreground">← Deslize para ver mais →</p>
        </div>

        <div className="flex items-center justify-start md:justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 overflow-x-auto scrollbar-hide pb-2 md:pb-0">
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/Nextar.png")}
              alt="Nextar"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/Snowland.png")}
              alt="Snowland Gramado"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/branco.png")}
              alt="Branco"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/eco.png")}
              alt="Eco"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/ferrasa.png")}
              alt="Ferrasa"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/havan.png")}
              alt="Havan"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/ouze.png")}
              alt="Ouze"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/studioz.png")}
              alt="Studioz"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="flex items-center justify-center w-20 h-14 sm:w-24 sm:h-16 md:w-28 md:h-18 flex-shrink-0">
            <Image
              src={getImagePath("/clientes/superlogica.png")}
              alt="Superlogica"
              width={112}
              height={72}
              className="h-10 w-auto sm:h-12 md:h-14 object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
