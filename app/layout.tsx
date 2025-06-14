import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MortiSabbat || Visual Novel',
  description: 'Created by Dennis290699',
  generator: 'Morti Sabbat',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
