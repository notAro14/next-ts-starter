export type ServiceResponse<T> =
  | { ok: true; data: T }
  | { ok: false; error: string; status?: number }
