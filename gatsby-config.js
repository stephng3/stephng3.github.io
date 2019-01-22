module.exports = {
  siteMetadata: {
    title: `Stephen Ng`,
    description: `Porfolio site of Stephen Ng, Singapore. Connect with me on LinkedIn https://www.linkedin.com/in/stephenngjy/`,
    author: `@stephng3`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
  ],
}
