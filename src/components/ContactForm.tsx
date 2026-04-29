'use client'

import { useActionState } from 'react'
import { sendContact, type ContactState } from '@/actions/contact'
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

const initialState: ContactState = { status: 'idle', message: '' }

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContact, initialState)

  if (state.status === 'success') {
    return (
      <div
        className="p-8 flex flex-col items-center text-center gap-4"
        style={{ backgroundColor: '#F0F7F0', border: '1px solid #6B9E6B' }}
        role="alert"
        aria-live="polite"
      >
        <CheckCircle size={32} color="#3A7D44" aria-hidden="true" />
        <p
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '1.35rem',
            color: '#12102A',
          }}
        >
          Message envoyé
        </p>
        <p className="text-sm" style={{ color: '#4A4A5A' }}>
          {state.message}
        </p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-6" aria-label="Formulaire de contact" noValidate>
      {state.status === 'error' && !state.errors && (
        <div
          className="flex items-start gap-3 p-4"
          style={{ backgroundColor: '#FDF0EE', border: '1px solid #8C1C13' }}
          role="alert"
          aria-live="assertive"
        >
          <AlertCircle size={18} color="#8C1C13" className="flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-sm" style={{ color: '#8C1C13' }}>
            {state.message}
          </p>
        </div>
      )}

      {/* Nom */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm tracking-widest uppercase mb-2"
          style={{ color: '#4A4A5A', fontFamily: 'var(--font-dm-sans)' }}
        >
          Nom complet <span aria-label="obligatoire" style={{ color: '#8C1C13' }}>*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
          disabled={pending}
          aria-required="true"
          aria-invalid={!!state.errors?.name}
          aria-describedby={state.errors?.name ? 'name-error' : undefined}
          className="w-full px-4 py-3 text-sm outline-none transition-colors disabled:opacity-60"
          style={{
            backgroundColor: '#FDFAF5',
            border: `1px solid ${state.errors?.name ? '#8C1C13' : '#E8E3D8'}`,
            color: '#0D0D0D',
            fontFamily: 'var(--font-dm-sans)',
          }}
        />
        {state.errors?.name && (
          <p id="name-error" className="mt-1 text-xs" style={{ color: '#8C1C13' }} role="alert">
            {state.errors.name[0]}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm tracking-widest uppercase mb-2"
          style={{ color: '#4A4A5A', fontFamily: 'var(--font-dm-sans)' }}
        >
          Email <span aria-label="obligatoire" style={{ color: '#8C1C13' }}>*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          disabled={pending}
          aria-required="true"
          aria-invalid={!!state.errors?.email}
          aria-describedby={state.errors?.email ? 'email-error' : undefined}
          className="w-full px-4 py-3 text-sm outline-none transition-colors disabled:opacity-60"
          style={{
            backgroundColor: '#FDFAF5',
            border: `1px solid ${state.errors?.email ? '#8C1C13' : '#E8E3D8'}`,
            color: '#0D0D0D',
            fontFamily: 'var(--font-dm-sans)',
          }}
        />
        {state.errors?.email && (
          <p id="email-error" className="mt-1 text-xs" style={{ color: '#8C1C13' }} role="alert">
            {state.errors.email[0]}
          </p>
        )}
      </div>

      {/* Sujet */}
      <div>
        <label
          htmlFor="subject"
          className="block text-sm tracking-widest uppercase mb-2"
          style={{ color: '#4A4A5A', fontFamily: 'var(--font-dm-sans)' }}
        >
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          autoComplete="off"
          disabled={pending}
          className="w-full px-4 py-3 text-sm outline-none disabled:opacity-60"
          style={{
            backgroundColor: '#FDFAF5',
            border: '1px solid #E8E3D8',
            color: '#0D0D0D',
            fontFamily: 'var(--font-dm-sans)',
          }}
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm tracking-widest uppercase mb-2"
          style={{ color: '#4A4A5A', fontFamily: 'var(--font-dm-sans)' }}
        >
          Message <span aria-label="obligatoire" style={{ color: '#8C1C13' }}>*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          disabled={pending}
          aria-required="true"
          aria-invalid={!!state.errors?.message}
          aria-describedby={state.errors?.message ? 'message-error' : undefined}
          className="w-full px-4 py-3 text-sm outline-none resize-vertical disabled:opacity-60"
          style={{
            backgroundColor: '#FDFAF5',
            border: `1px solid ${state.errors?.message ? '#8C1C13' : '#E8E3D8'}`,
            color: '#0D0D0D',
            fontFamily: 'var(--font-dm-sans)',
            minHeight: '140px',
          }}
        />
        {state.errors?.message && (
          <p id="message-error" className="mt-1 text-xs" style={{ color: '#8C1C13' }} role="alert">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-80 disabled:opacity-50 min-h-[44px] flex items-center justify-center gap-2"
        style={{
          backgroundColor: '#12102A',
          color: '#F9F6F0',
          fontFamily: 'var(--font-dm-sans)',
        }}
        aria-disabled={pending}
      >
        {pending ? (
          <>
            <span
              className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
              aria-hidden="true"
            />
            Envoi en cours…
          </>
        ) : (
          <>
            Envoyer le message <ArrowRight size={16} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-xs" style={{ color: '#9E9BAF' }}>
        * Champs obligatoires. Vos données ne sont pas transmises à des tiers.
      </p>
    </form>
  )
}
