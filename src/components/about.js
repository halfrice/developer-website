import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { mixins, Section, theme } from "~styles"
import { sr } from "~utils"
import { srConfig } from "~config"

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
