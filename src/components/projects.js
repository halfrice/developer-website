import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Section from "../styles/section"
import theme from "../styles/theme.yaml"
import mixins from "../styles/mixins"
import sr from "../utils/sr"
import { srConfig } from "../config/index"

const ProjectsContainer = styled(Section)`
  ${mixins.flex.center};
  align-items: flex-start;
  flex-direction: column;
  h1 {
    color: ${theme.colors.blue};
  }
`

const Projects = () => {
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <ProjectsContainer id="projects" ref={revealContainer}>
      <h1>Projects</h1>
      <p>
        The nadion thrust assembly is offline. I'm going to reroute power
        through the deuterium flow regulators.
      </p>
    </ProjectsContainer>
  )
}

export default Projects
