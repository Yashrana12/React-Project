import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/AuthSlice/AuthSlice";
import productReducer from "../Features/ProductSlice/ProductSlice";
import searchReducer from "../Features/SearchSlice/SearchSlice";
import cartReducer from "../Features/CardSlice/CartSlice";

export const authStore = configureStore({
  reducer: {
    authReducer,
    productReducer,
    searchReducer,
    cartReducer,
  },
});
