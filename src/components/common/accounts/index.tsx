import { FaTwitter, FaMastodon, FaGithub } from 'react-icons/fa'
import React from 'react'
import LinkIcon from './link-icon'

type Props = {
  className?: string
}

const Accounts = ({ className = '' }: Props): JSX.Element => (
  <div className={`flex flex-row text-2xl ${className}`}>
    <LinkIcon className="text-twitter" to="https://twitter.com/arrow_2nd">
      <FaTwitter />
    </LinkIcon>
    <LinkIcon className="text-mastodon" to="https://imastodon.net/@arrow2nd">
      <FaMastodon />
    </LinkIcon>
    <LinkIcon className="text-github" to="https://github.com/arrow2nd">
      <FaGithub />
    </LinkIcon>
  </div>
)

export default Accounts
