# React boilerplate

A `typescript` / `react` boilerplate bundled with `webpack`. Style and theme management is handled by [Material UI](https://mui.com/).

## Features

- JS/TS hot reload
- React state preservation
- Css live reload
- MUI theme management

## How to use

- Clone the repository:

  ```bash
  git clone https://github.com/Groupe-Citypassenger-Inc/react-boilerplate
  ```

- Install dependencies:

  ```bash
  yarn
  ```

- Start the dev server:

  ```bash
  yarn start
  ```

- Edit files according to your project:
  - `package.json`: name, description, repository
  - `public/index.html`: meta desc, title
  - `public/site.webmanifest`: name, short_name
  - `public/`: favicons


- Remove old upstream and add your own:
  ```bash
  git remote rm upstream
  git remote add upstream https://github.com/...
  ```

Now you just have to develop your application 👌.

## Development

Refer to the [documentation](https://github.com/Groupe-Citypassenger-Inc/Documentation#comment-d%C3%A9velopper-des-projets-front-end) for pre-requisites and good practices.

## Build

- `yarn`
- `yarn audit`
- `yarn build`

> By default the build files will be put to the `/dist` folder

## Lint

The project comes with a pre-configured eslint for `react` and `typescript`. The style guide comes from [airbnb](https://github.com/airbnb/javascript).