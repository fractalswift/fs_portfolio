module.exports = {
  siteMetadata: {
    title: 'Matthew Macklin - Full Stack Developer',
    author: 'Matthew Macklin',
    description:
      'Website for Matthew Macklin, design based Dimension by HTML5 UP',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-168213102-1',
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Fractal Swift- Matthew Macklin',
        short_name: 'Fractal Swift',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/swift-bird-shape.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
