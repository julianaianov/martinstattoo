import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { TATTOO_STYLES } from '@/lib/products'

export function StylesPreviewSection() {
  const previewStyles = TATTOO_STYLES.slice(0, 4)

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-accent">
            Especialidades
          </span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Estilos de Tatuagem
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Domino diversos estilos de tatuagem para atender qualquer visão artística. 
            Do minimalismo ao realismo, cada estilo é executado com maestria.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {previewStyles.map((style) => (
            <Link
              key={style.id}
              href={`/estilos#${style.id}`}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-0 transition-all hover:border-accent/50 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                <img
                  src={style.image}
                  alt={`Exemplo de ${style.name}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
              </div>
              <div className="relative p-6">
                <h3 className="font-serif text-xl font-semibold transition-colors group-hover:text-accent">
                  {style.name}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {style.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-accent">
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/estilos">
              Ver Todos os Estilos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
