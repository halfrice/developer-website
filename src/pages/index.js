import React from "react"
import { graphql } from "gatsby"
import { About, Contact, Hero, Layout, Projects } from "~components"
import styled from "styled-components"
import { Main, mixins } from "~styles"

const MainContainer = styled(Main)`
  ${mixins.padding.sides};
  counter-reset: section;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <MainContainer>
        <Hero data={data.hero.edges} />
        <About />
        <Projects />
        <Contact />
      </MainContainer>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    hero: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//hero/" } }
    ) {
      edges {
        node {
          frontmatter {
            name
            title
            location
          }
          html
        }
      }
    }
  }
`
