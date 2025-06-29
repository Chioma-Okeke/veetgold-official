import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)'],
        sans: ['var(--font-open-sans)']
      },
      colors: {
        greyscale: {
          text: {
            title: 'hsl(var(--greyscale-text-title) / <alpha-value>)'
          }
        }
      }
    },
  },
  plugins: [],
}
export default config
