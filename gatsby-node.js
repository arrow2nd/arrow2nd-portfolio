/* eslint-disable @typescript-eslint/no-var-requires */
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// slugを作成
exports.onCreateNode = ({ node, getNode, actions }) => {
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
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
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

  result.data.allWorksJson.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/detail.tsx`),
      context: {
        slug: node.fields.slug
      }
    })
  })
}
