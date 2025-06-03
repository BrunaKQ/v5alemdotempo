'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useMobile } from '@/hooks/use-mobile'

export function SiteHeader() {
  const isMobile = useMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-midnight-700 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex flex-col items-center">
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
              <div className="absolute left-0 top-16 z-50 w-full bg-midnight-900 bg-opacity-95 p-4 backdrop-blur-sm">
                <nav className="flex flex-col space-y-4">
                  <Link
                    href="/"
                    className="border-b border-midnight-700 pb-2 text-gray-200 hover:text-silver-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Início
                  </Link>
                  <Link
                    href="/coterie"
                    className="border-b border-midnight-700 pb-2 text-gray-200 hover:text-silver-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    A Coterie
                  </Link>
                  <Link
                    href="/sessoes"
                    className="border-b border-midnight-700 pb-2 text-gray-200 hover:text-silver-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sessões
                  </Link>
                  <Link
                    href="/elysium"
                    className="border-b border-midnight-700 pb-2 text-gray-200 hover:text-silver-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Elysium
                  </Link>
                  <Link
                    href="/memoriam"
                    className="border-b border-midnight-700 pb-2 text-gray-200 hover:text-silver-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    In Memoriam
                  </Link>
                  <Link
                    href="/roleplay"
                    className="border-b border-midnight-700 pb-2 text-gray-200 hover:text-silver-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Roleplay
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-200 hover:text-silver-300"
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
            <Link href="/" className="text-gray-200 hover:text-silver-300">
              Início
            </Link>
            <Link href="/coterie" className="text-gray-200 hover:text-silver-300">
              A Coterie
            </Link>
            <Link href="/sessoes" className="text-gray-200 hover:text-silver-300">
              Sessões
            </Link>
            <Link href="/elysium" className="text-gray-200 hover:text-silver-300">
              Elysium
            </Link>
            <Link href="/memoriam" className="text-gray-200 hover:text-silver-300">
              In Memoriam
            </Link>
            <Link href="/roleplay" className="text-gray-200 hover:text-silver-300">
              Roleplay
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-silver-300">
              Sobre
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
