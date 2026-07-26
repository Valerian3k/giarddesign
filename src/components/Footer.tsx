import { motion } from 'framer-motion'
import adRespectLogo from '../assets/logo-adRespect.svg'

const footerLinks = [
  { name: 'Kontakt', url: 'mailto:giarddesign@kontakt.pl' },
  { name: 'Instagram', url: 'https://www.instagram.com/' },
  { name: 'Facebook', url: 'https://www.facebook.com/' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/' },
]

export function Footer() {
  return (
    <footer id="footer" className="overflow-hidden bg-[#111] px-6 py-14 text-white lg:px-48 lg:py-20">
      <div className="mx-auto">
        <div className="flex flex-col gap-8 border-b border-grey pb-12 lg:flex-row lg:items-center lg:justify-between">
          <motion.p 
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="font-serif text-[25px] leading-none"
          >
            <span className="font-semibold">giard</span>
            <span className="font-normal">design</span>
          </motion.p>

          <motion.div 
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col gap-5 sm:flex-row sm:items-center"
          >
            <p className="text-sm font-inter">Daj znać, co możemy dla Ciebie zrobić!</p>
            <a
              href="#contact"
              className="w-fit font-inter rounded-full bg-[#1b5b31] px-6 py-3 text-sm transition-colors hover:bg-[#144724]"
            >
              Skontaktuj się z nami
            </a>
          </motion.div>
        </div>

        <div className="grid gap-8 py-12 text-sm text-white/80 lg:grid-cols-[1fr_auto] lg:items-start">
          <motion.nav 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-wrap gap-x-10 gap-y-4 font-inter"
          >
            {footerLinks.map((link) => (
              <motion.a
                key={link.name}
                variants={{
                  hidden: { y: -20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
                }}
                href={link.url}
                target={link.name !== 'Kontakt' ? '_blank' : undefined}
                rel={link.name !== 'Kontakt' ? 'noopener noreferrer' : undefined}
                className="transition-colors hover:text-white"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.2,
                },
              },
            }}
            className="flex flex-col gap-4 sm:flex-row sm:gap-10"
          >
            <motion.a 
              variants={{
                hidden: { y: -20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
              }}
              href="tel:+48000000000" 
              className="transition-colors font-inter hover:text-white"
            >
              000-000-000
            </motion.a>
            <motion.a 
              variants={{
                hidden: { y: -20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
              }}
              href="mailto:giarddesign@kontakt.pl" 
              className="transition-colors font-inter hover:text-white"
            >
              giarddesign@kontakt.pl
            </motion.a>
          </motion.div>
        </div>

        <div className="flex flex-col font-inter gap-4 lg:pt-20 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <motion.p
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          >
            Prawa zastrzeżone © 2022
          </motion.p>
          <motion.a 
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            href="https://adrespect.pl" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex w-fit items-center gap-2 transition-opacity hover:opacity-80"
          >
            made by <img src={adRespectLogo} alt="adRespect.pl" className="h-6 w-auto" />
          </motion.a>
        </div>
      </div>
    </footer>
  )
}