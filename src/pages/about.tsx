import React from 'react'
import Sections from '../components/common/sections'
import Seo from '../components/common/seo'
import Title from '../components/common/title'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { AboutSection } from '../data/sections/about'

const About = (): JSX.Element => (
  <Layout>
    <Seo title="about" />
    <div className="mx-auto max-w-3xl">
      <Title name="about" />
      <div className="flex mt-16 justify-center transition-anim">
        <StaticImage
          className="border border-gray-200 rounded-full"
          src="../images/arrow2nd.png"
          alt="icon"
          width={200}
        />
      </div>
      <Sections items={AboutSection} />
    </div>
  </Layout>
)

export default About
