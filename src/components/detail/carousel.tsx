import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as RRCarousel } from 'react-responsive-carousel'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useImages, getImageData } from '../../hooks/useImages'
import React from 'react'

type Props = {
  baseName?: string
  imageNum?: number
}

const Carousel = ({ baseName = '', imageNum = 0 }: Props): JSX.Element => {
  const allImages = useImages()
  const carouselImages: JSX.Element[] = []

  // カルーセルの画像要素を作成
  for (let idx = 0; idx <= imageNum; idx++) {
    const imageName = `${baseName}-${idx}.png`

    const image = getImageData(allImages, imageName)
    if (!image) continue

    carouselImages.push(
      <GatsbyImage
        image={image.data}
        alt={`${idx + 1}枚目の画像`}
        loading="eager"
        as={'div'}
        key={imageName}
      />
    )
  }

  return (
    <RRCarousel
      className="mx-auto md:w-8/12 border border-gray-200"
      autoPlay
      interval={4000}
      transitionTime={600}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
    >
      {carouselImages}
    </RRCarousel>
  )
}

export default Carousel
