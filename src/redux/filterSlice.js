import { createSlice } from '@reduxjs/toolkit';


const filterSlice = createSlice({
    name: "filter",
    initialState: {
      filter: {  
        languages: "",
        levels: "",
        prices: "",
      }
    },

    reducers: {
      addFilter(state, action) {
        state.filter= action.payload;
      },
    },

  });
  
  export const filterReducer = filterSlice.reducer;
  export const { addFilter } = filterSlice.actions;
