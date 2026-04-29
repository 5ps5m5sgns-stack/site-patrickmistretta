'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<Partial<typeof fields>>({})

  const validate = () => {
    const e: Partial<typeof fields> = {}
    if (fields.name.trim().length < 2) e.name = 'Le nom doit contenir au moins 2 caractères'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Adresse email invalide'
    if (fields.message.trim().length < 10) e.message = 'Le message doit contenir au moins 10 caractères'
    return e
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    const body = `Nom : ${fields.name}\nEmail : ${fields.email}\n\n${fields.message}`
    const subject = fields.subject || `Message de ${fields.name}`
    window.location.href = `mailto:contact@patrickmistretta.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <div
        className="p-8 flex flex-col items-center text-center gap-4"
        style={{ backgroundColor: '#F0F7F0', border: '1px solid #6B9E6B' }}
        role="alert"
      >
        <CheckCircle size={32} color="#3A7D44" aria-hidden="true" />
        <p style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.35rem', color: '#12102A' }}>
          Votre messagerie s'ouvre
        </p>
        <p className="text-sm" style={{ color: '#4A4A5A' }}>
          Un brouillon a été préparé avec votre message. Cliquez sur Envoyer dans votre client email.
        </p>
      </div>
    )
  }

  const inputStyle = (field: keyof typeof fields) => ({
    backgroundColor: '#FDFAF5',
    border: `1px solid ${errors[field] ? '#8C1C13' : '#E8E3D8'}`,
    color: '#0D0D0D',
    fontFamily: 'var(--font-dm-sans)',
  })

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-label="Formulaire de contact">
      {/* Nom */}
      <div>
        <label htmlFor="name" className="block text-sm tracking-widest uppercase mb-2"
          style={{ color: '#4A4A5A', fontFamily: 'var(--font-dm-sans)' }}>
          Nom complet <span aria-label="obligatoire" style={{ color: '#8C1C13' }}>*</span>
        </label>
        <input type="text" id="name" autoComplete="name" required
          className="w-full px-4 py-3 text-sm outline-none"
          style={inputStyle('name')}
          value={fields.name}
          onChange={e => { setFields(f => ({ ...f, name: e.target.value })); setErrors(err => ({ ...err, name: undefined })) }}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-err' : undefined}
        />
        {errors.name && <p id="name-err" className="mt-1 text-xs" style={{ color: '#8C1C13' }}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm tracking-widest uppercase mb-2"
          style={{ color: '#4A4A5A', fontFamily: 'var(--font-dm-sans)' }}>
          Email <span aria-label="obligatoire" style={{ color: '#8C1C13' }}>*</span>
        </label>
        <input type="email" id="email" autoComplete="email" required
          className="w-full px-4 py-3 text-sm outline-none"
          style={inputStyle('email')}
          value={fields.email}
          onChange={e => { setFields(f => ({ ...f, email: e.target.value })); setErrors(err => ({ ...err, email: undefined })) }}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-err' : undefined}
        />
        {errors.email && <p id="email-err" className="mt-1 text-xs" style={{ color: '#8C1C13' }}>{errors.email}</p>}
      </div>

      {/* Sujet */}
      <div>
        <label htmlFor="subject" className="block text-sm tracking-widest uppercase mb-2"
          style={{ color: '#4A4A5A', fontFamily: 'var(--font-dm-sans)' }}>
          Sujet
        </label>
        <input type="text" id="subject"
          className="w-full px-4 py-3 text-sm outline-none"
          style={inputStyle('subject')}
          value={fields.subject}
          onChange={e => setFields(f => ({ ...f, subject: e.target.value }))}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm tracking-widest uppercase mb-2"
          style={{ color: '#4A4A5A', fontFamily: 'var(--font-dm-sans)' }}>
          Message <span aria-label="obligatoire" style={{ color: '#8C1C13' }}>*</span>
        </label>
        <textarea id="message" required rows={6}
          className="w-full px-4 py-3 text-sm outline-none resize-vertical"
          style={{ ...inputStyle('message'), minHeight: '140px' }}
          value={fields.message}
          onChange={e => { setFields(f => ({ ...f, message: e.target.value })); setErrors(err => ({ ...err, message: undefined })) }}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'msg-err' : undefined}
        />
        {errors.message && <p id="msg-err" className="mt-1 text-xs" style={{ color: '#8C1C13' }}>{errors.message}</p>}
      </div>

      <button type="submit"
        className="w-full py-4 text-sm tracking-widest uppercase transition-opacity hover:opacity-80 min-h-[44px] flex items-center justify-center gap-2"
        style={{ backgroundColor: '#12102A', color: '#F9F6F0', fontFamily: 'var(--font-dm-sans)' }}>
        Envoyer le message <ArrowRight size={16} aria-hidden="true" />
      </button>

      <p className="text-xs" style={{ color: '#9E9BAF' }}>
        * Champs obligatoires. Votre messagerie s'ouvrira avec le message pré-rempli.
      </p>
    </form>
  )
}
