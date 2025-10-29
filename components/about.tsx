import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const values = [
  {
    title: "Confiança",
    description: "Construímos relacionamentos baseados em transparência e honestidade com nossos clientes.",
  },
  {
    title: "Profissionalismo",
    description: "Equipe experiente e qualificada, sempre atualizada com as mudanças na legislação.",
  },
  {
    title: "Agilidade",
    description: "Atendimento rápido e eficiente, porque sabemos que tempo é dinheiro para sua empresa.",
  },
  {
    title: "Parceria",
    description: "Caminhamos junto com sua empresa, oferecendo suporte em todas as etapas do crescimento.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Sobre a Confiança Contabilidade
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p className="text-pretty">
                  Com mais de 15 anos de experiência no mercado contábil, a Confiança Contabilidade nasceu do desejo de
                  oferecer um serviço diferenciado, baseado em transparência, confiança e proximidade com o cliente.
                </p>
                <p className="text-pretty">
                  Nossa missão é simplificar a gestão contábil e fiscal da sua empresa, permitindo que você foque no que
                  realmente importa: fazer seu negócio crescer. Trabalhamos com processos bem definidos e especializados
                  em dois nichos principais: comércio e prestação de serviços.
                </p>
                <p className="text-pretty">
                  Acreditamos que a contabilidade deve ser clara, acessível e, acima de tudo, confiável. Por isso,
                  oferecemos atendimento personalizado e estamos sempre disponíveis para esclarecer suas dúvidas e
                  orientar as melhores decisões para sua empresa.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Atendimento Personalizado</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Processos Digitais</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Preços Transparentes</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
