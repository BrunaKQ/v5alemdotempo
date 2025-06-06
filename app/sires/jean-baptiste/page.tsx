'use client'

import Link from 'next/link'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function JeanBaptisteMoreauPage() {
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
              style={{ backgroundImage: "url('/images/jean-baptiste.png')" }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="font-serif text-5xl font-bold text-silver-200">Jean-Baptiste Moreau</h1>
              <p className="mt-2 text-xl text-violet-400">O Médico Sombrio — Malkaviano</p>
            </div>
          </div>

          <div className="grid gap-8 pt-8 md:grid-cols-3">
            {/* Sidebar com dados do personagem */}
            <div className="space-y-6">
              {/* Imagem do personagem */}
              <div className="overflow-hidden rounded-lg border border-midnight-600 shadow-md">
                <Image
                  src="/images/jean-baptiste-portrait.jpg"
                  alt="Jean-Baptiste Moreau"
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
                      Malkaviano
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Geração:</span>
                    <span className="text-silver-300">9ª</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Século de Nascimento:</span>
                    <span className="text-silver-300">XVIII</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Localização:</span>
                    <span className="text-silver-300">French Quarter</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Status Atual:</span>
                    <Badge variant="outline" className="border-crimson-600 text-crimson-400">
                      Falecido
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Criador:</span>
                    <span className="text-silver-300">Dorian Meyer</span>
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
                    <li><strong>Auspícios</strong>: Leitura e manipulação de mentes frágeis.</li>
                    <li><strong>Dominação</strong>: Capacidade de controlar a mente humana e vampírica com sutileza cruel.</li>
                    <li><strong>Ofuscação</strong>: Apagar sua presença ou distorcer seu aspecto aos olhos dos outros.</li>
                  </ul>
                </CardContent>
              </Card>

               {/* Música Tema */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-silver-300">Música Tema</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video w-full max-w-[500px] mx-auto">
                      <iframe
                        src={`https://www.youtube.com/watch?v=0-jVz7Dou4Y}`} 
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
                    Jean-Baptiste Moreau é descrito como um homem cuja aparência sempre parecia mais velha do que realmente era. Alto, magro, usando roupas formais e discretas, ele carregava consigo uma aura de respeito e autoridade. Seu olhar penetrante e frio costumava deixar os pacientes em silêncio, como se ele pudesse ver além da pele e enxergar suas almas.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Ele falava com uma voz baixa, quase sussurrante, mas cada palavra parecia pesada de intenção. Sua elegância não era ostentação, mas uma extensão de controle. Era meticuloso, impecável, e por trás da fachada de médico, escondia-se um mestre na manipulação psicológica e nas sombras da insanidade.
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
                    Jean-Baptiste nasceu em 1702, em Avignon, França, herdeiro de uma família antiga e poderosa, cercada por rumores de práticas ocultistas. Desde jovem, mostrou uma inteligência voraz e ambição insaciável. Formou-se em Medicina e depois em Psiquiatria, construindo uma reputação impecável entre os salões parisienses.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Sua aparência, sempre mais madura do que sua idade real, conferia-lhe uma aura de respeito e autoridade. Mas por trás da fachada de médico respeitado, escondia-se um explorador de mentes e corpos — um estudioso das profundezas humanas que via a dor e a manipulação como instrumentos de poder.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    O Abraço veio próximo dos 40 anos, pelas mãos de Dorian Meyer, um Malkaviano antigo e cruel. Sob a tutela de Dorian, Jean-Baptiste foi iniciado nos segredos sombrios do sangue e do psiquismo vampírico, tornando-se refém das vontades caprichosas de seu senhor.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Depois de décadas servindo como carniceiro de Dorian, ele encontrou Mary Shelley — uma mulher cuja mente estava fragmentada pela dor e pela perda. Fascinado, ele passou 24 anos moldando-a, observando suas personalidades alternativas surgirem. Quando ela finalmente aceitou o Abraço em 1851, tornou-se Emilie — a alma dividida que carrega seu legado até hoje.
                  </p>
                </CardContent>
              </Card>

              {/* Relação com Emilie */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <span className="mr-2 h-5 w-5 text-violet-400">🖤</span>Relação com Emilie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Jean-Baptiste viu em Mary Shelley algo único: uma mente já partida antes mesmo do Abraço. Durante 24 anos, ele cuidou dela como se fosse um experimento humano, moldando sua sanidade e desafianto suas emoções. Suas personalidades começaram a se manifestar ainda como mortal.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    O Abraço solidificou essa dualidade. Ela não se tornou apenas uma vampira, mas uma entidade com duas faces: Evelynn, a escritora visionária, e Emilie, a femme fatale que manipula paixões com precisão cirúrgica.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Para Jean-Baptiste, ela foi sua maior obra. Para Emilie, ele foi tanto pai quanto carrasco. E mesmo após sua morte, sua influência ainda ecoa nela.
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
                      Há quem diga que Jean-Baptiste Moreau continua presente através de Emilie — que sua consciência habita as sombras de suas escolhas.
                    </p>
                  </div>
                  <div className="rounded bg-midnight-800 p-4">
                    <p className="text-sm text-gray-300">
                      Alguns afirmam que ele manteve cadernos secretos sobre mentes que manipulou, incluindo os planos de dominação mental que nunca chegou a executar.
                    </p>
                  </div>
                  <div className="rounded bg-midnight-800 p-4">
                    <p className="text-sm text-gray-300">
                      Outros dizem que ele fez pacto com forças ainda mais antigas que o vampirismo, e que seu espírito não morreu — apenas mudou de hospedeiro.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Citação famosa */}
              <div className="rounded bg-midnight-800 p-4">
                <p className="italic text-silver-400">"A mente é o melhor cárcere. Trancamos os corpos, mas mantemos as almas presas com palavras." – Jean-Baptiste Moreau</p>
                <p className="mt-2 text-right text-sm text-gray-500">— Extraído de anotações pessoais encontradas após sua morte</p>
              </div>

             
              {/* Links relacionados */}
              <div className="mt-8 space-y-4">
                <Link
                  href="/coterie/emilie"
                  className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                >
                  <span>🔗 Ver perfil de Emilie / Evelynn</span>
                  <ChevronRight className="h-4 w-4 text-amber-400" />
                </Link>

                <Link
                  href="/sires"
                  className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                >
                  <span>🧛‍♂️ Ver outros Sires</span>
                  <ChevronRight className="h-4 w-4 text-dodgerblue-500" />
                </Link>

                <Link
                  href="/roleplay"
                  className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                >
                  <span>🎭 Ver outras histórias</span>
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
