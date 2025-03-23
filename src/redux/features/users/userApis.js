const { apiSlice } = require("../apiSlice");

const userApis = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userDetails: builder.query({
      query: (id) => `/users/${id}`,
      providesTags: ["users"],
    }),

    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/users/${id}`,
        body: data,
      }),
    }),

  }),
});

export const { useUserDetailsQuery, useUpdateUserMutation } = userApis;
export default userApis;
