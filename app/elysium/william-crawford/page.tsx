import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Sword, Clock, Users, Scroll, MessageCircleWarning, Shield } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function WilliamCrawfordPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="relative h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/placeholder.svg?height=600&width=1200')" }}
          />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="font-serif text-5xl font-bold text-silver-200">William Crawford</h1>
            <p className="mt-2 text-xl text-crimson-500">A Espada de Inês</p>
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aRhOXGcFlO3BnpSS7zXwA7MZzG41Iy.png"
                  alt="William Crawford"
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
                    <Badge variant="outline" className="border-gothic-600 text-gothic-400">
                      Toreador
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Geração:</span>
                    <span className="text-silver-300">8ª</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Abraço:</span>
                    <span className="text-silver-300">1523 (Inglaterra Tudor)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Posição:</span>
                    <Badge variant="outline" className="border-silver-600 text-silver-400">
                      Senescal
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Idade:</span>
                    <span className="text-silver-300">~500 anos</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <Shield className="mr-2 h-5 w-5 text-crimson-500" />
                    Lealdades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                      <span>Príncipe Inês LaCroix (Absoluta)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-gothic-500"></span>
                      <span>Nova Orleans (Genuína)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-silver-500"></span>
                      <span>Camarilla (Pragmática)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blood-500"></span>
                      <span>Clã Toreador (Tradicional)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <Sword className="mr-2 h-5 w-5 text-blood-500" />
                    Especialidades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Esgrima e combate com lâminas</li>
                    <li>• Diplomacia e negociação</li>
                    <li>• História e retórica</li>
                    <li>• Administração política</li>
                    <li>• Manipulação social</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Main content */}
            <div className="md:col-span-2 space-y-8">
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <Users className="mr-2 h-5 w-5 text-amber-500" />
                    Aparência e Presença
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    William Crawford é um homem alto e imponente, de cabelos ruivos que contrastam com seus olhos azuis
                    penetrantes. Seus olhos transmitem uma calma calculada, mas há sempre um sutil traço de desconfiança
                    que revela sua natureza cautelosa. Usa roupas impecáveis, sempre no último grito da moda, refletindo
                    tanto seu gosto refinado quanto sua posição de autoridade.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Fora dos elísios, é frequentemente visto com um sabre espanhol na cintura - uma lembrança de seus
                    dias mortais e um símbolo de sua disposição para resolver conflitos quando a diplomacia falha. Sua
                    postura é sempre elegante, mas pronta para a ação, combinando a graça artística dos Toreador com a
                    pragmaticidade de um administrador experiente.
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
                    William Crawford nasceu em 1496, na Inglaterra, filho de um mercador que enriqueceu durante o
                    reinado de Henrique VII. Recebeu uma educação formal rara para sua época, com estudos em história,
                    retórica e esgrima. Sua inteligência aguçada e habilidade excepcional com a espada o tornaram
                    conhecido e respeitado entre nobres e mercadores londrinos.
                  </p>
                  <p className="text-gray-300">
                    Foi abraçado em 1523 por Elizabeth Beaumont, uma Toreador que via nele o equilíbrio perfeito entre
                    erudição, arte e pragmatismo. Durante a turbulenta Reforma Inglesa, William atuou como conselheiro
                    discreto de nobres, usando sua influência para evitar os piores excessos da perseguição religiosa.
                    Foi neste período que aprendeu uma lição fundamental: o verdadeiro poder não está nas coroas, na fé
                    ou nos exércitos, mas onde os homens acreditam que está.
                  </p>
                  <p className="text-gray-300">
                    No final do século XVII, desiludido com as intrigas intermináveis da corte britânica e buscando
                    novos horizontes, partiu para as colônias americanas. Chegou a Nova Orleans no início do século XIX
                    e rapidamente se apaixonou pela cidade. Sua mistura única de decadência, arte e violência parecia um
                    reflexo perfeito da própria existência vampírica.
                  </p>
                  <p className="text-gray-300">
                    Após um encontro cujos detalhes permanecem misteriosos até hoje, tornou-se um aliado próximo de Inês
                    LaCroix. Admirava profundamente sua disciplina férrea e sua visão de controle absoluto, vendo nela
                    uma líder capaz de trazer estabilidade ao caos inerente da sociedade vampírica.
                  </p>
                  <p className="text-gray-300">
                    Desde 1895, serve como seu senescal com lealdade inabalável. É reconhecido por ser frio, eficiente e
                    absolutamente confiável, mantendo as complexas engrenagens do poder funcionando suavemente nos
                    bastidores.
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
                    William é educado e profundamente racional, abordando problemas com a metodicidade de um erudito e a
                    precisão de um espadachim. Porém, apesar de sua aparência controlada, é relativamente fácil de se
                    irritar, especialmente quando confrontado com incompetência ou desrespeito às tradições que
                    considera sagradas.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Sua devoção a Nova Orleans é genuína e profunda - ele enxerga a cidade como um palco único onde
                    tradição e modernidade duelam eternamente, e dedica-se a garantir sua sobrevivência e prosperidade.
                    Em geral, prefere resolver problemas através de diplomacia refinada e manipulação sutil, mas não
                    hesita em recorrer à violência quando necessário.
                  </p>
                  <div className="mt-6 rounded bg-midnight-800 p-4">
                    <p className="italic text-silver-400">
                      "A cidade não pertence a quem governa, mas a quem a entende."
                    </p>
                    <p className="mt-2 text-right text-sm text-gray-500">— Lema pessoal de William Crawford</p>
                  </div>
                  <p className="mt-4 text-gray-300">
                    Como ele mesmo gosta de dizer com um sorriso frio: "Quando a diplomacia falha, a lâmina fala."
                  </p>
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
                    <div>
                      <h4 className="mb-2 font-semibold text-silver-300">Lealdade Dividida</h4>
                      <div className="rounded bg-midnight-800 p-4">
                        <p className="text-gray-300">
                          Sussurra-se que William mantém contato secreto com anarquistas locais. Alguns afirmam tê-lo
                          visto em uma reunião clandestina no Bairro Francês, conversando com figuras conhecidas por sua
                          oposição à Camarilla. Seria uma estratégia de espionagem ou algo mais sinistro?
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold text-silver-300">Amor Proibido</h4>
                      <div className="rounded bg-midnight-800 p-4">
                        <p className="text-gray-300">
                          Existe um boato persistente de que William protege um mortal influente na alta sociedade - um
                          homem que escreve artigos satíricos sobre os poderosos de Nova Orleans. Alguns acreditam que é
                          um antigo amante; outros, que ele é simplesmente um espião valioso que William usa para seus
                          próprios fins.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold text-silver-300">Descendente de François Villon</h4>
                      <div className="rounded bg-midnight-800 p-4">
                        <p className="text-gray-300">
                          Alguns afirmam que William recebe mensagens cifradas de Paris e que seria descendente de
                          François Villon, o príncipe de Paris. Segundo esta teoria, ele estaria fingindo servir Inês
                          para preparar secretamente a chegada de Villon ao Novo Mundo.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 font-semibold text-silver-300">A Noite da Espada Oculta</h4>
                      <div className="rounded bg-midnight-800 p-4">
                        <p className="text-gray-300">
                          Há quem afirme que, certa noite, William duelou com um invasor misterioso no cemitério de
                          Lafayette. O invasor teria sido um Assamita contratado para assassiná-lo. O fato de William
                          ter saído ileso, dizem os rumores, prova que tem aliados inesperados ou que, talvez, tenha
                          pago o próprio assassino para que o deixasse viver.
                        </p>
                      </div>
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
