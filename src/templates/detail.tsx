import { graphql } from 'gatsby'
import React from 'react'
import Sections from '../components/common/sections'
import Seo from '../components/common/seo'
import Carousel from '../components/detail/carousel'
import LinkButton from '../components/detail/link-button'
import Title from '../components/detail/title'
import Layout from '../components/layout'

type Props = {
  data: GatsbyTypes.WorkDetailQuery
}

const Detail = ({ data }: Props): JSX.Element => {
  const title = data.worksJson?.title || ''
  const desc = data.worksJson?.desc || ''
  const baseName = data.worksJson?.image?.baseName || ''
  const imageNum = data.worksJson?.image?.num || 0
  const sections = data.worksJson?.sections || []
  const links = data.worksJson?.links || []

  const linkButtons = links.map((e) => (
    <LinkButton
      iconName={e?.icon || 'link'}
      text={e?.name || ''}
      href={e?.href || ''}
      key={e?.name}
    />
  ))

  return (
    <Layout>
      <Seo title={title} desc={desc} article />
      <Carousel baseName={baseName} imageNum={imageNum} />
      <Title title={title} desc={desc} />
      <Sections items={sections} />
      <div className="mt-16 text-center">{linkButtons}</div>
    </Layout>
  )
}

export default Detail

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
