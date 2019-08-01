import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { device, mixins, theme } from "~styles"
import {
  IconApple,
  IconGithub,
  IconGooglePlay,
  IconLink,
  IconYoutube,
} from "~components/icons"

const { colors } = theme

const Links = styled.div`
  position: absolute;
  bottom: 0;
  ${mixins.flex.start};
  position: relative;
  margin-left: -6px;
  margin-bottom: 6px;
  a {
    padding: 6px;
    svg {
      width: 24px;
      height: 24px;
      &:focus,
      &:hover {
        opacity: 0.5;
      }
    }
  }
`

const Downloads = ({ links }) => {
  const { appleStore, github, googlePlay, url, youtube } = links

  return (
    <Links>
      {googlePlay && (
        <a
          href={googlePlay}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Google Play Link"
        >
          <IconGooglePlay />
        </a>
      )}

      {appleStore && (
        <a
          href={appleStore}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Apple Store Link"
          style={{ fill: colors.lightSlate }}
        >
          <IconApple />
        </a>
      )}

      {youtube && (
        <a
          href={youtube}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Youtube Link"
        >
          <IconYoutube />
        </a>
      )}

      {github && (
        <a
          href={github}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="GitHub Link"
          style={{ fill: "#4078c0" }}
        >
          <IconGithub />
        </a>
      )}

      {url && (
        <a
          href={url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          aria-label="Link"
          style={{ fill: colors.pink }}
        >
          <IconLink />
        </a>
      )}
    </Links>
  )
}

Downloads.propTypes = {
  links: PropTypes.object.isRequired,
}

export default Downloads
