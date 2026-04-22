import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#2d5a27',
        'soft-beige': '#fdfaf6',
      },
      fontFamily: {
        serif: ['"Noto Serif TC"', 'serif'],
        sans: ['"Noto Sans TC"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.15)' },
        },
        'nav-glow-breath': {
          '0%, 100%': {
            textShadow: '0 0 0px rgba(16, 185, 129, 0)',
            transform: 'scale(1)',
          },
          '50%': {
            textShadow: '0 0 15px rgba(16, 185, 129, 0.7)',
            transform: 'scale(1.1)',
            color: '#059669',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(45,90,39,0.3)' },
          '50%': { boxShadow: '0 0 0 8px rgba(45,90,39,0)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 20s ease-out forwards',
        'nav-glow-breath': 'nav-glow-breath 3s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        'pulse-green': 'pulse-green 2s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
