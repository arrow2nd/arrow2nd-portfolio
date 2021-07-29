import { SectionItem } from '../../../types/section'
import React from 'react'
import Section from './section'

type Props = {
  items: SectionItem[]
}

const Sections = ({ items }: Props): JSX.Element => {
  const sections = items.map((item) => <Section item={item} key={item.title} />)
  return <div className="text-center">{sections}</div>
}

export default Sections
