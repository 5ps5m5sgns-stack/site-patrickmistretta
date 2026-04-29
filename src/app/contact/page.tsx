import type { Metadata } from 'next'
import { Mail, Twitter, Linkedin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactez Patrick Mistretta — expert en droit pénal et droit médical. Par email ou via les réseaux sociaux.',
  openGraph: {
    title: 'Contact — Patrick Mistretta',
    description: 'Contactez Patrick Mistretta par email ou via les réseaux sociaux.',
  },
}

export default function ContactPage() {
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
            Échangeons
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
            Contact
          </h1>
        </div>
      </section>

      {/* ── CONTENU CONTACT ── */}
      <section className="py-24" style={{ backgroundColor: '#F9F6F0' }}>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">

          {/* Infos */}
          <div>
            <h2
              className="mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.75rem, 3vw + 0.5rem, 2.75rem)',
                color: '#12102A',
                fontWeight: 400,
              }}
            >
              Entrer en contact
            </h2>
            <span className="block w-10 h-px mb-8" style={{ backgroundColor: '#C9A961' }} />
            <p className="leading-relaxed mb-10" style={{ color: '#4A4A5A' }}>
              Vous avez une question sur une publication, souhaitez échanger sur un sujet de recherche
              ou envisagez une collaboration ? N'hésitez pas à écrire.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:contact@patrickmistretta.fr"
                className="flex items-center gap-4 group min-h-[44px]"
                aria-label="Envoyer un email à Patrick Mistretta"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#12102A' }}
                >
                  <Mail size={18} color="#C9A961" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: '#8C1C13', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    Email
                  </p>
                  <p
                    className="transition-colors group-hover:text-bordeaux"
                    style={{ color: '#12102A', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    contact@patrickmistretta.fr
                  </p>
                </div>
              </a>

              {/* Twitter */}
              <a
                href="https://twitter.com/patrickmistret3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group min-h-[44px]"
                aria-label="Profil Twitter de Patrick Mistretta (nouvelle fenêtre)"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#12102A' }}
                >
                  <Twitter size={18} color="#C9A961" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: '#8C1C13', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    Twitter / X
                  </p>
                  <p style={{ color: '#12102A', fontFamily: 'var(--font-dm-sans)' }}>
                    @patrickmistret3
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/patrick-mistretta-10b49aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group min-h-[44px]"
                aria-label="Profil LinkedIn de Patrick Mistretta (nouvelle fenêtre)"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: '#12102A' }}
                >
                  <Linkedin size={18} color="#C9A961" aria-hidden="true" />
                </div>
                <div>
                  <p
                    className="text-xs tracking-widest uppercase mb-1"
                    style={{ color: '#8C1C13', fontFamily: 'var(--font-dm-sans)' }}
                  >
                    LinkedIn
                  </p>
                  <p style={{ color: '#12102A', fontFamily: 'var(--font-dm-sans)' }}>
                    Patrick Mistretta
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Formulaire */}
          <div>
            <h2
              className="mb-4"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.5rem, 2.5vw + 0.5rem, 2.25rem)',
                color: '#12102A',
                fontWeight: 400,
              }}
            >
              Envoyer un message
            </h2>
            <span className="block w-10 h-px mb-8" style={{ backgroundColor: '#C9A961' }} />
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
