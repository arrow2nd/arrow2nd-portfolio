import React from 'react'
import { Link } from 'gatsby'
import { CategoryLinks } from '../../data/links/category'

type Props = {
  current?: string
}

const TabButtons = ({ current = '' }: Props): JSX.Element => {
  const buttons = CategoryLinks.map((e) => {
    const className =
      e.name === current
        ? 'text-natural-white bg-natural-black'
        : 'text-natural-black hover:text-natural-white'

    return (
      <Link to={e.to} key={e.name}>
        <div
          className={`m-2 md:m-1 px-4 md:px-5 py-0.5 md:py-1 inline-block ${className} hover:bg-natural-black rounded-full transition-colors`}
        >
          <span className="inline-block tracking-widest">{e.name}</span>
        </div>
      </Link>
    )
  })

  return <div className="mt-12 md:mt-16 text-center">{buttons}</div>
}

export default TabButtons
