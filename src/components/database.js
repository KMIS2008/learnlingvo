import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyBhyNb9k6wBqjaqz_c59ZhYvYSAb22LpBw",
    authDomain: "learnlingvo-fb7e1.firebaseapp.com",
    databaseURL: "https://learnlingvo-fb7e1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "learnlingvo-fb7e1",
    storageBucket: "learnlingvo-fb7e1.appspot.com",
    messagingSenderId: "576098443295",
    appId: "1:576098443295:web:fe35ff740f67b23418752a",
    measurementId: "G-DD4PDXLMXL"
  }
  const app = initializeApp(firebaseConfig);
  export const db = getDatabase(app);
  export const auth = getAuth(app);