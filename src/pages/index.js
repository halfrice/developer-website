import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import { About, Apps, Contact, Featured, Hero, Layout } from "~components"
import styled from "styled-components"
import { Main, mixins } from "~styles"

const MainContainer = styled(Main)`
  ${mixins.padding.sides};
  counter-reset: section;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <MainContainer id="content">
        <Hero data={data.hero.edges} />
        <About data={data.about.edges} />
        <Featured data={data.featured.edges} />
        <Apps data={data.apps.edges} />
        <Contact data={data.contact.edges} />
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
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            avatar {
              childImageSharp {
                fluid(maxWidth: 300, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            name
            title
            location
          }
          html
        }
      }
    }
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
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
      filter: { fileAbsolutePath: { regex: "/featured/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 1080, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            title
            date
            video
            url
            github
            youtube
            appleStore
            googlePlay
            tech
          }
          html
        }
      }
    }
    apps: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/apps/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 640, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            title
            date
            video
            url
            github
            youtube
            appleStore
            googlePlay
          }
          html
        }
      }
    }
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 480, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            title
          }
          html
        }
      }
    }
  }
`
