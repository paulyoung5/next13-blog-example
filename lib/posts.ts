import { cache } from 'react'

const POSTS_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

export const EXAMPLE_POST_IDS = [10, 20, 30, 40]

export const fetchPost = cache(async (postId: string): Promise<{
  userId: number
  id: number
  title: string
  body: string
} | null> => {
  console.debug(`\n[posts] 🔍 Fetching post ${postId}`)

  const response = await fetch(`${POSTS_API_ENDPOINT}/${postId}`)
  const post = response.json() || null

  return post
})