/* eslint-disable*/
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  post: [],
  loading: false,
  error: false
};

export const fetchApi = createAsyncThunk("get/getpost", async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await response.json();
  console.log("data.res", data);
  return data;
});

export const postApi = createSlice({
  name: "post",
  initialState,
  reducers: null,
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.loading = true;
        state.error = false;
        console.log("Reducer - fetchApi.pending:", state);
      })
      .addCase(fetchApi.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.post = action.payload;

      })
      .addCase(fetchApi.rejected, (state) => {
        state.loading = false;
        state.error = true;
        console.log("rejected:", state);
      });
  }
});
