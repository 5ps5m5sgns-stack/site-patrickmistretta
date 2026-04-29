import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À propos',
  description:
    'Patrick Mistretta, expert en droit pénal et droit médical. Découvrez son parcours, sa philosophie et son approche humaniste du droit.',
  openGraph: {
    title: 'À propos — Patrick Mistretta',
    description:
      'Expert en droit pénal et droit médical. Parcours, philosophie et approche humaniste du droit.',
  },
}

export default function AProposPage() {
  return (
    <>
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
            Qui suis-je
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
            À propos
          </h1>
        </div>
      </section>

      {/* ── BIOGRAPHIE ── */}
      <section
        className="py-24"
        style={{ backgroundColor: '#F9F6F0' }}
        aria-labelledby="bio-title"
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16">
          {/* Texte principal */}
          <div className="md:col-span-7">
            <h2
              id="bio-title"
              className="mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)',
                color: '#12102A',
                fontWeight: 400,
              }}
            >
              Le juriste derrière les publications
            </h2>
            <span className="block w-10 h-px mb-10" style={{ backgroundColor: '#C9A961' }} />

            <div className="space-y-6 text-base leading-relaxed" style={{ color: '#2A2A3A' }}>
              <p>
                Patrick Mistretta consacre sa carrière à deux branches du droit qui dépassent le seul
                raisonnement juridique : le <strong>droit pénal</strong> et le <strong>droit médical</strong>.
                Ce qui l'attire dans ces domaines, c'est leur dimension profondément humaine — les passions,
                les fragilités, les erreurs qui constituent la matière même de ces droits.
              </p>
              <p>
                Ses travaux explorent la frontière entre la faute pénale et la pratique médicale, entre la
                protection du patient et la responsabilité du praticien. Une frontière où les grands équilibres
                de notre droit sont constamment mis à l'épreuve des réalités cliniques et humaines.
              </p>
              <p>
                Ses publications — articles, études, interventions en colloques — construisent une œuvre
                cohérente et rigoureuse, fondée sur une conviction : le droit ne peut se comprendre sans
                l'humain qui en est l'objet.
              </p>
            </div>
          </div>

          {/* Encadré citation */}
          <aside className="md:col-span-5 flex flex-col justify-center">
            <figure
              className="p-10"
              style={{
                backgroundColor: '#12102A',
                borderLeft: '3px solid #C9A961',
              }}
            >
              <blockquote>
                <p
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.5rem',
                    color: '#F9F6F0',
                    fontStyle: 'italic',
                    fontWeight: 300,
                    lineHeight: 1.5,
                  }}
                >
                  « Il y a quelque chose d'infini dans les passions humaines. »
                </p>
              </blockquote>
              <figcaption className="mt-6">
                <span className="block w-8 h-px mb-4" style={{ backgroundColor: '#C9A961' }} />
                <p
                  className="text-sm tracking-widest uppercase"
                  style={{ color: '#9E9BAF', fontFamily: 'var(--font-dm-sans)' }}
                >
                  Patrick Mistretta
                </p>
              </figcaption>
            </figure>
          </aside>
        </div>
      </section>

      {/* ── APPROCHE ── */}
      <section
        className="py-24"
        style={{ backgroundColor: '#E8E3D8' }}
        aria-labelledby="approche-title"
      >
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-6"
            style={{ color: '#8C1C13', fontFamily: 'var(--font-dm-sans)' }}
          >
            Philosophie
          </p>
          <h2
            id="approche-title"
            className="mb-4 max-w-xl"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)',
              color: '#12102A',
              fontWeight: 400,
            }}
          >
            Au-delà du raisonnement juridique
          </h2>
          <span className="block w-10 h-px mb-16" style={{ backgroundColor: '#C9A961' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                num: '01',
                title: 'Le délinquant et sa réalité',
                text: "Comprendre la transgression sans la minimiser — saisir ce qui pousse un être humain à franchir les limites que la société s'est données.",
              },
              {
                num: '02',
                title: 'La victime au centre',
                text: "Le droit pénal médical remet la victime — le patient lésé — au coeur du questionnement juridique, sans jamais occulter la complexité de l'acte médical.",
              },
              {
                num: '03',
                title: 'Le médecin sous le regard du droit',
                text: "Analyser la responsabilité pénale du praticien de santé avec rigueur, en tenant compte des contraintes spécifiques de l'exercice médical.",
              },
            ].map(({ num, title, text }) => (
              <article key={num}>
                <p
                  className="text-4xl mb-6"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    color: '#C9A961',
                    fontWeight: 300,
                    opacity: 0.6,
                  }}
                  aria-hidden="true"
                >
                  {num}
                </p>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.35rem',
                    color: '#12102A',
                    fontWeight: 400,
                  }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A4A5A' }}>
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="py-20"
        style={{ backgroundColor: '#F9F6F0', borderTop: '1px solid #E8E3D8' }}
      >
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2rem)',
              color: '#12102A',
            }}
          >
            Découvrez l'œuvre publiée
          </p>
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-widest uppercase transition-all hover:gap-4"
            style={{
              backgroundColor: '#12102A',
              color: '#F9F6F0',
              fontFamily: 'var(--font-dm-sans)',
            }}
          >
            Voir les publications <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
