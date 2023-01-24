import Link from 'next/link'
import { EXAMPLE_POST_IDS } from '../lib/posts'

export default function Homepage() {
  const examplePostLinks = EXAMPLE_POST_IDS
    .map(postId => `/posts/${postId}`)

  return (
    <>
      <h1>Blog</h1>

      <h3>Check out some recent posts</h3>

      <nav style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: '1fr 1fr'
      }}>
        {examplePostLinks.map((page, i) => (
          <Link key={page} href={page} style={{
            padding: '1em',
            background: '#e3e3e3'
          }}>
            <strong>Post {i + 1}</strong> →
          </Link>
        ))}
      </nav>
    </>
  )
}