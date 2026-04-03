/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cloud-dancer': '#121212',   // Flipped to Dark Charcoal for native dark mode
        'earth-brown': '#8E735B',     // Muted earthy tone
        'stone-gray': '#A1A1AA',       // Lighter gray for readability against dark base
        'luxury-dark': '#1C1C1E',      // Deep gray for panels/cards
        'luxury-black': '#F3F4F1',     // Flipped to Soft Cream for primary text
        'accent-neon': '#D4AF37',      // Reverting to classic Atelier Gold instead of Neon for ultra-luxury feel
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Ensuring modern typography over browser defaults
        serif: ['Playfair Display', 'serif'], // For scrollytelling headings
      }
    },
  },
  plugins: [],
}
