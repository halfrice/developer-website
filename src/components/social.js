import React from "react"
import { socialMedia } from "~config"
import { FormattedIcon } from "~components/icons"
import styled from "styled-components"
import { device, mixins, theme } from "~styles"

const { colors, fontSize } = theme

const SocialContainer = styled.div`
  ${mixins.flex.center};
  margin-top: 20px;
`
const SocialGrid = styled.div`
  display: inline-grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  margin: 0 auto;
  overflow: hidden;
`
const SocialIconLink = styled.a`
  ${mixins.flex.center};
  padding: 15px;
  ${device.tablet`padding: 12px`};
  &:hover,
  &:focus {
    transform: translateY(-3px);
    opacity: 0.5;
  }
  svg {
    fill: ${colors.slate};
    fill: ${props => (props.color ? props.color : colors.darkSlate)};
    width: 32px;
    ${device.tablet`width: 28px`};
    height: 32px;
    ${device.tablet`height: 28px`};
  }
`
const SocialLink = styled.a`
  ${mixins.flex.center};
  padding: 0px 10px;
  ${device.tablet`padding: 0 20px 0 0;`};
  color: ${props => props.color};
  text-decoration: none;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
`
const SocialIcon = styled.div`
  ${mixins.flex.end};
`
const SocialURL = styled.div`
  ${mixins.flex.start};
  padding: 10px;
  font-size: ${fontSize.sm};
  ${device.tablet`font-size: ${fontSize.xs};`};
`

const Social = () => {
  return (
    <SocialContainer>
      <SocialGrid>
        {socialMedia &&
          socialMedia.map(({ name, url, color, username }, i) => (
            <React.Fragment key={i}>
              <SocialIcon>
                <SocialIconLink
                  href={url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  color={color}
                  aria-label={name}
                >
                  <FormattedIcon name={name} />
                </SocialIconLink>
              </SocialIcon>
              <SocialURL>
                <SocialLink color={color}>{username}</SocialLink>
              </SocialURL>
            </React.Fragment>
          ))}
      </SocialGrid>
    </SocialContainer>
  )
}

export default Social
