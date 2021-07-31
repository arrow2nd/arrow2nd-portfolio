import React from 'react'
import Accent from './accent'

type Props = {
  name: string
}

const Title = ({ name }: Props): JSX.Element => (
  <div className="text-center">
    <h1 className="block text-5xl tracking-widest">{name}</h1>
    <Accent className="mt-4" />
  </div>
)

export default Title
