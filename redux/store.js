import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './features/searchSlice';
import productReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";


export const store = configureStore({
  reducer: {
    search: searchReducer,
    product: productReducer,
    cart: cartReducer,
  },
});