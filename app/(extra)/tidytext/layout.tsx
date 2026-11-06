import React from 'react'


import { Roboto } from 'next/font/google'

import '@/common/styles/tidy-text.scss'

const roboto = Roboto({
  adjustFontFallback: false,
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
})

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
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
