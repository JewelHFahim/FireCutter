const { apiSlice } = require("../apiSlice");

const porductApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    getAllProducts: builder.query({
      query: (page)=> `/products/?page=${page}`,
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
