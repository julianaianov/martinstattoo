'use client'

import { useState } from 'react'
import { Check, Copy, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COURSE_PRICE_INSTALLMENTS_LABEL, COURSE_PRICE_PIX_LABEL, COURSE_TITLE } from '@/lib/course'
import { PIX_KEY_SINAL, WHATSAPP_DISPLAY, whatsappLink } from '@/lib/contact'
import { toast } from 'sonner'

export type CursoIntent = 'enroll' | 'info'

export interface CursoFormData {
  intent: CursoIntent
  name: string
  email: string
  phone: string
  turma: string
  message: string
}

function buildMessageEnroll(data: CursoFormData) {
  const extra = data.message.trim()
    ? `\nObservações: ${data.message.trim().slice(0, 350)}${data.message.length > 350 ? '…' : ''}`
    : ''
  return (
    `Olá! Quero *me inscrever* no ${COURSE_TITLE}.\n\n` +
    `*Turma / preferência:* ${data.turma}\n\n` +
    `*Meus dados:*\n` +
    `Nome: ${data.name}\n` +
    `E-mail: ${data.email}\n` +
    `Telefone: ${data.phone}` +
    extra +
    `\n\n*Valores de referência:*\n` +
    `• ${COURSE_PRICE_INSTALLMENTS_LABEL}\n` +
    `• ${COURSE_PRICE_PIX_LABEL}\n\n` +
    `*PIX (CNPJ) para matrícula / sinal:* ${PIX_KEY_SINAL}\n` +
    `Realizo o pagamento do valor combinado e *envio o comprovante em anexo* nesta conversa.`
  )
}

function buildMessageInfo(data: CursoFormData) {
  const extra = data.message.trim()
    ? `\n\nMinhas dúvidas: ${data.message.trim().slice(0, 400)}${data.message.length > 400 ? '…' : ''}`
    : ''
  return (
    `Olá! Gostaria de *mais informações* sobre o ${COURSE_TITLE}.\n\n` +
    `*Meus dados:*\n` +
    `Nome: ${data.name}\n` +
    `E-mail: ${data.email}\n` +
    `Telefone: ${data.phone}` +
    extra
  )
}

interface CursoPixWhatsAppProps {
  data: CursoFormData
  onContinuar: () => void
}

export function CursoPixWhatsApp({ data, onContinuar }: CursoPixWhatsAppProps) {
  const [copied, setCopied] = useState(false)
  const isEnroll = data.intent === 'enroll'

  const openWhatsApp = () => {
    const msg = isEnroll ? buildMessageEnroll(data) : buildMessageInfo(data)
    window.open(whatsappLink(msg), '_blank', 'noopener,noreferrer')
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
      {isEnroll && (
        <div className="rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold">Pagamento da matrícula / sinal via PIX</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            O valor exato será confirmado pelo estúdio. Use a chave PIX abaixo para transferir o valor combinado e, em seguida, envie o{' '}
            <strong className="text-foreground">comprovante</strong> pelo WhatsApp{' '}
            <span className="whitespace-nowrap">({WHATSAPP_DISPLAY})</span> para liberarmos sua vaga.
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
          <p className="mt-3 text-xs text-muted-foreground">Chave PIX tipo CNPJ — confira o valor antes de confirmar a transferência.</p>
        </div>
      )}

      <div className="rounded-xl border border-accent/30 bg-accent/5 p-6">
        <p className="text-sm font-medium text-foreground">
          {isEnroll ? 'Próximo passo' : 'Fale com a gente'}
        </p>
        {isEnroll ? (
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted-foreground">
            <li>Combine o valor da matrícula pelo WhatsApp, se ainda não tiver feito.</li>
            <li>Realize o PIX e abra o botão abaixo para enviar seus dados e anexar o comprovante.</li>
          </ol>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">
            Abra o WhatsApp com sua mensagem já preenchida. Responderemos com valores, datas e documentação.
          </p>
        )}
        <Button size="lg" className="mt-6 w-full sm:w-auto" onClick={openWhatsApp}>
          <MessageCircle className="mr-2 h-5 w-5" />
          {isEnroll ? 'Abrir WhatsApp com dados da inscrição' : 'Abrir WhatsApp — mais informações'}
        </Button>
      </div>

      <Button variant="secondary" className="w-full" onClick={onContinuar}>
        {isEnroll ? 'Já enviei o comprovante no WhatsApp' : 'Concluir'}
      </Button>
    </div>
  )
}
