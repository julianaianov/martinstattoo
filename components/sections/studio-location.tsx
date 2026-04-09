import { MapPin } from 'lucide-react'
import Link from 'next/link'
import { StudioMapEmbed } from '@/components/studio-map-embed'
import {
  GOOGLE_MAPS_OPEN_URL,
  STUDIO_ADDRESS_CEP,
  STUDIO_ADDRESS_CITY,
  STUDIO_ADDRESS_STREET,
  STUDIO_NAME,
} from '@/lib/contact'

export function StudioLocationSection() {
  return (
    <section className="border-t border-border bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
          <span className="text-sm font-medium uppercase tracking-wider text-accent">Localização</span>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">Onde atendemos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground lg:mx-0">
            O atendimento presencial é na <strong className="text-foreground">{STUDIO_NAME}</strong>, em São
            Gonçalo — confira o endereço e o mapa abaixo.
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-10 lg:grid lg:grid-cols-5 lg:items-start lg:gap-12">
          <div className="lg:col-span-2">
            <div className="flex gap-3 rounded-xl border border-border bg-card p-5 text-left">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
              <div className="text-sm text-muted-foreground">
                <p className="font-semibold text-foreground">{STUDIO_NAME}</p>
                <p className="mt-2">{STUDIO_ADDRESS_STREET}</p>
                <p>{STUDIO_ADDRESS_CITY}</p>
                <p>CEP {STUDIO_ADDRESS_CEP}</p>
                <Link
                  href={GOOGLE_MAPS_OPEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  Abrir rotas no Google Maps
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <StudioMapEmbed showOpenMapsLink={false} />
          </div>
        </div>
      </div>
    </section>
  )
}
