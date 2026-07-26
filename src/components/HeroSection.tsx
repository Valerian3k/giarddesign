import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Icon'

const slides = [
  {
    title: 'Nowoczesna aranżacja Twojego ogrodu',
    description:
      'Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=90',
  },
  {
    title: 'Zaprojektuj zielony azyl w swoim ogrodzie',
    description:
      'Tworzymy przestrzenie, które łączą funkcjonalność z pięknem natury. Skupiamy się na detalach i harmonijnym ułożeniu roślin.',
    image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?auto=format&fit=crop&w=1200&q=90',
  },
  {
    title: 'Ogród idealnie dopasowany do Ciebie',
    description:
      'Od projektu do realizacji — zapewniamy kompleksowe wsparcie w tworzeniu ogrodów marzeń, które zachwycają przez cały rok.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=90',
  },
]

export function HeroSection({ onNavigate }: { onNavigate: (sectionId: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const prevSlide = () => setCurrentSlide((value) => (value - 1 + slides.length) % slides.length)
  const nextSlide = () => setCurrentSlide((value) => (value + 1) % slides.length)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((value) => (value + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="home" className="overflow-hidden bg-[#dcc1ab]">
      <div className="hidden lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-0">
        <div className="flex min-h-150 flex-col justify-center px-8 py-16 lg:order-1 lg:min-h-170 lg:mx-auto lg:w-full lg:max-w-155 lg:px-16 lg:py-20">
          <div className="max-w-140">
            <div className="grid items-start">
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`col-start-1 row-start-1 transition-opacity duration-700 ${
                    index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                  aria-hidden={index !== currentSlide}
                >
                  <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ 
                      y: index === currentSlide ? 0 : 40, 
                      opacity: index === currentSlide ? 1 : 0 
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl font-montserrat leading-[1.05] sm:text-6xl lg:text-[60px]"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ 
                      y: index === currentSlide ? 0 : 40, 
                      opacity: index === currentSlide ? 1 : 0 
                    }}
                    transition={{ duration: 0.7, delay: index === currentSlide ? 0.1 : 0, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8 font-inter text-sm leading-6 text-[#111]"
                  >
                    {slide.description}
                  </motion.p>
                </div>
              ))}
            </div>

            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <button onClick={() => onNavigate('contact')} className="font-inter rounded-full bg-[#1b5b31] px-6 py-3 text-sm text-white hover:bg-[#144724] hover:cursor-pointer">
                Skontaktuj się z nami
              </button>
              <button onClick={() => onNavigate('projects')} className="font-inter flex items-center gap-2 rounded-full border border-[#1b5b31] px-6 py-3 text-sm text-[#1b5b31] hover:bg-white/25 hover:cursor-pointer">
                Zobacz nasze realizacje <Icon name="arrow" className="h-6 w-6 rotate-90" />
              </button>
            </motion.div>
          </div>
        </div>

        <div className="relative min-h-150 lg:order-2 lg:min-h-170">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <div className="absolute right-0 bottom-0 flex justify-end">
            <div className="flex gap-3 bg-[#f5f0ec] p-3 shadow-xl shadow-black/10">
              <button
                onClick={prevSlide}
                className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#f5f0ec] text-[#111] transition hover:cursor-pointer hover:text-[#1b5b31]"
                aria-label="Poprzednie zdjęcie"
              >
                <Icon name="arrow" className="h-8 w-8 rotate-180 stroke-[2.5]" />
              </button>
              <button
                onClick={nextSlide}
                className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#f5f0ec] text-[#111] transition hover:cursor-pointer hover:text-[#1b5b31]"
                aria-label="Następne zdjęcie"
              >
                <Icon name="arrow" className="h-8 w-8 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="px-8 py-16">
          <div className="grid items-start">
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                className={`col-start-1 row-start-1 transition-opacity duration-700 ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={index !== currentSlide}
              >
                <motion.h1
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ 
                    y: index === currentSlide ? 0 : 40, 
                    opacity: index === currentSlide ? 1 : 0 
                  }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl font-sans leading-[1.05] sm:text-6xl"
                >
                  {slide.title}
                </motion.h1>
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ 
                    y: index === currentSlide ? 0 : 40, 
                    opacity: index === currentSlide ? 1 : 0 
                  }}
                  transition={{ duration: 0.7, delay: index === currentSlide ? 0.1 : 0, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-8 text-sm leading-6 text-[#111]"
                >
                  {slide.description}
                </motion.p>
              </div>
            ))}
          </div>

          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <button onClick={() => onNavigate('contact')} className="font-inter rounded-full bg-[#1b5b31] px-6 py-3 text-sm text-white hover:bg-[#144724] hover:cursor-pointer">
              Skontaktuj się z nami
            </button>
            <button onClick={() => onNavigate('projects')} className="font-inter flex items-center gap-2 rounded-full border border-[#1b5b31] px-6 py-3 text-sm text-[#1b5b31] hover:bg-white/25 hover:cursor-pointer">
              Zobacz nasze realizacje <Icon name="arrow" className="h-6 w-6 rotate-90" />
            </button>
          </motion.div>
        </div>
        <div className="relative h-104 bg-transparent sm:h-120">
          {slides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <div className="absolute inset-x-0 bottom-0 flex justify-end p-6">
            <div className="flex gap-2 rounded-2xl bg-white p-2 shadow-xl shadow-black/10">
              <button
                onClick={prevSlide}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#111] transition hover:bg-[#f1f1f1]"
                aria-label="Poprzednie zdjęcie"
              >
                <Icon name="arrow" className="h-4 w-4 rotate-180" />
              </button>
              <button
                onClick={nextSlide}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#111] transition hover:bg-[#f1f1f1]"
                aria-label="Następne zdjęcie"
              >
                <Icon name="arrow" className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}