const { apiSlice } = require("../apiSlice");

const orderApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    createOrder: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/orders",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),

    getOrders: builder.query({
      query: (userId) => `/orders/my_orders/${userId}`,
      providesTags: ["orders"],
    }),

    getSingleOrders: builder.query({
      query: (id) => `/orders/${id}`,
      providesTags: ["orders"],
    }),



  }),
});

export const { useCreateOrderMutation, useGetOrdersQuery, useGetSingleOrdersQuery } = orderApis;
export default orderApis;
