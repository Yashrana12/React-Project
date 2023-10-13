import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../Features/AuthSlice/AuthSlice";
import productReducer from "../Features/ProductSlice/ProductSlice";

export const authStore = configureStore({
  reducer: {
    AUTH: authReducer,
    productReducer,
  },
});
