import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { About, Contact, Featured, Hero, Layout, Projects } from "~components"
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
        <About data={data.about.edges} />
        <Featured data={data.featured.edges} />
        <Projects data={data.projects.edges} />
        <Contact />
      </MainContainer>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
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
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//about/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(maxWidth: 1200, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
    featured: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            url
          }
          html
        }
      }
    }
    projects: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
          }
          html
        }
      }
    }
  }
`
