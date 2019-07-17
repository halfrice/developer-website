import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Nav, Seo, Splash, Status } from "~components"
import styled from "styled-components"
import { GlobalStyles } from "~styles"

import "typeface-open-sans"
import "typeface-source-sans-pro"

const Root = styled.div`
  min-height: 100vh;
`

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <Root id="root">
      <Seo />
      <GlobalStyles />

      {isLoading ? (
        <Splash finishLoading={() => setIsLoading(false)} />
      ) : (
        <div className="container">
          <Nav />
          {children}
          <Status />
        </div>
      )}

      {/* <Splash finishLoading={() => setIsLoading(false)} /> */}
    </Root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
