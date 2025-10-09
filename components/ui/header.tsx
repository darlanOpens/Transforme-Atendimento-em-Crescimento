"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Sparkles } from "lucide-react"
import { usePopup } from "@/contexts/popup-context"
import { getImagePath } from "@/lib/image-path"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { openPopup } = usePopup()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300" style={{ height: '10vh' }}>
      <div className="container mx-auto px-4 flex h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <Image
              src={getImagePath("/Logo Opens.png")}
              alt="Logo Opens"
              width={128}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#solution"
            className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors duration-200 relative group"
          >
            Solução
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#pillars"
            className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors duration-200 relative group"
          >
            Pilares CRF
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#differentials"
            className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors duration-200 relative group"
          >
            Diferenciais
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
          <Link
            href="#results"
            className="text-sm font-medium text-muted-foreground hover:text-orange-500 transition-colors duration-200 relative group"
          >
            Resultados
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-200 group-hover:w-full"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop CTA - Hidden on mobile */}
          <Button
            onClick={openPopup}
            className="hidden md:inline-flex bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Agende uma conversa estratégica
          </Button>

          {/* Mobile CTA - Shorter text */}
          <Button
            onClick={openPopup}
            size="sm"
            className="md:hidden bg-orange-500 hover:bg-orange-600 text-white shadow-lg"
          >
            <Sparkles className="mr-1.5 h-3.5 w-3.5" />
            Agendar
          </Button>

          {/* Mobile Menu Button - Touch target compliant */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden min-w-[44px] min-h-[44px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-6 space-y-4">
            <Link
              href="#solution"
              className="block text-base font-medium text-muted-foreground hover:text-orange-500 py-3 min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Solução
            </Link>
            <Link
              href="#pillars"
              className="block text-base font-medium text-muted-foreground hover:text-orange-500 py-3 min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Pilares CRF
            </Link>
            <Link
              href="#differentials"
              className="block text-base font-medium text-muted-foreground hover:text-orange-500 py-3 min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Diferenciais
            </Link>
            <Link
              href="#results"
              className="block text-base font-medium text-muted-foreground hover:text-orange-500 py-3 min-h-[44px] flex items-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Resultados
            </Link>

            {/* Mobile CTA in menu */}
            <Button
              onClick={() => {
                setIsMenuOpen(false)
                openPopup()
              }}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white min-h-[44px]"
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Agende sua conversa
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
