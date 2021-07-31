import { SectionType } from '../../../types/section'
import React from 'react'
import Section from './section'

type Props = {
  items:
    | SectionType[]
    | readonly GatsbyTypes.Maybe<
        Pick<GatsbyTypes.WorksJsonSections, 'title' | 'text'>
      >[]
}

const Sections = ({ items }: Props): JSX.Element => {
  const sections = items.map((item) => (
    <Section
      title={item?.title || ''}
      lines={item?.text || []}
      key={item?.title}
    />
  ))

  return <div className="text-center">{sections}</div>
}

export default Sections
