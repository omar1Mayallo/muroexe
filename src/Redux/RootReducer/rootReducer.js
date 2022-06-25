import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import userSlice from "../StateSlices/User/userSlice";
import shopSlice from "../StateSlices/Shop/ShopSlice";
import CartSlice from "../StateSlices/Cart/CartSlice";
import wishListSlice from "../StateSlices/Wishlist/WishListSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "wishList"], // only cart & wishlist will be persisted
};
const rootReducer = combineReducers({
  user: userSlice,
  shop: shopSlice,
  cart: CartSlice,
  wishList: wishListSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
