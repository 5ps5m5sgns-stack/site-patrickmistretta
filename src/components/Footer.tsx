import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="grain"
      style={{ backgroundColor: '#12102A', color: '#E8E3D8', borderTop: '1px solid rgba(201,169,97,0.2)' }}
      aria-label="Pied de page"
    >
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Signature */}
        <div>
          <p
            className="text-3xl mb-3"
            style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#F9F6F0' }}
          >
            Patrick Mistretta
          </p>
          <span className="block w-10 h-px mb-4" style={{ backgroundColor: '#C9A961' }} />
          <p className="text-sm leading-relaxed" style={{ color: '#9E9BAF' }}>
            Expert en droit pénal et droit médical.
            <br />
            Auteur de référence, chercheur, enseignant.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Navigation pied de page">
          <p
            className="text-xs tracking-widest uppercase mb-5"
            style={{ color: '#C9A961', fontFamily: 'var(--font-dm-sans)' }}
          >
            Navigation
          </p>
          <ul className="flex flex-col gap-3" role="list">
            {[
              ['/', 'Accueil'],
              ['/a-propos', 'À propos'],
              ['/publications', 'Publications'],
              ['/contact', 'Contact'],
              ['/mentions-legales', 'Mentions légales'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: '#9E9BAF' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p
            className="text-xs tracking-widest uppercase mb-5"
            style={{ color: '#C9A961', fontFamily: 'var(--font-dm-sans)' }}
          >
            Contact
          </p>
          <a
            href="mailto:contact@patrickmistretta.fr"
            className="block text-sm mb-3 transition-colors hover:text-white"
            style={{ color: '#9E9BAF' }}
          >
            contact@patrickmistretta.fr
          </a>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/patrick-mistretta"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase transition-colors hover:text-white"
              style={{ color: '#9E9BAF', fontFamily: 'var(--font-dm-sans)' }}
              aria-label="Profil LinkedIn de Patrick Mistretta (nouvelle fenêtre)"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/patrickmistret3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase transition-colors hover:text-white"
              style={{ color: '#9E9BAF', fontFamily: 'var(--font-dm-sans)' }}
              aria-label="Compte Twitter de Patrick Mistretta (nouvelle fenêtre)"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs" style={{ color: '#6B6880' }}>
            © {year} Patrick Mistretta — Tous droits réservés
          </p>
          <p className="text-xs" style={{ color: '#6B6880' }}>
            Site conçu et développé avec soin
          </p>
        </div>
      </div>
    </footer>
  )
}
