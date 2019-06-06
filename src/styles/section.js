import styled from "@emotion/styled"
import theme from "./theme.yaml"
import { rhythm } from "../utils/typography"

const Section = styled.section`
  border: 1px solid ${theme.colors.light};
  margin: 0 auto;
  padding: ${rhythm(3)} ${rhythm(1)};
`

export default Section
