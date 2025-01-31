const { apiSlice } = require("../apiSlice");

const authApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    login: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/users/login",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),

    logout: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/users/logout",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),


  }),
});

export const { useLoginMutation, useLogoutMutation } = authApis;
export default authApis;
