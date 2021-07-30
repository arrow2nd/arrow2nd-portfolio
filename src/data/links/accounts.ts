import { IconName } from '@fortawesome/fontawesome-svg-core'

type AccountLink = {
  name: string
  icon: IconName
  href: string
}

export const AccountLinks: AccountLink[] = [
  {
    name: 'twitter',
    icon: 'twitter',
    href: 'https://twitter.com/arrow_2nd'
  },
  {
    name: 'mastodon',
    icon: 'mastodon',
    href: 'https://imastodon.net/@arrow2nd'
  },
  {
    name: 'github',
    icon: 'github',
    href: 'https://github.com/arrow2nd'
  }
]
