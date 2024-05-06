import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice";
import moviesReducer from "./slices/moviesSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    nav: navSlice,
    movies: moviesReducer,
    user: userReducer,
  },
});
