import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
// import { store } from "./redux/store";

const theme = {
  colors: {
    yellow:'#F4C550',
    beigelight: '#FBE9BA',
    greyblue:'#9FBAAE',
    bluelight:'#CBDED3',
    bluedark: "#9FB7CE",
    blue:"#BFD6EA",
    rosedark:'##E0A39A',
    rose:'#F2C0BD',
    beige: "#F0AA8D",
    roselight:"#F4C8BA",
    hover:"#FFDC86",
  },

  spacing: value => `${value * 5}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter basename="learnlingvo">
      {/* <Provider store={store}> */}
        <ThemeProvider theme = {theme}>
         <App />
       </ThemeProvider>        
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);


