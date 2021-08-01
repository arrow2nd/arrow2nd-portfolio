import { useStaticQuery, graphql } from 'gatsby'
import { getImage, getSrc, IGatsbyImageData } from 'gatsby-plugin-image'

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

type ImageDataType = { data: IGatsbyImageData; src: string }

export const getImageData = (
  images: ImageType,
  imageName: string
): ImageDataType | undefined => {
  // 画像名で絞り込む
  const edge = images.find((e) => e.node.relativePath.includes(imageName))
  if (!edge) return undefined

  const gatsbyImageData = edge.node.childImageSharp?.gatsbyImageData
  if (!gatsbyImageData) return undefined

  // 画像データ
  const data = getImage(gatsbyImageData)
  if (!data) return undefined

  // 画像のパス
  const src = getSrc(gatsbyImageData)
  if (!src) return undefined

  return { data, src }
}
