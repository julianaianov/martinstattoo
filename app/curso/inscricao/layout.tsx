import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inscrição no Curso | Martins Tattoo',
  description:
    'Inscreva-se no curso de tatuagem ou peça informações. PIX, WhatsApp e resumo da sua solicitação.',
}

export default function CursoInscricaoLayout({ children }: { children: React.ReactNode }) {
  return children
}
