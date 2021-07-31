import React from 'react'
import Seo from '../common/seo'
import Title from '../common/title'
import Layout from '../layout'
import Cards from './cards'
import TabButtons from './tab-buttons'

type Props = {
  name: string
}

const Category = ({ name }: Props): JSX.Element => (
  <Layout>
    <Seo title={name} />
    <Title name="works" />
    <TabButtons current={name} />
    <Cards />
  </Layout>
)

export default Category
