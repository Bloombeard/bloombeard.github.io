import React from 'react'

import { Averia_Serif_Libre } from 'next/font/google'

import '@/common/styles/cards.scss'

const averia = Averia_Serif_Libre({
  adjustFontFallback: false,
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'ARTKYM Cards',
  description: 'A web app for playing A Road that Knows Your Name with a standard deck of cards',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={averia.className}>{children}</body>
    </html>
  )
}
