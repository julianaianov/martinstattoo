import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { TATTOO_STYLES } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Estilos de Tatuagem | Martins Tattoo',
  description:
    'Conheça os estilos oferecidos: Comic Colorido, Fine Line, Realismo, Religioso, Tribal, Animais, Pet, Old School e mais.',
}

export default function EstilosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Especialidades
              </span>
              <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Estilos de Tatuagem
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Cada estilo tem sua própria linguagem e expressão artística. 
                Descubra qual combina mais com você.
              </p>
            </div>

            <div className="mt-16 space-y-16">
              {TATTOO_STYLES.map((style, index) => (
                <div
                  key={style.id}
                  id={style.id}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? 'lg:[direction:rtl]' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={style.image}
                          alt={`Exemplo de ${style.name}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:[direction:ltr]' : ''}>
                    <span className="text-sm font-medium uppercase tracking-wider text-accent">
                      Estilo {String(index + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-3 font-serif text-3xl font-bold">{style.name}</h2>
                    <p className="mt-4 text-lg text-muted-foreground">{style.description}</p>
                    <ul className="mt-6 space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Design personalizado para cada cliente
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Técnica refinada ao longo de anos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        Consulta gratuita para discutir seu projeto
                      </li>
                    </ul>
                    <div className="mt-8">
                      <Button asChild>
                        <Link href="/agendar">
                          Quero esse estilo
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold">Não sabe qual estilo escolher?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Agende uma consulta gratuita e conversamos sobre sua ideia. 
              Juntos, encontraremos o estilo perfeito para sua tatuagem.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/agendar">
                  Agendar Consulta Gratuita
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
