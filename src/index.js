import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { store } from "./redux/store";

const theme = {
  colors: {
    black: '#101828',
    grey:'#475467',
    red:'#E44848',
    yellow:'#FFC531',
    beige:'#F2F4F7',
    white:'#F7F7F7',
    hover:'#d84343',
  },

  spacing: value => `${value * 5}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter basename="orenda-kempera">
      <Provider store={store}>
        <ThemeProvider theme = {theme}>
         <App />
       </ThemeProvider>        
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


