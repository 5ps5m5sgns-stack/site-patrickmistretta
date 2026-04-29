import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center grain"
      style={{ backgroundColor: '#12102A' }}
    >
      <div className="text-center px-6">
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(5rem, 15vw, 12rem)',
            color: '#1E1B3A',
            fontWeight: 300,
            lineHeight: 1,
          }}
          aria-hidden="true"
        >
          404
        </p>
        <h1
          className="mb-4"
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.5rem, 3vw + 0.5rem, 2.5rem)',
            color: '#F9F6F0',
            fontWeight: 300,
          }}
        >
          Page introuvable
        </h1>
        <span className="block w-10 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A961' }} />
        <p className="mb-10 text-sm max-w-sm mx-auto" style={{ color: '#9E9BAF' }}>
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-widest uppercase transition-all hover:gap-4"
          style={{
            border: '1px solid rgba(201,169,97,0.5)',
            color: '#C9A961',
            fontFamily: 'var(--font-dm-sans)',
          }}
        >
          Retour à l'accueil <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
