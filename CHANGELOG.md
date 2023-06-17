# Changelog


## v0.1.3

[compare changes](https://github.com/nyxb/get-component/compare/v0.1.2...v0.1.3)


### 💅 Refactors

  - **helpers.ts): remove commented out code for logTemplateChoice function 🐛 fix(helpers.ts:** Fix template string spacing in logIntro function to improve readability ([ca1e9fe](https://github.com/nyxb/get-component/commit/ca1e9fe))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

## v0.1.2

[compare changes](https://github.com/nyxb/get-component/compare/v0.1.1...v0.1.2)


### 💅 Refactors

  - **helpers.ts): comment out unused logTemplateChoice function 🔨 refactor(helpers.ts): simplify logIntro function by removing unnecessary bold and gradient formatting 🐛 fix(index.ts:** Handle promise rejection in mkDirPromise function call and log error message ([80c9c26](https://github.com/nyxb/get-component/commit/80c9c26))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

## v0.1.1


### 🚀 Enhancements

  - **index.ts): add support for path option to specify target directory for component creation 🐛 fix(index.ts:** Use targetDir variable instead of options.dir to check if directory exists and to display error message ([e71a8b5](https://github.com/nyxb/get-component/commit/e71a8b5))
  - **affirmations.ts): add emojis to affirmations to make them more fun and engaging 🐛 fix(helpers.ts): fix typo in logIntro function to improve readability 🎨 style(helpers.ts): change logItemCompletion function to use purple color for checkmark 🐛 fix(index.ts:** Add logItemCompletion function call to indicate successful directory creation ([8a86055](https://github.com/nyxb/get-component/commit/8a86055))

### 🩹 Fixes

  - **package.json): update version from 0.0.6 to 0.0.7 🐛 fix(index.ts:** Change templatePath from ts.ts to ts.js to fix file not found error ([32f1001](https://github.com/nyxb/get-component/commit/32f1001))
  - **package.json): update version from 0.0.7 to 0.0.8 ✨ feat(index.ts): add support for creating a new directory for the component with the --newdir option ✨ feat(index.ts): add support for using a different template for the component with the --style option ✨ feat(index.ts): add logIntro() parameters isNewDir and isStyle to display the new options 🚸 chore(index.ts): remove unused import and comment 🚸 chore(index.ts): remove unused variable fullPathToComponentDir 🚸 chore(index.ts): remove unused function createParentDirectoryIfNecessary() 🚸 chore(index.ts): remove unused variable template in the last then() block 🚸 chore(index.ts:** Remove unused import in the style.ts.js template file ([1511311](https://github.com/nyxb/get-component/commit/1511311))
  - **eslintrc): allow console.log to be used in development environment ✨ feat(package.json): update consolji and gradient-string dependencies to latest versions ✨ feat(helpers.ts): add nyxbGreen, nyxbPurple, and nyxbGradient constants for use in logging ✨ feat(helpers.ts): update logIntro function to remove isNewDir parameter and add nyxbGradient to logConclusion function 🐛 fix(index.ts:** Remove isNewDir parameter from logIntro function call ([5953c1d](https://github.com/nyxb/get-component/commit/5953c1d))
  - **README.md:** Update license badge source and href to match the correct repository name ([bdaa874](https://github.com/nyxb/get-component/commit/bdaa874))

### 🏡 Chore

  - **index.ts): import version from package.json to improve code readability 🚀 chore(tsconfig.json:** Enable resolveJsonModule to allow importing json files as modules ([eefc72c](https://github.com/nyxb/get-component/commit/eefc72c))
  - **package.json:** Update package version from 0.0.1 to 0.0.2 ([906828a](https://github.com/nyxb/get-component/commit/906828a))
  - **package.json): update version from 0.0.2 to 0.0.3 🐛 fix(package.json:** Update bin path to point to index.cjs instead of index.mjs to fix compatibility issues with Node.js versions prior to 14.6.0 ([8a33e1e](https://github.com/nyxb/get-component/commit/8a33e1e))
  - **package.json): increase version from 0.0.3 to 0.0.4 🐛 fix(affirmations.ts): change new-component to get-component in affirmations 🐛 fix(helpers.ts): change .new-component-config.json to .getc-config.json to match the new package name 🐛 fix(index.ts:** Change new-component to get-component in error message when no component name is provided ([5c06158](https://github.com/nyxb/get-component/commit/5c06158))
  - **package.json): update version from 0.0.4 to 0.0.5 🔧 chore(package.json:** Add prepublishOnly script to run buildkarium before publishing package ([f459ae7](https://github.com/nyxb/get-component/commit/f459ae7))
  - **package.json): update package version to 0.0.6 🔨 chore(package.json): change build script to use 'nyxr build' instead of 'buildkarium' and add script to copy templates to dist folder ✨ feat(copyTemplate.mjs:** Add script to copy templates folder to dist folder after build process ([dbbaf81](https://github.com/nyxb/get-component/commit/dbbaf81))
  - **package.json): increase version from 0.0.8 to 0.0.9 ✨ feat(index.ts:** Add support for relative path to the directory starting from the configured point with the -p, --path option. Change the default value of the -d, --dir option to the configured directory. Change the default value of the -n, --newdir option to false. Change the default value of the -s, --style option to false. Update the componentDir variable to use the path option if it is provided, otherwise use the dir option. ([4f773fe](https://github.com/nyxb/get-component/commit/4f773fe))
  - **eslintrc): disable no-prototype-builtins rule to avoid false positives 🔖 chore(package.json): update version from 0.0.10 to 0.0.11 🐛 fix(index.ts:** Fix targetDir variable assignment to fallback to config.dir if both path and dir options are not provided. Also, use path.join instead of path.resolve to join paths. ([933f67c](https://github.com/nyxb/get-component/commit/933f67c))
  - **package.json): update package version to 0.0.13 ✨ feat(helpers.ts:** Improve logIntro function to display more information about the component being created, including the template version, language and directory. Also, add line breaks for better readability. ([b34ad46](https://github.com/nyxb/get-component/commit/b34ad46))
  - **package.json): update version from 0.0.13 to 0.1.0 ✨ feat(package.json:** Add release script to automate changelog generation and package publishing ([1ac8edd](https://github.com/nyxb/get-component/commit/1ac8edd))

### 🎨 Styles

  - **docs:** Update images in docs folder to improve visual consistency with the rest of the project ([27001e1](https://github.com/nyxb/get-component/commit/27001e1))
  - **README.md): update logo and badges to match new project name and add license information ✨ feat(README.md): add support for styled-components in generated components 📝 docs(README.md): update project name and links to reflect new name and domain 🐛 fix(README.md): fix typo in command name from new-component to getc 📝 docs(README.md:** Update command examples to reflect new command name and options ([30b4c93](https://github.com/nyxb/get-component/commit/30b4c93))

### ❤️  Contributors

- Nyxb <contact@nyxb.xyz>

