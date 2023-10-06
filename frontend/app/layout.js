
export const metadata = {
  title: 'E-commerce shop | Welcome to the official site',
  description: 'Discover & search for shopping items.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main">{children}</body>
    </html>
  )
}
