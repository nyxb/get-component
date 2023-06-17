import os from 'node:os'
import path from 'node:path'
import fs from 'fs-extra'
import nc from '@nyxb/colors'
import consolji from 'consolji'
import gradient from 'gradient-string'
import { requireOptional, sample } from './utils'
import { affirmations } from './affirmations'

export const nyxbGreen = '#14F195'
export const nyxbPurple = '#9945FF'

export const nyxbGradient = gradient(nyxbGreen, nyxbPurple)

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

export function logIntro({ name, dir, isStyle }: ComponentInfo & { isStyle: boolean }) {
   console.log('\n')
   consolji.log(`${nc.nyxbcyan('')} Creating the ${nc.nyxbfox(name)} component ${nc.nyxbcyan('')}`)
   console.log('\n')

   const templateString = isStyle
      ? nc.bold(nc.nyxbfox('with style-components'))
      : nc.bold(nc.nyxbfox('normal'))

   const langString = nc.bold(nc.nyxbfox('TypeScript'))

   const pathString = nc.bold(nc.nyxbfox(dir))
   const directory = nyxbGradient('Directory:')
   const version = nyxbGradient('Version:')
   const language = nyxbGradient('Language:')
   consolji.log(`${directory}  ${pathString}`)
   consolji.log(`${version}    ${templateString}`)
   consolji.log(`${language}   ${langString}`)
   consolji.log(
      nc.gray(
         '=========================================',
      ),
   )
   console.log('\n')
}

export function logItemCompletion(successText: string) {
   const checkmark = nc.nyxbgreen('✓')
   consolji.info(`${checkmark} ${successText}`)
}

export function logConclusion() {
   const react = nc.nyxbcyan('')
   const text = nc.nyxbgreen('Component created!')
   consolji.log(nc.nyxbgreen(`${react} ${text}`))
   consolji.log(nyxbGradient(sample(affirmations)))
}

export function logError(error: any) {
   consolji.error(
      nc.nyxbred('Error creating  component.'),
   )
   consolji.error(nc.nyxbred(error))
}
