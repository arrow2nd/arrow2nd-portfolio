import React from 'react'
import Sections from '../components/common/sections'
import Seo from '../components/common/seo'
import Title from '../components/common/title'
import Layout from '../components/layout'
import { NotFoundSection } from '../data/sections/404'

const NotFound = (): JSX.Element => (
  <Layout>
    <Seo title="404 Not Found" />
    <Title name="Opps!" />
    <Sections items={NotFoundSection} />
  </Layout>
)

export default NotFound
