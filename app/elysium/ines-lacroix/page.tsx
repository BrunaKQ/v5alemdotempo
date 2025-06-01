import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Crown, Clock, Users, Scroll, MessageCircleWarning } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function InesLaCroixPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90" />
         <div className="relative h-[600px] w-full overflow-hidden">
            <Image
              src="/images/Capa-Ines.jpg"
              alt=""
              fill
              priority
              className="object-cover object-center"
            />
          </div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="font-serif text-5xl font-bold text-silver-200">Inês LaCroix</h1>
            <p className="mt-2 text-xl text-crimson-500">A Príncipe de Ferro</p>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/elysium" className="mb-8 inline-flex items-center text-sm text-silver-200 hover:text-amber-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Elysium
          </Link>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Sidebar with character info */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KdaiWEXUt3gRCMhmzRy2KlZ8H7SBmu.png"
                  alt="Inês LaCroix"
                  width={400}
                  height={500}
                  className="w-full rounded-lg object-cover"
                />
              </div>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="font-serif text-xl text-silver-300">Informações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Clã:</span>
                    <Badge variant="outline" className="border-blood-600 text-blood-400">
                      Ventrue
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Geração:</span>
                    <span className="text-silver-300">7ª</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Abraço:</span>
                    <span className="text-silver-300">1106 (França feudal)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Posição:</span>
                    <Badge variant="outline" className="border-amber-600 text-amber-400">
                      Príncipe
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Idade:</span>
                    <span className="text-silver-300">~900 anos</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <Users className="mr-2 h-5 w-5 text-crimson-500" />
                    Aliados Conhecidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blood-500"></span>
                      <span>William Crawford (Senescal, Toreador)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blood-500"></span>
                      <span>Clã Nosferatu</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blood-500"></span>
                      <span>Xerife Abdull (Gangrel)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blood-500"></span>
                      <span>Clã Ventrue</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="md:col-span-2 space-y-8">
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <Crown className="mr-2 h-5 w-5 text-amber-500" />
                    Aparência e Presença
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Uma mulher de pele clara, cabelos curtos e negros, olhos cinzentos e expressão dura. Inês usa sempre
                    roupas refinadas, mas discretas, preferindo tons escuros que refletem sua personalidade reservada e
                    autoritária. Um broche em forma de chave, sempre presente em seus trajes, é seu símbolo pessoal e
                    objeto de especulação entre os membros da Camarilla.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Sua postura é impecável, seu olhar penetrante e calculista. Quando fala, sua voz é firme e
                    deliberada, carregando o peso de séculos de comando. Raramente sorri, e quando o faz, o gesto nunca
                    alcança seus olhos. Sua presença impõe respeito imediato, mesmo entre os mais antigos.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <Clock className="mr-2 h-5 w-5 text-silver-400" />
                    História Conhecida
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Inês LaCroix nasceu em 1080, na região da Aquitânia, na França feudal. Desde cedo, demonstrou uma
                    inteligência aguçada e compreendeu que informação valia mais que aço em um mundo dominado por
                    homens. Sua mente estratégica chamou a atenção de Guillaume de Vauclair, um Ventrue que via o caos
                    medieval como um laboratório perfeito para testar o poder através da manipulação de nobres e
                    clérigos.
                  </p>
                  <p className="text-gray-300">
                    Abraçada em 1106, Inês foi lançada no perigoso jogo da política vampírica, aprendendo a negociar,
                    espiar e, quando necessário, eliminar inimigos. Sobreviveu à Inquisição, à Guerra dos Cem Anos e à
                    ascensão da Camarilla, sempre movendo-se com cautela e precisão. Quando a França se tornou uma
                    panela de pressão durante a Revolução, partiu para o Novo Mundo, aportando em Nova Orleans no final
                    do século XVIII.
                  </p>
                  <p className="text-gray-300">
                    Durante o século XIX, Inês prosperou em Nova Orleans. Suas décadas de experiência em sobreviver a
                    revoltas e epidemias a tornaram uma peça-chave na estabilização da sociedade vampírica local. Forjou
                    uma aliança forte com o clã Toreador através de William Crawford, que viria a se tornar seu fiel
                    senescal.
                  </p>
                  <p className="text-gray-300">
                    Inês governa Nova Orleans há 50 anos, com a mesma mão de ferro que guiou feudos e cidades na Europa
                    medieval. Sua paranoia é lendária, assim como sua rede de espiões, que dizem se estender por toda a
                    cidade – abrangendo membros, mortais e, segundo alguns boatos mais fantasiosos, até os fantasmas que
                    assombram o Vieux Carré.
                  </p>
                  <p className="text-gray-300">
                    Ela tem pouca oposição aberta na cidade, sendo que uma das poucas figuras que ocasionalmente a
                    desafia é Marie Levou, que dizem ser uma dissidente dos Giovanni com influência sobre o mundo
                    espiritual de Nova Orleans.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <Scroll className="mr-2 h-5 w-5 text-gothic-400" />
                    Personalidade
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Inês é autoritária e profundamente desconfiada. Raramente sorri ou demonstra qualquer emoção que
                    possa ser interpretada como fraqueza. Sua visão de poder é simples e implacável: controle absoluto
                    ou destruição certa. Não tolera insubordinação, mas aprecia aqueles que sabem jogar o jogo político
                    com inteligência e discrição.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Sua fala é precisa e econômica, cada palavra cuidadosamente escolhida para máximo impacto. Seus
                    olhares carregam promessas ou ameaças veladas, e poucos conseguem sustentar seu olhar por muito
                    tempo. Quando concede favores, sempre espera retribuição, e quando punições são necessárias, elas
                    são exemplares.
                  </p>
                  <div className="mt-6 rounded bg-midnight-800 p-4">
                    <p className="italic text-silver-400">
                      "Quem vê o movimento das peças antes do oponente nunca perde a partida."
                    </p>
                    <p className="mt-2 text-right text-sm text-gray-500">— Lema pessoal de Inês LaCroix</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <MessageCircleWarning className="mr-2 h-5 w-5 text-blood-500" />
                    Rumores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Fala-se que Inês desconfia cada vez mais de todos, até de seu senescal. Há rumores de que ela já
                        ordenou o desaparecimento de dois antigos membros por suspeitas de conspiração.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        A rivalidade com Marie Levou é falsa; ambas mantêm um caso secreto e Marie escraviza fantasmas
                        para servir a Inês, expandindo sua rede de espionagem além do mundo dos vivos.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Inês tem a localização de todos os refúgios dos membros da cidade e guarda estas informações num
                        cofre secreto, como garantia contra possíveis traições.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Alguns afirmam que uma figura encapuzada acompanha Inês em todas as suas visitas ao Elysium,
                        mantendo-se sempre à espreita nas sombras. Há quem jure ter visto a figura sussurrando-lhe no
                        ouvido, mas ninguém ousa perguntar quem ou o quê é.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Inês está em laço de sangue com William Crawford, e é ele quem realmente controla a cidade
                        através dela, invertendo a aparente hierarquia de poder.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
