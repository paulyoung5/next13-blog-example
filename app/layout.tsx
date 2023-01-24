export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body style={{ fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
