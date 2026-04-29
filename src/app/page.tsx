import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Scale, Stethoscope } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Patrick Mistretta — Droit Pénal & Droit Médical',
  description:
    'Expert en droit pénal et droit médical. Auteur du Droit Pénal Médical, publications académiques, analyses et colloques. Découvrez une approche humaniste du droit.',
  openGraph: {
    title: 'Patrick Mistretta — Droit Pénal & Droit Médical',
    description:
      'Expert en droit pénal et droit médical. Auteur du Droit Pénal Médical, publications académiques, analyses et colloques.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Patrick Mistretta',
  description:
    'Expert en droit pénal et droit médical. Auteur, chercheur et enseignant spécialisé dans les intersections entre droit pénal et médecine.',
  url: 'https://patrickmistretta.fr',
  email: 'contact@patrickmistretta.fr',
  sameAs: [
    'https://twitter.com/patrickmistret3',
  ],
  knowsAbout: ['Droit pénal', 'Droit médical', 'Droit pénal médical'],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col justify-end grain"
        style={{ backgroundColor: '#12102A' }}
        aria-labelledby="hero-title"
      >
        {/* Gradient subtil en haut */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(140,28,19,0.12) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-6 pb-20 pt-40 relative z-10">
          {/* Surtitre */}
          <p
            className="text-xs tracking-[0.3em] uppercase mb-10"
            style={{ color: '#C9A961', fontFamily: 'var(--font-dm-sans)' }}
          >
            Expert juridique
          </p>

          {/* Titre principal */}
          <h1
            id="hero-title"
            className="mb-8 max-w-4xl"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 6vw + 1rem, 7rem)',
              color: '#F9F6F0',
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Patrick
            <br />
            <em>Mistretta</em>
          </h1>

          {/* Citation */}
          <blockquote className="mb-12 max-w-2xl">
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.25rem, 2vw + 0.5rem, 1.75rem)',
                color: '#E8E3D8',
                fontStyle: 'italic',
                fontWeight: 300,
              }}
            >
              « Il y a quelque chose d'infini dans les passions humaines. »
            </p>
          </blockquote>

          {/* Séparateur or */}
          <span className="block w-10 h-px mb-10" style={{ backgroundColor: '#C9A961' }} />

          {/* Spécialités badges */}
          <div className="flex flex-wrap gap-3 mb-14">
            {['Droit pénal', 'Droit médical', 'Droit pénal médical'].map((s) => (
              <span
                key={s}
                className="px-4 py-2 text-sm tracking-wider"
                style={{
                  border: '1px solid rgba(201,169,97,0.35)',
                  color: '#C9A961',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                {s}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-widest uppercase transition-all duration-200 hover:gap-4"
              style={{
                backgroundColor: '#8C1C13',
                color: '#F9F6F0',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              Voir les publications
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-widest uppercase transition-colors duration-200 hover:text-white"
              style={{
                border: '1px solid rgba(232,227,216,0.3)',
                color: '#E8E3D8',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              À propos
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" aria-hidden="true">
          <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, rgba(201,169,97,0.8), transparent)' }} />
        </div>
      </section>

      {/* ── DOMAINES D'EXPERTISE ── */}
      <section
        className="py-28"
        style={{ backgroundColor: '#F9F6F0' }}
        aria-labelledby="expertise-title"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: '#8C1C13', fontFamily: 'var(--font-dm-sans)' }}
          >
            Domaines
          </p>
          <h2
            id="expertise-title"
            className="mb-4 max-w-xl"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3.5rem)',
              color: '#12102A',
              fontWeight: 400,
            }}
          >
            Une approche humaniste du droit
          </h2>
          <span className="block w-10 h-px mb-16" style={{ backgroundColor: '#C9A961' }} />

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ backgroundColor: '#E8E3D8' }}
          >
            {[
              {
                icon: Scale,
                title: 'Droit pénal',
                desc:
                  'Analyse de la responsabilité pénale, des infractions et de la procédure criminelle. Une lecture rigoureuse et nuancée des mécanismes répressifs de notre société.',
                href: '/publications',
              },
              {
                icon: Stethoscope,
                title: 'Droit médical',
                desc:
                  "À l'intersection de la médecine et du droit, étude des obligations, responsabilités et droits des patients et des praticiens de santé.",
                href: '/publications',
              },
              {
                icon: BookOpen,
                title: 'Droit pénal médical',
                desc:
                  'Spécialité fondatrice de la démarche de Patrick Mistretta : les infractions commises dans le champ médical, sujet de son ouvrage de référence.',
                href: '/publications',
              },
            ].map(({ icon: Icon, title, desc, href }) => (
              <article
                key={title}
                className="group p-10 transition-colors duration-300"
                style={{ backgroundColor: '#F9F6F0' }}
              >
                <div
                  className="w-12 h-12 flex items-center justify-center mb-8"
                  style={{ backgroundColor: '#12102A' }}
                >
                  <Icon size={20} color="#C9A961" aria-hidden="true" />
                </div>
                <h3
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.5rem',
                    color: '#12102A',
                    fontWeight: 400,
                  }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed mb-8" style={{ color: '#4A4A5A' }}>
                  {desc}
                </p>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-xs tracking-widest uppercase transition-colors group-hover:gap-3"
                  style={{ color: '#8C1C13', fontFamily: 'var(--font-dm-sans)' }}
                >
                  Explorer <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUVRAGE PHARE ── */}
      <section
        className="py-28 grain"
        style={{ backgroundColor: '#12102A' }}
        aria-labelledby="book-title"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Cover placeholder */}
          <div
            className="aspect-[3/4] max-w-sm mx-auto md:mx-0 flex items-center justify-center relative"
            style={{ backgroundColor: '#1E1B3A', border: '1px solid rgba(201,169,97,0.25)' }}
            aria-hidden="true"
          >
            <div className="text-center px-8">
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.1rem',
                  color: '#C9A961',
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}
              >
                Droit Pénal<br />Médical
              </p>
              <span className="block w-8 h-px mx-auto my-4" style={{ backgroundColor: '#C9A961' }} />
              <p
                style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '0.75rem',
                  color: '#9E9BAF',
                  letterSpacing: '0.1em',
                }}
              >
                PATRICK MISTRETTA
              </p>
            </div>
          </div>

          {/* Contenu */}
          <div>
            <p
              className="text-xs tracking-[0.3em] uppercase mb-6"
              style={{ color: '#C9A961', fontFamily: 'var(--font-dm-sans)' }}
            >
              Ouvrage de référence
            </p>
            <h2
              id="book-title"
              className="mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(2rem, 3vw + 0.5rem, 3rem)',
                color: '#F9F6F0',
                fontWeight: 400,
              }}
            >
              Droit Pénal Médical
            </h2>
            <span className="block w-10 h-px mb-8" style={{ backgroundColor: '#C9A961' }} />
            <p className="leading-relaxed mb-6" style={{ color: '#9E9BAF' }}>
              Un ouvrage qui explore avec rigueur la rencontre entre droit pénal et pratique médicale.
              Entre la faute du médecin et la protection du patient, entre la sanction et la prévention,
              Patrick Mistretta trace une cartographie précise et humaine d'un droit en pleine évolution.
            </p>
            <p className="text-sm leading-relaxed mb-10" style={{ color: '#6B6880' }}>
              Disponible en français et résumé en anglais.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:contact@patrickmistretta.fr?subject=Commande - Droit Pénal Médical"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-widest uppercase transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: '#8C1C13',
                  color: '#F9F6F0',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                Acquérir l'ouvrage <ArrowRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA CONTACT ── */}
      <section
        className="py-24"
        style={{ backgroundColor: '#F9F6F0', borderTop: '1px solid #E8E3D8' }}
        aria-labelledby="cta-title"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: '#8C1C13', fontFamily: 'var(--font-dm-sans)' }}
          >
            Vous souhaitez échanger ?
          </p>
          <h2
            id="cta-title"
            className="mb-8 max-w-2xl mx-auto"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 3.5vw + 0.5rem, 3.5rem)',
              color: '#12102A',
              fontWeight: 400,
            }}
          >
            Entrons en contact
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase transition-all hover:gap-4"
            style={{
              backgroundColor: '#12102A',
              color: '#F9F6F0',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            Écrire à Patrick Mistretta <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
