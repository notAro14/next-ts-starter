import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"

import UserService from "./user.service"
import { USER_TAG } from "./user.constants"

export const userSliceApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: [USER_TAG],
  endpoints(builder) {
    return {
      getUsers: builder.query<
        Awaited<ReturnType<typeof UserService.get>>,
        void
      >({
        async queryFn() {
          const data = await UserService.get()
          return {
            data,
          }
        },
        providesTags: [USER_TAG],
      }),
      getUserById: builder.query<
        Awaited<ReturnType<typeof UserService.getById>>,
        number
      >({
        async queryFn(id) {
          const data = await UserService.getById(id)
          return {
            data,
          }
        },
        providesTags: (result) => [{ type: USER_TAG, id: result?.id }],
      }),
    }
  },
})

export const { useGetUsersQuery, useGetUserByIdQuery } = userSliceApi
