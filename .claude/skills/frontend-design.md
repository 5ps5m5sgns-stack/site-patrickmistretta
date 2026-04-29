---
name: frontend-design
description: Create visually unique, production-grade interfaces for professional services websites. Use when designing layouts, choosing visual direction, defining typography or color systems, or auditing a UI for "AI-generic" feel. Triggers on requests about design direction, hero sections, visual identity in code, or before generating any UI.
---

# Frontend Design — Sites pour Professions Libérales

## Quand utiliser
- Avant de coder la moindre page : choisir une direction artistique
- Auditer un design qui "fait template IA"
- Définir le système typographique et chromatique d'un projet
- Briefer une animation ou une mise en page

## Règle d'or
Chaque site doit avoir une **direction artistique assumée**. On choisit UNE direction et on s'y tient sur tout le projet. On ne mélange pas.

## Directions artistiques possibles

### 1. Luxe sobre (avocat haut de gamme, notaire prestigieux)
- Palette désaturée : noir profond, blanc cassé, accent or/cuivre
- Typographie : serif éditoriale (Cormorant, Playfair) + sans-serif neutre (Inter, Söhne)
- Beaucoup d'espace blanc, hiérarchie verticale forte
- Photos en noir et blanc ou très traitées
- Animations très lentes (600-800ms), easing soft

### 2. Éditorial (cabinet de conseil, expertise pointue)
- Mise en page magazine : grille asymétrique, colonnes décalées
- Typographie : très grande pour les titres (clamp 3rem → 7rem), serif marquée
- Citations en exergue, drop caps, filets
- Photos pleine largeur, légendes typées
- Couleurs : 1 ton dominant + 1 accent éditorial (rouge oxblood, bleu klein)

### 3. Géométrique (architecte, comptable moderne, fintech)
- Grille stricte, modules alignés au pixel
- Typographie : sans-serif géométrique (Space Grotesk, Geist)
- Formes : cercles, traits, motifs répétitifs
- Couleurs primaires saturées sur fond neutre
- Animations : translations propres, pas de bounce

### 4. Organique (médecin, ostéopathe, sage-femme)
- Formes douces, blobs, dégradés diffus
- Typographie : humanist sans (Inter, DM Sans) + serif douce (Fraunces)
- Couleurs : tons naturels (vert sauge, terracotta, sable, bleu poudré)
- Photos chaleureuses, peau, lumière naturelle
- Animations : ease-in-out longues, fade généreux

## Typographie par profession

| Profession | Pairing recommandé |
|---|---|
| Avocat / Notaire | Cormorant Garamond (titres) + Inter (corps) |
| Comptable / Audit | Space Grotesk (titres) + Inter (corps) |
| Médecin / Santé | Fraunces (titres) + DM Sans (corps) |
| Architecte | Söhne / Neue Haas Grotesk (tout) |
| Conseil | Editorial New (titres) + Söhne (corps) |

Toujours **2 typographies max**, jamais plus. Charger via `next/font/google` avec `display: 'swap'`.

## Couleurs par profession (point de départ, à personnaliser)

| Profession | Dominante | Neutre | Accent |
|---|---|---|---|
| Avocat | Marine #0A1F44 | Crème #F5F1E8 | Or #C9A961 |
| Notaire | Bordeaux #5B1F2A | Ivoire #FAF7F2 | Bronze #8B6F47 |
| Comptable | Bleu nuit #1B2A4E | Gris perle #ECEEF2 | Vert sauge #6B8E7F |
| Médecin | Vert d'eau #5A8E8E | Blanc cassé #F8F9F6 | Menthe #B8D8C8 |
| Architecte | Noir #0E0E0E | Béton #D4D2CD | Terracotta #C66B3D |

**Jamais** les couleurs Tailwind par défaut (bg-blue-500, bg-purple-600, etc.) sans les avoir personnalisées dans `tailwind.config`.

## Anti-patterns (à éviter absolument)

- ❌ Hero avec gradient violet/rose "SaaS" générique
- ❌ Trois cards alignées sans hiérarchie ni respiration
- ❌ Icônes Lucide sans personnalité, posées sur tous les blocs
- ❌ Section "Pourquoi nous choisir" avec 4 colonnes égales
- ❌ Stock photos d'équipe en chemise blanche fond gris
- ❌ Boutons arrondis 8px qui ressemblent à du shadcn brut
- ❌ Animations sur chaque scroll (bruit visuel)
- ❌ Fond blanc pur partout (manque d'atmosphère)
- ❌ Mélanger luxe sobre + géométrique dans le même site

## Patterns à privilégier

- ✅ UN moment fort dans la page (un grand titre, une photo pleine largeur, une citation)
- ✅ Asymétrie contrôlée : casser la grille de temps en temps
- ✅ Texture de fond : grain SVG, dégradé subtil, bruit
- ✅ Hiérarchie typographique forte : 60-80px titre vs 16-18px corps
- ✅ Photos retouchées dans la palette du site
- ✅ Détails signés : un trait, un cadre, un underline custom

## Process avant de coder
1. Lire le brief client (ou le déduire de la profession)
2. Choisir UNE direction artistique parmi les 4
3. Générer la palette via brand-identity.md
4. Choisir le pairing typographique
5. Décrire en 3 phrases l'atmosphère visuelle visée
6. **Seulement après**, ouvrir le code
