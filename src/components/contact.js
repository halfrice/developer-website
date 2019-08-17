import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Social } from "~components"
import { device, mixins, theme, Section, Title } from "~styles"
import { sr } from "~utils"
import { srConfig } from "~config"
import { IconDownload } from "~components/icons"
// import sig from "../images/sig.png"

const { colors, fonts, fontSize } = theme

const ContactContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  max-width: 600px;
  margin-bottom: 100px;
`
const TitleContainer = styled.div`
  margin: 0 auto;
`
const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`
const SigContainer = styled.div`
  ${mixins.flex.center};
  flex-direction: column;
  max-width: 360px;
  ${device.phone`max-width: 280px;`};
  margin: 40px auto 0;
`
const Sig = styled(Img)`
  width: 100%;
  height: 100%;
  opacity: 0.9;
`
const ResumeContainer = styled.div`
  ${mixins.flex.center};
`
const ResumeLink = styled.a`
  background-color: transparent;
  color: ${colors.lightGreen};
  margin-top: 40px;
  padding: 12px 16px;
  font-family: ${fonts.sourceSansPro};
  font-size: ${fontSize.md};
  ${device.tablet`font-size: ${fontSize.sm};`};
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: ${theme.shortTransition};
  &:active,
  &:focus,
  &:hover {
    color: ${colors.lightGreen};
    opacity: 0.5;
    svg {
      fill: ${colors.lightGreen};
    }
  }
  svg {
    width: ${fontSize.md};
    ${device.tablet`width: ${fontSize.sm};`};
    height: ${fontSize.md};
    ${device.tablet`height: ${fontSize.sm};`};
    fill: ${colors.lightGreen};
    margin-right: 7px;
  }
`

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node
  const { cover, title } = frontmatter

  const revealContainer = useRef(null)
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig())
  }, [])

  return (
    <ContactContainer id="contact" ref={revealContainer}>
      <TitleContainer>
        <Title>{title}</Title>
      </TitleContainer>
      <ContentContainer>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <SigContainer>
          <Sig fluid={cover.childImageSharp.fluid} alt="Signature" />
        </SigContainer>
        <Social />
        <ResumeContainer>
          <ResumeLink
            href="/resume"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <IconDownload />
            Resume
          </ResumeLink>
        </ResumeContainer>
      </ContentContainer>
    </ContactContainer>
  )
}

Contact.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Contact
