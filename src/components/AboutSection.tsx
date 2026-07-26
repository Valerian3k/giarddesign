import { motion } from 'framer-motion'
import { Icon } from './Icon'

export function AboutSection({ onNavigate }: { onNavigate: (sectionId: string) => void }) {
  return (
    <section id="about" className="overflow-hidden bg-[#1b5b31] text-white">
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-0">
        <div className="min-h-110 bg-[url('https://images.unsplash.com/photo-1558521958-0a228e77e984?auto=format&fit=crop&w=1100&q=85')] bg-cover bg-center lg:order-1 lg:min-h-110 lg:w-full lg:bg-size-[100%] lg:bg-left" />
        <div className="flex min-h-110 flex-col justify-center px-8 py-16 lg:order-1 lg:mx-auto lg:w-full lg:max-w-155 lg:px-16 lg:py-25">
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-inter text-xs tracking-[.08em] text-[#dcefe9]">O firmie</p>
            <h2 className="mt-4 max-w-117.5 font-montserrat text-4xl leading-tight sm:text-5xl">
              Tworzymy
              <span className="block">z <span className="font-inter italic">pasją</span></span>
            </h2>
            <p className="mt-8 font-inter max-w-127.5 text-sm leading-6 text-white/90">
              Każdy projekt to nowe wyzwanie. Dlatego nasz zespół tworzą wykwalifikowani projektanci oraz architekci, których zadaniem jest rozpoznanie i realizacja potrzeb każdego Klienta. Nasza specjalizacja to przestrzenie nowoczesne, które charakteryzuje minimalizm, geometria i elegancka prostota. Tworzymy ogrody małoobsługowe, dostosowane do współczesnego trybu życia.
            </p>
          </motion.div>

          <motion.button
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onNavigate('contact')}
            className="mt-15 font-inter inline-flex w-fit items-center gap-1 rounded-full border border-white px-6 py-3 text-sm font-normal text-white hover:cursor-pointer 
                      hover:bg-white hover:text-[#1b5b31] transition-colors duration-200"
          >
            <span>Poznaj nas bliżej</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full">
              <Icon name="arrow" className="h-4 w-4" />
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  )
}