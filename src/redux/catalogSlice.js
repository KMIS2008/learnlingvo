import { createSlice } from '@reduxjs/toolkit';
import {fetchCamperCatalog, addReservation} from './operations';

const catalogSlice = createSlice({
    name: "catalog",
    initialState: {
      items: [],
      isLoading: false,
      error: null,
      isFavorite: [],
      isReservetion:[],
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
        .addCase(fetchCamperCatalog.pending, (state, _) => {
          state.isLoading = true;
        })
        .addCase(addReservation.pending, (state, _) => {
          state.isLoading = true;
        })
        .addCase(fetchCamperCatalog.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
        })
        .addCase(addReservation.fulfilled, (state, action) => {
          state.isLoading = false;
          state.error = null;
          state.isReservetion.push(action.payload);
        })
        .addCase(fetchCamperCatalog.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })
        .addCase(addReservation.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        });;
    },
  });
  
  export const catalogReducer = catalogSlice.reducer;
  export const { addFavorite, removeFavorite } = catalogSlice.actions;