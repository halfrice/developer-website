import { createGlobalStyle } from "styled-components"
import theme from "./theme.yaml"

const GlobalStyles = createGlobalStyle`
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

export default GlobalStyles
