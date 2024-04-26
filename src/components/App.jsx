import { lazy } from 'react';
// import {useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from "react-router-dom";
// import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';
// import { getDatabase } from 'firebase/database';

const AppLayout = lazy(() => import('./AppLayout/AppLayout'));
const HomePage = lazy(() => import('../Pages/HomePage/HomePage'));
const Teachers = lazy(() => import('../Pages/Teachers/Teachers'));
const FavoritePage = lazy(() => import('../Pages/FavoritePage/FavoritePage'));


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
// const app = initializeApp(firebaseConfig);

export const App = () => {

// useEffect(() => {
//   const db = getDatabase(app);

// console.log(db)
// },);

  return (
    <div>

      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="teacher" element={<Teachers/>}/>
          <Route path="favorite" element={<FavoritePage/>}/>
        </Route>
        <Route path="*" element={<HomePage/>} />
      </Routes>

      <GlobalStyle/>
    </div>
    
  );
};

export default App;
