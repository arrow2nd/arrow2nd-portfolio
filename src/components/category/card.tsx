import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useImages, getGatsbyImage } from '../../hooks/useImages'
import React from 'react'

type Props = {
  title?: string
  desc?: string
  image?: string
  to?: string
}

const Card = ({
  title = '',
  desc = '',
  image = '',
  to = ''
}: Props): JSX.Element => {
  const allImages = useImages()

  const gatsbyImage = getGatsbyImage(allImages, image)
  if (!gatsbyImage) {
    return <p>{`error : '${image}' is undefined.`}</p>
  }

  return (
    <div>
      <Link to={to}>
        <GatsbyImage
          className="rounded-3xl shadow-md hover:opacity-75 transition-opacity"
          image={gatsbyImage}
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
