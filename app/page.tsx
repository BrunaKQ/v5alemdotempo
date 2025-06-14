import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero Section with New Cover Image */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <div className="relative h-[600px] w-full overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-BkrMgCDm3vJ7v6VjxOu9GIZq73j4dK.png"
              alt="Crônicas de Nova Orleans"
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="font-serif text-5xl font-bold tracking-tight text-silver-200 sm:text-6xl md:text-7xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Crônicas de Nova Orleans
            </h1>
            <p className="mt-4 font-serif text-3xl italic tracking-wider text-crimson-500 sm:text-4xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Além do Tempo
            </p>
            <p className="mt-6 max-w-2xl text-lg text-gray-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              Acompanhe as aventuras da coterie Ordo Noctis, cinco vampiros unidos por necessidade e destino nas ruas
              sombrias de Nova Orleans em 1929, onde o sobrenatural se entrelaça com o jazz e os segredos da noite
              eterna.
            </p>
            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/Crônicas">
                <Button variant="default" className="bg-blood-800 hover:bg-blood-700">
                  Ler Crônicas
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="border-silver-400 text-gray-800 hover:bg-gothic-900">
                  Sobre o Projeto
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="bg-midnight-800 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-12 border-b border-blood-700 pb-4 font-serif text-3xl font-bold text-silver-200 text-center">
              Acesso Rápido
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3">
              <Link href="/artigos" className="group">
                <div className="rounded-lg bg-midnight-700 p-6 text-center transition-colors hover:bg-midnight-600">
                  <div className="mb-4 text-4xl">📚</div>
                  <h3 className="mb-2 font-serif text-xl text-silver-300 group-hover:text-silver-200">
                    Todos os Artigos
                  </h3>
                  <p className="text-sm text-gray-400">Acesse todos os textos e histórias em um só lugar</p>
                </div>
              </Link>

              <Link href="/coterie" className="group">
                <div className="rounded-lg bg-midnight-700 p-6 text-center transition-colors hover:bg-midnight-600">
                  <div className="mb-4 text-4xl">⚜️</div>
                  <h3 className="mb-2 font-serif text-xl text-silver-300 group-hover:text-silver-200">A Coterie</h3>
                  <p className="text-sm text-gray-400">Conheça os membros da Ordo Noctis</p>
                </div>
              </Link>

              <Link href="/about" className="group">
                <div className="rounded-lg bg-midnight-700 p-6 text-center transition-colors hover:bg-midnight-600">
                  <div className="mb-4 text-4xl">ℹ️</div>
                  <h3 className="mb-2 font-serif text-xl text-silver-300 group-hover:text-silver-200">Sobre</h3>
                  <p className="text-sm text-gray-400">Saiba mais sobre o projeto e a campanha</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-gradient-to-b from-black to-neutral-900 py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="mb-6 font-serif text-3xl font-bold text-silver-200">Sobre as Crônicas</h2>
            <p className="mb-6 text-gray-300">
              Em "Crônicas de Nova Orleans - Além do Tempo", exploramos os mistérios sombrios que se escondem nas
              sombras da cidade durante a era do jazz. Cada história revela um novo aspecto da sociedade vampírica que
              existe paralelamente ao mundo humano.
            </p>
            <p className="text-gray-300">
              Junte-se a nós nesta jornada através do tempo, onde o sobrenatural e o histórico se entrelaçam em
              narrativas cativantes de poder, paixão e imortalidade.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
