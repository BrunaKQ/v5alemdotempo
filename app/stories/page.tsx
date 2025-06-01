import Link from "next/link"
import { BookOpen, Clock, Calendar, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function StoriesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <h1 className="font-serif text-3xl font-bold text-amber-500">Todas as Histórias</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="search"
                placeholder="Buscar histórias..."
                className="w-full bg-neutral-800 pl-10 text-gray-200 placeholder:text-gray-500 focus-visible:ring-amber-500"
              />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {allStories.map((story) => (
              <Card key={story.id} className="bg-neutral-800 text-gray-200">
                <CardHeader className="border-b border-neutral-700 pb-3">
                  <CardTitle className="font-serif text-xl text-amber-400">{story.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="line-clamp-3 text-sm text-gray-300">{story.excerpt}</p>
                  <div className="mt-4 flex items-center text-xs text-gray-400">
                    <Clock className="mr-1 h-3 w-3" />
                    <span>{story.readTime} min de leitura</span>
                    <span className="mx-2">•</span>
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>{story.date}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link
                    href={`/stories/${story.id}`}
                    className="flex items-center text-sm text-red-500 hover:text-red-400"
                  >
                    <BookOpen className="mr-1 h-4 w-4" />
                    Ler história completa
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <Button variant="outline" className="border-neutral-700 text-gray-400" disabled>
                Anterior
              </Button>
              <Button variant="outline" className="border-amber-500 bg-amber-500/10 text-amber-500">
                1
              </Button>
              <Button variant="outline" className="border-neutral-700 text-gray-400">
                2
              </Button>
              <Button variant="outline" className="border-neutral-700 text-gray-400">
                3
              </Button>
              <Button variant="outline" className="border-neutral-700 text-gray-400">
                Próxima
              </Button>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

const allStories = [
  {
    id: "sangue-e-jazz",
    title: "Sangue e Jazz",
    excerpt:
      "Nas noites de jazz do Quarteirão Francês, Eleonora encontra sua próxima vítima - um trompetista cujo sangue promete um sabor tão doce quanto suas melodias.",
    readTime: 12,
    date: "15 Mai 2024",
  },
  {
    id: "sombras-do-bayou",
    title: "Sombras do Bayou",
    excerpt:
      "Quando corpos começam a aparecer nas margens do bayou, o detetive mortal Marcel Dubois se aproxima perigosamente dos segredos do clã Beaumont.",
    readTime: 15,
    date: "22 Mai 2024",
  },
  {
    id: "baile-de-mascaras",
    title: "Baile de Máscaras",
    excerpt:
      "O baile anual da sociedade de Nova Orleans esconde um propósito mais sombrio, onde vampiros centenários escolhem novos membros para sua eterna família.",
    readTime: 10,
    date: "29 Mai 2024",
  },
  {
    id: "o-antiquario",
    title: "O Antiquário",
    excerpt:
      "Uma loja de antiguidades no coração de Nova Orleans guarda relíquias de séculos passados - e seu proprietário imortal conhece a história de cada uma delas.",
    readTime: 14,
    date: "5 Jun 2024",
  },
  {
    id: "lua-vermelha",
    title: "Lua Vermelha",
    excerpt:
      "Durante um raro eclipse lunar, os poderes dos vampiros atingem seu auge, e uma jovem recém-transformada descobre o verdadeiro alcance de suas habilidades.",
    readTime: 18,
    date: "12 Jun 2024",
  },
  {
    id: "o-pacto",
    title: "O Pacto",
    excerpt:
      "Duas famílias vampíricas rivais formam uma aliança frágil contra caçadores que chegaram à cidade, mas antigas traições ameaçam destruir a paz.",
    readTime: 20,
    date: "19 Jun 2024",
  },
]
