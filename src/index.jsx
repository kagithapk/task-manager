import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as ThemeProvider } from './context/ThemeContext';
import { Provider as HeaderMenuProvider } from './context/headerMenuFixContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <HeaderMenuProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </HeaderMenuProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
