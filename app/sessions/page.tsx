import Link from "next/link"
import { Calendar, Clock, Users, Scroll } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function SessionsPage() {
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
                <Scroll className="h-5 w-5 text-crimson-500" />
                <span className="text-sm text-gray-300">
                  Sistema: <strong>Vampire: The Masquerade</strong>
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
              <Card key={session.id} className="bg-midnight-700 text-gray-200">
                <CardHeader className="border-b border-midnight-600">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="font-serif text-xl text-silver-300">
                        Sessão #{session.number}: {session.title}
                      </CardTitle>
                      <div className="mt-2 flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{session.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{session.duration}</span>
                        </div>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={`border-${session.status === "completed" ? "green" : "yellow"}-600 text-${session.status === "completed" ? "green" : "yellow"}-400`}
                    >
                      {session.status === "completed" ? "Concluída" : "Em Andamento"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="mb-4 text-gray-300">{session.summary}</p>

                  {session.keyEvents && session.keyEvents.length > 0 && (
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold text-silver-300">Eventos Principais:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-400">
                        {session.keyEvents.map((event, index) => (
                          <li key={index}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {session.participants && (
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-semibold text-silver-300">Participantes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {session.participants.map((participant) => (
                          <Badge key={participant} variant="secondary" className="bg-midnight-600 text-xs">
                            {participant}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/sessions/${session.id}`}
                    className="inline-flex items-center text-sm text-crimson-500 hover:text-crimson-400"
                  >
                    <Scroll className="mr-1 h-4 w-4" />
                    Ler resumo completo
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400">Mais sessões serão adicionadas conforme a campanha progride...</p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

const sessions = [
  {
    id: "session-01",
    number: 1,
    title: "Primeiras Sombras",
    date: "30 de Outubro, 1929",
    duration: "4h 30min",
    status: "completed",
    summary:
      "A coterie Ordo Noctis se forma oficialmente durante uma noite turbulenta em Nova Orleans. Os cinco vampiros se encontram pela primeira vez em circunstâncias misteriosas, forçados a cooperar diante de uma ameaça comum que emerge das profundezas da cidade.",
    keyEvents: [
      "Primeiro encontro da coterie no French Quarter",
      "Descoberta de corpos drenados no bayou",
      "Confronto inicial com caçadores de vampiros",
      "Estabelecimento do pacto de sangue entre os membros",
    ],
    participants: ["Nadine", "Emilie", "Desmond", "Helena", "Étienne", "Richard"],
  },
  {
    id: "session-02",
    title: "Segredos do Elysium",
    number: 2,
    date: "6 de Novembro, 1929",
    duration: "3h 45min",
    status: "completed",
    summary:
      "A coterie é formalmente apresentada ao Elysium de Nova Orleans. Política vampírica, alianças antigas e novos inimigos emergem enquanto os personagens navegam pelas complexas relações de poder da cidade.",
    keyEvents: [
      "Apresentação formal ao Príncipe Inês LaCroix",
      "Encontro com o Senescal William Crawford",
      "Revelação sobre territórios em disputa",
      "Primeira missão oficial da coterie",
    ],
    participants: ["Nadine", "Emilie", "Desmond", "Helena", "Étienne"],
  },
  {
    id: "session-03",
    title: "Ecos do Passado",
    number: 3,
    date: "13 de Novembro, 1929",
    duration: "4h 15min",
    status: "completed",
    summary:
      "Memórias do passado mortal dos personagens começam a interferir no presente. Segredos enterrados emergem e ameaçam a estabilidade da coterie enquanto enfrentam fantasmas de suas vidas anteriores.",
    keyEvents: [
      "Flashbacks revelam passados conectados",
      "Descoberta de uma conspiração antiga",
      "Confronto com figuras do passado mortal",
      "Fortalecimento dos laços da coterie",
    ],
    participants: ["Nadine", "Emilie", "Desmond", "Helena", "Étienne", "Richard"],
  },
]
