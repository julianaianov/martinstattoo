import Link from 'next/link'
import { ArrowRight, BookOpen, GraduationCap, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CoursePreviewSection() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 rounded-2xl border border-border bg-card p-8 md:grid-cols-2 md:p-12">
          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-accent">Curso Profissional</span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Curso de Tatuagem com Wanderson Martins
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Aprenda do zero ao avançado com acompanhamento prático, técnicas reais de estúdio e suporte para
              começar a atender com segurança.
            </p>

            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-accent" />
                Fundamentos, biossegurança e montagem de setup
              </li>
              <li className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-accent" />
                Prática orientada em traço, sombra e preenchimento
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-accent" />
                Mentoria para portfólio e primeiros clientes
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-background p-6 md:p-8">
            <p className="text-sm uppercase tracking-wider text-accent">Vagas Limitadas</p>
            <p className="mt-2 font-serif text-3xl font-bold">Venda do Curso Aberta</p>
            <p className="mt-3 text-muted-foreground">
              Fale agora para receber cronograma, valores e condições de matrícula.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button size="lg" asChild>
                <Link href="/curso/inscricao">
                  Inscrição ou informações
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/curso">Ver detalhes do curso</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
