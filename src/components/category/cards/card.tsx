import { GatsbyImage } from 'gatsby-plugin-image'
import { useImages, getGatsbyImage } from '../../../hooks/useImages'
import React from 'react'

type Props = {
  title: string
  desc: string
  image: string
}

const Card = ({ title, desc, image }: Props): JSX.Element => {
  const allImages = useImages()

  const gatsbyImage = getGatsbyImage(allImages, image)
  if (!gatsbyImage) return <p>error</p>

  return (
    <div className="">
      <div className="rounded-3xl shadow-md">
        <GatsbyImage
          className="rounded-3xl hover:opacity-75 transition-opacity"
          image={gatsbyImage}
          alt={`${title}のスクリーンショット`}
        />
      </div>
      <div className="ml-1">
        <span className="block mt-4 text-sm md:text-lg">{title}</span>
        <span className="block text-xs md:text-sm text-natural-gray">
          {desc}
        </span>
      </div>
    </div>
  )
}

export default Card
