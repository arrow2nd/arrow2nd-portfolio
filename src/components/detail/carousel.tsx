import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel as RRCarousel } from 'react-responsive-carousel'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useImages, getGatsbyImage } from '../../hooks/useImages'
import React from 'react'

type Props = {
  baseName: string
  imageNum: number
}

const Carousel = ({ baseName, imageNum }: Props): JSX.Element => {
  const allImages = useImages()
  const carouselImages: JSX.Element[] = []

  // カルーセルの画像要素を作成
  for (let idx = 0; idx <= imageNum; idx++) {
    const imageName = `${baseName}-${idx}.png`

    const gatsbyImage = getGatsbyImage(allImages, imageName)
    if (!gatsbyImage) continue

    carouselImages.push(
      <div key={imageName}>
        <GatsbyImage
          image={gatsbyImage}
          alt={`${idx + 1}枚目の画像`}
          loading="eager"
        />
      </div>
    )
  }

  return (
    <RRCarousel
      className="mx-auto md:w-8/12"
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
