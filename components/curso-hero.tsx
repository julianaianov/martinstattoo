import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CursoProgramDialog } from '@/components/curso-program-dialog'
import { COURSE_IMAGE_HERO } from '@/lib/course'

export function CursoHero() {
  return (
    <section className="relative bg-black text-white">
      <div className="grid lg:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-14 xl:px-20 lg:py-24">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.45em] text-white/80 sm:text-sm">
            CURSO DE TATUAGEM
          </p>
          <h1 className="mt-2 font-sans text-[clamp(3.5rem,14vw,9rem)] font-black uppercase leading-[0.82] tracking-tighter text-white">
            INICIANTE
          </h1>
          <p className="mt-8 font-sans text-[10px] uppercase tracking-[0.4em] text-white/60">POR</p>
          <p className="mt-3 inline-flex w-fit rounded-full border border-accent/80 px-5 py-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-white sm:text-sm">
            WANDERSON MARTINS
          </p>
          <p className="mt-8 max-w-md font-sans text-sm leading-relaxed text-white/70">
            Formação individual, do desenho ao mercado — com o mesmo padrão do estúdio Martins Tattoo.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button size="lg" className="font-sans uppercase tracking-wide" asChild>
              <Link href="/curso/inscricao">
                Inscrição ou informações
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <CursoProgramDialog variant="onDark" />
          </div>
        </div>
        <div className="relative min-h-[320px] lg:min-h-[520px]">
          <Image
            src={COURSE_IMAGE_HERO}
            alt="Wanderson Martins — ambiente de tatuagem profissional"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[55%] max-w-md bg-gradient-to-r from-black via-black/80 to-transparent"
            aria-hidden
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 lg:hidden" />
        </div>
      </div>
    </section>
  )
}
