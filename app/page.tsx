import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero'
import { CursoInstructorSection } from '@/components/curso-instructor-section'
import { AwardsSection } from '@/components/sections/awards'
import { StylesPreviewSection } from '@/components/sections/styles-preview'
import { TattooClientSection } from '@/components/sections/tattoo-client-section'
import { CTASection } from '@/components/sections/cta'
import { StudioLocationSection } from '@/components/sections/studio-location'
import { CoursePreviewSection } from '@/components/sections/course-preview'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <CursoInstructorSection imageFit="contain" />
        <AwardsSection />
        <TattooClientSection />
        <StylesPreviewSection />
        <StudioLocationSection />
        <CTASection />
        <CoursePreviewSection />
      </main>
      <Footer />
    </>
  )
}
