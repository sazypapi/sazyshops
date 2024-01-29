import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartitems";
import siteItems from "../siteitems";
const initialState = {
  cartItems: cartItems,
  amount: 1,
  total: 0,
  isLoading: true,
  shopStuff: siteItems,
  isClicked: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increaseAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount = cartItem.amount + 1;
    },
    decreaseAmount: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      // if (cartItem.amount < 1) {
      //   return;
      // }
      cartItem.amount = cartItem.amount - 1;
    },
    total: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
    openCart: (state) => {
      state.isClicked = true;
    },
    closeCart: (state) => {
      state.isClicked = false;
    },
    addToCart: (state, action) => {
      const itemId = action.payload;
      const findItem = state.cartItems.find((item) => item.id === itemId);
      if (findItem) {
        findItem.amount = findItem.amount + 1;
        return;
      }
      let newItem = state.shopStuff.find((item) => item.id === itemId);
      state.cartItems = [...state.cartItems, newItem];
    },
  },
});
console.log(cartItems);
export const {
  clearCart,
  removeItem,
  increaseAmount,
  decreaseAmount,
  total,
  openCart,
  closeCart,
  addToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
