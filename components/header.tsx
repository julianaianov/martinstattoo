'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/estilos', label: 'Estilos' },
  { href: '/curso', label: 'Curso' },
  { href: '/cuidados', label: 'Cuidados' },
  { href: '/agendar', label: 'Agendar' },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-martin.png"
            alt="Martins Tattoo"
            width={48}
            height={48}
            className="rounded-sm"
          />
          <span className="hidden font-serif text-lg font-semibold tracking-wide sm:block">
            MARTINS TATTOO
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/agendar">Agendar Sessão</Link>
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 pt-8">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                <Image
                  src="/images/logo-martin.png"
                  alt="Martins Tattoo"
                  width={40}
                  height={40}
                  className="rounded-sm"
                />
                <span className="font-serif text-lg font-semibold">MARTINS TATTOO</span>
              </Link>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-md px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-4">
                <Link href="/agendar" onClick={() => setIsOpen(false)}>
                  Agendar Sessão
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
