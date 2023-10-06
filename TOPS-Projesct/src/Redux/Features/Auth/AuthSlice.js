import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: {}, token: "" },
  reducers: {
    login: (state, action) => {
      console.log("========", action);
      // state.user = payload?.data;
      // state.token = payload?.
      // localStorage.setItem("userInfo", JSON.stringify(payload?.data));
      localStorage;
    },
    logout: (state) => {
      state.user = {};
      localStorage.clear();
    },
  },
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;
