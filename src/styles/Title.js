import styled from "styled-components"
import theme from "./theme.yaml"
import device from "./device"

const { colors, fonts } = theme

const Title = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 0 24px;
  width: 100%;
  color: ${colors.lightRed};
  white-space: nowrap;
  font-family: ${fonts.sourceSansPro};
  font-size: 36px;
  font-weight: 600;
  ${device.tablet`font-size: 32px`};
`

export default Title
