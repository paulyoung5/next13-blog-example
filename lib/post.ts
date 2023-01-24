import { cache } from 'react'

const POSTS_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPost = cache(async (postId: string): Promise<{
  userId: number
  id: number
  title: string
  body: string
} | null> => {
  const response = await fetch(`${POSTS_API_ENDPOINT}/${postId}`)
  const post = response.json() || null

  return post
})