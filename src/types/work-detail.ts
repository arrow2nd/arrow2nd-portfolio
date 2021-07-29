import { SectionItem } from './section-item'
import { SiteLink } from './site-link'

export type WorkDetail = {
  title: string
  desc: string
  sections: SectionItem
  links: SiteLink
  images: string[]
}
