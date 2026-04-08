import type { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { CourseModuleVisual } from '@/lib/course'

type CursoSplitSectionProps = {
  kicker?: string
  title?: string
  subtitle?: string
  paragraphs?: readonly string[]
  bullets?: readonly string[]
  /** Conteúdo à esquerda (substitui title/subtitle/paragraphs/bullets quando usado). */
  leftContent?: ReactNode
  imageSrc: string
  imageAlt: string
  footer?: ReactNode
  className?: string
  visual?: CourseModuleVisual
}

export function CursoSplitSection({
  kicker,
  title,
  subtitle,
  paragraphs,
  bullets,
  leftContent,
  imageSrc,
  imageAlt,
  footer,
  className,
  visual = 'split',
}: CursoSplitSectionProps) {
  const textBlock =
    leftContent ??
    (
      <>
        {kicker ? (
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 sm:text-xs">{kicker}</p>
        ) : null}
        {title ? (
          <h2 className="mt-3 font-sans text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h2>
        ) : null}
        {subtitle ? (
          <p className="mt-4 font-sans text-sm font-semibold uppercase leading-snug tracking-wide text-white/95 sm:text-base md:text-lg">
            {subtitle}
          </p>
        ) : null}
        {paragraphs?.length ? (
          <div className="mt-6 space-y-4">
            {paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="font-sans text-xs font-normal uppercase leading-relaxed tracking-[0.12em] text-white/85 sm:text-sm md:tracking-[0.18em]"
              >
                {p}
              </p>
            ))}
          </div>
        ) : null}
        {bullets?.length ? (
          <ul className="mt-8 space-y-3 font-sans text-xs font-medium uppercase leading-snug tracking-wide text-white/90 sm:text-sm">
            {bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-0.5 shrink-0 text-accent">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        ) : null}
      </>
    )

  const imageColumn =
    visual === 'circle-study' ? (
      <div className="relative flex min-h-[320px] flex-col items-center justify-center bg-black py-12 lg:min-h-full lg:py-0">
        <div className="pointer-events-none absolute left-0 top-0 z-10 hidden h-full w-20 bg-gradient-to-r from-black to-transparent lg:block" />
        <div className="relative z-[1] flex flex-col items-center justify-center px-6">
          <div className="absolute right-6 top-6 z-20 flex flex-col gap-1 sm:right-10 sm:top-10">
            <span className="-rotate-6 rounded-sm bg-black px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg sm:text-xs">
              STUDY
            </span>
            <span className="ml-2 rotate-3 rounded-sm bg-black px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-lg sm:text-xs">
              TIME
            </span>
          </div>
          <div className="relative aspect-square w-[min(78vw,22rem)] sm:w-[min(70vw,24rem)]">
            <div className="absolute -inset-6 -z-10 rounded-full bg-accent/25 blur-3xl" />
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="rounded-full border-2 border-accent/50 object-cover shadow-2xl"
              sizes="(max-width: 1024px) 80vw, 24rem"
            />
          </div>
        </div>
      </div>
    ) : (
      <div className="relative min-h-[280px] w-full bg-neutral-900 lg:min-h-[min(100%,32rem)]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={false}
        />
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[40%] max-w-[10rem] bg-gradient-to-r from-black to-transparent sm:max-w-[14rem]"
          aria-hidden
        />
      </div>
    )

  return (
    <section className={cn('bg-black text-white', className)}>
      <div className="grid lg:grid-cols-2">
        <div className="order-1 flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-20">
          {textBlock}
          {footer ? <div className="mt-10">{footer}</div> : null}
        </div>
        <div className="order-2 min-h-0 border-t border-white/5 lg:border-l lg:border-t-0">{imageColumn}</div>
      </div>
    </section>
  )
}
