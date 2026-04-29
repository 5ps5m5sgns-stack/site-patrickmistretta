import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales et politique de confidentialité du site de Patrick Mistretta.',
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <>
      <section
        className="pt-40 pb-20 grain"
        style={{ backgroundColor: '#12102A' }}
        aria-labelledby="page-title"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h1
            id="page-title"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4vw + 1rem, 4rem)',
              color: '#F9F6F0',
              fontWeight: 300,
            }}
          >
            Mentions légales
          </h1>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#F9F6F0' }}>
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {[
            {
              title: 'Éditeur du site',
              content: [
                'Patrick Mistretta',
                'Expert en droit pénal et droit médical',
                'Email : contact@patrickmistretta.fr',
              ],
            },
            {
              title: 'Hébergement',
              content: ["Les informations d'hébergement sont disponibles sur demande."],
            },
            {
              title: 'Propriété intellectuelle',
              content: [
                "L'ensemble du contenu de ce site (textes, publications, analyses) est la propriété exclusive de Patrick Mistretta, sauf mention contraire.",
                'Toute reproduction, même partielle, est soumise à autorisation préalable.',
              ],
            },
            {
              title: 'Données personnelles',
              content: [
                'Ce site ne collecte aucune donnée personnelle à des fins commerciales.',
                'Les données transmises via le formulaire de contact sont utilisées uniquement pour répondre à votre message.',
                "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.",
                'Pour exercer ces droits : contact@patrickmistretta.fr',
              ],
            },
            {
              title: 'Cookies',
              content: [
                "Ce site n'utilise pas de cookies de traçage ou publicitaires.",
              ],
            },
            {
              title: 'Responsabilité',
              content: [
                'Les informations publiées sur ce site ont un caractère informatif et ne sauraient constituer un avis juridique.',
                'Patrick Mistretta ne saurait être tenu responsable des éventuelles erreurs ou omissions.',
              ],
            },
          ].map(({ title, content }) => (
            <article key={title}>
              <h2
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '1.5rem',
                  color: '#12102A',
                  fontWeight: 400,
                }}
              >
                {title}
              </h2>
              <span className="block w-8 h-px mb-5" style={{ backgroundColor: '#C9A961' }} />
              <div className="space-y-2">
                {content.map((line, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: '#4A4A5A' }}>
                    {line}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
