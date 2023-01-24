import { notFound } from 'next/navigation'
import { fetchPost } from '../../../lib/posts'

export default async function Head({ params }: {
  params: {
    postId: string
  }
}) {
  const post = await fetchPost(params.postId)

  if (post === null) {
    return notFound()
  }

  return (
    <>
      <title>{post.title} | Blog</title>
    </>
  );
}
