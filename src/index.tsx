import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Header } from './components/index';
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
      medium: string;
      small: string;
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
    medium: '(max-width: 1470px)',
    small: '(max-width: 1000px)',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
