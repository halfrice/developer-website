import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Downloads, Video } from "~components"
import { device, mixins, theme, Section, Title } from "~styles"
import { sr } from "~utils"
import { srConfig } from "~config"

const { fontSize, colors } = theme

const FeaturedContainer = styled(Section)`
  padding-bottom: 0;
  max-width: 1080px;
  ${device.tablet`padding-bottom: 0;`};
`
const FlexContainer = styled.div`
  ${mixins.flex.center};
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
`
const App = styled.div`
  ${mixins.flex.center};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 16px;
  background-color: ${colors.darkGrey};
  border-radius: 3px;
`
const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 3px;
`
const ContentContainer = styled.div`
  ${mixins.shadow};
  position: relative;
  padding: 30px 25px;
  ${device.tablet`padding: 20px 15px`};
  width: 100%;
  height: 100%;
`
const AppName = styled.h5`
  font-size: ${fontSize.xxl};
  font-weight: 600;
  margin: 0 0 20px;
  color: ${colors.lightGreen};
  ${device.tablet`font-size: 24px;`};
`
const AppDescription = styled.div`
  font-size: ${fontSize.md};
`

const Featured = ({ data }) => {
  const revealTitle = useRef(null)
  const revealApps = useRef([])
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig())
    revealApps.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)))
  }, [])

  const featuredApps = data

  return (
    <FeaturedContainer id="apps">
      <Title ref={revealTitle}>Apps</Title>

      <FlexContainer>
        {featuredApps &&
          featuredApps.map(({ node }, i) => {
            const { frontmatter, html } = node
            const {
              cover,
              title,
              video,
              url,
              github,
              youtube,
              appleStore,
              googlePlay,
            } = frontmatter
            const links = {
              url,
              github,
              youtube,
              appleStore,
              googlePlay,
            }

            return (
              <App key={i} ref={el => (revealApps.current[i] = el)}>
                <MediaContainer>
                  {video ? (
                    <Video url={video} title={title} />
                  ) : (
                    <Img fluid={cover.childImageSharp.fluid} />
                  )}
                </MediaContainer>
                <ContentContainer>
                  <AppName>{title}</AppName>

                  <Downloads links={links} />

                  <AppDescription dangerouslySetInnerHTML={{ __html: html }} />
                </ContentContainer>
              </App>
            )
          })}
      </FlexContainer>
    </FeaturedContainer>
  )
}

Featured.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Featured
