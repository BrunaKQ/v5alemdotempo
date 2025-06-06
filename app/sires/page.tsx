import Link from "next/link"
import { BookOpen } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SiresPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-4 font-serif text-4xl font-bold text-silver-200">
              <span className="mr-3 text-4xl">🧛‍♂️</span>
              Os Sires
            </h1>
            <p className="text-lg text-gray-300">
              Antigos. Imortais. Criadores. Os Sires são mestres das trevas, guardiões de segredos antigos e criadores dos vampiros que agora caminham entre os mortos-vivos em Nova Orleans.
            </p>
          </div>

          <div className="space-y-2">
            {/* Victor Bloodwood */}
            <Link
              href="/sires/victor-bloodwood"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>⚔️ Victor Bloodwood — O Marido da Nadine</span>
            </Link>

            {/* Lafontaine */}
            <Link
              href="/sires/lafontaine"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>☠️ Lafontaine — O Pirata Lasombra</span>
            </Link>

            {/* Kael */}
            <Link
              href="/sires/kael"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>👁️ Kael Vane — O Nosferatu Silencioso</span>
            </Link>

            {/* Alana de Leclair */}
            <Link
              href="/sires/alana-leclair"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>🔮 Alana Leclair — A Tremere Enigmática</span>
            </Link>

            {/* Jean-Baptiste Moreau */}
            <Link
              href="/sires/jean-baptiste"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>🎭 Jean-Baptiste Moreau - O Malkaviano Sádico</span>
            
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
