/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  title?: string
  desc?: string
  image?: string
  article?: boolean
}

const Seo = ({
  title = '',
  desc = '',
  image = '',
  article = false
}: Props): JSX.Element => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery<GatsbyTypes.SiteInfoQuery>(
    graphql`
      query SiteInfo {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            originUrl: url
            defaultImage: image
            twitterUsername
          }
        }
      }
    `
  )

  if (!site?.siteMetadata) return <div />

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    originUrl,
    defaultImage,
    twitterUsername
  } = site.siteMetadata

  // URL末尾のスラッシュを削除
  const siteUrl = originUrl ? originUrl.slice(0, -1) : ''

  const seo = {
    title: title || defaultTitle,
    ogpTitle: title ? titleTemplate?.replace(/%s/, title) : defaultTitle,
    description: desc || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={title ? titleTemplate : ''}>
      <html lang="ja" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      {(article ? true : null) && <meta property="og:type" content="article" />}
      <meta property="og:title" content={seo.ogpTitle} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta
        name="twitter:card"
        content={article ? 'summary_large_image' : 'summary'}
      />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.ogpTitle} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  )
}

export default Seo
