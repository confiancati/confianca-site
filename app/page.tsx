import { Header } from "@/app/components/header"
import { Hero } from "@/app/components/hero"
import { Services } from "@/app/components/services"
import { About } from "@/app/components/about"
import { Contact } from "@/app/components/contact"
import { Footer } from "@/app/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
