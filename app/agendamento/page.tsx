'use client'

import { useState } from 'react'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { BookingForm, BookingData } from '@/components/booking-form'
import { SinalPixWhatsApp } from '@/components/sinal-pix-whatsapp'
import { SERVICES } from '@/lib/products'

export default function AgendamentoPage() {
  const [bookingData, setBookingData] = useState<BookingData | null>(null)
  const [paymentComplete, setPaymentComplete] = useState(false)

  const selectedService = bookingData
    ? SERVICES.find((s) => s.id === bookingData.selectedService)
    : null

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Agende Online
              </span>
              <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                {bookingData && !paymentComplete
                  ? 'Pagamento do Sinal'
                  : paymentComplete
                    ? 'Agendamento Confirmado!'
                    : 'Agende sua Sessão'}
              </h1>
              {!bookingData && (
                <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                  Preencha o formulário abaixo para agendar sua sessão de tatuagem. 
                  O pagamento do sinal garante sua vaga na agenda.
                </p>
              )}
            </div>

            <div className="mt-12">
              {!bookingData ? (
                <BookingForm onBookingComplete={setBookingData} />
              ) : paymentComplete ? (
                <div className="mx-auto max-w-lg text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
                      <CheckCircle className="h-10 w-10 text-accent" />
                    </div>
                  </div>
                  <h2 className="font-serif text-2xl font-bold">Obrigado, {bookingData.name}!</h2>
                  <p className="mt-4 text-muted-foreground">
                    Recebemos seus dados e o comprovante do sinal pelo WhatsApp. Entraremos em contato em até 24
                    horas para confirmar data e horário da sessão.
                  </p>
                  <div className="mt-8 rounded-lg border border-border bg-card p-6">
                    <h3 className="font-semibold">Resumo do Agendamento</h3>
                    <dl className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Estilo:</dt>
                        <dd className="font-medium">{bookingData.style}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Tamanho:</dt>
                        <dd className="font-medium">{bookingData.size}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Sinal pago:</dt>
                        <dd className="font-medium">
                          R$ {selectedService ? (selectedService.priceInCents / 100).toFixed(2).replace('.', ',') : '0,00'}
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="mt-8">
                    <Button asChild>
                      <Link href="/">Voltar ao Início</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="mx-auto max-w-2xl">
                  <div className="mb-8 rounded-lg border border-border bg-card p-6">
                    <h3 className="font-semibold">Resumo do Agendamento</h3>
                    <dl className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Nome:</dt>
                        <dd className="font-medium">{bookingData.name}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">E-mail:</dt>
                        <dd className="font-medium">{bookingData.email}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Estilo:</dt>
                        <dd className="font-medium">{bookingData.style}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Tamanho:</dt>
                        <dd className="font-medium">{bookingData.size}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-muted-foreground">Telefone:</dt>
                        <dd className="font-medium">{bookingData.phone}</dd>
                      </div>
                      {bookingData.description?.trim() ? (
                        <div className="flex flex-col gap-1 border-t border-border pt-2">
                          <dt className="text-muted-foreground">Ideia / descrição</dt>
                          <dd className="font-medium">{bookingData.description}</dd>
                        </div>
                      ) : null}
                      <div className="flex justify-between border-t border-border pt-2">
                        <dt className="font-semibold">Sinal a pagar:</dt>
                        <dd className="font-serif text-lg font-bold">
                          R$ {selectedService ? (selectedService.priceInCents / 100).toFixed(2).replace('.', ',') : '0,00'}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <Button
                    variant="ghost"
                    className="mb-6"
                    onClick={() => setBookingData(null)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Voltar ao formulário
                  </Button>

                  {selectedService && (
                    <SinalPixWhatsApp
                      booking={bookingData}
                      valorFormatado={`R$ ${(selectedService.priceInCents / 100).toFixed(2).replace('.', ',')}`}
                      onContinuar={() => setPaymentComplete(true)}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </section>

        {!bookingData && (
          <section className="border-t border-border bg-card py-20">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-center font-serif text-2xl font-bold">
                Como funciona o agendamento?
              </h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-3">
                {[
                  {
                    step: '01',
                    title: 'Preencha o formulário',
                    description: 'Conte-nos sobre você e sua ideia de tatuagem',
                  },
                  {
                    step: '02',
                    title: 'PIX e WhatsApp',
                    description: 'Pague o sinal pela chave PIX e envie o comprovante no WhatsApp',
                  },
                  {
                    step: '03',
                    title: 'Aguarde o contato',
                    description: 'Entraremos em contato para confirmar data e horário',
                  },
                ].map((item) => (
                  <div key={item.step} className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-serif text-lg font-bold text-accent">
                      {item.step}
                    </div>
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
