import './src/styles/global.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDownload, faLink, faPaw } from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faMastodon,
  faGithub,
  faLine
} from '@fortawesome/free-brands-svg-icons'

library.add(faDownload, faLink, faPaw, faTwitter, faMastodon, faGithub, faLine)
