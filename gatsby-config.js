const { PATH_PREFIX = '/' } = process.env;

module.exports = {
  pathPrefix: PATH_PREFIX,
  __experimentalThemes: [{ resolve: 'gatsby-theme-carbon', options: {} }],
  siteMetadata: {
    title: 'IBM AI Design',
  },
  proxy: {
    prefix: "/api/0.1",
    url: "http://localhost:6003",
  },
};
