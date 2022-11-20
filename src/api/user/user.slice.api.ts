import { rootSliceApi } from "src/api/root.slice.api"
import { makeQueryFn } from "src/store/utils/makeQueryFn"

import UserService from "./user.service"
import { USER_TAG } from "./user.constants"
import { User } from "./user.type"

export const userSliceApi = rootSliceApi.injectEndpoints({
  endpoints(builder) {
    return {
      getUsers: builder.query<User[], void>({
        queryFn: makeQueryFn(UserService.get),
        providesTags: [USER_TAG],
      }),
      getUserById: builder.query<User, string>({
        queryFn: makeQueryFn(UserService.getById),
        providesTags: (_result, _error, arg) => [{ type: USER_TAG, id: arg }],
      }),
    }
  },
})

export const { useGetUsersQuery, useGetUserByIdQuery } = userSliceApi
