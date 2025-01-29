const { apiSlice } = require("../apiSlice");

const userApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({

    userDetails: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["users"],
    }),

  }),
});

export const { useUserDetailsQuery } = userApis;
export default userApis;
