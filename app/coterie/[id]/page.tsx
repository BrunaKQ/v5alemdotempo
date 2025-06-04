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
  {
    id: "emilie",
    name: "Emilie",
    image: "/images/emilie-gostosa.jpg",
    clan: "Malkaviana",
    generation: 10,
    sect: "Camarilla",
    icon: "🎭",
    sire: "Jean-Baptiste Moreau",
    birth: "02/11/1831",
    embrace: "30/08/1797",
    location: "French Quarter",
    nature: "Visionária",
    demeanor: "Excêntrica",
    disciplines: ["Auspícios", "Dominação", "Ofuscação"],
    background:
      "Antes conhecida como Mary Shelley, a famosa autora de Frankenstein. Nascida em 1797 na Inglaterra, filha da feminista Mary Wollstonecraft, sofreu com instabilidade mental desde jovem. Foi internada em um asilo antes de ser resgatada por Percy Shelley. Após uma vida de tragédias e perdas, casou-se com Edmond Dupont por segurança financeira.",
    story: [
      "A história de Emilie é uma das mais complexas da coterie, pois ela carrega dentro de si não apenas uma, mas duas personalidades distintas: Evelynn, a escritora erudita e visionária, e Emilie (La Dame Noire), a femme fatale sombria e predatória.",
      "Como Mary Shelley, ela viveu uma vida marcada por tragédias - a morte da mãe no parto, internação em um asilo por 'histeria', a perda de filhos, e a viuvez precoce. Foi durante esse período de vulnerabilidade que conheceu Jean-Baptiste Moreau, um Malkaviano fascinado por sua mente fragmentada.",
      "Por 24 anos serviu como carniceira de Jean-Baptiste, período em que sua sanidade foi cuidadosamente moldada e suas personalidades alternativas começaram a se manifestar. O Abraço em 1851 apenas solidificou essa dualidade, criando duas faces da mesma alma imortal.",
    ],
  },
  {
    id: "desmond",
    name: "Desmond Dupret Legrand",
    image: "/images/desmond-1.jpg",
    clan: "Lasombra",
    generation: 10,
    sect: "Camarilla",
    icon: "😎",
    sire: "Lafontaine",
    birth: "02/11/1831",
    embrace: "28/01/1815",
    location: "Garden District Mansion",
    nature: "Arquiteto",
    demeanor: "Galante",
    disciplines: ["Dominação", "Potência", "Oblívio"],
    background:
      "Descendente de uma família aristocrática francesa que imigrou para a América, Desmond era um jovem comerciante de bebidas quando foi Abraçado pelo pirata Lasombra Lafontaine durante uma viagem à costa americana.",
    story: [
      "Desmond carrega consigo a elegância e os modos refinados de sua educação aristocrática francesa, mas por trás dessa fachada civilizada reside uma ambição implacável e uma sede de poder que o define como um verdadeiro Lasombra.",
      "Sua história familiar começou com seu avô August, que ousou trazer sua família e negócio de bebidas da França para a América. A tradição empreendedora e a coragem foram passadas através das gerações, moldando o caráter de Desmond desde jovem.",
    ],
  },
  {
    id: "helena",
    name: "Helena Stryker",
    image: "/images/helena-1.jpg",
    clan: "Nosferatu",
    generation: 10,
    sect: "Camarilla",
    icon: "🕷️",
    sire: "Kael Vane",
    birth: "02/11/1843",
    embrace: "23/01/1868",
    location: "Laffayette Cemetery",
    nature: "Investigadora",
    demeanor: "Soturna",
    disciplines: ["Animalismo", "Potência", "Ofuscação"],
    background:
      "Margareth Ogden Armour nasceu em 1843 em Nova York, filha mais velha de Philip Danforth Armour, industrial da carne, e Malvina Belle Ogden, uma mulher de fé frágil e coração forte. Desde jovem, mostrou-se excepcionalmente inteligente, com interesse precoce por anatomia, medicina e patologia — áreas dominadas por homens na época. Helena se destacou desde cedo por sua inteligência afiada e fascínio pela anatomia, tornando-se médica-legista antes de seu desaparecimento em 1868, onde foi considerada morta em um acidente. Na verdade, ela foi abraçada por Kael Vane, então Diretor e mentor dela no Presbyterian Hospital of Chicago, após descobrir segredos que não deveria ter visto — verdades ocultas em cadáveres e documentos proibidos.",
    story: [
      "Nos primeiros anos como vampira, Helena foi moldada por Kael como uma espiã silenciosa, uma observadora das sombras, treinada para ler corpos, extrair verdades e agir sem chamar atenção. Com o tempo, tornou-se mais do que uma cria: uma ferramenta indispensável nos jogos noturnos de poder entre a Camarilla e os fragmentos do Sabbat que se infiltravam na cidade.",
    ],
  },
  {
    id: "etienne",
    name: "Étienne Moreau",
    image: "/images/etienne.jpg",
    clan: "Tremere",
    generation: 10,
    sect: "Camarilla",
    icon: "🔮",
    sire: "Alana de Montreuil",
    birth: "02/11/1831",
    embrace: "23/08/1793",
    location: "Garden District",
    nature: "Revoltado",
    demeanor: "Intelectual",
    disciplines: ["Feitiçaria de Sangue", "Auspícios", "Dominação"],
    background:
      "Filho de uma família burguesa francesa, Étienne nasceu em Lyon no início da Revolução Francesa. Professor universitário e ativista político, ele lutou por ideais de liberdade, igualdade e fraternidade até ser transformado por Alana de Montreuil, uma Tremere que via nele o potencial para unir o saber humano às artes ocultas.",
    story: [
      "Étienne sempre foi movido por princípios revolucionários. Durante a Revolução Francesa, ele escrevia panfletos e liderava assembleias populares, defendendo reformas radicais na sociedade. Foi nesse contexto tenso que cruzou o caminho de Alana, uma vampira Tremere que via na desordem humana a oportunidade de moldar novas mentes.",
    ],
  },
]
