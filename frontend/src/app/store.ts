import { configureStore } from "@reduxjs/toolkit";
import { houseApi } from "../services/houses";
import { requestApi } from "../services/requests";
import { orderApi } from "../services/orders";

export const store = configureStore({
  reducer: {
    [houseApi.reducerPath]: houseApi.reducer,
    [requestApi.reducerPath]: requestApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(houseApi.middleware)
      .concat(requestApi.middleware)
      .concat(orderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
