import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import GlobalNav from '@/components/GlobalNav'
import MobileNav from '@/components/MobileNav'
import GlobalFooter from '@/components/GlobalFooter'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mommy Louise\'s Budget PH - Cash Stuffing & Budget Templates',
  description: 'Transform your finances with beautiful cash stuffing budget templates. Simple, visual, and satisfying budgeting for busy moms.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased flex flex-col min-h-screen">
        <GlobalNav />
        <main className="flex-1 pb-20 md:pb-0">
          {children}
        </main>
        <MobileNav />
        <GlobalFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
