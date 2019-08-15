import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { device, mixins, Section, theme } from "~styles"

const { colors, fontSize } = theme

const HeroContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  max-width: 1440px;
  min-height: calc(100vh - 50px);
  margin-top: 50px;
`
const Avatar = styled(Img)`
  border-radius: 50%;
  border: 1px solid transparent;
  width: 132px;
  ${device.desktop`width: 120px;`};
  ${device.tablet`width: 107px;`};
  ${device.phone`width: 97px;`};
  height: 132px;
  ${device.desktop`height: 120px;`};
  ${device.tablet`height: 107px;`};
  ${device.phone`height: 97px;`};
  margin: 0 0 5px 0;
  overflow: hidden;
`
const Name = styled.h1`
  color: ${colors.lightSlate};
  margin: 0 0 0 -5px;
  font-size: ${fontSize.h1};
  ${device.desktop`font-size: 59px`};
  ${device.tablet`font-size: 53px`};
  ${device.phone`font-size: ${fontSize.h2}`};
  line-height: 1.3;
`
const Title = styled.h2`
  font-size: ${fontSize.h2};
  ${device.desktop`font-size: 43px`};
  ${device.tablet`font-size: 37px`};
  ${device.phone`font-size: ${fontSize.h3}`};
  margin: 0 0 10px -2px;
  ${mixins.gradient};
  /* padding: 5px 0; */
  line-height: 1.3;
`
const Location = styled.h3`
  font-size: 36px;
  ${device.desktop`font-size: ${fontSize.h3}`};
  ${device.tablet`font-size: 28px`};
  ${device.phone`font-size: ${fontSize.xxl}`};
  margin: 0 0 20px -1px;
  ${mixins.gradient};
  /* padding-bottom: 3px; */
  line-height: 1.2;
`
const Content = styled.p`
  color: ${colors.light};
  margin: 0 0 0 -1px;
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

  const avatar = () => (
    <Avatar
      style={{ transitionDelay: "200ms" }}
      fluid={frontmatter.avatar.childImageSharp.fluid}
      alt="Avatar"
    />
  )
  const name = () => (
    <Name style={{ transitionDelay: "400ms" }}>{frontmatter.name}</Name>
  )
  const title = () => (
    <Title style={{ transitionDelay: "600ms" }}>{frontmatter.title}</Title>
  )
  const location = () => (
    <Location style={{ transitionDelay: "800ms" }}>
      {frontmatter.location}
    </Location>
  )
  const content = () => (
    <Content
      style={{ transitionDelay: "1000ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )

  const items = [avatar, name, title, location, content]
  const fxOrder = ["", "up", "up", "up", "up"]

  return (
    <HeroContainer>
      <TransitionGroup>
        {isMounted &&
          items.map((item, i) => {
            const fx = fxOrder[i] || ""
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
