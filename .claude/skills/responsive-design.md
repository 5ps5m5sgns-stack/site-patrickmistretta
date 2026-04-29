---
name: responsive-design
description: Implement modern responsive layouts using container queries, fluid typography, CSS Grid, and mobile-first breakpoint strategies. Use when building adaptive interfaces or creating component-level responsive behavior.
---

# Responsive Design

## When to Use
- Construire des layouts responsive mobile-first
- Implémenter du fluid typography avec clamp()
- Utiliser container queries pour des composants adaptatifs
- Définir des stratégies de breakpoints

## Breakpoints standards (Tailwind)
## Mobile-first toujours
```css
/* Écrire d'abord pour mobile, puis agrandir */
.hero {
  padding: 2rem 1rem;        /* mobile */
}
@media (min-width: 768px) {
  .hero {
    padding: 4rem 2rem;      /* tablette+ */
  }
}
```

## Fluid Typography avec clamp()
```css
/* Titre qui s'adapte fluidement entre 320px et 1280px */
.title {
  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);
}
.body {
  font-size: clamp(1rem, 1.5vw + 0.5rem, 1.125rem);
}
```

## CSS Grid responsive sans media query
```css
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

## Container Queries (moderne)
```css
.card-container {
  container-type: inline-size;
}
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
```

## Checklist responsive
- [ ] Navigation mobile avec hamburger menu
- [ ] Images fluides : `width: 100%; height: auto`
- [ ] Touch targets ≥ 44px sur mobile
- [ ] Pas de scroll horizontal sur mobile
- [ ] Texte lisible sans zoom sur mobile (min 16px)
- [ ] Tableaux : scroll horizontal ou stack sur mobile
