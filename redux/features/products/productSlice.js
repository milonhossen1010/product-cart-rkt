const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: 1,
    name: 'Fan',
    price: 100,
    category: 'Male',
    image:
      'https://images.unsplash.com/photo-1618941716939-553df3c6c278?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Laptop',
    price: 150,
    category: 'Male',
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Shoe',
    price: 120,
    category: 'Male',
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Bag',
    price: 180,
    category: 'Male',
    image:
      'https://plus.unsplash.com/premium_photo-1680392544041-d89413b561ce?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Mobile',
    price: 140,
    category: 'Male',
    image:
      'https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];


const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action) => {
     
      state.push({
        id: state.length > 0 ? state[state.length - 1].id : 1,
        ...action.payload
      })
      
    }
  }

});




export const { addProduct } = productSlice.actions;
export default productSlice.reducer;