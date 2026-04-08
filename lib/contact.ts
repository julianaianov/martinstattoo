/** Número apenas dígitos, com DDI (Brasil 55). */
export const WHATSAPP_NUMBER = '5521981116478'

/** Exibição amigável do WhatsApp do estúdio. */
export const WHATSAPP_DISPLAY = '+55 (21) 98111-6478'

/** Chave PIX (CNPJ) para pagamento do sinal. */
export const PIX_KEY_SINAL = '43745947000134'

/** Atendimento presencial — Skin Corp Tattoo (São Gonçalo, RJ). */
export const STUDIO_NAME = 'Skin Corp Tattoo'

export const STUDIO_ADDRESS_STREET = 'R. Dr. Felíciano Sodré - Centro'

export const STUDIO_ADDRESS_CITY = 'São Gonçalo - RJ'

export const STUDIO_ADDRESS_CEP = '24440-440'

/** Uma linha para exibição compacta. */
export const STUDIO_ADDRESS_ONE_LINE = `${STUDIO_ADDRESS_STREET}, ${STUDIO_ADDRESS_CITY}, ${STUDIO_ADDRESS_CEP}`

/** Texto completo com nome do estúdio. */
export const STUDIO_ADDRESS_FULL = `${STUDIO_NAME} — ${STUDIO_ADDRESS_ONE_LINE}`

const GOOGLE_MAPS_QUERY =
  'Skin Corp Tattoo, R. Dr. Felíciano Sodré, Centro, São Gonçalo - RJ, 24440-440, Brasil'

/** iframe do Google Maps (sem chave de API). */
export const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(GOOGLE_MAPS_QUERY)}&hl=pt&z=16&output=embed`

/** Abre o local no Google Maps (app ou web). */
export const GOOGLE_MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(GOOGLE_MAPS_QUERY)}`

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}
