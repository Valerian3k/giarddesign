import { motion } from 'framer-motion'
import { Icon, type IconName } from './Icon'

const services: { title: string; text: string; icon: IconName; target: string; buttonLabel?: string }[] = [
  {
    title: 'Projekty',
    text: 'Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.',
    icon: 'brush',
    target: 'projects',
  },
  {
    title: 'Wizualizacje',
    text: 'Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.',
    icon: 'eye',
    target: 'projects',
  },
  {
    title: 'Realizacje',
    text: 'Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.',
    icon: 'sparkle',
    target: 'projects',
    buttonLabel: 'Zobacz nasze realizacje',
  },
]

export function ServicesSection({ onNavigate }: { onNavigate?: (sectionId: string) => void }) {
  return (
    <section id="services" className="bg-[#f5f0ec] px-6 py-20 lg:px-22 lg:py-30">
      <div className="mx-auto max-w-316">
        <motion.div 
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:pl-26"
        >
          <p className="font-inter text-xs tracking-[.08em] text-[#1b5b31]">Oferta</p>
          <h2 className="mt-4 max-w-150 font-montserrat text-4xl sm:text-5xl">
            Działamy <span className="italic font-inter">kompleksowo</span>
          </h2>
          <p className="mt-7 max-w-160 text-sm leading-6 font-inter">
            Oferujemy kompletną obsługę inwestycji terenów zielonych. Projektujemy nowoczesne ogrody przydomowe oraz rezydencjonalne. Stworzymy dla Ciebie projekt, zwizualizujemy go i wcielimy w życie, a na każdym etapie posłużymy radą i wieloletnim doświadczeniem. 
          </p>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.4, 
                delay: index * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              role="button"
              tabIndex={0}
              onClick={() => onNavigate?.(service.target)}
              onKeyDown={(event) => event.key === 'Enter' && onNavigate?.(service.target)}
              className="box-border rounded-3xl border-2 border-transparent bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#bde3d8] hover:bg-[#f7fbf7] cursor-pointer sm:rounded-[26px] sm:p-8"
            >
              <div className="inline-flex items-center justify-center">
                <Icon name={service.icon}/>
              </div>
              <h3 className="mt-8 font-montserrat font-semibold text-3xl">{service.title}</h3>
              <p className="mt-4 font-inter min-h-24 text-sm leading-6">{service.text}</p>
              <button className="mt-7 font-inter flex items-center gap-2 border-b border-[#1b5b31] pb-1 text-sm text-[#1b5b31] hover:cursor-pointer">
                {service.buttonLabel ?? 'Dowiedz się więcej'} <Icon name="arrow" className="h-4 w-4" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}