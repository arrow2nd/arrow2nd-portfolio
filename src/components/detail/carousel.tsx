import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as RRCarousel } from 'react-responsive-carousel'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useImages } from '../../hooks/useImages'
import React from 'react'

type Props = {
  baseName?: string
  imageNum?: number
}

export default function Carousel({
  baseName = '',
  imageNum = 0
}: Props): JSX.Element {
  const allImages = useImages()

  const carouselImages: JSX.Element[] = []

  for (let idx = 0; idx <= imageNum; idx++) {
    const imageName = `${baseName}-${idx}.png`

    // 画像の詳細を取得
    const imageData = allImages.find((e) =>
      e.node.relativePath.includes(imageName)
    )
    if (!imageData) continue

    const gatsbyImageData = imageData.node.childImageSharp?.gatsbyImageData
    if (!gatsbyImageData) continue

    const image = getImage(gatsbyImageData)
    if (!image) continue

    carouselImages.push(
      <div key={imageName}>
        <GatsbyImage
          image={image}
          alt={`${idx + 1}枚目の画像`}
          loading="eager"
        />
      </div>
    )
  }

  return (
    <RRCarousel
      className="mx-auto md:sw-8/12"
      autoPlay
      interval={1500}
      transitionTime={600}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
    >
      {carouselImages}
    </RRCarousel>
  )
}
