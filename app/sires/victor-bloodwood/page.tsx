'use client'

import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function VictorBloodwoodPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link href="/sires" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-amber-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Sires
          </Link>

          {/* Capa com imagem de fundo */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-t-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70" />
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/victor-bloodwood.png')" }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="font-serif text-5xl font-bold text-silver-200">Victor Bloodwood</h1>
              <p className="mt-2 text-xl text-crimson-500">O Corvo Brujah</p>
            </div>
          </div>

          <div className="grid gap-8 pt-8 md:grid-cols-3">
            {/* Sidebar com dados do personagem */}
            <div className="space-y-6">
              {/* Imagem do personagem */}
              <div className="overflow-hidden rounded-lg border border-midnight-600 shadow-md">
                <Image
                  src="/images/victor-portrait.jpg"
                  alt="Victor Bloodwood"
                  width={320}
                  height={427}
                  className="w-full object-cover"
                />
              </div>

              {/* Informações */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-silver-300">Informações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Clã:</span>
                    <Badge variant="outline" className="border-blood-600 text-blood-400">
                      Brujah
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Geração:</span>
                    <span className="text-silver-300">9ª</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Século de Nascimento:</span>
                    <span className="text-silver-300">XV</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Localização:</span>
                    <span className="text-silver-300">Nova Orleans</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Status Atual:</span>
                    <Badge variant="outline" className="border-crimson-600 text-crimson-400">
                      Vivo
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Disciplinas */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-silver-300">Disciplinas</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
                    <li><strong>Potência</strong>: Força sobre-humana e brutalidade refinada.</li>
                    <li><strong>Celeridade</strong>: Movimentos rápidos e quase imperceptíveis.</li>
                    <li><strong>Presença</strong>: Domínio absoluto sobre emoções e vontades alheias.</li>
                    </ul>
                </CardContent>
              </Card>

              {/* Rumores */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <span className="mr-2 h-5 w-5 text-crimson-500">⚠️</span>Rumores
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded bg-midnight-800 p-4">
                    <p className="text-sm text-gray-300">
                      O Corvo apareceu antes da queda de cada Príncipe. Nunca envolvido... mas sempre presente.
                    </p>
                  </div>
                  <div className="rounded bg-midnight-800 p-4">
                    <p className="text-sm text-gray-300">
                      Alguns acreditam que ele tenha feito pacto com entidades antigas — algo pior que vampiros.
                    </p>
                  </div>
                  <div className="rounded bg-midnight-800 p-4">
                    <p className="text-sm text-gray-300">
                      Ele vê em Nadine não apenas uma cria, mas seu maior desafio pessoal. Ela é a única que se recusa a ser moldada.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Música Tema */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-silver-300">Música Tema</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full max-w-[400px] mx-auto">
                    <iframe
                      src="https://www.youtube.com/embed/3iAeEvbURSY" 
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full rounded-md"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Conteúdo principal */}
            <div className="md:col-span-2 space-y-8">
              {/* Aparência e Presença */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <span className="mr-2 h-5 w-5 text-amber-500">👁️</span>Aparência e Presença
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Victor Bloodwood é a personificação do controle refinado. Reservado, silencioso e estrategista, ele observa o mundo como um tabuleiro em constante movimento, onde cada pessoa é uma peça a ser manipulada com precisão.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Nada em Victor é impulsivo. Tudo é calculado, desde o tom de sua voz até a duração de um olhar. Ele prefere ser temido a ser compreendido porque, no fundo, compreender seria abrir brechas para algo que ele passou séculos enterrando: a dor de ser humano.
                  </p>
                </CardContent>
              </Card>

              {/* História Conhecida */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <span className="mr-2 h-5 w-5 text-silver-400">⏳</span>História Conhecida
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Victor Bloodwood está vivo. E ele nunca deixou Nova Orleans. Desde 1929, quando chegou à cidade sob o enigmático nome de Monsieur Le Corbeau, sua presença foi sentida como uma sombra densa sobre os salões secretos, clubes de jazz proibidos e círculos políticos da Camarilla local.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Na época, muitos acreditaram que ele fosse apenas mais um estrangeiro curioso experimentando o poder do submundo americano. Mas estavam errados. Victor ficou. Se estabeleceu. E fez de Nova Orleans sua teia pessoal.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Embora Nova Orleans tenha um Príncipe oficial, muitos afirmam que ele só está no trono porque Victor permite. Quem realmente manda, decide e silencia… é o Corvo.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Ele sabe quando alguém fala mal dele. Membros da cidade afirmam que apenas mencionar o nome “Bloodwood” sem respeito é suficiente para ser notado — e vigiado. Alguns que zombaram dele desapareceram ou perderam tudo.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Internamente, a Camarilla Internacional monitora seus movimentos com cautela. Victor não é rebelde. Ele é paciente. E muitos acreditam que ele esteja esperando o momento ideal para expandir seu poder. Circula a ideia de que ele tem um acordo com entidades antigas — talvez uma sombra ancestral, talvez algo pior que um Antediluviano. Seria isso o que o mantém tão intocado por séculos?
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Já circulam boatos de que ele pretende substituir figuras centrais da hierarquia norte-americana, e talvez até intervir em questões internacionais, apoiado por antigos aliados de sua família na Europa.
                  </p>
                </CardContent>
              </Card>

              {/* Relação com Nadine */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <span className="mr-2 h-5 w-5 text-violet-400">🖤</span>Relação com Nadine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    No entanto, há uma rachadura em sua muralha de silêncio: Nadine. Ela é sua criação mais ousada. E a única que se recusa a ser moldada.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Desde sua fuga e volta, Victor tornou-se ainda mais contido e um pouco até enfraquecido. Nova Orleans continua sendo sua cidade. Mas ela também pode ser seu campo de batalha.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Victor Bloodwood está vivo. E ninguém sabe exatamente o que ele planeja. Mas todos sabem disso: quem duvidar dele… pagará o preço.
                  </p>
                </CardContent>
              </Card>

              {/* Citação famosa */}
              <div className="rounded bg-midnight-800 p-4">
                <p className="italic text-silver-400">“Quem vê o movimento das peças antes do oponente nunca perde a partida.”</p>
                <p className="mt-2 text-right text-sm text-gray-500">— Lema pessoal de Victor Bloodwood</p>
              </div>

              {/* Links relacionados */}
              <div className="mt-8 space-y-4">
                <Link
                  href="/coterie/nadine"
                  className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                >
                  <span>🔗 Ver perfil de Nadine Anoura</span>
                  <ChevronRight className="h-4 w-4 text-amber-400" />
                </Link>

                <Link
                  href="/elysium"
                  className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                >
                  <span>👑 Ver outros NPCs importantes</span>
                  <ChevronRight className="h-4 w-4 text-dodgerblue-500" />
                </Link>

                <Link
                  href="/sires"
                  className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                >
                  <span>🧛‍♂️ Ver outros Sires</span>
                  <ChevronRight className="h-4 w-4 text-rose-500" />
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
