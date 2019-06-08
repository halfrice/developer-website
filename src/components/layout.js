import React from "react"
import styled from "styled-components"
import SEO from "./seo"
import GlobalStyles from "../styles/global"
import Nav from "./nav"

import "typeface-open-sans"
import "typeface-source-sans-pro"

const Root = styled.div`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Root>
      <SEO />
      <GlobalStyles />
      <Nav />
      {children}
    </Root>
  )
}

export default Layout
