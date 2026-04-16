import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E4C46E',
        'gold-dark': '#A8862A',
        navy: '#1A1A2E',
        cream: '#F8F7F4',
        'deep-black': '#0A0A0A',
        muted: '#6B6B6B',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 50%, #0A0A0A 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.3) 50%, transparent 100%)',
      },
      animation: {
        'hero-pulse': 'heroPulse 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'whatsapp-pulse': 'whatsappPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'typewriter': 'typewriter 0.1s steps(1) forwards',
        'chevron-bounce': 'chevronBounce 1.5s ease-in-out infinite',
        'count-up': 'countUp 0.5s ease-out forwards',
      },
      keyframes: {
        heroPulse: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.6' },
          '33%': { transform: 'translateY(-20px) translateX(10px)', opacity: '1' },
          '66%': { transform: 'translateY(-10px) translateX(-10px)', opacity: '0.8' },
        },
        whatsappPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(37, 211, 102, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        chevronBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      boxShadow: {
        'gold': '0 0 30px rgba(201, 168, 76, 0.3)',
        'gold-hover': '0 0 50px rgba(201, 168, 76, 0.5)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 48px rgba(0,0,0,0.15)',
      },
    },
  },
  plugins: [],
}
export default config
