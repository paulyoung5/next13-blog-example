export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body style={{ fontFamily: 'sans-serif' }}>
        <main style={{
          margin: '0 auto',
          maxWidth: '960px'
        }}>
          {children}
        </main>
      </body>
    </html>
  )
}
