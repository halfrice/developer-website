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
  }
  a {
    display: inline-block;
    text-decoration: none;
    color: inherit;
    position: relative;
    transition: 100ms;
    cursor: pointer;
    &:hover {
      color: ${theme.colors.darkSlate};
      outline: 0;
    }
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
    opacity: 0.01;
    transition: opacity 1000ms ${theme.easing};
  }
  .fade-enter-active {
    opacity: 1;
    transition: opacity 1000ms ${theme.easing};
  }
`

export default GlobalStyles
