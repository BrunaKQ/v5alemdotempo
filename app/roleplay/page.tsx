import Link from "next/link"
import { BookOpen } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function RoleplayPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-4 font-serif text-4xl font-bold text-silver-200">
              <span className="mr-3 text-4xl">💬</span>
              Roleplay por Texto - Nova Orleans
            </h1>
            <p className="text-lg text-gray-300">
              O que acontece entre os momentos de guerra, poder e ritual? A vida noturna dos imortais também tem pausas
              — ou quase. É onde personagens se revelam nos detalhes.
            </p>
          </div>

          <div className="mb-6 rounded-lg bg-midnight-800 p-4">
            <p className="text-gray-300">
              <strong>Roleplay por Texto</strong> referente aos acontecimentos narrativos do dia{" "}
              <strong>30/10/1929</strong>.
            </p>
          </div>

          <div className="space-y-8">
            {/* Nadine */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                🔥 Nadine
              </h2>
              <p className="mb-3 text-gray-300">Dentro da Coterie, Nadine tem a função de...</p>
              <div className="space-y-2">
                <Link
                  href="/roleplay/nadine-30-10-1929"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Nadine 30/10/1929</span>
                </Link>
              </div>
            </section>

            {/* Helena */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                🕷️ Helena
              </h2>
              <p className="mb-3 text-gray-300">Dentro da Coterie, Helena tem a função de...</p>
              <div className="space-y-2">
                <Link
                  href="/roleplay/helena-30-10-1929"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Helena 30/10/1929</span>
                </Link>
              </div>
            </section>

            {/* Emilie */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                🎭 Emilie
              </h2>
              <p className="mb-3 text-gray-300">Dentro da Coterie, Emilie tem a função de...</p>
              <div className="space-y-2">
                <Link
                  href="/roleplay/emilie-30-10-1929"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Emilie 30/10/1929</span>
                </Link>
              </div>
            </section>

            {/* Desmond */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                😎 Desmond
              </h2>
              <p className="mb-3 text-gray-300">Dentro da Coterie, Desmond tem a função de...</p>
              <div className="space-y-2">
                <Link
                  href="/roleplay/desmond-30-10-1929"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Desmond 30/10/1929</span>
                </Link>
              </div>
            </section>

            {/* Étienne */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                🔮 Étienne
              </h2>
              <p className="mb-3 text-gray-300">Dentro da Coterie, Étienne tem a função de...</p>
              <div className="space-y-2">
                <Link
                  href="/roleplay/etienne-30-10-1929"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Étienne 30/10/1929</span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
