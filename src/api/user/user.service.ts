import { AxiosError } from "axios"

import type { ServiceResponse } from "src/types/service.type"
import api from "src/api"

import { User } from "./user.type"
import { USER_URLS } from "./user.constants"

export async function get(): Promise<ServiceResponse<User[]>> {
  try {
    const response = await api.get<User[]>(USER_URLS.all())
    return { ok: true, data: response.data }
  } catch (e) {
    const msg = e instanceof AxiosError ? e.message : "Failed request"
    return { ok: false, error: msg }
  }
}
export async function getById(id: string): Promise<ServiceResponse<User>> {
  try {
    const response = await api.get<User>(USER_URLS.byId(id))
    return { ok: true, data: response.data }
  } catch (e) {
    const msg = e instanceof AxiosError ? e.message : "Failed request"
    const status = e instanceof AxiosError ? e.response?.status : undefined
    return { ok: false, error: msg, status }
  }
}

export const UserService = {
  get,
  getById,
}

export default UserService
