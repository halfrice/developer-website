import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
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
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              siteUrl
              description
            }
          }
        }
      `}
      render={({ site }) => (
        <Root id="root">
          <Seo metadata={site.siteMetadata} />
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
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
