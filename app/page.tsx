import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { AwardsSection } from '@/components/sections/awards'
import { CoursePreviewSection } from '@/components/sections/course-preview'
import { StylesPreviewSection } from '@/components/sections/styles-preview'
import { CTASection } from '@/components/sections/cta'
import { StudioLocationSection } from '@/components/sections/studio-location'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <AwardsSection />
        <CoursePreviewSection />
        <StylesPreviewSection />
        <StudioLocationSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
