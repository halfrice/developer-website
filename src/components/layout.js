import React from "react"
import SEO from "./seo"

const Layout = ({ children }) => {
  return (
    <div id="root">
      <SEO />
      <div>{children}</div>
    </div>
  )
}

export default Layout
