'use client'

import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { TATTOO_STYLES } from '@/lib/products'

export function StylesPreviewSection() {
  const plugins = useMemo(
    () => [
      Autoplay({
        delay: 4000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        stopOnFocusIn: false,
      }),
    ],
    [],
  )

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-accent">Especialidades</span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">Estilos de Tatuagem</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Domino diversos estilos de tatuagem para atender qualquer visão artística. Do minimalismo ao realismo,
            cada estilo é executado com maestria.
          </p>
        </div>

        <div className="relative mt-12 px-10 sm:px-12 md:px-14">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={plugins}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {TATTOO_STYLES.map((style) => (
                <CarouselItem key={style.id} className="basis-full pl-3 sm:basis-1/2 sm:pl-4 lg:basis-1/3">
                  <Link
                    href={`/estilos#${style.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-accent/50 hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={style.image}
                        alt={`Exemplo de ${style.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                    </div>
                    <div className="relative flex flex-1 flex-col p-5 sm:p-6">
                      <h3 className="font-serif text-xl font-semibold transition-colors group-hover:text-accent">
                        {style.name}
                      </h3>
                      <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">{style.description}</p>
                      <div className="mt-4 flex items-center text-sm font-medium text-accent">
                        Saiba mais
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              variant="outline"
              className="left-1 z-10 size-9 border-border bg-background/95 shadow-md sm:left-2 md:size-10"
            />
            <CarouselNext
              variant="outline"
              className="right-1 z-10 size-9 border-border bg-background/95 shadow-md sm:right-2 md:size-10"
            />
          </Carousel>
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
