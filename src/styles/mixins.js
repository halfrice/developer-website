import { css } from "styled-components"
import device from "./device"
import theme from "../styles/theme.yaml"

const { colors } = theme

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
      justify-content: flex-start;
      align-items: center;
    `,
    end: css`
      display: flex;
      justify-content: flex-end;
      align-items: center;
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
  shadow: css`
    box-shadow: 0 10px 30px -20px ${colors.darkGrey + `BB`};
    transition: ${theme.transition};
  `,
  shadowHover: css`
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -20px ${colors.grey + `BB`};
      ${device.tablet`box-shadow: inherit`};
    }
  `,
  lava: css`
    background: linear-gradient(
      60deg,
      ${colors.darkPink},
      ${colors.orange},
      ${colors.darkPurple},
      ${colors.red}
    );
    background-size: 300%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: flow 240s ease-in-out infinite;
    @keyframes flow {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
  `,
  gradient: css`
    background: linear-gradient(
      60deg,
      ${colors.darkPink},
      ${colors.orange},
      ${colors.darkPurple},
      ${colors.red}
    );
    background-size: 450%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `,
}

export default mixins
