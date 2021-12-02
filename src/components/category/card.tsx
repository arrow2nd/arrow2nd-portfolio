import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useImages, getImageData } from '../../hooks/useImages'

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
          className="border border-gray-200 z-0 rounded-3xl shadow-md filter hover:brightness-75 transition-all"
          image={image.data}
          alt={`${title}のスクリーンショット`}
        />
      </Link>
      <div className="mt-4 ml-1">
        <Link className="inline-block" to={to}>
          <p className="hover:text-arrow2nd transition-colors">{title}</p>
        </Link>
        <p className="block text-sm text-natural-gray">{desc}</p>
      </div>
    </div>
  )
}

export default Card
