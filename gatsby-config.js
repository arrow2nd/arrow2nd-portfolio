module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'arrow2nd-portfolio'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['M PLUS Rounded 1c'],
        display: 'swap'
      }
    }
  ]
}
