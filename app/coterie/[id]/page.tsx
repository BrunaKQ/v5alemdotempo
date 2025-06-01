import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Heart, Skull, ChevronRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

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
                  10ª Geração
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
            {/* Sidebar with character info */}
            <div className="space-y-6">
              {character.id === "nadine" && (
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/images/nadine.jpg"
                    alt="Nadine"
                    width={320}
                    height={427}
                    className="rounded-lg object-cover mx-auto"
                    style={{ maxWidth: "100%", maxHeight: "800px" }}
                  />
                </div>
              )}

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
            </div>
          </div>

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

const characters = [
  {
    id: "nadine",
    name: "Nadine Anoura",
    clan: "Brujah",
    generation: 10,
    sect: "Camarilla",
    icon: "🔥",
    sire: "Victor Bloodwood",
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
    clan: "Malkaviana",
    generation: 10,
    sect: "Camarilla",
    icon: "🎭",
    sire: "Jean-Baptiste Moreau",
    embrace: "30/08/1797",
    location: "French Quarter",
    nature: "Visionária",
    demeanor: "Excêntrica",
    disciplines: ["Auspícios", "Demência", "Ofuscação", "Fata Morgana"],
    background:
      "Antes conhecida como Mary Shelley, a famosa autora de Frankenstein. Nascida em 1797 na Inglaterra, filha da feminista Mary Wollstonecraft, sofreu com instabilidade mental desde jovem. Foi internada em um asilo antes de ser resgatada por Percy Shelley. Após uma vida de tragédias e perdas, casou-se com Edmond Dupont por segurança financeira.",
    story: [
      "A história de Emilie é uma das mais complexas da coterie, pois ela carrega dentro de si não apenas uma, mas duas personalidades distintas: Evelynn, a escritora erudita e visionária, e Emilie (La Dame Noire), a femme fatale sombria e predatória.",
      "Como Mary Shelley, ela viveu uma vida marcada por tragédias - a morte da mãe no parto, internação em um asilo por 'histeria', a perda de filhos, e a viuvez precoce. Foi durante esse período de vulnerabilidade que conheceu Jean-Baptiste Moreau, um Malkaviano fascinado por sua mente fragmentada.",
      "Por 24 anos serviu como carniçal de Jean-Baptiste, período em que sua sanidade foi cuidadosamente moldada e suas personalidades alternativas começaram a se manifestar. O Abraço em 1851 apenas solidificou essa dualidade, criando duas faces da mesma alma imortal.",
      "Evelynn representa a intelectual refinada - postura elegante, voz envolvente e misteriosa, sempre construindo narrativas ao falar. Ela evita respostas diretas, preferindo analogias e citações literárias. Seus olhos demonstram fascínio constante, como se enxergasse além da realidade comum.",
      "Emilie, conhecida como La Dame Noire, é a personificação de tudo que Mary jamais ousou ser - uma femme fatale imortal com postura felina e predatória. Seus movimentos são calculados e perigosos, o contato visual direto e desafiador. Sua voz ganha tom rouco e sedutor, manipulando com palavras afiadas.",
      "A transição entre personalidades pode ser desencadeada por diversos fatores: uso de Dementação por vampiros mais fortes, compulsão do clã, informações intensas da Teia, ou influência de terceiros. As memórias entre as personalidades são fragmentadas, como cenas de um teatro onde atuaram sem controle.",
      "Emilie é também uma pioneira da magia do caos, tendo influenciado ocultistas séculos antes da formalização do caoísmo. Através do sangue de Jean-Baptiste, que havia cometido Amaranto contra um Ravnos, ela desenvolveu a disciplina Fata Morgana, permitindo-lhe moldar ilusões e realidade com pensamento e vontade.",
    ],
  },
  {
    id: "desmond",
    name: "Desmond Dupret Legrand",
    clan: "Lasombra",
    generation: 10,
    sect: "Camarilla",
    icon: "😎",
    sire: "Lafontaine",
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
      "Seu Abraço ocorreu quando o pirata vampiro Lafontaine o encontrou negociando bebidas e fretes com marinheiros na costa americana. Lafontaine viu nele o candidato perfeito para ser lapidado - um americano descendente de europeus, multilíngue e experiente em negócios marítimos.",
      "Durante anos, Desmond navegou os mares como cria de Lafontaine, participando de saques e combates navais. No entanto, gradualmente percebeu que o mar não era seu verdadeiro lar e que não queria se tornar uma mera extensão de seu senhor.",
      "O confronto final com Lafontaine foi um teste de vontade e determinação. Desmond conseguiu se separar de seu senhor sem declarar guerra, mantendo o respeito devido mas escolhendo seu próprio destino. Lafontaine, secretamente orgulhoso, permitiu que sua cria seguisse seu próprio caminho.",
      "Como membro mais antigo da coterie, Desmond frequentemente assume o papel de líder, usando sua experiência e conexões para navegar pela política vampírica de Nova Orleans. Sua mansão no Garden District serve como um dos pontos de encontro da coterie.",
    ],
  },
  {
    id: "helena",
    name: "Helena Stryker",
    clan: "Nosferatu",
    generation: 10,
    sect: "Camarilla",
    icon: "🕷️",
    sire: "Kael Vane",
    embrace: "23/01/1843",
    location: "Laffayette Cemetery",
    nature: "Investigadora",
    demeanor: "Soturna",
    disciplines: ["Animalismo", "Potência", "Ofuscação"],
    background:
      "Margareth Ogden Armour nasceu em 1843 em Nova York, filha mais velha de Philip Danforth Armour, industrial da carne, e Malvina Belle Ogden, uma mulher de fé frágil e coração forte. Desde jovem, mostrou-se excepcionalmente inteligente, com interesse precoce por anatomia, medicina e patologia  — áreas dominadas por homens na época. Helena se destacou desde cedo por sua inteligência afiada e fascínio pela anatomia, tornando-se médica-legista antes de seu desaparecimento em 1868, onde foi considerada morta em um acidente. Na verdade, ela foi abraçada por Kael Vane, na época Diretor e mentor dela no Presbiteryan Hospital of Chicago, após ela descobrir segredos que não deveria ter visto — verdades ocultas em cadáveres e documentos proibidos.",
    story: [
      "Nos primeiros anos como vampira, Helena foi moldada por Kael como uma espiã silenciosa, uma observadora das sombras, treinada para ler corpos, extrair verdades e agir sem chamar atenção. Com o tempo, tornou-se mais do que uma cria: uma ferramenta indispensável nos jogos noturnos de poder entre a Camarilla e os fragmentos do Sabbat que se infiltravam na cidade. Quando Khalid al-Rashid ascendeu como primogênito dos Nosferatu locais, Helena já operava nas margens do conflito, aprendendo a mover-se entre facções, entre mentiras, entre ordens não ditas. Em 1873, deixou Chicago em busca de respostas que Kael não lhe dera, levando consigo perguntas sobre sangue antigo, rituais proibidos e uma profecia oculta no Manuscrito de Tihuta. Passou décadas vagando entre cidades, servindo como médica num mundo que acreditava nela morta, enquanto alimentava-se de verdades que nenhum humano ousaria tocar. Seu refúgio finalmente se estabeleceu em Nova Orleans, sob o Cemitério de Lafayette, onde passou a estudar textos proibidos e a investigar crimes que iam além do natural. Ao longo dos anos, Helena tornou-se mais do que uma informante: era uma leitora do que jazia sob a carne, uma arqueóloga do impossível.",
      ],
  },
]
