'use client'

import { useState } from 'react'
import { ArrowLeft, CheckCircle, GraduationCap, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { CursoPixWhatsApp, type CursoFormData, type CursoIntent } from '@/components/curso-pix-whatsapp'
import { COURSE_INVESTMENT_LINES, COURSE_TITLE, COURSE_TURMA_OPTIONS } from '@/lib/course'
import { toast } from 'sonner'

const emptyForm: CursoFormData = {
  intent: 'enroll',
  name: '',
  email: '',
  phone: '',
  turma: '',
  message: '',
}

export function CursoInscricaoFlow() {
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0)
  const [data, setData] = useState<CursoFormData>(emptyForm)

  const setIntent = (intent: CursoIntent) => {
    setData({
      ...emptyForm,
      intent,
      turma: intent === 'info' ? '—' : '',
    })
    setStep(1)
  }

  const handleFormNext = () => {
    if (!data.name.trim() || !data.email.trim() || !data.phone.trim()) {
      toast.error('Preencha nome, e-mail e telefone.')
      return
    }
    if (data.intent === 'enroll' && !data.turma) {
      toast.error('Selecione a turma ou preferência.')
      return
    }
    setStep(2)
  }

  const reset = () => {
    setData(emptyForm)
    setStep(0)
  }

  if (step === 3) {
    return (
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle className="h-10 w-10 text-accent" />
          </div>
        </div>
        <h2 className="font-serif text-2xl font-bold">Obrigado, {data.name.split(' ')[0]}!</h2>
        <p className="mt-4 text-muted-foreground">
          {data.intent === 'enroll'
            ? 'Recebemos seus dados pelo WhatsApp. Retornamos em breve para confirmar matrícula, valores e cronograma.'
            : 'Em breve entraremos em contato com todas as informações sobre o curso.'}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild variant="outline">
            <Link href="/curso">Voltar ao curso</Link>
          </Button>
          <Button asChild>
            <Link href="/">Início</Link>
          </Button>
        </div>
      </div>
    )
  }

  if (step === 2) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 rounded-lg border border-border bg-card p-6">
          <h3 className="font-semibold">Resumo da inscrição</h3>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Intenção</dt>
              <dd className="text-right font-medium">
                {data.intent === 'enroll' ? 'Inscrição no curso' : 'Mais informações'}
              </dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Curso</dt>
              <dd className="text-right font-medium">{COURSE_TITLE}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Nome</dt>
              <dd className="text-right font-medium">{data.name}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">E-mail</dt>
              <dd className="break-all text-right font-medium">{data.email}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">Telefone</dt>
              <dd className="text-right font-medium">{data.phone}</dd>
            </div>
            {data.intent === 'enroll' && (
              <div className="flex justify-between gap-4">
                <dt className="text-muted-foreground">Turma / preferência</dt>
                <dd className="text-right font-medium">{data.turma}</dd>
              </div>
            )}
            {data.message.trim() ? (
              <div className="flex flex-col gap-1 border-t border-border pt-2">
                <dt className="text-muted-foreground">Mensagem</dt>
                <dd className="font-medium">{data.message}</dd>
              </div>
            ) : null}
            {data.intent === 'enroll' && (
              <div className="space-y-3 border-t border-border pt-2">
                <p className="font-semibold">Investimento (referência)</p>
                {COURSE_INVESTMENT_LINES.map((line) => (
                  <div key={line.label} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between sm:gap-4">
                    <span className="text-muted-foreground">{line.label}</span>
                    <span className="max-w-full text-right font-medium sm:max-w-[65%]">{line.value}</span>
                  </div>
                ))}
              </div>
            )}
          </dl>
        </div>

        <Button variant="ghost" className="mb-6" onClick={() => setStep(1)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar ao formulário
        </Button>

        <CursoPixWhatsApp data={data} onContinuar={() => setStep(3)} />
      </div>
    )
  }

  if (step === 1) {
    return (
      <div className="mx-auto max-w-xl space-y-6">
        <Button variant="ghost" className="-ml-2 px-2" onClick={() => setStep(0)}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <div className="space-y-2">
            <Label htmlFor="cnome">Nome completo</Label>
            <Input
              id="cnome"
              value={data.name}
              onChange={(e) => setData({ ...data, name: e.target.value })}
              autoComplete="name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cemail">E-mail</Label>
            <Input
              id="cemail"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cphone">WhatsApp / telefone</Label>
            <Input
              id="cphone"
              type="tel"
              value={data.phone}
              onChange={(e) => setData({ ...data, phone: e.target.value })}
              autoComplete="tel"
            />
          </div>
          {data.intent === 'enroll' && (
            <div className="space-y-2">
              <Label>Turma / preferência</Label>
              <Select value={data.turma} onValueChange={(v) => setData({ ...data, turma: v })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {COURSE_TURMA_OPTIONS.map((o) => (
                    <SelectItem key={o.id} value={o.label}>
                      {o.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          <div className="space-y-2">
            <Label htmlFor="cmsg">
              {data.intent === 'enroll' ? 'Observações (opcional)' : 'Dúvidas ou o que quer saber (opcional)'}
            </Label>
            <Textarea
              id="cmsg"
              rows={3}
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              className="resize-none"
            />
          </div>
          <Button size="lg" className="w-full" onClick={handleFormNext}>
            Continuar para resumo
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8">
      <p className="text-center text-muted-foreground sm:text-left">
        Escolha uma opção para seguirmos no WhatsApp com seus dados organizados.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setIntent('enroll')}
          className="flex flex-col items-start rounded-2xl border border-border bg-card p-6 text-left transition-colors hover:border-accent/50 hover:bg-accent/5"
        >
          <GraduationCap className="h-8 w-8 text-accent" />
          <span className="mt-4 font-serif text-xl font-semibold">Quero me inscrever</span>
          <span className="mt-2 text-sm text-muted-foreground">
            Resumo estilo matrícula, chave PIX e envio do comprovante no WhatsApp.
          </span>
        </button>
        <button
          type="button"
          onClick={() => setIntent('info')}
          className="flex flex-col items-start rounded-2xl border border-border bg-card p-6 text-left transition-colors hover:border-accent/50 hover:bg-accent/5"
        >
          <MessageCircle className="h-8 w-8 text-accent" />
          <span className="mt-4 font-serif text-xl font-semibold">Quero mais informações</span>
          <span className="mt-2 text-sm text-muted-foreground">
            Valores, datas, carga horária e documentos — sem compromisso.
          </span>
        </button>
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Já conversou antes?{' '}
        <button type="button" className="font-medium text-accent underline-offset-4 hover:underline" onClick={reset}>
          Recomeçar
        </button>
      </p>
    </div>
  )
}
