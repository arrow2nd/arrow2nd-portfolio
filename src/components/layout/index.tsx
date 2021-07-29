import React from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <Header />
      <main className="mx-8">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
