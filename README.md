<p align="center">
  <img src="https://github.com/nyxb/get-component/blob/main/docs/logo@2x.png?raw=true" width="285" height="285" alt="get-component logo">
  <br>

[![npm version][npm-version-src]][npm-version-href] 
[![npm downloads][npm-downloads-src]][npm-downloads-href] 
[![bundle][bundle-src]][bundle-href] 
[![License][license-src]][license-href]

# 📦 get-component

> Simple, customizable utility for adding new React components to your project.

<img src="https://github.com/nyxb/get-component/blob/main/docs/divider@2x.png?raw=true" width="888" height="100" role="presentation">

This project is a CLI tool that allows you to quickly scaffold new components. All of the necessary boilerplate will be generated automatically.

This project uses an opinionated file structure discussed in this blog post: [**Delightful React File/Directory Structure**](https://www.blog.nyxb.zip/react/file-structure/).

**Note:** This project is designed to work with Next.js, but it should work with any React project. This Projekt use NerdFonts for the icons in the terminal. If you don't have them installed, you can find them here: [**NerdFonts**](https://www.nerdfonts.com/).

<br />

## 🌟 Features

- Simple CLI interface for adding React components.
- Designed to work seamlessly with Next.js and its new app router.
- Offers global config, which can be overridden on a project-by-project basis.
- Colourful terminal output!
- Supports only TypeScript.
- Supports only functional components.
- Supports components with styled-components.

<br />

## ⏱️ Quickstart

### 📥 Install:

```bash
# pnpm 
pnpm add -g get-component@latest

# yarn
yarn global add get-component@latest

# npm
$ npm i -g get-component@latest
```

`cd` into your project's directory, and try creating a new component:

## 📂 With new folder, component, and index file

```bash
getc MyNewComponent -n
```

Your project will now have a new directory at `app/components/MyNewComponent`. This directory has two files:

```tsx
// `MyNewComponent/index.ts`
export * from './MyNewComponent'
export { default } from './MyNewComponent'
```

```tsx
// `MyNewComponent/MyNewComponent.tsx`
export default function MyNewComponent() {
   return (
    <>
    </>
   )
}
```

## ➕ Only one new component

```bash
getc MyNewComponent
```
creates a new component with selected name directly in app/components folder

## 🛠️ Only one new component in the desired path

```bash
getc MyNewComponent -p Sections
```
creates a new component with selected name directly in app/components/Sections folder

## 💅 With styled-components

```bash
getc MyNewComponent -s
```

```tsx
import styled from 'styled-components'

export default function MyNewComponent() {
   return (
    <Wrapper>
    </Wrapper>
   )
}

const Wrapper = styled.div``
```

<br />

## ⚙️ Configuration

Configuration can be done through 3 different ways:

- Creating a global `.getc-config.json` in your home directory (`~/.getc-config.json`).
- Creating a local `.getc-config.json` in your project's root directory.
- Command-line arguments.

The resulting values are merged, with command-line values overwriting local values, and local values overwriting global ones.

<br />

## 📚 API Reference

### 📝 Template

Controls which template, normal or with styled-components, should be used.

- `-s` — creates a component file with `styled-components`.
- normal is default and needs no flag. 

Note that all components created will be functional components. Class components are not supported.

**Usage:**

Command line: `--sytle` or `-s`
<br />

### 📁 Directory

Controls the desired directory for the created component. Defaults to `app/components`

**Usage:**

Command line: `--dir <value>` or `-d <value>`

JSON config: `{ "dir": <value> }`
<br />

## 🌐 Platform Support

This has only been tested in macOS. I think it'd work fine in linux, but I haven't tested it in Windows.
<br />

## 📜 License

[MIT](./LICENSE) 💚 License © 2023 [Dennis Ollhoff](https://github.com/nyxb)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/get-component?style=flat&colorA=18181B&colorB=14F195
[npm-version-href]: https://npmjs.com/package/get-component
[npm-downloads-src]: https://img.shields.io/npm/dm/get-component?style=flat&colorA=18181B&colorB=14F195
[npm-downloads-href]: https://npmjs.com/package/get-component
[bundle-src]: https://img.shields.io/bundlephobia/minzip/get-component?style=flat&colorA=18181B&colorB=14F195
[bundle-href]: https://bundlephobia.com/result?p=get-component
[license-src]: https://img.shields.io/github/license/nyxb/get-component.svg?style=flat&colorA=18181B&colorB=14F195
[license-href]: https://github.com/nyxb/get-component/blob/main/LICENSE
