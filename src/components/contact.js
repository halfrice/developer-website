import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Social } from "~components"
import { device, mixins, theme, Section, Title } from "~styles"
import { sr } from "~utils"
import { srConfig } from "~config"

const { fontSize, colors } = theme

const ContactContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  max-width: 600px;
`
const TitleContainer = styled.div`
  margin: 0 auto;
`
const ContentContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`

const Contact = ({ data }) => {
  const { frontmatter, html } = data[0].node
  const { title } = frontmatter

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
        <Social />
      </ContentContainer>
    </ContactContainer>
  )
}

Contact.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Contact
