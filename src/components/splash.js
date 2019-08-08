import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import anime from "animejs"
import { IconHalfrice } from "~components/icons"
import styled from "styled-components"
import { device, mixins, theme } from "~styles"

const { colors } = theme

const SplashContainer = styled.div`
  ${mixins.flex.center};
  background-color: ${colors.lightBlack};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9999;
`
const LogoWrapper = styled.div`
  width: max-content;
  max-width: 100px;
  ${device.tablet`max-width: 80px;`};
  ${device.phone`max-width: 70px;`};
  transition: ${theme.transition};
  opacity: ${props => (props.isMounted ? 1 : 0)};
  svg {
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    fill: none;
    user-select: none;
    #circle {
      opacity: 0;
    }
    #n {
      opacity: 0;
    }
  }
`

const Splash = ({ finishLoading }) => {
  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })

    loader
      .add({
        targets: "#logo #circle",
        delay: 500,
        duration: 2000,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: 1,
      })
      .add({
        targets: "#logo #n",
        duration: 800,
        easing: "easeInOutQuart",
        strokeDashoffset: [anime.setDashoffset, 0],
        opacity: 1,
      })
      .add({
        targets: "#logo",
        delay: 700,
        duration: 300,
        easing: "easeInOutQuart",
        opacity: 0,
        scale: 0.1,
      })
      .add({
        targets: ".splash",
        duration: 200,
        easing: "easeInOutQuart",
        opacity: 0,
        zIndex: -1,
      })
  }

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <SplashContainer className="splash">
      <Helmet bodyAttributes={{ class: `hidden` }} />
      <LogoWrapper isMounted={isMounted}>
        <IconHalfrice />
      </LogoWrapper>
    </SplashContainer>
  )
}

Splash.propTypes = {
  finishLoading: PropTypes.func.isRequired,
}

export default Splash
