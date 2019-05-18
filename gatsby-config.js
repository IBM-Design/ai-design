module.exports = {
  __experimentalThemes: [{ resolve: 'gatsby-theme-carbon', options: {} }],
  proxy: {
    prefix: "/api/0.1",
    url: "http://localhost:6003",
  },
};
