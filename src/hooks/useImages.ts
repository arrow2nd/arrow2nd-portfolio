import { useStaticQuery, graphql } from 'gatsby'

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
