import { createGlobalStyle } from "styled-components"
import theme from "./theme.yaml"
import device from "./device"

// import "typeface-open-sans"
// import "typeface-source-sans-pro"

const { colors, fonts, fontSize } = theme

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: ${colors.dark};
    color: ${colors.light};
    font-family: ${fonts.openSans};
    font-size: ${fontSize.md};
    ${device.tablet`font-size: ${fontSize.sm};`};
    font-weight: 400;
    line-height: 1.5;

    &.hidden {
      overflow: hidden;
    }
    &.blur {
      overflow: hidden;
      #root > .container > * {
        filter: blur(3px) brightness(0.6);
        transition: ${theme.transition};
        pointer-events: none;
        user-select: none;
      }
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${colors.darkPink};
    font-weight: 600;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    position: relative;
    transition: 100ms;
    cursor: pointer;
    &:hover {
      color: ${colors.darkSlate};
      outline: 0;
    }
  }

  p {
    margin: 0 0 15px 0;
  }

  ul, ol {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .fadeup-enter {
    opacity: 0.01;
    transform: translateY(25px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadeup-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadedown-enter {
    opacity: 0.01;
    transform: translateY(-25px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadedown-enter-active {
    opacity: 1;
    transform: translateY(0px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadeleft-enter {
    opacity: 0.01;
    transform: translateX(-50px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fadeleft-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .faderight-enter {
    opacity: 0.01;
    transform: translateX(50px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .faderight-enter-active {
    opacity: 1;
    transform: translateX(0px);
    transition: opacity 500ms ${theme.easing}, transform 500ms ${theme.easing};
  }
  .fade-enter {
    opacity: 0;
    transition: opacity 1000ms ${theme.easing};
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }
`

export default GlobalStyles
