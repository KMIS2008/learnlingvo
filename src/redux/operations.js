import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://6570b71409586eff6641d7fb.mockapi.io";



export const fetchCamperCatalog = createAsyncThunk("catalog/fetchAll", async (_, thunkAPI)=>{
    try {
          const response = await axios.get("/catalog");
          return response.data;  
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }

})

export const addReservation = createAsyncThunk("catalog/addReservation", async ({ name, date, email, message}, thunkAPI)=>{
    try {
        const response = await axios.post("/catalog", { name, date, email, message});
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message)
    }
})
