import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { PageLinks } from '../../data/links/pages'
import React from 'react'

const Header = (): JSX.Element => {
  const linkItems = PageLinks.map((item) => (
    <Link className="ml-8" to={item.to} key={item.name}>
      <span className="text-base hover:text-arrow2nd hover:underline tracking-widest">
        {item.name}
      </span>
    </Link>
  ))

  return (
    <nav className="flex flex-row px-8 md:px-10 py-6 w-full items-center">
      <Link to="/">
        <StaticImage
          className="border border-gray-200 rounded-full"
          src="../../images/arrow2nd.png"
          width={45}
          alt="icon"
        />
      </Link>
      <div className="ml-auto">{linkItems}</div>
    </nav>
  )
}

export default Header
