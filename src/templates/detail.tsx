import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

type Props = {
  data: GatsbyTypes.WorkDetailQuery
}

export default function Detail({ data }: Props): JSX.Element {
  console.log(data)

  return (
    <Layout>
      <span>{data.worksJson?.title}</span>
    </Layout>
  )
}

export const query = graphql`
  query WorkDetail($slug: String!) {
    worksJson(fields: { slug: { eq: $slug } }) {
      title
      desc
      category
      images
      sections {
        text
        title
      }
      links {
        href
        icon
        name
      }
    }
  }
`
