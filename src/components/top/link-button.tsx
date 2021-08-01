import { Link } from 'gatsby'
import { PageLinks } from '../../data/links/pages'
import React from 'react'

type Props = {
  className?: string
}

const LinkButton = ({ className = '' }: Props): JSX.Element => {
  const links = PageLinks.map((e) => (
    <Link to={e.to} key={e.name}>
      <span className="mx-4 inline-block text-natural-white hover:text-natural-gray tracking-widest transition-colors">
        {e.name}
      </span>
    </Link>
  ))

  return (
    <div className={`px-4 py-1 bg-natural-black rounded-full ${className}`}>
      {links}
    </div>
  )
}

export default LinkButton
