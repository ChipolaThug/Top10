# TOP 10

Début d'un projet solo inspiré du jeu du même nom 

## How to use

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
  git remote rm origin
  git remote add upstream https://github.com/...
  ```

Now you just have to develop your application 👌.

## Build

- `yarn`
- `yarn audit`
- `yarn build`

> By default the build files will be put to the `/dist` folder

## Lint

The project comes with a pre-configured eslint for `react` and `typescript`. The style guide comes from [airbnb](https://github.com/airbnb/javascript).

## Proxy

A dedicated proxy is used by the development server to request the CityPassenger pre-production. It configuration is specified in `webpack.config.js` :

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
