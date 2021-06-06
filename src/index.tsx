import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'styled-components';
import { DefaultTheme, ThemeProvider } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
    };
    media: {
      phone: string;
    };
  }
}

const theme: DefaultTheme = {
  colors: {
    primary: '#000000',
    secondary: '#49C2E8',
  },
  media: {
    phone: '(max-width: 600px)',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
