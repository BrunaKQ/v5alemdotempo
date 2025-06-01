import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="mb-8 font-serif text-4xl font-bold text-silver-200">Sobre o Projeto</h1>

          <div className="prose prose-invert max-w-none prose-headings:font-serif prose-headings:text-silver-200 prose-p:text-gray-300">
            <p>
              "Crônicas de Nova Orleans - Além do Tempo" é uma campanha de <strong>Vampire: The Masquerade</strong>{" "}
              ambientada na vibrante e misteriosa Nova Orleans de 1929, durante a era do jazz e da Lei Seca.
            </p>

            <h2 className="text-silver-200">A Campanha</h2>
            <p>
              Esta campanha acompanha as aventuras da coterie <strong>Ordo Noctis</strong>, cinco vampiros unidos por
              necessidade e destino nas ruas sombrias de Nova Orleans. Conduzida pelo{" "}
              <strong>Mestre Júnior Lobo</strong> através do Discord, cada sessão revela novos segredos, alianças e
              traições no mundo das trevas.
            </p>
            <p>
              A escolha de 1929 como cenário não foi por acaso. Este foi um período de contrastes intensos: o glamour da
              era do jazz contra o desespero da Grande Depressão que se aproximava; a sofisticação dos clubes noturnos
              contra a criminalidade gerada pela Proibição; a modernidade emergente contra tradições centenárias.
            </p>

            <h2 className="text-silver-200">Os Vampiros de Nova Orleans</h2>
            <p>
              Na nossa campanha, os vampiros não são monstros unidimensionais, mas seres complexos que carregam o peso
              da imortalidade e séculos de história. Organizados em clãs com suas próprias regras e hierarquias, eles
              existem nas sombras da sociedade humana, influenciando-a sem revelar sua verdadeira natureza.
            </p>
            <p>
              A coterie Ordo Noctis representa diferentes aspectos da sociedade vampírica: a paixão revolucionária dos
              Brujah, a loucura visionária dos Malkavianos, a manipulação sombria dos Lasombra, a informação valiosa dos
              Nosferatu, e o conhecimento arcano dos Tremere.
            </p>

            <h2 className="text-silver-200">Sobre o Sistema</h2>
            <p>
              Utilizamos o sistema <strong>Vampire: The Masquerade</strong> para explorar temas de humanidade, poder, e
              as consequências da imortalidade. Cada personagem luta para manter sua humanidade enquanto navega pelas
              complexidades da sociedade vampírica.
            </p>
            <p>
              As sessões são conduzidas via Discord, permitindo uma experiência imersiva onde roleplay por texto e
              sessões ao vivo se complementam para criar uma narrativa rica e envolvente.
            </p>

            <h2 className="text-silver-200">Sobre o Mestre</h2>
            <p>
              <strong>Júnior Lobo</strong> é o Narrador desta crônica sombria, guiando os jogadores através dos
              mistérios e perigos de Nova Orleans vampírica. Com experiência em storytelling e paixão pelo World of
              Darkness, ele cria uma atmosfera autêntica que captura a essência gótica do cenário.
            </p>
            <p>
              "Acredito que as melhores histórias de vampiros são aquelas que exploram a dualidade entre o monstro e o
              que resta de humano", diz Júnior. "Nova Orleans oferece o cenário perfeito para essas explorações."
            </p>

            <h2 className="text-silver-200">Estrutura da Campanha</h2>
            <p>A campanha é dividida em várias seções que documentam diferentes aspectos da experiência:</p>
            <ul>
              <li>
                <strong>A Coterie:</strong> Perfis detalhados dos personagens jogadores
              </li>
              <li>
                <strong>Resumo das Sessões:</strong> Registro dos eventos principais de cada sessão
              </li>
              <li>
                <strong>Elysium:</strong> NPCs importantes e a política vampírica da cidade
              </li>
              <li>
                <strong>In Memoriam:</strong> Histórias do passado mortal e eventos marcantes
              </li>
              <li>
                <strong>Roleplay por Texto:</strong> Interações entre sessões e desenvolvimento de personagem
              </li>
            </ul>
            <p>
              Cada elemento contribui para uma narrativa coesa que explora tanto a ação dramática quanto os momentos
              íntimos de desenvolvimento de personagem.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
