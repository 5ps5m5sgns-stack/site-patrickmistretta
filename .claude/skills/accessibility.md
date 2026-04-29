---
name: accessibility
description: Design, implement, and audit inclusive digital products using WCAG 2.2 Level AA standards. Use for semantic HTML, ARIA, keyboard navigation, color contrast, and screen reader support.
---

# Accessibility (WCAG 2.2)

## When to Use
- Définir les specs UI de composants web
- Auditer du code existant pour les barrières d'accessibilité
- Implémenter les standards WCAG 2.2 (Target Size, Focus Appearance)

## Core Rules

### Perceivable
- Contraste texte : minimum 4.5:1 (normal) ou 3:1 (grand/UI)
- Alternatives texte pour images, icônes
- Reflow responsive jusqu'à 400% zoom

### Operable
- Taille cible minimum : 24x24px CSS (WCAG 2.2 SC 2.5.8)
- Tous les éléments interactifs accessibles au clavier
- Indicateur de focus visible et contrasté

### Understandable
- Navigation cohérente
- Messages d'erreur descriptifs avec suggestion de correction
- Pas de saisie redondante pour l'utilisateur

### Robust
- Patterns corrects Name/Role/Value
- aria-live pour les mises à jour dynamiques

## Checklist rapide
- [ ] Éléments interactifs ≥ 24×24px
- [ ] Focus indicators visibles et contrastés
- [ ] Modales : focus contenu + Escape pour fermer
- [ ] Formulaires : erreurs textuelles avec suggestion
- [ ] Boutons icônes : aria-label descriptif
- [ ] Images décoratives : alt=""
- [ ] Images informatives : alt descriptif

## Exemples

### Formulaire accessible
```html
<form role="search">
  <label for="search-input" class="sr-only">Rechercher</label>
  <input type="search" id="search-input" placeholder="Votre recherche..." />
  <button type="submit" aria-label="Lancer la recherche">
    <svg aria-hidden="true">...</svg>
  </button>
</form>
```

### Anti-patterns à éviter
- `<div>` cliquable sans `role="button"` et `tabindex="0"`
- Erreur indiquée uniquement par couleur (rouge) sans texte
- Modal qui ne piège pas le focus
- Alt text "Image de..." (redondant)
