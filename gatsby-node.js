const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~components": path.resolve(__dirname, "src/components"),
        "~config": path.resolve(__dirname, "src/config"),
        "~content": path.resolve(__dirname, "src/content"),
        "~images": path.resolve(__dirname, "src/images"),
        "~pages": path.resolve(__dirname, "src/pages"),
        "~styles": path.resolve(__dirname, "src/styles"),
        "~utils": path.resolve(__dirname, "src/utils"),
      },
    },
  })
}
