'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { TATTOO_STYLES } from '@/lib/products'

const portfolioItems = [
  { id: 1, style: 'blackwork', title: 'Mandala Geométrica', image: '/images/portfolio/1.jpg' },
  { id: 2, style: 'fine-line', title: 'Flor Delicada', image: '/images/portfolio/2.jpg' },
  { id: 3, style: 'realismo', title: 'Retrato', image: '/images/portfolio/3.jpg' },
  { id: 4, style: 'tradicional', title: 'Âncora Clássica', image: '/images/portfolio/4.jpg' },
  { id: 5, style: 'geometrico', title: 'Padrão Sacro', image: '/images/portfolio/5.jpg' },
  { id: 6, style: 'lettering', title: 'Script Personalizado', image: '/images/portfolio/6.jpg' },
  { id: 7, style: 'blackwork', title: 'Ornamental', image: '/images/portfolio/7.jpg' },
  { id: 8, style: 'fine-line', title: 'Minimalista', image: '/images/portfolio/8.jpg' },
  { id: 9, style: 'pontilhismo', title: 'Dotwork Abstract', image: '/images/portfolio/9.jpg' },
]

export function PortfolioGallery() {
  const [filter, setFilter] = useState<string>('all')
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.style === filter)

  return (
    <>
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        <Button
          variant={filter === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter('all')}
        >
          Todos
        </Button>
        {TATTOO_STYLES.slice(0, 6).map((style) => (
          <Button
            key={style.id}
            variant={filter === style.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter(style.id)}
          >
            {style.name}
          </Button>
        ))}
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedImage(item)}
            className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-muted transition-all hover:border-accent/50"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-muted">
              <div className="text-center">
                <div className="font-serif text-lg font-semibold">{item.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {TATTOO_STYLES.find(s => s.id === item.style)?.name}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform group-hover:translate-y-0">
              <p className="font-medium text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground">
                {TATTOO_STYLES.find(s => s.id === item.style)?.name}
              </p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          <DialogTitle className="sr-only">
            {selectedImage?.title}
          </DialogTitle>
          {selectedImage && (
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="font-serif text-2xl font-semibold">{selectedImage.title}</div>
                    <div className="mt-2 text-muted-foreground">
                      {TATTOO_STYLES.find(s => s.id === selectedImage.style)?.name}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold">{selectedImage.title}</h3>
                <p className="mt-1 text-muted-foreground">
                  Estilo: {TATTOO_STYLES.find(s => s.id === selectedImage.style)?.name}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
