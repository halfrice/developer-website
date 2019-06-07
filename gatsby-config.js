const config = require("./src/config/")
// const theme = require("./src/styles/theme.yaml")

module.exports = {
  siteMetadata: {
    title: config.site.title,
    description: config.site.description,
    siteUrl: config.site.url,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: require.resolve(
          `${__dirname}/src/utils/typography`
        ),
        omitGoogleFont: true,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Neel Hiro - Software Engineer",
        short_name: "Neel Hiro",
        start_url: "/",
        background_color: "#111111",
        theme_color: "#444444",
        display: "minimal-ui",
        icon: "./src/images/icons/logo.png",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1100,
              quality: 90,
            },
          },
        ],
      },
    },
  ],
}
