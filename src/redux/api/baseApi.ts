/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://key-craft.vercel.app/api" }),
  tagTypes: ["products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    //* Get Single product
    getProduct: builder.query({
        query: (id) => ({
          url: `/products/${id}`,
          method: "GET",
        }),
        providesTags: ["products"],
      }),
    addProduct: builder.mutation({
      query: (data) => {
        console.log("inside base api", data);
        return {
          url: '/products',
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ['products'],
    }),
    updateProduct: builder.mutation({
      query: (options) => {
        return {
          url: `/products/${options.id}`,
          method: "PUT",
          body: options.data,
        };
      },
      invalidatesTags: ['products'],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ['products'],
    }),
    addOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const { useGetProductsQuery,useGetProductQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation,useAddOrderMutation } = baseApi;
