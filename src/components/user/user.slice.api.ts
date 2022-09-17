import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react"

import { fetchUsers, User } from "src/api/user.api"

export const userSliceApi = createApi({
  reducerPath: "userApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["Users"],
  endpoints(builder) {
    return {
      getUsers: builder.query<User[], void>({
        async queryFn() {
          const data = await fetchUsers()
          return {
            data,
          }
        },
      }),
    }
  },
})

export const { useGetUsersQuery } = userSliceApi
