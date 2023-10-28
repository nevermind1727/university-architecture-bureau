import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Request, RequestParams } from "../utils/types";

export const requestApi = createApi({
  reducerPath: "requestApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/requests/" }),
  endpoints: (builder) => ({
    createRequest: builder.mutation<Request, RequestParams>({
      query: (body: RequestParams) => ({
        url: "/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useCreateRequestMutation } = requestApi;
