import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
    name: "favorite",
    initialState: {
      isLoading: false,
      isFavorite: [],
    },

    reducers: {
      addFavorite(state, action) {
        const newItem = action.payload;
        state.isFavorite.push(newItem);
      },
      removeFavorite(state, action) {
        state.isFavorite = state.isFavorite.filter((item) => item._id !== action.payload._id);
      },
    },

  });
  
  export const favoriteReducer = favoriteSlice.reducer;
  export const { addFavorite, removeFavorite } = favoriteSlice.actions;