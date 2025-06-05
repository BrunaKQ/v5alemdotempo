import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function HelenaENadinePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/roleplay" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-amber-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Roleplay
          </Link>

          <h1 className="font-serif text-4xl font-bold text-silver-200">Helena e Nadine</h1>
          <p className="italic text-dodgerblue-500 mt-2">Um conto de Helena e Nadine</p>

          <article className="prose prose-invert prose-p:text-gray-300 prose-strong:text-crimson-400 prose-em:text-amber-400 mt-8 space-y-6">
            <p>
              O som dos saltos de Nadine ecoava com precisão quase ritualística. Cada passo era marcado, firme, como se ela cravasse seu direito de existir naquele espaço esquecido por Deus — ou pelos deuses que ainda restavam.
            </p>

            <p>
              Vestia-se como se a guerra fosse iminente, mas invisível. Blazer negro ajustado com elegância mortal, saia do mesmo tecido que deslizava sutil pelas pernas envoltas em meias finas. Na mão, uma bolsa discreta, rígida. No colo, um colar com uma cruz escura, pesada, pendia sobre a pele exposta de seu peito. Como se desafiasse o próprio símbolo que carregava.
            </p>

            <p>
              Ela parou na entrada da cripta, onde o chão encontrava o vazio. As tochas lançavam sombras douradas sobre seu rosto, mas nada nelas apagava a frieza dos olhos. O batom escuro desenhava sua boca como uma ameaça contida. Ela não piscava. Não tremia. Esperava.
                Esperava ser notada.
                Sabia que Helena a observava de algum lugar. Sentia o peso daquele olhar antigo como quem sente o ar mudar antes da tempestade.
                Seus olhos varreram o ambiente com a calma de quem já viu o pior que a eternidade pode oferecer. Não havia surpresa em seu semblante. Apenas o silêncio paciente de alguém que aprendeu a ser pedra, não para resistir  mas para esmagar.
                Então ela disse, sem emoção, mas com propósito:
            </p>

            <p>
              Sabia que Helena a observava de algum lugar. Sentia o peso daquele olhar antigo como quem sente o ar mudar antes da tempestade.
            </p>

            <p className="text-indigo-400">
              — Deseja poder ou vingança? Deseja matá-lo? Deseja humilhá-lo? Já fui uma filha rebelde antes... Nunca é tão simples quanto parece. Se deseja uma aliança comigo Nadine, preciso que ponha as cartas na mesa. Me diga: o que sente por ele?
            </p>

            <p>
              Nadine não piscava. Estava imóvel, com os ombros retos, como se sustentasse nas costas o peso de mil decisões. Ela, enfim, quebrou o silêncio.
            </p>

            <p className="text-darkred-400">
              — Helena... Fui moldada como uma arma. Uma arma para ser usada no futuro. E, nesse jogo... eu já sei qual é o meu papel.
            </p>

            <p>
              Houve uma pausa. O silêncio se espessou como neblina antes da tormenta. Seus dedos tremeram discretamente, antes de ela fechar as mãos em punhos e controlar o gesto.
            </p>

            <p className="text-darkred-400">
              — Tanto que... ao perder meu filho, depois de ter me transformado... aquilo foi um aviso. E eu quis ignorar. Dentro de mim, havia dúvida sobre ter ou não aquela criança. Mas meu subconsciente já sabia. Já queria.
            </p>

            <p className="text-darkred-400">
              — Porque, com aquela criança... eu poderia começar do zero. Longe das guerras, do sangue, das mortes. Eu poderia... enfim... ter uma vida simples. Mas não.
            </p>

            <p className="text-indigo-400">
              — Ele te amou primeiro. Mas ele não te amou como você é, Nadine. Ele amou suas habilidades. Sua trajetória. O amor que você sentiu por ele... foi moldado. Manipulado. Fabricado.
            </p>

            <p className="text-darkred-400">
              — Se você quer uma resposta direta, pragmática... — ela olhou nos olhos da outra — eu quero que ele pague. Quero que ele veja, com os próprios olhos, o rastro de destruição que deixou pra trás. E quero que essa destruição o consuma por completo.
            </p>

            <p className="text-indigo-400">
              — Se veio para um velório e me quer como celebrante, o farei. Mas eu não enterro defuntos que respiram. Nem partes de uma vida. Enterro cadáveres inteiros, visões, sonhos, fantasias. Com a terra da verdade. E peço que, por favor, NÃO DESPERDICE MEU TEMPO.
            </p>

            <p className="text-darkred-400">
              — Não vim aqui pra provar que sei andar em linha reta. A príncipe irá nomear um novo primogênito para o clã Brujah em breve.
            </p>

            <p className="text-indigo-400">
              — Você sabe que ele já tem peças demais no tabuleiro. Josephine, Eliel... a Espanha. Mas não se ele chegar primeiro. Precisamos agir. Agora.
            </p>

            <p className="text-darkred-400">
              — Eu vou entrar no jogo. Mas não como peça. Vou jogar por conta própria. Vou virar o tabuleiro, se for preciso.
            </p>

            <p className="text-indigo-400">
              Helena recolheu o braço, ela parece estar muito cansada. Nadine observou durante a alimentação que a pele de Helena parecia estar, de algum modo, morrendo.
            </p>

            <p className="text-indigo-400">
              — Durma aqui hoje. O refúgio da Coterie é o local mais seguro. Amanhã decidimos os próximos passos.
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
