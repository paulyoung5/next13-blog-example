import { cache } from 'react'

const USERS_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

export const fetchUser = cache(async (userId: string): Promise<{
  id: number;
  username: string;
} | null> => {
  const response = await fetch(`${USERS_API_ENDPOINT}/${userId}`)
  const user = response.json() || null

  return user
})