---
name: seo
description: Audit, plan, and implement SEO improvements across technical SEO, on-page optimization, structured data, Core Web Vitals, and content strategy. Use when the user wants better search visibility, SEO remediation, schema markup, sitemap/robots work, or keyword mapping.
---

# SEO
Improve search visibility through technical correctness, performance, and content relevance — not gimmicks.

## When to Use
- Auditing crawlability, indexability, canonicals, or redirects
- Improving title tags, meta descriptions, and heading structure
- Adding or validating structured data (Schema.org)
- Improving Core Web Vitals
- Planning internal linking or sitemap/robots changes

## Technical SEO Checklist

### Crawlability
- robots.txt should allow important pages and block low-value surfaces
- No important page should be unintentionally noindex
- Important pages reachable within shallow click depth
- Avoid redirect chains longer than two hops

### Performance targets
- LCP < 2.5s
- INP < 200ms
- CLS < 0.1
- Common fixes: preload hero assets, reduce render-blocking JS, reserve layout space

### Structured Data by profession
- Avocats : `LegalService` + `LocalBusiness`
- Comptables : `AccountingService` + `LocalBusiness`
- Médecins : `MedicalBusiness` + `Physician`
- Toutes pages : `BreadcrumbList`, `FAQPage` si section FAQ

### On-page rules
- Title : 50-60 caractères, mot-clé principal en premier, brand à la fin
- Meta description : 120-160 caractères, honnête, inclut le sujet naturellement
- Un seul H1 clair par page
- H2/H3 reflètent la vraie hiérarchie de contenu

## JSON-LD exemple avocat
```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Cabinet Martin & Associés",
  "description": "Cabinet d'avocats spécialisé en droit des affaires à Lyon",
  "url": "https://cabinet-martin.fr",
  "telephone": "+33-4-XX-XX-XX-XX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10 rue de la République",
    "addressLocality": "Lyon",
    "postalCode": "69001",
    "addressCountry": "FR"
  }
}
```

## Anti-Patterns
| Anti-pattern | Fix |
|---|---|
| Keyword stuffing | Écrire pour les humains d'abord |
| Pages thin sans contenu | Consolider ou différencier |
| Schema pour contenu absent | Schema = réalité de la page |
| "Améliore le SEO" générique | Chaque recommandation = page spécifique |
