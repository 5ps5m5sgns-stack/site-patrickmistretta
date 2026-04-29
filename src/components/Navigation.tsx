'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/publications', label: 'Publications' },
  { href: '/contact', label: 'Contact' },
]

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const bgStyle = mounted && scrolled
    ? { backgroundColor: 'rgba(18,16,42,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,169,97,0.15)' }
    : { backgroundColor: 'transparent', borderBottom: '1px solid transparent' }

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ transition: 'background-color 0.3s, border-color 0.3s', ...bgStyle }}>
      <nav
        className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl tracking-wide transition-opacity hover:opacity-80"
          style={{ color: '#F9F6F0', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic' }}
          aria-label="Patrick Mistretta — retour à l'accueil"
        >
          Patrick Mistretta
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {links.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <li key={href}>
                <Link
                  href={href}
                  className="relative text-sm tracking-widest uppercase pb-1 transition-colors duration-200"
                  style={{
                    color: isActive ? '#C9A961' : '#E8E3D8',
                    fontFamily: 'var(--font-dm-sans)',
                    borderBottom: isActive ? '1px solid #C9A961' : '1px solid transparent',
                  }}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 items-center justify-center"
          style={{ minWidth: '44px', minHeight: '44px', color: '#F9F6F0' }}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span
            className="block w-6 h-px"
            style={{
              backgroundColor: '#F9F6F0',
              transition: 'transform 0.3s',
              transformOrigin: 'center',
              transform: open ? 'translateY(4px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block w-6 h-px"
            style={{
              backgroundColor: '#F9F6F0',
              transition: 'opacity 0.3s',
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-px"
            style={{
              backgroundColor: '#F9F6F0',
              transition: 'transform 0.3s',
              transformOrigin: 'center',
              transform: open ? 'translateY(-4px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        style={{
          backgroundColor: '#12102A',
          borderTop: '1px solid rgba(201,169,97,0.2)',
          overflow: 'hidden',
          maxHeight: open ? '300px' : '0',
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        <ul className="flex flex-col px-6 py-6 gap-5" role="list">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block text-lg tracking-widest uppercase transition-colors"
                style={{
                  color: pathname === href ? '#C9A961' : '#E8E3D8',
                  fontFamily: 'var(--font-dm-sans)',
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
