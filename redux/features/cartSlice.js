// redux/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems") || "[]")
      : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find(
        (i) => i._id === item._id && i.size === item.size
      );
      if (existing) {
        existing.quantity += item.quantity || 1;
      } else {
        state.cartItems.push({ ...item, quantity: item.quantity || 1 });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    updateCartItem: (state, action) => {
      const { _id, size, quantity } = action.payload;
      if (quantity === 0) {
        state.cartItems = state.cartItems.filter(
          (item) => !(item._id === _id && item.size === size)
        );
      } else {
        state.cartItems = state.cartItems.map((item) =>
          item._id === _id && item.size === size ? { ...item, quantity } : item
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const selectSubtotal = (state) =>
  state.cart?.cartItems?.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 1),
    0
  ) || 0;

export const selectDeliveryFee = (state) => state.cart?.delivery_fee ?? 0;

export const selectTotal = (state) =>
  selectSubtotal(state) + selectDeliveryFee(state);

export const selectCurrency = (state) => state.cart?.currency || "₹";

  

export const { addToCart, updateCartItem, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
