import React from "react"
import styled from "styled-components"
import Section from "../styles/section"
import theme from "../styles/theme.yaml"
import mixins from "../styles/mixins"
import { rhythm } from "../utils/typography"

const HeroContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  min-height: 100vh;
`
const Name = styled.h1`
  color: ${theme.colors.light};
  font-size: 64px;
  margin: 0 0 ${rhythm(0.25)} 0;
`
const Title = styled.h2`
  color: ${theme.colors.darkPink};
  font-size: 48px;
  margin: 0 0 ${rhythm(0.5)} 2px;
`
const Location = styled.h3`
  color: ${theme.colors.lightBlue};
  font-size: 36px;
  margin: 0 0 ${rhythm(0.75)} 3px;
`
const Content = styled.p`
  color: ${theme.colors.lightGrey};
  margin: 0 0 ${rhythm(0)} 4px;
  max-width: 600px;
`

const Hero = props => {
  const { data } = props
  const { frontmatter, html } = data[0].node

  return (
    <HeroContainer>
      <Name>{frontmatter.name}</Name>
      <Title>{frontmatter.title}</Title>
      <Location>{frontmatter.location}</Location>
      <Content dangerouslySetInnerHTML={{ __html: html }} />
    </HeroContainer>
  )
}

export default Hero
