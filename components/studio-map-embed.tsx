import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { GOOGLE_MAPS_EMBED_URL, GOOGLE_MAPS_OPEN_URL, STUDIO_ADDRESS_FULL } from '@/lib/contact'

type StudioMapEmbedProps = {
  /** Quando false, omitir o link abaixo do iframe (ex.: seção com endereço ao lado). */
  showOpenMapsLink?: boolean
}

export function StudioMapEmbed({ showOpenMapsLink = true }: StudioMapEmbedProps) {
  return (
    <div className="space-y-3">
      <div className="relative aspect-video w-full min-h-[200px] overflow-hidden rounded-xl border border-border bg-muted sm:min-h-[260px]">
        <iframe
          title={`Mapa — ${STUDIO_ADDRESS_FULL}`}
          src={GOOGLE_MAPS_EMBED_URL}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      {showOpenMapsLink ? (
        <p className="text-center text-xs text-muted-foreground sm:text-left">
          <Link
            href={GOOGLE_MAPS_OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-medium text-accent underline-offset-4 hover:underline"
          >
            Abrir no Google Maps
            <ExternalLink className="h-3 w-3" aria-hidden />
          </Link>
        </p>
      ) : null}
    </div>
  )
}
