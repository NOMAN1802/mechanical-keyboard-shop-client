/* eslint-disable prefer-const */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";
type TCartItem =  {
    id: string;
    title: string;
    price: number;
    quantity: number; 
  }
  
 
  type TCartState = {
    cart: TCartItem[];
    amount: number;
    total: number;
    loading: boolean;
  }
  
  const initialState: TCartState = {
    cart: [],
    amount: 0,
    total: 0,
    loading: false
  }

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const itemIndex = state.cart.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
        toast.success('Increased by 1');
      } else {
        let tem = { ...action.payload, quantity: 1 };
        state.cart = [...state.cart, tem];
        toast.success('Added to Cart!');
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const removeItem = state.cart.filter(item => item.id !== action.payload);
      state.cart = removeItem;
    },
    incrementItem: (state, action: PayloadAction<string>) => {
      const indexCart = state.cart.findIndex(item => item.id === action.payload);
      if (state.cart[indexCart].quantity >= 1) {
        state.cart[indexCart].quantity += 1;
      }
    },
    decrementItem: (state, action: PayloadAction<string>) => {
      const indexCart = state.cart.findIndex(item => item.id === action.payload);
      if (state.cart[indexCart].quantity >= 1) {
        state.cart[indexCart].quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  }
});

export const { addToCart, removeFromCart, clearCart, decrementItem, incrementItem } = cartSlice.actions;

export default cartSlice.reducer;
