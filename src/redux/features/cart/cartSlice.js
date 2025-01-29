const { createSlice } = require("@reduxjs/toolkit");

const initialState = JSON.parse(localStorage.getItem("cart")) || {
  products: [],
  total: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ADD TO CART
    addToCart: (state, { payload }) => {
      const existing = state.products?.find(
        (product) =>
          product._id === payload._id &&
          product.sizes === payload.sizes &&
          product.colors === payload.colors
      );
      if (existing) {
        existing.quantity += +1;
      } else {
        state.products.push({ ...payload, quantity: payload?.quantity || 1 });
      }

      state.total = Number(state.total) + Number(payload.sale_price);
      state.totalQuantity += 1;

      localStorage.setItem("cart", JSON.stringify(state));
    },

    // SINGLE REMOVE FROM CART
    singleRemoveFromCart: (state, { payload }) => {
      const existing = state.products?.find(
        (product) => product._id === payload._id
      );

      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1;
      } else {
        state.products = state.products?.filter(
          (product) => product?._id !== existing?._id
        );
      }
      state.total = state.total - existing.sale_price;
      state.totalQuantity -= 1;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    // REMOVE FROM CART
    removeFromCart: (state, { payload }) => {
      const existing = state.products?.find(
        (product) => product._id === payload._id
      );

      state.products = state.products?.filter(
        (product) => product?._id !== existing?._id
      );
      state.total = state.total - existing.sale_price * existing.quantity;
      state.totalQuantity = state.totalQuantity - existing.quantity;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    // CLEAT CART AFTER SUBMIT
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
      state.totalQuantity = 0;
      localStorage.removeItem("cart");
    },
  },
});

export const { addToCart, clearCart, singleRemoveFromCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
