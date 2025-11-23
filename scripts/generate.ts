import fs from 'node:fs'

import { markdown } from '@yunyoujun/utils'
import consola from 'consola'
import { iconsList } from '../data/iconsList'
import { generateGithubStatsImg, generateIconList } from './utils'

const readmeFile = 'README.md'
let readmeContent = fs.readFileSync(readmeFile, 'utf-8')

iconsList.forEach((item) => {
  readmeContent = markdown.injectContentBetweenTags(
    item.namespace,
    readmeContent,
    generateIconList(item.icons),
  )
})
consola.success(`Generate ${readmeFile} successfully!`)

readmeContent = markdown.injectContentBetweenTags(
  'github-stats',
  readmeContent,
  generateGithubStatsImg({
    username: 'YunYouJun',
    show_icons: true,
    icon_color: '0078e7',
    title_color: '0078e7',
    include_all_commits: true,
  }),
)
consola.success(`Generate github-stats successfully!`)

if (readmeContent)
  fs.writeFileSync(readmeFile, readmeContent)
