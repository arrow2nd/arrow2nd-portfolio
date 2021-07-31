import React from 'react'

type Props = {
  title: string
  lines: string[] | readonly GatsbyTypes.Maybe<string>[]
}

const Section = ({ title = '', lines = [] }: Props): JSX.Element => {
  const sentence = lines.map((line) => (
    <p className="text-natural-gray" key={line}>
      {line}
    </p>
  ))

  return (
    <div className="mt-16 tracking-wide">
      <h3 className="block text-xl text-natural-black">{title}</h3>
      <div className="mt-4 text-sm md:text-base">{sentence}</div>
    </div>
  )
}

export default Section
