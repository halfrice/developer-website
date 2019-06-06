import { css } from "@emotion/core"
import theme from "./theme.yaml"

const GlobalStyles = css`
  html {
    width: 100%;
  }
  body {
    font-weight: 400;
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

export default GlobalStyles
