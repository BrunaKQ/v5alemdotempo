'use client'

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Heart, Star, Skull, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useState } from "react"

export default function CharacterPage({ params }: { params: { id: string } }) {
  const character = characters.find((c) => c.id === params.id) || characters[0]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/coterie" className="mb-6 inline-flex items-center text-sm text-silver-200 hover:text-amber-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para A Coterie
          </Link>
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="font-serif text-4xl font-bold text-silver-200">{character.name}</h1>
              {character.icon && <span className="text-4xl">{character.icon}</span>}
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="border-blood-600 text-blood-400">
                {character.clan}
              </Badge>
              {character.generation && (
                <Badge variant="outline" className="border-silver-500 text-silver-400">
                  {character.generation}ª Geração
                </Badge>
              )}
              {character.sect && (
                <Badge variant="outline" className="border-gothic-500 text-gothic-400">
                  {character.sect}
                </Badge>
              )}
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Sidebar */}
            <div className="space-y-6">
              {/* Imagem */}
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={character.image}
                  alt={character.name}
                  width={320}
                  height={427}
                  className="rounded-lg object-cover mx-auto"
                  style={{ maxWidth: "100%", maxHeight: "800px" }}
                />
              </div>
              {/* Informações */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-silver-300">Informações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {character.sire && (
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-crimson-500" />
                      <span className="text-sm">
                        <strong>Senhor:</strong> {character.sire}
                      </span>
                    </div>
                  )}
                  {character.birth && (
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        <strong>Nascimento:</strong> {character.birth}
                      </span>
                    </div>
                  )}
                  {character.embrace && (
                    <div className="flex items-center gap-2">
                      <Skull className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">
                        <strong>Abraço:</strong> {character.embrace}
                      </span>
                    </div>
                  )}
                  {character.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-silver-400" />
                      <span className="text-sm">
                        <strong>Refúgio:</strong> {character.location}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
              {/* Disciplinas */}
              {character.disciplines && (
                <Card className="bg-midnight-700 text-gray-200">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg text-silver-300">Disciplinas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {character.disciplines.map((discipline) => (
                        <Badge key={discipline} variant="secondary" className="bg-midnight-600 mr-2">
                          {discipline}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
              {/* Personalidade */}
              {character.nature && (
                <Card className="bg-midnight-700 text-gray-200">
                  <CardHeader>
                    <CardTitle className="font-serif text-lg text-silver-300">Personalidade</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div>
                      <strong className="text-silver-300">Natureza:</strong> {character.nature}
                    </div>
                    {character.demeanor && (
                      <div>
                        <strong className="text-silver-300">Comportamento:</strong> {character.demeanor}
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Conteúdo principal */}
            <div className="lg:col-span-2 space-y-8">
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-silver-300">História</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-invert max-w-none prose-p:text-gray-300">
                    {character.story.map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
              {character.background && (
                <Card className="bg-midnight-700 text-gray-200">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-silver-300">Passado Mortal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{character.background}</p>
                  </CardContent>
                </Card>
              )}

              {/* Música Tema (Apenas para Nadine) */}
              {character.id === "nadine" && (
                <Card className="bg-midnight-700 text-gray-200">
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-silver-300">Música Tema da Personagem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video w-full max-w-[400px] mx-auto">
                      <iframe
                        src="https://www.youtube.com/embed/vW-HFy_XqZI" 
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="h-full w-full rounded-md"
                      ></iframe>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>

          {/* Links extras condicionais */}
          {character.id === "emilie" && (
            <div className="mt-8">
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-silver-300">Explorar Mais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link
                    href="/coterie/emilie/complete"
                    className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                  >
                    <span>📖 História Completa e Detalhada</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/coterie/emilie/personalities"
                    className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                  >
                    <span>🎭 As Duas Personalidades</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/coterie/emilie/chaos-magic"
                    className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                  >
                    <span>🔮 Caoísmo e Magia do Caos</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          )}
          {character.id === "desmond" && (
            <div className="mt-8">
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-silver-300">Explorar Mais</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link
                    href="/coterie/desmond/complete"
                    className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                  >
                    <span>📖 História Completa e Detalhada</span>
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

// Lista de personagens
const characters = [
  {
    id: "nadine",
    name: "Nadine Anoura",
    image: "/images/nadine.jpg",
    clan: "Brujah",
    generation: 10,
    sect: "Camarilla",
    icon: "🔥",
    sire: "Victor Bloodwood",
    birth: "02/11/1831",
    embrace: "02/11/1831",
    location: "Warehouse District",
    nature: "Rebelde",
    demeanor: "Visionária",
    disciplines: ["Potência", "Rapidez", "Presença"],
    background:
      "Antes do Abraço, Nadine era uma espiã que lutava nas Guerras Carlistas na Espanha. Após a guerra, ela continuou atuando como médica da mente. Sua paixão pela mente humana atraiu a atenção de um poderoso vampiro, Victor Bloodwood, com quem ela eventualmente se casa.",
    story: [
      "Nadine sempre foi uma alma inquieta, incapaz de aceitar injustiças sem reagir. Mesmo na não-vida, essa característica se intensificou, alimentada pelo fogo interior que define os Brujah.",
      "Agora, como membro da coterie Ordo Noctis, Nadine luta para encontrar um equilíbrio entre sua natureza rebelde e a necessidade de cooperação. Sua função dentro do grupo é frequentemente a de catalisadora - aquela que impulsiona a ação quando outros hesitam.",
      "Apesar de sua aparência jovem e delicada, Nadine possui uma força interior que pode ser tanto inspiradora quanto destrutiva. Ela vê na coterie uma oportunidade de canalizar sua raiva de forma mais efetiva, mas ainda luta contra impulsos que a levam a agir sozinha.",
    ],
  },
  // Demais personagens permanecem iguais...
]
