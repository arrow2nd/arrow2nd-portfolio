import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/common/seo'
import Carousel from '../components/detail/carousel'
import Layout from '../components/layout'

type Props = {
  data: GatsbyTypes.WorkDetailQuery
}

export default function Detail({ data }: Props): JSX.Element {
  return (
    <Layout>
      <Seo title={data.worksJson?.title} desc={data.worksJson?.desc} article />
      <div className="mt-16">
        <Carousel
          baseName={data.worksJson?.image?.baseName}
          imageNum={data.worksJson?.image?.num}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query WorkDetail($slug: String!) {
    worksJson(fields: { slug: { eq: $slug } }) {
      title
      desc
      category
      image {
        baseName
        num
      }
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
