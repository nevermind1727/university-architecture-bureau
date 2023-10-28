import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Order, OrderParams } from "../utils/types";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/orders/" }),
  endpoints: (builder) => ({
    createOrder: builder.mutation<Order, OrderParams>({
      query: (body: OrderParams) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;
