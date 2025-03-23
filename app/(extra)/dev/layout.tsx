import React from 'react'

import { IBM_Plex_Mono } from 'next/font/google'

import '@/common/styles/dev.scss'

const ibmPlexMono = IBM_Plex_Mono({
  adjustFontFallback: false,
  display: 'swap',
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'Forrest Storrs Developer Portfolio',
  description: 'A digital resume.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibmPlexMono.className}>{children}</body>
    </html>
  )
}
