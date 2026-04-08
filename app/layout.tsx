import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Martins Tattoo | Tatuador Wanderson Martins - Terrozinho',
  description: 'Estúdio de tatuagem profissional. Arte exclusiva, atendimento personalizado e qualidade premium. Agende sua sessão com o tatuador Wanderson Martins.',
  keywords: ['tatuagem', 'tattoo', 'martins tattoo', 'terrozinho', 'wanderson martins', 'tatuador'],
  openGraph: {
    title: 'Martins Tattoo | Tatuador Wanderson Martins',
    description: 'Arte exclusiva em tatuagem. Agende sua sessão.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
