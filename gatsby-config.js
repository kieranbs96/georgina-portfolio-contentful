const contentfulConfig = require('./.contentful')

module.exports = {
  siteMetadata: {
    title: `Georgina Cross`,
    siteUrl: 'https://georginacross.co.uk',
    description: 'Georgina Cross - Registered Nurse',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#014990`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-115759724-1',
        head: false,
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig.production
    },
  ],
}
