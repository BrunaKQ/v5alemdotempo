'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMobile } from '@/hooks/use-mobile'
import { usePathname } from 'next/navigation'

export function SiteHeader() {
  const isMobile = useMobile()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="sticky top-0 z-40 border-b border-midnight-700 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex flex-col items-center" title="Página inicial">
            <span className="font-serif text-lg font-bold text-silver-200">Nova Orleans</span>
            <span className="text-xs text-crimson-500">Além do Tempo</span>
          </Link>
        </div>

        {/* Navegação Mobile */}
        {isMobile ? (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200"
              aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </Button>

            {/* Menu dropdown mobile */}
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute left-0 top-16 z-50 w-full bg-midnight-900 bg-opacity-95 p-4 backdrop-blur-sm"
              >
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className={`border-b border-midnight-700 pb-2 hover:text-silver-300 ${
                      pathname === '/' ? 'text-crimson-400' : 'text-gray-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Início
                  </Link>
                  <Link
                    href="/coterie"
                    className={`border-b border-midnight-700 pb-2 hover:text-silver-300 ${
                      pathname === '/coterie' ? 'text-crimson-400' : 'text-gray-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    A Coterie
                  </Link>
                  <Link
                    href="/sires"
                    className={`border-b border-midnight-700 pb-2 hover:text-silver-300 ${
                      pathname === '/sires' ? 'text-crimson-400' : 'text-gray-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sires
                  </Link>
                  <Link
                    href="/sessoes"
                    className={`border-b border-midnight-700 pb-2 hover:text-silver-300 ${
                      pathname === '/sessoes' ? 'text-crimson-400' : 'text-gray-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sessões
                  </Link>
                  <Link
                    href="/elysium"
                    className={`border-b border-midnight-700 pb-2 hover:text-silver-300 ${
                      pathname === '/elysium' ? 'text-crimson-400' : 'text-gray-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Elysium
                  </Link>
                  <Link
                    href="/memoriam"
                    className={`border-b border-midnight-700 pb-2 hover:text-silver-300 ${
                      pathname === '/memoriam' ? 'text-crimson-400' : 'text-gray-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    In Memoriam
                  </Link>
                  <Link
                    href="/roleplay"
                    className={`border-b border-midnight-700 pb-2 hover:text-silver-300 ${
                      pathname === '/roleplay' ? 'text-crimson-400' : 'text-gray-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Roleplay
                  </Link>
                  <Link
                    href="/about"
                    className={`hover:text-silver-300 ${
                      pathname === '/about' ? 'text-crimson-400' : 'text-gray-200'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sobre
                  </Link>
                </nav>
              </div>
            )}
          </>
        ) : (
          /* Navegação Desktop */
          <nav className="flex items-center space-x-6">
            <Link
              href="/"
              className={`hover:text-silver-300 ${
                pathname === '/' ? 'text-crimson-400' : 'text-gray-200'
              }`}
            >
              Início
            </Link>
            <Link
              href="/coterie"
              className={`hover:text-silver-300 ${
                pathname === '/coterie' ? 'text-crimson-400' : 'text-gray-200'
              }`}
            >
              A Coterie
            </Link>
            <Link
              href="/sires"
              className={`hover:text-silver-300 ${
                pathname === '/sires' ? 'text-crimson-400' : 'text-gray-200'
              }`}
            >
              Sires
            </Link>
            <Link
              href="/sessoes"
              className={`hover:text-silver-300 ${
                pathname === '/sessoes' ? 'text-crimson-400' : 'text-gray-200'
              }`}
            >
              Sessões
            </Link>
            <Link
              href="/elysium"
              className={`hover:text-silver-300 ${
                pathname === '/elysium' ? 'text-crimson-400' : 'text-gray-200'
              }`}
            >
              Elysium
            </Link>
            <Link
              href="/memoriam"
              className={`hover:text-silver-300 ${
                pathname === '/memoriam' ? 'text-crimson-400' : 'text-gray-200'
              }`}
            >
              In Memoriam
            </Link>
            <Link
              href="/roleplay"
              className={`hover:text-silver-300 ${
                pathname === '/roleplay' ? 'text-crimson-400' : 'text-gray-200'
              }`}
            >
              Roleplay
            </Link>
            <Link
              href="/about"
              className={`hover:text-silver-300 ${
                pathname === '/about' ? 'text-crimson-400' : 'text-gray-200'
              }`}
            >
              Sobre
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
