import { configureStore } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthSlice";
import {teacherReducer} from './teacherSlice';
import {
  FLUSH,
  persistStore,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const teachersPersistConfig = {
  key: 'teachers',
  storage,
  whitelist: ['favorites'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, AuthReducer),
    teachers: persistReducer(teachersPersistConfig, teacherReducer)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


// import { configureStore } from "@reduxjs/toolkit";
// import { catalogReducer } from "./teacherSlice";
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// export const store = configureStore({
//   reducer: {
//     teacher: catalogReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });