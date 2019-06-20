import { css } from "styled-components"
import device from "./device"
// import theme from "../styles/theme.yaml"

// const { colors } = theme

const mixins = {
  flex: {
    center: css`
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    between: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    start: css`
      display: flex;
      justify-content: center;
      align-items: flex-start;
    `,
  },
  padding: {
    sides: css`
      padding: 0 150px;
      ${device.desktop`padding: 0 100px;`};
      ${device.tablet`padding: 0 50px;`};
      ${device.phone`padding: 0 25px;`};
    `,
  },
}

export default mixins
