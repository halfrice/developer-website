import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Section from "../styles/section"
import theme from "../styles/theme.yaml"
import mixins from "../styles/mixins"
import sr from "../utils/sr"
import { srConfig } from "../config/index"

const ContactContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  h1 {
    color: ${theme.colors.purple};
  }
`

const Contact = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <ContactContainer id="contact" ref={revealContainer}>
      <h1>Contact</h1>
      <p>Disintermediate innovative supply-chains.</p>
    </ContactContainer>
  )
}

export default Contact
