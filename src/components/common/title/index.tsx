import React from 'react'

type Props = {
  name: string
}

const Title = ({ name }: Props): JSX.Element => (
  <div className="mt-20 text-center">
    <h1 className="block text-5xl tracking-widest">{name}</h1>
    <div className="w-16 h-1 mx-auto mt-4 block bg-arrow2nd rounded-full" />
  </div>
)

export default Title
