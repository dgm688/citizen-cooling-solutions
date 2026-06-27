# SEO Strategy — Citizen Cooling Solutions Limited

Master SEO playbook for **citizencoolingsolutions.co.ke**. Complements the
implementation in `src/lib/seo.tsx`, `src/app/layout.tsx`, `sitemap.ts`,
`robots.ts` and `manifest.ts`. Items marked **TODO/REPLACE** need client input.

> **Honesty rules (enforced in code):** never publish fake reviews, ratings,
> prices, or services the company does not offer. A `reviewSchema()` helper exists
> but is intentionally **not wired** until real, named reviews are collected.
> "Cooling tower services" and the competitor brand "Kenworks Ventures" are **not**
> targeted on-page (not offered / not our brand) — see §2 notes.

---

## 1. Business & search positioning

B2B industrial buyers in Kenya (factory/procurement/maintenance managers,
engineers) searching for **repair services** and **material supply**. Two revenue
engines: (a) cooling/power **repair services**, (b) insulation/refractory **supply**.

**Primary city:** Nairobi (Jogoo Road). **Service area:** all of Kenya.

---

## 2. Keyword research — Top 100 target keywords

Grouped by cluster. Validate volume/difficulty in Google Keyword Planner + Search
Console after launch. **P** = priority (1 highest).

### Cluster A — Radiator & cooling repair (P1)
1. radiator repair Nairobi
2. radiator repair Kenya
3. industrial radiator repairs Nairobi
4. radiator re-coring Kenya
5. radiator fabrication Kenya
6. custom radiator fabrication Nairobi
7. truck radiator repair Nairobi
8. engine radiator recore Kenya
9. industrial radiator repair Kenya
10. generator radiator repair Nairobi
11. heat exchanger repairs Kenya
12. industrial heat exchangers Kenya
13. heat exchanger fabrication Nairobi
14. oil cooler repairs Kenya
15. oil cooler repair Nairobi
16. intercooler repairs Kenya
17. turbo intercooler recore Kenya
18. charge air cooler repair Nairobi
19. radiator pressure testing Kenya
20. aluminium radiator repair Nairobi
21. copper brass radiator repair Kenya
22. plant radiator repair Kenya
23. industrial cooling systems Kenya
24. cooling solutions Kenya
25. industrial cooling Nairobi

### Cluster B — Tea factory (flagship, P1)
26. tea factory radiator repairs
27. tea factory dryer radiator
28. tea dryer heat exchanger repair
29. KTDA radiator repair
30. tea factory radiator fabrication Kenya
31. tea dryer radiator re-core
32. tea processing cooling Kenya

### Cluster C — Generators & rewinding (P1–P2)
33. generator repair Nairobi
34. diesel generator maintenance Kenya
35. generator cooling systems Kenya
36. generator service contract Kenya
37. generator preventive maintenance Nairobi
38. generator overhaul Kenya
39. generator spare parts Nairobi
40. generator filters Kenya
41. generator radiator repair Kenya
42. electric motor rewinding Nairobi
43. motor rewinding Kenya
44. three phase motor rewinding Kenya
45. electric motor repair Nairobi
46. alternator stator rewinding
47. generator stator rewinding Kenya
48. alternator rewinding Nairobi
49. motor reconditioning Kenya

### Cluster D — Insulation supply (P1, high commercial intent)
50. industrial insulation Kenya
51. thermal insulation Kenya
52. thermal insulation Nairobi
53. insulation materials supplier Kenya
54. rockwool suppliers Kenya
55. rockwool Nairobi
56. ceramic fibre Kenya
57. ceramic fiber blanket Nairobi
58. ceramic fiber board Kenya
59. ceramic fiber rope Kenya
60. fiberglass insulation Kenya
61. fibreglass insulation Nairobi
62. armaflex Kenya
63. armaflex insulation Nairobi
64. calcium silicate board Kenya
65. polyethylene roof insulation Kenya
66. styrofoam insulation Kenya
67. acoustic insulation Kenya
68. vermiculite Kenya
69. boiler insulation Kenya
70. pipe lagging Kenya
71. duct insulation Nairobi
72. aluminium foil tape Kenya
73. thermal tape Kenya

