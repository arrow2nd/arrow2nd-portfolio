import React from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mx-4 md:mx-8 mt-16">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
