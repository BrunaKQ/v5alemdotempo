import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nova Orleans - Além do Tempo',
  description: 'Explore as crônicas da Coterie Ordo Noctis.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
