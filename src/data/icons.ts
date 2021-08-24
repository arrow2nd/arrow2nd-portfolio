import { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'

type IconType = {
  [name: string]: [plefix: IconPrefix, name: IconName]
}

export const Icons: IconType = {
  twitter: ['fab', 'twitter'],
  mastodon: ['fab', 'mastodon'],
  github: ['fab', 'github'],
  line: ['fab', 'line'],
  link: ['fas', 'link'],
  download: ['fas', 'download'],
  googleplay: ['fab', 'google-play']
}
