import Link from "next/link"
import { BookOpen } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function MemoriamPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-4 font-serif text-4xl font-bold text-silver-200">
              <span className="mr-3 text-4xl">🕯️</span>
              In Memoriam
            </h1>
            <p className="text-lg text-gray-300">
              Antes do Abraço, havia vidas marcadas por escolhas irreversíveis, amores proibidos, perdas devastadoras e
              segredos enterrados. Cada vampiro carrega consigo um passado que o moldou.
            </p>
          </div>

          <div className="space-y-8">
            {/* Fragmentos do Passado */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                Fragmentos do Passado
              </h2>
              <p className="mb-4 text-gray-300">
                Aqui desvelamos os últimos suspiros de humanidade, as memórias que cada membro carregou consigo através
                do Abraço:
              </p>
              <div className="space-y-2">
                <div className="rounded p-3 text-gray-300">
                  <span className="font-semibold text-silver-300">Nadine:</span> A vida mortal de Nadine foi marcada
                  por...
                </div>
                <div className="rounded p-3 text-gray-300">
                  <span className="font-semibold text-silver-300">Helena:</span> Antes de sua transformação, Helena
                  era...
                </div>
                <div className="rounded p-3 text-gray-300">
                  <span className="font-semibold text-silver-300">Emilie/Evelynn:</span> As Emilie/Evelynn viviam...
                </div>
                <div className="rounded p-3 text-gray-300">
                  <span className="font-semibold text-silver-300">Desmond:</span> Como mortal, Desmond dedicava-se a...
                </div>
                <div className="rounded p-3 text-gray-300">
                  <span className="font-semibold text-silver-300">Étienne:</span> A história mortal de Étienne começou
                  quando...
                </div>
              </div>
            </section>

            {/* Marcas da Noite */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                Marcas da Noite
              </h2>
              <p className="mb-4 text-gray-300">
                Momentos cruciais na vida pré-coterie dos personagens: o primeiro abraço, a perda de um mortal querido,
                uma vingança que nunca terminou, ou um segredo enterrado sob décadas de negação.
              </p>

              {/* Nadine */}
              <div className="mb-6">
                <h3 className="mb-3 font-serif text-xl font-bold text-silver-200">🔥 Nadine</h3>
                <div className="space-y-2">
                  <Link
                    href="/memoriam/jardim-proibido"
                    className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                  >
                    <BookOpen className="h-4 w-4 text-crimson-500" />
                    <span>O Jardim Proibido</span>
                  </Link>
                  <Link
                    href="/memoriam/ousadia-ala-nobre"
                    className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                  >
                    <BookOpen className="h-4 w-4 text-crimson-500" />
                    <span>Ousadia em Ala Nobre</span>
                  </Link>
                </div>
              </div>

              {/* Outros personagens */}
              <div className="space-y-4">
                <div className="rounded p-3 text-gray-300">
                  <span className="font-semibold text-silver-300">🕷️ Helena:</span> A não-vida de Helena foi marcada
                  por...
                </div>
                <div className="rounded p-3 text-gray-300">
                  <span className="font-semibold text-silver-300">🎭 Emilie/Evelynn:</span> A não-vida de Emilie/Evelynn
                  foi marcada por...
                </div>
                <div className="rounded p-3 text-gray-300">
                  <span className="font-semibold text-silver-300">😎 Desmond:</span> A não-vida de Desmond foi marcada
                  por...
                </div>
                <div className="rounded p-3 text-gray-300">
                  <span className="font-semibold text-silver-300">🔮 Étienne:</span> A não-vida de Étienne foi marcada
                  por...
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
