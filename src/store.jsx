import { configureStore } from "@reduxjs/toolkit";
// import shopReducer from "./features/shopslice";
import cartReducer from "./features/cartslice";
import modalReducer from "./features/modalslice";
export const store = configureStore({
  reducer: {
    // shop: shopReducer,
    cart: cartReducer,
    modal: modalReducer,
  },
});
