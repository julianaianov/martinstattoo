import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-start overflow-hidden pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <video
          className="absolute inset-0 h-full w-full min-h-full min-w-full scale-105 object-cover object-center"
          src="/terror.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/terror.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/25 dark:bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/55" />
      </div>

      <div className="w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Agenda aberta para novos projetos
          </div>

          <div className="mb-6 flex justify-start">
            <Image
              src="/images/logo-martin.png"
              alt="Martins Tattoo"
              width={320}
              height={320}
              className="h-36 w-auto object-contain sm:h-40 md:h-44"
              priority
            />
          </div>

          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-balance">Arte que conta</span>
            <br />
            <span className="text-balance text-muted-foreground">sua história</span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
            Wanderson Martins (Terrozinho) transforma suas ideias em arte permanente.
            Mais de 10 anos de experiência criando tatuagens únicas e personalizadas.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:justify-start">
            <Button size="lg" asChild>
              <Link href="/agendar">
                Agendar Sessão
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/portfolio">Ver Portfólio</Link>
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-start gap-6">
            <a
              href="https://instagram.com/terrozinho"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              @terrozinho
            </a>
          </div>
        </div>

        <div className="mt-20 grid max-w-2xl grid-cols-2 gap-8 border-t border-border pt-12 md:grid-cols-4 md:max-w-none">
          {[
            { value: '10+', label: 'Anos de Experiência' },
            { value: '2000+', label: 'Tatuagens Realizadas' },
            { value: '100%', label: 'Clientes Satisfeitos' },
            { value: '9+', label: 'Estilos Dominados' },
          ].map((stat) => (
            <div key={stat.label} className="text-left">
              <div className="font-serif text-3xl font-bold md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
