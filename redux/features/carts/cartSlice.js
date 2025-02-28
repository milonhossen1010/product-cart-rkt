import { toast } from 'sonner';

const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
  name: 'carts',
  initialState: [],
  reducers: {
    //add to cart
    addToCart: (state, action) => {
      const existingProduct = state.find(
        product => product.productId === action.payload.id
      );

      existingProduct
        ? toast.warning("The product already exist in cart.")
        : (
          state.push({
            ...action.payload,
            id: Date.now(),
            quantity: 1,
            productId: action.payload.id,
          }),
          toast.success("Product Added Successful!")
        );
    },

    //increasement quantity
    increaseQuantity: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      product && product.quantity++;
    },

    // decrement quantity
    decreaseQuantity: (state, action) => {
      const product = state.find(product => product.id === action.payload);
      product && product.quantity > 1 && product.quantity--;
    },

    //remove from cart
    removeFromCart: (state, action) => {
      toast.info("Remove success!")
      return state.filter(product => product.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
