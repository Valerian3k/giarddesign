import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './Icon'

type HeaderProps = {
  isMenuOpen: boolean
  onMenuToggle: () => void
  onNavigate: (sectionId: string) => void
}

const navigationItems = [
  { label: 'Oferta', id: 'services' },
  { label: 'O firmie', id: 'about' },
  { label: 'Realizacje', id: 'projects' },
  { label: 'Kontakt', id: 'contact' },
]

const offerItems = [
  { label: 'Projektowanie ogrodów', id: 'projects' },
  { label: 'Nasze realizacje', id: 'projects' },
  { label: 'Pielęgnacja i doradztwo', id: 'projects' },
]

export function Header({ isMenuOpen, onMenuToggle, onNavigate }: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isOfferOpen, setIsOfferOpen] = useState(false)

  return (
    <header className="relative z-20 bg-white">
      <div className="mx-auto flex h-18 items-center justify-between px-6 lg:h-24 lg:px-22">
        <motion.button 
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onNavigate('home')} 
          className="cursor-pointer font-serif text-[25px] tracking-[-1.5px]"
        >
          <span className="font-bold">giard</span>design
        </motion.button>

        <motion.nav 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
              },
            },
          }}
          className="hidden items-center gap-9 text-sm lg:flex"
        >
          <motion.div 
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="relative"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOfferOpen((value) => !value)}
              className="font-inter flex cursor-pointer items-center gap-2 rounded-full text-sm text-[#111] transition hover:text-[#1b5b31]"
              aria-label="Toggle oferta"
            >
              Oferta
              <motion.span animate={{ rotate: isOfferOpen ? 180 : 0 }} transition={{ duration: 0.4, ease: 'easeInOut' }}>
                <Icon name="chevron" className={`h-4 w-4 ${isOfferOpen ? 'text-[#1b5b31]' : ''}`} />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {isOfferOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full z-10 mt-4 w-76 origin-top-left rounded-[28px] border border-black/5 bg-white p-3"
                >
                  <div className="flex flex-col gap-1">
                    {offerItems.map((offer) => (
                      <motion.button
                        key={offer.label}
                        whileHover={{ x: 4, backgroundColor: '#f5f0ec', color: '#1b5b31' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          onNavigate(offer.id)
                          setIsOfferOpen(false)
                        }}
                        className="font-inter group flex w-full items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm text-[#111] transition-colors hover:cursor-pointer"
                      >
                        <span className="transition-transform duration-200">
                          {offer.label}
                        </span>
                        <Icon name="arrow" className="h-4 w-4 rotate-90 text-[#1b5b31] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {navigationItems.filter((item) => item.id !== 'services').map((item) => (
            <motion.button 
              key={item.id} 
              variants={{
                hidden: { y: -30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
              }}
              whileHover={{ scale: 1.05, color: '#1b5b31' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate(item.id)} 
              className="font-inter cursor-pointer transition-colors"
            >
              {item.label}
            </motion.button>
          ))}

          <motion.div 
            variants={{
              hidden: { y: -30, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="relative flex items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen((value) => !value)}
              className="cursor-pointer inline-flex h-11 w-11 items-center justify-center rounded-full border-none bg-transparent text-[#111] transition hover:text-[#1b5b31] focus:outline-none focus:ring-0"
              aria-label="Open search"
            >
              <Icon name="search" />
            </motion.button>

            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ width: 0, opacity: 0, scaleX: 0 }}
                  animate={{ width: '280px', opacity: 1, scaleX: 1 }}
                  exit={{ width: 0, opacity: 0, scaleX: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ originX: 1 }}
                  className="absolute right-full top-1/2 z-10 -translate-y-1/2 mr-2 overflow-hidden rounded-full border border-black/10 bg-white shadow-xl shadow-black/10"
                >
                  <label className="sr-only" htmlFor="header-search">
                    Szukaj
                  </label>
                  <input
                    id="header-search"
                    type="search"
                    placeholder="Szukaj..."
                    autoFocus
                    className="w-full rounded-full border-none bg-transparent px-5 py-3 text-sm text-[#111] outline-none focus:ring-0"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.nav>

        <motion.div 
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 lg:hidden"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onMenuToggle}
            className="cursor-pointer inline-flex h-11 w-11 items-center justify-center rounded-full border border-transparent bg-transparent text-[#111] transition hover:border-[#1b5b31] hover:bg-white/90 hover:text-[#1b5b31]"
            aria-label="Open menu"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
          </motion.button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] w-full overflow-y-auto border-t border-black/10 bg-white px-6 py-5 shadow-lg lg:hidden"
          >
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsOfferOpen((value) => !value)}
              className="font-inter flex w-full items-center justify-between rounded-2xl pr-4 py-3 text-left text-sm text-[#111] transition hover:bg-[#e8e2db] hover:text-[#1b5b31]"
            >
              Oferta
              <motion.span animate={{ rotate: isOfferOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <Icon name="chevron" className={`h-4 w-4 ${isOfferOpen ? 'text-[#1b5b31]' : ''}`} />
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {isOfferOpen && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-1 rounded-3xl bg-white p-2 border-[#dcc1ab] border mt-2 mb-2">
                    {offerItems.map((offer) => (
                      <motion.button
                        key={offer.label}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          onNavigate(offer.id)
                          setIsOfferOpen(false)
                        }}
                        className="font-inter group flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm text-[#111] transition-all hover:bg-[#f5f0ec] hover:text-[#1b5b31]"
                      >
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          {offer.label}
                        </span>
                        <motion.div
                          initial={{ opacity: 0, x: -5 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon name="arrow" className="h-4 w-4 rotate-90 text-[#1b5b31]" />
                        </motion.div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {navigationItems.filter((item) => item.id !== 'services').map((item) => (
              <motion.button 
                key={item.id} 
                whileTap={{ scale: 0.98 }}
                onClick={() => { onNavigate(item.id) }} 
                className="font-inter cursor-pointer block w-full py-3 text-left text-sm transition hover:bg-[#e8e2db] hover:text-[#1b5b31]"
              >
                {item.label}
              </motion.button>
            ))}

            <div className="mt-4 pb-4">
              <label className="sr-only" htmlFor="mobile-search">
                Szukaj
              </label>
              <input
                id="mobile-search"
                type="search"
                placeholder="Szukaj..."
                className="w-full rounded-full border bg-transparent px-4 py-3 text-sm text-[#111] border-[#dcc1ab] outline-none transition focus:border-[#1b5b31] focus:ring-2 focus:ring-[#bde3d8]/70"
              />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}