import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { device, mixins, Section, theme } from "~styles"
import { typography } from "~utils"

const { colors, fontSize } = theme
const { rhythm } = typography

const HeroContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1440px;
`
const Name = styled.h1`
  color: ${colors.lightSlate};
  margin: 0 0 ${rhythm(0.25)} -5px;
  font-size: ${fontSize.h1};
  ${device.desktop`font-size: 59px`};
  ${device.tablet`font-size: 53px`};
  ${device.phone`font-size: ${fontSize.h2}`};
`
const Title = styled.h2`
  color: ${colors.darkPink};
  font-size: ${fontSize.h2};
  ${device.desktop`font-size: 43px`};
  ${device.tablet`font-size: 37px`};
  ${device.phone`font-size: ${fontSize.h3}`};
  margin: 0 0 ${rhythm(0.5)} -2px;
`
const Location = styled.h3`
  color: ${colors.aqua};
  font-size: 36px;
  ${device.desktop`font-size: ${fontSize.h3}`};
  ${device.tablet`font-size: 28px`};
  ${device.phone`font-size: ${fontSize.xxl}`};
  margin: 0 0 ${rhythm(0.75)} -1px;
`
const Content = styled.p`
  color: ${colors.darkSlate};
  margin: 0 0 ${rhythm(0)} -1px;
  max-width: 600px;
`

const Hero = props => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
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
