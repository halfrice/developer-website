import React from "react"
import { Link } from "gatsby"
import { Layout } from "~components"
import styled from "styled-components"
import { device, theme, mixins, Main } from "~styles"
import { typography } from "~utils"

const { colors, fontSize } = theme
const { rhythm } = typography

const MainContainer = styled(Main)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  height: 100vh;
  min-height: 100vh;
  max-width: 1440px;
`
const Err = styled.h1`
  margin: 0 0 ${rhythm(0.25)} -5px;
  color: ${colors.red};
  font-size: ${fontSize.h1};
  ${device.desktop`font-size: 58px;`};
  ${device.tablet`font-size: 53px;`};
  ${device.phone`font-size: ${fontSize.h2};`};
`
const Description = styled.h2`
  color: ${colors.darkSlate};
  font-size: 36px;
  ${device.desktop`font-size: ${fontSize.h3}`};
  ${device.tablet`font-size: 28px`};
  ${device.phone`font-size: ${fontSize.xxl}`};
  margin: 0 0 ${rhythm(0.75)} -1px;
`
const Home = styled(Link)`
  color: ${colors.lightGreen};
`

const NotFoundPage = () => (
  <Layout showSplash={false}>
    <MainContainer>
      <Err>Error 404</Err>
      <Description>Page Not Found</Description>
      <Home to="/">Home</Home>
    </MainContainer>
  </Layout>
)

export default NotFoundPage
