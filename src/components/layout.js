import React from "react"
import SEO from "./seo"
import { Global, css } from "@emotion/core"

import GlobalStyles from "../styles/global"

import "typeface-open-sans"
import "typeface-source-sans-pro"

const Layout = ({ children }) => {
  return (
    <div
      id="root"
      css={css`
        min-height: 100vh;
      `}
    >
      <SEO />
      <Global styles={GlobalStyles} />
      <div>{children}</div>
    </div>
  )
}

export default Layout
