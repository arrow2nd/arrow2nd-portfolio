import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Accounts from '../components/common/accounts'
import Seo from '../components/common/seo'
import LinkButton from '../components/top/link-button'

const Index = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Seo />
      <StaticImage src="../images/arrow2nd.png" alt="icon" width={200} />
      <span className="mt-6 text-3xl text-natural-gray tracking-super">
        arrow2nd
      </span>
      <Accounts className="mt-6" />
      <LinkButton className="mt-6" />
    </div>
  )
}

export default Index
