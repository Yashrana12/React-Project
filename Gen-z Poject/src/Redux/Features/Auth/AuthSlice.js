import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: {}, token: "" },
  reducers: {
    login: (state, { payload }) => {
      state.user = payload?.data;
      state.token = payload?.token;
      localStorage.setItem("userInfo", JSON.stringify(payload?.data));
      localStorage.setItem("userInfo", JSON.stringify(payload?.token));
    },
    logout: (state) => {
      state.user = {};
      localStorage.clear("userInfo");
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
