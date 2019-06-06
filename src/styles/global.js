import React from "react"
import { Global, css } from "@emotion/core"
import theme from "./theme.yaml"

const styles = css`
  html {
    width: 100%;
  }
  body {
    background-color: ${theme.colors.dark};
    color: ${theme.colors.light};
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${theme.colors.darkPink};
    font-weight: 600;
  }
`

const GlobalStyles = () => <Global styles={styles} />

export default GlobalStyles
