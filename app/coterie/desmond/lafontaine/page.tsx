import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function LaFontainePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/coterie/desmond"
            className="mb-6 inline-flex items-center text-sm text-silver-200 hover:text-amber-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Desmond
          </Link>

          <article className="prose prose-invert max-w-none">
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">☠️</span>
                <h1 className="font-serif text-5xl font-bold text-silver-200 mb-0">
                  LaFontaine - O Coração Negro dos Mares
                </h1>
              </div>
            </header>

            <div className="space-y-12">
              <section>
                <h2 className="font-serif text-3xl font-bold text-silver-200 mb-6">
                  <strong>Navegando nas Trevas</strong>
                </h2>
                <div className="bg-midnight-800 p-6 rounded-lg mb-6">
                  <p className="text-gray-300 mb-4">
                    <strong>
                      Lafontaine tinha uma habilidade de manipulação preocupante, pra dizer o mínimo. Seu jeito bon vivant e segurança nas palavras parecem nos desarmar de questionamentos… junte isso à uma postura confiante e um sorriso de quem não se sente intimidado por nada… ele sabia induzir, sabia desarmar as pessoas antes de mesmo de um conflito iniciar. Hoje entendo o quão seu status de capitão encaixou tão bem com sua natureza.
                    </strong>
                  </p>
                  <p className="text-gray-300 mb-4">
                    <strong>
                      Imagine um homem, capaz de liderar um navio cheio de piratas por décadas, sem nunca ter sua posição desafiada, qual seria a dificuldade em me convencer a segui-lo? Enfim...
                    </strong>
                  </p>
                  <p className="text-gray-300 mb-4">
                    <strong>
                      Nas primeiras semanas ele me apresentou à sua tripulação, me ensinou muito sobre navegação, sobre liderar em alto-mar… e eu devo admitir que ele foi paciente em explicar, demonstrar e repetir. Esses ensinamentos duraram meses de conversa e ele havia designado alguns dos homens mais experientes para me acompanharem durante os dias. Ele estava cumprindo tudo que me prometera, estava me preparando para ser um pirata tão bom quanto ele e chegamos até a planejar navegarmos em dois navios realizando saques juntos pelos oceanos. Foi um começo muito bom, mas nada me preparou para o que ainda viria.
                    </strong>
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-serif text-2xl font-bold text-blood-500 mb-6">
                  <strong>O Primeiro Ataque</strong>
                </h3>
                <div className="bg-midnight-800 p-6 rounded-lg space-y-4">
                  <p className="text-gray-300">
                    <strong>Aprender as rotinas de um navio é fácil, elas se repetem diariamente e às vezes mais de uma vez por dia, mas a primeira vez que atacamos um navio foi inesquecível.</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>- “Desmond, se tivermos sorte, vou mostrar pra você tudo que poderá se tornar, no nosso próximo saque.”</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>
                      Com pouco mais de dois meses no mar, pelo que lembro, encontramos uma escuna portuguesa que rumava para o sul do equador. Lafontaine conseguia observar navios em qualquer escuridão, o que nos dava uma grande vantagem, mas naquela noite específica a lua estava cheia e nossa vantagem foi pequena. Então o Lua Negra se aproximou da escuna com bandeira de socorro médico, enquanto o imediato solicitava por socorro, Lafontaine era o “capitão ferido” que jazia em uma maca improvisada precisando de ajuda.
                    </strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>
                      Eu não tinha ideia do que veria, mas a tripulação assistia com uma expectativa visível em seus olhos. Eles não expressavam nenhum nervosismo ou medo mesmo na iminência de um combate, enquanto eu transbordava em expectativa.
                    </strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>
                      Uma vez transferido para a escuna, uma escuridão maciça começou a surgir e crescer no convés. Na época eu não fazia ideia do que ia acontecer, ele não havia me explicado nada daquilo e eu ainda estava aguardando como bobo alguma ordem de ataque.
                    </strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>
                      Aqueles minutos seguintes foram os mais tensos que senti na vida, eu via uma névoa extremamente densa tomando parte do navio e todas as pessoas lá dentro estavam em silêncio. Homens corriam da escuridão e outros empunhavam armas avançando para ela. Pouco a pouco, aquelas trevas desvaneceram e surgiram em outras partes do navio, deixando corpos espalhados em todo lugar.
                    </strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>
                      Quando a escuridão passou definitivamente, a maioria da tripulação estava espalhada morta pelo convés, os que sobreviveram se trancaram no interior no navio e somente Lafontaine comemorava empunhando uma espada no timão. Sem ninguém no controle do navio, a escuna estava à deriva e foi muito fácil o nosso navio abordá-lo e aprisionar o restante de sua tripulação.
                    </strong>
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-serif text-2xl font-bold text-silver-200 mb-6">
                  <strong>A Verdade Revelada</strong>
                </h3>
                <div className="bg-midnight-800 p-6 rounded-lg space-y-4">
                  <p className="text-gray-300">
                    <strong>Lafontaine exprimia seu sorriso de vitória, de satisfação, então levou um prisioneiro até sua cabine e me chamou, eu pensei que ele ia me ensinar como torturar ou interrogar alguém, mas não podia estar mais enganado...</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>- “Você viu? Até hoje, Desmond, você aprendeu a ser um marinheiro, eu lhe expliquei e tentei lhe ensinar tudo que poderia ser útil para você se tornar um capitão tão bom quanto eu, claro, ainda vai precisar melhorar com o tempo, mas é isso que quero lhe dar agora! Sabe o que você viu? Bem, você viu um homem, UM homem conquistar um navio sozinho e, lhe garanto garoto, você não viu nada ainda.”</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>- “Você quer ser um capitão Desmond? Você quer navegar com uma tripulação inteira sob suas ordens? Ter a força de 20 homens? Ser o senhor absoluto da escuridão?”</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>
                      Quem não queria? Eu ainda estava impressionado com aquilo tudo, ele só falou o que ele sabia que encheria meus olhos e eu desejaria. Mas fiquei tão hipnotizado com tudo aquilo que não perguntei o principal: Qual o custo?
                    </strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>
                      Então eu aceitei, e ele me disse que eu só precisaria de uma coisa: tempo! e era isso que ele ia me dar naquela noite…
                    </strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>
                      ...depois, quando recobrei a consciência, minhas mãos estavam sujas de sangue, minha boca com um gosto estranhamente agradável e era a noite seguinte… e aquele homem ainda amarrado estava em meus braços com uma ferida horrível em seu pescoço.
                    </strong>
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-serif text-2xl font-bold text-silver-200 mb-6">
                  <strong>Porto de Viana do Castelo</strong>
                </h3>
                <div className="bg-midnight-800 p-6 rounded-lg space-y-4">
                  <p className="text-gray-300">
                    <strong>Depois de meses no mar, eu sempre ficava um pouco ansioso em voltar à terra. Precisávamos abastecer o navio em tudo e, mesmo aquele já sendo o terceiro porto em que parávamos, também seria o que nos deixaria mais tempo em terra.</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>- “...hehehehe você viu como é fácil? Mostre um pouco de dinheiro e esses humanos lhe darão tudo que quiser… e o que não derem, Desmond, faça-os darem!”</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>- “Realmente, se não fossem outros de nós que tiveram suas cargas saqueadas e nos perseguem, seria até tedioso.”</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>- “hehehehe você está pegando o espírito da coisa! Veja!! mulheres, bebidas, aventuras e riquezas, o que poderia ser melhor que isso Desmond?”</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>- “Eu sei!” -respondeu arrancando uma fisionomia de surpresa dele. – “Fazermos tudo isso amanhã de novo.”</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>- “Bom… isso acontece com alguns de nós… nossas vidas anteriores vão sendo lentamente apagadas de nossas lembranças… você teve alguma má lembrança de sua vida passada?”</strong>
                  </p>
                  <p className="text-gray-300">
                    <strong>
                      Confesso que não tive coragem de pensar mais, eu estava trilhando um caminho doloroso e que não me levaria a lugar nenhum afinal. Eu tinha feito minha escolha e estava comprometido com aquilo, por mais que começasse a questionar.
                    </strong>
                  </p>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
