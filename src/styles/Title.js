import styled from "styled-components"
import theme from "./theme.yaml"
import device from "./device"

const { colors } = theme

const Title = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 24px;
  width: 100%;
  color: ${colors.darkPink};
  white-space: nowrap;
  font-size: 36px;
  ${device.tablet`font-size: 32px`};
`

export default Title
