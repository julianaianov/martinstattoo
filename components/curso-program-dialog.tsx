'use client'

import Link from 'next/link'
import { BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { COURSE_MODULES_DETAILED, COURSE_TITLE } from '@/lib/course'

type CursoProgramDialogProps = {
  /** Use em fundos escuros (ex.: seções do curso). */
  variant?: 'default' | 'onDark'
}

export function CursoProgramDialog({ variant = 'default' }: CursoProgramDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          variant="outline"
          className={cn(
            variant === 'onDark' &&
              'border-white/45 bg-transparent text-white shadow-none hover:bg-white/10 hover:text-white dark:border-white/45 dark:bg-transparent dark:hover:bg-white/10',
          )}
        >
          <BookOpen className="mr-2 h-4 w-4" />
          Ver programa completo
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[min(85vh,640px)] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">Programa — {COURSE_TITLE}</DialogTitle>
          <DialogDescription>
            Módulos e temas principais. Detalhes de calendário e materiais são enviados na matrícula.
          </DialogDescription>
        </DialogHeader>
        <ol className="mt-4 list-decimal space-y-6 pl-5 text-sm text-muted-foreground">
          {COURSE_MODULES_DETAILED.map((mod) => (
            <li key={mod.id} className="text-foreground">
              <span className="font-semibold text-foreground">
                {mod.title}: {mod.subtitle}
              </span>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-muted-foreground">
                {mod.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <Button asChild className="flex-1">
            <Link href="/curso/inscricao">Inscrição / informações</Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
