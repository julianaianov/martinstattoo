import Image from 'next/image'
import { Trophy } from 'lucide-react'

export function AwardsSection() {
  return (
    <section className="border-t border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/15 to-transparent blur-xl" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <Image
                src="/images/premio-multi-campeao.png"
                alt="Wanderson Martins com troféus e prêmios de tatuagem"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-accent">
              <Trophy className="h-4 w-4" />
              Reconhecimento
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Multi campeão em premiações
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              O tatuador acumula títulos e premiações em{' '}
              <strong className="font-medium text-foreground">diversas categorias</strong>, dentro e fora do estúdio —
              resultado de técnica consistente, criatividade e dedicação à arte na pele.
            </p>
            <p className="mt-4 text-muted-foreground">
              Esses reconhecimentos refletem o compromisso com excelência em cada projeto, seja em estilos
              tradicionais, realismo, colorido ou trabalhos autorais exigentes.
            </p>
            <ul className="mt-8 space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Participação e vitórias em convenções e competições do segmento
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Experiência comprovada em múltiplas categorias técnicas e estéticas
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Mesma exigência de campeão aplicada a cada cliente no dia a dia
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
