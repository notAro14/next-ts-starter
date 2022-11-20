import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query/react"
import { rootSliceApi } from "src/api/root.slice.api"
import { logger } from "./middleware/logger"

export const store = configureStore({
  reducer: {
    [rootSliceApi.reducerPath]: rootSliceApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, rootSliceApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
