export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Confiança Contabilidade</h3>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed max-w-md text-pretty">
              Escritório de contabilidade especializado em comércio e prestação de serviços. Transparência, confiança e
              valor único sem surpresas.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#inicio"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>(48) 99610-4525</li>
              <li>(48) 3364-8554</li>
              <li>cristiane@contabconfianca.com.br</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-sm text-secondary-foreground/60">
          <p>© {currentYear} Confiança Contabilidade. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
