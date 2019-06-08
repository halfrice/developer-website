import React from "react"
import styled from "styled-components"
import Section from "../styles/section"
import theme from "../styles/theme.yaml"
import mixins from "../styles/mixins"

const ContactContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  height: 70vh;
  h1 {
    color: ${theme.colors.purple};
  }
`

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <h1>Contact</h1>
      <p>Disintermediate innovative supply-chains.</p>
    </ContactContainer>
  )
}

export default Contact
