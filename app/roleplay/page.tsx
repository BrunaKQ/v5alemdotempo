'use client' // <-- Adicionado aqui!

import Link from "next/link"
import { BookOpen } from "lucide-react"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function RoleplayPage() {
  const [isOpen, setIsOpen] = useState(true)

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
              O que acontece entre os momentos de guerra, poder e ritual? A vida noturna dos imortais também tem pausas — ou quase. É onde personagens se revelam nos detalhes.
            </p>
          </div>

          {/* Accordion Principal */}
          <div className="mb-6 rounded-lg bg-midnight-800">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-full px-4 py-3 text-left text-gray-300 focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center justify-between">
                <span>
                  <strong>Roleplay por Texto</strong> — 30/10/1929
                </span>
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 space-y-2">
                <Link
                  href="/roleplay/nadine-30-10-1929"
                  className="flex items-center gap-3 rounded p-2 text-gray-300 hover:bg-midnight-700"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>🔥 Nadine</span>
                </Link>
                <Link
                  href="/roleplay/helena-30-10-1929"
                  className="flex items-center gap-3 rounded p-2 text-gray-300 hover:bg-midnight-700"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>🕷️ Helena</span>
                </Link>
                <Link
                  href="/roleplay/emilie-30-10-1929"
                  className="flex items-center gap-3 rounded p-2 text-gray-300 hover:bg-midnight-700"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>🎭 Emilie</span>
                </Link>
                <Link
                  href="/roleplay/desmond-30-10-1929"
                  className="flex items-center gap-3 rounded p-2 text-gray-300 hover:bg-midnight-700"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>😎 Desmond</span>
                </Link>
                <Link
                  href="/roleplay/etienne-30-10-1929"
                  className="flex items-center gap-3 rounded p-2 text-gray-300 hover:bg-midnight-700"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>🔮 Étienne</span>
                </Link>
                <Link
                  href="/roleplay/helena-e-nadine-30-10-1929"
                  className="flex items-center gap-3 rounded p-2 text-gray-300 hover:bg-midnight-700"
                >
                  <BookOpen className="h-4 w-4 text-crimson-500" />
                  <span>🕷️ x 🔥 Helena e Nadine</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
