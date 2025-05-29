
import { createSlice } from "@reduxjs/toolkit";
import { products as initialProducts } from "@/app/assets.js";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: initialProducts,
    filteredProducts: initialProducts,
    category: "All",
    price: 1000,
  },
  reducers: {
    filterByCategory: (state, action) => {
      state.category = action.payload;
      state.filteredProducts = state.products.filter((p) =>
        action.payload === "All" ? true : p.category === action.payload
      );
    },
    filterByPrice: (state, action) => {
      state.price = action.payload;
      state.filteredProducts = state.products.filter(
        (p) =>
          (state.category === "All" ? true : p.category === state.category) &&
          p.price <= action.payload
      );
    },
  },
});

export const { filterByCategory, filterByPrice } = productSlice.actions;
export default productSlice.reducer;
