---
name: landing-page
description: Generate complete, high-converting landing pages for professional services. Use when creating homepage, services page, or any standalone conversion-focused page for lawyers, accountants, consultants. Triggers on: landing page, page d'accueil, page de services, page de conversion.
---

# Landing Page — Professions Libérales

## Structure obligatoire (11 éléments)

### 1. Navigation
- Logo + nom cabinet
- Liens vers les sections clés
- CTA principal bien visible (ex: "Prendre RDV")
- Sticky sur desktop, hamburger sur mobile

### 2. Hero Section (above the fold)
- H1 : Promesse claire en 8-12 mots
- Sous-titre : qui vous êtes + pour qui + ville
- CTA principal + CTA secondaire
- Image/photo professionnelle ou illustration
- Pas de stock photo générique

### 3. Barre de confiance (social proof)
- Logos de médias / barreaux / ordres
- Nombre de clients / dossiers / années
- Note Google si disponible

### 4. Problème / Accroche
- Valider le problème du visiteur en 2-3 phrases
- "Vous faites face à..." / "Votre entreprise a besoin de..."

### 5. Services
- 3-6 services max en cards
- Icône + titre + description courte + lien
- Pas de liste exhaustive — diriger vers page Services

### 6. Processus / Comment ça marche
- 3-4 étapes simples
- Rassurer sur la simplicité de démarrer

### 7. Témoignages
- 2-3 témoignages avec nom, prénom, contexte
- Photo si possible
- Spécifiques (pas de "très professionnel")

### 8. À propos / L'équipe
- Photo du fondateur ou de l'équipe
- Histoire courte et humaine
- Formations et accréditations pertinentes

### 9. FAQ
- 5-8 questions fréquentes
- Utiliser `FAQPage` Schema.org
- Réduire l'anxiété d'achat / de premier contact

### 10. CTA final
- Répéter le CTA principal
- Urgence douce si pertinent
- Multiple formats : formulaire + téléphone + email

### 11. Footer
- Coordonnées complètes
- Liens mentions légales + RGPD
- Réseaux sociaux
- Horaires si cabinet physique

## Technologies
- Next.js 15 App Router
- Tailwind CSS v4
- Framer Motion pour animations scroll
- shadcn/ui pour composants
- Schema.org JSON-LD pour SEO local

## Objectifs de performance
- LCP < 2.5s
- Score Lighthouse > 90
- First paint < 1s
