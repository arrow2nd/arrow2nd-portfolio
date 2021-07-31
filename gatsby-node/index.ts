/* eslint-disable @typescript-eslint/no-explicit-any */
import path from 'path'
import { createFilePath } from 'gatsby-source-filesystem'
import { CategoryLinks } from '../src/data/links/category'
import { GatsbyNode } from 'gatsby'

// slugを作成
export const onCreateNode: GatsbyNode['onCreateNode'] = ({
  node,
  getNode,
  actions
}) => {
  const { createNodeField } = actions

  if (node.internal.type === 'WorksJson') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' })

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

// ページを生成
export const createPages: GatsbyNode['createPages'] = async ({
  graphql,
  actions
}) => {
  const { createPage } = actions

  const result: any = await graphql(`
    query AllWorksJson {
      allWorksJson {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors || !result.data) {
    throw result.errors
  }

  // 作品詳細ページ
  result.data.allWorksJson.edges.forEach(({ node }: any) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/detail.tsx`),
      context: {
        slug: node.fields.slug
      }
    })
  })

  // カテゴリーページ
  CategoryLinks.map((category) => {
    createPage({
      path: category.to,
      component: path.resolve(`./src/templates/category.tsx`),
      context: {
        name: category.name
      }
    })
  })
}
