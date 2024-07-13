import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

export interface IProduct {
  _id: string;
  image: string;
  title: string;
  // name: string;
  brand: string;
  availableQuantity: number;
  price: number;
  rating: number;
  description: string;
}

// Cart item interface
export interface ICartItem extends IProduct {
  cartQuantity: number;
}

// Initial state interface
export interface ICartState {
  items: ICartItem[];
  totalOrderPrice: number;
}

const initialState: ICartState = {
  items: [],
  totalOrderPrice: 0,
};

// Cart slice
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item._id === product._id);

      if (existingItemIndex !== -1) {
        // If the product already exists in the cart, increase its cart quantity
        const existingItem = state.items[existingItemIndex];
        if (existingItem.availableQuantity > 0) {
          state.items[existingItemIndex] = {
            ...existingItem,
            cartQuantity: existingItem.cartQuantity + 1,
          };
          state.totalOrderPrice += product.price;
        } else {
          toast.error('Product is out of stock');
        }
      } else {
        // If the product is not in the cart, add it with cart quantity 1
        if (product.availableQuantity > 0) {
          state.items.push({ ...product, cartQuantity: 1 });
          state.totalOrderPrice += product.price;
        } else {
          toast.error('Product is out of stock');
        }
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        state.totalOrderPrice -= existingItem.price * existingItem.cartQuantity;
        existingItem.availableQuantity += existingItem.cartQuantity;
        state.items = state.items.filter((item) => item._id !== productId);
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        if (existingItem.availableQuantity > 0) {
          existingItem.cartQuantity += 1;
          existingItem.availableQuantity -= 1;
          state.totalOrderPrice += existingItem.price;
        } else {
          toast.error('Product is out of stock');
        }
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      if (existingItem) {
        if (existingItem.cartQuantity > 1) {
          existingItem.cartQuantity -= 1;
          existingItem.availableQuantity += 1;
          state.totalOrderPrice -= existingItem.price;
        } else {
          state.totalOrderPrice -= existingItem.price;
          existingItem.availableQuantity += 1;
          state.items = state.items.filter((item) => item._id !== productId);
        }
      }
    },
    resetCart: (state) => {
      state.items = [];
      state.totalOrderPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;