### Cluster E — Refractory supply (P2)
74. refractory installation Kenya
75. refractory materials Nairobi
76. refractory castable Kenya
77. refractory cement Kenya
78. refractory mortar Kenya
79. fire bricks Kenya
80. fire bricks Nairobi
81. insulating bricks Kenya
82. acid resistant bricks Kenya
83. furnace lining materials Kenya
84. kiln refractory Kenya

### Cluster F — Sealing & gaskets (P3)
85. gland packing Kenya
86. PTFE packing Kenya
87. kevlar packing Kenya
88. metallic steam gaskets Kenya
89. boiler gaskets Kenya
90. industrial sealants Kenya
91. electrical rubber mats Kenya

### Cluster G — Brand & navigational (P2)
92. Citizen Cooling Solutions
93. Citizen Cooling Solutions Limited
94. Citizen Cooling Nairobi
95. cooling company Jogoo Road
96. industrial engineering Nairobi
97. radiator shop Nairobi
98. insulation shop Nairobi
99. generator shop Nairobi
100. electric motor repair shop Nairobi

> **Excluded on purpose:** "cooling tower services" (not a confirmed service) and
> "Kenworks Ventures" (separate company / not our brand). Add only if the business
> confirms it offers them or has a stated relationship.

---

## 3. Page targeting map (one primary intent per URL)

| URL | Primary keyword | Secondary |
|---|---|---|
| `/` | industrial cooling systems Kenya | cooling solutions Kenya |
| `/services` | industrial cooling & power services Kenya | — |
| `/services/radiator-repair-fabrication` | radiator repair Nairobi | radiator fabrication, re-coring |
| `/services/oil-cooler-repair` | oil cooler repairs Kenya | heat exchanger repair |
| `/services/turbocharger-intercoolers` | intercooler repairs Kenya | charge air cooler |
| `/services/tea-factory-dryer-radiators` | tea factory radiator repairs | KTDA, tea dryer heat exchanger |
| `/services/generator-repair-maintenance` | generator repair Nairobi | diesel genset maintenance |
| `/services/generator-filters-spares` | generator spare parts Nairobi | generator filters Kenya |
| `/services/motor-rewinding` | electric motor rewinding Nairobi | three phase motor |
| `/services/generator-stator-rewinding` | generator stator rewinding Kenya | alternator rewinding |
| `/products` | insulation materials supplier Kenya | refractory materials |
| `/products#thermal-insulation` | thermal insulation Kenya | rockwool, fibreglass |
| `/products#refractory-high-heat` | refractory materials Nairobi | fire bricks |
| `/industries/tea-factories` | tea factory radiator repairs | — |
| `/industries/hospitals` | hospital generator maintenance Kenya | standby power |
| `/contact` | radiator repair Nairobi contact | Jogoo Road |
| `/request-quote` | radiator repair quote Nairobi | — |

---

## 4. Schema inventory (implemented)

| Schema | Where | Helper |
|---|---|---|
| LocalBusiness + ProfessionalService | site-wide | `organizationSchema` |
| WebSite | site-wide | `websiteSchema` |
| WebPage | home, service & industry detail | `webPageSchema()` |
| CollectionPage | products | `collectionPageSchema()` |
| ItemList (services/industries) | indexes | `itemListSchema()` |
| ItemList of Product (no price/review) | products | `productCollectionSchema()` |
| ImageGallery / ImageObject | gallery | `imageGallerySchema()` |
| ContactPage + ContactPoint | contact | `contactPageSchema` + org `contactPoint` |
| Service | each service | `serviceSchema()` |
| FAQPage | services + `/faqs` | `faqSchema()` |
| BreadcrumbList | every inner page | `breadcrumbSchema()` |
| PostalAddress + GeoCoordinates | in LocalBusiness | — |

