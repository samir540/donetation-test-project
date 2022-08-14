import { configureStore } from "@reduxjs/toolkit";
import { servicesApi } from "../Service/apiService";
import cartReducer from "./cartSlice";
export const store = configureStore({
  reducer: {
    [servicesApi.reducerPath]: servicesApi.reducer,
    cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(servicesApi.middleware),
});
