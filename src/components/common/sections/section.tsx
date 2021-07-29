import { SectionItem } from '../../../types/section'
import React from 'react'

type Props = {
  item: SectionItem
}

const Section = ({ item }: Props): JSX.Element => {
  const sentence = item.text.map((line) => (
    <p className="text-natural-gray" key={line}>
      {line}
    </p>
  ))

  return (
    <div className="mt-16 tracking-wide">
      <h3 className="block text-xl text-natural-black">{item.title}</h3>
      <div className="mt-4">{sentence}</div>
    </div>
  )
}

export default Section
