import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Video } from "~components"
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
const Project = styled.div`
  ${mixins.flex.center};
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 16px;
  background-color: ${colors.darkGrey};
`
const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const ContentContainer = styled.div`
  ${mixins.shadow};
  position: relative;
  padding: 30px 25px;
  ${device.tablet`padding: 20px 15px`};
  width: 100%;
  height: 100%;
  border-radius: 3px;
`
const ProjectName = styled.h5`
  font-size: ${fontSize.xxl};
  font-weight: 600;
  margin: 0 0 20px;
  color: ${colors.lightGreen};
  ${device.tablet`font-size: 24px;`};
`
const ProjectDescription = styled.div`
  font-size: ${fontSize.md};
`

const Featured = ({ data }) => {
  const revealTitle = useRef(null)
  const revealProjects = useRef([])
  useEffect(() => {
    sr.reveal(revealTitle.current, srConfig())
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    )
  }, [])

  const featuredProjects = data

  return (
    <FeaturedContainer id="projects">
      <Title ref={revealTitle}>Projects</Title>

      <FlexContainer>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter, html } = node
            const { title, url } = frontmatter

            return (
              <Project key={i} ref={el => (revealProjects.current[i] = el)}>
                <VideoContainer>
                  <Video url={url} title={title} />
                </VideoContainer>
                <ContentContainer>
                  <ProjectName>{title}</ProjectName>
                  <ProjectDescription
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                </ContentContainer>
              </Project>
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