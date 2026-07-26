import { useState } from 'react'
import { AboutSection } from './components/AboutSection'
import { ContactCtaSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { ServicesSection } from './components/ServicesSection'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <main className="overflow-x-hidden bg-[#f5f0ec] font-sans text-[#111] selection:bg-[#bde3d8]">
      <Header isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen((value) => !value)} onNavigate={scrollToSection} />
      <HeroSection onNavigate={scrollToSection} />
      <ServicesSection onNavigate={scrollToSection} />
      <AboutSection onNavigate={scrollToSection} />
      <GallerySection />
      <ContactCtaSection />
      <Footer />
    </main>
  )
}

export default App
