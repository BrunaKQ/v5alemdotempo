import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function Nadine30101929Page() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/roleplay"
            className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-amber-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Roleplay
          </Link>

          <h1 className="font-serif text-4xl font-bold text-silver-200">Nadine</h1>
          <p className="italic text-dodgerblue-500 mt-2">Um conto de Nadine Anoura</p>

          <article className="prose prose-invert prose-p:text-gray-300 prose-strong:text-crimson-400 prose-em:text-amber-400 mt-8 space-y-6">
            <p>
              NADINE entrou no refúgio da coterie e chamou por um de seus companheiros de trabalho. Ninguém respondeu. O silêncio absoluto denunciava que estava sozinha. Fechou a porta atrás de si, trancou-a com firmeza, pressionou os lábios para conter o choro... mas não conseguiu. As lágrimas romperam a muralha da contenção enquanto apoiava a testa contra a madeira fria, segurando a maçaneta como se ela fosse a única âncora à realidade.
            </p>

            <p>
              Vestia um traje executivo elegante, provocativo. O decote delineava seus seios com uma ousadia calculada. No pescoço, uma corrente com cruz pendia, e brincos longos balançavam com leveza. Seus cabelos estavam perfeitamente penteados, presos num coque alto e rígido como a máscara que costumava vestir em público.
            </p>

            <p>
              Ainda com as lágrimas escorrendo pelo rosto, Nadine se dirigiu ao banheiro. Tomou um banho breve, sem pressa. Cada gota que caía era um lamento silencioso. Em seguida, andou até um quarto vago, abriu o armário e procurou algo confortável. Encontrou uma camisola branca, simples demais para os padrões da época, mas apropriada para o momento. Soltou os cabelos e sentou-se na beira da cama, o rosto inexpressivo. Apenas o vazio preenchia seu olhar — um vazio carregado de dor.
            </p>

            <p>
              Naquela noite, por mais difícil que fosse aceitar, ela sabia: havia feito a escolha certa. E, mesmo assim, chorou. Chorou muito. Chorou por Victor. Por tudo o que tinham construído e destruído.
            </p>

            <p>
              Ela poderia tê-lo comunicado. Poderia ter dividido a decisão. Mas o que ele faria? Ele desejava o trono, a cadeira, o poder. E ela? Ela havia prometido ajudá-lo, prometido tornar seu nome conhecido por todas as regiões. Em troca, ele lhe daria conhecimento, poder, tudo o que ela sonhava. Um contrato de conveniência. Mas quem quebrou esse acordo? Foi Nadine.
            </p>

            <p>
              Ela, que sempre prezou pela palavra dada — seu pai, a teria repreendido por quebrá-la. E mesmo assim, fez. Porque dentro dela havia algo mais forte que a lealdade a Victor: o desejo de proteger os inocentes. De lutar por justiça. De salvar vidas. Isso gritou mais alto do que qualquer juramento.
            </p>

            <p>
              Ela aprendeu a amar Victor. Amou sua família. Amou o pouco tempo que teve para cuidar de todos. E, ainda assim, perdeu tudo. Primeiro seu pai. Depois seu filho. Por fim, o marido. E agora... agora ela nem sabia se ele seria capaz de perdoá-la.
            </p>

            <p>
              Mas ele era Victor Bloodwood.
            </p>

            <p>
              Ela sabia que podia derrotá-lo, talvez em minutos. Mas, por mais paradoxal que parecesse, ainda acreditava que ele via nela o mesmo potencial de antes. Mal sabia ele que foi sua própria indiferença que a transformou nisso. Tratou-a como troféu. Como espada embainhada apenas para ser exibida. E, pior... colocou Josephine sob sua custódia. Para puni-la.
            </p>

            <p>
              Puni-la? Por quê?
            </p>

            <p>
              Por que ele não a chamou? Por que não a incluiu? Como marido, sequer lhe deu satisfação. E foi nesse momento que ela entendeu: aquele casamento havia falido. Ela tentou. Tentou fazê-lo ouvir, mas a teimosia dele superava até mesmo a dela.
            </p>

            <p>
              Nadine lutava por justiça. Victor, por domínio a qualquer custo.
            </p>

            <p>
              Agora, ele sabia da verdade. E para ela, restava apenas expurgar o que ainda sentia. Porque a batalha apenas começara. E não era hora de ser esposa. Nem mãe. Era hora de mover as peças que mudariam vidas.
            </p>

            <p>
              De verdade.
            </p>

            <p>
              Mesmo depois de tudo, ela ainda guardava, naquele quarto, um retrato dos três — seu filho, Victor e ela. Pegou a fotografia com delicadeza, como se fosse feita de vidro, e a apertou contra o peito. Deitou-se com o retrato nos braços, sentindo o peso de cada memória, de cada silêncio entre eles.
            </p>

            <p>
              Depois de alguns minutos refletindo, ela enxugou as lágrimas, guardou o retrato no mesmo lugar, mas, dessa vez, o deixou deitado para não ver o rosto dos dois. Em seguida, Nadine pensou em conversar um pouco com Helena sobre o que havia acontecido e esclarecer algumas dúvidas. Então, ela se arrumou com sua roupa executiva, o coque bem ajeitado, e seus acessórios, sapatos e maquiagem em seus devidos lugares.
            </p>

            <p>
              E assim, a mesma seguiu procurando por Helena.
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
