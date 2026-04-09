import { CursoSplitSection } from '@/components/curso-split-section'
import {
  COURSE_IMAGE_INSTRUCTOR,
  COURSE_INSTRUCTOR_BIO_PARAGRAPHS,
  COURSE_INSTRUCTOR_IMAGE_ALT,
  COURSE_INSTRUCTOR_KICKER,
} from '@/lib/course'

const pClass =
  'font-sans text-xs font-normal uppercase leading-relaxed tracking-[0.12em] text-white/90 sm:text-sm md:tracking-[0.16em]'

type CursoInstructorSectionProps = {
  /** Na página inicial use `contain` para mostrar a foto inteira (sem cortar). No /curso o padrão é `cover`. */
  imageFit?: 'cover' | 'contain'
}

export function CursoInstructorSection({ imageFit = 'cover' }: CursoInstructorSectionProps = {}) {
  return (
    <CursoSplitSection
      imageSrc={COURSE_IMAGE_INSTRUCTOR}
      imageAlt={COURSE_INSTRUCTOR_IMAGE_ALT}
      imageFit={imageFit}
      leftContent={
        <>
          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/70 sm:text-xs">
            {COURSE_INSTRUCTOR_KICKER}
          </p>
          <div className="mt-6 space-y-5">
            {COURSE_INSTRUCTOR_BIO_PARAGRAPHS.map((segments, pi) => (
              <p key={pi} className={pClass}>
                {segments.map((seg, si) =>
                  seg.bold ? (
                    <strong key={si} className="font-bold text-white">
                      {seg.text}
                    </strong>
                  ) : (
                    <span key={si}>{seg.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
        </>
      }
    />
  )
}
