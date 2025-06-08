import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Flower, Clock, Users, Scroll, MessageCircleWarning } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function LouisBeaumontPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Cabeçalho com imagem de fundo */}
        <div className="relative h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/louis-beaumont-bg.png')" }}
          />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="font-serif text-5xl font-bold text-silver-200">Louis Beaumont</h1>
            <p className="mt-2 text-xl text-crimson-700">O Primogênito Toreador</p>
          </div>
        </div>

        {/* Conteúdo principal da página */}
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/elysium/" className="mb-8 inline-flex items-center text-sm text-silver-200 hover:text-crimson-600">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Personagens
          </Link>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Barra lateral com informações do personagem */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/louis-beaumont.jpg"
                  alt="Louis Beaumont"
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
                    <Badge variant="outline" className="border-crimson-600 text-crimson-400">
                      Toreador
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Geração:</span>
                    <span className="text-silver-300">8ª</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Abraço:</span>
                    <span className="text-silver-300">1510 (Florença, Itália)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Cargo:</span>
                    <Badge variant="outline" className="border-amber-600 text-amber-400">
                      Primogênito Toreador
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Idade:</span>
                    <span className="text-silver-300">~515 anos</span>
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
                      <span className="h-2 w-2 rounded-full bg-crimson-500"></span>
                      <span>Jovens músicos mortais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-crimson-500"></span>
                      <span>Artistas locais protegidos por ele</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-crimson-500"></span>
                      <span>Membros influentes da Camarilla</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-crimson-500"></span>
                      <span>Isadora di Firenze (desaparecida?)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Conteúdo textual principal */}
            <div className="md:col-span-2 space-y-8">
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <Flower className="mr-2 h-5 w-5 text-crimson-500" />
                    Aparência e Presença
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Louis é um homem alto, de ombros levemente curvados, como se carregasse séculos de lembranças. Seu cabelo,
                    outrora dourado, agora é grisalho, e seus olhos têm um brilho melancólico que contrasta com sua postura refinada.
                    Usa roupas clássicas, sempre impecavelmente cortadas, e mantém em seu bolso um pequeno alaúde miniaturizado — uma relíquia pessoal.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Sua voz é suave, quase musical, e ele fala como se cada palavra tivesse sido composta em um poema. Quando sorri, há um certo cansaço em seu rosto — não desgosto, mas uma tristeza calma, como se soubesse que toda beleza um dia acaba.
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
                    Louis Beaumont nasceu em Lyon, em 1480, em uma família aristocrática sem fortuna real. Mostrou talento precoce para música e foi mandado ao mosteiro para estudar canto sacro e composição. Lá, sua sensibilidade às emoções humanas despertou o interesse de Isadora di Firenze, uma vampira Toreador fascinada pela arte renascentista.
                  </p>
                  <p className="text-gray-300">
                    Ela o abraçou durante um recital privado em Florença, em 1510, dizendo ter visto nele “uma alma capaz de ouvir o coração do mundo”. Durante os séculos seguintes, Louis tornou-se patrono de artistas, amigo de grandes compositores e cantores humanos, incluindo Monteverdi, Chopin e Debussy.
                  </p>
                  <p className="text-gray-300">
                    Em 1890, fugiu da Europa, cansado das guerras e do cinismo crescente entre os vampiros europeus. Encontrou em Nova Orleans uma cidade viva, pulsante, cheia de dor e beleza. O nascimento do jazz cativou-o. Ele viu naquela música a mais pura expressão do sofrimento humano transformado em arte.
                  </p>
                  <p className="text-gray-300">
                    Hoje, Louis dirige o clube “Le Coeur Noir”, onde Kindred e mortais se misturam sob luzes baixas e melodias tristes. Ele protege artistas com paixão quase paterna, oferecendo apoio, inspiração... e, ocasionalmente, sangue, se sentir que isso elevará suas obras.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <Scroll className="mr-2 h-5 w-5 text-gothic-400" />
                    Personalidade e Virtude
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Louis é elegante, sensível e profundamente idealista. Para ele, a beleza humana não está apenas na arte, mas na própria alma dos mortais — em suas paixões, tragédias e redenções efêmeras. Ele se emociona facilmente com canções, poemas e até lágrimas sinceras.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Sua virtude dominante é o amor à beleza — tanto a eterna quanto a passageira. Mas há nisso tudo uma sombra: Louis vive constantemente à beira do desencanto. Ele já perdeu muitas eras gloriosas, e sente que a beleza moderna está ameaçada pelo vulgar e pelo rápido.
                  </p>
                  <div className="mt-6 rounded bg-midnight-800 p-4">
                    <p className="italic text-silver-400">
                      “A música me salva do tédio da eternidade.”
                    </p>
                    <p className="italic text-silver-400">
                      “Cada nota que toco é uma prece aos vivos.”
                    </p>
                    <p className="italic text-silver-400">
                      “Não sou cruel. Sou apenas honesto sobre a finitude da vida.”
                    </p>
                    <p className="mt-2 text-right text-sm text-gray-500">— Frases famosas de Louis Beaumont</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <MessageCircleWarning className="mr-2 h-5 w-5 text-crimson-700" />
                    Rumores e Segredos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Dizem que ele mantém uma relação ambígua com uma jovem cantora negra que se apresenta em seu clube. Alguns acreditam que ela possa ser mais do que uma simples mortal — outros dizem que ele sente inveja de sua voz.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Louis despreza os Nosferatu, considerando-os um atentado contra a Máscara. Muitos acreditam que ele tenha sabotado tentativas de alguns deles ganharem poder político.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Jovens anarquistas o veem como uma ponte entre o passado e o presente, e tentam convencê-lo a romper com a Camarilla. Até agora, ele resiste, mas há dúvidas sobre seu comprometimento com a Torre.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Há rumores de que Isadora di Firenze, sua criadora, esteja em Nova Orleans disfarçada. Alguns juram tê-la visto observando Louis durante shows noturnos, mas ele nega qualquer conhecimento.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Louis parece estar em constante conflito interno: por um lado, ama a beleza da humanidade; por outro, luta contra o desejo de revelar a si mesmo aos mortais, algo que ele sabe ser perigoso.
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
