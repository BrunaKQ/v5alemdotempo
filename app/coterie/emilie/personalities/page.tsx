import Link from "next/link"
import { ArrowLeft, Users, Eye, Zap } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function EmiliePersonalitiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <Link
            href="/coterie/emilie"
            className="mb-6 inline-flex items-center text-sm text-silver-200 hover:text-amber-400"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Emilie
          </Link>

          <div className="mb-8">
            <h1 className="mb-4 font-serif text-4xl font-bold text-silver-200">
              <span className="mr-3 text-4xl">🎭</span>
              As Duas Faces de Emilie
            </h1>
            <p className="text-lg text-gray-300">
              Duas personalidades distintas habitam o mesmo corpo imortal, cada uma com suas próprias características,
              motivações e formas de interagir com o mundo.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Evelynn */}
            <Card className="bg-midnight-700 text-gray-200">
              <CardHeader className="border-b border-midnight-600">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif text-2xl text-silver-300">Evelynn</CardTitle>
                  <Badge variant="outline" className="border-gothic-500 text-gothic-400">
                    A Escritora Erudita
                  </Badge>
                </div>
                <p className="text-sm text-gray-400">A Visionária Intelectual</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h4 className="mb-3 flex items-center text-sm font-semibold text-silver-300">
                    <Users className="mr-2 h-4 w-4" />
                    Postura e Movimentos
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Postura refinada e andar fluido, acostumada a círculos intelectuais</li>
                    <li>• Gestos calculados, lentos e graciosos, com toque natural de teatralidade</li>
                    <li>• Mantém as mãos ocupadas com livros, cálices ou traçando palavras no ar</li>
                    <li>• Sotaque francês forte, adquirido durante décadas em Paris</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center text-sm font-semibold text-silver-300">
                    <Eye className="mr-2 h-4 w-4" />
                    Voz e Expressões
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Voz baixa, envolvente e carregada de mistério</li>
                    <li>• Evita respostas diretas, prefere analogias e citações literárias</li>
                    <li>• Olhos demonstram fascínio constante, como se visse além da realidade</li>
                    <li>• Pequenos sorrisos enigmáticos acompanham suas falas</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center text-sm font-semibold text-silver-300">
                    <Zap className="mr-2 h-4 w-4" />
                    Traços de Loucura
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Lapsos onde parece escutar algo que outros não ouvem</li>
                    <li>• Murmura para si mesma ou presenças invisíveis em momentos de tensão</li>
                    <li>• Rituais como tocar os pulsos antes de escrever</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Emilie/La Dame Noire */}
            <Card className="bg-midnight-700 text-gray-200">
              <CardHeader className="border-b border-midnight-600">
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif text-2xl text-silver-300">Emilie</CardTitle>
                  <Badge variant="outline" className="border-blood-600 text-blood-400">
                    La Dame Noire
                  </Badge>
                </div>
                <p className="text-sm text-gray-400">A Femme Fatale Sombria</p>
              </CardHeader>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h4 className="mb-3 flex items-center text-sm font-semibold text-silver-300">
                    <Users className="mr-2 h-4 w-4" />
                    Postura e Movimentos
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Postura felina e predatória - não anda, desliza pelo ambiente</li>
                    <li>• Movimentos calculados e perigosos, toques sutis e sedutores</li>
                    <li>• Contato visual direto, desafiador e intenso</li>
                    <li>• Como se estivesse dissecando a alma de quem observa</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center text-sm font-semibold text-silver-300">
                    <Eye className="mr-2 h-4 w-4" />
                    Voz e Expressões
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Voz rouca e sedutora, palavras arrastadas e carregadas de intenção</li>
                    <li>• Não divaga - manipula com palavras afiadas e certeiras</li>
                    <li>• Silêncios calculados para criar tensão</li>
                    <li>• Sorrisos sempre carregam algo perigoso por trás</li>
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 flex items-center text-sm font-semibold text-silver-300">
                    <Zap className="mr-2 h-4 w-4" />
                    Traços de Loucura
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Compulsão por controle e dominação</li>
                    <li>• Testa limites das pessoas só para ver reações</li>
                    <li>• Pode esquecer que é Evelynn em certos momentos</li>
                    <li>• Sussurros mais evidentes em momentos de prazer ou violência</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gatilhos e Transições */}
          <div className="mt-12 space-y-8">
            <Card className="bg-midnight-700 text-gray-200">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-silver-300">Gatilhos da Transição</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-300">
                  A mudança de personalidade pode ser desencadeada por diversos fatores:
                </p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Ser alvo do poder Dementação usado por um vampiro mais forte</li>
                  <li>• Compulsão do Clã Malkaviano</li>
                  <li>• Informações muito intensas vindas da Teia</li>
                  <li>• Influência de terceiros, se provocada da maneira certa</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-midnight-700 text-gray-200">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-silver-300">Memórias e Consciência</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-sm text-gray-300">
                  <p>
                    <strong>Evelynn e Emilie lembram de tudo?</strong> A resposta não é simples:
                  </p>
                  <ul className="space-y-2">
                    <li>• Têm fragmentos de memória, como cenas de teatro sem controle sobre falas ou gestos</li>
                    <li>• Às vezes a lembrança vem distorcida, como um sonho vívido indistinguível da realidade</li>
                    <li>• Outras vezes há apagão total, acordando cercadas por consequências inexplicáveis</li>
                    <li>• Em momentos de lucidez, uma pode assistir a outra agir, presa no próprio corpo</li>
                    <li>• Raramente coexistem brevemente, com pensamentos se misturando em jogo de domínio</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-midnight-700 text-gray-200">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-silver-300">Resquícios da Troca</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    • <strong>Deslocamento:</strong> Como sair de um transe, demoram para reconhecer onde estão
                  </li>
                  <li>
                    • <strong>Euforia ou exaustão:</strong> Dependendo do ocorrido, sentem-se intoxicadas ou drenadas
                  </li>
                  <li>
                    • <strong>Vestígios:</strong> Sussurros uma da outra ecoam, lembrando que nunca estão sozinhas
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
