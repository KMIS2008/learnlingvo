import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   token: '',
//   isLoggedIn: false,
// };

// export const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     addToken: (state, { payload }) => {
//       state.token = payload;
//       state.isLoggedIn = true;
//     },
//     deleteToken: state => {
//       state.token = '';
//       state.isLoggedIn = false;
//     },
//   },
// });

const initialState = {
  email: null,
  token: null,
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addToken: (state, action) => {
        const { email, accessToken } = action.payload;
        state.email = email;
        state.token = accessToken;
        state.isLoggedIn = true;
    },
    deleteToken: state => {
        state.email = null;
        state.token = null;
        state.isLoggedIn = false;
    },
  },
});

export const { addToken, deleteToken } = authSlice.actions;
export const AuthReducer = authSlice.reducer;