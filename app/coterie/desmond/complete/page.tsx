import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function DesmondCompletePage() {
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
                <span className="text-5xl">😎</span>
                <h1 className="font-serif text-5xl font-bold text-silver-200 mb-0">
                  Desmond Dupret Legrand (Lasombra)
                </h1>
              </div>
            </header>

            <div className="space-y-12">
              <section>
                <h2 className="font-serif text-3xl font-bold text-silver-200 mb-6">
                  <strong>1781 - </strong>
                  <em>O herdeiro das sombras</em>
                </h2>

                <div className="mb-6">
                  <Image
                    src="/images/desmond-1.jpg"
                    alt="Desmond Dupret Legrand"
                    width={518}
                    height={600}
                    className="rounded-lg"
                  />
                </div>

                <div className="bg-midnight-800 p-6 rounded-lg mb-6">
                  <p className="text-gray-300 mb-4">
                    <strong>
                      A história de Desmond começa com um francês que ousou viajar com sua família para a América e
                      levar para lá seu negócio de bebidas. Levar sua família e todo seu negócio para o outro lado do
                      oceano custou caro, mas o avô de Desmond conseguiu se estabelecer, pagar as dívidas, e sustentar a
                      família. O exemplo de trabalho e perseverança marcou seus filhos, inclusive Paul, que alimentava a
                      ideia de expandir por toda costa leste os negócios de seu pai.
                    </strong>
                  </p>

                  <p className="text-gray-300 mb-4">
                    <strong>
                      Trabalhando juntos, os irmãos deram continuidade aos negócios do pai e tiveram que lidar com suas
                      diferenças sem por tudo a perder. Foi uma época de muito aprendizado e união, qualidades que
                      ajudaram muito os irmãos quando tiveram que se despedir do velho August (seu pai). Como a
                      imigração francesa se mostrava maior ao norte, Paul acreditava que quanto mais ao sul fosse, mais
                      valiosas seriam suas bebidas. Motivado pelo exemplo de seu finado pai e após seu falecimento, Paul
                      viajou com sua esposa para o sul da costa leste, onde finalmente encontrou lugar para estabelecer
                      seu negócio, sempre motivado pelo exemplo empreendedor e coragem de August.
                    </strong>
                  </p>

                  <p className="text-gray-300 mb-4">
                    <strong>
                      Agora podemos contemplar melhor o cenário em que Desmond nasceu: Ele e suas duas irmãs fizeram
                      parte da primeira geração nascida nos EUA, uma geração que ainda tinha forte influência francesa,
                      já que seu pai valorizava muito sua cultura e tradição. Os três aprenderam francês com seus pais,
                      frequentavam todos os eventos culturais que surgiam e em poucos momentos, conseguiram receber a
                      visitas de tios e primos que vinham do norte.
                    </strong>
                  </p>

                  <p className="text-gray-300 mb-4">
                    <strong>Mas então, Desmond encontrou Lafontaine…</strong>
                  </p>

                  <p className="text-gray-300 mb-4">
                    <strong>
                      LAFONTAINE não foi sempre um pirata, mas não se recorda da época em que não fora. Seu espírito
                      aventureiro, corajoso e sempre sedento por aventuras foi o palco perfeito para ser recrutado nas
                      fileiras Lasombra. Dessa forma, Lafontaine fora abraçado para se tornar uma ferramenta e uma arma
                      no mar. Talvez, o único problema, era de que as expansões marítimas e piratagem nunca tiveram fama
                      de promover algum nome cainita a qualquer legado. Todos os méritos, de todas as conquistas, foram
                      sempre dados ao clã e seus atores acabavam por ser esquecidos ou nem lembrados.
                    </strong>
                  </p>

                  <p className="text-gray-300 mb-4">
                    <strong>
                      Depois de tantos anos, saqueando, conquistando e desbravando, Lafontaine percebeu que as fileiras
                      estavam diminuindo. Cada vez menos vampiros se aventuravam nos oceanos e, os poucos que ele
                      conhecia, estavam encontrado a morte final ou deixando os mares. O que antes era visto como seu
                      lar, seu campo de desafios e conquistas, estava se tornando monótono, silencioso e deprimente. A
                      apatia era como um assassino silencioso que esperava pacientemente Lafontaine se distrair para
                      surpreendê-lo com um golpe final. Suas conquistas perdiam o valor; não havia a quem se gabar, não
                      havia com quem relembrar tantas histórias vividas em séculos, porque nem mesmo seus melhores
                      homens o acompanhavam durante o tempo. Foi quando o pirata decidiu ter sua progênie, abraçar
                      alguém que pudesse acompanhá-lo e até fortalecer-se para enfrentar as mudanças que surgiam.
                    </strong>
                  </p>

                  <p className="text-gray-300 mb-4">
                    <strong>Na costa dos EUA, Lafontaine encontrou Desmond…</strong>
                  </p>

                  <p className="text-gray-300 mb-4">
                    <strong>
                      Um americano descendente de europeus, que falava mais de uma língua, negociava bebidas e fretes
                      com marinheiros e capitães de navios, estava perfeito para ser lapidado. Não foi difícil para
                      Lafontaine convencê-lo a lhe seguir com proposta de riquezas e negócios ainda mais vantajosos, ao
                      custo de sua dedicação. Assim Lafontaine partiu já com sua cria, ensinando-lhe a sobreviver no
                      mar, a impor sua autoridade e respeito sobra a tripulação e revelando a realidade obscura de sua
                      nova natureza.
                    </strong>
                  </p>

                  <p className="text-gray-300 mb-4">
                    <strong>
                      No início, toda aquela realidade encheram os olhos de Desmond. Os vários saques, os combates
                      contra navios militares, as negociações em portos por inúmeros lugares, as línguas, o ouro, as
                      comemorações, as mulheres e… o sangue. Tudo parecia uma história fabulosa, mas a verdade
                      sanguinária estava sempre presente. Não era uma vida de riquezas, de luxo ou qualquer tipo de
                      glamour, mas de um desprezo profundo pela vida. De um ser que cruzava o oceano em busca de sangue,
                      não dando nenhuma importância às vidas: sem relutância, sem remorso.
                    </strong>
                  </p>

                  <p className="text-gray-300 mb-4">
                    <strong>
                      Quando esse vestígio de humanidade foi encontrado, Desmond temeu. Sua relutância foi percebida
                      rapidamente por Lefontaine, que o forçou a mergulhar ainda mais na sua escuridão interna, mas por
                      mais que seu Senhor tentasse, havia uma tênue luz naquela escuridão que Desmond não queira largar.
                      Foi quando Lafontaine decidiu retornar ao começo e observar onde havia errado. Ambos regressaram
                      aos EUA, em uma viagem sofrível para Desmond. O mar lhe repelia, não era seu lar como Lafontine
                      tanto havia repetido, mas um caixão de água onde tudo que seu pai o ensinara poderia ser
                      enterrado. Ao chegar no Novo Continente, Desmond estava fraco como nunca se sentiu antes. Suas
                      forças físicas, seu ânimo e sua mente, tudo nele parecia definhar, ao mesmo tempo em que as piores
                      lembranças de suas viagens se repetiam em sua cabeça como um pensamento intrusivo insistente.
                    </strong>
                  </p>

                  <p className="text-gray-300 mb-4">
                    <strong>
                      Enquanto sua mente e espírito viviam um luto pessoal, seu senhor o observava e percebia que sua
                      cria estava para dar um passo importante. Por muito tempo Desmond foi ensinado, influenciado,
                      instigado nos sonhos e planos do pirata, mas naquele momento ele estava vendo o que havia se
                      tornado com seus próprios olhos. Lafontaine não sabia o que desejar: se por um lado, Desmond
                      abraçasse o que se tornara e tudo que ele lhe havia ensinado, sua cria seria uma cópia dele mesmo
                      e Lafontaine não poderia reclamar disso; mas se, por um acaso ele rejeitasse tudo, teria coragem
                      de enfrentá-lo? Ou deveria se orgulhar disso?
                    </strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Desmond passou todo o tempo que pôde em terra pensando sobre tudo aquilo. Ele não conseguia se
                      imaginar no mar mais, no entanto, teria que enfrentar seu Senhor para isso. Chegar às vias de fato
                      contra Lafontaine seria o mesmo que clamar pela morte, mas demonstrar covardia ou estupidez seria
                      ainda pior. Lembranças do que havia vivido passaram pela sua cabeça, o Lune Noire (navio), sua
                      tripulação, as cidades e bares que conheceu… até que suas lembranças de pirata pararam em uma
                      garrafa. Uma garrafa de bebida que o fez lembrar e entender que não foi Lafontaine que o tornou o
                      que ele era. Sua esperteza foi ensinada no tempo em que ele e seu pai negociavam nos portos e
                      estabelecimentos comerciais, sua coragem foi formada em cada provocação dos americanos por eles
                      serem imigrantes, sua ousadia foi herdada de seus pai que já herdara de seu avô e sua
                      determinação… ia ser provada ao enfrentar seu Senhor.
                    </strong>
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-serif text-2xl font-bold text-blood-500 mb-6">
                  <strong>A DESPEDIDA</strong>
                </h3>

                <div className="bg-midnight-800 p-6 rounded-lg space-y-4">
                  <p className="text-gray-300">
                    <strong>Seria uma noite bem silenciosa naquela parte da cidade, a noite</strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>Você só pode estar brincando!</strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>Você sabe que eu não brincaria com isso.</strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        Eu cruzei esse maldito oceano! Escolhi você para compartilhar do maior dom! Poderíamos conhecer
                        tudo, fazer tudo, e agora você se acovarda?
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Aquelas palavras atingiram em cheio Desmond, mas ele sabia que não foram por acaso, seu senhor
                      estava querendo tirá-lo de sua postura defensiva e abalar seu foco. Era tanto um teste quanto uma
                      provocação. O segundo de relutância foi suficiente para mostrar que Desmond estava pensando no que
                      dizer.
                    </strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>Sempre foi um projeto seu, que me maravilhou no começo, mas agora não.</strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        E o que você pensa em fazer aqui? Nessa cidade de negros mendigos, brancos gordos e imbecis
                        comerciantes esnobes? Não há futuro aqui, está claro.
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        Ainda há muito que pode ser feito, além de que: estas terras são enormes, não preciso morar em
                        um navio para conhecer nada novo.
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        Incrível… o jovem Desmond que conheci era mais pretensioso, eu até achei que tinha encontrado um
                        visionário, como eu. Vamos Desmond, deixe de infantilidade.
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>O silêncio e leve meneio negativo foram as únicas respostas.</strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        Eu não acredito que alguma dessas putes tenha feito sua cabeça. Vai ficar por causa daquele
                        delegado? Ou aquele soldadinho bâtard?
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Mais uma armadilha de Lafontaine! Apesar de Desmond ter uma certa admiração por ambos, eles não
                      eram o motivo de sua decisão, mas o próprio Desmond não tinha certeza disso, o que sabia, é que
                      precisava responder rapidamente e sem qualquer vestígio de sentimentos, ou Lafontaine os mataria
                      ainda naquela noite.
                    </strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>Não, não há nada de interessante neles. Nada que realmente valha a pena.</strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>E esse sorriso?</strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        Lembrei-me daquele militar… uma criatura tão pífia, mas que lhe deixou sem respostas não foi?
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Desmond precisava mudar o foco, não podia ficar nas cordas daquele ringue a noite toda. Então
                      chamou atenção para um mortal que realente não significava nada, mas que lhe deu um motivo pra
                      cutucar o frágil orgulho de seu senhor. Alimentado pela raiva e contrariedade, Lafontaine não
                      percebeu a estratégia e caiu perfeitamente. O Senhor segurou sua cria pelo colarinho com uma força
                      desumana e com suas presas já a mostra e seus olhos tomados pela escuridão, arremessou-o para um
                      lado da sala certificando-se que Desmond quebraria vários móveis no caminho.
                    </strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        Ele será minha última refeição entes de deixar essa terre maudite! E como punição por esta
                        insolência, também matarei todos de SUA família.
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        Mate-os… (disse Desmond ainda caído) ...mas me diga uma coisa: caso eu mude de ideia, como posso
                        encontrá-lo?
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>hahahaha… não pode. Sou um pirata, sei viajar e só ser encontrado quando desejo.</strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Enquanto Lafontaine se regozija em pensar que finalmente tinha plantado uma dúvida na mente de sua
                      cria, Desmond se parabenizava por tirá-lo daquele crescente de fúria. Ele conseguiu.
                    </strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        Eu irei para Houston, mas provavelmente seguirei para o sul, dizem que estas terras e litoral
                        não acabam. Vou ver com meus próprios olhos. Já viu índios de verdade? Em suas próprias terras?
                        Seríamos deuses entre eles.
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>Não, você me mimou demais com todo esse luxo. Mas tenha uma boa viagem.</strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        Tudo isso vai acabar mais cedo do que você pensa Desmond. Em 20 nos, no máximo, você vai ter que
                        sair daqui. Leve seu dinheiro para continuar vivendo bem em outros lugares. Se não for comigo,
                        será sozinho.
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Desmond se levanta batendo a poeira de suas vestes e tentando tomar a pose mais determinada
                      possível. -Não sei se você me queria como uma mascote sua sempre ao seu lado, mas não é isso que
                      desejo. Preciso mostrar pra nós dois que sua escolha não foi errada, nem minha decisão em aceitar
                      sua oferta de imortalidade.
                    </strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>
                        Desisto. Faça o que bem entender então. O coração de um vampiro do mar não pode viver sempre na
                        terra, talvez meu erro tenha sido esse. Você mal sabe nada, se é que sabe! E eu preciso retomar
                        a desbravar, existo pra isso, e uns dizem que nosso clã surgiu com esse objetivo. Adeus Desmond.
                      </strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>- </strong>
                    <em>
                      <strong>Adeus Lafontaine.</strong>
                    </em>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Finalmente aliviado, Desmond sentiu esvair parte da pressão, mas sabia que tudo só estaria
                      realmente resolvido depois que seu Senhor estivesse longe.
                    </strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Em contra partida, coberto pela escuridão da noite, nem um ótimo observador conseguiria notar o
                      leve sorriso do pirata que tinha acabado de testar sua cria e vira que ele estava pronto pra
                      "viver" por si só.
                    </strong>
                  </p>
                </div>
              </section>

              <section>
                <h3 className="font-serif text-2xl font-bold text-silver-200 mb-6">
                  <strong>ENTRE A SOMBRA E A ESCURIDÃO:</strong>
                </h3>

                <div className="bg-midnight-800 p-6 rounded-lg space-y-4">
                  <p className="text-gray-300">
                    <strong>
                      Não há um sentimento de ódio entre criador e criatura, mas uma cumplicidade e constante provação.
                    </strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Desmond foi a única cria de Lafontaine, que depositou muitas expectativas nele e se frustrou bastante quando viu sua cria escolher um caminho totalmente diferente do que ele havia planejado. No entanto, essa frustração também carrega uma certa admiração que nunca vai ser admitida: enquanto Lafontaine se tornou tudo aquilo para que ele foi criado, sua cria ousou desafiá-lo na escolha de seu próprio destino. Sem "declarar guerra" ou inimizade, Desmond sempre dirigiu o respeito devido ao Senhor e deixou bem claro que suas escolhas não partiam de qualquer influência que pudesse ferir sua autenticidade, no entanto, Lafontaine se sente no dever de provocar Desmond; de buscar uma falha em sua argumentação ou tirá-lo de sua zona de conforto para que ele demonstre alguma fraqueza e cometa um erro em seus argumentos.
                    </strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Talvez o próprio Lafontaine tenha errado em pensar que havia algum brio de pirata em sua cria mas, com certeza, acertou em fazer dele um Lasombra e isso lhe orgulha de certa forma. argumentos.
                    </strong>
                  </p>

                  <p className="text-gray-300">
                    <strong>
                      Desmond viveu por muito tempo no mundo de seu Senhor, até o momento em que percebeu que Lafontaine estava irremediavelmente destinado a continuar a ser o que sempre foi. No entanto, o pirata não conhecia regras nem autoridade, achava-se dono do mar e invencível nele. Os portos não passavam de postos de luxuria e troca de mercadorias, além de uma fonte exótica, constante e abundante de sangue. Lafontaine vivia pra si, e mesmo o abraço de Desmond somente se explicara como sendo pra satisfazer um desejo ou curiosidade dele. Quando Desmond conseguiu enxergar essa verdade, ele também viu que não queria se tornar aquilo. Seu lugar não era no mar e o mar não o queria. Distanciar-se de seu Senhor foi necessário, pois a mera referência de seu nome poderia gerar problemas e Desmond sempre tem evitado falar de sua linhagem.
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
