import Link from "next/link"
import { ArrowLeft, Zap, BookOpen, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function EmilieChaosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/coterie/emilie"
            className="mb-6 inline-flex items-center text-sm text-silver-200 hover:text-amber-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Emilie
          </Link>

          <div className="mb-8">
            <h1 className="mb-4 font-serif text-4xl font-bold text-silver-200">
              <span className="mr-3 text-4xl">🔮</span>
              Caoísmo e Magia do Caos
            </h1>
            <p className="text-lg text-gray-300">
              A arte de rasgar o véu da realidade através da vontade, símbolo e crença dirigida.
            </p>
          </div>

          <div className="space-y-8">
            {/* Introdução */}
            <Card className="bg-midnight-700 text-gray-200">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-silver-300">A Pioneira do Caos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Acreditar na ordem era uma prisão. Emilie aprendeu isso cedo demais. A estrutura linear do pensamento
                  humano, com seus dogmas e verdades absolutas, sempre lhe pareceu uma construção frágil – uma tapeçaria
                  prestes a se desfazer com um simples puxão de realidade.
                </p>
                <p className="text-gray-300">
                  Durante os anos em que ainda atendia por Evelynn, mergulhou em manuscritos apócrifos, grimórios
                  esquecidos e tratados filosóficos que dançavam na tênue fronteira entre genialidade e loucura. Mas foi
                  somente após o Abraço, e sob a tutela de Jean-Baptiste, que sua mente se descolou por completo das
                  amarras da lógica convencional.
                </p>
              </CardContent>
            </Card>

            {/* Fata Morgana */}
            <Card className="bg-midnight-700 text-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                  <Zap className="mr-2 h-5 w-5 text-gothic-400" />
                  Fata Morgana - A Disciplina da Ilusão
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Jean-Baptiste, seu Pai das Sombras, não era um vampiro comum. Séculos antes, havia cometido o Amaranto
                  contra um Ravnos errante, adquirindo não apenas seu poder, mas também seus delírios. Foi através dele
                  que Emilie provou do impossível — do sangue que carregava ecos da Quimera e da ilusão absoluta.
                </p>
                <p className="text-gray-300">
                  Em 1906, ao se alimentar de Jean pela última vez, algo mudou. Uma linha tênue foi cruzada. Emilie
                  emergiu daquela noite dominando a <strong>Fata Morgana</strong>, a arte de moldar o invisível com a
                  força do pensamento e da vontade. Ilusão e realidade tornaram-se conceitos intercambiáveis.
                </p>
                <div className="rounded bg-midnight-800 p-4">
                  <p className="text-sm italic text-gothic-400">
                    "O palco da existência era seu, e ela podia vestir qualquer máscara, curvar qualquer cenário,
                    conduzir qualquer mente até os abismos do indizível."
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Princípios */}
            <Card className="bg-midnight-700 text-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                  <BookOpen className="mr-2 h-5 w-5 text-silver-400" />
                  Os Seis Princípios do Caos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {chaosPrinciples.map((principle, index) => (
                    <div key={index} className="border-l-2 border-blood-600 pl-4">
                      <h4 className="mb-2 font-semibold text-silver-300">{principle.title}</h4>
                      <p className="text-sm italic text-gothic-400">"{principle.quote}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Citações */}
            <Card className="bg-midnight-700 text-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center font-serif text-xl text-silver-300">
                  <Eye className="mr-2 h-5 w-5 text-crimson-500" />
                  Fragmentos de Sabedoria
                </CardTitle>
                <p className="text-sm text-gray-400">
                  Trechos compilados de escritos apócrifos, cartas cifradas e anotações dispersas
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {chaosQuotes.map((quote, index) => (
                    <div key={index} className="rounded bg-midnight-800 p-4">
                      <p className="text-sm italic text-gray-300">"{quote}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Influência */}
            <Card className="bg-midnight-700 text-gray-200">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-silver-300">A Arte de Rasgar o Véu</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300">
                  Enquanto os magos herméticos desenhavam círculos no chão e recitavam invocações, Emilie desenhava
                  símbolos na mente. Ela compreendia, muito antes da vinda do século XX, que a crença é uma ferramenta —
                  e não uma verdade.
                </p>
                <p className="text-gray-300">
                  Seus ensinamentos começaram como devaneios anotados em cadernos por devotos sonhadores, transcritos em
                  sangue por ocultistas desiludidos, e espalhados como fragmentos de revelação entre cultos efêmeros na
                  França, na Inglaterra e, depois, na América.
                </p>
                <p className="text-gray-300">
                  Quando Peter J. Carroll formalizou os princípios do caoísmo em seu <em>Liber Null e o Psiconauta</em>,
                  ele apenas ecoava o que já havia sido sussurrado no escuro por uma mulher que jamais envelhecia.
                </p>
                <div className="rounded bg-midnight-800 p-4">
                  <p className="text-sm italic text-gothic-400">
                    "Emilie, mesmo sabendo que sua assinatura jamais seria reconhecida, sentia-se satisfeita em ver o
                    mundo aprender — mesmo que por vias tortas — que o caos é criação. Que a fé é moldável. Que a
                    realidade é um pacto frágil entre linguagem, intenção e insanidade."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

const chaosPrinciples = [
  {
    title: "1. Toda Verdade É Temporária",
    quote: "O que é crença hoje será ruína amanhã. E vice-versa. A única constante é o símbolo em trânsito.",
  },
  {
    title: "2. O Símbolo Molda o Real",
    quote: "A palavra escrita, falada ou pensada é um feitiço. Uma chave para distorcer o espelho da percepção.",
  },
  {
    title: "3. O Caos é Fonte, Não Erro",
    quote: "Não tente organizar o mundo. Beba dele. O caos não quer lógica — quer vontade.",
  },
  {
    title: "4. Vontade Dirigida É Magia",
    quote: "O desejo sem distração move montanhas. Mas o desejo que canta enquanto sangra, move mundos.",
  },
  {
    title: "5. Ria ao Invocar",
    quote: "Todo ritual é uma piada. Toda piada é um ritual. Só os que riem ao conjurar verão a face real da besta.",
  },
  {
    title: "6. Roube os Deuses. Ou crie-os.",
    quote: "Nenhum símbolo é sagrado. Todo deus é um disfarce. Use-os como máscaras até que caibam em você.",
  },
]

const chaosQuotes = [
  "A realidade não é uma linha. É uma espiral. Uma vertigem. Um sussurro. Escolha bem a máscara — o mundo aceitará aquilo que você repetir com firmeza.",
  "Sigilos são poemas com fome. Alimente-os com intenção e eles dançarão sobre a carne do mundo.",
  "Não existe crença falsa. Só há crença fraca.",
  "O caos não é desordem. É criação crua, sem moldes. Um berro antes do verbo. Um reflexo antes do espelho.",
  "Toda estrutura é uma jaula. Toda tradição é um túmulo. Toda certeza é um veneno.",
  "Se quiser alterar o destino, troque de idioma. Mude a sintaxe da alma. Sussurre em símbolos.",
  "Eles pensam que magia é controle. Eu lhes mostrei que é rendição.",
]
