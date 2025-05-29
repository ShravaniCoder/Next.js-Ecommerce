import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/searchSlice';
import productReducer from "./features/productSlice";


export const store = configureStore({
  reducer: {
    search: searchReducer,
    product: productReducer,
  },
});