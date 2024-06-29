import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {} as any | null,
  cart: [] as Array<any>,
  totalPrice: 0,
  totalQuantity: 0,
};

const ReduxState = createSlice({
  name: "SWMG",
  initialState,
  reducers: {
    loginUser: (state, { payload }: PayloadAction<any>) => {
      state.currentUser = payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
    clearCart: (state) => {
      state.cart = [];
      state.totalQuantity = 0;
    },
    addToCart: (state, { payload }: PayloadAction<any>) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (check >= 0) {
        state.cart[check].cartQuantity += 1;
      } else {
        state.cart.push({
          ...payload,
          cartQuantity: 1,
        });
      }
      state.totalQuantity += 1;
    },
    removeFromCart: (state, { payload }: PayloadAction<any>) => {
      const check = state.cart.findIndex((el) => el._id === payload._id);

      if (state.cart[check].cartQuantity > 1) {
        state.cart[check].cartQuantity -= 1;
      } else {
        state.cart = state.cart.filter((el) => el._id !== payload._id);
      }

      state.totalQuantity -= 1;
    },
    remove: (state, { payload }: PayloadAction<any>) => {
      state.cart = state.cart.filter((el) => el._id !== payload._id);
    },
  },
});

export const {
  loginUser,
  logoutUser,
  addToCart,
  clearCart,
  removeFromCart,
  remove,
} = ReduxState.actions;

export default ReduxState.reducer;
