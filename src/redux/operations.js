import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { database } from "components/database";
import { ref, child, get } from 'firebase/database';


// axios.defaults.baseURL = "https://6570b71409586eff6641d7fb.mockapi.io";
axios.defaults.baseURL = "https://learnlingvo-fb7e1-default-rtdb.europe-west1.firebasedatabase.app";
// https://firebase.googleapis.com
// learnlingvo-fb7e1
// https://learnlingvo-fb7e1-default-rtdb.europe-west1.firebasedatabase.app/

const dbRef = ref(database);

export const fetchTeachers = createAsyncThunk("teacher", async (_, thunkAPI)=>{
    try {

        const data = await get(child(dbRef, "teacher"));
        if (data.exists()) {
          return data.val();
        } 
        //   const response = await axios.get("/teacher");
        //   return response.data;  
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }

})

// export const fetchCamperCatalog = createAsyncThunk("catalog/fetchAll", async (_, thunkAPI)=>{
//     try {
//           const response = await axios.get("/catalog");
//           return response.data;  
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message)
//     }

// })

// export const addReservation = createAsyncThunk("catalog/addReservation", async ({ name, date, email, message}, thunkAPI)=>{
//     try {
//         const response = await axios.post("/catalog", { name, date, email, message});
//         return response.data;
//     } catch (e) {
//         return thunkAPI.rejectWithValue(e.message)
//     }
// })
