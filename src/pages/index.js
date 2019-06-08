import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Projects from "../components/projects"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Hero data={data.hero.edges} />
      <About />
      <Projects />
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
