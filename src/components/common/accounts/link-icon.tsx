import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

type Props = {
  className: string
  icon: IconName
  href: string
}

const LinkIcon = ({ className, icon, href }: Props): JSX.Element => (
  <a
    className={`mx-2 ${className} hover:text-black transition-colors`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FontAwesomeIcon icon={['fab', icon]} />
  </a>
)

export default LinkIcon
