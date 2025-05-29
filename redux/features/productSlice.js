import { createSlice } from "@reduxjs/toolkit";
import { products as initialProducts } from "@/app/assets.js";

const initialState = {
  products: initialProducts,
  filteredProducts: initialProducts,
  singleProduct: null,
  category: "All",
  price: 1000,
};

const productSlice = createSlice({
  name: "product",
  initialState,
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

    getProductById: (state, action) => {
      const productId = action.payload;
      state.singleProduct = state.products.find(
        (p) => String(p._id) === String(productId)
      );
    },
  },
});

export const { filterByCategory, filterByPrice, getProductById } =
  productSlice.actions;

export default productSlice.reducer;
