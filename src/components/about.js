import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Skills } from "~components"
import { device, mixins, theme, Section, Title } from "~styles"
import { sr } from "~utils"
import { srConfig } from "~config"

const { colors, fontSize } = theme

const AboutContainer = styled(Section)`
  position: relative;
  max-width: 1200px;
`
const FlexContainer = styled.div`
  ${mixins.flex.between};
  align-items: flex-start;
  ${device.tablet`flex-direction: column-reverse;`};
`
const ContentContainer = styled.div`
  width: 60%;
  max-width: 770px;
  ${device.tablet`width: 100%;`};
  .emoji {
    height: 18px;
    top: 3px;
  }
`
const SkillsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  overflow: hidden;
  margin: 20px 0 0 0;
`
const Skill = styled.li`
  ${mixins.flex.start};
  position: relative;
  margin-bottom: 10px;
  padding-left: 12px;
  font-size: ${fontSize.xs};
  ${device.tablet`font-size: ${fontSize.xxs}`};
  color: ${colors.slate};
  &:before {
    content: "›";
    position: absolute;
    left: 0;
    color: ${colors.green};
    /* line-height: 24px; */
  }
`
const ImageContainer = styled.div`
  background: transparent;
  border: 1px solid transparent;
  border-radius: 3px;
  position: relative;
  width: 40%;
  ${device.tablet`width: 100%;`};
  ${device.tablet`margin-bottom: 20px`};
  transition: ${theme.transition};
`
const AvatarContainer = styled.div`
  border-radius: 3px;
  margin-left: 50px;
  ${device.tablet`margin: 0 auto;`};
  overflow: hidden;
`
const Avatar = styled(Img)`
  position: relative;
  border-radius: 3px;
  transition: ${theme.transition};
  object-fit: cover;
  width: 100%;
  height: 360px;
  ${device.tablet`height: 240px`};
  &:hover {
    transform: scale(1.1);
    ${device.tablet`transform: none`};
  }
`

const About = ({ data, skillsData }) => {
  const { frontmatter, html } = data[0].node
  const { title, skills, avatar } = frontmatter
  const revealContainer = useRef(null)
  useEffect(() => sr.reveal(revealContainer.current, srConfig()), [])

  return (
    <AboutContainer id="about" ref={revealContainer}>
      <Title>{title}</Title>
      <FlexContainer>
        <ContentContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <SkillsContainer>
            {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
          </SkillsContainer>
          {/* <Skills data={skillsData} /> */}
        </ContentContainer>
        <ImageContainer>
          <AvatarContainer>
            <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </AvatarContainer>
        </ImageContainer>
      </FlexContainer>
    </AboutContainer>
  )
}

About.propTypes = {
  data: PropTypes.array.isRequired,
  skillsData: PropTypes.array.isRequired,
}

export default About
