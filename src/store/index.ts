import { configureStore } from "@reduxjs/toolkit"
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query/react"
import { userSliceApi } from "src/components/user/user.slice.api"

export const store = configureStore({
  reducer: {
    [userSliceApi.reducerPath]: userSliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userSliceApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
