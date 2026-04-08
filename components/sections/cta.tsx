import Link from 'next/link'
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CTASection() {
  return (
    <section className="border-t border-border bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background p-8 md:p-12 lg:p-16">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=1920&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-background/85" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/15 via-background/20 to-background/70" />
          
          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="text-balance">Pronto para transformar sua ideia em arte?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
              Agende sua sessão agora mesmo e dê o primeiro passo para eternizar 
              sua história na pele. Atendimento personalizado e exclusivo.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/agendar">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Online
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/5521981116478"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Sinal a partir de R$ 100,00. O valor do sinal é descontado do preço final da tatuagem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
