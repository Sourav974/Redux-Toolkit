import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productReducer from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productReducer,
  },
});

export default store;
