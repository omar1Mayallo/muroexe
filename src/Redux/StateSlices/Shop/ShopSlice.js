import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getAllCollectionsObjects} from "../../../Firebase/Firebase-config";

const initialState = {shopData: [], isLoading: false, error: null};
export const fetchDataStart = createAsyncThunk("fetchData", async () => {
  const res = await getAllCollectionsObjects();
  return res;
});
const shopSlice = createSlice({
  name: "ShopData",
  initialState,
  reducers: {
    // selectCollection: (state, action) => {
    //   state.shopData = state.cartItems, action.payload;
    // },
  },
  extraReducers: {
    [fetchDataStart.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchDataStart.fulfilled]: (state, action) => {
      state.shopData = action.payload;
      state.isLoading = false;
    },
    [fetchDataStart.rejected]: (state) => {
      state.error = true;
      state.isLoading = false;
    },
  },
});
// export const {updateShopData} = shopSlice.actions;
export default shopSlice.reducer;

// export const fetchCategoriesStart = () => createAction("ShopData/fetchStart");

// export const fetchCategoriesSuccess = (categoriesArray) =>
//   createAction("ShopData/fetchSuccess", () => categoriesArray);

// export const fetchCategoriesFailure = (error) =>
//   createAction("ShopData/fetchFailed", () => error);

// export const fetchCategoriesStartAsync = () => {
//   return async (dispatch) => {
//     dispatch(fetchCategoriesStart());
//     try {
//       const categoriesArray = await getShopDataToMap("shopData");
//       dispatch(fetchCategoriesSuccess(categoriesArray));
//       console.log(categoriesArray);
//     } catch (error) {
//       dispatch(fetchCategoriesFailure(error));
//     }
//   };
// };
