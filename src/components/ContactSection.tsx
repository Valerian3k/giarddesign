import { motion } from 'framer-motion'

export function ContactCtaSection() {
  return (
    <div id="contact" className="bg-[#F5F0EC] px-6 py-16 sm:px-16 lg:px-48 lg:py-24">
      <section className="bg-[#1b5b31] mx-auto text-white">
        <div className="px-10 py-16 lg:px-20 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-[3fr_1fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-2xl font-montserrat sm:text-4xl lg:text-4xl leading-tight text-white">
                Zostańmy w kontakcie!
                <br />
                Znajdziesz nas na <span className="font-inter italic text-white">Instagramie</span>.
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start gap-6"
            >
              <p className="font-inter max-w-100 text-base text-white">Śledź nasze <span className="block">najnowsze realizacje!</span></p>
              
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex font-inter items-center gap-2 rounded-full bg-white px-6 py-3 text-sm text-[#1b5b31] transition hover:bg-[#f4efe8]"
              >
                Instagram
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}