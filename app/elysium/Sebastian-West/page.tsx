import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Pyramid, Clock, Users, Scroll, MessageCircleWarning } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SebastianWestPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Cabeçalho com imagem de fundo */}
        <div className="relative h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/capa-sebastian.jpg')" }}
          />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="font-serif text-5xl font-bold text-silver-200">Sebastian West</h1>
            <p className="mt-2 text-xl text-indigo-500">O Arcanista Macabro</p>
          </div>
        </div>

        {/* Conteúdo principal da página */}
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/elysium" className="mb-8 inline-flex items-center text-sm text-silver-200 hover:text-indigo-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Elysium
          </Link>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Barra lateral com informações do personagem */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/sebastian-west.jpeg"
                  alt="Sebastian West"
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
                    <Badge variant="outline" className="border-indigo-600 text-indigo-400">
                      Tremere
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Geração:</span>
                    <span className="text-silver-300">7ª</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Abraço:</span>
                    <span className="text-silver-300">1129 (Toscana, Itália)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Posição:</span>
                    <Badge variant="outline" className="border-amber-600 text-amber-400">
                      Primogênito Tremere
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Idade:</span>
                    <span className="text-silver-300">~800 anos</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <Users className="mr-2 h-5 w-5 text-indigo-500" />
                    Aliados Conhecidos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                      <span>Marie Levou (Hecata)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                      <span>Regentes Tremere Europeus</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                      <span>Carniçais Acadêmicos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
                      <span>Inês LaCroix (Ventrue)</span>
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
                    <Pyramid className="mr-2 h-5 w-5 text-indigo-500" />
                    Aparência e Presença
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Sebastian é um homem magro, com expressão sinistra e um sorriso que raramente parece sincero. Usa
                    sempre ternos bem cortados, acompanhados por suspensórios e abotoaduras elegantes. Sua postura é ereta,
                    quase militar, e seu olhar transmite frieza intelectual.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Ele se move como alguém que está constantemente analisando tudo ao seu redor, e sua voz soa precisa e
                    contida. Quando ri, faz isso de forma inesperada, como se estivesse compartilhando uma piada com ele mesmo.
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
                    Nascido como Sebastiano di Vescia na Toscana do século XII, foi entregue aos monges ainda jovem. Lá,
                    desenvolveu uma mente brilhante e uma obsessão pelo oculto. Foi abraçado pelos Tremere durante os primeiros
                    séculos de existência do clã, após trair os Salubri.
                  </p>
                  <p className="text-gray-300">
                    Rapidamente ascendeu dentro da hierarquia Tremere, tornando-se executor de missões delicadas e
                    experimentações perigosas. Chegou a Nova Orleans no final do século XIX e construiu uma capela escondida
                    sob um observatório astronômico.
                  </p>
                  <p className="text-gray-300">
                    Em 1929, tornou-se o Primogênito Tremere local, consolidando seu poder através de manipulação e eliminação
                    silenciosa de rivais. Hoje, controla redes acadêmicas, carniçais e até cultos secretos dedicados ao
                    conhecimento arcano.
                  </p>
                  <p className="text-gray-300">
                    É respeitado até pelos mais antigos do clã, e muitos o temem por sua falta de escrúpulos e senso de humor
                    mórbido.
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
                    Sebastian é implacável, racional e extremamente prático. Para ele, sentimentos são fraquezas e todo ato
                    deve ter um propósito claro. Possui um senso de humor macabro e costuma fazer piadas que perturbam até os
                    vampiros mais antigos.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Nunca hesita quando há algo a ser feito, seja uma execução ou uma experiência cruel. Acredita que o custo
                    do progresso é aceitável — e necessário.
                  </p>
                  <div className="mt-6 rounded bg-midnight-800 p-4">
                    <p className="italic text-silver-400">
                      “Escrúpulos são o último refúgio dos ignorantes.”
                    </p>
                    <p className="italic text-silver-400">
                      “O preço do poder é alto. Eu o pago com prazer.”
                    </p>
                    <p className="italic text-silver-400">
                      “A ignorância é uma bênção apenas para os fracos.”
                    </p>
                    <p className="italic text-silver-400">
                      “A Príncipe governa a cidade. Eu governo o que ela esconde.”
                    </p>
                    <p className="mt-2 text-right text-sm text-gray-500">— Frases famosas de Sebastian West</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <MessageCircleWarning className="mr-2 h-5 w-5 text-indigo-500" />
                    Rumores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Dizem que Sebastian busca a verdadeira imortalidade, além da maldição vampírica. Alguns afirmam que ele é um Nodista.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Ele mantém uma prisão subterrânea onde realiza experiências com Caitiff, Lobisomens e outras criaturas sobrenaturais.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Há rumores de que Inês LaCroix envia prisioneiros para ele, como parte de um acordo tácito entre os dois.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Sebastian teria um pacto obscuro com Marie Levou, embora ninguém saiba exatamente qual é o objetivo dessa aliança.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Dentro de sua capela, dizem que há grimórios proibidos, gárgulas vivas e artefatos perdidos que nenhum vampiro deveria possuir.
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
