const { apiSlice } = require("../apiSlice");

const porductApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: ()=> "/products",
      invalidatesTags: ["products"],
    }),

    productDetails: builder.query({
      query: (id)=> `/products/${id}`,
      invalidatesTags: ["products"],
    }),
    
  }),
});


export const { useGetAllProductsQuery, useProductDetailsQuery } = porductApis;
export default porductApis;
