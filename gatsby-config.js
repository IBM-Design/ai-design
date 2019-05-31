const { PATH_PREFIX = '/' } = process.env;

module.exports = {
  pathPrefix: PATH_PREFIX,
  __experimentalThemes: [{ resolve: 'gatsby-theme-carbon', options: {} }],
  siteMetadata: {
    title: 'IBM Design for AI',
  },
  proxy: {
    prefix: "/api/0.1",
    url: "http://localhost:6003",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IBM Design for AI`,
        short_name: `IBM Design for AI`,
        start_url: `/`,
        background_color: `#171717`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/fav/favicon-196x196.png`, // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
  ],
};
