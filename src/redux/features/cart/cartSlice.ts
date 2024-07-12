import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'sonner';

interface CartItem {
  _id: string;
  number: number;
  price: number;
  image: string;
  title: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const find = state.cart.findIndex((item) => item._id === action.payload._id);
      if (find >= 0) {
        state.cart[find].number += 1;
        toast.success('Product Added');
      } else {
        state.cart.push({ ...action.payload, number: 1 }); 
      }
    },
    getCartTotal: (state) => {
      const { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, number } = cartItem;
          const itemTotal = price * number;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += number;
          return cartTotal;
        },
        {
          totalPrice: 0,
          totalQuantity: 0,
        }
      );
      state.totalPrice = parseFloat(totalPrice.toFixed(2));
      state.totalQuantity = totalQuantity;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    increaseItemQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload) {
          return { ...item, number: item.number + 1 };
        }
        return item;
      });
    },
    decreaseItemQuantity: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload) {
          return { ...item, number: item.number - 1 };
        }
        return item;
      });
    },
  },
});

export const { addToCart, getCartTotal, removeItem, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
