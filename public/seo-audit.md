# Audit SEO — L-BOOST DigitalWeb
**Date :** 17 avril 2026
**Site :** https://lboost-digitalweb.fr
**Agence :** L-BOOST DIGITALWEB — Troyes (10000), Aube, Grand Est

---

## Score Global : 34 / 100

---

## 1. Audit Technique

| Point | Statut | Priorité |
|---|---|---|
| `<title>` présent dans layout | ✅ Présent | — |
| Meta description présente | ⚠️ Trop générique, pas de "Troyes" | HAUTE |
| Balises Open Graph complètes | ⚠️ Image OG = Unsplash non branded | HAUTE |
| Twitter Card | ✅ Présent | — |
| Balise canonical par page | ❌ Absente | HAUTE |
| `robots.txt` dans /public | ❌ Absent | HAUTE |
| `sitemap.xml` | ❌ Absent | HAUTE |
| H1 unique par page | ⚠️ H1 présent mais sans "Troyes" | HAUTE |
| Hiérarchie H1 > H2 > H3 | ✅ Respectée | — |
| Images avec alt descriptif | ⚠️ Partiellement (Unsplash sans alt local) | MOYENNE |
| `lang="fr"` sur `<html>` | ✅ Présent | — |
| Favicon configuré | ❌ Absent dans /public | HAUTE |
| Schema.org JSON-LD | ❌ Absent | HAUTE |
| Core Web Vitals (code) | ✅ next/font, next/image utilisés | — |
| next/image pour toutes les images | ✅ Oui | — |
| compress: true dans next.config.js | ❌ Absent | MOYENNE |

**Score technique : 14/30**

---

## 2. Audit SEO Local Troyes

| Point | Statut | Priorité |
|---|---|---|
| "Troyes" dans titre et description | ❌ Absent | CRITIQUE |
| Schema.org LocalBusiness Troyes | ❌ Absent | CRITIQUE |
| Page GBP mentionnée | ❌ Absente | HAUTE |
| Contenu géolocalisé homepage | ❌ Absent | CRITIQUE |
| Mots-clés locaux dans le contenu | ❌ Quasi-absent | CRITIQUE |
| Balises geo meta (geo.region, geo.placename) | ❌ Absentes | HAUTE |

**Score SEO local : 0/25**

---

## 3. Audit Contenu

| Point | Statut | Priorité |
|---|---|---|
| Page blog existante | ❌ Absente | HAUTE |
| Densité mots-clés principaux | ❌ Aucun mot-clé local | CRITIQUE |
| Liens internes entre pages | ⚠️ Minimal (walkin seulement) | MOYENNE |
| Textes d'ancres des liens | ⚠️ Génériques | MOYENNE |
| Articles de contenu | ❌ Absents | HAUTE |
| Section locale sur homepage | ❌ Absente | HAUTE |

**Score contenu : 5/20**

---

## 4. Performance

| Point | Statut |
|---|---|
| next/font/google | ✅ Playfair + Inter avec display: swap |
| next/image avec lazy loading | ✅ Utilisé |
| compress: true | ❌ Manquant |
| Priority sur hero image | ✅ Framer Motion, pas d'image hero |

**Score performance : 15/25**

---

## Corrections Priorisées

### 🔴 CRITIQUE (impact immédiat sur Google)
1. Ajouter "Troyes" + "Aube" dans title, description, H1
2. Créer `public/robots.txt`
3. Créer `app/sitemap.ts`
4. Créer `components/SchemaOrg.tsx` (LocalBusiness JSON-LD)
5. Ajouter balises geo meta dans layout.tsx
6. Ajouter canonical sur chaque page

### 🟠 HAUTE (boost SEO significatif)
7. Modifier metadata layout.tsx avec mots-clés Troyes
8. Ajouter metadata page walkin (aucune actuellement)
9. Créer section "Agence Web à Troyes" sur homepage
10. Créer blog avec 3 articles SEO local
11. Favicon dans /public

### 🟡 MOYENNE (optimisation)
12. compress: true dans next.config.js
13. Schema.org Article sur chaque article de blog
14. FAQ Schema.org (rich snippets)
15. Améliorer alt des images avec mots-clés locaux
16. Liens internes renforcés

---

*Corrections appliquées automatiquement — voir commits suivants.*
