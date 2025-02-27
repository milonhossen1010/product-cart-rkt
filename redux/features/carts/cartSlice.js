const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "carts",
  initialState: [],
  reducers: {
    //add to cart
    addToCart: (state, action) => {
       
      const existingProduct = state.find(product => product.productId === action.payload.id)

      existingProduct ? alert("The product alreay exist.") : (
        state.push({
          ...action.payload,
          id: Date.now(),
          quantity: 1,
          productId: action.payload.id
        })
      ) 
      
    }


    //increment quantity

    // decrement quantity


    //remove from cart
    
  }
})


export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;