import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Clock, MessageCircle, Sparkles, Users } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { CursoFaq } from '@/components/curso-faq'
import { CursoHero } from '@/components/curso-hero'
import { CursoInstructorSection } from '@/components/curso-instructor-section'
import { CursoPaymentMethodsSection } from '@/components/curso-payment-methods-section'
import { CursoProgramDialog } from '@/components/curso-program-dialog'
import { CursoSplitSection } from '@/components/curso-split-section'
import {
  COURSE_ABOUT_BODY,
  COURSE_DURATION,
  COURSE_FOR_WHO,
  COURSE_FORMAT,
  COURSE_GRADUAL_BODY,
  COURSE_GRADUAL_TITLE,
  COURSE_IMAGE_ABOUT,
  COURSE_IMAGE_GRADUAL,
  COURSE_IMAGE_INVESTMENT,
  COURSE_INCLUDES,
  COURSE_INVESTMENT_PARAGRAPHS,
  COURSE_MODULES_DETAILED,
} from '@/lib/course'

export const metadata: Metadata = {
  title: 'Curso de Tatuagem | Martins Tattoo',
  description:
    'Curso de tatuagem iniciante com Wanderson Martins. 6 meses, aulas individuais, módulos completos. Inscrição via PIX e WhatsApp.',
}

function CursoCtaFooter() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Button size="lg" className="font-sans uppercase tracking-wide" asChild>
        <Link href="/curso/inscricao">
          Inscrição ou informações
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <CursoProgramDialog variant="onDark" />
    </div>
  )
}

export default function CursoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black pt-16">
        <CursoHero />

        <CursoSplitSection
          title="SOBRE O CURSO"
          paragraphs={[COURSE_ABOUT_BODY]}
          imageSrc={COURSE_IMAGE_ABOUT}
          imageAlt="Sobre o curso de tatuagem"
          footer={<CursoCtaFooter />}
        />

        <CursoInstructorSection />

        <CursoSplitSection
          title={COURSE_GRADUAL_TITLE}
          paragraphs={[COURSE_GRADUAL_BODY]}
          imageSrc={COURSE_IMAGE_GRADUAL}
          imageAlt="Prática supervisionada de tatuagem"
          footer={<CursoCtaFooter />}
        />

        {COURSE_MODULES_DETAILED.map((mod) => (
          <CursoSplitSection
            key={mod.id}
            kicker={mod.kicker}
            title={mod.title}
            subtitle={mod.subtitle}
            bullets={mod.bullets}
            imageSrc={mod.imageSrc}
            imageAlt={mod.imageAlt}
            visual={mod.visual}
            footer={<CursoCtaFooter />}
          />
        ))}

        <CursoSplitSection
          title="INVESTIMENTO"
          paragraphs={[...COURSE_INVESTMENT_PARAGRAPHS]}
          imageSrc={COURSE_IMAGE_INVESTMENT}
          imageAlt="Investimento no curso"
          footer={<CursoCtaFooter />}
        />

        <CursoPaymentMethodsSection />

        <section className="border-t border-white/10 bg-zinc-950 py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">Para quem é</h2>
                <ul className="mt-6 space-y-4">
                  {COURSE_FOR_WHO.map((t) => (
                    <li key={t} className="flex gap-3 text-zinc-400">
                      <Users className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">Resumo do que está incluso</h2>
                <ul className="mt-6 space-y-4">
                  {COURSE_INCLUDES.map((t) => (
                    <li key={t} className="flex gap-3 text-zinc-400">
                      <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-black py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6">
                <Clock className="h-8 w-8 text-accent" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-white">Duração e formato</h3>
                <p className="mt-2 text-sm text-zinc-400">{COURSE_DURATION}</p>
                <p className="mt-3 text-sm text-zinc-400">{COURSE_FORMAT}</p>
              </div>
              <div className="rounded-2xl border border-accent/25 bg-accent/5 p-6 md:col-span-2">
                <h3 className="font-serif text-lg font-semibold text-white">Próximo passo</h3>
                <p className="mt-2 text-zinc-400">
                  Use o fluxo oficial de inscrição: você escolhe se quer matrícula (com PIX e comprovante no WhatsApp)
                  ou só tirar dúvidas.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    Resumo com seus dados antes de abrir o WhatsApp
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    Chave PIX CNPJ e envio do comprovante na conversa
                  </li>
                </ul>
                <Button className="mt-6" asChild>
                  <Link href="/curso/inscricao">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Abrir fluxo de inscrição
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-zinc-950 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-2xl font-bold text-white sm:text-3xl">Perguntas frequentes</h2>
            <div className="mt-10">
              <CursoFaq />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
