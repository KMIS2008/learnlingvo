import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ThemeProvider } from 'styled-components';
import { 
  // persistor, 
  store } from './redux/store';
// import { PersistGate } from 'redux-persist/integration/react';

// import * as firebase from 'firebase';


// const firebaseConfig = {
//   apiKey: "AIzaSyBhyNb9k6wBqjaqz_c59ZhYvYSAb22LpBw",
//   authDomain: "learnlingvo-fb7e1.firebaseapp.com",
//   databaseURL: "https://learnlingvo-fb7e1-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "learnlingvo-fb7e1",
//   storageBucket: "learnlingvo-fb7e1.appspot.com",
//   messagingSenderId: "576098443295",
//   appId: "1:576098443295:web:fe35ff740f67b23418752a",
//   measurementId: "G-DD4PDXLMXL"
// }

// firebase.initializeApp(firebaseConfig);

const theme = {
  colors: {
    yellow:'#F4C550',
    beigelight: '#FBE9BA',
    greyblue:'#9FBAAE',
    bluelight:'#CBDED3',
    bluedark: "#9FB7CE",
    blue:"#BFD6EA",
    rosedark:'#E0A39A',
    rose:'#F2C0BD',
    beige: "#F0AA8D",
    roselight:"#F4C8BA",
    hover:"#FFDC86",
  },

  spacing: value => `${value * 4}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter basename="learnlingvo">
    {/* <PersistGate loading={null} persistor={persistor}> */}
        <Provider store={store}>
          <ThemeProvider theme = {theme}>
           <App />
          </ThemeProvider>        
        </Provider>
      {/* </PersistGate> */}
    </BrowserRouter>
  </React.StrictMode>
);


