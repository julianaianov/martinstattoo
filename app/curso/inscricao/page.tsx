import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CursoInscricaoFlow } from '@/components/curso-inscricao-flow'

export default function CursoInscricaoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center sm:text-left">
              <span className="text-sm font-medium uppercase tracking-wider text-accent">Curso</span>
              <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Inscrição e informações
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground sm:mx-0">
                Mesmo fluxo profissional do estúdio: você preenche, confere o resumo e finaliza no WhatsApp — com PIX
                quando for inscrição.
              </p>
            </div>
            <div className="mt-12">
              <CursoInscricaoFlow />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
