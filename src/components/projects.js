import React from "react"
import styled from "styled-components"
import Section from "../styles/section"
import theme from "../styles/theme.yaml"
import mixins from "../styles/mixins"

const ProjectsContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  height: 70vh;
  h1 {
    color: ${theme.colors.blue};
  }
`

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h1>Projects</h1>
      <p>
        The nadion thrust assembly is offline. I'm going to reroute power
        through the deuterium flow regulators.
      </p>
    </ProjectsContainer>
  )
}

export default Projects
