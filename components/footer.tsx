import Link from 'next/link'
import Image from 'next/image'
import { Instagram, MessageCircle, MapPin, Clock } from 'lucide-react'
import { StudioMapEmbed } from '@/components/studio-map-embed'
import {
  GOOGLE_MAPS_OPEN_URL,
  STUDIO_ADDRESS_CEP,
  STUDIO_ADDRESS_CITY,
  STUDIO_ADDRESS_STREET,
  STUDIO_NAME,
} from '@/lib/contact'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo-martin.png"
                alt="Martins Tattoo"
                width={48}
                height={48}
                className="rounded-sm"
              />
              <span className="font-serif text-lg font-semibold tracking-wide">
                MARTINS TATTOO
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Arte exclusiva em tatuagem por Wanderson Martins (Terrozinho). Transformando ideias em arte permanente.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="transition-colors hover:text-foreground">
                  Portfólio
                </Link>
              </li>
              <li>
                <Link href="/estilos" className="transition-colors hover:text-foreground">
                  Estilos
                </Link>
              </li>
              <li>
                <Link href="/curso" className="transition-colors hover:text-foreground">
                  Curso
                </Link>
              </li>
              <li>
                <Link href="/curso/inscricao" className="transition-colors hover:text-foreground">
                  Inscrição no curso
                </Link>
              </li>
              <li>
                <Link href="/cuidados" className="transition-colors hover:text-foreground">
                  Cuidados
                </Link>
              </li>
              <li>
                <Link href="/agendar" className="transition-colors hover:text-foreground">
                  Agendamento
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contato</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />
                <a
                  href="https://instagram.com/terrozinho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  @terrozinho
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                <a
                  href="https://wa.me/5521981116478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Estúdio</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>
                  <span className="font-medium text-foreground">{STUDIO_NAME}</span>
                  <br />
                  {STUDIO_ADDRESS_STREET}
                  <br />
                  {STUDIO_ADDRESS_CITY}
                  <br />
                  CEP {STUDIO_ADDRESS_CEP}
                  <br />
                  <Link
                    href={GOOGLE_MAPS_OPEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-accent underline-offset-4 hover:underline"
                  >
                    Ver no mapa
                  </Link>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Seg - Sáb: 10h às 20h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-10">
          <h3 className="text-center font-semibold md:text-left">Onde atendemos</h3>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-muted-foreground md:mx-0 md:text-left">
            O tatuador atende na <strong className="text-foreground">{STUDIO_NAME}</strong> — {STUDIO_ADDRESS_STREET},{' '}
            {STUDIO_ADDRESS_CITY}, CEP {STUDIO_ADDRESS_CEP}.
          </p>
          <div className="mx-auto mt-6 max-w-4xl md:mx-0">
            <StudioMapEmbed />
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Martins Tattoo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
