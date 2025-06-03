import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Flame, Clock, Users, Scroll, MessageCircleWarning } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function JosephineDuboisPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        {/* Cabeçalho com imagem de fundo */}
        <div className="relative h-[300px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-10" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/whorehouse.jpeg')" }}
          />
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="font-serif text-5xl font-bold text-silver-200">Josephine "Josie" Dubois</h1>
            <p className="mt-2 text-xl text-purple-500">A Rainha dos Anarquistas</p>
          </div>
        </div>

        {/* Conteúdo principal da página */}
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/elysium" className="mb-8 inline-flex items-center text-sm text-silver-200 hover:text-crimson-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Elysium
          </Link>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Barra lateral com informações do personagem */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/images/josie.png"
                  alt="Josephine Dubois"
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
                      Brujah
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Geração:</span>
                    <span className="text-silver-300">10ª</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Abraço:</span>
                    <span className="text-silver-300">1758 (Nova Orleans)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Posição:</span>
                    <Badge variant="outline" className="border-amber-600 text-amber-400">
                      Líder Anarquista
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Idade:</span>
                    <span className="text-silver-300">~260 anos</span>
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
                      <span>Victor Bloodwood (Brujah Reinante)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blood-500"></span>
                      <span>Prostitutas e Prostitutas da cidade</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blood-500"></span>
                      <span>Carniçais rebeldes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-blood-500"></span>
                      <span>Thomas Coen (Membro independente)</span>
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
                    <Flame className="mr-2 h-5 w-5 text-crimson-500" />
                    Aparência e Presença
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">
                    Josie é uma mulher negra na casa dos vinte anos eternos, com cerca de 1,60m de altura. Sua beleza é
                    inegável — olhos brilhantes, cabelos curtos e bem cuidados, e um sorriso que pode seduzir ou ameaçar.
                    Ela se veste de forma provocadora, sempre escolhendo roupas justas e cores vibrantes que chamam atenção.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Seu corpo carrega cicatrizes antigas, mas ela as mostra como medalhas de honra. Seus movimentos são
                    fluidos e seguros, e quando entra em um ambiente, todos sabem disso. Ela não tem medo de ser notada.
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
                    Criada nas ruas sujas de Nova Orleans, Josie aprendeu cedo que confiar era perigoso. Trabalhou em casas
                    de prazer desde jovem, onde desenvolveu charme, astúcia e uma habilidade única de manipular homens e mulheres.
                  </p>
                  <p className="text-gray-300">
                    Foi transformada por Michael Dogget, um Brujah que viu nela uma força da natureza. Porém, Josie não ficou
                    sob sua tutela por muito tempo. Quando ele cometeu diablerie, ela o entregou pessoalmente a Inês LaCroix.
                    Alguns dizem que ela sorriu enquanto ele morria.
                  </p>
                  <p className="text-gray-300">
                    Hoje, Josie lidera os anarquistas ao lado de Victor Bloodwood. Ela mantém um pé no submundo e outro nos salões
                    sociais, sempre desafiando o status quo. É respeitada por muitos, temida por alguns e adorada por poucos.
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
                    Josie é intensa, imprevisível e cheia de contradições. Ela pode te beijar com paixão e depois quebrar um
                    nariz sem hesitar. Não aceita hipocrisia nem covardia. Seu passado lhe ensinou a valorizar lealdade acima de tudo.
                  </p>
                  <p className="mt-4 text-gray-300">
                    Ela odeia ser controlada e não reconhece autoridade — exceto quando isso lhe convém. Sua visão de mundo é brutal,
                    mas honesta. Josie protege os fracos, especialmente prostitutas, pois sabe exatamente o que elas sofrem.
                  </p>
                  <div className="mt-6 rounded bg-midnight-800 p-4">
                    <p className="italic text-silver-400">
                      "Pode olhar. Eu sei que sou bela. Mas se por as mãos em mim sem minha autorização, vai ser a última vez que terá mãos."
                    </p>
                    <p className="mt-2 text-right text-sm text-gray-500">— Josie Dubois</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-midnight-700 text-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                    <MessageCircleWarning className="mr-2 h-5 w-5 text-crimson-500" />
                    Rumores
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Dizem que Josie matou mais de um cliente violento, e que seus corpos nunca foram encontrados.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Ela mantém uma lista secreta de políticos, juízes e clérigos que visitam suas casas. Muitos têm medo dela.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Há quem diga que ela ainda mantém contato com mortais antigos e usa deles para espionar a Camarilla.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Josie teria um acordo com Thomas Coen para obter informações sobre os planos de Inês.
                      </p>
                    </div>
                    <div className="rounded bg-midnight-800 p-4">
                      <p className="text-gray-300">
                        Ela já foi vista entrando em lugares proibidos à noite, vestindo roupas pretas e armada com punhais.
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
