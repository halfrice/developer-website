import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { mixins, Section, theme } from "~styles"
import { typography } from "~utils"

const { rhythm } = typography

const HeroContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  min-height: 100vh;
`
const Name = styled.h1`
  color: ${theme.colors.lightSlate};
  font-size: 64px;
  margin: 0 0 ${rhythm(0.25)} 0;
`
const Title = styled.h2`
  color: ${theme.colors.darkPink};
  font-size: 48px;
  margin: 0 0 ${rhythm(0.5)} 2px;
`
const Location = styled.h3`
  color: ${theme.colors.aqua};
  font-size: 36px;
  margin: 0 0 ${rhythm(0.75)} 3px;
`
const Content = styled.p`
  color: ${theme.colors.darkSlate};
  margin: 0 0 ${rhythm(0)} 4px;
  max-width: 600px;
`

const Hero = props => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    console.log("effect used")
    return () => clearTimeout(timeout)
  }, [])

  const { data } = props
  const { frontmatter, html } = data[0].node

  const name = () => (
    <Name style={{ transitionDelay: "200ms" }}>{frontmatter.name}</Name>
  )
  const title = () => (
    <Title style={{ transitionDelay: "400ms" }}>{frontmatter.title}</Title>
  )
  const location = () => (
    <Location style={{ transitionDelay: "600ms" }}>
      {frontmatter.location}
    </Location>
  )
  const content = () => (
    <Content
      style={{ transitionDelay: "800ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  const items = [name, title, location, content]
  const order = ["up", "down", "left", "right"]

  return (
    <HeroContainer>
      <TransitionGroup>
        {isMounted &&
          items.map((item, i) => {
            const fx = order[i] || "up"
            return (
              <CSSTransition key={i} classNames={`fade${fx}`} timeout={3000}>
                {item}
              </CSSTransition>
            )
          })}
      </TransitionGroup>
    </HeroContainer>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
