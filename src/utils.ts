import fs from 'node:fs'
import path from 'node:path'

export function requireOptional(filePath: string) {
   try {
      return require(filePath)
   }
   catch (e: any) {
      // We want to ignore 'MODULE_NOT_FOUND' errors, since all that means is that
      // the user has not set up a global overrides file.
      // All other errors should be thrown as expected.
      if (e.code !== 'MODULE_NOT_FOUND')
         throw e
   }
}

export function mkDirPromise(dirPath: string) {
   return new Promise<void>((resolve, reject) => {
      fs.mkdir(dirPath, (err) => {
         err ? reject(err) : resolve()
      })
   })
}

// Simple promise wrappers for read/write files.
// utf-8 is assumed.
export function readFilePromise(fileLocation: string) {
   return new Promise<string>((resolve, reject) => {
      fs.readFile(fileLocation, 'utf-8', (err, text) => {
         err ? reject(err) : resolve(text)
      })
   })
}

export function writeFilePromise(fileLocation: string, fileContent: string) {
   return new Promise<void>((resolve, reject) => {
      fs.writeFile(fileLocation, fileContent, 'utf-8', (err) => {
         err ? reject(err) : resolve()
      })
   })
}

// Somewhat counter-intuitively, `fs.readFile` works relative to the current
// working directory (if the user is in their own project, it's relative to
// their project). This is unlike `require()` calls, which are always relative
// to the code's directory.
export function readFilePromiseRelative(fileLocation: string) {
   return readFilePromise(path.join(__dirname, fileLocation))
}

export function sample<T>(arr: T[]): T {
   return arr[Math.floor(Math.random() * arr.length)]
}
