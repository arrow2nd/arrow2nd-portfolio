import { Link } from 'gatsby'
import React from 'react'

type Props = {
  className: string
  to: string
  children: React.ReactNode
}

const LinkIcon = ({ className, to, children }: Props): JSX.Element => (
  <Link
    className={`mx-2 ${className} hover:text-black transition-colors`}
    to={to}
    target="_blank"
    rel="noopener"
  >
    {children}
  </Link>
)

export default LinkIcon
