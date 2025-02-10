import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from "./features/apiSlice";
import  cartReducer  from "./features/cart/cartSlice";

// const preloadedState = {
//   cart: JSON.parse(localStorage.getItem("cart")) || {
//     products: [],
//     total: 0,
//     totalQuantity: 0,
//   },
// };


const store = configureStore({
  reducer: {
    cart: cartReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;