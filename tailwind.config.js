/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
      },
      colors: {
        mint: '#6BC5A5',
        malva: '#C1A0D7',
        coral: '#FF8C7A',
        body: '#333333',
        yellow: '#FFD97D',
        cream: '#FFF9F4',
        white: '#FFFFFF',
      },
      borderRadius: {
        'brand': '12px',
        'brand-lg': '24px',
      }
    },
  },
  plugins: [],
}
