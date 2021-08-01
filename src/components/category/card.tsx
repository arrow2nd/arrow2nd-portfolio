import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useImages, getImageData } from '../../hooks/useImages'
import React from 'react'

type Props = {
  title?: string
  desc?: string
  imageName?: string
  to?: string
}

const Card = ({
  title = '',
  desc = '',
  imageName = '',
  to = ''
}: Props): JSX.Element => {
  const allImages = useImages()

  const image = getImageData(allImages, imageName)
  if (!image) {
    return <p>{`error : '${imageName}' is not found.`}</p>
  }

  return (
    <div>
      <Link to={to}>
        <GatsbyImage
          className="border border-gray-200 z-0 rounded-3xl shadow-md hover:opacity-75 transition-opacity"
          image={image.data}
          alt={`${title}のスクリーンショット`}
        />
      </Link>
      <div className="ml-1">
        <div className="mt-4">
          <Link to={to}>
            <span className="text-base hover:text-arrow2nd hover:underline">
              {title}
            </span>
          </Link>
        </div>
        <span className="block text-sm text-natural-gray">{desc}</span>
      </div>
    </div>
  )
}

export default Card
