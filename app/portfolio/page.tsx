import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PortfolioGallery } from '@/components/portfolio-gallery'

export const metadata: Metadata = {
  title: 'Portfólio | Martins Tattoo',
  description: 'Conheça os trabalhos realizados pelo tatuador Wanderson Martins. Galeria de tatuagens exclusivas em diversos estilos.',
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="text-sm font-medium uppercase tracking-wider text-accent">
                Galeria
              </span>
              <h1 className="mt-3 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Portfólio
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                Cada tatuagem conta uma história única. Explore meus trabalhos e 
                encontre inspiração para o seu próximo projeto.
              </p>
            </div>

            <PortfolioGallery />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
