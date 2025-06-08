import Link from "next/link"
import { BookOpen } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CoteriePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-4 font-serif text-4xl font-bold text-silver-200">
              <span className="mr-3 text-4xl">⚜️</span>A Coterie
            </h1>
            <p className="text-lg text-gray-300">
              Aqui estão relacionados os membros da Coterie <strong>Ordo Noctis</strong>, aqueles que caminham lado a
              lado nas ruas úmidas de Nova Orleans, mas cujos passados são tão distantes quanto a lua no céu noturno.
            </p>
          </div>

          <div className="space-y-8">
            {/* Nadine */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                🔥 Nadine (Brujah)
              </h2>
              <div className="space-y-2">
                <Link
                  href="/coterie/nadine"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Perfil de Nadine</span>
                </Link>
              </div>
            </section>

            {/* Emilie */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                🎭 Emilie (Malkaviana)
              </h2>
              <div className="space-y-2">
                <Link
                  href="/coterie/emilie"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Perfil de Emilie</span>
                </Link>
                <Link
                  href="/coterie/emilie/complete"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>História Completa</span>
                </Link>
                <Link
                  href="/coterie/emilie/personalities"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>As Duas Personalidades</span>
                </Link>
                <Link
                  href="/coterie/emilie/chaos-magic"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Caoísmo e Magia do Caos</span>
                </Link>
              </div>
            </section>

            {/* Desmond */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                😎 Desmond Dupret Legrand (Lasombra)
              </h2>
              <div className="space-y-2">
                <Link
                  href="/coterie/desmond"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Perfil de Desmond</span>
                </Link>
                <Link
                  href="/coterie/desmond/complete"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>História Completa</span>
                </Link>
              </div>
            </section>

            {/* Helena */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                🕷️ Helena Stryker (Nosferatu)
              </h2>
              <div className="space-y-2">
                <Link
                  href="/coterie/helena"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Perfil de Helena</span>
                </Link>
              </div>
            </section>

            {/* Étienne */}
            <section>
              <h2 className="mb-4 border-b border-blood-700 pb-2 font-serif text-2xl font-bold text-silver-200">
                🔮 Étienne Moreau (Tremere)
              </h2>
              <div className="space-y-2">
                <Link
                  href="/coterie/etienne"
                  className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>Perfil de Étienne</span>
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
