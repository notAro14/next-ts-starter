import api from "./api"

const URLS = {
  fetchUsersUrl: "/users",
}

export interface User {
  id: string
  name: string
  username: string
  email: string
}

export async function fetchUsers() {
  const response = await api.get<User[]>(URLS.fetchUsersUrl, {
    baseURL: "https://jsonplaceholder.typicode.com",
  })
  return response.data
}
