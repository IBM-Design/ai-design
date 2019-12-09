const { PATH_PREFIX = '/' } = process.env;

module.exports = {
  pathPrefix: PATH_PREFIX,
  siteMetadata: {
    title: 'IBM Design for AI',
    description: 'Our practice is built on our Principles for the AI Era as a resource for all designers and developers. This shared collection of ethics, guidelines, and resources ensures that IBM products share a unified foundation.',
    keywords: 'artificial intelligence,machine learning,ai,ml,ethics,data,ibm,carbon,deep learning,conversation ui,design,develop,cool,technology',
  },
  proxy: {
    prefix: "/api/0.1",
    url: "http://localhost:6003",
  },
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl: 'https://github.com/IBM-Design/ai-design',
          subDirectory: '',
          branch: 'staging',
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'IBM Design for AI',
        short_name: 'IBM Design for AI',
        start_url: '/',
        background_color: '#171717',
        theme_color: '#000000',
        display: 'minimal-ui',
        include_favicon: false,
      },
    },
    {
      resolve: 'gatsby-plugin-force-trailing-slashes',
      options: {
        excludedPaths: ['/404.html'],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149252834-1",
      },
    },
    `gatsby-plugin-force-trailing-slashes`
  ],
};
