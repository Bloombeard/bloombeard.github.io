import React from 'react'

import { Advent_Pro, Forum } from 'next/font/google'

import '@/common/styles/wedding.scss'

const forum = Forum({
    adjustFontFallback: false,
    display: 'swap',
    subsets: ['latin'],
    weight: '400',
})

export const metadata = {
  title: 'Zhen & Forrest Wedding Invitation',
  description: 'Join us for a much belated wedding.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={forum.className}>{children}</body>
    </html>
  )
}
