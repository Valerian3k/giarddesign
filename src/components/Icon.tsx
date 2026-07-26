import brushImg from '../assets/brush.svg'
import eyeImg from '../assets/eye.svg'
import sparkleImg from '../assets/sparkle.svg'

export type IconName = 'arrow' | 'chevron' | 'menu' | 'close' | 'search' | 'instagram' | 'facebook' | 'brush' | 'eye' | 'sparkle'

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const common = { className: `h-5 w-5 ${className}`, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, viewBox: '0 0 24 24', 'aria-hidden': true }

  if (name === 'arrow') return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  if (name === 'chevron') return <svg {...common}><path d="m7 10 5 5 5-5" /></svg>
  if (name === 'menu') return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
  if (name === 'close') return <svg {...common}><path d="m6 6 12 12M18 6 6 18" /></svg>
  if (name === 'search') return <svg {...common}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></svg>
  if (name === 'instagram') return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></svg>
  if (name === 'brush') return <img src={brushImg} className={className} alt="Brush icon" />
  if (name === 'eye') return <img src={eyeImg} className={className} alt="Eye icon" />
  if (name === 'sparkle') return <img src={sparkleImg} className={className} alt="Sparkle icon" />
  return <svg {...common}><path d="M14 8h3V4h-3c-3.3 0-6 2.7-6 6v2H5v4h3v5h4v-5h3l1-4h-4v-2c0-1.1.9-2 2-2Z" /></svg>
}
