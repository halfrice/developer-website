import React from "react"
import styled from "styled-components"
import Section from "../styles/section"
import theme from "../styles/theme.yaml"
import mixins from "../styles/mixins"

const AboutContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  height: 70vh;
  h1 {
    color: ${theme.colors.pink};
  }
`

const About = () => {
  return (
    <AboutContainer id="about">
      <h1>About</h1>
      <p>
        Engage innovative solutions and incentivize value-added supply-chains.
      </p>
    </AboutContainer>
  )
}

export default About
