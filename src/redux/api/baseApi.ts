/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["products"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
              url: "/products",
              method: "GET",
            }),
            providesTags: ["products"],
          }),
    }),
  });
  
  export const {useGetProductsQuery} = baseApi;