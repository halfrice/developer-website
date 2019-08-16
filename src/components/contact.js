import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Social } from "~components"
import { device, mixins, theme, Section, Title } from "~styles"
import { sr } from "~utils"
import { srConfig } from "~config"
// import sig from "../images/sig.png"

const { colors, fontSize } = theme

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
      </ContentContainer>
    </ContactContainer>
  )
}

Contact.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Contact
