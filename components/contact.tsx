"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    activity: "",
    contactPreference: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. Cidade: ${formData.city}. Atividade: ${formData.activity}. Prefiro contato via ${formData.contactPreference}.`
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleContactPreference = (preference: string) => {
    setFormData({
      ...formData,
      contactPreference: preference,
    })
  }

  return (
    <section id="contato" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
            {/* Left Column - Info Cards */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                  Ficou com alguma dúvida?
                </h2>
                <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                  Preencha as informações ao lado que em breve entraremos em contato com você.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">Telefone</h3>
                        <p className="text-sm text-muted-foreground">(11) 99999-9999</p>
                        <p className="text-sm text-muted-foreground">(11) 3333-3333</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">E-mail</h3>
                        <p className="text-sm text-muted-foreground break-words">
                          contato@confiancacontabilidade.com.br
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2">Endereço</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Rua Exemplo, 123
                          <br />
                          Centro - São Paulo/SP
                          <br />
                          CEP: 01000-000
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right Column - Form */}
            <div>
              <Card className="border-border shadow-lg">
                <CardContent className="pt-8 pb-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">
                          Nome
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Nome completo"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="bg-background border-input text-foreground h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground font-medium">
                          Celular
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(DDD) 00000-000"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="bg-background border-input text-foreground h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Qual é o seu e-mail?
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu_email@mail.com.br"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-input text-foreground h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-foreground font-medium">
                        Em qual cidade sua empresa está situada?
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="Ex: São Paulo"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="bg-background border-input text-foreground h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="activity" className="text-foreground font-medium">
                        Descrição da atividade que você exercerá na empresa
                      </Label>
                      <Textarea
                        id="activity"
                        name="activity"
                        placeholder="Ex: programador, consultor de marketing"
                        value={formData.activity}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="bg-background border-input text-foreground resize-none"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-foreground font-medium">
                        Como prefere que entremos em contato com você?
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Button
                          type="button"
                          variant={formData.contactPreference === "WhatsApp" ? "default" : "outline"}
                          size="lg"
                          className={`h-14 ${
                            formData.contactPreference === "WhatsApp"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted/50 text-foreground hover:bg-muted"
                          }`}
                          onClick={() => handleContactPreference("WhatsApp")}
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          VIA WHATSAPP
                        </Button>
                        <Button
                          type="button"
                          variant={formData.contactPreference === "Ligação" ? "default" : "outline"}
                          size="lg"
                          className={`h-14 ${
                            formData.contactPreference === "Ligação"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted/50 text-foreground hover:bg-muted"
                          }`}
                          onClick={() => handleContactPreference("Ligação")}
                        >
                          <Phone className="mr-2 h-5 w-5" />
                          VIA LIGAÇÃO
                        </Button>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base font-semibold"
                      disabled={!formData.contactPreference}
                    >
                      Enviar Solicitação
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="w-full rounded-2xl overflow-hidden shadow-lg">
            <div className="relative w-full h-48 md:h-64 lg:h-80">
              <Image
                src="images/banner.png"
                alt="Profissional trabalhando"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
