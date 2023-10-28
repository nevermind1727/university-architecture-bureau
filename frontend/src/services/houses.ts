import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { House } from "../utils/types";

export const houseApi = createApi({
  reducerPath: "houseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/houses/" }),
  endpoints: (builder) => ({
    getAllHouses: builder.query<House[], void>({
      query: () => ({
        url: "/",
      }),
    }),
    getHouseById: builder.query<House, string | undefined>({
      query: (id) => ({
        url: `/${id}`,
      }),
    }),
  }),
});

export const { useGetAllHousesQuery, useGetHouseByIdQuery } = houseApi;
