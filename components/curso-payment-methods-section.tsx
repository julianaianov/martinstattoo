import { Check } from 'lucide-react'
import { CursoSplitSection } from '@/components/curso-split-section'
import {
  COURSE_IMAGE_INVESTMENT,
  COURSE_PAYMENT_METHODS,
  COURSE_PAYMENT_METHODS_KICKER,
} from '@/lib/course'

export function CursoPaymentMethodsSection() {
  return (
    <CursoSplitSection
      imageSrc={COURSE_IMAGE_INVESTMENT}
      imageAlt="Ambiente profissional de tatuagem"
      leftContent={
        <>
          <h2 className="font-sans text-3xl font-black uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
            {COURSE_PAYMENT_METHODS_KICKER}
          </h2>
          <ul className="mt-10 space-y-5">
            {COURSE_PAYMENT_METHODS.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/60 bg-accent/10 text-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="font-sans text-xs font-normal uppercase leading-relaxed tracking-[0.12em] text-white/88 sm:text-sm md:tracking-[0.16em]">
                  {line}
                </span>
              </li>
            ))}
          </ul>
        </>
      }
    />
  )
}
