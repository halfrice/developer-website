import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Section from "../styles/section"
import theme from "../styles/theme.yaml"
import mixins from "../styles/mixins"
import sr from "../utils/sr"
import { srConfig } from "../config/index"

const AboutContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  h1 {
    color: ${theme.colors.pink};
  }
`

const About = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <AboutContainer id="about" ref={revealContainer}>
      <h1>About</h1>
      <p>
        Engage innovative solutions and incentivize value-added supply-chains.
      </p>
    </AboutContainer>
  )
}

export default About
