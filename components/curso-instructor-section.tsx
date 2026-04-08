import { CursoSplitSection } from '@/components/curso-split-section'
import { COURSE_IMAGE_INSTRUCTOR, COURSE_INSTRUCTOR_KICKER } from '@/lib/course'

const pClass =
  'font-sans text-xs font-normal uppercase leading-relaxed tracking-[0.12em] text-white/90 sm:text-sm md:tracking-[0.16em]'

export function CursoInstructorSection() {
  return (
    <CursoSplitSection
      imageSrc={COURSE_IMAGE_INSTRUCTOR}
      imageAlt="Wanderson Martins — tatuador e instrutor"
      leftContent={
        <>
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 sm:text-xs">
            {COURSE_INSTRUCTOR_KICKER}
          </p>
          <div className="mt-6 space-y-5">
            <p className={pClass}>
              MEU NOME É <strong className="font-bold text-white">WANDERSON MARTINS</strong>, SOU TATUADOR HÁ MAIS DE
              UMA DÉCADA E <strong className="font-bold text-white">ESPECIALISTA EM REALISMO</strong>, TANTO PRETO E
              CINZA QUANTO COLORIDO.
            </p>
            <p className={pClass}>
              COMECEI NA <strong className="font-bold text-white">TATUAGEM</strong> AOS 24 ANOS, ENQUANTO CONCILIAVA A
              PROFISSÃO COM O TRABALHO DE FLORISTA. A FALTA DE INFORMAÇÃO DIFICULTOU MEU INÍCIO, MAS UM{' '}
              <strong className="font-bold text-white">WORKSHOP</strong> COM UM RENOMADO{' '}
              <strong className="font-bold text-white">TATUADOR</strong> MUDOU MINHA TRAJETÓRIA.
            </p>
            <p className={pClass}>
              COM O TEMPO, <strong className="font-bold text-white">CONQUISTEI PATROCÍNIOS</strong> DE GRANDES MARCAS,
              VIAJEI PELO BRASIL PARTICIPANDO DE COMPETIÇÕES E{' '}
              <strong className="font-bold text-white">ACUMULEI RECONHECIMENTO</strong> E PRÊMIOS.
            </p>
            <p className={pClass}>
              HOJE, COM A <strong className="font-bold text-white">CARREIRA CONSOLIDADA</strong>, ALÉM DE TATUADOR,
              TAMBÉM SOU INSTRUTOR, E DEDICO-ME A{' '}
              <strong className="font-bold text-white">ENSINAR NOVOS PROFISSIONAIS</strong>, COMPARTILHANDO O{' '}
              <strong className="font-bold text-white">CONHECIMENTO</strong> QUE CONSIDERO MEU MAIOR{' '}
              <strong className="font-bold text-white">INVESTIMENTO</strong> E QUE FEZ TODA A DIFERENÇA NA MINHA
              TRAJETÓRIA.
            </p>
          </div>
        </>
      }
    />
  )
}
