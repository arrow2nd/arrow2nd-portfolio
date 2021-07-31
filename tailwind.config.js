module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'natural-white': '#faf8f7',
        'natural-black': '#1c1c1c',
        'natural-gray': '#464646',
        arrow2nd: '#5B94FF',
        twitter: '#1DA1F2',
        mastodon: '#2B90D9',
        github: '#333333',
        line: '#06C755',
        link: '#3B91C4'
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
