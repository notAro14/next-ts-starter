import api from "./api"

export const URLS = {
  fetchUsersUrl: "https://jsonplaceholder.typicode.com/users",
}

export interface User {
  id: string
  name: string
  username: string
  email: string
  website: string
}

export async function fetchUsers() {
  const response = await api.get<User[]>(URLS.fetchUsersUrl)
  return response.data
}
