import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-midnight-700 bg-black py-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-silver-200">Crônicas</h3>
            <p className="text-sm text-gray-400">
              Histórias de vampiros na Nova Orleans de 1929, onde o sobrenatural encontra o jazz.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-silver-200">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-silver-300">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/coterie" className="text-gray-400 hover:text-silver-300">
                  A Coterie
                </Link>
              </li>
              <li>
                <Link href="/sessoes" className="text-gray-400 hover:text-silver-300">
                  Sessões
                </Link>
              </li>
              <li>
                <Link href="/elysium" className="text-gray-400 hover:text-silver-300">
                  Elysium
                </Link>
              </li>
              <li>
                <Link href="/memoriam" className="text-gray-400 hover:text-silver-300">
                  In Memoriam
                </Link>
              </li>
              <li>
                <Link href="/roleplay" className="text-gray-400 hover:text-silver-300">
                  Roleplay
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-silver-200">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-silver-300">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-silver-300">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-gray-400 hover:text-silver-300">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-silver-200">Social</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-silver-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-silver-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-silver-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-midnight-700 pt-6 text-center text-xs text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Crônicas de Nova Orleans - Além do Tempo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
