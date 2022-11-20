import type { BaseQueryFn } from "@reduxjs/toolkit/query/react"
import type { ServiceResponse } from "src/types/service.type"

export function makeQueryFn<U, T>(fn: (arg: U) => Promise<ServiceResponse<T>>) {
  const queryFn: BaseQueryFn<U, T> = async (arg: U) => {
    const meta = await fn(arg)
    if (meta.ok) return { data: meta.data }
    return { error: meta.error }
  }
  return queryFn
}
