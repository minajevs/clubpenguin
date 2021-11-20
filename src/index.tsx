import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'simplebar/src/simplebar.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-clock/dist/Clock.css'

// scroll bar
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

import './global.css'

const queryClient = new QueryClient()

console.log(process.env.NODE_ENV)

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <HashRouter basename={process.env.NODE_ENV === 'production' ? '/clubpenguin' : ''}>
          <App />
        </HashRouter >
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
