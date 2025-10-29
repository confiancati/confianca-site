import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Building2, Users, Calculator, TrendingUp, Shield } from "lucide-react"

const services = [
  {
    icon: Calculator,
    title: "Serviços Fiscais e Tributários",
    description: "Apuração e recolhimento de tributos, planejamento tributário e regularização de pendências.",
    items: [
      "Apuração de impostos federais, estaduais e municipais",
      "Obrigações acessórias (SPED, DCTF, DIRF, ECF)",
      "Planejamento tributário para redução legal",
      "Imposto de Renda Pessoa Física",
    ],
  },
  {
    icon: FileText,
    title: "Serviços Contábeis",
    description: "Escrituração contábil completa e demonstrações financeiras para sua empresa.",
    items: [
      "Balanço patrimonial e DRE",
      "Fluxo de caixa e demonstrações financeiras",
      "Consultoria contábil para gestão",
      "Assessoria em normas contábeis",
    ],
  },
  {
    icon: Building2,
    title: "Serviços Societários",
    description: "Abertura, alteração e gestão completa da documentação da sua empresa.",
    items: [
      "Abertura e fechamento de empresas",
      "Alteração contratual completa",
      "Elaboração de atas e contratos",
      "Obtenção de inscrições (CNPJ, IE, IM)",
    ],
  },
  {
    icon: Users,
    title: "Departamento Pessoal",
    description: "Gestão completa de folha de pagamento e obrigações trabalhistas.",
    items: [
      "Admissão e rescisão de funcionários",
      "Folha de pagamento completa",
      "Cálculo de encargos (INSS, FGTS)",
      "Obrigações trabalhistas (eSocial, RAIS)",
    ],
  },
  {
    icon: TrendingUp,
    title: "Micro e Pequenos Negócios",
    description: "Soluções especializadas para MEI, ME e enquadramento no Simples Nacional.",
    items: [
      "Abertura e regularização de MEI",
      "Suporte fiscal e contábil para ME",
      "Enquadramento no Simples Nacional",
      "Consultoria para crescimento",
    ],
  },
  {
    icon: Shield,
    title: "Consultoria Empresarial",
    description: "Análise financeira, planejamento e suporte estratégico para sua empresa.",
    items: [
      "Análise e gestão financeira",
      "Planejamento sucessório",
      "Avaliação e recuperação de empresas",
      "Suporte em auditorias",
    ],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Serviços Completos para sua Empresa
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Oferecemos soluções contábeis especializadas para comércio e prestação de serviços, com valor único e sem
            surpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 md:p-8 rounded-lg bg-primary/5 border border-primary/20">
            <div className="text-left">
              <h3 className="text-xl font-bold text-foreground mb-2">Valor Único, Sem Surpresas</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed">
                Trabalhamos com preços transparentes e fixos. Você sabe exatamente quanto vai pagar, sem taxas ocultas
                ou cobranças inesperadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
