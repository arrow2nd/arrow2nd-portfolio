import { useStaticQuery, graphql } from 'gatsby'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'

type ImageType = readonly {
  readonly node: Pick<GatsbyTypes.File, 'relativePath' | 'id'> & {
    readonly childImageSharp: GatsbyTypes.Maybe<
      Pick<GatsbyTypes.ImageSharp, 'gatsbyImageData'>
    >
  }
}[]

export const useImages = (): ImageType => {
  const { image } = useStaticQuery<GatsbyTypes.AllImagesQuery>(graphql`
    query AllImages {
      image: allFile(filter: { ext: { eq: ".png" } }) {
        edges {
          node {
            relativePath
            id
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  return image.edges
}

export const getGatsbyImage = (
  images: ImageType,
  imageName: string
): IGatsbyImageData | undefined => {
  // 画像の詳細を取得
  const imageData = images.find((e) => e.node.relativePath.includes(imageName))
  if (!imageData) return undefined

  const gatsbyImageData = imageData.node.childImageSharp?.gatsbyImageData
  if (!gatsbyImageData) return undefined

  const image = getImage(gatsbyImageData)
  if (!image) undefined

  return image
}
