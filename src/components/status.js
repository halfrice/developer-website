import React from "react"
import styled from "styled-components"
import { Clock } from "~components"
import { device, mixins, theme, Section } from "~styles"
import { statusLinks } from "~config"

const { fontSize, colors } = theme

const StatusContainer = styled.div`
  ${mixins.flex.center};
  font-size: ${fontSize.xxs};
  color: ${colors.slate};
`
const StatusFlex = styled.div`
  ${mixins.padding.sides};
  display: flex;
  margin-bottom: 0px;
  ${device.tablet`margin: 0 0 20px 0;`};
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
  padding: 5px 0;
  width: 34%;
  ${device.tablet`width: 100%;`}
`
const StatusLink = styled.a`
  ${mixins.flex.center};
  padding: 0px 10px;
  ${device.tablet`padding: 0 20px 0 0;`}
  color: ${colors.lightGreen};
  text-decoration: none;
  &:hover,
  &:focus {
    transform: translateY(-2px);
    text-decoration: underline;
    opacity: 0.8;
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
