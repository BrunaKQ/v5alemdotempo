// src/app/sires/page.tsx

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SiresPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-amber-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
          <h1 className="font-serif text-4xl font-bold text-silver-200">Sires</h1>
          <p className="italic text-dodgerblue-500 mt-2">Aqueles que governam as vontades.</p>

          <article className="prose prose-invert prose-p:text-gray-300 mt-8">
            <p className="text-justify indent-8 leading-relaxed">
              Os Sires são os criadores, aqueles que dão o Abraço e moldam o destino de seus descendentes. Em Nova Orleans, onde a Camarilla e o Sabá travam batalhas invisíveis, os Mestres verdadeiros não apenas governam clãs... eles escrevem histórias com sangue.
            </p>
            <p className="text-justify indent-8 leading-relaxed">
              Conheça abaixo alguns dos sires mais influentes desta era sombria:
            </p>
            <ul className="list-disc ml-8 space-y-2 text-gray-300">
              <li><strong>Victor Bloodwood</strong> – Matusalém Brujah cujo poder ainda ecoa mesmo após sua morte.</li>
              <li><strong>Lafontaine</strong> – Pirata Lasombra que transformou Desmond em seu herdeiro.</li>
              <li><strong>Kael</strong> – Criador de Helena, um Nosferatu misterioso e cruel.</li>
              <li><strong>Alana de Montreuil</strong> – Tremere antiga e guardiã de segredos proibidos.</li>
              <li><strong>Jean-Baptiste Moreau</strong> – Um Malkaviano sádico, senhor de Emilie.</li>
            </ul>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
