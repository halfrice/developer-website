import React from "react"
import { css } from "@emotion/core"

import SEO from "./seo"
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
      <GlobalStyles />
      {children}
    </div>
  )
}

export default Layout
