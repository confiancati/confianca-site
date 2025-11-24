"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo_colorido.png"
              alt="Confiança Contabilidade"
              width={200}
              height={50}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium text-foreground hover:text-secondary transition-colors"
            >
              Contato
            </button>
            <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-full px-6">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                Abra sua empresa
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-sm font-medium text-foreground hover:text-secondary transition-colors text-left"
              >
                Contato
              </button>
              <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-full w-full">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Abra sua empresa
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
