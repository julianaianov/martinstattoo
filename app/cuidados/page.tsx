import { Metadata } from 'next'
import {
  Clock,
  Droplets,
  Heart,
  Sun,
  Ban,
  Waves,
  Shirt,
  CheckCircle,
  AlertTriangle,
  Phone,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AFTERCARE_STEPS } from '@/lib/products'

export const metadata: Metadata = {
  title: 'Cuidados Pós-Tatuagem | Martins Tattoo',
  description: 'Guia completo de como cuidar da sua tatuagem após a sessão. Instruções de limpeza, hidratação e cicatrização.',
}

const iconMap: Record<string, React.ElementType> = {
  clock: Clock,
  droplets: Droplets,
  heart: Heart,
  sun: Sun,
  ban: Ban,
  waves: Waves,
  shirt: Shirt,
  'check-circle': CheckCircle,
}

export default function CuidadosPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Pós-Tatuagem
              </span>
              <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Cuidados com sua Tatuagem
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Uma tatuagem bem cuidada dura para sempre. Siga estas instruções 
                para garantir uma cicatrização perfeita e cores vibrantes.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {AFTERCARE_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon]
                return (
                  <Card key={step.title} className="relative overflow-hidden">
                    <div className="absolute right-4 top-4 font-serif text-4xl font-bold text-muted/20">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <CardHeader>
                      <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl font-bold">O que evitar</h2>
            <p className="mt-4 text-center text-muted-foreground">
              Durante o período de cicatrização, evite as seguintes atividades:
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {[
                'Exposição direta ao sol',
                'Piscinas, mar e banheiras',
                'Academia intensa (primeira semana)',
                'Roupas apertadas na região',
                'Coçar ou arrancar casquinhas',
                'Dormir sobre a tatuagem (se possível)',
                'Produtos com álcool na área',
                'Maquiagem sobre a tatuagem',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4"
                >
                  <Ban className="h-5 w-5 shrink-0 text-destructive" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl font-bold">Sinais de alerta</h2>
            <p className="mt-4 text-center text-muted-foreground">
              É normal ter vermelhidão, inchaço leve e desconforto nos primeiros dias. 
              Porém, procure ajuda médica se notar:
            </p>

            <div className="mt-12 rounded-2xl border border-border bg-card p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  'Febre persistente',
                  'Pus ou secreção amarelada',
                  'Vermelhidão que se espalha',
                  'Dor intensa após 3 dias',
                  'Inchaço excessivo',
                  'Mau cheiro na região',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 shrink-0 text-accent" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-3 rounded-lg bg-muted p-4">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-sm">
                  Em caso de dúvidas, entre em contato pelo WhatsApp
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-card py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center font-serif text-3xl font-bold">Perguntas Frequentes</h2>

            <div className="mt-12 space-y-6">
              {[
                {
                  question: 'Quanto tempo leva para cicatrizar?',
                  answer: 'A cicatrização superficial leva de 2 a 3 semanas. A cicatrização completa das camadas mais profundas da pele pode levar até 3 meses.',
                },
                {
                  question: 'Posso malhar após fazer a tatuagem?',
                  answer: 'Recomendamos evitar exercícios intensos na primeira semana, especialmente se a tatuagem estiver em áreas que se movimentam muito durante o treino.',
                },
                {
                  question: 'Quando posso tomar sol?',
                  answer: 'Evite exposição direta ao sol por pelo menos 30 dias. Após a cicatrização, sempre use protetor solar FPS 30 ou superior sobre a tatuagem.',
                },
                {
                  question: 'É normal descascar?',
                  answer: 'Sim! Entre o 3º e 7º dia é comum a pele começar a descascar, similar a uma queimadura de sol. Nunca puxe a pele, deixe cair naturalmente.',
                },
                {
                  question: 'Preciso voltar para retoque?',
                  answer: 'Algumas áreas podem precisar de retoque após a cicatrização. O primeiro retoque está incluso no valor da tatuagem se feito em até 60 dias.',
                },
              ].map((faq) => (
                <div key={faq.question} className="rounded-lg border border-border p-6">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
