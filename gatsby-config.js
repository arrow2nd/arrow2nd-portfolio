module.exports = {
  siteMetadata: {
    title: 'arrow2nd',
    titleTemplate: `%s | arrow2nd`,
    description: 'あろーがつくったものをまとめたサイト',
    author: 'arrow2nd',
    url: 'https://arrow2nd.com/',
    image: `/icons/icon-256x256.png`,
    twitterUsername: '@arrow_2nd'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-typegen',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['M PLUS Rounded 1c'],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'arrow2nd',
        short_name: 'arrow2nd',
        start_url: '/',
        background_color: '#faf8f7',
        theme_color: '#faf8f7',
        display: 'minimal-ui',
        icon: `${__dirname}/src/images/arrow2nd.png`
      }
    }
  ]
}
