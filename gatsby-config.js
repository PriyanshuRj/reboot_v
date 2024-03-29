module.exports = {
  siteMetadata: {
      title: `Vibhav`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [ "gatsby-plugin-react-helmet",  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};