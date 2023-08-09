import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slices/categorySlice";
export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})