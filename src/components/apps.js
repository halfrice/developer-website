import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { Downloads, Video } from "~components"
import { device, mixins, theme, Section } from "~styles"
import { sr } from "~utils"
import { srConfig } from "~config"
import { IconFolder } from "~components/icons"

const { fontSize, colors } = theme

const AppsContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  padding-top: 0;
  max-width: 1080px;
  ${device.tablet`padding-top: 0;`};
`
const GridContainer = styled.div`
  margin: 0 auto;
  .apps {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 16px;
    position: relative;
    ${device.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`
const App = styled.div`
  align-self: start;
  transition: ${theme.transition};
  cursor: default;
  &:hover,
  &:focus {
    outline: 0;
  }
`
const AppInner = styled.div`
  align-items: flex-start;
  ${mixins.shadow};
  ${mixins.shadowHover};
  flex-direction: column;
  position: relative;
  height: 100%;
  border-radius: 3px;
  background-color: ${colors.darkGrey};
  &:hover,
  &:focus {
    transform: translateY(-5px);
    ${device.tablet`transform: none`};
    background-color: ${colors.grey};
    ${device.tablet`background-color: ${colors.darkGrey}`};
  }
`
const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* padding-top: 56.25%; */
  border-radius: 3px;
`
const Media = styled.div`
  /* position: absolute;
  top: 0;
  left: 0;
  right: 0; */
  bottom: 0;
  svg {
    fill: ${colors.blue};
    width: 48px;
    height: 48px;
  }
`
const Icon = styled.div`
  padding: 30px 0 0 25px;
  ${device.tablet`padding: 20px 0 0 15px`};
`
const ContentContainer = styled.div`
  padding: 30px 25px;
  ${device.tablet`padding: 20px 15px`};
  width: 100%;
  height: 100%;
`
const AppName = styled.h5`
  margin: 0 0 20px;
  font-size: ${fontSize.xxl};
  color: ${colors.lightGreen};
`
const AppDescription = styled.div`
  font-size: ${fontSize.md};
`

const Apps = ({ data }) => {
  const revealApps = useRef([])
  useEffect(() => {
    revealApps.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)))
  }, [])

  const apps = data

  return (
    <AppsContainer>
      <GridContainer>
        <TransitionGroup className="apps">
          {apps &&
            apps.map(({ node }, i) => {
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
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i * 300}
                  exit={false}
                >
                  <App
                    key={i}
                    ref={el => (revealApps.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${i * 100}ms`,
                    }}
                  >
                    <AppInner>
                      <header>
                        <MediaContainer>
                          <Media>
                            {video ? (
                              <Video url={video} title={title} />
                            ) : cover ? (
                              <Img
                                fluid={cover.childImageSharp.fluid}
                                objectPosition="50% 50%"
                              />
                            ) : (
                              <Icon>
                                <IconFolder />
                              </Icon>
                            )}
                          </Media>
                        </MediaContainer>

                        <ContentContainer>
                          <AppName>{title}</AppName>

                          <Downloads links={links} />

                          <AppDescription
                            dangerouslySetInnerHTML={{ __html: html }}
                          />
                        </ContentContainer>
                      </header>
                    </AppInner>
                  </App>
                </CSSTransition>
              )
            })}
        </TransitionGroup>
      </GridContainer>
    </AppsContainer>
  )
}

Apps.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Apps
