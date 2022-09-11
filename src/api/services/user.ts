import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface User {
  id: string
  name: string
  username: string
  email: string
}

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
  }),
})

export const { useGetUsersQuery } = userApi
