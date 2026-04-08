import Image from 'next/image'
import { Award, Shield, Sparkles } from 'lucide-react'

export function AboutSection() {
  return (
    <section className="border-t border-border bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent blur-xl" />
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/artist.jpeg"
                alt="Wanderson Martins - Terrozinho"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <span className="text-sm font-medium uppercase tracking-wider text-accent">
              Sobre o Artista
            </span>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Wanderson Martins
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">Terrozinho</p>

            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Com mais de uma década dedicada à arte da tatuagem, desenvolvi uma 
                técnica única que combina precisão técnica com sensibilidade artística.
              </p>
              <p>
                Cada tatuagem é tratada como uma obra de arte exclusiva, criada em 
                colaboração com o cliente para garantir que o resultado final 
                supere todas as expectativas.
              </p>
              <p>
                Meu compromisso é com a excelência, higiene e segurança, utilizando 
                apenas materiais de primeira linha e seguindo rigorosos protocolos 
                de esterilização.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: Award,
                  title: 'Premiado',
                  description: 'Reconhecido em convenções nacionais',
                },
                {
                  icon: Shield,
                  title: 'Segurança',
                  description: 'Materiais descartáveis e esterilizados',
                },
                {
                  icon: Sparkles,
                  title: 'Exclusivo',
                  description: 'Designs únicos e personalizados',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-border bg-background p-4"
                >
                  <item.icon className="h-6 w-6 text-accent" />
                  <h3 className="mt-3 font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
