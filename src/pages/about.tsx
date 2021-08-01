import { StaticImage } from 'gatsby-plugin-image'
import { AboutSection } from '../data/sections/about'
import React from 'react'
import Sections from '../components/common/sections'
import Seo from '../components/common/seo'
import Title from '../components/common/title'
import Layout from '../components/layout'

const About = (): JSX.Element => (
  <Layout>
    <Seo title="about" />
    <Title name="about" />
    <div className="flex mt-16 justify-center">
      <StaticImage
        className="border border-gray-200 rounded-full"
        src="../images/arrow2nd.png"
        alt="icon"
        width={200}
      />
    </div>
    <Sections items={AboutSection} />
  </Layout>
)

export default About
