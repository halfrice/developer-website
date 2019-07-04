import React from "react"
import PropTypes from "prop-types"
import { Nav, Seo, Status } from "~components"
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
      <Status />
    </Root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
