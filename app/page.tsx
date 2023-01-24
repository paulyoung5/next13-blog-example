import Link from 'next/link'

export default function Homepage() {
  const examples = [
    '/posts/1',
    '/posts/2',
    '/posts/3',
    '/posts/4',
  ]

  return (
    <main>
      <h1>Blog</h1>

      <h3>Check out some recent posts</h3>

      <nav style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: '1fr 1fr'
      }}>
        {examples.map((page, i) => (
          <Link key={page} href={page} style={{
            padding: '1em',
            background: '#e3e3e3'
          }}>
            <strong>Post {i + 1}</strong> →
          </Link>
        ))}
      </nav>
    </main>
  )
}