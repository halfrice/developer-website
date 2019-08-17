import React from "react"
import styled from "styled-components"
import { Clock } from "~components"
import { device, mixins, theme } from "~styles"
import { statusLinks } from "~config"

const { fontSize, colors } = theme

const StatusContainer = styled.div`
  ${mixins.flex.center};
  ${mixins.statusShadow};
  font-size: ${fontSize.xxs};
  color: ${colors.slate};
  background-color: ${colors.lightBlack};
`
const StatusFlex = styled.div`
  ${mixins.padding.sides};
  display: flex;
  margin: 0;
  ${device.tablet`margin: 20px 0;`};
  width: 100%;
  height: 100px;
  ${device.tablet`height: auto;`};
  flex-direction: row;
  ${device.tablet`flex-direction: column;`};
`
const LegaleseContainer = styled.div`
  ${mixins.flex.start};
  padding: 5px 0;
  width: 33%;
  ${device.tablet`width: 100%;`};
`
const Legalese = styled.div``
const StatusLinks = styled.div`
  ${mixins.flex.center};
  ${device.tablet`${mixins.flex.start};`};
  margin-left: -12px;
  ${device.tablet`margin-left: -10px;`}
  /* padding: 5px 0; */
  width: 34%;
  ${device.tablet`width: 100%;`}
`
const StatusLink = styled.a`
  ${mixins.flex.center};
  padding: 8px 12px;
  ${device.tablet`padding: 8px 10px;`}
  color: ${colors.lightGreen};
  text-decoration: none;
  transition: ${theme.shortTransition};
  &:active,
  &:hover,
  &:focus {
    /* transform: translateY(-2px); */
    color: ${colors.lightGreen};
    opacity: 0.5;
  }
`
const ClockContainer = styled.div`
  ${mixins.flex.end};
  ${device.tablet`${mixins.flex.start}`};
  padding: 5px 0;
  width: 33%;
  ${device.tablet`width: 100%;`};
  text-align: right;
  ${device.phone`text-align: left;`};
`

const Status = () => {
  return (
    <StatusContainer>
      <StatusFlex>
        <LegaleseContainer>
          <Legalese>© {new Date().getFullYear()} Corporation Inc</Legalese>
        </LegaleseContainer>
        <StatusLinks>
          {statusLinks &&
            statusLinks.map(({ name, url }, i) => (
              <StatusLink
                key={i}
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                aria-label={name}
              >
                {name}
              </StatusLink>
            ))}
        </StatusLinks>
        <ClockContainer>
          <Clock />
        </ClockContainer>
      </StatusFlex>
    </StatusContainer>
  )
}

export default Status
