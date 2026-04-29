import type { Metadata } from 'next'
import { cormorant, dmSans } from '@/lib/fonts'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://patrickmistretta.fr'),
  title: {
    default: 'Patrick Mistretta — Droit Pénal & Droit Médical',
    template: '%s | Patrick Mistretta',
  },
  description:
    'Expert en droit pénal et droit médical. Auteur de référence, publications académiques, analyse approfondie du droit pénal médical.',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://patrickmistretta.fr',
    siteName: 'Patrick Mistretta',
    title: 'Patrick Mistretta — Droit Pénal & Droit Médical',
    description:
      'Expert en droit pénal et droit médical. Auteur de référence, publications académiques, analyse approfondie du droit pénal médical.',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@patrickmistret3',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
