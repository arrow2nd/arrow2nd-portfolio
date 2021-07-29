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
        'natural-black': '#1c1c1c',
        'natural-gray': '#464646',
        arrow2nd: '#5B94FF',
        twitter: '#1DA1F2',
        mastodon: '#2B90D9',
        github: '#333333'
      },
      letterSpacing: {
        super: '.25rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
