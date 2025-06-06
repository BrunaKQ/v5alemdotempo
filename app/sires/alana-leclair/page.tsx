'use client'

import Link from 'next/link'
import { ArrowLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AlanaLeclairPage() {
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
              style={{ backgroundImage: "url('/images/alana-leclair.jpg')" }}
            ></div>
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="font-serif text-5xl font-bold text-silver-200">Alana Leclair</h1>
              <p className="mt-2 text-xl text-dodgerblue-500">A Arquimaga Tremere</p>
            </div>
          </div>

          <div className="grid gap-8 pt-8 md:grid-cols-3">
            {/* Sidebar com dados do personagem */}
            <div className="space-y-6">
              {/* Imagem do personagem */}
              <div className="overflow-hidden rounded-lg border border-midnight-600 shadow-md">
                <Image
                  src="/images/alana-portrait.jpg"
                  alt="Alana Leclair"
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
                      Tremere
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Geração:</span>
                    <span className="text-silver-300">Antediluviana</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Século de Nascimento:</span>
                    <span className="text-silver-300">XVII</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Localização:</span>
                    <span className="text-silver-300">Nova Orleans</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Status Atual:</span>
                    <Badge variant="outline" className="border-crimson-600 text-crimson-400">
                      Viva
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Criador(a):</span>
                    <span className="text-silver-300">Nyxara</span>
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
                    <li><strong>Feitiçaria de Sangue</strong>: Manipulação mágica através de sangue próprio ou alheio.</li>
                    <li><strong>Auspícios</strong>: Habilidade de ver além dos véus do tempo e da mentira.</li>
                    <li><strong>Dominação</strong>: Capacidade de dobrar a vontade de mortais e vampiros.</li>
                  </ul>
                </CardContent>
              </Card>

              
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
                    Alana é uma mulher de beleza clássica e porte nobre. Seu olhar profundo e seus gestos lentos parecem carregar séculos de sabedoria e dor. Ela veste-se com elegância antiquada, preferindo tecidos escuros, bordados em prata e joias discretas que carregam poder oculto.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Fala com voz suave e pausada, como se cada palavra fosse parte de um ritual. Seus olhos claros têm um brilho sobrenatural — capazes de capturar sua atenção e fazê-lo sentir como se ela lesse sua alma com apenas um olhar.
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
                    Alana Leclair nasceu no final do século XVII em uma influente família nobre francesa cuja riqueza vinha de investimentos em rotas mercantis e vínculos profundos com a Igreja Católica. Desde cedo, demonstrava uma inteligência aguçada, um olhar atento e uma sede de conhecimento que ultrapassava o esperado para uma jovem de sua posição.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Enquanto suas irmãs aprendiam etiqueta e boas maneiras, Alana se encantava com os livros antigos da biblioteca da família — especialmente os proibidos, os esquecidos, os que tratavam de coisas além da fé e da razão.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Durante uma caçada com a família, Alana se perdeu na floresta ao cair da montaria. Na noite marcada para sua execução por heresia, quando as chamas já lamberam seus pés, a escuridão envolveu o céu de forma abrupta. As tochas se apagaram, e gritos ecoaram entre a multidão. De dentro da escuridão surgiu Nyxara — não mais como a gentil mulher da floresta, mas como uma criatura envolta em poder e fúria. Ela matou os inquisidores sem hesitação e salvou Alana das chamas, carregando-a para longe da cidade.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Foi então que Alana conheceu sua verdadeira natureza. Nyxara era uma antiga vampira da linhagem Tremere, há séculos estudava a magia de sangue e os caminhos esquecidos da feitiçaria. Tocada pela inteligência e ousadia de Alana, decidiu não apenas salvá-la, mas também abraçá-la, tornando-a sua cria, herdeira e discípula.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Alana renasceu das cinzas literalmente, como uma criatura da noite. Jurou nunca mais permitir que dogmas cegos suprimissem o saber verdadeiro. Tornou-se uma figura culta, influente e temida nos círculos ocultos, sempre com um sorriso perspicaz nos lábios e os olhos voltados para o passado — e para o poder que ele ainda guarda.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Após seu Abraço por Nyxara, Alana passou décadas sob a tutela de sua Senhora. Adaptou-se à imortalidade com serenidade e propósito. Nyxara, satisfeita com seu progresso, levou Alana em peregrinações por várias cortes vampíricas da Europa, onde ela aprimorou sua percepção das intrigas e das máscaras necessárias para sobreviver entre os mortos-vivos.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Com o tempo, Alana se tornou independente. Estabeleceu-se em Paris durante a efervescência do Iluminismo, atraída pelas ideias que desafiavam os velhos dogmas — embora soubesse que os homens que lideravam aquele movimento ainda temiam o verdadeiro poder oculto, especialmente aquele vindo de mulheres.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Ela se manteve discreta, mas atenta. Observava as mudanças do mundo mortal com olhos pacientes, como quem lê um antigo grimório, esperando que a próxima página revelasse uma chave esquecida. Apesar de tudo, em seus momentos de solidão, pensava em Jules, um jovem que conhecera em sua juventude.
                  </p>
                </CardContent>
              </Card>

              {/* Relação com Étienne */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <span className="mr-2 h-5 w-5 text-violet-400">🖤</span>Relação com Étienne
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300">
                    Mais de um século depois, Alana observava discretamente os círculos acadêmicos, curiosa sobre jovens mortais com potencial oculto. Foi numa noite, durante uma conferência sobre história e ocultismo, que viu novamente algo familiar: Étienne Moreau.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Ele era carismático, eloquente, e em meio a um discurso sobre rituais antigos e mitos modernos, Alana sentiu um frio familiar. A maneira como ele sorria, a firmeza da sua voz, os olhos claros que pareciam enxergar além das palavras — tudo nela gritava “Jules”. O corpo era diferente, mas a alma… ela juraria que era a mesma.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Alana passou a observar Étienne mais de perto, fascinada. Ela o testou — deixou pistas, documentos ocultos, fez com que ele encontrasse livros raros, fragmentos de conhecimento perdido. Étienne seguiu cada rastro com sede de verdade, e Alana soube que ele estava pronto. Mas havia mais: ela não o via apenas como talento. Via nele a chance de corrigir um erro do passado. De não se calar diante de um destino imposto.
                  </p>
                  <p className="text-justify indent-8 leading-relaxed text-gray-300 mt-4">
                    Na última noite de Étienne como mortal, Alana o levou para sua mansão, onde selou seu destino. O Abraçou, concedendo-lhe vida eterna, liberdade intelectual e um vínculo profundo com o oculto. Ela jamais lhe contou sobre Jules... ainda.
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
                      Dizem que Alana pode encontrar almas antigas em corpos novos. Que Jules, o jovem farmacêutico, retornou sob diferentes formas, e que ela está destinada a reencontrá-lo.
                    </p>
                  </div>
                  <div className="rounded bg-midnight-800 p-4">
                    <p className="text-sm text-gray-300">
                      Há rumores de que Alana escreveu um diário secreto, onde registra tudo que aprendeu com Nyxara — e com outras entidades que sequer têm nome.
                    </p>
                  </div>
                  <div className="rounded bg-midnight-800 p-4">
                    <p className="text-sm text-gray-300">
                      Alguns dizem que Alana não morreu queimada como bruxa — ela se sacrificou deliberadamente para aprender o que significa renascer das cinzas. E que faria isso de novo, se necessário.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Citação famosa */}
              <div className="rounded bg-midnight-800 p-4">
                <p className="italic text-silver-400">“O conhecimento verdadeiro não vem dos altares, mas das sombras que eles tentam esconder.” – Alana Leclair</p>
                <p className="mt-2 text-right text-sm text-gray-500">— Escrito em seu diário perdido</p>
              </div>

              {/* Música Tema */}
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-silver-300">Música Tema</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video w-full max-w-[400px] mx-auto">
                    <iframe
                      src="https://www.youtube.com/embed/LvFflKsroL8" 
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="h-full w-full rounded-md"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>

              {/* Links relacionados */}
              <div className="mt-8 space-y-4">
                <Link
                  href="/coterie/etienne"
                  className="flex items-center justify-between rounded bg-midnight-800 p-3 text-sm hover:bg-midnight-600"
                >
                  <span>🔗 Ver perfil de Étienne Moreau</span>
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
