const contentfulConfig = require('./.contentful')

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-115759724-1',
        head: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: process.env.NODE_ENV === 'development' ?
        contentfulConfig.development :
        contentfulConfig.production
    },
  ],
}
