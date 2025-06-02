import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Crown, Clock, Users, Scroll, MessageCircleWarning } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ThomasCoenPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Cabeçalho com imagem de fundo */}
        <div className="relative h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/Capa-Thomas.jpeg')" }}
          />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="font-serif text-5xl font-bold text-silver-200">Thomas Coen</h1>
            <p className="mt-2 text-xl text-crimson-500">O Primogênito das Sombras</p>
          </div>
        </div>

        {/* Conteúdo principal da página */}
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/elysium" className="mb-8 inline-flex items-center text-sm text-silver-200 hover:text-amber-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Elysium
          </Link>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Barra lateral com informações do personagem */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="https://via.placeholder.com/400x500?text=Thomas+Coen"
                  alt="Thomas Coen"
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
                    <span className="text-silver-300">9ª</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Abraço:</span>
                    <span className="text-silver-300">1700 (Nova Inglaterra colonial)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Posição:</span>
                    <Badge variant="outline" className="border-amber-600 text-amber-400">
                      Primogênito dos Ventrue
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Idade:</span>
                    <span className="text-silver-300">~325 anos</span>
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
                      <span>Inês LaCroix (Príncipe, Ventrue)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blood-500"></span>
                      <span>Executivos da Ford Motor Company</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blood-500"></span>
                      <span>Carniçais leais</span>
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
                    <Crown className="mr-2 h-5 w-5 text-amber-500" />
                    Aparência e Presença
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Um homem branco, gordo, careca e com uma barba rala que parece mais descuido do que escolha. Usa
                    ternos bem cortados, quase sempre escuros, e um lenço impecavelmente dobrado no bolso superior.
                    Thomas não é fisicamente impressionante, mas sua presença transmite uma sensação de poder silencioso e
                    constante.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Ele se move com calma e precisão, como se cada gesto fosse parte de um plano maior. Seus olhos, frios e
                    avaliativos, parecem sempre calcular algo. Sua voz é suave, persuasiva, e capaz de transformar até as
                    ameaças mais veladas em promessas inquietantes.
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
                    Thomas Coen foi abraçado em 1700, durante o período colonial da América do Norte. Desde então,
                    soube posicionar-se como um operador discreto, porém eficaz, nos bastidores do poder vampírico. Ao
                    contrário de seus pares mais tradicionais, ele nunca buscou glória ou reconhecimento público.
                  </p>
                  <p className="text-gray-300">
                    Em vez disso, construiu uma vasta rede de influências dentro da economia mortal, investindo em
                    negócios aparentemente comuns — transporte, construção civil, logística. Esses interesses acabaram
                    crescendo exponencialmente ao longo do século XX, graças a parcerias estratégicas com corporações
                    humanas, incluindo a Ford Motor Company.
                  </p>
                  <p className="text-gray-300">
                    Hoje, é amplamente reconhecido como o arquiteto por trás do rápido desenvolvimento das vias e
                    rotas que conectam Nova Orleans ao mundo exterior. Essa infraestrutura não apenas fortalece a
                    cidade sobrenatural, mas também permite a Thomas monitorar e controlar o fluxo de pessoas e recursos.
                  </p>
                  <p className="text-gray-300">
                    Sua habilidade de prever tendências e antecipar crises fez dele uma figura indispensável aos Ventrue,
                    garantindo-lhe o título de primogênito, apesar de sua natureza reservada e de seu perfil pouco
                    convencional.
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
                    Thomas é calculista, ambicioso e profundamente pragmático. Ele prefere evitar confrontos diretos e
                    delegar tarefas violentas a seus carniçais, enquanto cuida do jogo político com uma mente fria e
                    precisa.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Embora seja visto por alguns como covarde por essa abordagem passiva, quem o subestima logo aprende
                    o quanto suas manobras são letais. Ele valoriza a lealdade acima de tudo, mas entende que favores
                    devem ser cobrados com rigor e justiça.
                  </p>
                  <div className="mt-6 rounded bg-midnight-800 p-4">
                    <p className="italic text-silver-400">
                      "A melhor vitória é aquela em que ninguém levanta a mão."
                    </p>
                    <p className="mt-2 text-right text-sm text-gray-500">— Lema pessoal de Thomas Coen</p>
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
                        Dizem que Thomas mantém um registro completo de todos os favores dados e recebidos. Ninguém
                        jamais sai realmente isento de dívidas com ele.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Alguns dizem que ele tem um acordo secreto com uma empresa de segurança privada, cujos agentes
                        agem como espiões noturnos espalhados pela cidade.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Thomas teria envenenado discretamente um rival recente usando uma bebida oferecida em um elysium
                        lotado. Ninguém viu nada, mas o corpo apareceu dias depois em um rio.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Há boatos de que ele mantém um diário físico, onde anota segredos comprometedores sobre todos os
                        membros da sociedade vampírica local. O diário estaria escondido em algum cofre seguro.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Alguns acreditam que Thomas está tentando montar uma aliança com um grupo de lobisomens locais,
                        oferecendo proteção em troca de informações sobre movimentações suspeitas na cidade.
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
