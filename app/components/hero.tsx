"use client"

import { Button } from "@/app/components/ui/button"
import { Check } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contato")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full h-[200px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/image.png"
                alt="Profissional de contabilidade"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>
          </div>

          {/* Left Content */}
          <div className="max-w-xl order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 text-balance leading-tight">
              Transparência, confiança, <span className="text-primary">caminhando junto com você</span>.
            </h1>


            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Transparência total: você sempre sabe o que está acontecendo com sua empresa.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Valor único sem surpresas: planejamento claro e previsível.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Atendimento ágil e profissional: estamos presentes quando você precisa.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Especialização em comércio e serviços: entendemos seu negócio.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-8"
                onClick={scrollToContact}
              >
                Abrir minha empresa
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white rounded-full px-8 bg-transparent"
                asChild
              >
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  Trocar de contador
                </a>
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
