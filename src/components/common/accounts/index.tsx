import React from 'react'
import LinkIcon from './link-icon'
import { AccountLinks } from '../../../data/links/accounts'

type Props = {
  className?: string
}

const Accounts = ({ className = '' }: Props): JSX.Element => {
  const icons = AccountLinks.map((acc) => (
    <LinkIcon iconName={acc.iconName} href={acc.href} key={acc.iconName} />
  ))

  return <div className={`flex flex-row text-2xl ${className}`}>{icons}</div>
}

export default Accounts
