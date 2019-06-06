import React from "react"
import styled from "@emotion/styled"
import Section from "../styles/section"

const HeroContainer = styled(Section)`
  h1 {
    color: yellowgreen;
  }
`

const Hero = () => {
  return (
    <HeroContainer>
      <h1>This is a Hero</h1>
      <p>The Hero is heroic.</p>
    </HeroContainer>
  )
}

export default Hero
