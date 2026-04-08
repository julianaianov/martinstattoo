'use client'

import { useState } from 'react'
import { Check, Copy, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { BookingData } from '@/components/booking-form'
import { PIX_KEY_SINAL, WHATSAPP_DISPLAY, whatsappLink } from '@/lib/contact'
import { toast } from 'sonner'

function buildWhatsAppMessage(booking: BookingData, valorFormatado: string) {
  const desc = booking.description?.trim()
  const descLine = desc ? `\nIdeia / descrição: ${desc.slice(0, 400)}${desc.length > 400 ? '…' : ''}` : ''

  return (
    `Olá! Finalizei o formulário de agendamento e vou pagar o *sinal via PIX*.\n\n` +
    `*Valor do sinal:* ${valorFormatado}\n` +
    `*Chave PIX (CNPJ):* ${PIX_KEY_SINAL}\n\n` +
    `*Meus dados:*\n` +
    `Nome: ${booking.name}\n` +
    `E-mail: ${booking.email}\n` +
    `Telefone: ${booking.phone}\n` +
    `Estilo: ${booking.style}\n` +
    `Tamanho: ${booking.size}` +
    descLine +
    `\n\nRealizei o pagamento e *envio o comprovante do PIX em anexo* nesta conversa.`
  )
}

interface SinalPixWhatsAppProps {
  booking: BookingData
  valorFormatado: string
  onContinuar: () => void
}

export function SinalPixWhatsApp({ booking, valorFormatado, onContinuar }: SinalPixWhatsAppProps) {
  const [copied, setCopied] = useState(false)

  const openWhatsApp = () => {
    const url = whatsappLink(buildWhatsAppMessage(booking, valorFormatado))
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const copyPix = async () => {
    try {
      await navigator.clipboard.writeText(PIX_KEY_SINAL)
      setCopied(true)
      toast.success('Chave PIX copiada')
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Não foi possível copiar. Copie manualmente.')
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="font-semibold">Pagamento do sinal via PIX</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Use a chave abaixo no app do seu banco para pagar o valor do sinal. Depois é obrigatório enviar o{' '}
          <strong className="text-foreground">comprovante do pagamento</strong> pelo WhatsApp{' '}
          <span className="whitespace-nowrap">({WHATSAPP_DISPLAY})</span> para
          confirmarmos sua vaga.
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex-1 rounded-lg border border-border bg-muted/50 px-4 py-3 font-mono text-sm tracking-wide">
            {PIX_KEY_SINAL}
          </div>
          <Button type="button" variant="outline" onClick={copyPix} className="shrink-0">
            {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
            Copiar chave
          </Button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Chave PIX tipo CNPJ — confira o valor antes de confirmar.</p>
      </div>

      <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
        <p className="text-sm font-medium text-foreground">Próximo passo</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
          <li>Realize o PIX no valor do sinal indicado no resumo acima.</li>
          <li>
            Toque no botão abaixo para abrir o WhatsApp com seus dados já preenchidos — envie também a{' '}
            <strong className="text-foreground">imagem ou PDF do comprovante</strong>.
          </li>
        </ol>
        <Button size="lg" className="mt-6 w-full sm:w-auto" onClick={openWhatsApp}>
          <MessageCircle className="mr-2 h-5 w-5" />
          Abrir WhatsApp com dados do agendamento
        </Button>
      </div>

      <Button variant="secondary" className="w-full" onClick={onContinuar}>
        Já enviei o comprovante no WhatsApp
      </Button>
    </div>
  )
}
