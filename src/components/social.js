import React from "react"
import { socialMedia } from "~config"
import { FormattedIcon } from "~components/icons"
import styled from "styled-components"
import { device, mixins, theme } from "~styles"

const { colors, fontSize } = theme

const SocialContainer = styled.div`
  ${mixins.flex.center};
  margin-top: 40px;
`
const SocialGrid = styled.div`
  display: inline-grid;
  grid-template-columns: 1 1fr;
  grid-template-rows: auto;
  margin: 0 auto;
  overflow: hidden;
`
const SocialLink = styled.a`
  ${mixins.flex.start};
  min-height: 50px;
  padding: 8px 12px;
  transition: ${theme.shortTransition};
  &:active,
  &:hover,
  &:focus {
    opacity: 0.5;
  }
  svg {
    fill: ${colors.slate};
    fill: ${props => (props.color ? props.color : colors.darkSlate)};
    width: ${fontSize.xxxl};
    ${device.tablet`width: ${fontSize.xxl};`};
    height: ${fontSize.xxxl};
    ${device.tablet`height: ${fontSize.xxl};`};
  }
`
const SocialIcon = styled.div`
  ${mixins.flex.end};
`
const SocialURL = styled.div`
  ${mixins.flex.start};
  padding: 10px;
  margin-left: 10px;
  font-size: ${fontSize.sm};
  ${device.tablet`font-size: ${fontSize.xs};`};
  color: ${props => (props.color ? props.color : colors.darkSlate)};
`

const Social = () => {
  return (
    <SocialContainer>
      <SocialGrid>
        {socialMedia &&
          socialMedia.map(({ name, url, color, username }, i) => (
            <React.Fragment key={i}>
              <SocialLink
                href={url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                color={color}
                aria-label={name}
              >
                <SocialIcon>
                  <FormattedIcon name={name} />
                </SocialIcon>
                <SocialURL color={color}>{username}</SocialURL>
              </SocialLink>
            </React.Fragment>
          ))}
      </SocialGrid>
    </SocialContainer>
  )
}

export default Social
