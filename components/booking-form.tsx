'use client'

import { useState } from 'react'
import { Calendar, Clock, Ruler, Palette, User, Mail, Phone, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SERVICES, TATTOO_STYLES } from '@/lib/products'
import { toast } from 'sonner'

interface BookingFormProps {
  onBookingComplete: (data: BookingData) => void
}

export interface BookingData {
  name: string
  email: string
  phone: string
  style: string
  size: string
  description: string
  selectedService: string
}

export function BookingForm({ onBookingComplete }: BookingFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    email: '',
    phone: '',
    style: '',
    size: '',
    description: '',
    selectedService: '',
  })

  const handleNext = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error('Por favor, preencha todos os campos')
        return
      }
    }
    if (step === 2) {
      if (!formData.style || !formData.size) {
        toast.error('Por favor, selecione o estilo e tamanho')
        return
      }
    }
    setStep(step + 1)
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleServiceSelect = (serviceId: string) => {
    setFormData({ ...formData, selectedService: serviceId })
    onBookingComplete({ ...formData, selectedService: serviceId })
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 flex items-center justify-center gap-2">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border-2 font-semibold transition-colors ${
                s === step
                  ? 'border-accent bg-accent text-accent-foreground'
                  : s < step
                    ? 'border-accent bg-accent/20 text-accent'
                    : 'border-border text-muted-foreground'
              }`}
            >
              {s}
            </div>
            {s < 3 && (
              <div
                className={`h-0.5 w-12 sm:w-20 ${
                  s < step ? 'bg-accent' : 'bg-border'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {step === 1 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-accent" />
              Seus Dados
            </CardTitle>
            <CardDescription>
              Precisamos de algumas informações para entrar em contato
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="name"
                  placeholder="Seu nome"
                  className="pl-10"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="pl-10"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">WhatsApp</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="phone"
                  placeholder="(00) 00000-0000"
                  className="pl-10"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>
            <Button onClick={handleNext} className="w-full">
              Continuar
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-accent" />
              Sobre sua Tatuagem
            </CardTitle>
            <CardDescription>
              Conte-nos mais sobre o que você tem em mente
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Estilo desejado</Label>
              <Select
                value={formData.style}
                onValueChange={(value) => setFormData({ ...formData, style: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o estilo" />
                </SelectTrigger>
                <SelectContent>
                  {TATTOO_STYLES.map((style) => (
                    <SelectItem key={style.id} value={style.id}>
                      {style.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Tamanho aproximado</Label>
              <RadioGroup
                value={formData.size}
                onValueChange={(value) => setFormData({ ...formData, size: value })}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { value: 'pequeno', label: 'Pequeno', description: 'Até 5cm' },
                  { value: 'medio', label: 'Médio', description: '5-15cm' },
                  { value: 'grande', label: 'Grande', description: '15-30cm' },
                  { value: 'extra-grande', label: 'Extra Grande', description: '30cm+' },
                ].map((size) => (
                  <Label
                    key={size.value}
                    htmlFor={size.value}
                    className={`flex cursor-pointer flex-col rounded-lg border p-4 transition-colors hover:bg-muted ${
                      formData.size === size.value ? 'border-accent bg-accent/5' : 'border-border'
                    }`}
                  >
                    <RadioGroupItem value={size.value} id={size.value} className="sr-only" />
                    <span className="font-medium">{size.label}</span>
                    <span className="text-sm text-muted-foreground">{size.description}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descreva sua ideia</Label>
              <div className="relative">
                <Textarea
                  id="description"
                  placeholder="Descreva o que você gostaria de tatuar, onde quer fazer, referências..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={handleBack} className="flex-1">
                Voltar
              </Button>
              <Button onClick={handleNext} className="flex-1">
                Continuar
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              Selecione o Sinal
            </CardTitle>
            <CardDescription>
              O sinal garante sua vaga na agenda e é descontado do valor final
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {SERVICES.map((service) => {
              const isRecommended =
                (formData.size === 'pequeno' && service.id === 'sinal-pequeno') ||
                (formData.size === 'medio' && service.id === 'sinal-medio') ||
                (formData.size === 'grande' && service.id === 'sinal-grande') ||
                (formData.size === 'extra-grande' && service.id === 'sinal-extra-grande')

              return (
                <button
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className={`relative w-full rounded-lg border p-4 text-left transition-all hover:border-accent/50 hover:bg-muted ${
                    isRecommended ? 'border-accent bg-accent/5' : 'border-border'
                  }`}
                >
                  {isRecommended && (
                    <span className="absolute -top-2.5 right-4 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                      Recomendado
                    </span>
                  )}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{service.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{service.description}</p>
                      <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Ruler className="h-3 w-3" />
                          {service.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {service.duration}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-serif text-2xl font-bold">
                        R$ {(service.priceInCents / 100).toFixed(2).replace('.', ',')}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}

            <Button variant="outline" onClick={handleBack} className="w-full">
              Voltar
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
