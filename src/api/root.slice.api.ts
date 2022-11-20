import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"
import { USER_TAG } from "src/api/user/user.constants"

export const rootSliceApi = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  tagTypes: [USER_TAG],
  endpoints: () => ({}),
})

export default rootSliceApi
