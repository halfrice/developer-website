import React, { useEffect, useRef } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { device, mixins, theme } from "~styles"
import { sr } from "~utils"
import { srConfig } from "~config"
import { FormattedIcon } from "~components/icons"

const { colors, fontSize } = theme

const SkillsContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`
const GridContainer = styled.div`
  margin: 0 auto;
  .skills {
    display: grid;
    grid-template-columns: repeat(3, minmax(auto, 1fr));
    ${device.xsPhone`grid-template-columns: repeat(1, minmax(auto, 1fr));`};
    grid-gap: 0;
    position: relative;
  }
`
const CategoryContainer = styled.div`
  ${mixins.flex.center};
  align-items: flex-start;
  position: relative;
  width: 100%;
  height: 100%;
  padding: 10px 7.5px;
  ${device.tablet`padding: 5px 2.5px`};
`
const Category = styled.div``
const Header = styled.div`
  ${mixins.flex.center};
  margin: 20px 0;
  ${device.xsPhone`margin: 40px 0 20px 0;`};
`
const Icon = styled.div`
  svg {
    fill: ${colors.blue};
    width: 42px;
    height: 42px;
  }
`
const Title = styled.h5`
  ${mixins.flex.center};
  margin: 0 0 20px;
  font-size: ${fontSize.lg};
  color: ${colors.lightGreen};
`
const Description = styled.div`
  ${mixins.flex.center};
  font-size: ${fontSize.md};
`
const SkillContainer = styled.ul`
  ${mixins.flex.center};
  display: grid;
  margin: 20px 0 0 0;
`
const Skill = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  left: -6px;
  font-size: ${fontSize.xs};
  color: ${colors.slate};
  &:before {
    content: "›";
    position: absolute;
    left: 6px;
    color: ${colors.green};
    font-size: ${fontSize.sm};
  }
`

const Skills = ({ data }) => {
  const revealSkills = useRef([])
  useEffect(() => {
    revealSkills.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)))
  }, [])

  const skills = data

  return (
    <SkillsContainer>
      <GridContainer>
        <TransitionGroup className="skills">
          {skills &&
            skills.map(({ node }, i) => {
              const { frontmatter, html } = node
              const { icon, title, skills } = frontmatter
              return (
                <CSSTransition
                  key={i}
                  classNames="fadeup"
                  timeout={i * 300}
                  exit={false}
                >
                  <CategoryContainer
                    ref={el => (revealSkills.current[i] = el)}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <Category>
                      <Header>
                        <Icon>
                          <FormattedIcon name={icon} />
                        </Icon>
                      </Header>
                      <Title>{title}</Title>
                      {/* <Description
                          dangerouslySetInnerHTML={{ __html: html }}
                        /> */}
                      <SkillContainer>
                        {skills &&
                          skills.map((skill, i) => (
                            <Skill key={i}>{skill}</Skill>
                          ))}
                      </SkillContainer>
                    </Category>
                  </CategoryContainer>
                </CSSTransition>
              )
            })}
        </TransitionGroup>
      </GridContainer>
    </SkillsContainer>
  )
}

export default Skills
