import { createSlice } from '@reduxjs/toolkit';


const teacherSlice = createSlice({
    name: "teachers",
    initialState: {
      isLoading: false,
      isFavorite: [],
    },

    reducers: {
      addFavorite(state, action) {
        state.isFavorite.push(action.payload);
      },
      removeFavorite(state, action) {
        state.isFavorite = state.isFavorite.filter((item) => item.surname !== action.payload.surname);
      },
    },

  });
  
  export const teacherReducer = teacherSlice.reducer;
  export const { addFavorite, removeFavorite } = teacherSlice.actions;