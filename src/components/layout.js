import React from "react"
import SEO from "./seo"
import { css } from "@emotion/core"

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
      <div>{children}</div>
    </div>
  )
}

export default Layout
