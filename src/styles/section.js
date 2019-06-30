import styled from "styled-components"
import theme from "../styles/theme.yaml"
import { device } from "~styles"

const Section = styled.section`
  /* border-bottom: 1px solid ${theme.colors.darkGrey}; */
  margin: 0 auto;
  padding: 150px 0;
  ${device.tablet`padding: 100px 0;`};
`

export default Section
