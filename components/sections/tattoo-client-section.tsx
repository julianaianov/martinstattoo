import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, MessageCircle, Palette, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WHATSAPP_DISPLAY, whatsappLink } from '@/lib/contact'

const waInfo = whatsappLink(
  'Olá! Quero fazer uma tatuagem e gostaria de conversar sobre ideia, disponibilidade e orçamento.',
)

export function TattooClientSection() {
  return (
    <section className="relative border-y border-accent/25 bg-gradient-to-b from-background via-card/80 to-background py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--tw-gradient-stops))] from-accent/12 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-h-[min(520px,85vw)] overflow-hidden rounded-2xl border border-accent/20 shadow-xl shadow-black/20 sm:aspect-[3/4] lg:mx-0 lg:max-h-none">
              <Image
                src="/images/realismo2.jpg"
                alt="Trabalho em realismo — referência do estúdio"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>

          <div className="order-1 text-center lg:order-2 lg:text-left">
            <span className="inline-flex rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Foco em tatuagem
            </span>
            <h2 className="mt-5 font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Você veio para{' '}
              <span className="text-accent">eternizar uma ideia na pele?</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground lg:text-xl">
              Este espaço é para <strong className="text-foreground">quem quer fazer tatuagem</strong>: projeto
              personalizado, realismo preto e cinza ou colorido, e acompanhamento do primeiro contato ao cuidado pós-sessão.
            </p>

            <ul className="mx-auto mt-8 max-w-xl space-y-4 text-left text-muted-foreground lg:mx-0">
              <li className="flex gap-3">
                <Palette className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="font-medium text-foreground">Sua ideia em primeiro lugar</span> — orçamento e
                  referências sem pressa, com honestidade sobre o que funciona melhor na pele.
                </span>
              </li>
              <li className="flex gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="font-medium text-foreground">Realismo e estilos variados</span> — domínio técnico para
                  retratos, animais, religioso, fine line, old school e muito mais.
                </span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="font-medium text-foreground">Atendimento na Skin Corp Tattoo</span> (São Gonçalo, RJ),
                  com o mesmo padrão de higiene e materiais do estúdio profissional.
                </span>
              </li>
            </ul>

            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
              <Button size="lg" className="h-12 text-base" asChild>
                <Link href="/agendar">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar minha tatuagem
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-12 border-accent/50 text-base" asChild>
                <a href={waInfo} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp ({WHATSAPP_DISPLAY})
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm lg:justify-start">
              <Link href="/portfolio" className="font-medium text-accent underline-offset-4 hover:underline">
                Ver portfólio
              </Link>
              <span className="hidden text-border sm:inline" aria-hidden>
                |
              </span>
              <Link href="/estilos" className="font-medium text-accent underline-offset-4 hover:underline">
                Explorar estilos
              </Link>
              <span className="hidden text-border sm:inline" aria-hidden>
                |
              </span>
              <Link href="/cuidados" className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                Cuidados com a tatuagem
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
