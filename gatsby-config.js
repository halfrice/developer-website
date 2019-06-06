module.exports = {
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: require.resolve(
          `${__dirname}/src/utils/typography`
        ),
        omitGoogleFont: true,
      },
    },
  ],
}
