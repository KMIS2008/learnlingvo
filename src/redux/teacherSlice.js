import { createSlice } from '@reduxjs/toolkit';
import {fetchTeachers} from './operations';

const teacherSlice = createSlice({
    name: "teacher",
    initialState: {
      items: [],
      isLoading: false,
      isLogin:false,
      error: null,
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
    extraReducers: (builder) => {
      builder
        .addCase(fetchTeachers.pending, (state, _) => {
          state.isLoading = true;
        })
        .addCase(fetchTeachers.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(fetchTeachers.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });
    },
  });
  
  export const catalogReducer = teacherSlice.reducer;
  export const { addFavorite, removeFavorite } = teacherSlice.actions;