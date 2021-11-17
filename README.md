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
  - `public/`: favicons (https://realfavicongenerator.net/)


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

## Proxy

A dedicated proxy is used by the development server to request the CityPassenger pre-production. It configuration is specified in `webpack.config.js` :

```js
proxy: {
      '/ws/**': { target: 'https://preprod.citypassenger.com', secure: false },
      '/Accounts/**': { target: 'https://preprod.citypassenger.com', secure: false, headers: { host: 'preprod.citypassenger.com' } },
    },
```

## Theming

The theme management is integrated in the boilerplate.

### How it works

Material UI exposes a `ThemeProvider` component to manage themes. This component must be used at the root of the application:

```jsx
ReactDOM.render(
  <ThemeProvider theme={contextValue.theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
```

This component accepts a `theme` parameter of type `Theme`.
A `Theme` can be created using the :

```ts
createTheme({ option: ThemeOption }) : Theme
```

To simplify the code, the theme management is isolated in a dedicated file `CustomThemeProvider.js`.
Imported as follows in `ìndex.jsx`: 

```js
ReactDOM.render(
  <CustomThemeProvider>
      <App />
  </CustomThemeProvider>,
  document.getElementById('root')
);
```

and used as follows:

```js
const { themeName, toggleTheme } = useContext(CustomThemeContext);
```

### How to customize themes 

The `option` object, specified when creating a theme, contains the following attributes: 

```js
{
  palette: {},
  typography: {},
  spacing: {},
  breakpoints: {},
  zIndex: {},
  transitions: {},
  components: {},
}
```

See https://mui.com/customization/theming/#theme-configuration-variables for more info.

For example to specify the primary color of the application, simply write:
```js
const myTheme = createTheme({
  palette: {
    primary: { main: '#39499c' },
  },
});
```

or to customize a MUI component:

```js
const myTheme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'navigation' },
          style: {
            borderRadius: '10px',
            backgroundColor: '#DDE0EE',
            color: '#39499c',
          }
        }
      ]
    }
  },
});
```

More info: https://mui.com/customization/theming/