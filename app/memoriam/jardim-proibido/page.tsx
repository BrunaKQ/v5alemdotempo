import Link from "next/link"
import { ArrowLeft, Heart, Mountain } from "lucide-react"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function JardimProibidoPage() {
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
              <span className="text-4xl">🌹</span>
              <h1 className="font-serif text-4xl font-bold text-silver-200">O Jardim Proibido</h1>
            </div>
            <p className="text-lg italic text-crimson-500 mb-2">Um conto de Nadine Anoura</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-blood-500" />
                <span>Nadine & Victor</span>
              </div>
              <div className="flex items-center gap-1">
                <Mountain className="h-4 w-4 text-silver-400" />
                <span>Montanhas do Norte da Itália</span>
              </div>
            </div>
          </div>

          <article className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-silver-200 prose-p:text-gray-300 prose-strong:text-crimson-400 prose-em:text-amber-400">
            <div className="space-y-6">
              <p>
                Foi durante o auge de uma primavera incomumente quente que Victor a levou para a mansão de sua família,
                nas montanhas do norte da Itália. A propriedade era imensa, severa, coberta por trepadeiras e cercada de
                histórias que Nadine mal ousava perguntar. Tudo ali era silencioso, antigo e vigilante como se os
                próprios retratos dos antepassados nas paredes observassem cada passo que ela dava.
              </p>

              <p>Mas foi ali, entre aquelas paredes rígidas, que ela viu um outro lado de Victor.</p>

              <p>
                Na segunda noite, ele a chamou sem aviso, guiando-a pelos corredores escuros, cruzando um salão fechado
                e empurrando uma porta de ferro escondida atrás de tapeçarias pesadas. Nadine pensou que era alguma
                missão, talvez um castigo por algo que havia feito… mas ao atravessar, ela encontrou um jardim secreto.
              </p>

              <p>
                Era um lugar fora do tempo flores que só desabrochavam à noite, estátuas antigas cobertas de musgo, e um
                lago pequeno com carpas silenciosas. No centro, uma cerejeira que, segundo ele, não deveria crescer ali
                mas crescia mesmo assim.
              </p>

              <div className="my-8 border-l-4 border-crimson-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p className="mb-2">
                  — Meu pai odeia esse jardim. — Ele disse, com um sorrisinho quase infantil. — Diz que coisas que não
                  seguem regras devem ser arrancadas pela raiz.
                </p>
                <p className="mb-2">— E por que você o mantém? — Ela perguntou.</p>
                <p>Victor olhou para a cerejeira, depois para ela. — Porque certas coisas... valem a desobediência.</p>
              </div>

              <p>
                Ela riu. Pela primeira vez em semanas. Ele a olhou com surpresa e, pela primeira vez, não foi ameaça,
                nem controle, nem cálculo. Foi... humano. E então ele riu também um som grave e abafado, que ela jamais
                esqueceria.
              </p>

              <p>
                Mais tarde, ele tentou ensinar Nadine a dizer <em>"estupida ma incantevole"</em> (estúpida, mas
                encantadora) em italiano frase que ele usou para provocá-la após ela errar o nome de um prato
                tradicional famoso na Itália, na frente de um dos tios dele. Ela o empurrou levemente, ele fingiu cair.
                Eles brincaram como se fossem só dois jovens em um jardim proibido.
              </p>

              <p>
                No fim daquela noite, sozinha em um quarto, enquanto ela se deitava entre os lençóis caros e frios da
                mansão, Nadine pensou que talvez houvesse algo dentro de Victor que ainda lutava para existir. E isso a
                matou um pouco por dentro. Porque era esse "talvez" que a fazia hesitar.
              </p>

              <hr className="my-8 border-midnight-600" />

              <h2 className="text-2xl font-bold text-silver-200 mb-6">O Precipício</h2>

              <p>
                Na brisa fria do entardecer da noite seguinte cortava o silêncio como uma lâmina, carregando o cheiro
                salgado do mar e o sussurro antigo das montanhas. Ali, no alto do precipício atrás da mansão, o mundo
                parecia longe demais até mesmo para dois seres imortais. O sol se punha devagar, tingindo o céu de
                cobre, púrpura e sangue. A última luz refletia no mar revolto abaixo, como um espelho partido.
              </p>

              <p>
                Nadine estava de pé, descalça sobre a pedra gélida, com o vestido leve esvoaçando em torno de suas
                pernas. Tecido branco e fino, quase etéreo, como se tivesse sido feito do próprio vento. O decote
                deixava parte das costas exposta, e seu cabelo dançava solto, rebelde. Ela parecia tão parte da paisagem
                quanto a falésia em si, bela, firme, à beira de despencar.
              </p>

              <p>
                Victor a observava em silêncio. O sobretudo escuro batia com força contra o corpo alto, os olhos
                semicerrados diante da ventania.
              </p>

              <div className="my-8 border-l-4 border-silver-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p className="mb-2">— Vai pular? — ele perguntou, sem emoção aparente, como quem comenta o tempo.</p>
                <p className="mb-2">
                  — Não, apenas estou observando o quão lindo e assustador o abismo pode ser. — ela respondeu, sem se
                  virar, a voz leve, mas com a lâmina oculta.
                </p>
                <p>
                  Ele sorriu, de canto. — E o abismo está te olhando de volta. Deve estar pensando a mesma coisa que
                  você.
                </p>
              </div>

              <p>Silêncio. Apenas o vento.</p>

              <p>
                Ela finalmente o encarou. Havia algo nos olhos dela que não existia antes, não só mágoa, mas lucidez.
              </p>

              <div className="my-8 border-l-4 border-amber-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p className="mb-2">
                  — Por que me trouxe aqui, Victor? Esse lugar é seu santuário. A última coisa que combinamos foi o
                  silêncio.
                </p>
                <p className="mb-2">
                  Ele se aproximou devagar, os passos ecoando na rocha como um lamento antigo. Parou a poucos metros
                  dela, olhos fixos em seu rosto. — Talvez eu quisesse lembrar o que deixei para trás.
                </p>
                <p>— Ou o que quebrou. — ela rebateu.</p>
              </div>

              <p>O mar rugiu abaixo, como se respondesse por ele.</p>

              <div className="my-8 border-l-4 border-blood-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>
                  — Este precipício. — Ele disse, olhando além dela. — É onde meu avô se jogou. Dizem que foi por amor.
                  Mas ele sobreviveu. Voltou... e matou quem amava.
                </p>
                <p>
                  — Bonita história de família. — Nadine murmurou, virando-se para o mar de novo. — A sua linhagem é
                  mesmo especialista em matar o que não entende.
                </p>
              </div>

              <p>
                Victor suspirou e se aproximou mais, parando atrás dela — tão perto que o frio da sua presença queimava
                a nuca de Nadine, provocando um arrepio involuntário.
              </p>

              <div className="my-8 border-l-4 border-gothic-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>
                  — Nadine... — murmurou, com a voz arrastada, densa. — Depois que você me conheceu… viu o que eu sou, o
                  que faço. Você sabe. Te deixar ir, livre desse jeito... indomável como é… seria perigoso demais. Para
                  nós dois.
                </p>
                <p>Ela virou-se lentamente, os olhos fixos nos dele, carregados de uma dor antiga e íntima.</p>
                <p>— Eu sei. É por isso que foi tão cruel.</p>
              </div>

              <p>
                Por um instante, os dois ficaram ali, presos entre o céu e o abismo, entre palavras que não sabiam como
                existir. Ela era a brisa rebelde e ele era a muralha de pedra. Mas até a pedra se desgasta com o
                tempo... e o vento.
              </p>

              <hr className="my-8 border-midnight-600" />

              <h2 className="text-2xl font-bold text-silver-200 mb-6">Confissões ao Luar</h2>

              <p>
                Ele ergueu a mão, lentamente, e afastou uma mecha do cabelo dela que o vento insistia em trazer para o
                rosto. — Você parece parte disso tudo, Nadine. Selvagem. Indomável. Luminosa mesmo na escuridão que te
                cerca.
              </p>

              <p>Ela não recuou.</p>

              <p>
                — E você parece alguém que finge que não sente... só pra não quebrar. Pra sustentar essa máscara de
                autoridade. — ela sussurrou.
              </p>

              <p>O céu agora era noite, e a lua começava a nascer sobre o mar.</p>

              <p>
                Eles permaneceram ali, à beira de tudo — sem beijo, sem toque — mas com algo mais denso que qualquer
                carícia.
              </p>

              <div className="my-8 border-l-4 border-silver-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p className="mb-2">
                  — Se eu pedisse desculpas... — ele murmurou, a voz quase tragada pelo vento. — Isso mudaria alguma
                  coisa?
                </p>
                <p className="mb-2">
                  Ela sorriu, um sorriso melancólico, e o devolveu com a mesma pergunta que já havia feito antes. Mas
                  agora, mais do que uma resposta, era uma condição silenciosa, um espelho.
                </p>
                <p>— Isso te mudaria?</p>
              </div>

              <p>Victor não respondeu. E pela primeira vez... não saber foi a resposta que mais doeu.</p>

              <p>
                A noite já havia engolido o horizonte, e o mar, lá embaixo, rugia como se quisesse lembrar que era
                antigo demais para se importar com dramas de vampiros e humanos.
              </p>

              <hr className="my-8 border-midnight-600" />

              <h2 className="text-2xl font-bold text-silver-200 mb-6">A Verdade do Precipício</h2>

              <p>
                Nadine permanecia ali, à beira do precipício, sentindo o vento chicotear seu vestido leve. O tecido
                branco flutuava como se quisesse levá-la de volta para o tempo em que ainda não conhecia a escuridão.
                Mas agora ela a conhecia. E estava diante dela.
              </p>

              <p>Victor não se aproximou imediatamente. Ele ficou observando.</p>

              <p>
                Observando como ela desafiava o abismo sem medo. Como a luz da lua recortava suas curvas com precisão.
                Como o vento parecia respeitá-la — ou temê-la.
              </p>

              <p>E por um segundo, ele odiou aquilo.</p>

              <p>Odiou... porque ela continuava sendo livre.</p>

              <div className="my-8 border-l-4 border-crimson-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>Quando finalmente falou, sua voz veio baixa, arrastada, como se fosse arrancada de dentro.</p>
                <p className="mb-2">— Você me assombra.</p>
                <p>Nadine não se virou. Apenas respondeu: — Você é quem nunca me deixou partir.</p>
              </div>

              <p>
                Ele andou. Passo após passo. A poeira de pedra rangia sob seus sapatos. O peso da confissão curvava seus
                ombros.
              </p>

              <div className="my-8 border-l-4 border-amber-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>
                  — Você quer saber por que eu te trouxe para cá? — parou ao lado dela, os olhos voltados ao mar, mas a
                  alma inteira virada para ela. — Porque este é o lugar da minha verdade. Onde tudo o que eu finjo
                  ser... precisa se calar.
                </p>
                <p className="mb-2">Ela o olhou de soslaio, os olhos afiados como lâminas de prata.</p>
                <p className="mb-2">— E o que você é, Victor, quando cala o fingimento?</p>
                <p>Ele hesitou. Um instante. Talvez dois. Então disse:</p>
                <p>— Um homem que não se parece em nada com o pai.</p>
              </div>

              <p>Silêncio.</p>

              <p>As ondas batiam. As folhas sussurravam. O coração dela apertou — mesmo sem bater.</p>

              <div className="my-8 bg-midnight-900 p-6 rounded border border-midnight-600">
                <h3 className="text-lg font-semibold text-silver-300 mb-4">A História dos Bloodwood</h3>

                <p className="mb-4">
                  — Marino Bloodwood é um político brilhante. Um magnata refinado. E um marido distante.
                </p>

                <p className="mb-4">A voz dele era vazia, como se narrasse a história de outro homem.</p>

                <p className="mb-4">
                  — Ele escolheu uma mulher belíssima para esposa. Mas não fazia ideia do que ela fazia para sobreviver.
                  Achava que amor, lealdade e tudo o que podia oferecer seriam suficientes para mudá-la. E funcionou…
                  por um tempo. Mas ela se entediou. Teve casos com homens da cidade… e flertava até com os próprios
                  filhos.
                </p>

                <p className="mb-4">
                  Ele fechou os olhos por um segundo, e ao abrir os ja estavam em algum ponto além do horizonte.
                </p>

                <p className="mb-4">
                  — Eu fui um deles. Meu pai sabia. Aguentou calado. Foi fiel até o fim. Nunca encostou um dedo nela.
                  Mas quando ela começou a agir por conta própria, a pensar por si… ele a destruiu. Não sei como. Só sei
                  que os boatos o consumiam. A aparência, para nós, os Bloodwood, é tudo. E mesmo amando-a… ele fez o
                  que achava necessário. Ou talvez tenha sido apenas um tolo apaixonado demais.
                </p>
              </div>

              <p>Nadine engoliu seco.</p>

              <div className="my-8 border-l-4 border-blood-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>
                  — Eu nunca quis repetir isso — continuou Victor. — Mas quando você apareceu… com aquela maldita
                  teimosia, com esse brilho nos olhos, mesmo depois de perder tudo… eu disse a mim mesmo que era apenas
                  estratégia. Uma aliada. Uma peça poderosa para enfrentar a corte. Uma imagem de força.
                </p>
                <p>Ele riu, amargo.</p>
                <p>
                  — Mas não era só isso. Você é tudo o que meu pai jamais teria permitido ao meu lado. Você é indomável.
                  É fogo. E eu… sou feito de gravetos secos demais para resistir. Você me destruiria, como minha mãe
                  destruiu o meu pai. Mas ele cometeu o erro de não colocar limites.
                </p>
              </div>

              <p>Ela se virou para ele. Agora estavam frente a frente, a poucos passos do abismo.</p>

              <div className="my-8 border-l-4 border-silver-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>— E é por isso que me mantém sob seus olhos?</p>
                <p>Victor a encarou. A mandíbula tensa. Os olhos carregando séculos de maldição.</p>
                <p>
                  — É por isso que eu te quis por perto. Porque você me lembra de quem eu poderia ter sido, se não
                  tivesse sido moldado assim. Porque quando você me enfrenta, quando me odeia... eu me sinto vivo.
                </p>
                <p>Deu um passo à frente. Ela não recuou.</p>
                <p>
                  — Mas também te mantive porque queria provar que sou melhor que ele. Que eu poderia ter alguém como
                  você... sem me quebrar.
                </p>
                <p>Um segundo de olhar.</p>
                <p>
                  — E no fundo — ele sussurrou — eu sabia que essa era a pior mentira que eu contava para mim mesmo.
                </p>
              </div>

              <p>
                O sangue antigo ferveu nas veias imortais de Nadine. Ela não estava diante de um homem que a amava.
                Estava diante de alguém que a desejava por espelho, por resgate, por orgulho.
              </p>

              <p>E talvez… por tudo isso junto. Um amor disfuncional e visceral. Que queimava em vez de aquecer.</p>

              <hr className="my-8 border-midnight-600" />

              <h2 className="text-2xl font-bold text-silver-200 mb-6">Chamas Indomáveis</h2>

              <p>Ela se aproximou, o rosto a centímetros do dele.</p>

              <div className="my-8 border-l-4 border-crimson-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>
                  — Não somos nada, Victor. E se um dia formos alguma coisa... saiba que, mesmo que tente me manter sob
                  seus olhos, sua coleira ou qualquer outra ilusão de controle... vai precisar de muito mais para me
                  segurar.
                </p>
              </div>

              <p>
                Aquela era a mulher que havia lutado pela Espanha em tempos de escuridão. Que sacrificou tudo para
                sobreviver. E mesmo quando tudo era desespero, ela brilhou como uma estrategista nata.
              </p>

              <p>Victor sabia. Sabia que ao levá-la ao limite, ela revelava o melhor de si. Sua arma secreta.</p>

              <div className="my-8 border-l-4 border-amber-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>
                  — …eu não vou parar de queimar até que você entenda que não pode apagar minhas chamas. Nem você. Nem
                  ninguém.
                </p>
              </div>

              <p>Três segundos de um olhar insustentável.</p>

              <div className="my-8 border-l-4 border-gothic-600 pl-6 bg-midnight-800 p-4 rounded-r">
                <p>
                  — Pensamos iguais — ele disse, com voz carregada de ironia e dor contida. — Você já carrega tudo que
                  eu poderia desejar, só precisa aceitar o que ainda falta. Mas lembre-se, <em>Nade</em>... no final, eu
                  sempre saio por cima, custe o que custar
                </p>
              </div>

              <p>
                Nadine e ele ficaram em silêncio, cada um com seus próprios demônios, ele seguro da vitória e ela, firme
                na luta.
              </p>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
