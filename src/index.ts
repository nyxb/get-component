#!/usr/bin/env node
import * as path from 'node:path'
import * as fs from 'fs-extra'
import { program } from 'commander'
import { version } from '../package.json'
import {
   getConfig,
   logConclusion,
   logError,
   logIntro,
   logItemCompletion,
} from './helpers'
import {
   mkDirPromise,
   readFilePromiseRelative,
   writeFilePromise,
} from './utils'

// Get the default config for this component (looks for local/global overrides,
// falls back to sensible defaults).
const config = getConfig()

program
   .version(version)
   .arguments('<componentName>')
   .option(
      '-p, --path <relativePath>',
      'Relative path to the directory starting from the configured point',
      relativePath => path.join(config.dir, relativePath),
   )
   .option(
      '-d, --dir <pathToDirectory>',
      'Path to the "components" directory (default: "app/components")',
      config.dir,
   )
   .option(
      '-n, --newdir',
      'Create new directory for the component',
      false, // default is false
   )
   .option(
      '-s, --style',
      'Use a different template for the component',
      false, // default is false
   )
   .parse(process.argv)

const [componentName] = program.args

const options = program.opts()

const targetDir = options.hasOwnProperty('path') ? options.path : (options.hasOwnProperty('dir') ? options.dir : config.dir)

const templatePath = options.style ? './templates/style.ts.js' : './templates/ts.js'

// Define component directory and file paths
const componentDir = options.newdir ? path.join(targetDir, componentName) : targetDir
const filePath = `${componentDir}/${componentName}.tsx`
const indexPath = `${componentDir}/index.ts`

// Define index template
const indexTemplate = `\
export * from './${componentName}';
export { default } from './${componentName}';
`

logIntro({
   name: componentName,
   dir: componentDir,
   lang: 'ts',
   isStyle: options.style,
})

// Check if componentName is provided
if (!componentName) {
   logError(
      'Sorry, you need to specify a name for your component like this: get-component <name>',
   )
   process.exit(0)
}

// Check to see if the parent directory exists.
// Create it if not
if (!fs.existsSync(targetDir)) {
   logError(
    `The directory ${targetDir} does not exist! Please ensure the path is correct.`,
   )
   process.exit(0)
}

// Check to see if this component has already been created
if (fs.existsSync(filePath)) {
   logError(
    `Looks like this component already exists! There's already a component named ${componentName} in the directory ${targetDir}.`,
   )
   process.exit(0)
}

// Create a new directory for the component if newdir option is set.
if (options.newdir) {
   mkDirPromise(componentDir).catch((err) => {
      console.error(err)
      process.exit(0)
   })
}

readFilePromiseRelative(templatePath)
   .then(template =>
   // Replace our placeholders with real data (so far, just the component name)
      template.replace(/COMPONENT_NAME/g, componentName),
   )
   .then(template =>
   // Write to file.
      writeFilePromise(filePath, template),
   )
   .then((template) => {
      logItemCompletion('Component built and saved to disk.')
      return template
   })
   .then((template) => {
      // We also need the `index.ts` file, which allows easy importing.
      // Only if newdir option is set.
      if (options.newdir)
         return writeFilePromise(indexPath, indexTemplate)

      return template
   })
   .then((template) => {
      if (options.newdir)
         logItemCompletion('Index file built and saved to disk.')

      return template
   })
   .then((template) => {
      logConclusion()
   })
   .catch((err) => {
      console.error(err)
   })
