import React from 'react'
import Accounts from '../components/common/accounts'
import Seo from '../components/common/seo'
import LinkButton from '../components/top/link-button'
import { StaticImage } from 'gatsby-plugin-image'

const Index = (): JSX.Element => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Seo />
      <StaticImage
        className="border border-gray-200 rounded-full"
        src="../images/arrow2nd.png"
        alt="arrow2nd"
        width={200}
      />
      <span className="mt-6 text-3xl text-natural-gray tracking-super">
        arrow2nd
      </span>
      <Accounts className="mt-6" />
      <LinkButton className="mt-6" />
    </div>
  )
}

export default Index
