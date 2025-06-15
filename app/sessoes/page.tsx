import { Clock, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SessoesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold text-silver-200">
              <span className="mr-3 text-5xl">📜</span>
              Resumo das Sessões
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              Aqui são registrados, sem filtros ou interpretações subjetivas, os principais acontecimentos das sessões
              ao vivo conduzidas pelo <strong>Mestre Júnior Lobo</strong> pelo Discord. Este é o espaço onde a história
              avança, alianças se formam e se quebram, traições são seladas com sangue e verdades ocultas emergem sob a
              luz fria da lua.
            </p>
          </div>
          <div className="mb-8 rounded-lg bg-midnight-800 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-silver-200" />
                <span className="text-sm text-gray-300">
                  Mestre: <strong>Júnior Lobo</strong>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-crimson-500" />
                <span className="text-sm text-gray-300">
                  Duração média: <strong>4 horas</strong>
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Tudo que ocorreu nas noites vividas pelos personagens está aqui: os fatos, as escolhas, as consequências —
              e o peso de cada decisão em um mundo onde a eternidade não perdoa erros.
            </p>
          </div>

          <div className="space-y-6">
            {sessions.map((session) => (
              <Card key={session.id} className="bg-midnight-700 text-gray-200 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {/* Conteúdo principal */}
                  <div className={`flex-1 p-6 ${session.image ? "md:w-2/3" : "w-full"}`}>
                    <CardHeader className="border-b border-midnight-600 pb-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-serif text-xl text-silver-300">Sessão {session.date}</CardTitle>
                          <div className="mt-2 flex items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>4 horas</span>
                            </div>
                          </div>
                        </div>
                        {session.special && (
                          <Badge variant="outline" className="border-yellow-600 text-yellow-400">
                            {session.special}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <div className="space-y-4">
                        {session.summary.map((paragraph, index) => (
                          <p key={index} className="text-gray-300">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {session.notes && (
                        <div className="mt-4 rounded bg-midnight-800 p-3">
                          <p className="text-sm italic text-gray-400">{session.notes}</p>
                        </div>
                      )}
                    </CardContent>
                  </div>

                  {/* Imagem condicional - só mostra se session.image existir */}
                  {session.image && (
                    <div className="md:w-1/3 bg-midnight-800 flex items-center justify-center p-6">
                      <img
                        src={session.image}
                        alt={`Imagem da sessão de ${session.date}`}
                        className="max-w-full h-auto rounded-md shadow-md"
                      />
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

const sessions = [
  {
    id: "session-11-06-2025",
    date: "11/06/2025",
    image: "/images/capa-sessao-11-06-2025.jpg", // ← Exemplo de imagem específica
    summary: [
      "Lady Anne Bowesley, Senescal da Camarilla de Londres, chega a um Elísio lotado, acompanhada de cinco carniçais de porte nobre. Em reunião com a Príncipe Inês e a coterie, ela cobra um favor de vida devido ao Príncipe Mithras.",
      "A harpia Emilie confirma a dívida ao ler tocar um antigo livro de contas. Suas visões revelam que Inês fazia parte do que seria a futura corte de Nova Orleans a bordo de um navio Novo Mundo, porém foram atacados por uma nau repleta de lobisomens. No massacre, Guilhame de Vauclair — senhor de Inês — foi destruído. Mithras interveio, enfrentou a ameaça lupina e salvou Inês da morte final. Também é revelado que o ataque foi orquestrado por LaFontaine, que manipulou os lobisomens para atacar o grupo.",
      "Como pagamento pela dívida, Mithras exige a captura de Samuel Bouchet, um Salubri considerado criminoso e ignorado pelo antigo Xerife. Uma caçada de sangue é oficialmente declarada.",
      "Lady Anne ainda convoca Desmond e, usando Dominação, o obriga a informá-la caso cruze novamente com LaFontaine.",
      "A coterie segue na busca por Samuel, descobrindo que ele se esconde entre membros do clero e se move com facilidade pelas vielas da cidade.",
      "Fim da Sessão, a caçada continua."
    ],
    notes: "4 pontos de Experiência para Desmond, Emilie, Helena e Nadine.",
  },
  {
    id: "session-03-06-2025",
    date: "03/06/2025",
    image: "/images/capa-sessao-03-06-2025.jpg", // ← Exemplo de imagem específica
    summary: [
      "Na noite de Halloween, em meio à tensão social pós-queda da bolsa, Nadine busca apoio de seu clã para concorrer à primogenitura, mas se surpreende com a presença de seu senhor e marido, Victor Bloodwood. Ele a humilha, afirmando que ela é apenas um peão e que não tem interesse direto no cargo, mas a obriga, por meio do laço de sangue, a seguir suas ordens: manter segredo absoluto e entrar em conflito com a coterie.",
      "Ao retornar ao refúgio, Nadine, mesmo sob domínio de Victor, tenta alertar a coterie sobre os planos dele, mas falha devido ao laço. Emilie usa seus poderes de Auspícios para obter informações sobre o futuro e consegue insights valiosos. A coterie decide continuar contando com Nadine, apesar dos riscos.",
      "Enquanto isso, Helena planeja receber Al Capone na cidade. Desmond e Nadine, com ajuda dos carniçais Malcom, Alfredo e Vix, trocam uma carga traficada pelos lobisomens sem serem notados — escapando por pouco da polícia.",
      "Paralelamente, Emilie, Étienne e Helena visitam Grace Thompson, aliada de Helena, e descobrem que o lobisomem Michael Bayle a amava e que ele e outro lobisomem estavam deixando a cidade — supostamente fugindo da polícia, embora o verdadeiro motivo permaneça misterioso.",
      "Helena fecha negócios com capangas de Al Capone, aumentando sua influência na cidade.",
    ],
    notes: "8 pontos de Experiência para Desmond, Emilie, Étienne, Helena e Nadine.",
  },
  {
    id: "session-20-05-2025",
    date: "20/05/2025",
    summary: [
      "Helena é nomeada xerife da cidade, assumindo um papel de maior autoridade e responsabilidade. A coterie enfrenta um perigoso bando do Sabá e consegue eliminar Otávio Consone, um importante membro da seita rival.",
      "Nadine demonstra sua crescente influência ao conquistar a liderança do clã Brujah, estabelecendo suas ambições de se tornar primogênita. Victor, seu senhor, é informado sobre estas aspirações, criando uma tensão palpável entre criador e cria.",
      "A noite ainda está no início, com o relógio marcando apenas meia-noite. Al Capone, figura proeminente do submundo mortal, chegará à cidade na próxima noite, prometendo novas complicações e oportunidades.",
    ],
  },
  {
    id: "session-13-05-2025",
    date: "13/05/2025",
    summary: [
      "Victor triunfa sobre Josephine com a ajuda inesperada de um carniçal de Thomas Coen. Como consequência, Josephine é rebaixada à condição de criança da noite e colocada sob a tutela de Victor, alterando significativamente o equilíbrio de poder na cidade.",
      "Helena localiza o matusalém Tzimisce e, em um ato de coragem e estratégia, consegue empalá-lo. Durante sua fuga, entra em combate com um mortal, o nocauteia e parte levando o corpo do antigo vampiro para o Elysium.",
      "Emilly descobre a presença de dois lobisomens na cidade. Desmond tenta atropelá-los, mas acaba matando um mortal inocente por engano. Os lobisomens parecem estar conectados a Grace Thompson, advogada e pilar de Helena.",
      "Através da caveira de Abdul, Emilly consegue vislumbrar seu passado, revelando três membros do Sabá - dois homens e uma mulher - embora seus rostos permaneçam ocultos nas visões.",
    ],
    notes: "São 20h. Al Capone chegará à cidade na próxima noite.",
  },
  {
    id: "session-08-05-2025",
    date: "08/05/2025",
    special: "Sessão Solo",
    summary: [
      "Álvaro e Bruna negociam com Thomas Coen na tentativa de ajudar Al Capone em sua chegada à cidade. Durante as conversas, descobrem que Thomas mantém um acordo secreto com Josephine, revelando mais uma camada das complexas alianças políticas de Nova Orleans.",
      "A dupla obtém informações valiosas sobre dois ladrões, Michael Bailey e Manoel Acosta, que planejam vender mercadorias para Capone em dois dias. Com estas informações em mãos, decidem encerrar a noite e descansar para planejar seus próximos passos.",
    ],
  },
  {
    id: "session-06-05-2025",
    date: "06/05/2025",
    summary: [
      "O pai de Nadine é brutalmente assassinado pela Ku Klux Klan, deixando-a devastada. Etiene, preocupado com sua segurança, aconselha Nadine a abandonar Victor, temendo as consequências de sua associação.",
      "Richard Grayson recebe a missão de proteger Al Capone, que chegará à cidade em três dias. Seu objetivo é ganhar a confiança do clã Ventrue e possivelmente assegurar o cargo de primogênito.",
      "Abdul é executado por Crawford após a confirmação de seu envolvimento com o Sabá, eliminando uma ameaça interna à Camarilla.",
      "Helena sofre ferimentos graves, acumulando três pontos de dano agravado que exigirão tempo para cicatrizar. Enquanto isso, o laço de sangue entre Nadine e Victor é fortalecido para o nível 4, tornando sua dependência dele quase absoluta.",
    ],
    notes: "São 3h da manhã. A história continua...",
  },
  {
    id: "session-30-04-2025",
    date: "30/04/2025",
    summary: [
      "Helena descobre que o gangster Silvestro Carollo controla o comércio de bebidas na cidade. Ela deixa um recado para ele, sabendo que Carollo já está ciente de que seus homens estão vendendo em seu território.",
      "Preocupados com a segurança de Nadine, Evelyn e Etiene decidem vigiá-la, temendo que Victor possa tomar alguma atitude drástica. Victor confronta Etiene diretamente, revelando que Abdul traiu a príncipe ao se aliar ao Sabá e menciona um antediluviano despertando no bayou. Ele também cobra o favor que Evelyn lhe deve.",
      "Desmond sofre a perda de um de seus pilares, enfraquecendo sua conexão com a humanidade. Junto com Helena, ele entra em combate contra Abdul em sua forma animal. Helena consegue se aproximar mais dele, enquanto Desmond segue a cavalo para tentar atingi-lo.",
      "A situação toma um rumo trágico quando membros da Ku Klux Klan incendeiam a casa de Victor e Nadine, com o pai idoso dela e uma criança ainda dentro do imóvel.",
    ],
    notes: "É 1h da manhã. A tensão na cidade continua a crescer.",
  },
  {
    id: "session-23-04-2025",
    date: "23/04/2025",
    summary: [
      "Desmond elimina Talbot, removendo uma ameaça significativa à estabilidade da cidade. Enquanto isso, Eric Widman tenta abraçar Claire, mas Emilly intervém habilmente, manipulando Crawford para impedir o ato.",
      "Crawford percebe o interesse de Emilly em sua interferência, criando uma nova dinâmica entre eles. Como resultado de suas ações, Emilly agora deve um favor maior a Victor, aumentando sua dívida com ele.",
      "Desmond aconselha seu pilar Vincent, que está envolvido romanticamente com o pilar de Emilly, adicionando mais uma camada de complexidade às relações entre os membros da coterie.",
    ],
  },
  {
    id: "session-15-04-2025",
    date: "15/04/2025",
    summary: [
      "A coterie confronta os caitiffs responsáveis pelo sequestro de Victor e Josephine. Durante o conflito, Etiene bebe o sangue de Nadine, criando um vínculo inesperado entre eles. Nadine, desestabilizada pela situação, entra em frenesi e quase mata Helena.",
      "Um dos caitifs, Jack, que demonstra domínio de Proteanismo nível 3, consegue escapar, enquanto os demais são eliminados. Kael Vane ascende à posição de primogênito, mas fica em laço de sangue com William Crawford, comprometendo sua independência.",
      "Desmond é nomeado xerife interino, assumindo temporariamente as responsabilidades de manter a ordem na cidade. Victor e Nadine se retiram para locais seguros para recuperar-se de seus ferimentos.",
    ],
  },
  {
    id: "session-08-04-2025",
    date: "08/04/2025",
    summary: [
      "Kael Vane, senhor de Helena, revela-se como o responsável pelo fechamento de Storyville, demonstrando sua influência crescente na cidade. Josephine Dubois e Victor Bloodwood entram em conflito aberto e ambos são dados como desaparecidos, criando um vácuo de poder entre os Brujah.",
      "Etiene e a coterie fazem uma descoberta perturbadora: Emanuele, carniçal de Etiene, foi encontrada morta. No local do crime, identificam o símbolo do Sabá, indicando que a seita rival está operando ativamente em Nova Orleans.",
    ],
  },
  {
    id: "session-03-04-2025",
    date: "03/04/2025",
    special: "Sessão Solo - Evelyn",
    summary: [
      "Evelyn encontra Hector Consone, um Tzimisce que assumiu o rosto de Jean Baptiste. Ele exige o Livro de Nod que está em posse de Evelyn, revelando seu interesse no antigo artefato.",
      "Sob pressão, Evelyn entrega metade do livro a Hector, que parte com a advertência de que retornará caso não obtenha o que deseja. Esta concessão parcial compra tempo, mas deixa Evelyn em uma posição vulnerável.",
    ],
  },
  {
    id: "session-01-04-2025",
    date: "01/04/2025",
    summary: [
      "O bairro Storyville é oficialmente fechado devido à pressão governamental, causando agitação entre os vampiros dos clãs inferiores que buscam recuperar seus territórios perdidos.",
      "Josie conversa com Nadine e Emily, procurando identificar fraquezas de Victor, pois ambiciona tornar-se a primogênita Brujah, revelando as maquinações políticas em curso.",
      "A coterie dirige-se a Storyville após ouvir rumores da possível presença de Jean Baptiste. Durante o confronto, Abdul é queimado vivo por Jean e desaparece nas águas do rio Mississippi. Desmond consegue derrubar Jean, mas é Emily quem desfere o golpe fatal.",
      "Nadine é atacada por homens que afirmam ter recebido ordens para agredi-la. A coterie relata o ocorrido a Inês, buscando sua intervenção. Desmond enfrenta Victor em combate, mas ambos estão gravemente feridos e a luta termina sem um vencedor claro. O carniçal que auxiliava Jean consegue escapar.",
    ],
    notes: "A história continua...",
  },
  {
    id: "session-25-03-2025",
    date: "25/03/2025",
    summary: [
      "Lafonteine demonstra sua brutalidade ao assassinar Bill e infligir uma severa surra em Desmond. A coterie consegue traduzir o Livro de Nod, descobrindo a existência de um matusalém Gangrel no Bayou.",
      "Cada membro da coterie enfrenta lembranças dolorosas de seu passado. Helena descobre que não há lobisomens no Bayou, levando Evelyn a suspeitar que o Xerife Abdull mentiu e manipulou Inês para acreditar na presença dessas criaturas.",
      "Victor traz um bebê para Nadine, mas a agride violentamente ao descobrir que ela dormiu ao lado de Etiene. Desmond revela que o Tzimisce Charles Kowalski criou a gangue de carniçais conhecida como 'o homem do machado' como parte de um experimento macabro.",
      "Tanto Kowalski quanto Lafonteine decidem deixar Nova Orleans. Evelyn continua lutando contra suas visões perturbadoras, mas bebe novamente o sangue de Desmond, intensificando o laço de sangue entre eles para o nível 4.",
    ],
  },
  {
    id: "session-10-03-2025",
    date: "10/03/2025",
    summary: [
      "Lafontaine, senhor de Desmond, chega a Nova Orleans e exige o Livro de Nod que está em posse de Evelyn, demonstrando seu poder e influência. Simultaneamente, o misterioso 'homem do machado' ataca um comerciante local.",
      "Desmond e Helena perseguem três suspeitos ligados ao crime. Um deles consegue escapar, enquanto os outros dois são eliminados, revelando-se carniçais a serviço de um mestre desconhecido.",
      "Inês expressa preocupação com a proximidade de lobisomens à cidade, adicionando mais uma ameaça à já tensa situação. Os Brujah e Ravnos organizam debates públicos na cidade, com Victor, senhor de Nadine, participando ativamente das discussões.",
      "Samuel Hawkins ataca Nadine, Etiene e Evelyn, mas é morto por Lafontaine, que demonstra sua superioridade em combate. Após o confronto, Lafontaine estabelece um ultimato: exige o livro em três dias ou promete desencadear o caos em Nova Orleans.",
    ],
  },
  {
    id: "session-03-03-2025",
    date: "03/03/2025",
    summary: [
      "Jean Baptiste consegue fugir, mas não antes de Evelyn beber seu sangue, criando uma conexão inesperada entre eles. O assassino, identificado como um membro do clã Banu Haqim, tenta eliminar Etiene e Desmond, mas falha em sua missão.",
      "Nadine chega ao Elysium trazendo informações cruciais sobre o assassino, contribuindo para a segurança da comunidade vampírica. Como reconhecimento por seus serviços e habilidades, ocorre uma significativa reorganização de poder:",
      "Evelyn é promovida a harpia maior, Nadine a harpia menor, Desmond e Helena são nomeados delegados, e Etiene assume o papel de guardião do Elysium, consolidando a influência da coterie na estrutura política da cidade.",
      "Erika, pilar de humanidade de Helena, falece devido a complicações hepáticas resultantes da febre amarela, representando uma perda significativa para Helena e seu vínculo com o mundo mortal.",
    ],
    notes: "Doze anos se passam. A história continuará em 1918.",
  },
  {
    id: "session-25-02-2025",
    date: "25/02/2025",
    summary: [
      "A coterie se reúne no Garden Hall quando um evento chocante abala a comunidade vampírica: Alfonse Waters, um harpia recém-nomeado, é assassinado dentro do Elysium. A príncipe Inês, determinada a encontrar o culpado, proíbe que qualquer um deixe o local até que o mistério seja solucionado.",
      "Helena, utilizando suas habilidades investigativas, descobre que o assassino possui domínio de Celeridade e Ofuscação, limitando os suspeitos. Etiene encontra um fragmento da lâmina usada no crime e é abordado por Edi Borbon, um Ventrue que tenta intimidá-lo, aparentemente com o objetivo de obstruir a investigação.",
      "Jean Baptiste alerta que o assassino pode ainda ter como alvo Desmond, Evelyn ou até mesmo a própria príncipe, elevando a tensão no ambiente. Crawford demonstra desconfiança específica de Evelyn, complicando ainda mais a situação política.",
      "A príncipe convoca todos para uma reunião urgente. Faltam apenas cinco horas para o amanhecer, e tanto Etiene quanto Helena estão sofrendo com a compulsão de fome, tornando a situação ainda mais volátil.",
    ],
    notes: "A história continua...",
  },
  {
    id: "session-18-02-2025",
    date: "18/02/2025",
    summary: [
      "Desmond e Evellyn, com o auxílio de Etiene, fazem uma descoberta significativa: Jean Baptiste possui uma cópia do lendário Livro de Nod. Suas investigações revelam que ele conduzia experimentos visando eliminar as maldições que afligem os vampiros.",
      "A trama se complica quando descobrem que Bartolomeu Talbot, um Tremere procurado, estava colaborando com os Setitas e Hawkins em um plano maior. Desmond consegue capturar tanto Talbot quanto Hawkins, garantindo importantes fontes de informação.",
      "Evelyn finalmente tem sua oportunidade de confrontar Jean, um momento que promete revelar segredos há muito guardados e possivelmente alterar o curso dos eventos na cidade.",
    ],
    notes: "A história continua...",
  },
  {
    id: "session-11-02-2025",
    date: "11/02/2025",
    summary: [
      "A príncipe concede à coterie o controle sobre parte do CBD (Central Business District) com a missão de investigar a misteriosa febre amarela que assola a cidade. Nova Orleans encontra-se quase inteiramente sob quarentena, criando um ambiente de tensão e isolamento.",
      "O senhor de Evelin chega à cidade trazendo informações inquietantes: os Setitas estão por trás da epidemia e contam com o apoio de Samuel Hawkins, um Nosferatu da Camarilla, sugerindo traição nas fileiras da seita.",
      "A coterie faz uma descoberta perturbadora ao encontrar um homem que, após morrer pela doença, inexplicavelmente retorna à vida. Eles localizam Hawkins, mas ele consegue escapar. Ao relatarem o ocorrido ao xerife, começam a suspeitar de seu envolvimento no caso.",
      "Evelin percebe que um Setita os observa à distância, indicando que estão sendo monitorados. Com o amanhecer se aproximando, a coterie se retira para descansar, deixando muitas questões sem resposta.",
    ],
    notes: "A história continua...",
  },
  {
    id: "session-28-01-2025",
    date: "28/01/2025",
    summary: [
      "Helena e Etiene unem forças contra Benjamin, descobrindo que existe uma entidade aprisionada ao espelho que só pode ser liberada com a morte de seu portador. Desesperado e incapaz de suportar o fardo do espelho, Benjamin se joga de uma ponte.",
      "Com a morte de Benjamin, a entidade se liberta e toma posse de seu corpo, transformando-o em uma espécie de zumbi. Etiene consegue destruir a criatura, mas a entidade não é completamente eliminada - ela passa a atormentar Etiene, transferindo sua maldição para um novo hospedeiro.",
    ],
  },
  {
    id: "session-24-01-2025",
    date: "24/01/2025",
    summary: [
      "Helena, uma legista Nosferatu, investiga o preocupante aumento de casos de varíola e peste na cidade. Durante suas investigações, ela encontra Benjamin Thorne, que ela reconhece por tê-lo visto observando Erika, sua protegida mortal.",
      "Benjamin revela a Helena que está tentando despertar um vampiro que mantém consigo, mas Helena descobre um fato intrigante: de alguma forma, a alma desse vampiro não está presente em seu corpo físico.",
      "Enquanto isso, Adonis consegue resistir à influência maligna do espelho através de sua extraordinária força de vontade, libertando-se temporariamente de seu controle.",
      "Etiene consulta sua criadora sobre Benjamin, expressando suas suspeitas de que ele pode não ser realmente um vampiro. Ela confirma que isso deve ser investigado e que Benjamin merece punição por suas ações. Ela também menciona que os Ravnos estão igualmente interessados no espelho misterioso.",
      "Buscando mais informações, Etiene procura Helena, esperando que ela possa ajudá-lo a desvendar os mistérios que cercam Benjamin e o artefato. Uma nova noite começa, e o enigma continua a se aprofundar.",
    ],
  },
  {
    id: "session-12-01-2025",
    date: "12/01/2025",
    summary: [
      "Dezembro de 1906. Uma noite de inverno incomum cobre Nova Orleans com neve, um fenômeno raro na região. Os indigentes morrem de frio nas ruas, pois grande parte da cidade ainda não possui iluminação elétrica, deixando os mais vulneráveis à mercê dos elementos.",
      "Seguindo ordens de seus respectivos senhores, Etiene e Adonis são designados para receber Benjamin Thorne, um visitante misterioso. Benjamin afirma possuir um espelho com propriedades sobrenaturais: a capacidade de controlar lembranças e intensificar ilusões.",
      "O artefato desperta o interesse de dois clãs poderosos: os Ravnos e os Tremere, ambos envolvidos em uma disputa acirrada por relíquias antigas. Etiene e Adonis mantêm-se cautelosos, desconfiando das intenções de Benjamin.",
      "Durante sua investigação, descobrem que uma prostituta morta por Benjamin havia sido previamente drogada com morfina, sugerindo um padrão perturbador em suas ações. Ao examinarem o espelho, começam a ouvir vozes emanando do objeto e, inexplicavelmente, cada um vislumbra fragmentos do passado do outro.",
      "A situação toma um rumo perigoso quando o espelho domina a mente de Adonis, compelindo-o a assassinar Benjamin. O relógio marca 5 da manhã, com o sol previsto para nascer às 7, deixando pouco tempo para resolverem a situação antes do amanhecer forçar seu retiro.",
    ],
    notes: "4 pontos de Experiência para Rodolfo e Washington.",
  },
]
