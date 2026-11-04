import React from 'react'

export const metadata = {
  title: 'Tidy Text editing services',
  description: 'A digital resume.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
