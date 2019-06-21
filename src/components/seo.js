import React from "react"
import Helmet from "react-helmet"
import favicon from "../images/icons/favicon.ico"

const Seo = () => (
  <Helmet>
    <html lang="en" prefix="og: http://ogp.me/ns#" />
    <title>Developer Website</title>
    <link rel="shortcut icon" href={favicon} />
  </Helmet>
)

export default Seo
