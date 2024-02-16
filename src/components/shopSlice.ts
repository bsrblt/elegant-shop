import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Product = { id: string; title: string; price: number; quantity: number };
export interface ShopState {
  cart: Product[];
}
const initialState: ShopState = {
  cart: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existedItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existedItem) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        state.cart.push({ ...action.payload });
      }
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      const existedItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (existedItem!.quantity > 1) {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        );
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
    },
  },
});

export const { addItem, removeItem } = shopSlice.actions;
export default shopSlice.reducer;
