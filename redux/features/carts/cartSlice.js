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
        ? alert('The product alreay exist.')
        : state.push({
            ...action.payload,
            id: Date.now(),
            quantity: 1,
            productId: action.payload.id,
          });
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
      return state.filter(product => product.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
