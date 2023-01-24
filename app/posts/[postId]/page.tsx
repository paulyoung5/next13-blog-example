import Link from 'next/link'
import { notFound } from 'next/navigation'

import { EXAMPLE_POST_IDS, fetchPost } from '../../../lib/posts'
import { fetchUser } from '../../../lib/users'

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
  const postIds = EXAMPLE_POST_IDS

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
  const user = post
    ? await fetchUser(post?.userId.toString())
    : null

  if (post === null || user === null) {
    notFound()
  }

  return (
    <>
      <Link href="/">
        ← Back to homepage
      </Link>
      <h1>{post.title}</h1>
      <h2>by @{user.username}</h2>

      <p>{post.body}</p>
    </>
  )
}