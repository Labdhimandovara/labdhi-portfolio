/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FAF8F5',       // Primary warm cream background
          card: '#F4EFEA',     // Accent soft warm beige/oatmeal card
          highlight: '#C87A53',// Muted terracotta accent
          text: '#23211F',     // Charcoal for heading/body text
          textMuted: '#706C68',// Soft warm gray
          divider: '#E5DFD9',  // Hairline divider beige
        }
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
