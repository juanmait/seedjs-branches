/* Native */
import { Dirent } from 'fs'

/* Custom */
import readdirAsync from './readdirAsync'

const PROJECT_ROOT = `${process.cwd()}`

readdirAsync(PROJECT_ROOT).then((content: Dirent[]) => {
  content.forEach(item => console.log(item.name)) //tslint:disable-line
})
