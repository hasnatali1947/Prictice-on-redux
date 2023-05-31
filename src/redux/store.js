/* eslint-disable*/

import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./apiSlice/api";

const store = configureStore({
  reducer: {
    post: postApi.reducer
  }
});

export default store;
