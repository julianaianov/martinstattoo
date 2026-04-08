'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { whatsappLink } from '@/lib/contact'

type Step = 'choose' | 'yes-details' | 'no-help'

export default function AgendarPage() {
  const [step, setStep] = useState<Step>('choose')
  const [localTatuagem, setLocalTatuagem] = useState('')

  const openWhatsAppComArte = () => {
    const localText = localTatuagem.trim() || '(informar na conversa)'
    const msg =
      `Olá! Quero agendar uma sessão e já sei qual arte farei.\n\n` +
      `Local onde pretendo fazer a tatuagem: ${localText}\n\n` +
      `Vou enviar a referência da arte (foto/imagem) nesta conversa para facilitar o orçamento.`
    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer')
  }

  const openWhatsAppSemIdeia = () => {
    const msg =
      `Olá! Quero agendar uma sessão e ainda estou definindo a arte. ` +
      `Podemos conversar para montar a ideia e o orçamento?`
    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center sm:text-left">
              <span className="text-sm font-medium uppercase tracking-wider text-accent">Agendar</span>
              <h1 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
                Agendar sessão
              </h1>
              <p className="mt-4 text-muted-foreground">
                Responda abaixo para direcionarmos você da melhor forma e agilizar o orçamento.
              </p>
            </div>

            {step === 'choose' && (
              <div className="mt-10 space-y-4">
                <p className="text-lg font-medium">Você já sabe qual arte vai fazer?</p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button size="lg" className="flex-1" onClick={() => setStep('yes-details')}>
                    Sim, já tenho a arte
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1" onClick={() => setStep('no-help')}>
                    Ainda não estou decidido(a)
                  </Button>
                </div>
              </div>
            )}

            {step === 'yes-details' && (
              <div className="mt-10 space-y-6">
                <Button variant="ghost" className="-ml-2 px-2" onClick={() => setStep('choose')}>
                  ← Voltar
                </Button>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <h2 className="font-serif text-xl font-semibold">Envie tudo pelo WhatsApp</h2>
                  <p className="mt-3 text-muted-foreground">
                    Para facilitar o orçamento, envie <strong className="text-foreground">a imagem ou foto de referência da arte</strong> e informe{' '}
                    <strong className="text-foreground">o local do corpo</strong> onde pretende tatuar (e, se quiser, cidade ou região).
                  </p>
                  <div className="mt-6 space-y-2">
                    <Label htmlFor="local">Onde pretende fazer a tatuagem? (corpo + cidade, se quiser)</Label>
                    <Textarea
                      id="local"
                      placeholder="Ex.: antebraço esquerdo · Rio de Janeiro, Zona Norte"
                      value={localTatuagem}
                      onChange={(e) => setLocalTatuagem(e.target.value)}
                      rows={3}
                      className="resize-none"
                    />
                  </div>
                  <Button size="lg" className="mt-6 w-full sm:w-auto" onClick={openWhatsAppComArte}>
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Abrir WhatsApp e enviar
                  </Button>
                  <p className="mt-6 text-sm text-muted-foreground">
                    Depois de falar no WhatsApp, você pode{' '}
                    <Link href="/agendamento" className="font-medium text-accent underline-offset-4 hover:underline">
                      seguir para o agendamento online com sinal
                    </Link>
                    .
                  </p>
                </div>
              </div>
            )}

            {step === 'no-help' && (
              <div className="mt-10 space-y-6">
                <Button variant="ghost" className="-ml-2 px-2" onClick={() => setStep('choose')}>
                  ← Voltar
                </Button>
                <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
                  <h2 className="font-serif text-xl font-semibold">Sem problema</h2>
                  <p className="mt-3 text-muted-foreground">
                    Chame no WhatsApp que ajudamos a desenvolver a ideia, tirar dúvidas e montar o orçamento. Se preferir, você também pode ir direto ao
                    formulário com sinal.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Button size="lg" onClick={openWhatsAppSemIdeia}>
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Conversar no WhatsApp
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/agendamento">
                        Agendamento com sinal
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
