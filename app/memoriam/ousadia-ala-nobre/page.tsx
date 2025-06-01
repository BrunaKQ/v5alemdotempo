import Link from "next/link"
import { ArrowLeft, Crown, Users, MessageSquare } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function OusadiaAlaNobre() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link href="/memoriam" className="mb-6 inline-flex items-center text-sm text-silver-200 hover:text-amber-400">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para In Memoriam
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🎭</span>
              <h1 className="font-serif text-4xl font-bold text-silver-200">Ousadia em Ala Nobre</h1>
            </div>
            <p className="text-lg italic text-crimson-500 mb-2">Uma demonstração de insubordinação política</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Crown className="h-4 w-4 text-amber-500" />
                <span>Reunião da Camarilla</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4 text-silver-400" />
                <span>Mansão Bloodwood, Ala Leste</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4 text-blood-500" />
                <span>Nadine vs. Protocolo</span>
              </div>
            </div>
          </div>

          <article className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-silver-200 prose-p:text-gray-300 prose-strong:text-crimson-400 prose-em:text-amber-400">
            <div className="space-y-6">
              <div className="bg-midnight-800 p-6 rounded-lg border border-midnight-600">
                <h2 className="text-xl font-bold text-silver-200 mb-4">A Reunião</h2>
                <p>
                  Enquanto isso, na mansão Bloodwood, ala leste. Acontecia uma reunião de representantes da Camarilla,
                  incluindo um Nosferatu informante, um Ventrue ambicioso e uma Toreadora afiadíssima. O assunto se
                  tratava de alianças políticas na região, redistribuição de territórios e controle populacional de
                  neonatos.
                </p>
                <p>
                  Nadine está sentada no canto, instruída para <em>"ouvir, calar e aprender"</em>. Victor, como sempre,
                  falava com frieza aristocrática.
                </p>
              </div>

              <div className="my-8 border-l-4 border-amber-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>
                  — Precisamos reforçar o controle nos limites ao sul. Os Thin-Bloods têm se espalhado com facilidade
                  alarmante. Minha proposta é simples: contenção cirúrgica. — Ele pausou. — E silêncio.
                </p>
              </div>

              <p>A sala estava tensa.</p>
              <p>Victor ergueu um dedo. Ia continuar.</p>
              <p>Mas Nadine... tossiu.</p>
              <p>Uma vez.</p>
              <p>Duas.</p>
              <p>Três.</p>
              <p>Alto.</p>

              <hr className="my-8 border-midnight-600" />

              <h2 className="text-2xl font-bold text-silver-200 mb-6">A Interrupção</h2>

              <p>Victor virou o rosto devagar.</p>
              <p>Ela ergueu a mão como uma aluna querendo tirar dúvidas a um professor.</p>

              <div className="my-8 border-l-4 border-crimson-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>— Desculpa. Eu só... fiquei com uma dúvida…</p>
              </div>

              <p>O Nosferatu arregalou os olhos.</p>
              <p>A Toreadora mordeu o lábio inferior com um sorrisinho.</p>
              <p>Victor não disse nada. Apenas fitou.</p>

              <div className="my-8 border-l-4 border-blood-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p className="mb-2">
                  — Essa coisa de "contenção cirúrgica"... — ela começou e apoiou o cotovelo na mesa. — É tipo... matar
                  sem deixar bagunça?
                </p>
                <p>Silêncio.</p>
                <p>
                  — Porque assim... só pra entender: vocês estão planejando uma limpeza étnica com vocabulário gourmet,
                  ou é impressão minha?
                </p>
              </div>

              <div className="bg-midnight-900 p-6 rounded border border-midnight-600">
                <h3 className="text-lg font-semibold text-silver-300 mb-4">Reações dos Presentes</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    • <strong>A Toreadora:</strong> explodiu em risos abafados
                  </li>
                  <li>
                    • <strong>O Nosferatu:</strong> girou os olhos
                  </li>
                  <li>
                    • <strong>O Ventrue:</strong> pigarreou, constrangido
                  </li>
                  <li>
                    • <strong>Victor:</strong> fechou os olhos por um instante. Apenas um instante.
                  </li>
                </ul>
              </div>

              <div className="my-8 border-l-4 border-silver-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p className="mb-2">
                  — Nadine. — A voz dele cortou o ar, suave como navalha molhada. — Não era sua vez de falar.
                </p>
                <p>
                  — Ah, claro. Perdão. Eu só achei que, já que estou aqui aprendendo... podia aprender com contexto
                  histórico real. Tipo o Império Otomano.
                </p>
              </div>

              <p>O clima ficou gelado.</p>

              <div className="my-8 border-l-4 border-gothic-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>— Senhor Victor, acho melhor nós voltarmos uma outra hora.</p>
              </div>

              <p>
                Sem tempo para Victor se explicar ou se despedir, os três já haviam se dirigido à saída. Logo, ele
                caminhou lentamente até ela, com a mão nas costas da cadeira. Sorriso social intacto, esperou os três
                saírem e, ao sair, Victor voltou o olhar assassino, queimando por dentro, para Nadine.
              </p>

              <hr className="my-8 border-midnight-600" />

              <h2 className="text-2xl font-bold text-silver-200 mb-6">O Confronto</h2>

              <p>Na noite seguinte…</p>

              <div className="my-8 border-l-4 border-amber-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p className="mb-2">— Vamos conversar. Agora.</p>
                <p>— Claro. Mas só se for em "ambiente cirúrgico". — Ela piscou.</p>
              </div>

              <p>Seu maxilar travou.</p>

              <p>Já no escritório o mesmo fechou a porta. Ficaram frente a frente. Silêncio.</p>

              <div className="my-8 border-l-4 border-blood-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p className="mb-2">
                  — Por quê? — perguntou ele, contendo a imensa vontade de pôr as mãos nela, cruzando os braços para se
                  controlar.
                </p>
                <p>
                  — Você me mandou "observar e aprender". E eu aprendi que sua política é igual à de tiranos disfarçados
                  de senhores elegantes. — disse se fazendo de desentendida e vítima.
                </p>
                <p>— Você me envergonhou diante de anciões.</p>
                <p>
                  — Ah…sério…? Não pensei dessa forma… — ela deu aquele sorriso cínico. — Só verbalizei o que eles já
                  estavam pensando. Eu sou só sua cria, né? A imprevisível, a humana demais. Eu preciso aprender sobre
                  tudo, não é?
                </p>
              </div>

              <div className="my-8 border-l-4 border-silver-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>— Isso não vai se repetir. — afiado e cortante.</p>
                <p>Ela inclinou a cabeça, como uma loba farejando o limite.</p>
                <p>— Não, claro que não.</p>
              </div>

              <p>Victor não respondeu. Mas o olhar dele dizia que a noite dela seria longa.</p>
              <p>Ela desviou o olhar fingindo esta admirando a sala.</p>
              <p>— Sala interessante…</p>

              <p>Victor passou as mãos em seu cabelo lentamente, como quem contava até dez mil em latim.</p>

              <hr className="my-8 border-midnight-600" />

              <h2 className="text-2xl font-bold text-silver-200 mb-6">As Consequências</h2>

              <div className="my-8 border-l-4 border-crimson-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>
                  — Você tem noção do que causou? — ele perguntou, com as mãos cruzadas nas costas. — O Ventrue saiu
                  cuspindo maldições em alemão. O Nosferatu deixou um bilhete perguntando se você é parte da nova célula
                  anarquista. E a Toreadora quer te adotar.
                </p>
                <p>
                  — Adotar? — Nadine arregalou os olhos, teatral. — Jura? Sempre quis uma mãe que usasse batom carmim e
                  falasse "monstruosamente fabulosa" a cada três palavras.
                </p>
              </div>

              <p>Victor fechou os olhos. Um segundo. Só pra não arrancar os próprios tímpanos.</p>

              <div className="my-8 border-l-4 border-amber-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>— Nadine... você vai escrever uma carta de desculpas.</p>
                <p>— Manuscrita ou posso mandar por pombo correio? Já que estamos tãoooo aristocráticos ultimamente?</p>
              </div>

              <p>Ele se aproximou, lentamente.</p>
              <p>O silêncio pesava mais do que qualquer grito.</p>

              <div className="my-8 border-l-4 border-gothic-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>— Você acha isso engraçado? — ele murmurou, encarando-a de cima.</p>
                <p>— Na…Não, Senhor. — Ela ergueu o rosto, séria, por dois segundos engolindo seco.</p>
              </div>

              <hr className="my-8 border-midnight-600" />

              <h2 className="text-2xl font-bold text-silver-200 mb-6">O Castigo</h2>

              <p>Victor deu meia-volta, indo até a porta. Antes de sair, murmurou:</p>

              <div className="my-8 bg-midnight-900 p-6 rounded border border-blood-600">
                <p className="text-crimson-400 font-semibold">
                  — Vista-se. Você vai limpar toda a biblioteca da ala leste. Com uma escova de dentes. Aquela
                  escarlate, de cerdas rígidas com pelo de porco e marfim. Sozinha. Sem descanso. Até o amanhecer.
                </p>
              </div>

              <p>
                Nadine se sobressaltou com a batida seca na porta, mas logo relaxou os ombros ao perceber que, pelo
                menos desta vez, não era chamada para outro treinamento.
              </p>

              <div className="mt-8 bg-midnight-800 p-6 rounded border border-amber-600">
                <h3 className="text-lg font-semibold text-amber-400 mb-4">Reflexão</h3>
                <p className="text-gray-300 italic">
                  Esta história revela a natureza indomável de Nadine e sua recusa em aceitar silenciosamente as
                  práticas políticas que considera moralmente questionáveis. Mesmo sabendo das consequências, ela
                  escolhe a honestidade brutal sobre a diplomacia, demonstrando que sua humanidade ainda luta contra as
                  expectativas da sociedade vampírica.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