**Deliberately omitted:** `SearchAction` (no on-site search — adding it without a
working search endpoint is misleading); `Review`/`AggregateRating` (no real
reviews yet); `VideoObject` (no video assets).

**Validate after deploy:** [Rich Results Test](https://search.google.com/test/rich-results),
[Schema validator](https://validator.schema.org/).

**TODO:** confirm exact GPS (`geo` in `seo.tsx`) and real `sameAs` social URLs
(`company.social` in `site.ts`).

---

## 5. Internal linking map

```
Global (header + footer): every top-level page + legal + FAQs + quote
Home ─► Services, Products, Industries, Gallery, Projects, Contact, Quote
Services index ─► each Service detail
Service detail ─► related services + industries served + Request Quote
Industries index ─► each Industry detail
Industry detail ─► recommended services + Request Quote
Products ─► category anchors + Request Quote
CTABand (every page) ─► Request Quote + WhatsApp + Call
```

**Enhancement backlog:**
- Add in-body links from each service to the relevant **product category**
  (e.g. tea-dryer radiators → ceramic-fibre / refractory) and back.
- Add "related industries" chips on the home services section.
- Once a blog exists, link posts ↔ money pages (topic clusters, §7).

---

## 6. Competitor analysis (framework — populate after research)

| Competitor type | Examples (TODO: identify) | Opportunity |
|---|---|---|
| Informal radiator workshops | local "jua kali" shops | Out-professionalise: schema, photos, quotes |
| Insulation/refractory suppliers | e.g. Kenworks Ventures & others | Compete on combined repair + supply, tea-factory niche |
| Multinationals | — | Win on local turnaround, price, accessibility (WhatsApp) |

**Keyword-gap actions:** export competitor ranking keywords (Ahrefs/SEMrush free
tiers or manual SERP review) for clusters A–E; prioritise terms where competitors
rank 4–15 (achievable) and intent is commercial.

---

## 7. Content roadmap

### Pillar pages (broad, authoritative)
- **Industrial Cooling & Power Services** (`/services`) — links all service pages.
- **Insulation & Refractory Materials** (`/products`) — links all categories.

### Supporting pages (exist) — each service & industry page.

### Topic clusters (future `/resources` or `/blog`)
- **Radiators:** "When to re-core vs replace a radiator", "Signs your industrial
  radiator is failing", "Tea-dryer radiator maintenance for the season".
- **Generators:** "Generator preventive-maintenance checklist", "Rewind vs replace
  a stator — cost in Kenya".
- **Insulation:** "Choosing refractory bricks for a furnace lining", "Rockwool vs
  ceramic fibre vs calcium silicate", "How to cut boiler heat loss".

### Location-page strategy (only if truthful demand exists)
- Consider light service-area sections for **Industrial Area, Mombasa Road, Thika
  Road**, and key industrial counties — but only with unique copy and genuine
  service capability. Avoid thin doorway pages.

### Featured-snippet & FAQ opportunities
- Target "how to / vs / cost" queries with concise 40–55-word answers + `FAQPage`.
- Existing FAQs already markup; expand with: "How much does radiator re-coring
  cost?" (range, no fake fixed price), "How long does a stator rewind take?",
  "Do you deliver insulation outside Nairobi?".

---

## 8. Local SEO (Kenya / Nairobi)

1. **NAP consistency** everywhere (site footer, GBP, directories):
   - **Citizen Cooling Solutions Limited** · Jogoo Road, Nairobi, Kenya ·
     +254 721 670960 / +254 722 370891
2. **Google Business Profile** — §9.
3. **Citations:** Google Business, Bing Places, Yellow Pages Kenya,
   BusinessList.co.ke, PigiaMe, Jiji, industry/B2B directories — identical NAP.
4. **On-site signals:** city/area in titles, H1s, footer, embedded map (`/contact`),
   `LocalBusiness` geo. ✅ implemented.
5. **Reviews:** request from real clients; respond to all; only then surface ratings.

---

## 9. Google Business Profile — implementation guide

1. **Claim/verify** "Citizen Cooling Solutions Limited" (business.google.com).
2. **Primary category:** *Radiator shop* OR *Engineering services* (A/B test).
   **Secondary:** Generator shop, Electric motor repair shop, Insulation materials
   store, Repair service.
3. **NAP** exactly matching site footer.
4. **Hours:** Mon–Sat 08:00–17:00.
5. **Services:** add all 8 with descriptions (reuse site copy).
6. **Products:** add key materials (rockwool, ceramic fibre, fire bricks, etc.).
7. **Photos:** upload the real workshop photos in `public/images/` + exterior, team,
   signage. Add weekly.
8. **Website:** link `https://citizencoolingsolutions.co.ke`.
9. **Posts:** monthly offers/updates (e.g. "Tea-season radiator re-cores — book early").
10. **Reviews:** request from Del Monte / KTDA / transport clients; reply to each;
    add a review link to email signatures & invoices.
11. **Q&A:** seed turnaround, areas served, materials stocked.
12. **Maps optimisation:** accurate pin, service-area set to Kenya, embed on
    `/contact` (done).

---

## 10. Technical SEO checklist

- [x] `robots.txt` + XML `sitemap.xml` (static + dynamic routes)
- [x] `metadataBase`, per-page canonical, OG + Twitter, keywords, author/publisher
- [x] Web app manifest + PWA icons (192/512/maskable) + apple-icon + favicon
- [x] Security headers (HSTS, nosniff, frame, referrer, permissions) — `next.config.ts`
- [x] Immutable caching for `/images`; `compress`; `poweredByHeader: false`
- [x] `not-found.tsx` (404) + `global-error.tsx` (500)
- [x] `lang="en-KE"`, semantic HTML, skip-link, descriptive alts, focus states
- [x] `next/image` (AVIF/WebP, responsive, lazy, priority only on LCP image)
- [ ] **Submit sitemap** to Google Search Console + Bing Webmaster Tools (post-deploy)
- [ ] Add **Search Console verification** (DNS TXT or `verification` in metadata)
- [ ] Confirm **canonical host** (www vs non-www) + 301 the other (host config)
- [ ] Set up **GA4** / privacy-friendly analytics + conversion events
- [ ] Run **Lighthouse / PageSpeed Insights** on the deployed URL

---

## 11. Launch checklist

- [ ] Replace placeholder content (founding year, certifications, real testimonials)
- [ ] Confirm exact **GPS** + real **social URLs**
- [ ] Swap any remaining stock images for owned photography (marked `// stock`)
- [ ] Deploy on HTTPS; verify security headers live
- [ ] Submit sitemap; request indexing of money pages
- [ ] Create + verify Google Business Profile
- [ ] Validate all rich results; fix warnings
- [ ] Baseline Lighthouse + Core Web Vitals

---

## 12. Monthly SEO checklist

- [ ] Search Console: review queries, CTR, coverage errors, Core Web Vitals
- [ ] Publish 1–2 cluster articles; refresh 1 existing page
- [ ] GBP: 2–4 posts, reply to all reviews, add new photos
- [ ] Build 2–3 new local citations / backlinks
- [ ] Track rankings for flagship terms (tea-factory radiator, radiator repair Nairobi)

## 13. Quarterly roadmap

- **Q1:** Launch GBP + citations; baseline rankings; publish radiator cluster.
- **Q2:** Generator + insulation clusters; outreach to industry directories/suppliers.
- **Q3:** Location/service-area content (if justified); case studies with real photos.
- **Q4:** Conversion-rate optimisation; review velocity push; refresh top pages.

---

*Keep this in sync with `src/lib/seo.tsx` and `src/lib/site.ts`. Companion file:
`docs/SEO.md` (original Phase-4 notes).*
