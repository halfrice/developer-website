import React from "react"
import styled from "styled-components"
import Section from "../styles/section"

const AboutContainer = styled(Section)`
  h1 {
    color: orangered;
  }
`

const About = () => {
  return (
    <AboutContainer>
      <h1>About</h1>
      <p>
        Engage innovative solutions and incentivize value-added supply-chains.
      </p>
    </AboutContainer>
  )
}

export default About
