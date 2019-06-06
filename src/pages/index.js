import React from "react"
import Layout from "../components/layout"
import Section from "../styles/section"
import Hero from "../components/hero"
import About from "../components/about"

export default () => (
  <Layout>
    <Section>
      <h1>Developer Website</h1>
      <p>Professional and fashionable personal site.</p>
    </Section>
    <Hero />
    <About />
  </Layout>
)
