import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Icon } from './Icon'

const projectImages = [
  { src: 'https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=800&q=85', className: 'h-[430px]' }, 
  { src: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=85', className: 'h-[240px]' }, 
  { src: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=800&q=85', className: 'h-[280px]' }, 
  { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=85', className: 'h-[360px]' }, 
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85', className: 'h-[220px]' }, 
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=85', className: 'h-[260px]' },
  { src: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=85', className: 'h-[430px]' },
  { src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=85', className: 'h-[240px]' },
  { src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=85', className: 'h-[360px]' },
  { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=85', className: 'h-[220px]' },
  { src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=85', className: 'h-[260px]' },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=85', className: 'h-[280px]' },
  { src: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=85', className: 'h-[320px]' },
  { src: 'https://images.unsplash.com/photo-1482192505345-5655af888cc4?auto=format&fit=crop&w=800&q=85', className: 'h-[220px]' },
  { src: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=800&q=85', className: 'h-[300px]' },
  { src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&q=85', className: 'h-[260px]' },
  { src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=85', className: 'h-[340px]' },
  { src: 'https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&w=800&q=85', className: 'h-[240px]' },
  { src: 'https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=800&q=85', className: 'h-[280px]' },
  { src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=85', className: 'h-[250px]' },
  { src: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?auto=format&fit=crop&w=800&q=85', className: 'h-[320px]' },
]

export function GallerySection() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const sectionRef = useRef<HTMLElement>(null)
  const selectedImage = selectedImageIndex !== null ? projectImages[selectedImageIndex] : null

  useEffect(() => {
    if (selectedImageIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImageIndex(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImageIndex])

  const handleToggleVisibility = () => {
    if (showAllProjects && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setShowAllProjects((value) => !value)
  }

  const containerMaxHeight = showAllProjects
    ? 'max-h-[8500px] sm:max-h-[4500px] lg:max-h-[2500px]'
    : 'max-h-[2000px] sm:max-h-[1400px] lg:max-h-[900px]'

  return (
    <section ref={sectionRef} id="projects" className="bg-[#dcc1ab] py-20 lg:py-30">
      <div className="mx-auto">
        <motion.div 
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="pl-6 sm:pl-10 lg:pl-50"
        >
          <p className="text-xs tracking-[.08em] text-[#1b5b31] font-inter">Realizacje</p>
          <h2 className="mt-4 text-4xl sm:text-5xl font-[Montserrat]">
            Nasze <span className="italic font-[Inter]">projekty</span>
          </h2>
        </motion.div>

        <div className={`relative mt-14 overflow-hidden transition-[max-height] duration-1000 ease-in-out ${containerMaxHeight}`}>
          <div className="columns-1 gap-9 sm:columns-2 lg:columns-3">
            {projectImages.map((item, index) => (
              <button
                key={`${item.src}-${index}`}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                className={`group mb-9 block w-full cursor-pointer break-inside-avoid overflow-hidden ${item.className || 'h-75'}`}
                aria-label={`Pokaż zdjęcie projektu ${index + 1}`}
              >
                <img
                  src={item.src}
                  alt={`Garden project ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          <div
            className={`pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#dcc1ab] to-transparent transition-opacity duration-700 ease-in-out ${
              showAllProjects ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="relative z-10 mt-10 flex justify-center"
        >
          <button
            onClick={handleToggleVisibility}
            className="flex items-center gap-2 rounded-full border border-black px-6 py-3 text-sm font-inter text-black transition-colors hover:cursor-pointer hover:bg-white/25"
          >
            {showAllProjects ? 'Zwiń' : 'Rozwiń'}
            <Icon name="arrow" className={showAllProjects ? 'h-4 w-4 rotate-270' : 'h-4 w-4 rotate-90'} />
          </button>
        </motion.div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80"
          onClick={() => setSelectedImageIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd zdjęcia"
        >
          <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-6 lg:p-8">
            <div
              className="absolute left-0 top-0 z-10 flex items-center gap-3 px-3 py-3 text-white sm:px-4 sm:py-4"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 backdrop-blur-sm">
                <span className="text-sm font-medium">
                  {selectedImageIndex! + 1} / {projectImages.length}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex((current) =>
                        current === null ? 0 : (current - 1 + projectImages.length) % projectImages.length,
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-white transition hover:bg-white/20 hover:cursor-pointer"
                    aria-label="Poprzednie zdjęcie"
                  >
                    <Icon name="arrow" className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImageIndex((current) =>
                        current === null ? 0 : (current + 1) % projectImages.length,
                      )
                    }
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-white transition hover:bg-white/20 hover:cursor-pointer"
                    aria-label="Następne zdjęcie"
                  >
                    <Icon name="arrow" className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                setSelectedImageIndex(null)
              }}
              className="absolute right-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full text-5xl font-light leading-none text-white transition hover:cursor-pointer hover:text-white/75 sm:h-14 sm:w-14"
              aria-label="Zamknij podgląd"
            >
              ×
            </button>

            <img
              src={selectedImage.src}
              alt="Wybrane zdjęcie projektu"
              className="max-h-[72vh] max-w-[92vw] h-auto w-auto rounded-2xl object-contain shadow-2xl sm:max-h-[78vh] sm:max-w-[86vw] lg:max-h-[82vh] lg:max-w-[70vw]"
            />
          </div>
        </div>
      )}
    </section>
  )
}