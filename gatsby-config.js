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
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
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
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1080,
              quality: 90,
              backgroundColor: "transparent",
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              ratio: 1.77,
              related: false,
              noIframeBorder: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 0`,
            },
          },
          {
            resolve: "gatsby-remark-emojis",
            options: {
              active: true,
              class: "emoji",
              size: 64,
              styles: {
                display: "inline",
                position: "relative",
                margin: "0",
              },
            },
          },
        ],
      },
    },
  ],
}
