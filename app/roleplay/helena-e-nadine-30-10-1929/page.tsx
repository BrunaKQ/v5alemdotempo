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
          <p className="italic text-dodgerblue-500 mt-2">Um diálogo entre Helena e Nadine</p>

          <article className="prose prose-invert prose-p:text-gray-300 prose-strong:text-crimson-400 prose-em:text-amber-400 mt-8 space-y-6">
            {/* NARRATIVA INICIAL */}
            <p className="text-justify indent-8 leading-relaxed">
              O som dos saltos de Nadine ecoava com precisão quase ritualística. Cada passo era marcado, firme, como se ela cravasse seu direito de existir naquele espaço esquecido por Deus — ou pelos deuses que ainda restavam.
            </p>
            <p className="text-justify indent-8 leading-relaxed">
              Vestia-se como se a guerra fosse iminente, mas invisível. Blazer negro ajustado com elegância mortal, saia do mesmo tecido que deslizava sutil pelas pernas envoltas em meias finas. Na mão, uma bolsa discreta, rígida. No colo, um colar com uma cruz escura, pesada, pendia sobre a pele exposta de seu peito. Como se desafiasse o próprio símbolo que carregava.
            </p>
            <p className="text-justify indent-8 leading-relaxed">
              Ela parou na entrada da cripta, onde o chão encontrava o vazio. As tochas lançavam sombras douradas sobre seu rosto, mas nada nelas apagava a frieza dos olhos. O batom escuro desenhava sua boca como uma ameaça contida. Ela não piscava. Não tremia. Esperava.
            </p>
            <p className="text-justify indent-8 leading-relaxed">
              Esperava ser notada.
            </p>
            <p className="text-justify indent-8 leading-relaxed">
              Sabia que Helena a observava de algum lugar. Sentia o peso daquele olhar antigo como quem sente o ar mudar antes da tempestade.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Sei que me vê. E eu não vim pedir permissão.
            </p>
            <p className="text-justify indent-8 leading-relaxed">
              Os ecos da frase se multiplicaram pelas paredes do refúgio.
            </p>
            <p className="text-justify indent-8 leading-relaxed">
              Nadine não deu mais nenhum passo. Não precisava.
            </p>
            <p className="text-justify indent-8 leading-relaxed">
              Helena viria até ela.
            </p>

            {/* HELLENA CHEGA */}
            <p className="text-justify indent-8 leading-relaxed">
              Nadine não ouviu Helena chegar. Não houve som de pedra arrastada, nem de passos, nem ranger de ossos velhos. Helena simplesmente estava ali, surgindo do nada como uma lembrança ruim que volta sem aviso.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Que adorável. Você veio aqui pra me mostrar que consegue andar em linha reta? Parabéns. Devo mandar flores?
            </p>
            <p className="text-justify indent-8 leading-relaxed">
              Nadine permaneceu em silêncio por alguns segundos, absorvendo o sarcasmo de Helena com a mesma naturalidade com que se contempla uma noite sem estrelas.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Gosto das papoulas. Os campos vermelhos em Toledo. Fique à vontade para me mandar, aliás... você sabe onde me encontrar.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Mas não vim aqui pra provar que sei andar em linha reta.
            </p>

            {/* CONTINUAÇÃO DA NARRATIVA */}
            <p className="text-justify indent-8 leading-relaxed">
              Deu um passo adiante. O som discreto de seus saltos ecoou suavemente na antiga pedra do refúgio. Sua presença não era impositiva, mas firme. Segura de si.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — A príncipe irá nomear um novo primogênito para o clã Brujah em breve. Com os últimos acontecimentos... é bem provável que o cargo de primogênite recaia sobre mim. Mas, sinceramente, na forma como enxergo o mundo, se não for eu, será alguém muito mais complicado de lidar…
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              …ele já tem peças demais no tabuleiro. Você sabe. Josephine, Eliel... a Espanha. Mas não se eu correr a tempo. Não se eu explicar o que houve com meu pai.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Há anos tivemos uma conversa. Guardei com carinho suas palavras. E admito… não quis envolvê-lo nisso. Por sermos casados, e por conhecer o contexto, achei que deveria lidar com isso à minha maneira. Não queria puxar você pra dentro desse redemoinho.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Sei que ele está se movendo. Com sutileza. Mas o conheço bem demais pra não notar. Ele não vai aceitar meu crescimento. Vai tentar ruir as estruturas que construí, com a mesma elegância e crueldade de sempre.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Se eu conseguir aquela cadeira, posso acabar ocupando mais de um assento no futuro próximo. E isso nos coloca lado a lado. Não como rivais. Mas como sobreviventes do mesmo jogo.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Vim pedir clareza. Você sempre enxergou com mais nitidez do que muitos que se escondem sob os véus dourados da Camarilla. E gostando disso ou não… acho que vamos precisar uma da outra. Agora, mais do que nunca. Ainda mais alguém com um cargo como o seu.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Eu confio em você, Helena. Mesmo quando talvez não devesse. E acho que foi por isso que vim aqui primeiro. Você como xerife... eu, talvez, como primogênita. Se formos espertas, podemos trabalhar juntas. E colocar cada um em seu devido lugar.
            </p>

            {/* DIÁLOGO DE HELENA */}
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Ao ouvir essas palavras, Helena se move como sombra que aprendeu a respirar sozinha. Ela não caminha — desliza. Como se o chão tivesse medo de fazê-la tropeçar.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Um leve rasgo de sorriso aparece em seu rosto e desaparece como se nunca tivesse estado ali. Ela rodeia Nadine como uma ave de rapina sobre a presa desgastada. Cada gesto parece ter sido meticulosamente desenhado várias e várias vezes… Finalmente ela fala, e quando o faz, sua voz sai úmida, como um sussurro vindo do interior de um túmulo antigo.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Ainda está jogando dentro das regras dele Nadine. Só que agora, em vez de fingir obediência, está fingindo rebelião. E… Eu sou a carta que você jogaria para mostrar que existe algo de novo? Para provar que algo mudou em você? Ouça… Tenho apreço por você, sabe disso. Do contrário não estaríamos aqui falando. Se guardou minhas palavras realmente, sabe que muito do que falei há dez anos atrás, algumas perguntas que fiz foi para entender, acima de tudo, a natureza do seu laço. O grande entrave aqui para qualquer aliança que queira fazer de hoje em diante. Mas precisa entender e aceitar certas situações antes de tentarmos. Desejo ajudá-la e irei.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Mas preciso que você entenda… Eu tenho meus próprios desafios. Não estou à altura do cargo que conquistei. E nossos inimigos irão explorar isso ao máximo.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Você tem meu delegado à sua disposição. Use-o. É um Brujah como você. Aproveite-o. Compreenda as necessidades do seu clã. Saia da redoma de vidro que Victor lhe forçou a ficar o quanto antes. Você conhece ele como ninguém, mas nunca esteve do outro lado do jogo dele. Embora eu tenha que admitir que se há alguém que pode desarmá-lo... é você.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Você foi moldada por ele. Aceite. Ele está dentro de você. Não apenas no sangue. Na forma como pensa. Na forma como duvida de si mesma… Eu admito que o que você fez hoje foi ousado, mas qual o verdadeiro motivo por trás disso? Deseja poder ou vingança? Deseja matá-lo? Deseja humilhá-lo? Já fui uma filha rebelde antes… Nunca é tão simples quanto parece. Se deseja uma aliança comigo Nadine, preciso que ponha as cartas na mesa. Me diga: o que sente por ele?
            </p>

            {/* DIÁLOGO DE NAADINE */}
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Helena... Fui moldada como uma arma. Uma arma para ser usada no futuro. E, nesse tempo... fiquei muito tempo guardada. Trancada por ele. Em que o mesmo ficava esperando o momento certo para me usar.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              O erro dele foi achar que eu não faria nada durante esses anos. Pois bem... objetos não têm pernas e não falam. Mas eu... eu tenho pernas. E eu falo.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              O erro dele foi achar que, me dando tudo, me manteria por perto. Mas, desde que ele foi atrás de mim... desde que me encontrou... desde que me prometeu que me daria todo o conhecimento que tinha sobre os vampiros... em troca de ajudá-lo a subir ao topo... desde aquele pacto...
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Desde ali... eu já havia perdido tudo.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Tanto que... ao perder meu filho, depois de ter me transformado... aquilo foi um aviso. E eu quis ignorar. Dentro de mim, havia dúvida sobre ter ou não aquela criança. Mas meu subconsciente já sabia. Já queria.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Porque, com aquela criança... eu poderia começar do zero. Longe das guerras, do sangue, das mortes. Eu poderia... enfim... ter uma vida simples. Mas não.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Porque, com aquela criança... eu poderia começar do zero. Longe das guerras, do sangue, das mortes. Eu poderia... enfim... ter uma vida simples. Mas não.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Ele me amou primeiro. Mas ele não me amou como eu sou, Nadine. Ele amou minhas HABILIDADES! A minha TRAJETÓRIA de vida! O amor que eu senti por ele... que fui alimentando... não foi natural.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Foi moldado. Manipulado. Fabricado.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              E eu posso te afirmar com toda clareza, Helena... eu sou o próprio fato vivo diante de você. Se não fosse por esse amor moldado... juro por tudo que nem estaria falando com você agora. Nem manteria vínculo algum com vocês. Se realmente fosse amor, se realmente eu fosse louca de dar tudo por aquele homem, ele já teria sido príncipe desse lugar a muito tempo!
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              ... já está na hora de acordar. Você me compreende?
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Estou cansada... e farta... de tentar lutar por um homem que não me ouve. Que não quer mudar. Que prefere o caos. Que prefere... bater em sua mulher quando ela simplesmente diz que não está confortável com uma situação.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Helena... eu sou a arma que vai destruir o próprio criador.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Mas isso precisa ser feito com organização. Me compreende?
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Eu admito... tive muitas chances de matá-lo. Mas não quis. Porque, devido às circunstâncias... eu poderia aproveitar aquilo no futuro.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Eu traí Jhosefine quando me aliei a ela por um segundo para atacar ele... e depois traí ele em seguida. Mas antes eu salvei a vida dele.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Assim ele ficaria em dúvida sobre o que sinto. E eu não.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Antes de vocês conhecerem... ele cometeu atrocidades. Anos atrás, ele fazia experimentos com pessoas. Homens. Mulheres.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              E eu fazia parte disso. Como se fosse um dicionário. Um livro de consulta. Eu estava lá.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Na época, fiquei temerosa. Tive medo. Mas me mantive firme. Porque... aquilo não era muito diferente das coisas que eu já tinha vivido.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Se você quer uma resposta direta, pragmática... eu quero que ele pague. Quero que ele veja, com os próprios olhos, o rastro de destruição que deixou pra trás. E quero que essa destruição o consuma por completo.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Porque, se você não sabe... ele foi meu paciente.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Por mais que tenha sido com o intuito de descobrir sobre mim, entrar na minha mente... ele deixou escapar muita coisa. De propósito. Sobre a vida dele. Sobre a mente dele.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Tanto eu quanto ele sabemos muito um do outro. E é por isso que eu não quero simplesmente erradicá-lo. Eu quero deixar uma marca. Uma cicatriz.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Quero que ele queime de raiva. Que sinta vontade de me tocar... e não possa. Porque, durante anos, ele tocou em mim. Fez o que quis. Agora? Agora, se ele quiser me tocar... ela virou lentamente o rosto de volta — ...vai ter que tocar de um jeito diferente.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Porque ele sabe que qualquer passo em falso... qualquer jogada errada... qualquer decisão precipitada... eu estarei lá.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Eu sou uma mulher de batalha, Helena. A melhor coisa que fiz em toda escolha da minha vida... foi tomar a decisão de ser primogênita. Porque, logo, senti que algo renasceu em mim depois de muito tempo. Como se tivesse nascido para isso, mesmo que tenha sido meu pai quem me instruiu esse caminho.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Nem mesmo de ter tido meu filho eu me orgulho. Quando falei com ele sobre isso... foi um ato de desespero. Por um sonho que eu ainda queria realizar nesse mundo maldito.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Mas quem eu achava que estava enganando? Eu? Achando que tudo ia ficar bem? Que eu ainda podia tentar?
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              A cada passo que eu dava... a cada escolha... eu entrava mais fundo no abismo. E agora... agora está na hora de eu me tornar a própria sombra do abismo.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Independente do que eu e ele tivemos... ele precisa pagar. Pelas vidas. Pelas marcas. Pelos gritos que ninguém ouviu. Pelos silêncios que ele plantou. Eu luto por aqueles que não podem lutar por si.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              E uma hora, Helena, a morte cobra. A vida cobra. E a hora dele... vai chegar. E eu não tenho pressa, Helena. Quanto mais devagar, melhor para apreciar o momento.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              E, quando chegar a hora... eu estarei lá. Não como vítima. Não como aliada. Não como mulher.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Eu estarei como juíza.
            </p>

            {/* DIÁLOGO DE HELENA */}
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Helena ouve Nadine com atenção cirúrgica. Cada palavra é uma incisão. Cada pausa, um corte mais fundo. Ela não interrompe. Não precisa. Ela deixa Nadine se abrir — como faz com os cadáveres que examina. Deixa que ela exponha a si mesma, que mostre suas feridas internas, seus músculos de intenção, suas veias de ódio.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Quando fala, sua voz sai diferente. Sem raiva. Sem pena. Com verdade. Menos cortante. Como se lidasse com algo frágil, uma chama queimando o próprio pavio depressa demais.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Juízo é sempre sobre a verdade. Sobre ver sem desejo de punição. Sobre pesar sem ódio… Mas o laço… ele…
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Helena ergue-se e segue em direção à Nadine.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Você quer ser juíza dele… Diz isso como se fosse possível julgar alguém com justiça enquanto carrega o criminoso dentro de si.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Helena recostou-se sobre uma raiz podre de árvore.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — A saída… não é matá-lo. Não é traí-lo. Não é fugir dele. A saída é esquecê-lo. E isso só depende de você. Esquecer alguém que ainda respira dentro de você… é como uma cirurgia que ninguém ensina na faculdade. É o tipo de coisa que só se aprende no escuro. Sozinha. Com dor. Sem anestesia.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Helena se aproxima intimamente e oferece o punhal para Nadine. O olhar dela parece interrogativo.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Confiaria em mim quando não consegue confiar em si mesma?
            </p>

            {/* DIÁLOGO DE NAADINE */}
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Hoje eu confiei em mim mesma. Eu poderia ter pedido para escolherem ele, mas não.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Nadine pega a adaga com cuidado e toques suaves.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Obrigada.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Ela a observa por alguns segundos. Não como quem admira uma arma, mas como quem contempla uma cicatriz prestes a ser feita.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Eu não vim aqui pedir permissão. Eu vim me despedir da mulher que fui.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Eu vou conseguir. Mesmo que precise sangrar cada lembrança que ele me deixou.
            </p>

            {/* DIÁLOGO DE HELENA */}
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Helena invade o espaço da Nadine. Ela observa, julga, e circula como sombra.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Se veio para um velório e me quer como celebrante, o farei, mas eu não enterro defuntos que respiram. Nem enterro partes de uma vida. Enterro cadáveres inteiros, enterro visões, enterro sonhos, enterro fantasias, tudo isso com a terra da verdade.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Pois bem... Acho que você nunca foi devidamente enterrada, não é? EU COMEÇO!
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Ela levanta uma das mãos, os dedos finos e encurvados como garras, e faz o sinal de cruz no ar — um gesto cheio de deboche, quase blasfemo em sua boca.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Porque és pó e ao pó voltarás! Quem deseja dar um último adeus à Nadine Anoura? Campeã da caminhada em linha reta, dos soluços empapados e da rebeldia? Quem será a primeira pessoa a se despedir de uma alma tão penada e cheia de dentes?
            </p>

            {/* FINAL */}
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Nadine cai de joelhos com as palavras de Helena. A mesma fica ali intacta olhando pro nada apenas relembrando tudo que viveu até o momento.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Sua desgraçada.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Admiro pessoas como você.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Com sua misericórdia, peço sua ajuda.
            </p>

            {/* DIÁLOGO DE HELENA */}
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Helena ri, pela primeira vez, um riso de satisfação. Helena se inclina para Nadine e fala baixo, como uma mãe consolando sua criança.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Não fique de joelhos, Nadine. Erga-se. Os outros irão ajudá-la, isso nunca foi motivo de discussão. Mas… eu não sou os outros. Eu… sinto muito que seu amor por ele tenha se tornado um inferno para você, mas você precisa morrer. Não fisicamente. Isso seria fácil demais.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              Helena dá um beijo na testa da Nadine, depois olha nos olhos dela.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Enterre, Nadine, a esposa, a cria, a amante, a vítima… Acredite, vai se sentir mais leve depois disso.
            </p>

            {/* CONCLUSÃO */}
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Nadine se levantou e foi até o local indicado pela Helena. Já com sua expressão neutra e com o olhar vazio, observou aquela cova. Por um momento ela desejou estar ali, morta e em paz. Mas do que vai adiantar morrer agora, depois de tudo que fez pra chegar até onde chegou.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Ela sabia o que era: apenas uma sobrevivente disfarçada de orgulho. Foi esperta o bastante para se manter viva, mas nunca forte o suficiente para sustentar a realidade.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Como um último ato, a mesma pega a adaga, coloca sua língua para fora, faz um corte mediano e sangra. Ela inclina um pouco para frente e deixa o sangue cair e depois cospe no próprio túmulo. Ela precisava sentir aquela dor. Já com a boca cheia de sangue, ainda pingando em seu corpo e roupa, virou-se para Helena.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Acho que vou ficar com fome… — disse rindo, sabendo do óbvio.
            </p>

            {/* DIÁLOGO FINAL DE HELENA */}
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Além de me importunar em meu reduto, ainda quer o meu sangue? Nossa… Você é exigente, não é? — Helena ergue o braço, rasgando o tecido de linho que o cobre, revelando uma carne rachada e sangrenta.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Fique à vontade, mas cuidado, talvez você vicie.
            </p>

            {/* FINAL DA CENA */}
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Nadine se aproveitou da deixa, ignorou seu comentário e a mordeu com ferocidade de um Brujah. E logo pensou, quando poderia arrancar dela? Acho que não devo abusar… Aliás, já havia tomado esse sangue antes. Talvez ele sempre foi pertencente a mim, mas eu estava cega o suficiente pra ver.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Nadine queria tomar mais, porém se conteve e logo se afastou.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              — Preciso me limpar. Ele vai perceber que tomei o sangue de outro vampiro e é bem provável que me faça tomar o seu sangue em seguida. O que devo fazer?
            </p>

            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — Durma aqui no dia de hoje. O refúgio da Coterie é o local mais seguro para você. Ele não ousará se aproximar enquanto estivermos por perto. Amanhã nos reunimos e decidimos melhor. Agora, eu… preciso me retirar. E… é um prazer te conhecer, senhora Nadine.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-violet-400">
              — E, Nadine… o negro não combina com você. Você nasceu para brilhar, como as chamas do espírito Brujah. Deixe o negro para os que habitam a escuridão e não têm a mínima intenção de abandoná-la.
            </p>

            {/* FECHAMENTO */}
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Nadine seguiu o conselho de Helena, mas precisava esfriar a cabeça um pouco, então foi para um lugar abandonado na cidade, uma usina. Treinou, se soltou, se sentiu livre por pouco tempo.
            </p>
            <p className="text-justify indent-8 leading-relaxed text-rose-500">
              Voltou para a coterie, localizou o seu quarto, se limpou e finalmente dormiu.
            </p>
          </article>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
