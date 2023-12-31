import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BE_URL } from "../../../Configue";

const initialState = {
  product: [],
  err: "",
  topTenData: [],
};

export const fetchData = createAsyncThunk("product/fetchData", () => {
  return axios.get(`${BE_URL}product/getAll`).then((resData) => {
    // console.log("resData", resData);
    return resData?.data;
  });
});

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  ({ id, index }) => {
    console.log("id,index", { id, index });
    return axios.delete(`${BE_URL}product/delete/${id}`).then((resData) => {
      return index;
      // console.log("res", resData);
    });
  }
);

export const addProduct = createAsyncThunk(
  "product/addProduct",
  (productdata) => {
    return axios
      .post(`${BE_URL}product/create`, productdata, {
        headers: {
          "Content-Type": "application/json",

          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((resData) => {
        return resData?.data;
      });
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add: (state, { payload }) => {},
    update: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.product = payload?.data;
        // console.log("payload", payload);
      })
      .addCase(fetchData.rejected, (state) => {
        state.err = "Data not founds...!!!";
      })
      .addCase(addProduct.fulfilled, (state, { payload }) => {
        state.product.unshift(payload?.data);
      })
      .addCase(deleteProduct.fulfilled, (state, { payload }) => {
        state.product = state.product.filter((e, i) => i !== payload);
      });
  },
});

export default productSlice.reducer;
export const { add, update } = productSlice.actions;
