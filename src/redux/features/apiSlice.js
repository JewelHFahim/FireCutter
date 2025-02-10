import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "fireCutterApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api",
    baseUrl: "https://artisan-backend-mauve.vercel.app/api",
    prepareHeaders: () => {},
  }),
  endpoints: () => ({}),
  tagTypes: ["users", "products", "orders", "carts"],
});

export const { useGetPokemonByNameQuery } = apiSlice;
