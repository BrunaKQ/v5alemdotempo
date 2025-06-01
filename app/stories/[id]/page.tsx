import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function StoryPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the story based on the ID
  const story = stories.find((s) => s.id === params.id) || stories[0]

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/stories" className="mb-6 inline-flex items-center text-sm text-amber-500 hover:text-amber-400">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para histórias
            </Link>

            <h1 className="mb-4 font-serif text-4xl font-bold text-amber-500">{story.title}</h1>

            <div className="mb-6 flex items-center text-sm text-gray-400">
              <Clock className="mr-1 h-4 w-4" />
              <span>{story.readTime} min de leitura</span>
              <span className="mx-2">•</span>
              <Calendar className="mr-1 h-4 w-4" />
              <span>{story.date}</span>
            </div>

            <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 md:h-96">
              <div
                className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 to-black/90"
                style={{
                  backgroundImage: `url('/placeholder.svg?height=400&width=800')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </div>
          </div>

          <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-amber-500 prose-p:text-gray-300 prose-strong:text-red-500 prose-blockquote:border-red-800 prose-blockquote:text-gray-400">
            {story.content.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-between border-t border-neutral-800 pt-6">
            <div>
              <p className="text-sm text-gray-400">Escrito por</p>
              <p className="font-serif text-lg text-amber-500">{story.author}</p>
            </div>

            <Button variant="outline" size="sm" className="border-neutral-700 text-gray-300">
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhar
            </Button>
          </div>

          <div className="mt-12">
            <h2 className="mb-6 font-serif text-2xl font-bold text-amber-500">Mais Histórias</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {stories
                .filter((s) => s.id !== params.id)
                .slice(0, 2)
                .map((relatedStory) => (
                  <Link
                    key={relatedStory.id}
                    href={`/stories/${relatedStory.id}`}
                    className="group rounded-lg border border-neutral-800 bg-neutral-900 p-4 transition-colors hover:border-neutral-700"
                  >
                    <h3 className="mb-2 font-serif text-lg font-medium text-amber-400 group-hover:text-amber-300">
                      {relatedStory.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-gray-400">{relatedStory.excerpt}</p>
                  </Link>
                ))}
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

const stories = [
  {
    id: "sangue-e-jazz",
    title: "Sangue e Jazz",
    excerpt:
      "Nas noites de jazz do Quarteirão Francês, Eleonora encontra sua próxima vítima - um trompetista cujo sangue promete um sabor tão doce quanto suas melodias.",
    readTime: 12,
    date: "15 Mai 2024",
    author: "Isabel Monteiro",
    content: [
      "Nova Orleans, 1929. A noite caía sobre o Quarteirão Francês como um véu de veludo negro, enquanto as notas de jazz escapavam pelas portas dos bares e clubes noturnos. Eleonora Beaumont ajustou suas luvas de seda, observando a multidão que se aglomerava na entrada do Blue Note, o mais novo clube da cidade.",
      "Seus olhos, de um castanho tão profundo que pareciam negros à luz fraca das lamparinas, fixaram-se no jovem trompetista que acabara de subir ao palco. Havia algo nele – talvez a forma como seus dedos dançavam sobre o instrumento, ou o modo como fechava os olhos ao tocar – que a atraía de uma forma que não sentia há décadas.",
      '"Mais um copo, madame?" perguntou o garçom, interrompendo seus pensamentos.',
      '"Não, obrigada," respondeu ela, sem desviar o olhar do músico. "Estou satisfeita... por enquanto."',
      "Eleonora sabia que deveria ser mais cautelosa. Os anciãos do clã Beaumont haviam sido claros: discrição era essencial após os incidentes do mês passado. Três corpos drenados encontrados em menos de uma semana haviam atraído atenção demais, e os caçadores estavam vigilantes.",
      "Mas havia algo no sangue dos artistas – especialmente dos músicos – que possuía um sabor diferente. Era como se a paixão pela arte fluísse em suas veias, adoçando cada gota com uma intensidade que nenhum outro mortal poderia oferecer.",
      "O trompetista terminou sua apresentação sob aplausos entusiasmados. Eleonora observou enquanto ele descia do palco, enxugando o suor da testa com um lenço. Ela esperou pacientemente, contando os minutos até que ele saísse pela porta dos fundos para fumar um cigarro no beco escuro.",
      "Foi quando ela fez seu movimento, deslizando para fora do clube como uma sombra. A noite ainda era jovem, e Nova Orleans tinha muitos segredos para esconder – inclusive os dela.",
    ],
  },
  {
    id: "sombras-do-bayou",
    title: "Sombras do Bayou",
    excerpt:
      "Quando corpos começam a aparecer nas margens do bayou, o detetive mortal Marcel Dubois se aproxima perigosamente dos segredos do clã Beaumont.",
    readTime: 15,
    date: "22 Mai 2024",
    author: "Isabel Monteiro",
    content: [
      "O detetive Marcel Dubois acendeu seu último cigarro enquanto observava o corpo sendo retirado das águas turvas do bayou. Era o terceiro neste mês – todos com as mesmas marcas estranhas no pescoço e a mesma palidez antinatural.",
      '"Mesma história que os outros," disse o médico legista, fechando sua maleta. "Completamente drenado de sangue. Nem uma gota sequer."',
      "Marcel assentiu silenciosamente. Havia algo nestes casos que o incomodava profundamente, algo que ia além do óbvio horror dos assassinatos. As vítimas não tinham nada em comum – um estivador do porto, uma garçonete e agora um contador de meia-idade – exceto pelo fato de que todos haviam desaparecido à noite e sido encontrados dias depois nas águas pantanosas.",
      '"Alguma ideia, detetive?" perguntou o oficial novato ao seu lado.',
      '"Várias," respondeu Marcel, "mas nenhuma que faça sentido... ainda."',
      "O que ele não disse foi que suas suspeitas estavam se voltando para a família Beaumont, proprietários da mansão que se erguia na margem norte do bayou. Uma família antiga, respeitada, mas cercada de mistérios. Raramente vistos durante o dia, os Beaumont eram conhecidos por suas extravagantes festas noturnas e conexões políticas poderosas.",
      'Marcel jogou a bituca do cigarro no chão úmido e a esmagou com a ponta do sapato. Estava decidido a fazer uma visita à mansão Beaumont esta noite, mesmo que isso significasse ignorar os avisos de seu chefe para "não incomodar as pessoas importantes da cidade".',
      "O que o detetive não sabia era que sua visita já era esperada. Do alto de uma das torres da mansão, uma figura observava os procedimentos no bayou através de um telescópio antigo. Seus lábios se curvaram em um sorriso, revelando brevemente um par de caninos afiados.",
      '"Parece que teremos um convidado para o jantar esta noite," murmurou para a silhueta que se mantinha nas sombras atrás dele. "Prepare o salão vermelho. Gosto de privacidade quando me alimento."',
    ],
  },
  {
    id: "baile-de-mascaras",
    title: "Baile de Máscaras",
    excerpt:
      "O baile anual da sociedade de Nova Orleans esconde um propósito mais sombrio, onde vampiros centenários escolhem novos membros para sua eterna família.",
    readTime: 10,
    date: "29 Mai 2024",
    author: "Isabel Monteiro",
    content: [
      "Os convites para o Baile de Máscaras dos Beaumont eram o item mais cobiçado da temporada social de Nova Orleans. Impressos em papel pergaminho com tinta dourada, eram entregues pessoalmente por mensageiros vestidos de preto que apareciam apenas após o pôr do sol.",
      "Josephine Laveau, filha de uma família crioula em decadência financeira, não conseguia acreditar quando recebeu o seu. Aos vinte e dois anos, com cabelos negros como a noite e uma beleza que atraía olhares por onde passava, ela sabia que esta poderia ser sua chance de garantir um futuro melhor através de um casamento vantajoso.",
      "O que ela não sabia era que havia sido observada por semanas. Sua graça natural, sua voz melodiosa e, principalmente, seu espírito indomável haviam chamado a atenção de Vincent Beaumont, o patriarca que, apesar de aparentar não mais que quarenta anos, já havia testemunhado a passagem de dois séculos.",
      "O salão de baile da mansão Beaumont resplandecia com a luz de centenas de velas. Máscaras ornamentadas ocultavam os rostos dos convidados – alguns humanos, outros nem tanto. Josephine, usando um vestido de seda vermelha e uma máscara veneziana dourada, sentia-se como se tivesse entrado em um sonho.",
      '"Está gostando da festa, mademoiselle Laveau?" A voz profunda atrás dela fez com que se virasse rapidamente. Vincent Beaumont, usando uma máscara negra que cobria apenas metade de seu rosto, a observava com olhos de um azul tão claro que pareciam quase translúcidos.',
      '"É magnífica, monsieur Beaumont," respondeu ela, fazendo uma pequena reverência. "Nunca vi nada igual."',
      '"E nunca verá," ele sorriu, estendendo a mão. "Gostaria de conhecer os jardins? Há uma vista do rio que é... de tirar o fôlego."',
      "Enquanto Josephine seguia Vincent para fora do salão, não percebeu os olhares trocados entre os outros membros da família Beaumont. Esta noite, como acontecia uma vez a cada década, um novo membro seria adicionado à linhagem imortal. E Josephine havia sido a escolhida.",
    ],
  },
]
