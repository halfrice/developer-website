import React from "react"
import { Nav, Seo } from "~components"
import styled from "styled-components"
import { GlobalStyles } from "~styles"

import "typeface-open-sans"
import "typeface-source-sans-pro"

const Root = styled.div`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <Root>
      <Seo />
      <GlobalStyles />
      <Nav />
      {children}
    </Root>
  )
}

export default Layout
