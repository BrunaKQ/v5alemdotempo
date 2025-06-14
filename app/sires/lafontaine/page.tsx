'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function LaFontainePage() {
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
              style={{ backgroundImage: "url('/images/LaFontaine.jpg')" }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="font-serif text-5xl font-bold text-silver-200">LaFontaine</h1>
              <p className="mt-2 text-xl text-dodgerblue-500">O Pirata das Sombras</p>
            </div>
          </div>
          <div className="grid gap-8 pt-8 md:grid-cols-3">
            {/* Sidebar com dados do personagem */}
            <div className="space-y-6">
              {/* Imagem do personagem */}
              <div className="overflow-hidden rounded-lg border border-midnight-600 shadow-md">
                <Image
                  src="/images/LaFontaine.jpg"
                  alt="LaFontaine"
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
                      Lasombra
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Geração:</span>
                    <span className="text-silver-300">9ª</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Século de Nascimento:</span>
                    <span className="text-silver-300">XVII</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Localização:</span>
                    <span className="text-silver-300">Desconhecida</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Status Atual:</span>
                    <Badge variant="outline" className="border-crimson-600 text-crimson-400">
                      Ativo
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Criador(a):</span>
                    <span className="text-silver-300">Desconhecido</span>
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
                    <li><strong>Dominação</strong>: Controle absoluto sobre mentes mortais e vampiros mais fracos.</li>
                    <li><strong>Potência</strong>: Força física sobre-humana, capaz de derrotar inimigos múltiplas vezes seu tamanho.</li>
                    <li><strong>Oblívio</strong>: Capacidade de se esconder da percepção dos outros, desaparecendo mesmo em plena luz.</li>
                  </ul>
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
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE" 
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
                    LaFontaine é um homem imponente, de postura confiante e olhar que parece desarmar qualquer suspeita. Usa roupas de capitão pirata bem cuidadas, com detalhes em ouro e couro escuro. Seu sorriso é encantador, quase hipnótico, e sua voz transmite segurança e controle.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Ele tem uma aura magnética, capaz de atrair aliados e enganar inimigos com facilidade. Mesmo em combate ou situações tensas, mantém a calma e o domínio da situação, como se sempre tivesse o destino nas mãos.
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
                    Liderava seu navio há décadas sem jamais ter sua autoridade questionada. Com habilidades de navegação e liderança impressionantes, ensinou tudo o que sabia ao jovem Desmond, apresentando-lhe não apenas o mundo dos piratas, mas também os segredos mais obscuros de sua existência.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Em uma missão aparentemente comum, revelou a verdadeira face de sua natureza: dominou sozinho uma escuna portuguesa usando poderes além da compreensão mortal. Mostrou a Desmond o que ele poderia se tornar — e o preço disso.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Enquanto viajavam por portos como Viana do Castelo, Desmond começou a perceber mudanças em si mesmo: perda de memórias, sede insaciável e um sentimento crescente de pertencimento à escuridão. LaFontaine parecia saber disso desde o início.
                  </p>
                </CardContent>
              </Card>
              {/* Relação com Desmond */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <span className="mr-2 h-5 w-5 text-violet-400">🖤</span>Relação com Desmond
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    LaFontaine encontrou em Desmond não apenas um discípulo, mas um reflexo de si mesmo no passado. Tornou-se seu mentor, amigo e, eventualmente, seu mestre na escuridão. Usou paciência, carisma e manipulação para moldá-lo à sua imagem.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Ao longo das semanas, transformou-o de um simples marinheiro em algo mais... e menos humano. Quando Desmond despertou coberto de sangue, após aceitar o convite de LaFontaine, percebeu que já não era mais o mesmo.
                  </p>
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
                      Dizem que LaFontaine não envelhece e que navega pelos mares há séculos, levando consigo aqueles que deseja corromper.
                    </p>
                  </div>
                  <div className="rounded bg-midnight-800 p-4">
                    <p className="text-sm text-gray-300">
                      Há rumores de que ele controla criaturas da névoa e usa-as para eliminar tripulações inteiras sem derramar uma gota de seu próprio sangue.
                    </p>
                  </div>
                  <div className="rounded bg-midnight-800 p-4">
                    <p className="text-sm text-gray-300">
                      Alguns marinheiros juram ter visto o navio dele emergir do nada, cercado por uma neblina negra, como se vindo diretamente do inferno.
                    </p>
                  </div>
                </CardContent>
              </Card>
              {/* Citação famosa */}
              <div className="rounded bg-midnight-800 p-4">
                <p className="italic text-silver-400">“Você viu um homem, UM homem conquistar um navio sozinho… e você não viu nada ainda.” – LaFontaine</p>
                <p className="mt-2 text-right text-sm text-gray-500">— A Desmond, após o primeiro ataque conjunto</p>
              </div>
              {/* Links relacionados */}
              <div className="mt-8 space-y-4">
                <Link
                  href="/coterie/desmond"
                  className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                >
                  <span>🔗 Ver perfil de Desmond</span>
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
