import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useImages } from '../../hooks/useImages'
import React from 'react'
import Slider from 'react-slick'

type Props = {
  items: string[]
}

export default function Carousel({ items }: Props): JSX.Element {
  const allImages = useImages()

  const carouselImages = items.map((filename, idx) => {
    // 画像の詳細を取得
    const imageData = allImages.find((e) =>
      e.node.relativePath.includes(filename)
    )
    if (!imageData) return null

    const gatsbyImageData = imageData.node.childImageSharp?.gatsbyImageData
    if (!gatsbyImageData) return null

    const image = getImage(gatsbyImageData)
    if (!image) return null

    return (
      <GatsbyImage
        image={image}
        alt={`${idx + 1}枚目の画像`}
        loading="eager"
        key={filename}
      />
    )
  })

  return (
    <div>
      <Slider
        arrows={false}
        dots
        infinite
        autoplay
        autoplaySpeed={4000}
        speed={600}
      >
        {carouselImages}
      </Slider>
    </div>
  )
}
