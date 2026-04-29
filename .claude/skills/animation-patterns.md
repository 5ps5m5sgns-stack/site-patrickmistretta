---
name: animation-patterns
description: Framer Motion patterns, page transitions, scroll animations, and micro-interactions for React. Use when implementing UI animations, entrance effects, or interactive motion design.
---

# Animation Patterns (Framer Motion)

## Quand utiliser
- Animations d'entrée de composants (fade, slide)
- Transitions entre pages
- Animations au scroll
- Micro-interactions (hover, focus, click)

## Principes
- Motion doit avoir un sens — révéler la hiérarchie, guider l'attention
- UN effet mémorable vaut mieux que vingt effets aléatoires
- Toujours respecter `prefers-reduced-motion`
- Durées courtes : 150-400ms pour UI, 600-800ms pour page

## Animations d'entrée

### Fade + Slide vers le haut (standard)
```tsx
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut' }
}

<motion.div {...fadeUp}>
  Contenu
</motion.div>
```

### Liste avec stagger (éléments décalés)
```tsx
const container = {
  animate: { transition: { staggerChildren: 0.1 } }
}
const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

<motion.ul variants={container} initial="initial" animate="animate">
  {items.map(i => (
    <motion.li key={i.id} variants={item}>{i.name}</motion.li>
  ))}
</motion.ul>
```

### Animation au scroll
```tsx
import { useInView } from 'framer-motion'
import { useRef } from 'react'

function AnimatedSection({ children }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

### Hover card
```tsx
<motion.div
  whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
  transition={{ duration: 0.2 }}
>
  Card content
</motion.div>
```

## Respecter prefers-reduced-motion
```tsx
import { useReducedMotion } from 'framer-motion'

function AnimatedHero() {
  const shouldReduce = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: shouldReduce ? 0 : 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduce ? 0.1 : 0.6 }}
    >
      Hero content
    </motion.div>
  )
}
```

## Anti-patterns
- Animations > 500ms sur les interactions UI
- Bounce excessif (spring mal calibré)
- Animations sur chaque élément = bruit visuel
- Oublier `prefers-reduced-motion`
