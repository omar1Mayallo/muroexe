import { createSlice } from "@reduxjs/toolkit";
import { addToWishlist, removeFromWishlist } from "./wishlistFunc";

const initialState = { wishListItems: [] };

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addItemToWishList: (state, action) => {
      state.wishListItems = addToWishlist(state.wishListItems, action.payload);
    },
    removeItemFromWishList: (state, action) => {
      state.wishListItems = removeFromWishlist(
        state.wishListItems,
        action.payload
      );
    },
    clearWishList: (state) => {
      state.wishListItems = [];
    },
  },
});
export const { addItemToWishList, removeItemFromWishList, clearWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
