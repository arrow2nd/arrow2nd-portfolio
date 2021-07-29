module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px'
    },
    extend: {
      colors: {
        'natural-white': '#faf8f7',
        'natural-black': '#1c1c1c'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
