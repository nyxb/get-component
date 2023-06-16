import os from 'node:os'
import path from 'node:path'
import fs from 'fs-extra'
import nc from '@nyxb/colors'
import consolji from 'consolji'
import { requireOptional, sample } from './utils'
import { affirmations } from './affirmations'

export interface Config {
   lang: string
   dir: string
}

export interface ComponentInfo {
   name: string
   dir: string
   lang: string
}

export function getConfig(): Config {
   const home = os.homedir()
   const currentPath = process.cwd()

   const defaults: Config = {
      lang: 'ts',
      dir: 'app/components',
   }

   const globalOverrides = requireOptional(
    `/${home}/.getc-config.json`,
   )

   const localOverrides = requireOptional(
    `/${currentPath}/.getc-config.json`,
   )

   return Object.assign({}, defaults, globalOverrides, localOverrides)
}

export async function createParentDirectoryIfNecessary(dir: string) {
   const fullPathToParentDir = path.resolve(dir)

   if (!fs.existsSync(fullPathToParentDir))
      fs.mkdirSync(dir)
}

export function logTemplateChoice(isStyle: boolean) {
   const templateString = isStyle ? 'style' : 'normal'
   consolji.info(`Version:   ${templateString}`)
}

// Emit a message confirming the creation of the component

export function logIntro({ name, dir, isNewDir, isStyle }: ComponentInfo & { isNewDir: boolean; isStyle: boolean }) {
   consolji.info(
   `✨  Creating the ${nc.nyxbfox(
     name,
   )}  component ✨`,
   )

   const templateString = isStyle
      ? 'with style-components'
      : 'normal'

   const langString = nc.bold(nc.nyxbblue('TypeScript'))

   if (isNewDir) {
      const pathString = nc.bold(nc.nyxbblue(dir))
      consolji.info(`Directory:  ${pathString}`)
   }
   consolji.info(`Version:   ${templateString}`)
   consolji.info(`Language:   ${langString}`)
   consolji.info(
      nc.gray(
         '=========================================',
      ),
   )
}

export function logItemCompletion(successText: string) {
   const checkmark = nc.nyxbgreen('✓')
   consolji.info(`${checkmark} ${successText}`)
}

export function logConclusion() {
   consolji.info(nc.nyxbgreen(' Component created!'))
   consolji.info(nc.gray(sample(affirmations)))
}

export function logError(error: any) {
   consolji.info(
      nc.nyxbred('Error creating  component.'),
   )
   consolji.info(nc.nyxbred(error))
}
