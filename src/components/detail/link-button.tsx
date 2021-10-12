import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icons } from '../../data/icons'

type Props = {
  iconName: string
  text: string
  href: string
}

const LinkButton = ({ iconName, text, href }: Props): JSX.Element => {
  const icon = Icons[iconName] || ['fas', 'paw']

  return (
    <div
      className={`m-2 px-4 md:px-6 py-1 md:py-1.5 inline-block text-natural-white bg-${iconName} hover:bg-black rounded-full transition-colors`}
    >
      <a
        className="text-sm md:text-base"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={icon} />
        <span className="ml-1.5 inline-block">{text}</span>
      </a>
    </div>
  )
}

export default LinkButton
