# SEO Strategy — Citizen Cooling Solutions Limited

This document is the SEO playbook for `citizencoolingsolutions.co.ke`. It covers
keyword research, on-page targeting, structured data, local SEO and the Google
Business Profile plan. Items marked **TODO/REPLACE** need the client's input.

---

## 1. Positioning & primary keyword themes

The site targets **B2B industrial buyers in Kenya** searching for repair services
and material supply. Three theme clusters:

| Cluster | Intent | Primary money pages |
|---|---|---|
| **Cooling repair** | "fix my radiator / cooler" | `/services/radiator-repair-fabrication`, `/oil-cooler-repair`, `/turbocharger-intercoolers` |
| **Power / rewinding** | "service my generator / rewind motor" | `/services/generator-repair-maintenance`, `/motor-rewinding`, `/generator-stator-rewinding` |
| **Materials supply** | "buy insulation / refractory in Kenya" | `/products`, `/products#thermal-insulation`, `/products#refractory-high-heat` |

### Flagship opportunity
`/services/tea-factory-dryer-radiators` — low competition, high intent, and backed
by real KTDA/Del Monte credibility. Treat as the priority page for link-building
and a future blog post ("How to cut tea-dryer fuel costs with a re-cored radiator").

---

## 2. Keyword research (target terms)

Grouped by page. Kenyan English + local modifiers ("Nairobi", "Kenya", "near me").
Validate volumes in Google Keyword Planner / Search Console once live.

### Radiator services
- radiator repair Nairobi · radiator re-coring Kenya · radiator fabrication Nairobi
- industrial radiator repair · truck radiator repair Nairobi · engine radiator recore
- oil cooler repair Kenya · heat exchanger repair Nairobi
- intercooler repair · charge air cooler repair Kenya · turbo intercooler recore

### Tea factory (flagship)
- tea factory dryer radiator · tea dryer heat exchanger repair · KTDA radiator repair
- tea factory radiator fabrication Kenya

### Generators & rewinding
- generator repair Nairobi · diesel generator maintenance Kenya · generator service contract
- generator spare parts Nairobi · generator filters Kenya
- electric motor rewinding Nairobi · motor rewind Kenya · three phase motor rewinding
- alternator stator rewinding · generator stator rewinding Kenya

### Materials (high commercial intent)
- insulation materials supplier Kenya · thermal insulation Nairobi
- rockwool Kenya · ceramic fiber blanket Nairobi · fiberglass insulation Kenya
- armaflex Kenya · calcium silicate board Kenya
- fire bricks Nairobi · refractory castable Kenya · refractory mortar · acid resistant bricks
- gland packing Kenya · PTFE packing · metallic steam gaskets · electrical rubber mats Kenya

### Long-tail / blog ideas (future content)
- "how to tell if a radiator needs re-coring"
- "rewind vs replace an electric motor — cost in Kenya"
- "choosing refractory bricks for a furnace lining"
- "generator preventive maintenance checklist"

---

## 3. On-page targeting (implemented)

- **Title templates** per page via `pageMeta()` → `"<Page> | Citizen Cooling Solutions"`.
- **Meta descriptions** — unique, benefit + location led, ≤ ~160 chars, on every route.
- **H1 per page** — one only, keyword-bearing (set in `PageHeader`).
- **Canonical URLs** — absolute, per page (`alternates.canonical`).
- **OpenGraph + Twitter** cards site-wide + generated OG image (`/opengraph-image`).
- **Descriptive `alt` text** on all images via `next/image`.
- **Internal links** — services ↔ industries ↔ products ↔ quote (see §6).
- **Clean URLs** — kebab-case, keyword-bearing slugs.

### Still to do
- [ ] Confirm `<title>` lengths render ≤ 60 chars in SERP (check Search Console).
- [ ] Add 1–2 contextual paragraphs of unique copy per product category (thin now).
- [ ] Launch a `/blog` or `/resources` section for the long-tail terms above.

---

## 4. Structured data (JSON-LD) — implemented

| Schema | Where | Helper |
|---|---|---|
| `LocalBusiness` / `ProfessionalService` (NAP, geo, hours, sameAs, offers) | site-wide | `organizationSchema` |
| `WebSite` | site-wide | `websiteSchema` |
| `BreadcrumbList` | every inner page | `breadcrumbSchema()` |
| `Service` | each `/services/[slug]` | `serviceSchema()` |
| `FAQPage` | service pages + `/faqs` | `faqSchema()` |
| `ItemList` | services / industries indexes | `itemListSchema()` |

