import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/common/seo'
import Title from '../components/common/title'
import Layout from '../components/layout'
import TabButtons from '../components/category/tab-buttons'
import Card from '../components/category/card'

type Props = {
  data: GatsbyTypes.CategoryWorksQuery
}

const Category = ({ data }: Props): JSX.Element => {
  if (!data.allWorksJson) {
    return <p>{`error : data.allWorksJson is undefined.`}</p>
  }

  const { edges } = data.allWorksJson
  const category = edges[0]?.node.category || 'error'

  const cards = edges.map(({ node }) => {
    return (
      <Card
        title={node.title}
        desc={node.desc}
        image={`${node.image?.baseName}-1.png`}
        to={node.fields?.slug}
        key={node.title}
      />
    )
  })

  return (
    <Layout>
      <Seo title={category} />
      <Title name="works" />
      <TabButtons current={category} />
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 md:mt-16">
        {cards}
      </div>
    </Layout>
  )
}

export default Category

export const query = graphql`
  query CategoryWorks($name: String!) {
    allWorksJson(filter: { category: { eq: $name } }) {
      edges {
        node {
          category
          title
          desc
          image {
            baseName
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
