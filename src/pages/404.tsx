import { NotFoundSection } from '../data/404/404-section'
import React from 'react'
import Sections from '../components/common/sections'
import Seo from '../components/common/seo'
import Title from '../components/common/title'
import Layout from '../components/layout'

const NotFoundPage = (): JSX.Element => (
  <Layout>
    <Seo title="404 Not Found" />
    <Title name="Opps!" />
    <Sections items={NotFoundSection} />
  </Layout>
)

export default NotFoundPage
