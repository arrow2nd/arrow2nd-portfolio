import React from 'react'
import LinkIcon from './link-icon'
import { AccountLinks } from '../../../data/links/accounts'

type Props = {
  className?: string
}

const Accounts = ({ className = '' }: Props): JSX.Element => {
  const icons = AccountLinks.map((acc) => (
    <LinkIcon
      className={`text-${acc.name}`}
      icon={acc.icon}
      href={acc.href}
      key={acc.name}
    />
  ))

  return <div className={`flex flex-row text-2xl ${className}`}>{icons}</div>
}

export default Accounts
