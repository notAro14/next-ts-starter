import type { User } from "./user-list.types"

export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  if (!res.ok) {
    throw new Error("Failed to get users")
  }
  return res.json() as Promise<User[]>
}
