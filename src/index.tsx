import React from 'react';
import { render } from 'react-dom';

import CssBaseline from '@mui/material/CssBaseline';
import CustomThemeProvider from './services/CustomThemeProvider';
import App from './App';

import './css/index.css';

render(
  <CustomThemeProvider>
    <CssBaseline />
    <App />
  </CustomThemeProvider>,
  document.getElementById('root'),
);
