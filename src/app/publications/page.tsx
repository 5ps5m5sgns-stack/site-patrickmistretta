import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Principales publications, notes de recherche, études et colloques de Patrick Mistretta en droit pénal et droit médical.',
  openGraph: {
    title: 'Publications — Patrick Mistretta',
    description:
      'Articles, études, colloques et notes de recherche en droit pénal, droit médical et droit pénal médical.',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: 'Patrick Mistretta',
    jobTitle: 'Expert en droit pénal et droit médical',
    sameAs: ['https://twitter.com/patrickmistret3'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Expertise juridique',
    },
  },
}

const categories = [
  {
    id: 'penal-medical',
    title: 'Droit pénal médical',
    color: '#8C1C13',
    items: [
      { type: 'Ouvrage', title: 'Droit pénal médical', note: 'Ouvrage de référence — disponible en français et en anglais' },
      { type: 'Publication', title: 'Principales publications en droit pénal médical', note: "Corpus d'articles et contributions académiques" },
      { type: 'Notes', title: 'Notes de recherche', note: "Commentaires d'arrêts, analyses de jurisprudence" },
      { type: 'Études', title: 'Études approfondies', note: 'Monographies et travaux de fond' },
      { type: 'Colloque', title: 'Interventions en colloques', note: "Conférences, tables rondes, journées d'études" },
    ],
  },
  {
    id: 'penal',
    title: 'Droit pénal',
    color: '#12102A',
    items: [
      { type: 'Publication', title: 'Principales publications en droit pénal', note: 'Articles et contributions académiques' },
      { type: 'Notes', title: 'Notes et commentaires', note: 'Analyses de jurisprudence pénale' },
      { type: 'Études', title: 'Études de doctrine', note: 'Travaux de recherche approfondis' },
      { type: 'Colloque', title: 'Interventions en colloques', note: 'Conférences et communications scientifiques' },
    ],
  },
  {
    id: 'medical',
    title: 'Droit médical',
    color: '#4A6741',
    items: [
      { type: 'Publication', title: 'Principales publications en droit médical', note: 'Articles et contributions académiques' },
      { type: 'Notes', title: 'Notes de recherche', note: "Commentaires d'arrêts en droit de la santé" },
      { type: 'Études', title: 'Études spécialisées', note: 'Travaux sur la responsabilité médicale' },
      { type: 'Colloque', title: 'Interventions en colloques', note: 'Conférences en droit de la santé' },
    ],
  },
]

export default function PublicationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── EN-TÊTE ── */}
      <section
        className="pt-40 pb-20 grain"
        style={{ backgroundColor: '#12102A' }}
        aria-labelledby="page-title"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: '#C9A961', fontFamily: 'var(--font-dm-sans)' }}
          >
            Œuvres & recherches
          </p>
          <h1
            id="page-title"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2.5rem, 5vw + 1rem, 5.5rem)',
              color: '#F9F6F0',
              fontWeight: 300,
              lineHeight: 1.1,
            }}
          >
            Publications
          </h1>
        </div>
      </section>

      {/* ── OUVRAGE PHARE ── */}
      <section
        className="py-20"
        style={{ backgroundColor: '#F9F6F0', borderBottom: '1px solid #E8E3D8' }}
        aria-labelledby="book-highlight-title"
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div
            className="flex-shrink-0 w-40 h-56 flex items-center justify-center"
            style={{ backgroundColor: '#12102A', border: '1px solid rgba(201,169,97,0.3)' }}
            aria-hidden="true"
          >
            <div className="text-center px-4">
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '0.85rem',
                  color: '#C9A961',
                  fontStyle: 'italic',
                  lineHeight: 1.4,
                }}
              >
                Droit Pénal<br />Médical
              </p>
              <span className="block w-6 h-px mx-auto my-2" style={{ backgroundColor: '#C9A961' }} />
              <p style={{ fontFamily: 'var(--font-dm-sans)', fontSize: '0.6rem', color: '#9E9BAF' }}>
                P. MISTRETTA
              </p>
            </div>
          </div>
          <div className="flex-1">
            <p
              className="text-xs tracking-[0.3em] uppercase mb-4"
              style={{ color: '#8C1C13', fontFamily: 'var(--font-dm-sans)' }}
            >
              Ouvrage de référence
            </p>
            <h2
              id="book-highlight-title"
              className="mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)',
                color: '#12102A',
                fontWeight: 400,
              }}
            >
              Droit Pénal Médical
            </h2>
            <span className="block w-10 h-px mb-6" style={{ backgroundColor: '#C9A961' }} />
            <p className="text-sm leading-relaxed mb-6 max-w-lg" style={{ color: '#4A4A5A' }}>
              L'ouvrage fondateur qui explore avec rigueur et humanité les infractions commises dans le
              champ médical. Disponible en résumé en français et en anglais.
            </p>
            <a
              href="mailto:contact@patrickmistretta.fr?subject=Acquisition - Droit Pénal Médical"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm tracking-widest uppercase transition-all hover:gap-4"
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
      </section>

      {/* ── CATÉGORIES ── */}
      <section className="py-24" style={{ backgroundColor: '#F9F6F0' }}>
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: '#8C1C13', fontFamily: 'var(--font-dm-sans)' }}
          >
            Par domaine
          </p>
          <h2
            className="mb-4"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)',
              color: '#12102A',
              fontWeight: 400,
            }}
          >
            Corpus de publications
          </h2>
          <span className="block w-10 h-px mb-16" style={{ backgroundColor: '#C9A961' }} />

          <div className="space-y-20">
            {categories.map((cat) => (
              <div key={cat.id}>
                <h3
                  className="mb-8 pb-4"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(1.35rem, 2vw + 0.5rem, 1.875rem)',
                    color: '#12102A',
                    fontWeight: 400,
                    borderBottom: `2px solid ${cat.color}`,
                    display: 'inline-block',
                  }}
                >
                  {cat.title}
                </h3>
                <ul className="space-y-4" role="list">
                  {cat.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-6 py-5 px-6 transition-colors"
                      style={{
                        backgroundColor: '#FDFAF5',
                        border: '1px solid #E8E3D8',
                      }}
                    >
                      <span
                        className="flex-shrink-0 px-2 py-1 text-xs tracking-widest uppercase"
                        style={{
                          backgroundColor: cat.color,
                          color: '#F9F6F0',
                          fontFamily: 'var(--font-dm-sans)',
                          fontSize: '0.65rem',
                        }}
                      >
                        {item.type}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p
                          style={{
                            fontFamily: 'var(--font-cormorant)',
                            fontSize: '1.1rem',
                            color: '#12102A',
                            fontWeight: 400,
                          }}
                        >
                          {item.title}
                        </p>
                        {item.note && (
                          <p className="mt-1 text-sm" style={{ color: '#6B6880' }}>
                            {item.note}
                          </p>
                        )}
                      </div>
                      <a
                        href="mailto:contact@patrickmistretta.fr"
                        className="flex-shrink-0 mt-1"
                        aria-label={`Contacter pour en savoir plus sur ${item.title}`}
                        style={{ color: '#C9A961' }}
                      >
                        <ExternalLink size={16} aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20 grain"
        style={{ backgroundColor: '#12102A' }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.5rem)',
              color: '#F9F6F0',
              fontStyle: 'italic',
            }}
          >
            Une question sur un article ou un ouvrage ?
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-widest uppercase transition-all hover:gap-4"
              style={{
                border: '1px solid rgba(201,169,97,0.5)',
                color: '#C9A961',
                fontFamily: 'var(--font-dm-sans)',
              }}
            >
              Prendre contact <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