**Validate** with the [Rich Results Test](https://search.google.com/test/rich-results)
and [Schema Markup Validator](https://validator.schema.org/) after deploy.

> ⚠️ **Do not** add `AggregateRating`/`Review` markup until there are **real,
> verifiable reviews**. A `reviewSchema()` helper exists but is intentionally
> **not wired in** — fabricated review stars violate Google's guidelines and risk a
> manual action. Wire it only when genuine testimonials (with names) are collected.

### TODO
- [ ] **Confirm exact GPS** for the Jogoo Road workshop and update `geo` in
  `src/lib/seo.tsx` (currently approximate Nairobi coordinates).
- [ ] Add real **`sameAs`** social URLs in `company.social` (`src/lib/site.ts`).

---

## 5. Local SEO strategy (Kenya / Nairobi)

Local search is the highest-ROI channel for this business. Priorities:

1. **NAP consistency** — Name, Address, Phone identical everywhere (site footer,
   GBP, directories). Canonical format:
   - Name: **Citizen Cooling Solutions Limited**
   - Address: **Jogoo Road, Nairobi, Kenya** *(TODO: full street address + building)*
   - Phone: **+254 721 670960** (primary), +254 722 370891
2. **Google Business Profile** — see §7 (single biggest local ranking factor).
3. **Local citations / directories** — list consistently on:
   - Google Business Profile, Bing Places
   - Yellow Pages Kenya, BusinessList.co.ke, PigiaMe, Jumia/Kenya business directories
   - Industry/B2B directories (engineering, manufacturing suppliers)
4. **Location signals on-site** — "Nairobi / Jogoo Road / Kenya" in titles, H1s,
   footer, embedded Google Map (already on `/contact`), and `LocalBusiness` geo.
5. **Service-area content** — consider short sections/pages for key counties or
   industrial zones served (Industrial Area, Thika Road, Mombasa Road) once
   confirmed.
6. **Reviews** — actively request Google reviews from satisfied clients; respond to
   all. (Then, and only then, surface ratings on-site.)

---

## 6. Internal linking map (implemented)

```
Home ── Services index ── Service detail ──► Request Quote
  │         │                  ├─► Related services
  │         │                  └─► Industries served
  │     Products index ──► Request Quote
  │     Industries index ── Industry detail ──► Recommended services
  │     Projects ─► Request Quote
  └─ Header/Footer link to every top-level section + legal + FAQs
```

- Every **service** links to its related services + the industries it serves.
- Every **industry** links to its recommended services.
- **CTABand** (Request Quote / WhatsApp / Call) repeats on every page.
- Footer carries the full sitemap + legal pages for crawl depth.

**Improve:** add contextual in-body links (e.g. service copy linking the relevant
product category, and vice-versa) to strengthen topical clusters.

---

## 7. Google Business Profile (GBP) — action plan

GBP is the #1 local ranking lever. Recommended setup:

1. **Create/claim** the profile at business.google.com for "Citizen Cooling
   Solutions Limited".
2. **Primary category:** *Radiator shop* or *Engineering services* (test which ranks).
   **Additional categories:** Generator shop, Repair service, Insulation materials
   store, Electric motor repair shop.
3. **Verify** the Jogoo Road address (postcard/phone/video as offered).
4. **NAP** exactly matching the site footer (see §5).
5. **Hours:** Mon–Sat 08:00–17:00 (matches site).
6. **Services** — add each of the 8 services with descriptions (reuse site copy).
7. **Products** — add key materials (rockwool, ceramic fibre, fire bricks, etc.).
8. **Photos** — upload the real workshop photos (radiators, cores, intercoolers)
   already in `public/images/` + exterior/team shots. Geotag if possible.
9. **Website link** → `https://citizencoolingsolutions.co.ke`.
10. **Posts** — publish offers/updates monthly (e.g. "Tea season radiator re-cores —
    book early").
11. **Reviews** — request from clients (Del Monte, KTDA factories, transport firms),
    reply to each. Add a short "leave us a review" link to email signatures/invoices.
12. **Q&A** — seed common questions (turnaround, areas served, materials stocked).

---

## 8. Technical SEO checklist

- [x] `robots.txt` (allows all, references sitemap) — `app/robots.ts`
- [x] `sitemap.xml` (all static + dynamic routes) — `app/sitemap.ts`
- [x] `metadataBase` set for absolute URLs
- [x] Mobile-first responsive, fast (Next.js static export, `next/image`)
- [x] HTTPS (enforce on host)
- [x] Semantic HTML, skip-link, keyboard nav, descriptive alts (a11y ⇒ SEO)
- [ ] **Submit sitemap** in Google Search Console + Bing Webmaster Tools after deploy
- [ ] Add **Search Console verification** token (DNS TXT or `verification` in metadata)
- [ ] Set up **GA4** (or privacy-friendly analytics) to track conversions
- [ ] Run **Lighthouse / PageSpeed** post-deploy (target 100s — Phase 5)
- [ ] Confirm **canonical host** (www vs non-www) and 301 the other

---

## 9. Measurement

Track in Search Console / analytics:
- Impressions & clicks for the keyword clusters in §2
- Rankings for flagship terms ("tea factory dryer radiator", "radiator repair Nairobi")
- GBP: calls, direction requests, website clicks, review count & rating
- On-site conversions: quote-form submissions + WhatsApp click-throughs

---

*Last updated by the build. Keep this in sync with `src/lib/seo.tsx` and
`src/lib/site.ts`.*
