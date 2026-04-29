---
name: brand-identity
description: Generate a unique brand identity (palette, typography, voice) for each new client project before any code is written. Produces a BRAND.md file used by all other skills. Use at project kickoff, when restyling an existing site, or whenever the visual identity feels generic.
---

# Brand Identity — Process avant code

## Règle absolue
**Aucune ligne de code n'est écrite avant que `BRAND.md` n'existe à la racine du projet.**

Le BRAND.md est le contrat visuel du projet. Toutes les autres skills (frontend-design, landing-page, animations) s'y réfèrent.

## Process en 6 étapes

### 1. Comprendre le client
- Profession exacte (avocat affaires ≠ avocat famille)
- Cible (PME, particuliers, grands comptes)
- Positionnement (haut de gamme, accessible, militant, expert)
- Ville et culture locale
- Concurrents directs à différencier

### 2. Choisir une direction artistique
Voir `frontend-design.md` — luxe sobre / éditorial / géométrique / organique.

### 3. Générer la palette (5 couleurs max)
Toujours :
- 1 dominante forte
- 1 neutre clair (fond)
- 1 neutre foncé (texte)
- 1 accent (CTA, hover)
- Optionnel : 1 couleur secondaire pour sections

### 4. Choisir 2 typographies Google Fonts
- 1 display pour les titres (sérif marquée OU sans-serif géo OU humanist)
- 1 corps pour le texte courant
- Charger via `next/font/google` avec subsets et display swap

### 5. Définir la voix
- Tutoiement / vouvoiement (toujours **vous** pour pro libérale)
- Ton (formel, chaleureux, expert, didactique)
- Mots à utiliser / à bannir

### 6. Écrire BRAND.md
Format obligatoire ci-dessous.

## Palettes de référence par profession

### Avocats — variantes
| Variante | Dominante | Fond | Texte | Accent |
|---|---|---|---|---|
| Marine classique | #0A1F44 | #F5F1E8 | #1A1A1A | #C9A961 (or) |
| Bordeaux notaire | #5B1F2A | #FAF7F2 | #2A1A1A | #8B6F47 (bronze) |
| Vert anglais | #1F3A2E | #F2EFE8 | #1A1A1A | #B8956A (camel) |
| Noir éditorial | #0E0E0E | #FFFFFF | #0E0E0E | #C53030 (rouge) |

### Comptables / Audit
| Variante | Dominante | Fond | Texte | Accent |
|---|---|---|---|---|
| Bleu nuit | #1B2A4E | #ECEEF2 | #1A1A1A | #6B8E7F (sauge) |
| Bleu clair pro | #2C5F8D | #F4F7FA | #0F1B2D | #E8B547 (jaune) |
| Anthracite | #2A2D34 | #F0F0EE | #1A1A1A | #4A90A4 (bleu pétrole) |

### Notaires
| Variante | Dominante | Fond | Texte | Accent |
|---|---|---|---|---|
| Bordeaux institutionnel | #5B1F2A | #FAF6EE | #2A1A1A | #B8956A (camel) |
| Vert profond | #1A3D2E | #F2EFE8 | #1A1A1A | #C9A961 (or) |

### Médecins
| Variante | Dominante | Fond | Texte | Accent |
|---|---|---|---|---|
| Vert d'eau apaisant | #5A8E8E | #F8F9F6 | #1F2D2D | #B8D8C8 (menthe) |
| Bleu poudré | #6E8FA3 | #F5F7F9 | #1A2330 | #E8C7B8 (pêche) |
| Sauge naturel | #7A8B6F | #F4F2EC | #2A2E26 | #D4B896 (sable) |

## Pairings typographiques recommandés

| Direction | Display | Corps | Cas d'usage |
|---|---|---|---|
| Luxe sobre | Cormorant Garamond | Inter | Avocat affaires, notaire |
| Éditorial | Fraunces | Söhne / DM Sans | Cabinet conseil, expert |
| Géométrique | Space Grotesk | Inter | Comptable moderne, audit |
| Organique | Fraunces (soft) | DM Sans | Médecin, kiné, sage-femme |
| Brutaliste | Bricolage Grotesque | JetBrains Mono | Architecte avant-garde |
| Humanist clean | Söhne | Söhne | Conseil, neutre haut gamme |

## Template BRAND.md (à copier à la racine du projet)

```markdown
# BRAND — [Nom du cabinet]

## Identité
- **Profession** : [avocat affaires / notaire / etc.]
- **Cible** : [PME 5-50 salariés à Lyon, etc.]
- **Positionnement** : [haut de gamme / accessible / spécialiste niche]
- **Ville** : [Lyon, 2e arrondissement]

## Direction artistique
**[Luxe sobre / Éditorial / Géométrique / Organique]**
[3 phrases décrivant l'atmosphère visuelle visée]

## Palette
| Rôle | Hex | Usage |
|---|---|---|
| Dominante | #XXXXXX | Header, footer, accents forts |
| Fond | #XXXXXX | Background principal |
| Texte | #XXXXXX | Body text |
| Accent | #XXXXXX | CTA, hover, liens |
| Secondaire | #XXXXXX | Sections alternées |

Contraste vérifié : tous les couples texte/fond ≥ 4.5:1.

## Typographie
- **Display** : [Nom Google Font] — poids 400/600
- **Corps** : [Nom Google Font] — poids 400/500/600
- Échelle : `clamp(2.5rem, 5vw + 1rem, 5rem)` titres / 16-18px corps

## Voix
- Adresse : vous (toujours)
- Ton : [formel et rassurant / expert et direct / chaleureux et didactique]
- Mots favoris : [accompagner, défendre, structurer]
- Mots à éviter : [solution, leverage, disruptif, innovant]

## Photographie
[Style des photos : noir et blanc / couleur naturelle / retouche dans la palette]

## Inspirations (optionnel)
- [Lien vers 2-3 sites de référence pour le style]
```

## Checklist livrable
- [ ] BRAND.md existe à la racine
- [ ] Palette testée pour contraste WCAG AA
- [ ] Typos importables via next/font
- [ ] Direction artistique cohérente avec la profession
- [ ] Voix définie (au moins 3 mots favoris, 3 à éviter)
