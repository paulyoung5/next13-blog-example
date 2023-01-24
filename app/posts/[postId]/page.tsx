import { cache } from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const POSTS_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'
const USERS_API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

const fetchPost = cache(async (postId: string): Promise<{
  userId: number
  id: number
  title: string
  body: string
} | null> => {
  const response = await fetch(`${POSTS_API_ENDPOINT}/${postId}`)
  const post = response.json() || null

  return post
})

const fetchUser = cache(async (userId: string): Promise<{
  id: number;
  username: string;
} | null> => {
  const response = await fetch(`${USERS_API_ENDPOINT}/${userId}`)
  const user = response.json() || null

  return user
})

/**
 * Cache post pages for 
 * @see https://beta.nextjs.org/docs/api-reference/segment-config#revalidate
 */
export const revalidate = 3600

export function generateStaticParams() {
  /**
   * Fetch a bulk list of post IDs from backend to be
   * rendered to static HTML during build
   * (IDs hardcoded for sandbox)
   */
  const postIds = [1, 2, 3, 4, 5]

  /**
   * Return an array of objects with `postId` property
   * @see https://beta.nextjs.org/docs/api-reference/generate-static-params#generatestaticparams
   */
  return postIds.map(postId => ({
    postId: postId.toString()
  }))
}

export default async function PostPage({ params }: {
  params: {
    postId: string
  }
}) {
  const { postId = null } = params

  if (!postId) {
    notFound()
  }

  const post = await fetchPost(params.postId)

  // Fetch the user for this post
  const user = post
    ? await fetchUser(post?.userId.toString())
    : null

  if (post === null || user === null) {
    notFound()
  }

  return (
    <main>
      <Link href="/">
        Back to homepage
      </Link>
      <h1>{post.title}</h1>
      <h2>by @{user.username}</h2>

      <p>{post.body}</p>
    </main>
  )
}