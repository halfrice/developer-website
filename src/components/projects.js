import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { device, mixins, theme, Section } from "~styles"
import { sr } from "~utils"
import { srConfig } from "~config"
import { IconFolder } from "~components/icons"

const { fontSize, colors } = theme

const ProjectsContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  padding-top: 0;
  max-width: 1080px;
  ${device.tablet`padding-top: 0;`};
`
const GridContainer = styled.div`
  margin: 0 auto;
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 16px;
    position: relative;
    ${device.desktop`grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));`};
  }
`
const Project = styled.div`
  transition: ${theme.transition};
  cursor: default;
  transition: ${theme.transition};
  background-color: ${colors.darkGrey};
  &:hover,
  &:focus {
    outline: 0;
  }
`
const ProjectInner = styled.div`
  ${mixins.flex.between};
  ${mixins.shadow};
  ${mixins.shadowHover};
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  padding: 30px 25px;
  ${device.tablet`padding: 20px 15px`};
  height: 100%;
  border-radius: 3px;
  &:hover,
  &:focus {
    transform: translateY(-5px);
    ${device.tablet`transform: none`};
    background-color: ${colors.grey};
    ${device.tablet`background-color: ${colors.darkGrey}`};
  }
`
const ProjectHeader = styled.div`
  ${mixins.flex.between};
  margin-bottom: 25px;
`
const Folder = styled.div`
  svg {
    fill: ${colors.blue};
    width: 42px;
    height: 42px;
  }
`
const ProjectName = styled.h5`
  margin: 0 0 20px;
  font-size: ${fontSize.xxl};
  color: ${colors.lightGreen};
`
const ProjectDescription = styled.div`
  font-size: ${fontSize.md};
`

const Projects = ({ data }) => {
  const revealProjects = useRef([])
  useEffect(() => {
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, srConfig(i * 100))
    )
  }, [])

  const projects = data

  return (
    <ProjectsContainer>
      <GridContainer>
        <TransitionGroup className="projects">
          {projects &&
            projects.map(({ node }, i) => {
              const { frontmatter, html } = node
              const { title } = frontmatter
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i * 300}
                  exit={false}
                >
                  <Project
                    key={i}
                    ref={el => (revealProjects.current[i] = el)}
                    tabIndex="0"
                    style={{
                      transitionDelay: `${i * 100}ms`,
                    }}
                  >
                    <ProjectInner>
                      <header>
                        <ProjectHeader>
                          <Folder>
                            <IconFolder />
                          </Folder>
                        </ProjectHeader>
                        <ProjectName>{title}</ProjectName>
                        <ProjectDescription
                          dangerouslySetInnerHTML={{ __html: html }}
                        />
                      </header>
                    </ProjectInner>
                  </Project>
                </CSSTransition>
              )
            })}
        </TransitionGroup>
      </GridContainer>
    </ProjectsContainer>
  )
}

Projects.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Projects
