import React from 'react'
import Accent from '../common/accent'

type Props = {
  title: string
  desc: string
}

const Title = ({ title, desc }: Props): JSX.Element => (
  <div className="mt-8 text-center">
    <h2 className="text-xl md:text-2xl tracking-widest">{title}</h2>
    <p className="mt-1 text-sm md:text-base text-natural-gray">{desc}</p>
    <Accent className="mt-8" />
  </div>
)

export default Title
