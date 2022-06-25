import {createSlice} from "@reduxjs/toolkit";
import {addedToCart, removeFromCart, decreaseQuantity} from "./CartFunc";

const initialState = {cartItems: []};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //add To cart and increase quantity if item was exist
    addItem: (state, action) => {
      state.cartItems = addedToCart(state.cartItems, action.payload);
    },
    //delete from cart
    deleteItem: (state, action) => {
      state.cartItems = removeFromCart(state.cartItems, action.payload);
    },
    //decrease quantity
    removeItem: (state, action) => {
      state.cartItems = decreaseQuantity(state.cartItems, action.payload);
    },
    //clear All Cart Items
    clearItems: (state) => {
      state.cartItems = [];
    },
  },
});

export const {addItem, deleteItem, clearItems, removeItem} = cartSlice.actions;
export default cartSlice.reducer;
