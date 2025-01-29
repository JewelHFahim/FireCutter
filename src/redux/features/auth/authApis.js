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
  }),
});

export const { useLoginMutation } = authApis;
export default authApis;
