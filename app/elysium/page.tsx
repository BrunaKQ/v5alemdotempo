import Link from "next/link"
import { BookOpen } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ElysiumPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="mb-4 font-serif text-4xl font-bold text-silver-200">
              <span className="mr-3 text-4xl">👑</span>
              Elysium
            </h1>
            <p className="text-lg text-gray-300">
              No âmago da eternidade, onde a noite governa e o sangue escreve histórias que nunca envelhecem, nasce o
              Elysium: um círculo de poder, ambição e lealdades frágeis.
            </p>
          </div>

          <div className="space-y-2">
            <Link
              href="/elysium/ines-lacroix"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>♛ NPC Príncipe Inês LaCroix</span>
            </Link>
            <Link
              href="/elysium/william-crawford"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>⚔️ NPC Senescal William Crawford</span>
            </Link>
            <Link
              href="/elysium/louis-beaumont"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>🌹 NPC Loius Beaumont</span>
            </Link>
            <Link
              href="/elysium/thomas-coen"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>👁️ NPC Thomas Coen</span>
            </Link>
            <Link
              href="/elysium/marie-levou"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>🌙 NPC Marie Levou, a Rainha das Sombras</span>
            </Link>
            <Link
              href="/elysium/josephine-dubois"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-crimson-500" />
              <span>🎭 NPC Josephine "Josie" Dubois</span>
            </Link>
            <Link
              href="/elysium/Sebastian-West"
              className="flex items-center gap-3 rounded p-3 text-gray-300 hover:bg-midnight-800 hover:text-silver-200"
            >
              <BookOpen className="h-4 w-4 text-indigo-500" />
              <span>🔮 NPC Sebastian West</span>
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
