import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Icons } from '../../../data/icons'
import React from 'react'

type Props = {
  iconName: string
  href: string
}

const LinkIcon = ({ iconName, href }: Props): JSX.Element => {
  const icon = Icons[iconName] || ['fas', 'paw']

  return (
    <a
      className={`mx-2 text-${iconName} hover:text-black transition-colors`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default LinkIcon
