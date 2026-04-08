import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agendar Sessão | Martins Tattoo',
  description:
    'Agende sua sessão: informe se já tem a arte definida e fale no WhatsApp para orçamento rápido.',
}

export default function AgendarLayout({ children }: { children: React.ReactNode }) {
  return children
}
