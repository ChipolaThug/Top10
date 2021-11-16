import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material';
import React, { createContext, useEffect, useState } from 'react';

const commonThemeOptions : ThemeOptions = {
  typography: {
    fontFamily: '"Ubuntu", sans-serif;',
  },
};

const themeLight = createTheme({
  palette: {
    primary: { main: '#39499c' },
    secondary: { main: '#b2d234' },
    background: { default: '#fdfdfd' },
    text: { primary: '#333333' },
  },
  ...commonThemeOptions,
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#b2d234' },
    secondary: { main: '#39499c' },
    background: { default: '#0a0a0a' },
    text: { primary: '#f7f7f7' },
  },
  ...commonThemeOptions,
});

const useTheme = (): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [theme, setTheme] = useState<string>(window.localStorage.getItem('theme') || 'light');
  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);
  };

  const toggleTheme = (): void => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem('theme')) return;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, []);

  return [theme, toggleTheme];
};

export const CustomThemeContext = createContext({
  themeName: 'light',
  theme: themeLight,
  toggleTheme: null,
});

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, toggleTheme] = useTheme();

  const contextValue = {
    themeName: theme,
    theme: theme === 'light' ? themeLight : themeDark,
    toggleTheme,
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <div className={theme} style={{ height: 'inherit' }}>
        <ThemeProvider theme={contextValue.theme}>{children}</ThemeProvider>
      </div>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
